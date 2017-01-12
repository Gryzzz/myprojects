<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="AddDelete.aspx.cs" Inherits="TaniaLeonova_Vendrovska_CarFinal.AddDelete" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">




    <asp:TextBox ID="DeleteCarTextBox" runat="server"></asp:TextBox>
    <br />
    <asp:Button ID="DeleteBTN" runat="server" onclick="Button1_Click" 
        Text="Delete" />
    <br />
    <br />
    <br />
    <asp:TextBox ID="CarTextBox" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label1" runat="server" Text="Car"></asp:Label>
    <br />
    <asp:TextBox ID="ManufactTextBox" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label2" runat="server" Text="Manufact"></asp:Label>
    <br />
    <asp:TextBox ID="MPGTextBox" runat="server"></asp:TextBox>
    <br />
    <asp:Label ID="Label3" runat="server" Text="MPG"></asp:Label>
    <br />
    <asp:Button ID="addBTN" runat="server" onclick="addBTN_Click" Text="Add" />
    <asp:Label ID="dbErrorLabel2" runat="server" ForeColor="#FF3300" Text="Label" 
            Visible="False"></asp:Label>
            <asp:Label ID="Label5" runat="server" ForeColor="#FF3300" Text="Label" 
            Visible="False"></asp:Label>
    <br />
    <br />
    <br />
    <br />




</asp:Content>
