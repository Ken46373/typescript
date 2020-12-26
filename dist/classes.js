"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ItDepartment extends Department {
    constructor(id, admins) {
        super(id, 'it');
        this.admins = admins;
        this.admins = admins;
    }
    describe() {
        console.log('IT部門 - ID:' + this.id);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }
    describe() {
        console.log('会計部門 - ID:' + this.id);
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
const employee1 = Department.createEmployee('Ken');
const it = new ItDepartment('d1', ['Max']);
console.log(it);
const accounting = AccountingDepartment.getInstance();
accounting.addReports("something");
console.log(accounting.getLastReport);
accounting.printReports();
//# sourceMappingURL=classes.js.map