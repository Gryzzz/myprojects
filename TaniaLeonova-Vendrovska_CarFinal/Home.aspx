<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="TaniaLeonova_Vendrovska_CarFinal.Home" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
<asp:Label ID="dbErrorLabel" ForeColor="Red" runat="server" /></br>
<asp:DataList ID="carDL" runat="server" onitemcommand="carDL_ItemCommand">
    <HeaderTemplate> 
        
    <hr /> 
    <hr /> 
    </HeaderTemplate>
       <ItemTemplate> 
          Car:<strong><%#Eval("Car")%></strong>Manufact:<strong><%#Eval("Manufact")%></strong>MPG: <strong><%#Eval("MPG")%></strong>
          <asp:LinkButton ID ="BuyButton" runat ="server" 
        Text="AddDel" CommandName ="AddDel" CommandArgument = <%# Eval("Car")%> /> 
       </ItemTemplate> 
    <SeparatorTemplate> 
    <hr /> 
    </SeparatorTemplate> 
    <FooterTemplate> 
    <hr /> 
    <hr /> 
    </FooterTemplate>  
    </asp:DataList>


</asp:Content>
