

const aboutMe = document.getElementById('about-me');

const frameAb = document.createElement('div');
frameAb.classList.add('frame-3-13');

const whoIAm = document.createElement('div');
whoIAm.classList.add('who-i-am');

const whoIAmTitle = document.createElement('h1');
whoIAmTitle.classList.add('who-iam-title');
whoIAmTitle.innerText = 'HOLA SOY CARLOS VERGARA';

const welcomeTitle = document.createElement('h3');
welcomeTitle.innerText = '';
welcomeTitle.classList.add('typed-about-me')



const sectionTitle = document.createElement('h2');
sectionTitle.classList.add('h2');
sectionTitle.innerText = 'SOBRE MI';

const paragraphWhoIam = document.createElement('p');
paragraphWhoIam.classList.add('paragraph-who-iam');

paragraphWhoIam.innerText = 'Descubrí que soy un apasionado por la programación, y he estado aprendiendo todo lo posible desde que decidí embarcarme en este camino hace unos meses (Agosto 2022), Aunque aun no tengo experiencia laboral en este sector, he completado cursos y proyectos personales que demuestran mi capacidad para aprender rápidamente. Me considero una persona amable, humilde, buen amigo y enfocado en los objetivos, siempre busco la manera de resolver problemas y aprender nuevas habilidades';

const containerBtns = document.createElement('div');
containerBtns.classList.add('container-btns');

const redirectToMyGitHub = document.createElement('a');
redirectToMyGitHub.setAttribute('href' , 'https://github.com/carlodvergara');
redirectToMyGitHub.setAttribute('target' , '_blank')

const iconGitHub = document.createElement('i');
iconGitHub.classList.add('fa-brands' , 'fa-github', 'fa-shake' , 'github-aboutme');

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
imgSectionAboutMe.setAttribute('src' , 'https://res.cloudinary.com/dwdzufjyh/image/upload/v1683503735/Personal%20portfolio%20V.01/Banner-portfolio_3_fwoej9.jpg');
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
containerBtns.appendChild(btnDownloadCv);
btnDownloadCv.appendChild(textBtnDownloadCv);
btnDownloadCv.appendChild(iconDownload);
whoIAm.appendChild(myInterests);
myInterests.appendChild(InterestsTitle);
myInterests.appendChild(containerInterests);
frameAb.appendChild(imgSectionAboutMe);



btnDownloadCv.addEventListener('click', () => {
    window.open('https://drive.google.com/uc?id=1wP144nEh0m7BiHkPpvNs3FB1_wxj7tvf');
});


