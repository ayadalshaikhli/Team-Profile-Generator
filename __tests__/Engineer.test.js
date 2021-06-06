const Engineer = require("../lib/engineer")

describe("Engineer", ()=>{
    it("should return name, id, email, github", () =>{
        const nameE = "Ayad";
        const idD = "15";
        const emailL = "ayadalshaikhli@gmail.com";
        const githubB = "ayadalshaikhli";
        const engineer = new Engineer(nameE, idD, emailL, githubB);

        expect(engineer.name).toBe(nameE)
        expect(engineer.id).toBe(idD)
        expect(engineer.email).toBe(emailL)
        expect(engineer.gitHub).toBe(githubB)
    });
});