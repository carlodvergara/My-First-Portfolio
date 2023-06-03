const education = document.getElementById('education');

const frameEd = document.createElement('div');
frameEd.classList.add('frame-ed');

const formation = document.createElement('div');
formation.classList.add('formation');

const titleEducation = document.createElement('h2');
titleEducation .classList.add('title-education');
titleEducation.innerText = 'EDUCACION';

const containerTextformation = document.createElement('div');
containerTextformation.classList.add('container-text-formation');

const subtitleEducation = document.createElement('h3');
subtitleEducation.classList.add('subtitle-education');
subtitleEducation.innerText = 'Desarrollo Web';

const textEducation1 = document.createElement('p');
textEducation1.classList.add('text-education-2');
textEducation1.innerText = 'Mi formación en  desarrollo web comenzó como un proceso autodidacta, explorando videos en YouTube, documentación de lenguajes y explorando código en sitios web  como Codepen. Sin embargo, mi deseo de desarrollar habilidades prácticas y relevantes para el mundo laboral me llevó a buscar cursos virtuales en diversas plataformas, incluyendo Platzi.';

const textEducation2 = document.createElement('p');
textEducation2.classList.add('text-education-2');
textEducation2.innerText = 'A través de una combinación de aprendizaje autónomo y cursos en línea, he adquirido conocimientos fundamentales en HTML, CSS y JavaScript, También he adquirido habilidades en diseño web, experiencia de usuario, nimaciones Y transiciones, actualmente estoy aplicando los conocimientos  adquiridos en proyectos web reales por mi propia cuenta, mientras continúo mi formación en línea y obtengo certificaciones en nuevas tecnologías';


const containterInstitutes = document.createElement('div');
containterInstitutes.classList.add('containter-institutes');

const imageInstituteGeneral = document.createElement('img');
imageInstituteGeneral.classList.add('image-institute-general')
imageInstituteGeneral.setAttribute('src' , 'https://res.cloudinary.com/dwdzufjyh/image/upload/v1683855074/Personal%20portfolio%20V.01/img-institute_skkatz.png');


const bodyInstituteGeneral = document.createElement('div');
bodyInstituteGeneral.classList.add('body-institute-general');

const navInstituteGeneral = document.createElement('div');
navInstituteGeneral.classList.add('nav-institute-general');

const titleInstitutes = document.createElement('h3');
titleInstitutes.classList.add('title-institutes');
titleInstitutes.textContent = 'Plataformas Online'

const areaTransitionInstitutes = document.createElement('div');
areaTransitionInstitutes.classList.add('area-transition-institutes');




const objInstitutes = []

objInstitutes.push({'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CxIwdP8u4cH-kKfNNolKpffKGZoZuSfP3Q&usqp=CAU': 'FrecodeCamp'});

objInstitutes.push({'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CxIwdP8u4cH-kKfNNolKpffKGZoZuSfP3Q&usqp=CAU': 'FrecodeCamp'});

objInstitutes.push({'https://cdn-icons-png.flaticon.com/512/2504/2504739.png': 'Google'});

objInstitutes.push({'https://cdn-icons-png.flaticon.com/512/2504/2504739.png': 'Google'});

objInstitutes.push({'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png': 'Harvard'});

objInstitutes.push({'https://media.licdn.com/dms/image/C4E0BAQEim9dRy6sgKQ/company-logo_200_200/0/1610844887806?e=2147483647&v=beta&t=hq-X23S9k0tbZ-VRXljt7bcl40TfS0ICcUHRKP_jRdU': 'devChallenge'});

objInstitutes.push({'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CxIwdP8u4cH-kKfNNolKpffKGZoZuSfP3Q&usqp=CAU': 'FrecodeCamp'});

objInstitutes.push({'https://cdn-icons-png.flaticon.com/512/2504/2504739.png': 'Google'});

objInstitutes.push({'https://cdn-icons-png.flaticon.com/512/2504/2504739.png': 'Google'});

objInstitutes.push({'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png': 'Harvard'});

objInstitutes.push({'https://media.licdn.com/dms/image/C4E0BAQEim9dRy6sgKQ/company-logo_200_200/0/1610844887806?e=2147483647&v=beta&t=hq-X23S9k0tbZ-VRXljt7bcl40TfS0ICcUHRKP_jRdU': 'devChallenge'});

objInstitutes.push({'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CxIwdP8u4cH-kKfNNolKpffKGZoZuSfP3Q&usqp=CAU': 'FrecodeCamp'});

objInstitutes.push({'https://cdn-icons-png.flaticon.com/512/2504/2504739.png': 'Google'});

objInstitutes.push({'https://cdn-icons-png.flaticon.com/512/2504/2504739.png': 'Google'});

objInstitutes.push({'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png': 'Harvard'});

objInstitutes.push({'https://media.licdn.com/dms/image/C4E0BAQEim9dRy6sgKQ/company-logo_200_200/0/1610844887806?e=2147483647&v=beta&t=hq-X23S9k0tbZ-VRXljt7bcl40TfS0ICcUHRKP_jRdU': 'devChallenge'});

objInstitutes.push({'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4CxIwdP8u4cH-kKfNNolKpffKGZoZuSfP3Q&usqp=CAU': 'FrecodeCamp'});

objInstitutes.push({'https://cdn-icons-png.flaticon.com/512/2504/2504739.png': 'Google'});

objInstitutes.push({'https://cdn-icons-png.flaticon.com/512/2504/2504739.png': 'Google'});

objInstitutes.push({'https://upload.wikimedia.org/wikipedia/commons/2/25/Harvard_University_shield.png': 'Harvard'});

objInstitutes.push({'https://media.licdn.com/dms/image/C4E0BAQEim9dRy6sgKQ/company-logo_200_200/0/1610844887806?e=2147483647&v=beta&t=hq-X23S9k0tbZ-VRXljt7bcl40TfS0ICcUHRKP_jRdU': 'devChallenge'});


const elementosPorFila = 20; // Número de elementos deseados por fila
const filasDeseadas = 3; // Número de filas deseadas

const totalElementos = objInstitutes.length;
const filas = Math.ceil(totalElementos / elementosPorFila); // Calcular el número de filas necesarias


// Ajustar el número de filas según el número deseado
const filasAjustadas = Math.min(filas, filasDeseadas);

const contenedoresFila = []; // Array para almacenar los contenedores de fila

// Crear contenedores de fila y agregar clases
for (let i = 0; i < filas; i++) {
  const fila = document.createElement('div');
  fila.classList.add('fila-institutes');
  contenedoresFila.push(fila);
  areaTransitionInstitutes.appendChild(fila);
}




for (let i = 0; i < objInstitutes.length ; i++){

const btnNavInstitutes = document.createElement('div');
btnNavInstitutes.classList.add('btn-nav-institutes');

const imgLogosInstitutes = document.createElement('img');
imgLogosInstitutes.classList.add('img-logos-lnstitutes');
imgLogosInstitutes.setAttribute('src', Object.keys(objInstitutes[i])[0]);
imgLogosInstitutes.setAttribute('alt', Object.values(objInstitutes[i])[0]);

const nameInstitute = document.createElement('p');
nameInstitute.classList.add('institute-name');

nameInstitute.appendChild(document.createTextNode(Object.values(objInstitutes[i])[0]));

const filaIndex = i % filasAjustadas; // Obtener el índice de fila utilizando el operador módulo

contenedoresFila[filaIndex].appendChild(btnNavInstitutes);
btnNavInstitutes.appendChild(imgLogosInstitutes);
btnNavInstitutes.appendChild(nameInstitute);
}



//----------------------------------------------
// Despliegue Modal Botones---------------------

const moreInfo = document.createElement('h3');
moreInfo.classList.add('more-info');
moreInfo.textContent = 'Mas Informacion'

const containerMoreInfo = document.createElement('div');
containerMoreInfo.classList.add('container-more-info');


function createBtnsModalMorInfo() { 


const modalCertificates = document.getElementById('bg-wall-modal-certificates');
const modalSoftSkills = document.getElementById('bg-wall-modal-certificates');
const modalHardSkills = document.getElementById('bg-wall-modal-hard-skill');

const objMoreInfo = [];

objMoreInfo.push({emojie:'🎓' , bgcolor:'#FDC95C', textinfo: 'Certificados' , modalId:modalCertificates});
objMoreInfo.push({emojie:'🍦'  , bgcolor:'#F28C8F', textinfo: 'Soft Skills' , modalId:modalSoftSkills});
objMoreInfo.push({emojie:'🧠' , bgcolor:'#CFCFCF', textinfo: 'Hard Skills' , modalId:modalHardSkills});



    for (let i = 0; i < objMoreInfo.length; i++){

        const position = objMoreInfo[i];

        // Crear el contenedor del objeto
        const container = document.createElement('div');
        container.classList.add('container-content-info');
        container.setAttribute('data-modal', position.modalId);

        const circleEmojie = document.createElement('div');
        circleEmojie.classList.add('circleemojie-style');
        circleEmojie.style.backgroundColor = position.bgcolor;

        const emojie = document.createElement('h3');
        emojie.classList.add('emojie-info');
        emojie.textContent = position.emojie;

        const textInfo = document.createElement('p');
        textInfo.classList.add('text-skill');
        textInfo.textContent = position.textinfo;

        const boxIcon = document.createElement('div');
        boxIcon.classList.add('box-icon-arrow');

        const icon = document.createElement('i');
        icon.classList.add('fa-solid' , 'fa-square-caret-right' , 'fa-2xl', 'arrow-go-ed'); 

        // Inserciones
        containerMoreInfo.appendChild(container);
        container.appendChild(circleEmojie);
        circleEmojie.appendChild(emojie);
        container.appendChild(textInfo);
        container.appendChild(boxIcon);
        boxIcon.appendChild(icon);
    }


        // Crear el evento "click" para los contenedores de objeto
        for (let j = 0; j < containerMoreInfo.children.length; j++) {

            containerMoreInfo.children[j].addEventListener('click', function(event) {
            // Obtener el ID de la modal desde el atributo "data-modal" del contenedor de objeto
            const modalId = event.currentTarget.getAttribute('data-modal');
            
            // Obtener la modal correspondiente
            const modal = modalId;
            

            // Mostrar la modal
            modal.style.display = 'grid';
            });

        };

}

createBtnsModalMorInfo()












//---------------------------------------

const containerPhraeseEstudent = document.createElement('div');
containerPhraeseEstudent.classList.add('container-phrase-estudent');


const imageEstudent = document.createElement('img');
imageEstudent.classList.add('image-estudent');
imageEstudent.setAttribute('src' , 'https://res.cloudinary.com/dwdzufjyh/image/upload/v1683842438/Personal%20portfolio%20V.01/Estudiante_fut8of.png')
imageEstudent.setAttribute('alt' , 'Joven Estudiando la informacion que contienen sus apuntes de programacion')


const boxPhraeseEstudent = document.createElement('div');
boxPhraeseEstudent.classList.add('box-phrase-estudent');

const phraeseEstudent = document.createElement('p');
phraeseEstudent.classList.add('phrase-estudent');
phraeseEstudent.textContent = '"Un buen líder lleva a su equipo hacia el éxito no sólo a través de la habilidad y el conocimiento, sino también a través de la empatía, la pasión y la dedicación."';

const authorEstudent = document.createElement('a');
authorEstudent.classList.add('author-estudent');
authorEstudent.textContent = 'Simon Sinek';
authorEstudent.setAttribute('href' , 'https://es.wikipedia.org/wiki/Simon_Sinek');
authorEstudent.setAttribute('target', '_blank');








// Insercion Global

education.appendChild(frameEd);
frameEd.appendChild(formation);
formation.appendChild(titleEducation);
formation.appendChild(containerTextformation);
containerTextformation.appendChild(subtitleEducation)
containerTextformation.appendChild(textEducation1);
containerTextformation.appendChild(textEducation2);
formation.appendChild(containterInstitutes);
containterInstitutes.appendChild(imageInstituteGeneral);
containterInstitutes.appendChild(bodyInstituteGeneral);
bodyInstituteGeneral.appendChild(navInstituteGeneral);
navInstituteGeneral.appendChild(titleInstitutes);
bodyInstituteGeneral.appendChild(areaTransitionInstitutes);

formation.appendChild(moreInfo);
formation.appendChild(containerMoreInfo);


//-----------------------
frameEd.appendChild(containerPhraeseEstudent);
containerPhraeseEstudent.appendChild(imageEstudent);
containerPhraeseEstudent.appendChild(boxPhraeseEstudent);
boxPhraeseEstudent.appendChild(phraeseEstudent);
boxPhraeseEstudent.appendChild(authorEstudent);




//--------------------------------------------------





// Evento click open record

// windowMyRecord = document.getElementById('bg-wall-record');
// windowMyRecord.classList.add('close-all');


// const body = document.querySelector('body');


//   //Open //PENDIENTE ARREGLAR EL OVERFLOW DEL BODY 
//   btnRecord.addEventListener('click', () => {
//     windowMyRecord.classList.toggle('open-window');
//     document.body.style.overflow = 'hidden';
//     return;
//   });


//     //Close
//     windowMyRecord.addEventListener('click', (event) => {
//       if (event.target === windowMyRecord ) {
//         windowMyRecord.classList.remove('open-window');
//         document.body.style.overflow = 'auto';
//         return;
//       }
//     });




// // Evento click open Tools
// windowMyTool = document.getElementById('bg-wall-tool');
// windowMyTool.classList.add('close-all');

// //Open
// btnTools.addEventListener('click', () => {
//   windowMyTool.classList.remove('close-all');
//   windowMyTool.classList.add('open-all');
//   document.body.style.overflow = 'hidden';
//   return;
// });

// //Close
// windowMyTool.addEventListener('click', (event) => {
//   if (event.target === windowMyTool) {
//     windowMyTool.classList.remove('open-all');
//     windowMyTool.classList.add('close-all');
//     document.body.style.overflow = 'auto';
//   } 
//   return;
// });
