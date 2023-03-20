const aboutMe = document.getElementById('about-me');

const frameAb = document.createElement('div');
frameAb.classList.add('frame-1-13');

const whoIAm = document.createElement('div');
whoIAm.classList.add('who-i-am');

const whoIAmTitle = document.createElement('h1');
whoIAmTitle.classList.add('h1');
whoIAmTitle.innerText = 'HOLA SOY CARLOS VERGARA';

const welcomeTitle = document.createElement('h3');
welcomeTitle.innerText = '';
welcomeTitle.classList.add('typed-about-me')



const sectionTitle = document.createElement('h2');
sectionTitle.classList.add('h2');
sectionTitle.innerText = 'SOBRE MI';

const paragraphWhoIam = document.createElement('p');
paragraphWhoIam.classList.add('p');
paragraphWhoIam.innerText = 'Descubrí que soy un apasionado por la programación, y he estado aprendiendo todo lo posible desde que decidí embarcarme en este camino hace unos meses (Agosto 2022), Aunque aun no tengo experiencia laboral en este sector, he completado cursos y proyectos personales que demuestran mi capacidad para aprender rápidamente. Me considero una persona amable, humilde, buen amigo y enfocado en los objetivos, siempre busco la manera de resolver problemas y aprender nuevas habilidades';

const containerBtns = document.createElement('div');
containerBtns.classList.add('container-btns');

const redirectToMyGitHub = document.createElement('a');
redirectToMyGitHub.setAttribute('href' , 'https://github.com/carlodvergara');
redirectToMyGitHub.setAttribute('target' , '_blank')

const iconGitHub = document.createElement('i');
iconGitHub.classList.add('fa-brands' , 'fa-square-github' , 'github-aboutme');

const redirectToMyCv = document.createElement('a');
redirectToMyCv.setAttribute('href' , '#');
redirectToMyCv.setAttribute('target' , '_blank');

const btnDownloadCv = document.createElement('button');
btnDownloadCv.classList.add('btn-download-cv');

const textBtnDownloadCv = document.createElement('p');
textBtnDownloadCv.classList.add('p');
textBtnDownloadCv.innerText = 'Descarga mi cv';

const iconDownload = document.createElement('span');
iconDownload.classList.add('material-symbols-outlined');
iconDownload.innerText = 'download';

const myInterests = document.createElement('div');
myInterests.classList.add('my-interests');

const InterestsTitle = document.createElement('h3');
InterestsTitle.classList.add('h3');
InterestsTitle.innerText = 'INTERESES';

const containerInterests = document.createElement('div');
containerInterests.classList.add('container-interests');

const interestsList = [ '📒  Leer' , '🍜  Cocinar' , '⚽  Deportes en Equipo' , '💪  Gimnasio' , '♟️  Juegos de Estrategia' , '🗺️  Viajar' , '☕  Cafe' , '🐶  Perros', '🐱  Gatos' , '🌊  playa', '🎉  Start ups',  '🎉  Tecnologia'];

for (let i = 0; i< interestsList.length; i++ ){
    const divTagInterests = document.createElement('div');
    divTagInterests.classList.add('div-tag-interests');
    divTagInterests.textContent = interestsList[i];
    containerInterests.appendChild(divTagInterests);
}

const imgSectionAboutMe = document.createElement('img');
imgSectionAboutMe.classList.add('img-section-aboutme');
imgSectionAboutMe.setAttribute('src' , 'https://images.squarespace-cdn.com/content/v1/62ab3f1c9de10370b3c0bc3f/76ea7f9b-0ec8-46d3-a00f-6c22c3e2aded/96b63325-f2f6-45fc-820d-b73249774340_jonconnorfilms_art_in_the_age_of_artificial_intelligence.PNG');
imgSectionAboutMe.setAttribute('alt' , 'Imagen Banner seccion principal about me, enseña el perfil fisico del desarrollador');


//INSERCIONES
aboutMe.appendChild(frameAb);
frameAb.appendChild(whoIAm);
whoIAm.appendChild(whoIAmTitle);
whoIAm.appendChild(welcomeTitle);
whoIAm.appendChild(sectionTitle);
whoIAm.appendChild(paragraphWhoIam);
whoIAm.appendChild(containerBtns);
containerBtns.appendChild(redirectToMyGitHub);
redirectToMyGitHub.appendChild(iconGitHub);
containerBtns.appendChild(redirectToMyCv);
redirectToMyCv.appendChild(btnDownloadCv);
btnDownloadCv.appendChild(textBtnDownloadCv);
btnDownloadCv.appendChild(iconDownload);
whoIAm.appendChild(myInterests);
myInterests.appendChild(InterestsTitle);
myInterests.appendChild(containerInterests);
frameAb.appendChild(imgSectionAboutMe);

