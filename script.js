'use strict';
const inputFields = document.querySelectorAll('input');
const studentForm = document.querySelector('#student-form');
const table = document.querySelector('.table');
const tbody = document.querySelector('#student-list');
const button = document.querySelector('.btn-success');
let row;


// CREATE & READ Data
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstName = inputFields[0].value;
    const lastName = inputFields[1].value;
    const employeeId = inputFields[2].value;

    const tr1 = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    let update = document.createElement('button');
    let deleteBtn = document.createElement('button')
    
    if(button.value == 'Submit'){
    tbody.append(tr1);
    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);
    tr1.appendChild(td4);
    td4.append(update, deleteBtn);
        td1.innerText = firstName;
    td2.innerText = lastName;
    td3.innerText = employeeId;
    update.innerHTML = `<a href="#" class="btn btn-warning btn-sm edit">Update</a>`;
    deleteBtn.innerHTML = `<a href="#" class="btn btn-danger btn-sm delete">Delete</a>`;
    

    inputFields[0].value = "";
    inputFields[1].value ="";
    inputFields[2].value = "";

    update.addEventListener('click', ()=> {
        inputFields[0].value = firstName;
        inputFields[1].value = lastName;
        inputFields[2].value = employeeId;
        button.value = "Update";
        row = tr1;
    });

    deleteBtn.addEventListener('click', ()=> {
        tr1.remove();
    })
    } else if(button.value == 'Update'){
        row.cells[0].innerText = firstName;
        row.cells[1].innerText = lastName;
        row.cells[2].innerText = employeeId;

        inputFields[0].value = "";
        inputFields[1].value ="";
        inputFields[2].value = "";
        button.value = "Submit";
    }

});




