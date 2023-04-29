
//------------------------------------------------//
//------------  Section Portfolio ----------------//
//------------------------------------------------//

const portfolio = document.getElementById('portfolio');

const frame = document.createElement('div');
frame.classList.add('frame');

const frameStructurePortfolio = document.createElement('div');
frameStructurePortfolio.classList.add('frame-structure-portfolio');

const titlePortfolio = document.createElement('h2');
titlePortfolio.classList.add('title-portfolio');
titlePortfolio.innerText = 'MI PORTAFOLIO'; 

//Contendor Global
const containerShipPortfolio = document.createElement('div');
containerShipPortfolio.classList.add('container-ship-portfolio');


//Container Explorador del Nav
const explorerNav = document.createElement('div');
explorerNav.classList.add('container-explorer-nav');

const titleExplore = document.createElement('h3');
titleExplore.classList.add('title-explore')
titleExplore.innerText = 'Explora'; 

const navBarPortfolio = document.createElement('div');
navBarPortfolio.classList.add('nav-bar-portfolio');
navBarPortfolio.setAttribute('id', 'mi-contenedor');


//Container Explorador Containers
const explorerContainers = document.createElement('div');
explorerContainers.classList.add('explorer-containers');


portfolio.appendChild(frame);
frame.appendChild(frameStructurePortfolio);
frameStructurePortfolio.appendChild(titlePortfolio);
frameStructurePortfolio.appendChild(containerShipPortfolio);

containerShipPortfolio.appendChild(explorerNav);
containerShipPortfolio.appendChild(explorerContainers);

explorerNav.appendChild(titleExplore);
explorerNav.appendChild(navBarPortfolio);



const iconLevel = ['🙈', '🙉', '🙊'];

const cardListPortfolio = [];

cardListPortfolio.push({  
    category:'Frontend',
    typeCard: 'content',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75',
    title:'404 NotFound', 
    level: 'aprendiz',
    icon: iconLevel[0],
    urlweb:'https://404-not-found-gules.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/404-Not-Found',
    date:'23 agosto 2023',
    text: 'Este es un proyecto que tiene como objetivo brindar una experiencia de usuario más agradable y personalizada al momento de mostrar el error 404 de un sitio web. En lugar de mostrar la página de error genérica, este proyecto ofrece una página personalizada y atractiva que hará que los usuarios se sientan más cómodos al momento de encontrar una página que no existe en tu sitio web.',
    stack: ['css', 'html']
}
)
cardListPortfolio.push({  
    category:'Frontend',
    typeCard: 'content',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FmyTeamThumbnail.png%3Falt%3Dmedia%26token%3D3dc1bba0-52b9-440d-8a54-fa31ec7c84d8&w=750&q=75',
    title:'My team page', 
    level: 'aprendiz' ,
    icon: iconLevel[1],
    urlweb:'https://team-page-nine.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/Team-Page',
    date:'23 agosto 2023',
    text:'Este proyecto es una página web que presenta información sobre un equipo de trabajo. Está desarrollado con HTML y CSS, tiene como objetivo proporcionar una plantilla de página de equipo que pueda ser utilizada como punto de partida para proyectos similares; La página está diseñada para ser fácil de usar y entender para el usuario. Cada miembro del equipo tiene su propia sección con información relevante como su nombre y rol. Además, la página es completamente responsive, lo que significa que se adapta a la perfección a cualquier dispositivo, ya sea un ordenador de escritorio, un teléfono móvil o una tableta.',
    stack: ['css', 'html']
}
)
cardListPortfolio.push({  
    category:'Frontend',
    typeCard: 'content',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FinteriorConsultantThumbnail.png%3Falt%3Dmedia%26token%3Dfb5f8229-8eb9-4d70-b0d4-fbd2829a0cf0&w=750&q=75',
    title:'Interior Consultant', 
    level: 'aprendiz' ,
    icon: iconLevel[2],
    urlweb:'https://interior-consultant-beta.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/Interior-Consultant',
    date:'23 agosto 2023' ,
    text:'Este proyecto tiene como objetivo crear una página web para una empresa de consultoría de diseño de interiores. La página cuenta con un diseño moderno y minimalista que se adapta a diferentes tamaños de pantalla, desde dispositivos móviles hasta monitores de escritorio; Además de su diseño atractivo y responsivo, la página cuenta con funcionalidades que la hacen fácil de usar y navegar. Por ejemplo, en la versión móvil de la página, se ha implementado un botón de menú que abre y cierra una ventana de navegación, permitiendo al usuario navegar entre las distintas secciones de la página de manera sencilla y organizada, aunque por el momento no existan secciones en la página.',
    stack: ['css', 'html']
}
)
cardListPortfolio.push({  
    category:'Frontend',
    typeCard: 'content',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FrecipeBlogThumbnail.png%3Falt%3Dmedia%26token%3D2d696d3c-a8cb-4c7c-907b-561ae1144cc9&w=750&q=75',
    title:'Recipe Page', 
    level: 'aprendiz' ,
    icon: iconLevel[0],
    urlweb:'https://recipe-page-bice.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/Recipe-Page',
    date:'23 agosto 2023',
    text: 'Este es un proyecto de una página de recetas simple que utiliza HTML y CSS El objetivo de este proyecto es proporcionar una plantilla de página de recetas que se pueda utilizar como punto de partida para proyectos relacionados con la gastronomía; La página incluye una sección para la imagen de la receta, una sección para los ingredientes, una sección para las instrucciones de preparación y un area donde se muestran los tiempos de elaboración. Cada sección está diseñada para ser fácil de navegar y de seguir para el usuario. Además, la página es completamente responsive, por lo que se adapta perfectamente a cualquier dispositivo.',
    stack: ['css', 'html']
}
)
cardListPortfolio.push({  
    category:'Frontend',
    typeCard: 'content',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FGalleryThumbnail.png%3Falt%3Dmedia%26token%3D92894792-41d1-4d99-8cbb-e828322c87fd&w=750&q=75',
    title:'My Gallery', 
    level: 'aprendiz' ,
    icon: iconLevel[1],
    urlweb:'https://my-gallery-challenge-nine.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/My-Gallery-Challenge',
    date:'23 agosto 2023',
    text: 'Es un proyecto web que tiene como proposito plasmar las obras de una galeria de arte, enseñando, informacion del artista como su imagen y record personal, la página no cuenta con funcionalidades, pero la galleria cuenta con un diseño minimalista que se adapta a diferentes tamaños de pantalla, desde dispositivos móviles hasta monitores de escritorio.',
    stack: ['css', 'html']
}
)
cardListPortfolio.push({  
    category:'Frontend',
    typeCard: 'content',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FCheckoutThumbnail.png%3Falt%3Dmedia%26token%3Dc7ffdbe3-7206-44f2-b1e6-a6b99bf81901&w=750&q=75',
    title:'Checkout Page', 
    level: 'aprendiz',
    icon: iconLevel[2],
    urlweb:'https://checkout-page-topaz-three.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/Checkout-Page',
    date:'23 agosto 2023',
    text: 'Este es un ejemplo de una página de checkout simple utilizando HTML, CSS, el objetivo de este proyecto es proporcionar una plantilla de página de checkout básica que se pueda usar como punto de partida para proyectos de comercio electrónico; La página de verificación consta de tres secciones principales: Información de envío, resumen del pedido (productos) e información del pago.',
    stack: ['css', 'html']
}
)
cardListPortfolio.push({  
    category:'Backend',
    typeCard: 'empty',
    background:'https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000',
    title:''
}
)
cardListPortfolio.push({  
    category:'Apis',
    typeCard: 'empty',
    background:'https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000',
    title:''
}
)
cardListPortfolio.push({  
    category:'Fulls Stack',
    typeCard: 'empty',
    background:'https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg?w=2000',
    title:''
}
)



// Estructuras de Datos
const arrCategories = [];
const objNewCards = {};
const objNewContainers = {};


// Estructura portfolio
function portfolioConstructor(){
    let value;
    let counterCard = 0; 
    let counterContainer = 0; 
        
    for (let card of cardListPortfolio){

        value = card;

        //-------------------

        function addNewCard(){ 

            if (card.typeCard === 'empty' || Object.keys(card).length <= 4){
                // Crear una tarjeta sin contenido
                const newCard = document.createElement('div');
                newCard.classList.add('empty-card');
                
                const newCardId = "emptyCard-"+ counterCard + '-' + card.title;
                newCard.setAttribute('id', newCardId);
                
                newCard.setAttribute('data-category' , card.category);
                newCard.setAttribute('data-typecard' , card.typeCard);
                
                const imgEmptyCard = document.createElement('img');
                imgEmptyCard.classList.add('img-empty-card');
                imgEmptyCard.setAttribute('src', card.background);
                
                newCard.appendChild(imgEmptyCard);
                
                    if (!arrCategories.includes(card.category)) {
                        arrCategories.push(card.category); 
                    };
                
                objNewCards[newCardId] = newCard;       
                counterCard++
                
                
                console.log('#1 Funciona la tarjeta vacia');
                
                } else { // Crear una tarjeta con contenido
                
                const newCard = document.createElement('div');
                newCard.classList.add('card-content' , 'mi-contenedor');
    
                const newCardId = "contentCard-"+ counterCard + '-' + card.title;
                newCard.setAttribute('id', newCardId);
                    
                newCard.setAttribute('data-category', card.category);
                newCard.setAttribute('data-typecard' , card.typeCard)
                newCard.setAttribute('data-title', card.title);
                newCard.setAttribute('data-level', card.level);
                newCard.setAttribute('data-icon', card.icon);
                newCard.setAttribute('data-stack', card.stack);
                newCard.setAttribute('data-urlweb', card.urlweb);
                newCard.setAttribute('data-urlgithub', card.urlgithub);
                newCard.setAttribute('data-date', card.date);
                newCard.setAttribute('data-text', card.text);    
                
                const imgCard = document.createElement('img');
                imgCard.classList.add('img-card-content');
                imgCard.setAttribute('src', card.image);
                
                const boxContentCard = document.createElement('div');
                boxContentCard.classList.add('box-content-card');
                
                const boxTextCard = document.createElement('div');
                boxTextCard.classList.add('box-text-card-c');
        
                const titleCard = document.createElement('h3');
                titleCard.classList.add('title-card-content');
                titleCard.textContent = card.title;
                        
                const boxStackCards = document.createElement('div');
                boxStackCards.classList.add('box-stack-card');
        
                    for (let stack of card.stack) {
                        const stackContent = document.createElement('div');
                        stackContent.classList.add('stack-card-content');
                        stackContent.textContent = stack;
                        boxStackCards.appendChild(stackContent);
                    }            
                    
                const iconL = document.createElement('h3');
                iconL.classList.add('icon-level-content');
                iconL.textContent = card.icon; 
                    
                //Inserciones           
                newCard.appendChild(imgCard);
                newCard.appendChild(boxContentCard);
                boxContentCard.appendChild(boxTextCard);
                boxContentCard.appendChild(boxStackCards)
                boxTextCard.appendChild(titleCard);
                boxTextCard.appendChild(iconL); 
                    
                if (!arrCategories.includes(card.category)) {
                    arrCategories.push(card.category);
                };
                    
                objNewCards[newCardId] = newCard;   
                counterCard++
                    
                console.log('#2 Funciona la tarjeta con contenido');
            }


        }

        addNewCard()

        //-------------------
        
        function addNewBtnNav(){
    
            let exists = false;        
        
            // Verificar si el botón ya existe
            for (let i = 0; i < navBarPortfolio.children.length; i++) {
                
                const btn = navBarPortfolio.children[i];
                if (btn.textContent === card.category) {
                exists = true;
                break;
                }
        
            }
        
            // Crear el botón si no existe
            if (arrCategories.includes(card.category) && !exists) { 
                
                btnNavP = document.createElement('div');       
                btnNavP.classList.add('btn-nav-portfolio');
                btnNavP.textContent = card.category;
            
                navBarPortfolio.appendChild(btnNavP);
            }

            console.log('#3 Funciona Creacion Btns del nav');
        
        }

        addNewBtnNav();
                
        //-------------------
                
        function addNewContainer(){

            // Verificar si el contenedor ya existe dentro de explorerContainers ( segun ref la categoria)

            let exist = false;

            for (let i = 0; i < explorerContainers.children.length; i++) {
                const container = explorerContainers.children[i];
                if (container.getAttribute('data-category') === value.category) {
                    exist = true;
                    break;

                }
                console.log('#4.1 Funciona Creador de contenedores');
            }


            // Crear el nuevo contendor solo si existe la card.category que esta recibiendo en el array de categorias y si no existe ningun contenedor con esa categoria en explorerContainers.

            if (arrCategories.includes(value.category) && !exist) { 

                const newContainer = document.createElement('div')
                newContainer.classList.add('new-container-cards');
                newContainer.style.display = 'grid';

                const newId = "containerId-" + counterContainer + value.category;
                newContainer.setAttribute('id', newId);
                newContainer.setAttribute('data-category', value.category); 

                // Verificar si estamos en la primera posición de la lista
                // Ocultar el contenedor si no es el primero.
                if (arrCategories.length > 1) {newContainer.style.display = 'none'}; 

                objNewContainers[newId] = newContainer;
                explorerContainers.appendChild(newContainer);


                counterContainer++

                console.log('#4.2 Funciona Creador de contenedores');
            }

        }

        addNewContainer()


        //-------------------


        function matchCardContainer(){
            // Itera sobre los dos objetos
            for (const containerId in objNewContainers) {
                const container = objNewContainers[containerId];
                const containerCategory = container.dataset.category;
            
                // Itera sobre las tarjetas
                for (const cardId in objNewCards) {
                const card = objNewCards[cardId];
                const cardCategory = card.dataset.category;
            
                // Compara los valores de data-category
                if (containerCategory === cardCategory) {
                    container.appendChild(card);
                }
                
                }
            }

            console.log('funciona add cartas por categoria a container')

        }

        matchCardContainer()


    }
    

}

portfolioConstructor() 

// Seleccionar el primer botón y aplicarle la clase por defecto
navBarPortfolio.children[0].classList.add('border-btn-portfolio');

for (let i = 0; i < navBarPortfolio.children.length; i++) {
    const btnNavP = navBarPortfolio.children[i];
    btnNavP.addEventListener('click', function() {
      const category = this.textContent;
      console.log(objNewContainers)
  
      // Agregar clase al botón que se hace clic
      this.classList.add('border-btn-portfolio');
  
      // Eliminar clase de los demás botones
      for (let j = 0; j < navBarPortfolio.children.length; j++) {
        if (navBarPortfolio.children[j] !== this) {
          navBarPortfolio.children[j].classList.remove('border-btn-portfolio');
        }
      }
  
      for (let container in objNewContainers) {
        console.log(`Categoría del contenedor: ${objNewContainers[container].dataset.category}`);
        console.log(`Categoría seleccionada: ${category}`);
        if (objNewContainers[container].dataset.category === category) {
          objNewContainers[container].style.display = 'grid';
        } else {
          objNewContainers[container].style.display = 'none';
        }
      }
      console.log(`Funciona Mostrando la categoría ${category}`);
    });
}




document.addEventListener('DOMContentLoaded', function () {
    
    const explorerContainers = document.getElementById('explorer-containers');

    for (let i = 0; i < explorerContainers.children.length; i++) {
    const container = explorerContainers.children[i];

    for (let j = 0; j < container.children.length; j++) {
        const card = container.children[j];
        

        if (!card.classList.contains('empty-card')) {
            

            card.addEventListener('click', (event) => {
            const image = event.target.dataset.image;
            const category = event.target.dataset.category;
            const title = event.target.dataset.title;
            const openRepo = event.target.dataset.urlgithub;
            const openWeb = event.target.dataset.urlweb;
            const date = event.target.dataset.date;
            const text = event.target.dataset.text;
            const icon = event.target.dataset.icon;
            const level = event.target.dataset.level;
            const stack = event.target.dataset.stack.split(',');

            
            const selectedCard = { image, category, title, openRepo, openWeb, date, text, icon, level, stack,};

            // Almacenar en localStorage
            localStorage.setItem('selectedCard', JSON.stringify(selectedCard));
            
            mostrarModal();
        });
        }
    }
    }
});



function mostrarModal(){
    
    const modal = document.querySelector('.bg-wallPortfolio');
    modal.classList.contains('close-all');

    modal.classList.remove('close-all');
    modal.classList.add('open-all');
    

// Obtener la información de localStorage
selectedCard = JSON.parse(localStorage.getItem('selectedCard'));



const image = localStorage.getItem('image');
const category = localStorage.getItem('category');
const title = localStorage.getItem('title');
const urlgithub = localStorage.getItem('urlgithub');
const urlweb = localStorage.getItem('urlweb');
const date = localStorage.getItem('date');
const text = localStorage.getItem('text');
const icon = localStorage.getItem('icon')
const level = localStorage.getItem('level');
const stack = localStorage.getItem('stack').split(',');

const bgWallPortFolio = document.querySelector('.bg-wallPortfolio');

const containerPortfolio = document.createElement('div');
containerPortfolio.classList.add('container-portfolio');


//--------------------------------------
const headerPortfolio = document.createElement('div');
headerPortfolio.classList.add('header-portfolio');

const boxImgPortfolio = document.createElement('div');
boxImgPortfolio.classList.add('box-img-portfolio');

const imgPortfolio = document.createElement('img');
imgPortfolio.classList.add('img-portfolio');
imgPortfolio.setAttribute('src' , image );


//--------------------------------------
const boxNavHeader = document.createElement('div');
boxNavHeader.classList.add('box-nav-header');

const tagCategory = document.createElement('div');
tagCategory.classList.add('tag');
tagCategory.textContent = category;

const tagIconAndLevel = document.createElement('div');
tagIconAndLevel.classList.add('tag');
tagIconAndLevel.textContent = icon + '' + level;

const boxBtnsNavHeader = document.createElement('div');
boxBtnsNavHeader.classList.add('box-btns-nav-header');

const anchorageRepo = document.createElement('a');
anchorageRepo.setAttribute('href' , urlgithub);
anchorageRepo.setAttribute('target' , '_blank');

const boxIconRepo = document.createElement('div');
boxIconRepo.classList.add('box-icon-repo');

const iconGitHubPortFolio = document.createElement('i');
iconGitHubPortFolio.classList.add('fa-brands' , 'fa-github' , 'icongithub-portfolio');



//--------------------------------------------
const anchorageOpenWeb = document.createElement('a');
anchorageOpenWeb.classList.add('anchorage-web');
anchorageOpenWeb.setAttribute('href' , urlweb);

const boxIconWeb = document.createElement('div');
boxIconWeb.classList.add('box-icon-web');

const iconOpenWeb = document.createElement('i');
iconOpenWeb.classList.add('fa-solid' , 'fa-arrow-up-right-from-square');



//--------------------------------------
const dataProject = document.createElement('div');
dataProject.classList.add('data-project');

const titleProject = document.createElement('h3');
titleProject.classList.add('title-project');
titleProject.textContent = title;



//--------------------------------------
const boxDate = document.createElement('div');
boxDate.classList.add('box-date');

const iconDate = document.createElement('i');
iconDate.classList.add('fa-regular' , 'fa-calendar');

const dateProject = document.createElement('p');
dateProject.classList.add('date-project');
dateProject.textContent = date;



//--------------------------------------
const bodyProject = document.createElement('div');
bodyProject.classList.add('body-project');

const textBodyProject = document.createElement('p');
textBodyProject.classList.add('text-body-project');
textBodyProject.textContent = text;




//--------------------------------------
// Aqui creo que tengo que crear u nciclo for que haga recorrido de todos los tag y los incluya
const projectStack = document.createElement('div');
projectStack.classList.add('project-box');

const titleStack = document.createElement('h3');
titleStack.classList.add('title-area');
titleStack.textContent = stack;

const containerStack = document.createElement('div');
containerStack.classList.add('container-tags');




stack.forEach(function(stack) {
    const tagStack = document.createElement('div');
    tagStack.classList.add('tag');
    tagStack.textContent = stack;
    containerStack.appendChild(tagStack);
});



//--------------------------------------
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

bodyProject.appendChild(tagIconAndLevel);

}


//--------------------------------------------
const bgWallPortFolio = document.querySelector('.bg-WallPortFolio')

bgWallPortFolio.addEventListener('click', () => {
    const modal = bgWallPortFolio;
    if (modal.classList.contains('open-all')) {
        modal.classList.remove('open-all');
        modal.classList.add('close-all');
    }
    localStorage.removeItem('selectedCard');
});
