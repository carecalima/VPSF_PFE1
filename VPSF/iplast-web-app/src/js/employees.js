// This file handles the employee management features. It includes functions for adding, updating, and deleting employee records, as well as displaying the employee list.

let employees = [];

function addEmployee(name, position) {
    const employee = {
        id: employees.length + 1,
        name: name,
        position: position
    };
    employees.push(employee);
    displayEmployees();
}

function updateEmployee(id, name, position) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        employee.name = name;
        employee.position = position;
        displayEmployees();
    }
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    displayEmployees();
}

function displayEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';
    employees.forEach(emp => {
        const li = document.createElement('li');
        li.textContent = `${emp.name} - ${emp.position}`;
        employeeList.appendChild(li);
    });
}

// Example usage
addEmployee('John Doe', 'Manager');
addEmployee('Jane Smith', 'Developer');