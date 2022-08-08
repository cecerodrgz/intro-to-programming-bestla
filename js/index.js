let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyRight = document.createElement('p');
copyRight.innerHTML = `Cecilia Rodriguez, ${thisYear}`;
footer.appendChild(copyRight);

const skills = ['HTML', 'CSS', 'JavaScript'];
const skillSection = document.getElementById('skill');
const skillsList = skillSection.querySelector('ul');
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
};