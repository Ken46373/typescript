"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class itDepartment extends Department {
    constructor(id, admins) {
        super(id, 'it');
        this.admins = admins;
        this.admins = admins;
    }
}
class accontingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'acconting');
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = new itDepartment('d1', ['Max']);
console.log(it);
const acconting = new accontingDepartment('d2', []);
acconting.addReports("something");
acconting.printReports();
//# sourceMappingURL=app.js.map