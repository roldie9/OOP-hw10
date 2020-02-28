class employee {
    constructor(employeeName, id, email) {
        this.name = employeeName;
        this.id = id;
        this.email = email;
    }
    printInfo() {
        console.log('Name: ${this.employeeName}');
        console.log('Name: ${this.id}');
        console.log('Name: ${this.email}');
    }
}


// employee.printInfo();

module.exports = employee;