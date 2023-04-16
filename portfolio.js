
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

const containerExplorerNav = document.createElement('div');
containerExplorerNav.classList.add('container-explorer-nav');

const titleExplore = document.createElement('h3');
titleExplore.classList.add('title-explore')
titleExplore.innerText = 'Explora'; 


const navBarPortfolio = document.createElement('div');
navBarPortfolio.classList.add('nav-bar-portfolio');
navBarPortfolio.setAttribute('id', 'mi-contenedor');


const containerShipPortfolio = document.createElement('div');
containerShipPortfolio.classList.add('container-ship-portfolio');


portfolio.appendChild(frame);
frame.appendChild(frameStructurePortfolio);
frameStructurePortfolio.appendChild(titlePortfolio);
frameStructurePortfolio.appendChild(containerShipPortfolio);
containerShipPortfolio.appendChild(containerExplorerNav);
containerExplorerNav.appendChild(titleExplore);
containerExplorerNav.appendChild(navBarPortfolio);




const iconLevel = ['🙈', '🙉', '🙊'];

const cardListPortfolio = [];

cardListPortfolio.push({  
    id:'Frontend',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75',
    title:'404 NotFound', 
    level: 'aprendiz',
    icon: iconLevel[1],
    tags: ['css', 'html'],
    urlweb:'https://404-not-found-gules.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/404-Not-Found',
    date:'23 agosto 2023',
    text: 'Este es un proyecto que tiene como objetivo brindar una experiencia de usuario más agradable y personalizada al momento de mostrar el error 404 de un sitio web. En lugar de mostrar la página de error genérica, este proyecto ofrece una página personalizada y atractiva que hará que los usuarios se sientan más cómodos al momento de encontrar una página que no existe en tu sitio web.'
}
)
cardListPortfolio.push({  
    id:'Frontend',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FmyTeamThumbnail.png%3Falt%3Dmedia%26token%3D3dc1bba0-52b9-440d-8a54-fa31ec7c84d8&w=750&q=75',
    title:'My team page', 
    level: 'aprendiz' ,
    icon: iconLevel[2],
    tags: ['css', 'html'],
    urlweb:'https://team-page-nine.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/Team-Page',
    date:'23 agosto 2023',
    text:'Este proyecto es una página web que presenta información sobre un equipo de trabajo. Está desarrollado con HTML y CSS, tiene como objetivo proporcionar una plantilla de página de equipo que pueda ser utilizada como punto de partida para proyectos similares; La página está diseñada para ser fácil de usar y entender para el usuario. Cada miembro del equipo tiene su propia sección con información relevante como su nombre y rol. Además, la página es completamente responsive, lo que significa que se adapta a la perfección a cualquier dispositivo, ya sea un ordenador de escritorio, un teléfono móvil o una tableta.'
}
)
cardListPortfolio.push({  
    id:'Frontend',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FinteriorConsultantThumbnail.png%3Falt%3Dmedia%26token%3Dfb5f8229-8eb9-4d70-b0d4-fbd2829a0cf0&w=750&q=75',
    title:'Interior Consultant', 
    level: 'aprendiz' ,
    icon: iconLevel[1],
    tags: ['css', 'html'],
    urlweb:'https://interior-consultant-beta.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/Interior-Consultant',
    date:'23 agosto 2023' ,
    text:'Este proyecto tiene como objetivo crear una página web para una empresa de consultoría de diseño de interiores. La página cuenta con un diseño moderno y minimalista que se adapta a diferentes tamaños de pantalla, desde dispositivos móviles hasta monitores de escritorio; Además de su diseño atractivo y responsivo, la página cuenta con funcionalidades que la hacen fácil de usar y navegar. Por ejemplo, en la versión móvil de la página, se ha implementado un botón de menú que abre y cierra una ventana de navegación, permitiendo al usuario navegar entre las distintas secciones de la página de manera sencilla y organizada, aunque por el momento no existan secciones en la página.'
}
)
cardListPortfolio.push({  
    id:'Frontend',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FrecipeBlogThumbnail.png%3Falt%3Dmedia%26token%3D2d696d3c-a8cb-4c7c-907b-561ae1144cc9&w=750&q=75',
    title:'Recipe Page', 
    level: 'aprendiz' ,
    icon: iconLevel[0],
    tags: ['css', 'html'],
    urlweb:'https://recipe-page-bice.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/Recipe-Page',
    date:'23 agosto 2023',
    text: 'Este es un proyecto de una página de recetas simple que utiliza HTML y CSS El objetivo de este proyecto es proporcionar una plantilla de página de recetas que se pueda utilizar como punto de partida para proyectos relacionados con la gastronomía; La página incluye una sección para la imagen de la receta, una sección para los ingredientes, una sección para las instrucciones de preparación y un area donde se muestran los tiempos de elaboración. Cada sección está diseñada para ser fácil de navegar y de seguir para el usuario. Además, la página es completamente responsive, por lo que se adapta perfectamente a cualquier dispositivo.'
}
)
cardListPortfolio.push({  
    id:'Frontend',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FGalleryThumbnail.png%3Falt%3Dmedia%26token%3D92894792-41d1-4d99-8cbb-e828322c87fd&w=750&q=75',
    title:'My Gallery', 
    level: 'aprendiz' ,
    icon: iconLevel[0],
    tags: ['css', 'html'],
    urlweb:'https://my-gallery-challenge-nine.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/My-Gallery-Challenge',
    date:'23 agosto 2023',
    text: 'Es un proyecto web que tiene como proposito plasmar las obras de una galeria de arte, enseñando, informacion del artista como su imagen y record personal, la página no cuenta con funcionalidades, pero la galleria cuenta con un diseño minimalista que se adapta a diferentes tamaños de pantalla, desde dispositivos móviles hasta monitores de escritorio.'
}
)
cardListPortfolio.push({  
    id:'Frontend',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FCheckoutThumbnail.png%3Falt%3Dmedia%26token%3Dc7ffdbe3-7206-44f2-b1e6-a6b99bf81901&w=750&q=75',
    title:'Checkout Page', 
    level: 'aprendiz',
    icon: iconLevel[1],
    tags: ['css', 'html'],
    urlweb:'https://checkout-page-topaz-three.vercel.app/',
    urlgithub:'https://github.com/carlodvergara/Checkout-Page',
    date:'23 agosto 2023',
    text: 'Este es un ejemplo de una página de checkout simple utilizando HTML, CSS, el objetivo de este proyecto es proporcionar una plantilla de página de checkout básica que se pueda usar como punto de partida para proyectos de comercio electrónico; La página de verificación consta de tres secciones principales: Información de envío, resumen del pedido (productos) e información del pago.'
}
)











let btnNavP;



// Agregar un eventListener al navBarPortfolio
navBarPortfolio.addEventListener("click", (event) => {
    // Verificar si el elemento clickeado es un botón
    if (event.target.classList.contains("btnNavP")) {
      // Obtener el id del contenedor correspondiente al botón
        const containerId = event.target.dataset.id;

      // Ocultar todos los contenedores
        cardListPortfolio.forEach((card) => {
            card.style.display = "none";
        });

      // Mostrar el contenedor correspondiente al botón presionado    
        const containerToShow = containers[containerId];
        containerToShow.style.display = "grid";

        console.log('funciona')

    }
});





//Almacenara {newContainerCards: nombre ID}
let containers = {};

//Almacena los id de cada contendor creado
const containerExist = []

//Genera alcance a las variables
let newContainerCards 

// Función para crear un nuevo container de tarjetas y agregarlo al contenedor principal
    function addNewCardContainer(id) {
        newContainerCards = document.createElement('div')
        newContainerCards.classList.add('new-container-cards');
        newContainerCards.setAttribute('id', id);
        
          // Verificar si estamos en la primera posición de la lista
            // Ocultar el contenedor si no es el primero
        if (containerExist.length > 1) {
        newContainerCards.style.display = 'none';
        }

        containerShipPortfolio.appendChild(newContainerCards);
        containers[id] = newContainerCards;
        containerExist.push(id);

    };


// Ciclo para crear y vincular tarjetas y botones del nav de cada newContainerCards de acuerdo a su tipo.
for (let card of cardListPortfolio) {

// Ciclo para crear las tarjetas vacias
if (Object.keys(card).length === 2) { 
    
    addNewCardContainer(card.id)

    // Crear botón de navbar para el nuevo contenedor
    btnNavP = document.createElement('div');
    btnNavP.setAttribute('id', card.id);
    btnNavP.textContent = card.id;
    btnNavP.classList.add('btn-nav-portfolio');
    navBarPortfolio.appendChild(btnNavP);

    // Crear una tarjeta sin contenido
    const emptyCard = document.createElement('div');
    emptyCard.classList.add('card-empty');
    
    const imgEmptyCard = document.createElement('img');
    imgEmptyCard.classList.add('img-empty-card')
    imgEmptyCard.setAttribute('src', card.background);

    newContainerCards.appendChild(emptyCard);
    emptyCard.appendChild(imgEmptyCard);
    } 
    
    else {

        // Si el objeto tiene más keys, agregar la tarjeta al contenedor correspondiente

        if (!containerExist.includes(card.id)) {

            addNewCardContainer(card.id)

            btnNavP = document.createElement('div');
            btnNavP.setAttribute('id', card.id);
            btnNavP.textContent = card.id;
            btnNavP.classList.add('btn-nav-portfolio');
            navBarPortfolio.appendChild(btnNavP);

            // Crear una tarjeta con contenido
            const contentCard = document.createElement('div');
            contentCard.classList.add('card-content');
    
            const imgCard = document.createElement('img');
            imgCard.classList.add('img-card-content');
            imgCard.setAttribute('src', card.image);

            const boxContentCard = document.createElement('div');
            boxContentCard.classList.add('box-content-card');

            const boxTextCard = document.createElement('div');
            boxTextCard.classList.add('box-text-card-c');
    
            const boxTagsCards = document.createElement('div');
            boxTagsCards.classList.add('box-tags-card');

            const titleCard = document.createElement('h3');
            titleCard.classList.add('title-card-content');
            titleCard.innerText = card.title;

            const tagsCardContent = document.createElement('div');
            tagsCardContent.classList.add('tags-card-content');
            tagsCardContent.innerText = card.tags.join(',');

            const iconL = document.createElement('h3');
            iconL.classList.add('icon-level-content');
            iconL.innerText = card.icon; 


            //Inserciones
            newContainerCards.appendChild(contentCard);            
            contentCard.appendChild(imgCard);
            contentCard.appendChild(boxContentCard);
            boxContentCard.appendChild(boxTextCard);
            boxContentCard.appendChild(boxTagsCards)
            boxTextCard.appendChild(titleCard);
            boxTextCard.appendChild(iconL); 
            boxTagsCards.appendChild(tagsCardContent);
            

            
        } else if (containerExist.includes(card.id)) { 

            const insertDirect = containers[card.id];

            // Crear una tarjeta con contenido
            const contentCard = document.createElement('div');
            contentCard.classList.add('card-content');
    
            const imgCard = document.createElement('img');
            imgCard.classList.add('img-card-content');
            imgCard.setAttribute('src', card.image);

            const boxContentCard = document.createElement('div');
            boxContentCard.classList.add('box-content-card');

            const boxTextCard = document.createElement('div');
            boxTextCard.classList.add('box-text-card-c');
    
            const boxTagsCards = document.createElement('div');
            boxTagsCards.classList.add('box-tags-card');

            const titleCard = document.createElement('h3');
            titleCard.classList.add('title-card-content');
            titleCard.innerText = card.title;

            const tagsCardContent = document.createElement('div');
            tagsCardContent.classList.add('tags-card-content');
            tagsCardContent.innerText = card.tags.join(',');

            const iconL = document.createElement('h3');
            iconL.classList.add('icon-level-content');
            iconL.innerText = card.icon; 

            insertDirect.appendChild(contentCard);
            contentCard.appendChild(imgCard);
            contentCard.appendChild(boxContentCard);
            boxContentCard.appendChild(boxTextCard);
            boxContentCard.appendChild(boxTagsCards)
            boxTextCard.appendChild(titleCard);
            boxTextCard.appendChild(iconL); 
            boxTagsCards.appendChild(tagsCardContent);

            

        }


    }



    }










