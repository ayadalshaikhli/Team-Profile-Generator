const Manager = require("../lib//manager")

describe("Employee", ()=>{
    it("should return name, id, email", () =>{
        const nameE = "Ayad";
        const idD = "15";
        const emailL = "ayadalshaikhli@gmail.com";
        const officeNumberR = "22"
        const manager = new Manager(nameE, idD, emailL, officeNumberR);

        expect(manager.name).toBe(nameE)
        expect(manager.id).toBe(idD)
        expect(manager.email).toBe(emailL)
        expect(manager.officeNumber).toBe(officeNumberR)
    });
});