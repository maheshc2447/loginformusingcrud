var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["cname"] = document.getElementById("cname").value;
    formData["cweb"] = document.getElementById("cweb").value;
    formData["cphn"] = document.getElementById("cphn").value;
    formData["ccity"] = document.getElementById("ccity").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("companylist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.cname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.cweb;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.cphn;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ccity;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("cname").value = "";
    document.getElementById("cweb").value = "";
    document.getElementById("cphn").value = "";
    document.getElementById("ccity").value = "";
    document.getElementById("caddress").value = "";
    document.getElementById("ccity").value = "";
    document.getElementById("cstate").value = "";
    

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("cname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cweb").value = selectedRow.cells[1].innerHTML;
    document.getElementById("cphn").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ccity").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.cname;
    selectedRow.cells[1].innerHTML = formData.cweb;
    selectedRow.cells[2].innerHTML = formData.cphn;
    selectedRow.cells[3].innerHTML = formData.ccity;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("cname").value == "") {
        isValid = false;
        document.getElementById("cnameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cnameValidationError").classList.contains("hide"))
            document.getElementById("cnameValidationError").classList.add("hide");
    }
    return isValid;
}