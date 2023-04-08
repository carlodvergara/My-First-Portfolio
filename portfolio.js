
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
titlePortfolio.innerText = 'MI PORTAFOLIO' 

const containerCards = document.createElement('div');
containerCards.classList.add('container-cards');



const containerExploreThemes = document.createElement('div');
containerExploreThemes.classList.add('container-expore-themes');

const titleExplore = document.createElement('h3');
titleExplore.classList.add('title-explore');
titleExplore.innerText = 'EXPLORA';


const boxbtnsNavExplore = document.createElement('div');
boxbtnsNavExplore.classList.add('box-btns-nav-explore');

const btnDivNavExplore = document.createElement('div');
btnDivNavExplore.classList.add('btn-div-nav-explore');

const pBtnExploreOne = document.createElement('p');
pBtnExploreOne.classList.add('p-btn-explore');
pBtnExploreOne.innerText = 'Front-end';

const pBtnExploreTwo = document.createElement('p');
pBtnExploreTwo.classList.add('p-btn-explore');
pBtnExploreTwo.innerText = 'En progreso';

const spanPBtnExploreTwo = document.createElement('span');
spanPBtnExploreTwo.classList.add('typing-dots');
spanPBtnExploreTwo.innerText = ' . . .';









const cardListPortfolio = [];

cardListPortfolio.push(
    {  
     cardweb:'https://www.youtube.com/watch?v=TmKh7lAwnBI',
     image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75',
     title:'404 NotFound', 
     level: 'aprendiz'  
    }
)
cardListPortfolio.push(
    {  
     cardweb:'#',
     image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FmyTeamThumbnail.png%3Falt%3Dmedia%26token%3D3dc1bba0-52b9-440d-8a54-fa31ec7c84d8&w=750&q=75',
     title:'My team page', 
     level: 'aprendiz'  
    }
)
cardListPortfolio.push(
    {  
     cardweb:'',
     image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FinteriorConsultantThumbnail.png%3Falt%3Dmedia%26token%3Dfb5f8229-8eb9-4d70-b0d4-fbd2829a0cf0&w=750&q=75',
     title:'Interior Consultant', 
     level: 'aprendiz'  
    }
)
cardListPortfolio.push(
    {  
     cardweb:'',
     image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FrecipeBlogThumbnail.png%3Falt%3Dmedia%26token%3D2d696d3c-a8cb-4c7c-907b-561ae1144cc9&w=750&q=75',
     title:'Recipe Page', 
     level: 'aprendiz'  
    }
)
cardListPortfolio.push(
    {  
     cardweb:'',
     image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FGalleryThumbnail.png%3Falt%3Dmedia%26token%3D92894792-41d1-4d99-8cbb-e828322c87fd&w=750&q=75',
     title:'My Gallery', 
     level: 'aprendiz'  
    }
)
cardListPortfolio.push(
    {  
     cardweb:'',
     image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252FCheckoutThumbnail.png%3Falt%3Dmedia%26token%3Dc7ffdbe3-7206-44f2-b1e6-a6b99bf81901&w=750&q=75',
     title:'Checkout Page', 
     level: 'aprendiz'  
    }
)



for (var element of cardListPortfolio){

const cardLink = document.createElement('a');
cardLink.setAttribute("href", element.cardweb);
cardLink.setAttribute("target", "_blank");
cardLink.classList.add('card-link');

const card = document.createElement('div');
card.classList.add('card');

const imgCard = document.createElement('img');
imgCard.classList.add('img-card');
imgCard.setAttribute('src', element.image);

const titleCard = document.createElement('h3');
titleCard.classList.add('title-card');
titleCard.innerText = element.title;

const boxLevel = document.createElement('div');
boxLevel.classList.add('box-level');

const namelevel = document.createElement('P');
namelevel.classList.add('name-level');
namelevel.innerText = element.level;



const lineLevel = document.createElement('div');
lineLevel.classList.add('line-level');



// Reparar esta redundancia tan HP
const hrOne = document.createElement('hr');
hrOne.classList.add('hr-one');

const hrTwo = document.createElement('hr');
hrTwo.classList.add('hr-two');

const hrThree = document.createElement('hr');
hrThree.classList.add('hr-three');

const hrFour = document.createElement('hr');
hrFour.classList.add('hr-four');



// Inserciones
portfolio.appendChild(frame);
frame.appendChild(frameStructurePortfolio);

frameStructurePortfolio.appendChild(titlePortfolio);

frameStructurePortfolio.appendChild(containerExploreThemes);
containerExploreThemes.appendChild(titleExplore);
containerExploreThemes.appendChild(boxbtnsNavExplore);
boxbtnsNavExplore.appendChild(btnDivNavExplore)
btnDivNavExplore.appendChild(pBtnExploreOne)
btnDivNavExplore.appendChild(pBtnExploreTwo)
pBtnExploreTwo.appendChild(spanPBtnExploreTwo)

frameStructurePortfolio.appendChild(containerCards);
containerCards.appendChild(cardLink);
cardLink.appendChild(card);

card.appendChild(imgCard);
card.appendChild(titleCard);

card.appendChild(boxLevel);
boxLevel.appendChild(namelevel);
boxLevel.appendChild(lineLevel);
lineLevel.appendChild(hrOne);
lineLevel.appendChild(hrTwo);
lineLevel.appendChild(hrThree);
lineLevel.appendChild(hrFour);


//------------------------------------------------//
//-----     Resolver esta *****  despues   -------//
// El problema es que al darle click a tarjetas que no estan linkeadas con una url por la key cardweb, estas igual abren una nueva pagina y recargan la web existente y esto no deberia ser, al darles click no deberian hacer nada sino tienen url

containerCards.addEventListener("click", function(event) {
    if (event.target.hasAttribute('href')) {
        const cardweb = event.target.getAttribute('href');
        if (cardweb && cardweb !== '#') {
          event.preventDefault();
          window.open(element.cardweb, '_blank');
        }
      }
  });

}




