let employees = [];
let inputs = document.querySelectorAll("input");
let output = document.getElementById("output");
let addBtn = document.getElementById("Add");
let totalBtn = document.getElementById("TotalSalary");
let displayBtn = document.getElementById("DisplayAll");
let greaterBtn = document.getElementById("SalaryGreater");
let avgBtn = document.getElementById("Avg");
let countBtn = document.getElementById("Count");
addBtn.addEventListener("click", () => {
    let name = inputs[0].value.trim();
    let id = inputs[1].value.trim();
    let salary = inputs[2].value.trim();
    let dept = inputs[3].value.trim();

    if (name === "" || id === "" || salary === "" || dept === "") {
        alert(" Please fill all employee details!");
        return;
    }
    let emp = {
        name: name,
        id: id,
        salary: Number(salary),
        dept: dept
    };
    employees.push(emp);

    output.innerHTML = " Employee Added Successfully";

    inputs.forEach(input => input.value = "");
});

totalBtn.addEventListener("click", () => {
    let total = employees.reduce((sum, e) => sum + e.salary, 0);
    output.innerHTML = `<b>Total Salary:</b> ${total}`;
});
displayBtn.addEventListener("click", () => {
    let html = "<h3>All Employees:</h3>";

    employees.forEach(e => {
        html += `Name: ${e.name}, ID: ${e.id}, Salary: ${e.salary}, Dept: ${e.dept} <br>`;
    });

    output.innerHTML = html;
});
greaterBtn.addEventListener("click", () => {
    let result = employees.filter(e => e.salary > 50000);

    let html = "<h3>Salary > 50k:</h3>";
    result.forEach(e => {
        html += `${e.name} (${e.salary}) <br>`;
    });

    output.innerHTML = html;
});
avgBtn.addEventListener("click", () => {
    let total = employees.reduce((sum, e) => sum + e.salary, 0);
    let avg = employees.length ? total / employees.length : 0;

    output.innerHTML = `<b>Average Salary:</b> ${avg}`;
});
countBtn.addEventListener("click", () => {
    let deptCount = {};

    employees.forEach(e => {
        deptCount[e.dept] = (deptCount[e.dept] || 0) + 1;
    });

    let html = "<h3>Department Count:</h3>";
    for (let d in deptCount) {
        html += `${d}: ${deptCount[d]} <br>`;
    }

    output.innerHTML = html;
});