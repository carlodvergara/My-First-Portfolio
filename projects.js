const bgWallPortFolio = document.getElementById('bg-wallPortfolio');

const containerPortfolio = document.createElement('div');
containerPortfolio.classList.add('container-portfolio');


//--------------------------------------
const headerPortfolio = document.createElement('div');
headerPortfolio.classList.add('header-portfolio');

const boxImgPortfolio = document.createElement('div');
boxImgPortfolio.classList.add('box-img-portfolio');

const imgPortfolio = document.createElement('img');
imgPortfolio.classList.add('img-portfolio');
imgPortfolio.setAttribute('src' , 'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FinteriorConsultantThumbnail.png%3Falt%3Dmedia%26token%3Dfb5f8229-8eb9-4d70-b0d4-fbd2829a0cf0&w=750&q=75');


//--------------------------------------
const boxNavHeader = document.createElement('div');
boxNavHeader.classList.add('box-nav-header');

const tagCategory = document.createElement('div');
tagCategory.classList.add('tag');
tagCategory.textContent = 'Frontend';

const tagIconAndLevel = document.createElement('div');
tagIconAndLevel.classList.add('tag');
tagIconAndLevel.textContent = '🙉 Aprendiz';




const boxBtnsNavHeader = document.createElement('div');
boxBtnsNavHeader.classList.add('box-btns-nav-header');



const anchorageRepo = document.createElement('a');
anchorageRepo.setAttribute('href' , '');
anchorageRepo.setAttribute('target' , '_blank');

const boxIconRepo = document.createElement('div');
boxIconRepo.classList.add('box-icon-repo');

const iconGitHubPortFolio = document.createElement('i');
iconGitHubPortFolio.classList.add('fa-brands' , 'fa-github' , 'icongithub-portfolio');




const anchorageOpenWeb = document.createElement('a');
anchorageOpenWeb.classList.add('anchorage-web');
anchorageOpenWeb.setAttribute('href' , '');

const boxIconWeb = document.createElement('div');
boxIconWeb.classList.add('box-icon-web');

const iconOpenWeb = document.createElement('i');
iconOpenWeb.classList.add('fa-solid' , 'fa-arrow-up-right-from-square');



//--------------------------------------
const dataProject = document.createElement('div');
dataProject.classList.add('data-project');

const titleProject = document.createElement('h3');
titleProject.classList.add('title-project');
titleProject.textContent = '404 Not Found';



//--------------------------------------
const boxDate = document.createElement('div');
boxDate.classList.add('box-date');

const iconDate = document.createElement('i');
iconDate.classList.add('fa-regular' , 'fa-calendar');

const dateProject = document.createElement('p');
dateProject.classList.add('date-project');
dateProject.textContent = '23 agosto 2023';



//--------------------------------------
const bodyProject = document.createElement('div');
bodyProject.classList.add('body-project');

const textBodyProject = document.createElement('p');
textBodyProject.classList.add('text-body-project');
textBodyProject.textContent = 'Este es un proyecto que tiene como objetivo brindar una experiencia de usuario más agradable y personalizada al momento de mostrar el error 404 de un sitio web. En lugar de mostrar la página de error genérica, este proyecto ofrece una página personalizada y atractiva que hará que los usuarios se sientan más cómodos al momento de encontrar una página que no existe en tu sitio web.'




//--------------------------------------
const projectStack = document.createElement('div');
projectStack.classList.add('project-box');

const titleStack = document.createElement('h3');
titleStack.classList.add('title-area');
titleStack.textContent = 'Stack';

const containerStack = document.createElement('div');
containerStack.classList.add('container-tags');

// Aqui creo que tengo que crear u nciclo for que haga recorrido de todos los tag y los incluya

const tagStack = document.createElement('div');
tagStack.classList.add('tag')
tagStack.textContent = 'html';



//--------------------------------------
const projectTools = document.createElement('div');
projectTools.classList.add('project-box');

const titleTools = document.createElement('h3');
titleTools.classList.add('title-area');
titleTools.textContent = 'Tools';

const containerTools = document.createElement('div');
containerTools.classList.add('container-tags');
// Aqui creo que tengo que crear un ciclo for que haga recorrido de todos los tag y los incluya

const tagTools = document.createElement('div');
tagTools.classList.add('tag')
tagTools.textContent = 'html';


bgWallPortFolio.appendChild(containerPortfolio);
containerPortfolio.appendChild(headerPortfolio);
headerPortfolio.appendChild(boxImgPortfolio);
boxImgPortfolio.appendChild(imgPortfolio);

boxImgPortfolio.appendChild(boxNavHeader);
boxNavHeader.appendChild(tagCategory);

boxNavHeader.appendChild(boxBtnsNavHeader);
boxBtnsNavHeader.appendChild(anchorageRepo);
anchorageRepo.appendChild(boxIconRepo);
boxIconRepo.append(iconGitHubPortFolio)

boxBtnsNavHeader.appendChild(anchorageOpenWeb);
anchorageOpenWeb.appendChild(boxIconWeb);
boxIconWeb.appendChild(iconOpenWeb);

headerPortfolio.appendChild(dataProject);
dataProject.appendChild(titleProject);

headerPortfolio.appendChild(boxDate);
boxDate.appendChild(iconDate)
boxDate.appendChild(dateProject)

containerPortfolio.appendChild(bodyProject);

bodyProject.appendChild(textBodyProject)

bodyProject.appendChild(projectStack);
projectStack.appendChild(titleStack);
bodyProject.appendChild(containerStack);
containerStack.appendChild(tagStack)

bodyProject.appendChild(tagIconAndLevel);


