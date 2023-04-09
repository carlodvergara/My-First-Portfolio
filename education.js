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

listCardCertified.push({
  image:'https://devchallenges.io/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fdevchallenges-1234.appspot.com%2Fo%2FchallengesDesigns%252F404PageThumbnail.png%3Falt%3Dmedia%26token%3D81f7c567-c0bc-446f-a549-07eeda31c5ef&w=750&q=75',
  title:'Javascript', 
});







for (element of listCardCertified){

  const card = document.createElement('div');
  card.classList.add('card-education');
  
  const imgCard = document.createElement('img');
  imgCard.classList.add('img-card-ed');
  imgCard.setAttribute('src', element.image);
  
  const titleCard = document.createElement('h3');
  titleCard.classList.add('title-card-ceert');
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



  containerCertificateCards.appendChild(card);
  card.appendChild(imgCard);
  card.appendChild(boxLevel);
  boxLevel.appendChild(titleCard);
  boxLevel.appendChild(boxBtnDownloadCert);
  boxBtnDownloadCert.appendChild(anchorageBtnDownload);
  anchorageBtnDownload.appendChild(spanBtnDownloadIcon);

}


// Secction Trigger Bottons Record and Tools

const containerToolsRecord = document.createElement('div');
containerToolsRecord.classList.add('container-tools');

const btnRecord = document.createElement('p');
btnRecord.classList.add('btn-record');
btnRecord.innerText = '🎓 Certificados' ;

const btnTools = document.createElement('p');
btnTools.classList.add('btn-tools');
btnTools.innerText = ' 💻 Herramientas' ;






const galleryImage = document.createElement('div');
galleryImage.classList.add('gallery-image');

// Galleria #1 //
const boxGalleryOne = document.createElement('div');
boxGalleryOne.classList.add('box-gallery');

const imgGalleryOne = document.createElement('img');
imgGalleryOne.classList.add('img-gallery');
imgGalleryOne.setAttribute('src' , 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/07/Midjourney-IA-fotos.jpg?fit=1664%2C935&quality=50&strip=all&ssl=1');
imgGalleryOne.setAttribute('alt' , '#');

const containertextGalleryOne = document.createElement('div');
containertextGalleryOne.classList.add('container-text-gallery');

const textGalleryOneA = document.createElement('h1');
textGalleryOneA.classList.add('text-gallery');
textGalleryOneA.innerText = '+ 48'

const textGalleryOneB = document.createElement('h2');
textGalleryOneB.classList.add('text-gallery');
textGalleryOneB.innerText = 'Cursos'


// Galleria #2 //
const boxGalleryTwo = document.createElement('div');
boxGalleryTwo.classList.add('box-gallery');

const imgGalleryTwo = document.createElement('img');
imgGalleryTwo.classList.add('img-gallery');
imgGalleryTwo.setAttribute('src' , 'https://www.cined.com/content/uploads/2023/03/Midjourney_v5_out_now-feature_image_2.jpg');
imgGalleryTwo.setAttribute('alt' , '#');

const containertextGalleryTwo = document.createElement('div');
containertextGalleryTwo.classList.add('container-text-gallery');

const textGalleryTwoA = document.createElement('h1');
textGalleryTwoA.classList.add('text-gallery');
textGalleryTwoA.innerText = '+132 H'

const textGalleryTwoB = document.createElement('h2');
textGalleryTwoB.classList.add('text-gallery');
textGalleryTwoB.innerText = 'TEORIA';


// Galleria #3 //
const boxGalleryThree = document.createElement('div');
boxGalleryThree.classList.add('box-gallery');

const imgGalleryThree = document.createElement('img');
imgGalleryThree.classList.add('img-gallery');
imgGalleryThree.setAttribute('src' , 'https://futurism.com/_next/image?url=https%3A%2F%2Fwp-assets.futurism.com%2F2023%2F01%2Fartists-sue-stabile-diffusion-midjourney.jpg&w=2048&q=75');
imgGalleryThree.setAttribute('alt' , '#');

const containertextGalleryThree = document.createElement('div');
containertextGalleryThree.classList.add('container-text-gallery');

const textGalleryThreeA = document.createElement('h1');
textGalleryThreeA.classList.add('text-gallery');
textGalleryThreeA.innerText = '+250 H'

const textGalleryThreeB = document.createElement('h2');
textGalleryThreeB.classList.add('text-gallery');
textGalleryThreeB.innerText = 'Practica';



// Galleria #4 //
const boxGalleryFour = document.createElement('div');
boxGalleryFour.classList.add('box-gallery');

const imgGalleryFour = document.createElement('img');
imgGalleryFour.classList.add('img-gallery');
imgGalleryFour.setAttribute('src' , 'https://www.tododigital.com/__export/1680196341961/sites/elimparcial/img/2023/03/30/como-usar-midjourney-desde-un-celular.jpg_1148972820.jpg');
imgGalleryFour.setAttribute('alt' , '#');

const containertextGalleryFour = document.createElement('div');
containertextGalleryFour.classList.add('container-text-gallery');

const textGalleryFourA = document.createElement('h1');
textGalleryFourA.classList.add('text-gallery');
textGalleryFourA.innerText = '+ 1k H'

const textGalleryFourB = document.createElement('h2');
textGalleryFourB.classList.add('text-gallery');
textGalleryFourB.innerText = 'Busqueda';



// Insercion Galleria


galleryImage.appendChild(boxGalleryOne);
boxGalleryOne.appendChild(imgGalleryOne);
boxGalleryOne.appendChild(containertextGalleryOne);
containertextGalleryOne.appendChild(textGalleryOneA)
containertextGalleryOne.appendChild(textGalleryOneB)

galleryImage.appendChild(boxGalleryTwo);
boxGalleryTwo.appendChild(imgGalleryTwo);
boxGalleryTwo.appendChild(containertextGalleryTwo);
containertextGalleryTwo.appendChild(textGalleryTwoA);
containertextGalleryTwo.appendChild(textGalleryTwoB);

galleryImage.appendChild(boxGalleryThree);
boxGalleryThree.appendChild(imgGalleryThree);
boxGalleryThree.appendChild(containertextGalleryThree);
containertextGalleryThree.appendChild(textGalleryThreeA);
containertextGalleryThree.appendChild(textGalleryThreeB);

galleryImage.appendChild(boxGalleryFour);
boxGalleryFour.appendChild(imgGalleryFour);
boxGalleryFour.appendChild(containertextGalleryFour);
containertextGalleryFour.appendChild(textGalleryFourA);
containertextGalleryFour.appendChild(textGalleryFourB);

// Insercion Global
education.appendChild(frameEd);
frameEd.appendChild(frameStructureEducation);
frameStructureEducation.appendChild(myFormation);
frameStructureEducation.appendChild(galleryImage);
myFormation.appendChild(titleEducation);
myFormation.appendChild(textMyformation);
textMyformation.appendChild(h3Myformation);
textMyformation.appendChild(p1Myformation);
textMyformation.appendChild(p2Myformation);
myFormation.appendChild(containerCertified);
containerCertified.appendChild(titleCertified);
titleCertified.appendChild(h3TitleCertified);
myFormation.appendChild(containerCertificateCards);
myFormation.appendChild(containerToolsRecord);
containerToolsRecord.appendChild(btnRecord);
containerToolsRecord.appendChild(btnTools);





// Evento click open record

windowMyRecord = document.getElementById('bg-wall-record');
windowMyRecord.classList.add('close-all');


const body = document.querySelector('body');


  //Open //PENDIENTE ARREGLAR EL OVERFLOW DEL BODY 
  btnRecord.addEventListener('click', () => {
    windowMyRecord.classList.toggle('open-window');
    document.body.style.overflow = 'hidden';
    return;
  });


    //Close
    windowMyRecord.addEventListener('click', (event) => {
      if (event.target === windowMyRecord ) {
        windowMyRecord.classList.remove('open-window');
        document.body.style.overflow = 'auto';
        return;
      }
    });




// Evento click open Tools
windowMyTool = document.getElementById('bg-wall-tool');
windowMyTool.classList.add('close-all');

//Open
btnTools.addEventListener('click', () => {
  windowMyTool.classList.remove('close-all');
  windowMyTool.classList.add('open-all');
  document.body.style.overflow = 'hidden';
  return;
});

//Close
windowMyTool.addEventListener('click', (event) => {
  if (event.target === windowMyTool) {
    windowMyTool.classList.remove('open-all');
    windowMyTool.classList.add('close-all');
    document.body.style.overflow = 'auto';
  } 
  return;
});
