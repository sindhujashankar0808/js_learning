const users = [
  {
    name: "Sinduja",
    isLogged: true,
    skills: ["HTML", "JS", "CSS"],
  },
  {
    name: "Jency",
    isLogged: false,
    skills: ["HTML", "JS", "CSS", "JAVA", "NODEJS"],
  },
  {
    name: "Amirtha",
    isLogged: true,
    skills: ["GO", "Rust", "Python"],
  },
  {
    name: "Karthy",
    isLogged: true,
    skills: ["JS", "NODEJS", "Data Science"],
  },
  {
    name: "John",
    isLogged: false,
    skills: ["HTML", "JS", "CSS", "Figma"],
  },
];

function loggedUser(users) {
  const count = [];
  // how to use array filter here
  for (const user of users) {
    if (user.isLogged == false) {
      count.push(user.name);
    }
  }
  console.log(`Logged user count = ${count.length}`);
  console.log(`Logged user name = ${count}`);
}

loggedUser(users);
function getUsersBySkills(users, skills) {
  const sameSkillsUsers = [];
  for (const user of users) {
    for (const skill of skills) {
      if (user.skills.includes(skill)) {
        if (!sameSkillsUsers[skill]) {
          sameSkillsUsers[skill] = [user.name];
        } else {
          sameSkillsUsers[skill].push(user.name);
        }
      }
    }
  }
  const sortedUsers = Object.entries(sameSkillsUsers)
    .sort(([usersA], [usersB]) => {
      if (usersA.length > usersB.length) {
        return -1;
      } else if (usersA.length < usersB.length) {
        return 1;
      } else {
        return 0;
      }
    })
    .map(([skill, users]) => `${skill} - ${users.join(", ")}`);
  console.log(`User name sorted by skils = ${sortedUsers}`);
}
getUsersBySkills(users, ["HTML", "JS"]);
