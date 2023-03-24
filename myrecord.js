const bgWallRecord = document.getElementById('bg-wall-record');



//CONTENEDOR GLOBAL
const containerRecord = document.createElement('div');
containerRecord.classList.add('container-record');


//PRIMERA CABECERA "RECORD"
    const headerRecord = document.createElement('div');
    headerRecord.classList.add('header-record');

    const titleRecord = document.createElement('div');
    titleRecord.classList.add('title-certif');
    
    const h3TitleRecord= document.createElement('h3')
    h3TitleRecord.innerText = 'RECORD';


 //lISTA 3 TARJETAS RECORD VERTICAL
    const recordList = document.createElement('div');
    recordList.classList.add('record-list');


 //PRIMERA INFO RECORD COURSE
    const cardDataRecordCourse = document.createElement('div');
    cardDataRecordCourse.classList.add('card-data-record');
  
      const recordInfoCourse = document.createElement('div');
      recordInfoCourse.classList.add('record-info');

      const h3RecordInfoCourse = document.createElement('h3');
      h3RecordInfoCourse.innerText = 'CURSOS';

      const pRecordInfoCourse = document.createElement('P');
      pRecordInfoCourse.innerText = 'Platzi';

      const numberCourse = document.createElement('div');
      numberCourse.classList.add('number-course');

      const h1NumberCourse = document.createElement('h1');
      h1NumberCourse.innerText = '48';

   
 //SEGUNDA INFO RECORD THEORY
 const cardDataRecordTheory = document.createElement('div');
 cardDataRecordTheory.classList.add('card-data-record');

     const recordInfoTheory = document.createElement('div');
     recordInfoTheory.classList.add('record-info');

     const h3RecordInfoTheory = document.createElement('h3');
     h3RecordInfoTheory.innerText = 'TEORIA';

     const pRecordInfoTheory = document.createElement('P');
     pRecordInfoTheory.innerText = 'Horas';

     const numberTheory = document.createElement('div');
     numberTheory.classList.add('number-theory');

     const h1NumberTheory = document.createElement('h1');
     h1NumberTheory.innerText = '124';



 //TERCERA INFO RECORD PRACTICE
 const cardDataRecordPractice = document.createElement('div');
 cardDataRecordPractice.classList.add('card-data-record');

     const recordInfoPractice = document.createElement('div');
     recordInfoPractice.classList.add('record-info');

     const h3RecordInfoPractice = document.createElement('h3');
     h3RecordInfoPractice.innerText = 'TEORIA';

     const pRecordInfoPractice = document.createElement('P');
     pRecordInfoPractice.innerText = 'Horas';

     const numberPractice = document.createElement('div');
     numberPractice.classList.add('number-practice');

     const h1NumberPractice = document.createElement('h1');
     h1NumberPractice.innerText = '124';


// AREA CERTIFICADOS

//SEGUNDA CABECERA "CERTIFICADOS"
const headerCertif = document.createElement('div');
headerCertif.classList.add('header-certif');

const titleCertif = document.createElement('div');
titleCertif.classList.add('title-certif');

const h3TitleCertif = document.createElement('h3')
h3TitleCertif.innerText = 'CERTIFICADOS';



// CONTENEDOR DE lISTA DE "CERTIFICADOS"
const certificateList = document.createElement('div');
certificateList.classList.add('certificate-list');


const arrListCertifcated = [] 

arrListCertifcated.push({
   image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
   atralt:'#',
   titlecourse:'Curso de Terminal y Línea de Comandos',
   areatech: 'FRONTEND',
   btndownloadcert: '#'
})
arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })
 arrListCertifcated.push({
    image: 'https://static.platzi.com/cdn-cgi/image/width=1024,quality=50,format=auto/media/achievements/practico-javascript_badge-fb533fa5-73c8-4f75-9d81-0294d9013ab5.png',
    atralt:'#',
    titlecourse:'Curso de Terminal y Línea de Comandos',
    areatech: 'FRONTEND',
    btndownloadcert: '#'
 })



//CICLO FOR PARA CREACION AUTOMATICA DE TARJETAS
for (let element of arrListCertifcated){

const cardStructureCert = document.createElement('div');
cardStructureCert.classList.add('card-structure-cert');

const boxImage = document.createElement('div');
boxImage.classList.add('box-image');


const ImageCircleInstute = document.createElement('img');
ImageCircleInstute.setAttribute('src' , element.image);
ImageCircleInstute.setAttribute('alt' , element.atralt);

const boxText = document.createElement('div');
boxText.classList.add('box-text');

const titleCardCourse = document.createElement('h3');
titleCardCourse.classList.add('title-card-course');
titleCardCourse.innerText = element.titlecourse;

const pTech = document.createElement('h3');
pTech.classList.add('p-tech');
pTech.innerText = element.areatech;

const boxBtnDownloadCert = document.createElement('div');
boxBtnDownloadCert.classList.add('box-btn-download-cert');

const anchorageBtnDownload = document.createElement('a');
anchorageBtnDownload.setAttribute('href' , element.btndownloadcert);

const spanBtnDownloadIcon = document.createElement('div');
spanBtnDownloadIcon.classList.add('material-symbols-outlined');
spanBtnDownloadIcon.innerText ='download';


// Inserciones Tarjetas Lista ciclo For
certificateList.appendChild(cardStructureCert);
cardStructureCert.appendChild(boxImage);
boxImage.appendChild(ImageCircleInstute);
cardStructureCert.appendChild(boxText);
boxText.appendChild(titleCardCourse);
boxText.appendChild(pTech);
cardStructureCert.appendChild(boxBtnDownloadCert);
boxBtnDownloadCert.appendChild(anchorageBtnDownload);
anchorageBtnDownload.appendChild(spanBtnDownloadIcon);

}


// Insercion Global
bgWallRecord.appendChild(containerRecord);

// Insercion Cabecera Record
containerRecord.appendChild(headerRecord);
headerRecord.appendChild(titleRecord);
titleRecord.appendChild(h3TitleRecord);


// Record List
containerRecord.appendChild(recordList);


recordList.appendChild(cardDataRecordCourse);
recordList.appendChild(cardDataRecordTheory);
recordList.appendChild(cardDataRecordPractice);


//cursos
cardDataRecordCourse.appendChild(recordInfoCourse);
recordInfoCourse.appendChild(h3RecordInfoCourse)
recordInfoCourse.appendChild(pRecordInfoCourse)

cardDataRecordCourse.appendChild(numberCourse);
numberCourse.appendChild(h1NumberCourse)

//Teoria
cardDataRecordTheory.appendChild(recordInfoTheory);
recordInfoTheory.appendChild(h3RecordInfoTheory)
recordInfoTheory.appendChild(pRecordInfoTheory)

cardDataRecordTheory.appendChild(numberTheory);
numberTheory.appendChild(h1NumberTheory)

//Practice
cardDataRecordPractice.appendChild(recordInfoPractice);
recordInfoPractice.appendChild(h3RecordInfoPractice)
recordInfoPractice.appendChild(pRecordInfoPractice)

cardDataRecordPractice.appendChild(numberPractice);
numberPractice.appendChild(h1NumberPractice)


// Insercion Cabecera Certificado
containerRecord.appendChild(headerCertif);

headerCertif.appendChild(titleCertif);
titleCertif.appendChild(h3TitleCertif);



// Lista de Certificados
containerRecord.appendChild(certificateList);
