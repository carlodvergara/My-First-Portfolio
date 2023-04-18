
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


const containerShipPortfolio = document.createElement('div');
containerShipPortfolio.classList.add('container-ship-portfolio');

const containerExplorerNav = document.createElement('div');
containerExplorerNav.classList.add('container-explorer-nav');

const titleExplore = document.createElement('h3');
titleExplore.classList.add('title-explore')
titleExplore.innerText = 'Explora'; 

const navBarPortfolio = document.createElement('div');
navBarPortfolio.classList.add('nav-bar-portfolio');
navBarPortfolio.setAttribute('id', 'mi-contenedor');




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
    category:'Backend',
    typeCard: 'content',
    background:'',
    image:'https://avatars.githubusercontent.com/u/70109955?s=400&u=28990773bf3ef231a15bb2084620795e07d77242&v=4',
    title:'Backend JAJA', 
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
    category:'Backend',
    typeCard: 'content',
    background:'',
    image:'https://avatars.githubusercontent.com/u/70109955?s=400&u=28990773bf3ef231a15bb2084620795e07d77242&v=4',
    title:'Backend JOJO', 
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
    category:'Backend',
    typeCard: 'content',
    background:'',
    image:'https://avatars.githubusercontent.com/u/70109955?s=400&u=28990773bf3ef231a15bb2084620795e07d77242&v=4',
    title:'Backend JAJA', 
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
    category:'Perro',
    typeCard: 'content',
    background:'',
    image:'https://avatars.githubusercontent.com/u/70109955?s=400&u=28990773bf3ef231a15bb2084620795e07d77242&v=4',
    title:'Perro', 
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
    category:'Backend',
    typeCard: 'content',
    background:'',    
    image:'https://avatars.githubusercontent.com/u/70109955?s=400&u=28990773bf3ef231a15bb2084620795e07d77242&v=4',
    title:'Backend JAJA', 
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
    category:'Backend',
    typeCard: 'content',
    background:'',
    image:'https://avatars.githubusercontent.com/u/70109955?s=400&u=28990773bf3ef231a15bb2084620795e07d77242&v=4',
    title:'Backend JOJO', 
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
    category:'Frontend',
    typeCard: 'content',
    background:'',
    image:'https://avatars.githubusercontent.com/u/70109955?s=400&u=28990773bf3ef231a15bb2084620795e07d77242&v=4',
    title:'Carlos Vergara', 
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
    category:'Apis',
    typeCard: 'content',
    background:'',
    image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75',
    title:'APIS', 
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
    category:'VACIA',
    typeCard:'empty',
    background:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75',
}
)


let btnNavP;


const arrCategories = [];
const objNewCard = {};
const objNewContainer = {};




let categoryCard;

function createCards(){

    let counterCard = 0;    
    
    for (let card of cardListPortfolio){

        categoryCard = card.category;

        if (card.typeCard === 'empty'){
            // Crear una tarjeta sin contenido
            const emptyCard = document.createElement('div');
            emptyCard.classList.add('empty-card');

            const newCardId = "emptyCard-"+ counterCard;
            emptyCard.setAttribute('id', newCardId);

            emptyCard.setAttribute('data-typecard' , card.typeCard)
            
            const imgEmptyCard = document.createElement('img');
            imgEmptyCard.classList.add('img-empty-card')
            imgEmptyCard.setAttribute('src', card.background);

            emptyCard.appendChild(imgEmptyCard);

            if (!arrCategories.includes(card.category)) {
                arrCategories.push(card.category);
            };

            objNewCard[newCardId] = emptyCard;        

            counterCard++

            console.log('#1 Funciona la tarjeta vacia');

        } else { // Crear una tarjeta con contenido

            const contentCard = document.createElement('div');
            contentCard.classList.add('card-content');
            
            const newCardId = "contentCard-"+ counterCard;
            contentCard.setAttribute('id', newCardId);
            
            contentCard.setAttribute('data-category', card.category);
            contentCard.setAttribute('data-typecard' , card.typeCard)
            contentCard.setAttribute('data-title', card.title);
            contentCard.setAttribute('data-level', card.level);
            contentCard.setAttribute('data-icon', card.icon);
            contentCard.setAttribute('data-tags', card.tags);
            contentCard.setAttribute('data-urlweb', card.urlweb);
            contentCard.setAttribute('data-urlgithub', card.urlgithub);
            contentCard.setAttribute('data-date', card.date);
            contentCard.setAttribute('data-text', card.text);            

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
                
            const boxTagsCards = document.createElement('div');
            boxTagsCards.classList.add('box-tags-card');

            for (let tag of card.tags) {
                const tagContent = document.createElement('div');
                tagContent.classList.add('tags-card-content');
                tagContent.textContent = tag;
                boxTagsCards.appendChild(tagContent);
            }            
        
            const iconL = document.createElement('h3');
            iconL.classList.add('icon-level-content');
            iconL.textContent = card.icon; 
        
            //Inserciones           
            contentCard.appendChild(imgCard);
            contentCard.appendChild(boxContentCard);
            boxContentCard.appendChild(boxTextCard);
            boxContentCard.appendChild(boxTagsCards)
            boxTextCard.appendChild(titleCard);
            boxTextCard.appendChild(iconL); 

            if (!arrCategories.includes(card.category)) {
                arrCategories.push(card.category);
            };

            objNewCard[newCardId] = contentCard;   

            counterCard++

            console.log('#2 Funciona la tarjeta con contenido');
        }


        function createNewBtnNav(categoryCard){
    
            let exists = false;        
        
            // Verificar si el botón ya existe
            for (let i = 0; i < navBarPortfolio.children.length; i++) {
                
                const btn = navBarPortfolio.children[i];
                if (btn.textContent === categoryCard) {
                exists = true;
                break;
                }
        
            }
        
            // Crear el botón si no existe
            if (arrCategories.includes(categoryCard) && !exists) { 
                
                btnNavP = document.createElement('div');       
                btnNavP.classList.add('btn-nav-portfolio');
                btnNavP.textContent = categoryCard;
            
                navBarPortfolio.appendChild(btnNavP);
            }
        
        }

        createNewBtnNav(categoryCard);




        let containerCounter = 0;

        function createNewContainer(categoryCard) {

            let exist = false;

            for (const containerId in objNewContainer) {

                const container = objNewContainer[containerId];
                const containerCategory = container.dataset.category;

                if (containerCategory) {
                exist = true;
                break; }     

            }
            

            console.log('sirve la funcion crear nuevo container');

            if (arrCategories.includes(categoryCard) && !exist){           

                const cardContainerCounter = document.createElement('div')
                cardContainerCounter.classList.add('new-container-cards');
                cardContainerCounter.style.display = 'grid';
            
                const newId = "containerId-" + containerCounter;
                cardContainerCounter.setAttribute('id', newId);
                cardContainerCounter.setAttribute('id', 'stylocompa');
                cardContainerCounter.setAttribute('data-category', categoryCard);     

            
                // Verificar si estamos en la primera posición de la lista
                // Ocultar el contenedor si no es el primero.
                if (arrCategories.length > 1) {cardContainerCounter.style.display = 'none'};     
            
                containerShipPortfolio.appendChild(cardContainerCounter);

                objNewContainer[newId] = cardContainerCounter;
                
                containerCounter++;
            }     

        }

        createNewContainer(categoryCard);











        function matchCardWidthNewContainer() {
            // Itera sobre los dos objetos
            for (const containerId in objNewContainer) {
                const container = objNewContainer[containerId];
                const containerCategory = container.dataset.category;
            
                // Itera sobre las tarjetas
                for (const cardId in objNewCard) {
                const card = objNewCard[cardId];
                const cardCategory = card.dataset.category;
            
                // Compara los valores de data-category
                if (containerCategory === cardCategory) {
                    container.appendChild(card);
                }
                
                }
            }

            console.log('funciona add cartas por categoria a container')
        
        }

        matchCardWidthNewContainer();


    }
    

}

createCards()





for (let i = 0; i < navBarPortfolio.children.length; i++) {
    const btnNavP = navBarPortfolio.children[i];
    btnNavP.addEventListener('click', function() {
      const category = this.textContent;
      for (let container in objNewContainer) {
        if (objNewContainer[container].dataset.category === category) {
          objNewContainer[container].style.display = 'grid';
        } else {
          objNewContainer[container].style.display = 'none';
        }
      }
      console.log(`Funciona Mostrando la categoría ${category}`);
    });
  }
  