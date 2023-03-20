const education = document.getElementById('education');

const frameEd = document.createElement('div');
frameEd.classList.add('frame-1-13');


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
h3Myformation.innerText = 'DESARROLLO WEB, DEL APRENDIZAJE AUTONOMO A LA PRACTICA PROFESIONAL';


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


const btnRecord = document.createElement('p');
btnRecord.classList.add('btn-record');
btnRecord.innerText = '📊  Mi record';



const listCardCertified = [];

listCardCertified.push({
    image:'https://i.ibb.co/3znC9J7/Curso-Definitivo-de-HTML-y-CSS.png',
    altimage:'certificado de platzi',
    bottonDownload:''
});

listCardCertified.push({
    image:'https://i.ibb.co/3znC9J7/Curso-Definitivo-de-HTML-y-CSS.png',
    altimage:'certificado de platzi',
    bottonDownload:''
});

listCardCertified.push({
    image:'https://i.ibb.co/3znC9J7/Curso-Definitivo-de-HTML-y-CSS.png',
    altimage:'certificado de platzi',
    bottonDownload:''
});


for (element of listCardCertified){

    const certificateCards = document.createElement('div');
    certificateCards.classList.add('certificate-cards');

    const imgCerticate = document.createElement('img');
    imgCerticate.classList.add('img-certicate');
    imgCerticate.setAttribute('src' , element.image);
    imgCerticate.setAttribute('alt' , element.altimage);

    const footerCertificateCard= document.createElement('div');
    footerCertificateCard.classList.add('footer-certificate-card');

    const ancDownloadCertified= document.createElement('a');
    ancDownloadCertified.classList.add('a');
    ancDownloadCertified.setAttribute('href' , element.bottonDownload);

    const btnIconDownload = document.createElement('span');
    btnIconDownload.classList.add('material-symbols-outlined');
    btnIconDownload.innerText = 'download';

    containerCertificateCards.appendChild(certificateCards);
    certificateCards.appendChild(imgCerticate);
    certificateCards.appendChild(footerCertificateCard);
    footerCertificateCard.appendChild(ancDownloadCertified)
    ancDownloadCertified.appendChild(btnIconDownload);

    
}



const animationBlock = document.createElement('div');
animationBlock.classList.add('animation-block');

const colores = ["#1C2331", "#263238", "#212121", "#303030", "#2C3E50", "#34495E", "#2C2C2C", "#424242", "#323232", "#2E4053", "#1F2D3D", "#394264", "#4E4E4E", "#424242", "#2B2B2B", "#333333", "#282828", "#1F1F1F", "#1E1E1E", "#000000"];

const divs = {
  'COLOR 1': colores[0],
  'COLOR 2': colores[1],
  'COLOR 3': colores[0],
  'COLOR 4': colores[0],
  'COLOR 5': colores[1],
  'JavasCript': colores[5],
  'COLOR 7': colores[0],
  'COLOR 8': colores[1],
  'COLOR 9': colores[0],
  'COLOR 10': colores[0],

  'COLOR 11': colores[0],
  'COLOR 12': colores[1],
  'COLOR 13': colores[0],
  'COLOR 14': colores[0],
  'COLOR 15': colores[1],
  'COLOR 16': colores[0],
  'COLOR 17': colores[0],
  'COLOR 18': colores[1],
  'COLOR 19': colores[0],
  'COLOR 20': colores[0],

  'COLOR 21': colores[0],
  'COLOR 22': colores[1],
  'COLOR 23': colores[0],
  'COLOR 24': colores[0],
  'COLOR 25': colores[1],
  'COLOR 26': colores[0],
  'COLOR 27': colores[0],
  'COLOR 28': colores[1],
  'COLOR 29': colores[0],
  'COLOR 30': colores[0],

  'COLOR 31': colores[0],
  'COLOR 32': colores[1],
  'COLOR 33': colores[0],
  'COLOR 34': colores[0],
  'COLOR 35': colores[1],
  'COLOR 36': colores[0],
  'COLOR 37': colores[0],
  'COLOR 38': colores[1],
  'COLOR 39': colores[0],
  'COLOR 40': colores[0],

  'COLOR 51': colores[0],
  'COLOR 52': colores[1],
  'COLOR 53': colores[0],
  'COLOR 54': colores[0],
  'COLOR 55': colores[1],
  'COLOR 56': colores[0],
  'COLOR 57': colores[0],
  'COLOR 58': colores[1],
  'COLOR 59': colores[0],
  'COLOR 60': colores[0],

  'COLOR 71': colores[0],
  'COLOR 72': colores[1],
  'COLOR 73': colores[0],
  'COLOR 74': colores[0],
  'COLOR 75': colores[1],
  'COLOR 76': colores[0],
  'COLOR 77': colores[0],
  'COLOR 78': colores[1],
  'COLOR 79': colores[0],
  'COLOR 80': colores[0],

  'COLOR 91': colores[0],
  'COLOR 92': colores[1],
  'COLOR 93': colores[0],
  'COLOR 94': colores[0],
  'COLOR 95': colores[1],
  'COLOR 96': colores[0],
  'COLOR 97': colores[0],
  'COLOR 98': colores[1],
  'COLOR 99': colores[0],
  'COLOR 100': colores[0],
 

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
  padres[Math.floor(i / 10)].appendChild(div);
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
myFormation.appendChild(btnRecord);





