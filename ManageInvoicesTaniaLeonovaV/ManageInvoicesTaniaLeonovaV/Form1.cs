using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace ManageInvoicesTaniaLeonovaV
{
    public partial class Form1 : Form
    {
        PayablesEntities myPayable = new PayablesEntities();
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            comboBoxVendor.DataSource = myPayable.Vendors.ToList();
            comboBoxVendor.DisplayMember = "Name";
            comboBoxVendor.ValueMember = "VendorID";
        }

        private void buttonGetVendor_Click(object sender, EventArgs e)
        {
            int vendorID = (int)comboBoxVendor.SelectedValue;

            var vendorName =
                (from Vendors in myPayable.Vendors
                 where Vendors.VendorID == vendorID
                 orderby Vendors.VendorID
                 select Vendors.Name).Max();

            labelName2.Text = vendorName.ToString();

            var vendorCity =
              (from Vendors in myPayable.Vendors
               where Vendors.VendorID == vendorID
               orderby Vendors.VendorID
               select Vendors.City).Max();
            labelCity2.Text = vendorCity;

            var vendorZip =
            (from Vendors in myPayable.Vendors
             where Vendors.VendorID == vendorID
             orderby Vendors.VendorID
             select Vendors.ZipCode).Max();

            labelZip2.Text = vendorZip;

            var vendorInvoice =
                from Invoices in myPayable.Invoices
                where Invoices.VendorID == vendorID
                orderby Invoices.VendorID
                select new { Invoices.InvoiceID, Invoices.InvoiceNumber, Invoices.InvoiceTotal };

            dataGridViewVendors.DataSource = vendorInvoice.ToList();

            labelName.Visible = true;
            labelCity.Visible = true;
            labelZip.Visible = true;
            dataGridViewVendors.Visible = true;
            labelName2.Visible = true;
            labelCity2.Visible = true;
            labelZip2.Visible = true;

            if (vendorInvoice.ToList().Count() > 0)
            {
                label2.Visible = true;
                buttonLineItems.Visible = true;
            }
            else
            {
                label2.Visible = false;
                buttonLineItems.Visible = false;
            }

            dataGridViewLineItems.Visible = false;
            textBoxMoney.Visible = false;
            buttonPayment.Visible = false;
        }

        private void buttonLineItems_Click(object sender, EventArgs e)
        {
            var lineItemID = Convert.ToInt32(dataGridViewVendors.CurrentCell.Value.ToString());
            var invoiceLineItem =
                from InvoiceLineItems in myPayable.InvoiceLineItems
                where InvoiceLineItems.InvoiceID == lineItemID
                orderby InvoiceLineItems.InvoiceID
                select new { InvoiceLineItems.InvoiceSequence, InvoiceLineItems.Description, InvoiceLineItems.Amount };
            dataGridViewLineItems.DataSource = invoiceLineItem.ToList();

            dataGridViewLineItems.Visible = true;
            textBoxMoney.Visible = true;
            buttonPayment.Visible = true;
        }

        private void buttonPayment_Click(object sender, EventArgs e)
        {
            int invoiceID, lineItemID;
            decimal moneyEntered;
            try
            {
                invoiceID = Convert.ToInt32(dataGridViewVendors.CurrentCell.Value);
                lineItemID = Convert.ToInt32(dataGridViewLineItems.CurrentCell.Value);
                // var lineItemID = Convert.ToInt32(dataGridViewLineItems.CurrentCell.Value); 
                moneyEntered = Convert.ToDecimal(textBoxMoney.Text);
            }
            catch (System.FormatException)
            {
                MessageBox.Show("Make sure you entered decimal number, and you have selected proper cells in data grids.");
                return;
            }

            var invoiceLine =
            (
                from InvoiceLineItems in myPayable.InvoiceLineItems
                where InvoiceLineItems.InvoiceID == invoiceID && InvoiceLineItems.InvoiceSequence == lineItemID
                select InvoiceLineItems).Single();

            if (invoiceLine.Amount < moneyEntered)
            {
                MessageBox.Show("Please enter amount not larger than you own.");
                return;
            }

            invoiceLine.Amount -= moneyEntered;
            myPayable.SaveChanges();
            dataGridViewLineItems.Visible = false;
            textBoxMoney.Clear();

        }
    }
}
