using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;

namespace TaniaLeonova_Vendrovska_CarFinal
{
    public partial class AddDelete : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

            //DeleteCarTextBox.Text = Session["@Car"].ToString();       

        }

        protected void addBTN_Click(object sender, EventArgs e)
        {

           
            SqlConnection conn;
            SqlCommand comm;
            string connectionString = ConfigurationManager.ConnectionStrings["carsConnectionstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("INSERT INTO  CarTable  (Car, Manufact, MPG) VALUES( @CarTextBox, @ManufactTextBox," +
                " @MPGTextBox)", conn);

            comm.Parameters.Add("@CarTextBox", System.Data.SqlDbType.NVarChar, 50);
            comm.Parameters["@CarTextBox"].Value = CarTextBox.Text;

            comm.Parameters.Add("@ManufactTextBox", System.Data.SqlDbType.NVarChar, 50);
            comm.Parameters["@ManufactTextBox"].Value = ManufactTextBox.Text;
            comm.Parameters.Add("@MPGTextBox", System.Data.SqlDbType.Int);
            comm.Parameters["@MPGTextBox"].Value = MPGTextBox.Text;


            try
            {
                conn.Open();
                comm.ExecuteNonQuery();

            }
            catch
            {
                dbErrorLabel2.Visible = true;
                dbErrorLabel2.Text = "Error ocured when you wanted to add car :(";
            }
            finally
            {
                conn.Close();
            }
            dbErrorLabel2.Visible = false;

            CarTextBox.Text = "";
            ManufactTextBox.Text = "";
            MPGTextBox.Text = "";
            Response.Redirect("Home.aspx");
        }

        protected void Button1_Click(object sender, EventArgs e)
        {

            
            SqlConnection conn;
            SqlCommand comm;
            string connectionString = ConfigurationManager.ConnectionStrings["carsConnectionstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("DELETE FROM CarTable WHERE Car = @DeleteCarTextBox", conn);
            comm.Parameters.Add("@DeleteCarTextBox", System.Data.SqlDbType.NVarChar, 50);
            comm.Parameters["@DeleteCarTextBox"].Value = DeleteCarTextBox.Text;
            //comm.Parameters["@IDTextBox"].Value = DVDtableList.SelectedItem.Value;
            try
            {
                conn.Open();
                comm.ExecuteNonQuery();
            }
            catch
            {
                Label5.Visible = true;
                Label5.Text = "Error deleting the car :(";
            }
            finally
            {
                conn.Close();
            }
            DeleteCarTextBox.Text = "";
            Response.Redirect("Home.aspx");
        }
    }
}