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
    public partial class Home : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
               {
                SqlConnection conn;
                SqlCommand comm;
                SqlDataReader reader;
                string connectionString = ConfigurationManager.ConnectionStrings["carsConnectionstring"].ConnectionString;
                conn = new SqlConnection(connectionString);
                comm = new SqlCommand("SELECT Car, Manufact, MPG FROM CarTable", conn);  
                try
                {
                    conn.Open();
                    reader = comm.ExecuteReader();
                    carDL.DataSource = reader;
                    carDL.DataBind();
                    reader.Close();
                }

                 // this catch will write out the actual sql error  note that    
                catch (SqlException sqlEx)
                {
                    dbErrorLabel.Text = "SQL error:  ";
                    foreach (SqlError error in sqlEx.Errors)
                    {
                        string msg = string.Format("{0}: {1}", error.Number, error.Message);
                        dbErrorLabel.Text += msg;
                    }

                }




                finally
                {
                    conn.Close();
                }
            }
        }

        protected void carDL_ItemCommand(object source, DataListCommandEventArgs e)
        {
            if (e.CommandName == "AddDel")
            {
                Response.Redirect("AddDelete.aspx?Car=" + e.CommandArgument);
            }
        }
    }
}