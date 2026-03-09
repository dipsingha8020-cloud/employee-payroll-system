function addEmployee(){

var id = document.getElementById("empid").value;
var name = document.getElementById("name").value;
var basic = parseFloat(document.getElementById("basic").value);
var allowance = parseFloat(document.getElementById("allowance").value);
var deduction = parseFloat(document.getElementById("deduction").value);

var gross = basic + allowance;
var net = gross - deduction;

var emp = {
id:id,
name:name,
gross:gross,
net:net
};

var employees = JSON.parse(localStorage.getItem("employees")) || [];

employees.push(emp);

localStorage.setItem("employees",JSON.stringify(employees));

displayEmployees();

}

function displayEmployees(){

var employees = JSON.parse(localStorage.getItem("employees")) || [];

var table = document.getElementById("table");

table.innerHTML = `
<tr>
<th>ID</th>
<th>Name</th>
<th>Gross Salary</th>
<th>Net Salary</th>
<th>Delete</th>
</tr>
`;

for(var i=0;i<employees.length;i++){

table.innerHTML +=
"<tr>"+
"<td>"+employees[i].id+"</td>"+
"<td>"+employees[i].name+"</td>"+
"<td>"+employees[i].gross+"</td>"+
"<td>"+employees[i].net+"</td>"+
"<td><button onclick='deleteEmployee("+i+")'>Delete</button></td>"+
"</tr>";

}

}

function deleteEmployee(index){

var employees = JSON.parse(localStorage.getItem("employees"));

employees.splice(index,1);

localStorage.setItem("employees",JSON.stringify(employees));

displayEmployees();

}