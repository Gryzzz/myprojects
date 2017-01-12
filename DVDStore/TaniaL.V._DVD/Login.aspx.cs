using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;

namespace TaniaL.V._DVD
{
    public partial class Login : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void LoginUser(object sender, EventArgs e)
        {
            if (FormsAuthentication.Authenticate(username.Text, password.Text))
            {
                FormsAuthentication.RedirectFromLoginPage(username.Text, true);
            }

        }
    }
}