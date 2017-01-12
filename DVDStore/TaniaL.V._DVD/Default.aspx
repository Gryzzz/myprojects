<%@ Page Title="Home" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="TaniaL.V._DVD.Default" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 id="details" ></h1>
<img src="../../images/home.png"  alt="+"  style="border-width: 0;" id="sweethome" width="15%"  id="editpic"  />

         <%# Eval("Text") %>
         <h1 id="ourMoviestext">Here is what we have for you:</h1> 
         <div id="movieInfo">
<asp:DataList id="movieRepeater" runat="server" onitemcommand="movieRepeater_ItemCommand" 
                 onselectedindexchanged="movieRepeater_SelectedIndexChanged" 
                 style="margin-left: 3px" Width="207px">
   <ItemTemplate> 
   <table id="movieTable" >
   <tr>
   <p>
      DVDtitle: <strong><%#Eval("DVDtitle")%></strong><br />
      DVDartist: <strong><%#Eval("DVDartist")%></strong><br />
      DVDrating: <strong><%#Eval("DVDrating")%></strong><br />
      DVDprice: <strong><%#Eval("DVDprice")%></strong><br />
      <asp:LinkButton ID ="BuyButton" runat ="server" 
     Text=<%#"<strong>Buy</strong>  " +  Eval("DVDtitle")%>
     CommandName ="BuyDVD" 
     CommandArgument = <%# Eval("DVDID")%> /> 
      <br />
      <asp:LinkButton ID ="DetailsButton" runat ="server" 
     Text=<%#"<strong>Details</strong>  " +  Eval("DVDtitle")%>
     CommandName ="detailsDVD" 
     CommandArgument = <%# Eval("DVDID")%> />
      </p>
      </tr>
      </table>
   </ItemTemplate>  
   <SeparatorTemplate><hr /> 
   </SeparatorTemplate>
       
   
</asp:DataList>
</div>
</asp:Content>

