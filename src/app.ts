class Department {
    private employees: string[] = [];

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

class itDepartment extends Department {
    constructor(id: string, private admins: string[]) {
        super(id, 'it');
        this.admins = admins;
    }
}

class accontingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'acconting');
    }

    addReports(text: string) {
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