<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true" CodeBehind="Reports.aspx.cs" Inherits="TaniaL.V._DVD.admin.Reports" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1> Reports </h1>
    
    <div id="reportsbuttons"> 
 <asp:Button ID="CustomersButton" runat="server" Text="List Customers" 
            onclick="CustomersButton_Click" />
             <br /> <br />
               
    Enter Customer Number:
     <asp:TextBox ID="CustNumTextbox" runat="server" />
     <div id="CustomerNumTB">
     <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="CustNumTextbox"
                ErrorMessage="You forgot this field" Display="Dynamic" />
                 <asp:CompareValidator ID="stationNumCheck" runat="server" ControlToValidate="CustNumTextbox"
                Operator="DataTypeCheck" Type="Integer" ErrorMessage="<br />The value must be a number!"
                Display="Dynamic" />
                </div>

     <br /> <br />
        <asp:Button ID="OrdersButton" runat="server" Text="Get Customer’s Orders" 
            onclick="OrdersButton_Click" />

        <asp:Button ID="LogoutButton" runat="server" Text="Logoff" 
            onclick="LogoutButton_Click" />
    </div>

<div id="CustomerDataListdiv">
<asp:DataList id="CustomerDataList" runat="server" style="margin-right: 41px" 
        Width="142px" >
   <ItemTemplate> 
   <table>
   <tr>
   <th>
      CustomerID: <strong><%#Eval("CustomerID")%></strong><br />
      First Name: <strong><%#Eval("FirstName")%></strong><br />
      Last Name: <strong><%#Eval("LastName")%></strong><br />
      <br />
      <hr />
      </th>
      </tr>
      </table>
   </ItemTemplate>  
   <SeparatorTemplate><hr /> 
   </SeparatorTemplate> 
</asp:DataList>
</div>

<div id="customerOrderlist" >
<asp:DataList ID="OrdersDataList" runat="server">
   <ItemTemplate> 
   <p>
   <strong>Orders: </strong><br />
        OrderNmuber:</font> <%#Eval("OrderID")%><br />
        CustomerID:</font> <%#Eval("CustomerID")%><br />
        DVDID:</font> <%#Eval("DVDID")%><br />
        Title:</font> <%#Eval("DVDtitle")%>
        </p>
        </ItemTemplate> 
     <SeparatorTemplate> 
    <hr /> 
    </SeparatorTemplate> 
  </asp:DataList>
</div>
</asp:Content>
