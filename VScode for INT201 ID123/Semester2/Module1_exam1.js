class EmployeeManager {
  constructor() {
    this.employees = []
  }

  addEmployee(name, position) {
    const existingEmployee = this.employees.find(employee => employee.name.toLowerCase() === name.toLowerCase())

    if (existingEmployee) {
      return null
    }
  
    const newId = this.employees.length + 1
    const newEmployee = { id: newId, name, position }
  
    this.employees.push(newEmployee);
    return newEmployee
  }

  removeEmployee(id) {
    const employeeIndex = this.employees.findIndex((employee) => employee.id === id)
    if (employeeIndex === -1) {
      return false
    }

    this.employees.splice(employeeIndex, 1)
    return true
  }

  findEmployeeByName(name) {
    return this.employees.filter(
      (employee) => employee.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    )
  }

  sortEmployeeByName() {
    this.employees.sort((a, b) => {
      const nameA = a.name.toLowerCase()
      const nameB = b.name.toLowerCase()
      return nameA < nameB ? -1 : nameA > nameB ? 1 : 0
    })
  }

//   sortEmployeeByName() {
//     this.employees.sort((a, b) => a.name.localeCompare(b.name));
//   }


// sortEmployeeByName() {
//     this.employees.sort((a, b) => {
//       if (a.name.toLowerCase() < b.name.toLowerCase()) {
//         return -1;
//       } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
//         return 1;
//       } else {
//         return 0;
//       }
//     });
//   }

  updateEmployee(employee) {
    const existingEmployeeIndex = this.employees.findIndex((emp) => emp.id === emp.id)
    if (existingEmployeeIndex === -1) {
      return false
    }

    this.employees[existingEmployeeIndex] = employee
    return true
  }

  promoteEmployee(id, newPosition) {
    const employee = this.employees.find((emp) => emp.id === id)
    if (!employee) {
      return false
    }

    employee.position = newPosition
    return true
  }
}

const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); // Adds and logs new employee
console.log(manager.addEmployee("Jane Doe", "Designer")); // Adds and logs new employee
console.log(manager.findEmployeeByName("John Doe")); // Finds and logs John Doe
manager.sortEmployeeByName(); // Sorts employees by name
console.log(manager.employees); // Logs sorted employees
manager.promoteEmployee(1, "Senior Developer"); // Promotes John Doe to Senior Developer
console.log(manager.employees); // Logs employees to see the updated position of John Doe