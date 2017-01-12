<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Thanks.aspx.cs" Inherits="TaniaL.V._DVD.Thanks" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<div id="thanks">
<table>
   <tr>
   <th>
<h4>Thank you for your order!</h4> 
 Your Customer Number is: <asp:Label ID="custNum" runat="server" Text="Label"></asp:Label>
   </th>
   </tr>
   </table>
 </div>


</asp:Content>
