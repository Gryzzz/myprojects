using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;
using System.Data.SqlClient;
using System.Configuration;

namespace TaniaL.V._DVD.admin
{
    public partial class Reports : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        protected void CustomersButton_Click(object sender, EventArgs e)
        {
            SqlConnection conn;
            SqlCommand comm;
            SqlDataReader reader;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("SELECT CustomerID, FirstName, LastName FROM Customers", conn);
            try
            {
                conn.Open();
                reader = comm.ExecuteReader();
                CustomerDataList.DataSource = reader;
                CustomerDataList.DataBind();
                reader.Close();
            }
            finally
            {
                conn.Close();
            }
        }

        protected void OrdersButton_Click (object sender, EventArgs e)
        {
            SqlConnection conn;
            SqlCommand comm;
            SqlDataReader reader;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("SELECT Orders.OrderID, Orders.CustomerID,  DVDsOrdered.DVDID, DVDtable.DVDtitle FROM Orders  " +
                            " INNER JOIN DVDsOrdered ON DVDsOrdered.OrderID = Orders.OrderID " +
                            " INNER JOIN DVDtable ON DVDsOrdered.DVDID = DVDtable.DVDID " +
                             " WHERE CustomerID = @CustomerID", conn);
            comm.Parameters.Add("@CustomerID", System.Data.SqlDbType.Int);
            comm.Parameters["@CustomerID"].Value = (Convert.ToInt64(CustNumTextbox.Text));

            try
            {
                conn.Open();
                reader = comm.ExecuteReader();
                OrdersDataList.DataSource = reader;
                OrdersDataList.DataBind();
                reader.Close();
            }
            finally
            {
                conn.Close();
            }

        }

        protected void LogoutButton_Click(object sender, EventArgs e)
        {
            FormsAuthentication.SignOut();
            Response.Redirect("/Default.aspx");
        }
    }
}