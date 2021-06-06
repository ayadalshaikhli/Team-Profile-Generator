function generateHTML(theTeam) {
var manager1 = ``;
var intern1 = ``;
var engineer1 = ``;

theTeam.forEach(teamMembers => {
  if(teamMembers.getRole() == 'Manager'){
    manager1 = manager1 +` <div class="manager">
    <div>
      <img class="img" src="../src/Manager.jpg.png" alt="" />
    </div>
    <div class="information">
      <h2 class="neonText pulsate">Postion: Manager</h2>
      <h3>Name:${teamMembers.name}</h3>
      <h3>ID:${teamMembers.id}</h3>
      <h3>Email:${teamMembers.email}</h3>
      <h3>Office Number:${teamMembers.officeNumber}</h3>
    </div>
  </div>
  `
  }
  if(teamMembers.getRole() == 'Engineer'){
    engineer1 = engineer1 +`<div class="engineer">
    <div>
      <img class="img" src="../src/engineer.jpg.png" alt="" />
    </div>
    <div class="information">
      <h2 class="neonText pulsate">Postion: Engineer</h2>
      <h3>Name:${teamMembers.name}</h3>
      <h3>ID:${teamMembers.id}</h3>
      <h3>Email:${teamMembers.email}</h3>
      <a href="https://github.com/${teamMembers.gitHub}">
      <button class="neonText button pulsate">Git Hub</button>
    </a>
    </div>
  </div>`
  }
  if(teamMembers.getRole() == 'Intern'){
    intern1 = intern1 +`<div class="intern">
    <div>
      <img class="img" src="../src/Intern.jpg.png" alt="" />
    </div>
    <div class="information">
      <h2 class="neonText pulsate">Postion: Intern</h2>
      <h3>Name:${teamMembers.name}</h3>
      <h3>ID:${teamMembers.id}</h3>
      <h3>Email:${teamMembers.email}</h3>
      <h3>School:${teamMembers.school}</h3>
    </div>
  </div>`
  }

});
    return`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="style.css"/>
    <title>Document</title>
  </head>
  <body>
  <header class="header" id="header">
  <img src="" alt="" />
  <h1 class="neonText pulsate">MEET <span>the</span> Team</h1>
  <div class="cards">
  `+manager1+`
    <div class="employees">
    `+ engineer1 +`
    `+ intern1 +`
    </div>
  </div>
</header>

  </body>
</html>
`
}
module.exports = generateHTML