<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true"
    CodeBehind="AddDVD.aspx.cs" Inherits="TaniaL.V._DVD.admin.AddDVD" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 id="adddvd">
        Here you can add DVD</h1>
    <img src="../../images/adddvd.jpg" alt="addPic" id="editpic" />
    <%# Eval("Text") %>
    <div id="dbdvd">
        <p>
            <span class="widelabel"><strong>Title:</strong></span>
            <asp:TextBox ID="titleTextBox" runat="server" />
            <asp:RequiredFieldValidator ID="descriptionReq" runat="server" ControlToValidate="titleTextBox"
                ErrorMessage="You forgot this field" Display="Dynamic" />
            <br />
            <span class="widelabel"><strong>Artist:</strong></span>
            <asp:TextBox ID="artistTextBox" runat="server" />
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="artistTextBox"
                ErrorMessage="You forgot this field" Display="Dynamic" />
            <br />
            <br />
            <span class="widelabel"><strong>Rating:</strong></span>
            <asp:TextBox ID="ratingTextBox" runat="server" />
            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="ratingTextBox"
                ErrorMessage="You forgot this field" Display="Dynamic" />
            <asp:CompareValidator ID="stationNumCheck" runat="server" ControlToValidate="ratingTextBox"
                Operator="DataTypeCheck" Type="Integer" ErrorMessage="<br />The value must be a number!"
                Display="Dynamic" />
            <asp:RangeValidator ID="stationNumRangeCheck" runat="server" ControlToValidate="ratingTextBox"
                MinimumValue="1" MaximumValue="5" Type="Integer" ErrorMessage="Number must be between 1 and 5."
                Display="Dynamic" />
            <br />
            <br />
            <span class="widelabel"><strong>Price:</strong></span>
            <asp:TextBox ID="priceTextBox" runat="server" Height="16px" Width="115px" />
            <asp:CompareValidator ID="CheckFormat1" runat="server" ControlToValidate="priceTextBox"
                Operator="DataTypeCheck" Type="Currency" Display="Dynamic" ErrorMessage="Please use XX.XX format for the price" />
            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="priceTextBox"
                ErrorMessage="You forgot this field" Display="Dynamic" />
            <br />
            <span class="widelabel"><strong>Image URL:</strong></span>
            <asp:TextBox ID="imgurlTextBox" runat="server" style="margin-left: 55px" 
                Width="133px"></asp:TextBox>
            <br />
            <span class="widelabel"><strong>Description:</strong></span>
            <asp:TextBox ID="descriptionTextBox" runat="server" TextMode="multiline"  ontextchanged="TextBox1_TextChanged" 
                Width="246px"></asp:TextBox>
        </p>
        <asp:Button ID="Addbutton" runat="server" OnClick="Addbutton_Click" Text="Add" Width="112px" />
        <asp:Label ID="dbErrorLabel" runat="server" ForeColor="Red" Visible="False"></asp:Label>
        <asp:Label ID="dbErrorLabel2" runat="server" ForeColor="#FF3300" Text="Label" 
            Visible="False"></asp:Label>
        
    <asp:Button ID="LogoutButton" runat="server" onclick="LogoutButton_Click" 
            Text="Logout" CausesValidation="False" />
        
        
        
    </div>

<div id="logout1">    
    <br />
    <br />
    <br />
            </div>
            </asp:Content>
