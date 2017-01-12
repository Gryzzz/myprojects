using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data.SqlClient;
using System.Web.Security;

namespace TaniaL.V._DVD.admin
{
    public partial class EditDVD : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            dbErrorLabel.Visible = false;
            if (!IsPostBack)
            {
                LoadDVDtableList();
            }

        }

        protected void selectButton_Click(object sender, EventArgs e)
        {
            SqlConnection conn;
            SqlCommand comm;
            SqlDataReader reader;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("SELECT DVDtable.DVDID, DVDtable.DVDtitle,  DVDtable.DVDartist, DVDtable.DVDrating, DVDtable.DVDprice,  " +
                " Details.Description, Details.picURL FROM DVDtable INNER JOIN Details ON Details.DVDID=DVDtable.DVDID WHERE DVDtable.DVDID=@IDTextBox", conn);
            comm.Parameters.Add("@IDTextBox", System.Data.SqlDbType.Int);
            comm.Parameters["@IDTextBox"].Value = DVDtableList.SelectedItem.Value;
            try
            {
                conn.Open();
                reader = comm.ExecuteReader();
                if (reader.Read())
                {
                    titleTextBox.Text = reader["DVDtitle"].ToString();
                    artistTextBox.Text = reader["DVDartist"].ToString();
                    ratingTextBox.Text = reader["DVDrating"].ToString();
                    priceTextBox.Text = reader["DVDprice"].ToString();
                    imgurlTextBox.Text = reader["PicURL"].ToString();
                    descriptionTextBox.Text = reader["Description"].ToString();
                    
                 }
                string temp;

                temp = reader["DVDprice"].ToString();

                priceTextBox.Text = Convert.ToString(Math.Round(Convert.ToDecimal(temp), 2));
                reader.Close();
                updateButton.Enabled = true;
                deleteButton.Enabled = true;


            }
            catch
            {
                dbErrorLabel.Text = "Error loading the movie details!1";
            }
            finally
            {
                conn.Close();
            }


        }

        protected void updateButton_Click(object sender, EventArgs e)
        {
            long insertedID = 0;
            SqlConnection conn;
            SqlCommand comm;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("UPDATE DVDtable SET DVDtitle =@titleTextBox, DVDartist =@artistTextBox," +
                " DVDrating = @ratingTextBox, DVDprice = @priceTextBox" +
                  "  WHERE DVDID = @IDTextBox", conn);
           // Update Details SET PicURL=@imgurlTextBox, Description=@descriptionTextBox WHERE DVDID = @IDTextBox
            comm.Parameters.Add("@IDTextBox", System.Data.SqlDbType.Int);
            comm.Parameters["@IDTextBox"].Value = DVDtableList.SelectedItem.Value;

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
                comm.ExecuteNonQuery();
            }
            catch
            {
                dbErrorLabel.Visible = true;
                dbErrorLabel.Text = "Error updating the movie details!";
            }
            finally
            {
                conn.Close();
            }
            //LoadDVDtableList();


            SqlCommand comm2;
            string connectionString2 = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm2 = new SqlCommand("Update Details SET DVDID=@IDTextBox, PicURL=@imgurlTextBox, Description=@descriptionTextBox WHERE DVDID = @IDTextBox", conn);
            comm2.Parameters.Add("@IDTextBox", System.Data.SqlDbType.Int);
            comm2.Parameters["@IDTextBox"].Value = DVDtableList.SelectedItem.Value;

            comm2.Parameters.Add("@imgurlTextBox", System.Data.SqlDbType.NVarChar, 100);
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
                dbErrorLabel.Visible = true;
                dbErrorLabel.Text = "Error updating the movie details! Check if all fields are filled.";
            }
            finally
            {
                conn.Close();
            }



            LoadDVDtableList();


        }

        private void LoadDVDtableList()
        {
            SqlConnection conn;
            SqlCommand comm;
            SqlDataReader reader;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("SELECT DVDID, DVDtitle FROM DVDtable", conn);
            try
            {
                conn.Open();
                reader = comm.ExecuteReader();
                DVDtableList.DataSource = reader;
                DVDtableList.DataValueField = "DVDID"; //  note the binding here so we can use the ID

                DVDtableList.DataTextField = "DVDtitle"; // but the part that shows is the user friendly name

                DVDtableList.DataBind();
                reader.Close();
            }
            catch
            {
                dbErrorLabel.Visible = true;
                dbErrorLabel.Text = "Error loading the list of movies!3";
            }
            finally
            {
                conn.Close();
            }
            updateButton.Enabled = false;
            deleteButton.Enabled = false;
            //IDTextBox.Text = "";
            titleTextBox.Text = "";
            artistTextBox.Text = "";
            ratingTextBox.Text = "";
            priceTextBox.Text = "";
            imgurlTextBox.Text = "";
            descriptionTextBox.Text = "";
            
        }

        protected void deleteButton_Click(object sender, EventArgs e)
        {
            SqlConnection conn;
            SqlCommand comm;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("DELETE FROM DVDtable WHERE DVDID = @IDTextBox", conn);
            comm.Parameters.Add("@IDTextBox", System.Data.SqlDbType.Int);
            comm.Parameters["@IDTextBox"].Value = DVDtableList.SelectedItem.Value;
            try
            {
                conn.Open();
                comm.ExecuteNonQuery();
            }
            catch
            {
                dbErrorLabel.Visible = true;
                dbErrorLabel.Text = "Error deleting DVD! 4";
            }
            finally
            {
                conn.Close();
            }
            LoadDVDtableList();

        }

        protected void LogoutButton2_Click(object sender, EventArgs e)
        {
            FormsAuthentication.SignOut();
            Response.Redirect("/Default.aspx");

        }

        protected void descriptionTextBox_TextChanged(object sender, EventArgs e)
        {

        }
    }
}