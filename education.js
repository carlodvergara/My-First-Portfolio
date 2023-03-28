const education = document.getElementById('education');

const frameEd = document.createElement('div');
frameEd.classList.add('frame');


const frameStructureEducation = document.createElement('div');
frameStructureEducation.classList.add('frame-structure-education');


const myFormation = document.createElement('div');
myFormation.classList.add('my-formation');


const titleEducation = document.createElement('h2');
titleEducation.classList.add('title-education');
titleEducation.innerText = 'EDUCACION';


const textMyformation = document.createElement('div');
textMyformation.classList.add('text-my-formation');


const h3Myformation = document.createElement('h3');
h3Myformation.innerText = 'DESARROLLO WEB';


const p1Myformation = document.createElement('p');
p1Myformation.innerText = 'Mi formación en desarrollo web comenzó como un proceso autodidacta, explorando videos en YouTube, documentación de lenguajes y explorando código en sitios web como Codepen. Sin embargo, mi deseo de desarrollar habilidades prácticas y relevantes para el mundo laboral me llevó a buscar cursos virtuales en diversas plataformas, incluyendo Platzi.';


const p2Myformation = document.createElement('p');
p2Myformation.innerText = 'A través de una combinación de aprendizaje autónomo y cursos en línea, he adquirido conocimientos fundamentales en HTML, CSS y JavaScript, También he adquirido habilidades en diseño web, experiencia de usuario, animaciones y transiciones, actualmente estoy aplicando los conocimientos adquiridos en proyectos web reales por mi propia cuenta, mientras continúo mi formación en línea y obtengo certificaciones en nuevas tecnologías';


const containerCertified = document.createElement('div');
containerCertified.classList.add('container-certified');

const titleCertified = document.createElement('div');
titleCertified.classList.add('title-certified');

const h3TitleCertified = document.createElement('h3');
h3TitleCertified.innerText = 'CERTIFICADOS';


const containerCertificateCards = document.createElement('div');
containerCertificateCards.classList.add('container-certificate-cards');



const listCardCertified = [];

listCardCertified.push({
  image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75',
  title:'HTML y CSS', 
});

listCardCertified.push({
  image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75',
  title:'Javascript', 


});





for (element of listCardCertified){


  
  const card = document.createElement('div');
  card.classList.add('card-education');
  
  const imgCard = document.createElement('img');
  imgCard.classList.add('img-card');
  imgCard.setAttribute('src', element.image);
  
  const titleCard = document.createElement('h3');
  titleCard.classList.add('title-card');
  titleCard.innerText = element.title;
  

  const boxLevel = document.createElement('div');
  boxLevel.classList.add('box-level-certicate-cards');


  const boxBtnDownloadCert = document.createElement('div');
  boxBtnDownloadCert.classList.add('box-btn-download-cert-ed');

  const anchorageBtnDownload = document.createElement('a');
  anchorageBtnDownload.setAttribute('href' , '#');

  const spanBtnDownloadIcon = document.createElement('span');
  spanBtnDownloadIcon.classList.add('material-symbols-outlined');
  spanBtnDownloadIcon.innerText ='download';

  
  const btnRecord = document.createElement('p');
  btnRecord.classList.add('btn-record');
  btnRecord.innerText = 'Record' ;
  
  const arrowIcon = document.createElement('i');
  arrowIcon.classList.add('fa-solid' , 'fa-arrow-right' , 'fa-lg');


  containerCertificateCards.appendChild(card);
  card.appendChild(imgCard);
  card.appendChild(titleCard);
  card.appendChild(boxLevel);
  boxLevel.appendChild(boxBtnDownloadCert);
  boxBtnDownloadCert.appendChild(anchorageBtnDownload);
  anchorageBtnDownload.appendChild(spanBtnDownloadIcon);
  boxLevel.appendChild(btnRecord);
  btnRecord.appendChild(arrowIcon);

  windowMyRecord = document.getElementById('bg-wall-record');
  windowMyRecord.classList.add('close-all');
  
  //Open
  btnRecord.addEventListener('click', () => {
    windowMyRecord.classList.toggle('open-window');
    console.log('hola');
  });
  

      //Close
      windowMyRecord.addEventListener('click', (event) => {
        if (event.target === windowMyRecord ) {
          windowMyRecord.classList.remove('open-window');
        }
      });
  

}


const animationBlock = document.createElement('div');
animationBlock.classList.add('animation-block');

const colores = ["#495D66", "#5E6F74", "#7D8D92", "#726B5B", "#2E3850", "#6D8788" , "#2E3850", "#30593E", "#436B7E", "#658D78", "#4D7581", "#A76A50", "#AF7E26"];

 



const divs = {
  'flex-wrap: nowrap | wrap':colores[1],
  'flex-grow: valor;': colores[2] ,
  'setInterval(funcion, tiempo)':colores[3],
  'Array.forEach()': colores[7],
  'grid-template-columns': colores[8],
  'addEventListener()': colores[9],

  'document.querySelector()': colores[6],
  'JSON.parse()': colores[11],
  '(let i = 0; i < array.length; i++)': colores[12],
  '<html></html>': colores[9],
  'document.createElement(...)': colores[8],
  'display: grid;': colores[7],
  'margin: valor;': colores[6],
  'font-family': colores[5],
  'function () {...}': colores[4],
  '<body></body>': colores[6],

  '<a href="#"></a>': colores[2],
  'selector': colores[1],
  '<button type="tipo">Texto del botón</button>': colores[3],
  '<form></form> ': colores[6],
  '<section></section>': colores[8],
  '<input>': colores[8],
  'display: flex;': colores[9],
  'position: static;': colores[7],
  'git status': colores[6],
  'flex-shrink: valor;': colores[5],


  'visibility: hidden': colores[7],
  'filter': colores[6],
  'object-fit: contain;': colores[9],
  'git add': colores[10],
  'transition: 0.5s ease-in-out;': colores[1],
  'git branch': colores[2],

  '{display: block }': colores[3],
  'git clone': colores[4],
  'git merge': colores[5],
  'git push': colores[6],
  'mkdir': colores[7],
  'git commit -m': colores[0],
  'grep': colores[8],
  'mv': colores[12],
  'getElementById': colores[11],
  'const suma = (a, b)': colores[5],


};

const padres = [];

for (let i = 0; i < 10; i++) {
  const padre = document.createElement('div');
  padre.classList.add('block-element');
  if (i % 2 === 0) {
    padre.classList.add('sliderright');
  } else {
    padre.classList.add('sliderleft');
  }
  padres.push(padre);
  animationBlock.appendChild(padre);
}

let i = 0;

const divStyleElems = document.querySelectorAll('.div-style');

for (const texto in divs) {
  const color = divs[texto];
  const div = document.createElement('div');
  div.classList.add('div-style');
  div.textContent = texto;
  div.style.backgroundColor = color;
  padres[Math.floor(i / 6)].appendChild(div);
  i++;
}



// Insercion Global
education.appendChild(frameEd);

frameEd.appendChild(frameStructureEducation);

frameStructureEducation.appendChild(myFormation);

frameStructureEducation.appendChild(animationBlock);

myFormation.appendChild(titleEducation);
myFormation.appendChild(textMyformation);

textMyformation.appendChild(h3Myformation);
textMyformation.appendChild(p1Myformation);
textMyformation.appendChild(p2Myformation);

myFormation.appendChild(containerCertified);

containerCertified.appendChild(titleCertified);
titleCertified.appendChild(h3TitleCertified);

myFormation.appendChild(containerCertificateCards);


windowMyRecord = document.getElementById('bg-wall-record');
windowMyRecord.classList.add('close-all');


const body = document.querySelector('body');


  //Open //PENDIENTE ARREGLAR EL OVERFLOW DEL BODY 
  btnRecord.addEventListener('click', () => {
    windowMyRecord.classList.toggle('open-window');
    body.classList.toggle('no-scroll');
    console.log('hola');
  });


    //Close
    windowMyRecord.addEventListener('click', (event) => {
      if (event.target === windowMyRecord ) {
        windowMyRecord.classList.remove('open-window');
      }
    });





