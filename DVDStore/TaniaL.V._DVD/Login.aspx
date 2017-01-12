<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="TaniaL.V._DVD.Login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<div id="mylogin" >

    <h1>Login</h1>
<p>Username:<br />
   <asp:TextBox id ="username" runat ="server" Height="30px" Width="158px" />
    <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="username"
                ErrorMessage="You forgot this field" Display="Dynamic" />
</p>
<p>Password:<br />
   <asp:TextBox id ="password" runat ="server" TextMode ="Password" />
   <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="password"
                ErrorMessage="You forgot this field" Display="Dynamic" />
</p>
<p>
<asp:Button id ="submitButton" runat ="server" Text ="Login" OnClick ="LoginUser" 
        style="height: 26px" />
</p>
</div>


</asp:Content>
