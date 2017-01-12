using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data.SqlClient;

namespace TaniaL.V._DVD
{
    public partial class Details : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
               
            SqlConnection conn;
            SqlCommand comm;
            SqlDataReader reader;
            string connectionString = ConfigurationManager.ConnectionStrings["DVDconnstring"].ConnectionString;
            conn = new SqlConnection(connectionString);
            comm = new SqlCommand("SELECT DVDtable.DVDID, DVDtable.DVDtitle, DVDtable.DVDartist, DVDtable.DVDrating, " +
                " Details.Description, Details.picURL FROM DVDtable INNER JOIN Details ON Details.DVDID=DVDtable.DVDID WHERE DVDtable.DVDID=@DVDID", conn);
            comm.Parameters.Add("@DVDID", System.Data.SqlDbType.Int);
            comm.Parameters["@DVDID"].Value = Convert.ToInt32(Request.QueryString["id"]);
            
            try
            {
                conn.Open();
                reader = comm.ExecuteReader();
                detailsDatalist.DataSource = reader;
                detailsDatalist.DataBind();

                reader.Close();
            }
            finally
            {
                conn.Close();
            }
        }

        protected void DoneButton_Click(object sender, EventArgs e)
        {
            Response.Redirect("/Default.aspx");
        }
    }
}