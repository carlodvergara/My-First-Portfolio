const bgWallTool = document.getElementById('bg-wall-tool');

const containerTool = document.createElement('div');
containerTool.classList.add('container-tool');



const cardHeaderTool = document.createElement('div');
cardHeaderTool.classList.add('card-header-tool');


const imageCardHeaderTool = document.createElement('img');
imageCardHeaderTool.classList.add('image-card-header');
imageCardHeaderTool.setAttribute('src' , 'https://bootcamprankings.com/wp-content/uploads/2022/12/top-tips-to-create-the-best-desk-setup-for-developers.jpg');
imageCardHeaderTool.setAttribute('alt' , '');


const containerTitleCardTool = document.createElement('div');
containerTitleCardTool.classList.add('container-title-card-tool');

const h3ContainerTitleCardTool = document.createElement('h3');
h3ContainerTitleCardTool.innerText = 'Herramientas';



const boxAreaTool = document.createElement('div');
boxAreaTool.classList.add('box-area-tool');

const iconFolder = document.createElement('i');
iconFolder.classList.add('fa-regular' , 'fa-folder');

const pContainerTitleCardTool = document.createElement('p');
pContainerTitleCardTool.innerText = 'Frontend';


const bodyTools = document.createElement('div');
bodyTools.classList.add('body-tools');

const p1BodyTools = document.createElement('p');
p1BodyTools.innerText = 'Gracias al apredizaje de las siguientes herramientas, he adquirido habilidades como:'

const p2BodyTools = document.createElement('p');
p2BodyTools.innerText = 'Desplegar aplicaciones web utilizando el modelo de integración continua, administrar el historial de cambios del código fuente a traves de controladores de versiones, optimizar imágenes, gestionar, planificar y dar seguimiento al progreso de los proyectos, asi como diseñar y desarrollar wireframes y prototipos.'



const toolsDev = document.createElement('div');
toolsDev.classList.add('tools-dev');


const arrToolsDev = ['Visual Studio code', 'Cloudinary', 'Pandao md', 'Git', 'Google Font', 'Versel', 'Flaticons', 'Font Awesome', 'Trello', 'Figma', 'Notion', 'Bash' , 'GitHub', 'Asana', 'Tinni Images'];

for (let element of arrToolsDev){

    const divTools = document.createElement('div');
    divTools.classList.add('div-tools');
    divTools.innerText = element;

    toolsDev.appendChild(divTools);
}


//Inserciones 
bgWallTool.appendChild(containerTool);
containerTool.appendChild(cardHeaderTool);
cardHeaderTool.appendChild(imageCardHeaderTool);
cardHeaderTool.appendChild(containerTitleCardTool);
containerTitleCardTool.appendChild(h3ContainerTitleCardTool);

containerTitleCardTool.appendChild(boxAreaTool);
boxAreaTool.appendChild(iconFolder);
boxAreaTool.appendChild(pContainerTitleCardTool);

containerTool.appendChild(bodyTools);
bodyTools.appendChild(p1BodyTools);
bodyTools.appendChild(p2BodyTools);
bodyTools.appendChild(toolsDev);
