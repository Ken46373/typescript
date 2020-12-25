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
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, 'it');
        this.admins = admins;
        this.admins = admins;
    }
}
class accountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get getLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません。");
    }
    set setLastReport(value) {
        if (!value) {
            throw new Error("正しい値を設定してください。");
        }
        this.addReports(value);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    }
}
const it = new ItDepartment('d1', ['Max']);
console.log(it);
const accounting = new accountingDepartment('d2', []);
accounting.addReports("something");
console.log(accounting.getLastReport);
accounting.printReports();
//# sourceMappingURL=app.js.map