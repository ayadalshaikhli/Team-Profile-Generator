const Intern = require("../lib/intern")

describe("intern", ()=>{
    it("should return name, id, email", () =>{
        const nameE = "Ayad";
        const idD = "15";
        const emailL = "ayadalshaikhli@gmail.com";
        const schoolL = "UC Davis";
        const intern = new Intern (nameE, idD, emailL, schoolL);

        expect(intern.name).toBe(nameE)
        expect(intern.id).toBe(idD)
        expect(intern.email).toBe(emailL)
        expect(intern.school).toBe(schoolL)
    });
});