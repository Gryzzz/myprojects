using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Configuration;

namespace TaniaL.V._DVD
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SqlConnection conn;
            SqlCommand comm;
            SqlDataReader reader;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("SELECT DVDID, DVDtitle, DVDartist, DVDrating, DVDprice FROM DVDtable", conn);
            try
            {
                conn.Open();
                reader = comm.ExecuteReader();
                movieRepeater.DataSource = reader;
                movieRepeater.DataBind();
                reader.Close();
            }
            finally
            {
                conn.Close();
            }
        }

        protected void movieRepeater_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        protected void movieRepeater_ItemCommand(object source, DataListCommandEventArgs e)
        {
            if (e.CommandName == "BuyDVD")
            {
                Response.Redirect("BuyDVD.aspx?id=" + e.CommandArgument);
            }
            if (e.CommandName == "detailsDVD")
            {
                Response.Redirect("Details.aspx?id=" + e.CommandArgument);
            }

        }
    }
}