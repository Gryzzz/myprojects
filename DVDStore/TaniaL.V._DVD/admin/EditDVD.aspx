<%@ Page Title="" Language="C#" MasterPageFile="~/Site1.Master" AutoEventWireup="true"
    CodeBehind="EditDVD.aspx.cs" Inherits="TaniaL.V._DVD.admin.EditDVD" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <h1 id="editdvd">
        Here you can edit DVD</h1>
    <img src="../../images/edit.jpg" alt="editPic" id="editpic2" />
    <%# Eval("Text") %>
    <div id="editMYdvd">
        <p>
            <asp:Label ID="dbErrorLabel" ForeColor="Red" runat="server" /> <strong>Select a movie to update:</strong>
            <br />
            <asp:DropDownList ID="DVDtableList" runat="server" />
            <asp:Button ID="selectButton" Text="Select" runat="server" OnClick="selectButton_Click"
                CausesValidation="true" ValidationGroup="one" />
            <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ValidationGroup="one"
                ControlToValidate="DVDtableList" ErrorMessage="Don't forget to pick the  movie first!"
                Display="Dynamic" />
        </p>
        <p>
            <span class="widelabel"><strong>Title:</strong></span>
            <asp:TextBox ID="titleTextBox" runat="server" />
            <asp:RequiredFieldValidator ID="descriptionReq" runat="server" ValidationGroup="two"
                ControlToValidate="titleTextBox" ErrorMessage="You forgot this field" Display="Dynamic" />
            <br />
            <span class="widelabel"><strong>Artist:</strong></span>
            <asp:TextBox ID="artistTextBox" runat="server" />
            <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ValidationGroup="two"
                ControlToValidate="artistTextBox" ErrorMessage="You forgot this field" Display="Dynamic" />
            <br />
            <span class="widelabel"><strong>Rating:</strong></span>
            <asp:TextBox ID="ratingTextBox" runat="server" />
            <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ValidationGroup="two"
                ControlToValidate="ratingTextBox" ErrorMessage="You forgot this field" Display="Dynamic" />
            <asp:CompareValidator ID="stationNumCheck" runat="server" ControlToValidate="ratingTextBox"
                Operator="DataTypeCheck" Type="Integer" ErrorMessage="The value must be a number!"
                Display="Dynamic" />
            <asp:RangeValidator ID="stationNumRangeCheck" runat="server" ControlToValidate="ratingTextBox"
                MinimumValue="1" MaximumValue="5" Type="Integer" ErrorMessage=" Number must be between 1 and 5."
                Display="Dynamic" />
            <br />
            <span class="widelabel"><strong>Price:</strong></span>
            <asp:TextBox ID="priceTextBox" runat="server" />
            <asp:CompareValidator ID="CheckFormat1" runat="server" ControlToValidate="priceTextBox"
                Operator="DataTypeCheck" Type="Currency" Display="Dynamic" ErrorMessage="Please use XX.XX format for the price" />
            <br />
             <span class="widelabel"><strong>Image URL:</strong></span>
            <asp:TextBox ID="imgurlTextBox" runat="server" style="margin-left: 55px" 
                Width="133px"></asp:TextBox>
            <br />
 <span class="widelabel"><strong>Description:</strong></span>
            <asp:TextBox ID="descriptionTextBox" runat="server" TextMode="multiline"  
                Width="246px" ontextchanged="descriptionTextBox_TextChanged"></asp:TextBox>
            <br />
        </p>
        <p>
            <asp:Button ID="updateButton" Text="Update Movie" Width="200" Enabled="False" runat="server"
                OnClick="updateButton_Click" />
            <asp:Button ID="deleteButton" Text="Delete Movie" Enabled="False" runat="server"
                OnClick="deleteButton_Click" />
            <asp:Button ID="LogoutButton2" runat="server" onclick="LogoutButton2_Click" 
                Text="Logout" CausesValidation="False" />
        </p>
    </div>
</asp:Content>
