class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    }

    describe(this: Department) {
        console.log(`Department: (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ItDepartment extends Department {
    constructor(id: string, private admins: string[]) {
        super(id, 'it');
        this.admins = admins;
    }
}

class accountingDepartment extends Department {

    private lastReport: string;
    
    constructor(id: string, private reports: string[]) {
        super(id, 'accounting');
        this.lastReport = reports[0];
    }

    get getLastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません。");
    }

    set setLastReport(value: string) {
        if (!value) {
            throw new Error("正しい値を設定してください。");
        }
        this.addReports(value);
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    addEmployee(name: string) {
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