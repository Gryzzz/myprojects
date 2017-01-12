namespace ManageInvoicesTaniaLeonovaV
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.comboBoxVendor = new System.Windows.Forms.ComboBox();
            this.label1 = new System.Windows.Forms.Label();
            this.labelName = new System.Windows.Forms.Label();
            this.labelCity = new System.Windows.Forms.Label();
            this.labelZip = new System.Windows.Forms.Label();
            this.dataGridViewVendors = new System.Windows.Forms.DataGridView();
            this.buttonGetVendor = new System.Windows.Forms.Button();
            this.labelName2 = new System.Windows.Forms.Label();
            this.labelCity2 = new System.Windows.Forms.Label();
            this.labelZip2 = new System.Windows.Forms.Label();
            this.dataGridViewLineItems = new System.Windows.Forms.DataGridView();
            this.buttonLineItems = new System.Windows.Forms.Button();
            this.label2 = new System.Windows.Forms.Label();
            this.textBoxMoney = new System.Windows.Forms.TextBox();
            this.buttonPayment = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewVendors)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewLineItems)).BeginInit();
            this.SuspendLayout();
            // 
            // comboBoxVendor
            // 
            this.comboBoxVendor.FormattingEnabled = true;
            this.comboBoxVendor.Location = new System.Drawing.Point(95, 99);
            this.comboBoxVendor.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.comboBoxVendor.Name = "comboBoxVendor";
            this.comboBoxVendor.Size = new System.Drawing.Size(330, 29);
            this.comboBoxVendor.TabIndex = 0;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(90, 38);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(240, 21);
            this.label1.TabIndex = 1;
            this.label1.Text = "Select a vendor from the list";
            // 
            // labelName
            // 
            this.labelName.AutoSize = true;
            this.labelName.Location = new System.Drawing.Point(95, 193);
            this.labelName.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelName.Name = "labelName";
            this.labelName.Size = new System.Drawing.Size(120, 21);
            this.labelName.TabIndex = 2;
            this.labelName.Text = "Vendor Name";
            this.labelName.Visible = false;
            // 
            // labelCity
            // 
            this.labelCity.AutoSize = true;
            this.labelCity.Location = new System.Drawing.Point(332, 193);
            this.labelCity.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelCity.Name = "labelCity";
            this.labelCity.Size = new System.Drawing.Size(108, 21);
            this.labelCity.TabIndex = 4;
            this.labelCity.Text = "Vendor City";
            this.labelCity.Visible = false;
            // 
            // labelZip
            // 
            this.labelZip.AutoSize = true;
            this.labelZip.Location = new System.Drawing.Point(499, 193);
            this.labelZip.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelZip.Name = "labelZip";
            this.labelZip.Size = new System.Drawing.Size(102, 21);
            this.labelZip.TabIndex = 5;
            this.labelZip.Text = "Vendor Zip";
            this.labelZip.Visible = false;
            // 
            // dataGridViewVendors
            // 
            this.dataGridViewVendors.CellBorderStyle = System.Windows.Forms.DataGridViewCellBorderStyle.Raised;
            this.dataGridViewVendors.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridViewVendors.Location = new System.Drawing.Point(79, 373);
            this.dataGridViewVendors.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.dataGridViewVendors.Name = "dataGridViewVendors";
            this.dataGridViewVendors.RowTemplate.Height = 24;
            this.dataGridViewVendors.Size = new System.Drawing.Size(454, 197);
            this.dataGridViewVendors.TabIndex = 6;
            this.dataGridViewVendors.Visible = false;
            // 
            // buttonGetVendor
            // 
            this.buttonGetVendor.ForeColor = System.Drawing.Color.Red;
            this.buttonGetVendor.Location = new System.Drawing.Point(504, 99);
            this.buttonGetVendor.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.buttonGetVendor.Name = "buttonGetVendor";
            this.buttonGetVendor.Size = new System.Drawing.Size(144, 30);
            this.buttonGetVendor.TabIndex = 7;
            this.buttonGetVendor.Text = "Get Vendor";
            this.buttonGetVendor.UseVisualStyleBackColor = true;
            this.buttonGetVendor.Click += new System.EventHandler(this.buttonGetVendor_Click);
            // 
            // labelName2
            // 
            this.labelName2.AutoSize = true;
            this.labelName2.Location = new System.Drawing.Point(99, 278);
            this.labelName2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelName2.Name = "labelName2";
            this.labelName2.Size = new System.Drawing.Size(60, 21);
            this.labelName2.TabIndex = 8;
            this.labelName2.Text = "label2";
            this.labelName2.Visible = false;
            // 
            // labelCity2
            // 
            this.labelCity2.AutoSize = true;
            this.labelCity2.Location = new System.Drawing.Point(337, 278);
            this.labelCity2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelCity2.Name = "labelCity2";
            this.labelCity2.Size = new System.Drawing.Size(60, 21);
            this.labelCity2.TabIndex = 9;
            this.labelCity2.Text = "label3";
            this.labelCity2.Visible = false;
            // 
            // labelZip2
            // 
            this.labelZip2.AutoSize = true;
            this.labelZip2.Location = new System.Drawing.Point(504, 278);
            this.labelZip2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.labelZip2.Name = "labelZip2";
            this.labelZip2.Size = new System.Drawing.Size(60, 21);
            this.labelZip2.TabIndex = 10;
            this.labelZip2.Text = "label4";
            this.labelZip2.Visible = false;
            // 
            // dataGridViewLineItems
            // 
            this.dataGridViewLineItems.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridViewLineItems.Location = new System.Drawing.Point(79, 628);
            this.dataGridViewLineItems.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.dataGridViewLineItems.Name = "dataGridViewLineItems";
            this.dataGridViewLineItems.RowTemplate.Height = 24;
            this.dataGridViewLineItems.Size = new System.Drawing.Size(454, 197);
            this.dataGridViewLineItems.TabIndex = 11;
            this.dataGridViewLineItems.Visible = false;
            // 
            // buttonLineItems
            // 
            this.buttonLineItems.Location = new System.Drawing.Point(472, 589);
            this.buttonLineItems.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.buttonLineItems.Name = "buttonLineItems";
            this.buttonLineItems.Size = new System.Drawing.Size(176, 30);
            this.buttonLineItems.TabIndex = 12;
            this.buttonLineItems.Text = "Get Line ITems";
            this.buttonLineItems.UseVisualStyleBackColor = true;
            this.buttonLineItems.Visible = false;
            this.buttonLineItems.Click += new System.EventHandler(this.buttonLineItems_Click);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(83, 597);
            this.label2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(351, 21);
            this.label2.TabIndex = 13;
            this.label2.Text = "Select an InvoiceID and then click button";
            this.label2.Visible = false;
            // 
            // textBoxMoney
            // 
            this.textBoxMoney.Location = new System.Drawing.Point(79, 871);
            this.textBoxMoney.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.textBoxMoney.Name = "textBoxMoney";
            this.textBoxMoney.Size = new System.Drawing.Size(233, 27);
            this.textBoxMoney.TabIndex = 14;
            this.textBoxMoney.Visible = false;
            // 
            // buttonPayment
            // 
            this.buttonPayment.Location = new System.Drawing.Point(438, 870);
            this.buttonPayment.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.buttonPayment.Name = "buttonPayment";
            this.buttonPayment.Size = new System.Drawing.Size(191, 30);
            this.buttonPayment.TabIndex = 15;
            this.buttonPayment.Text = "Make a Payment";
            this.buttonPayment.UseVisualStyleBackColor = true;
            this.buttonPayment.Visible = false;
            this.buttonPayment.Click += new System.EventHandler(this.buttonPayment_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(11F, 21F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(255)))), ((int)(((byte)(128)))), ((int)(((byte)(176)))));
            this.ClientSize = new System.Drawing.Size(792, 1017);
            this.Controls.Add(this.buttonPayment);
            this.Controls.Add(this.textBoxMoney);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.buttonLineItems);
            this.Controls.Add(this.dataGridViewLineItems);
            this.Controls.Add(this.labelZip2);
            this.Controls.Add(this.labelCity2);
            this.Controls.Add(this.labelName2);
            this.Controls.Add(this.buttonGetVendor);
            this.Controls.Add(this.dataGridViewVendors);
            this.Controls.Add(this.labelZip);
            this.Controls.Add(this.labelCity);
            this.Controls.Add(this.labelName);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.comboBoxVendor);
            this.Cursor = System.Windows.Forms.Cursors.Hand;
            this.Font = new System.Drawing.Font("Modern No. 20", 10.8F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.ForeColor = System.Drawing.Color.FromArgb(((int)(((byte)(192)))), ((int)(((byte)(0)))), ((int)(((byte)(0)))));
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.Fixed3D;
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "Form1";
            this.Text = "ManageInvoicesTania";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewVendors)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridViewLineItems)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ComboBox comboBoxVendor;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label labelName;
        private System.Windows.Forms.Label labelCity;
        private System.Windows.Forms.Label labelZip;
        private System.Windows.Forms.DataGridView dataGridViewVendors;
        private System.Windows.Forms.Button buttonGetVendor;
        private System.Windows.Forms.Label labelName2;
        private System.Windows.Forms.Label labelCity2;
        private System.Windows.Forms.Label labelZip2;
        private System.Windows.Forms.DataGridView dataGridViewLineItems;
        private System.Windows.Forms.Button buttonLineItems;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox textBoxMoney;
        private System.Windows.Forms.Button buttonPayment;
    }
}

