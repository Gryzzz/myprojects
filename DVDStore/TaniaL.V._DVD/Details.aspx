<%@ Page Title="Details" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Details.aspx.cs" Inherits="TaniaL.V._DVD.Details" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 id="details" >Here you will find out details about the web-site</h1>
<img src="../../images/details.jpg"  alt="+"  style="border-width: 0;"  width="15%"  id="editpic"  />
 
         <%# Eval("Text") %>

         <div id="doneBTn">
         <asp:Button ID="DoneButton" runat="server" onclick="DoneButton_Click" 
        Text="Done" BackColor="#FFCCFF" BorderStyle="Outset" ForeColor="#FF66FF" 
                style="height: 62px; width: 87px" /></div>
         <div id="detailspage">
         
         <asp:DataList  id="detailsDatalist" runat="server"  Width="406px" Height="156px" 
                 style="margin-left: 0px">
                 
    
   <ItemTemplate> 
   <table id="detailstable" >
   <tr>
   <p>
      DVDtitle: <strong><%#Eval("DVDtitle")%></strong><br />
      DVDartist: <strong><%#Eval("DVDartist")%></strong><br />
      DVDrating: <strong><%#Eval("DVDrating")%></strong><br />
      DVDdescription: <strong><%#Eval("Description")%></strong><br />
      
      <asp:Image id="Pic" runat="server" ImageUrl ='<%#Eval("PicURL")%>'   BackColor = "Black" />
      
      </p>
      </tr>
      </table>
   </ItemTemplate> 
    </asp:DataList>
        </div>

        
</asp:Content>
