//lesson-4-2
 
//date & name
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyRight = document.createElement('p');
copyRight.innerHTML = `&copy; Cecilia Rodriguez, ${thisYear}`;
footer.appendChild(copyRight);
 
//skill list
const skills = ['HTML', 'CSS', 'JavaScript'];
 const skillSection = document.getElementById('skill');
 const skillsList = skillSection.querySelector('ul');
 for (let i = 0; i < skills.length; i++) {
     const skill = document.createElement('li');
     skill.innerHTML = skills[i];
     skillsList.appendChild(skill);
 };

//lesson-4-3
 
//leave message area
 
const messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener('submit', myEvent => {
    myEvent.preventDefault();
    const name = myEvent.target.name;
    const email = myEvent.target.email;
    const message = myEvent.target.message;
 
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const span = document.createElement('span');
    span.textContent = message;
    const newMessage = document.createElement('li');
 
    newMessage.innerHTML = `<a href = 'mailto: ${email.value}' target ='_blank'>${name.value}</a><span>wrote:${message.value}</span>`
   
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.addEventListener('click', (e) => {
        const entry = e.target.parentNode;
        const ul = entry.parentNode;
        ul.removeChild(entry);
        newMessage.appendChild(removeButton);
    });
    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    messageForm.reset();
 
});
 
/*lesson-4-5 */
 
mybutton = document.getElementById("myBtn");
 
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
 
function topFunction() {
  document.documentElement.scrollTop = 0;
}

//lesson-6-2
const githubRequest = 'https://api.github.com/users/cecerodrgz/repos';
fetch (githubRequest)
  .then(response => response.json())
    .then(repositories => {
      const projectList = document.getElementById('projectsList');
      for(let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      const repoLink = document.createElement('a');
      repoLink.href = repositories[i].html_url;
      repoLink.innerHTML = repositories[i].name;
      project.appendChild(repoLink);
      projectList.appendChild(project); 
        }
      })
      .catch(error => alert("Something went wrong", error));
    