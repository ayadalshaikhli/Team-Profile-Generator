const Employee = require("../lib/employee")

describe("Employee", ()=>{
    it("should return name, id, email", () =>{
        const nameE = "Ayad";
        const idD = "15";
        const emailL = "ayadalshaikhli@gmail.com";
        const employee = new Employee(nameE, idD, emailL);

        expect(employee.name).toBe(nameE)
        expect(employee.id).toBe(idD)
        expect(employee.email).toBe(emailL)
    });
});