
/*----------------------------------------- */
/*-------     nav Vertical.js      -------- */
/*----------------------------------------- */

const bgWall = document.querySelector('.bg-wall' , '.close-all');


const navVertical = document.createElement('nav');
navVertical.classList.add('nav-vertical');


const containerLogoNavVertical = document.createElement('div');
containerLogoNavVertical.classList.add('container-logo-nav-vertical');


const logoPortfolioV = document.createElement('img');   
logoPortfolioV.classList.add('logo-portfolio');
logoPortfolioV.setAttribute('src' , 'https://i.ibb.co/6vgGrhp/logo-portafolio.png')
logoPortfolioV.setAttribute('alt', 'Logo del Portafolio Web');


const imgNavVertical = document.createElement('img');
imgNavVertical.classList.add('img-nav-vertical');
imgNavVertical.setAttribute('src' , 'https://images.squarespace-cdn.com/content/v1/62ab3f1c9de10370b3c0bc3f/76ea7f9b-0ec8-46d3-a00f-6c22c3e2aded/96b63325-f2f6-45fc-820d-b73249774340_jonconnorfilms_art_in_the_age_of_artificial_intelligence.PNG')
imgNavVertical.setAttribute('alt', 'Imagen de Prueba creada con IA (mindJourney)***');


// Crear un array con el nombre de cada sección del sitio web
const section = ['about-me', 'portfolio', 'education', 'contact'];

// Crear un objeto que contiene el nombre de cada sección en el sitio web, 
// donde la clave es el nombre de la sección y el valor es el nombre que se
// mostrará en el enlace del menú
const names = {
  'about-me': 'SOBRE MI',
  'portfolio': 'PORTAFOLIO',
  'education': 'EDUCACIÓN',
  'contact': 'CONTACTO'
};

// Crear un elemento "ul" para contener los enlaces del menú
const ulMenuVertical = document.createElement('ul');
ulMenuVertical.classList.add('ul-menu-vertical');

// Recorrer el array de secciones
for (let i = 0; i < section.length; i++) {
  // Crear un elemento "li" para cada sección
  const li = document.createElement('li');
  // Agregar una clase CSS al elemento "li"
  li.classList.add('li-menu-vertical');
  
  // Crear un elemento "a" para el enlace del menú
  const a = document.createElement('a');
  // Establecer el atributo "href" del enlace, que apunta a la sección correspondiente
  a.href = '#' + section[i];
  // Agregar una clase CSS al enlace
  a.classList.add('a-menu-vertical');
  
  // Crear un nodo de texto que contiene el nombre de la sección
  const texto = document.createTextNode(names[section[i]]);
  // Agregar el nodo de texto como hijo del enlace
  a.appendChild(texto);
  // Agregar el enlace como hijo del elemento "li"
  li.appendChild(a);
  // Agregar el elemento "li" como hijo del elemento "ul"
  ulMenuVertical.appendChild(li);
}


// Insercion total
bgWall.appendChild(navVertical);
navVertical.appendChild(containerLogoNavVertical);
containerLogoNavVertical.appendChild(logoPortfolioV);
navVertical.appendChild(imgNavVertical);
navVertical.appendChild(ulMenuVertical);

