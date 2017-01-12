using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Tania_QueryCube
{
    public partial class Form1 : Form
    {
        DataSet formsDataSet = new DataSet();

        public Form1()
        {
            InitializeComponent();
            dataGridView1.Anchor = (AnchorStyles.Top | AnchorStyles.Right | AnchorStyles.Left | AnchorStyles.Bottom);  
        }

        private void button1_Click(object sender, EventArgs e)
        {

            ReadCube myCubeReader = new ReadCube();
            try
            {
                formsDataSet = myCubeReader.GetData(1);
            }
            catch (Exception ex)
            {
                messageLabel.Text = ex.Message;
            }
            dataGridView1.DataSource = formsDataSet;
            dataGridView1.DataMember = "CubeData";
            dataGridView1.AutoResizeColumns();
            
        }

        private void button2_Click(object sender, EventArgs e)
        {

            ReadCube myCubeReader = new ReadCube();
            try
            {
                formsDataSet = myCubeReader.GetData(2);
            }
            catch (Exception ex)
            {
                messageLabel.Text = ex.Message;
            }
            dataGridView1.DataSource = formsDataSet;
            dataGridView1.DataMember = "CubeData";
            dataGridView1.AutoResizeColumns();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            ReadCube myCubeReader = new ReadCube();
            try
            {
                formsDataSet = myCubeReader.GetData(3);
            }
            catch (Exception ex)
            {
                messageLabel.Text = ex.Message;
            }
            dataGridView1.DataSource = formsDataSet;
            dataGridView1.DataMember = "CubeData";
            dataGridView1.AutoResizeColumns();
        }
    }
}
