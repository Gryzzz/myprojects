using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;
using System.Web.Security;

namespace TaniaL.V._DVD.admin
{
    public partial class AddDVD : System.Web.UI.Page
    {
        
        protected void Page_Load(object sender, EventArgs e)
        {
           
        }

        protected void Addbutton_Click(object sender, EventArgs e)

        {
            long insertedID = 0;
            SqlConnection conn;
            SqlCommand comm;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("INSERT INTO  DVDtable  (DVDtitle, DVDartist, DVDrating, DVDprice) VALUES( @titleTextBox, @artistTextBox," +
                " @ratingTextBox,   @priceTextBox); SELECT SCOPE_IDENTITY() ", conn);

            comm.Parameters.Add("@titleTextBox", System.Data.SqlDbType.NVarChar, 50);
            comm.Parameters["@titleTextBox"].Value = titleTextBox.Text;

            comm.Parameters.Add("@artistTextBox", System.Data.SqlDbType.NVarChar, 50);
            comm.Parameters["@artistTextBox"].Value = artistTextBox.Text;
            comm.Parameters.Add("@ratingTextBox", System.Data.SqlDbType.Int);
            comm.Parameters["@ratingTextBox"].Value = ratingTextBox.Text;
            comm.Parameters.Add("@priceTextBox", System.Data.SqlDbType.Money);
            comm.Parameters["@priceTextBox"].Value = priceTextBox.Text;
            
            try
            {
                conn.Open();
                insertedID = Convert.ToInt64(comm.ExecuteScalar());
                
            }
            catch
            {
                dbErrorLabel.Visible = true;
                dbErrorLabel.Text = "Error updating the movie details! Check if all fields are filled.";
            }
            finally
            {
                conn.Close();
            }




            
            SqlCommand comm2;      
            string connectionString2 = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm2 = new SqlCommand("INSERT INTO Details (DVDID,PicURL, Description) VALUES ( @DVDID , @imgurlTextBox, @descriptionTextBox)", conn);

            comm2.Parameters.Add("@DVDID", System.Data.SqlDbType.Int);
            comm2.Parameters["@DVDID"].Value = insertedID;
            comm2.Parameters.Add("@imgurlTextBox", System.Data.SqlDbType.NVarChar,100);
            comm2.Parameters["@imgurlTextBox"].Value = imgurlTextBox.Text;
            comm2.Parameters.Add("@descriptionTextBox", System.Data.SqlDbType.NVarChar, 500);
            comm2.Parameters["@descriptionTextBox"].Value = descriptionTextBox.Text;

            try
            {
                
                conn.Open();
                comm2.ExecuteNonQuery();
                
            }
            catch
            {
                dbErrorLabel2.Visible = true;
                dbErrorLabel2.Text = "Something IS wrong with url or description :(";
            }
            finally
            {
                conn.Close();
            }


            dbErrorLabel.Visible = false;
            dbErrorLabel2.Visible = false;
            
            titleTextBox.Text = "";
            artistTextBox.Text = "";
            ratingTextBox.Text = "";
            priceTextBox.Text = "";
            imgurlTextBox.Text = "";
            descriptionTextBox.Text = "";
        }

        protected void LogoutButton_Click(object sender, EventArgs e)
        {
            FormsAuthentication.SignOut();
            Response.Redirect("/Default.aspx");

        }

        protected void TextBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}