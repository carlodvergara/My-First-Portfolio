/*----------------------------------------- */
/*-------     nav Horizonta  JS    -------- */
/*----------------------------------------- */
    
const navHorizontal = document.getElementById('nav-horizontal');

const containerLogoBtnIconMenu = document.createElement('div');
containerLogoBtnIconMenu.classList.add('container-logo-btn-icon-menu');

const btnIconMenu = document.createElement('i');
btnIconMenu.classList.add('fa-solid' , 'fa-bars');

const logoPortfolioH = document.createElement('img');
logoPortfolioH.classList.add('logo-portfolio');
logoPortfolioH.setAttribute('src' , 'https://i.ibb.co/6vgGrhp/logo-portafolio.png')
logoPortfolioH.setAttribute('alt', 'Logo del Portafolio Web');

const boxBtnsMenuhorizontal = document.createElement('div');
boxBtnsMenuhorizontal.classList.add('box-btns-menu-horizontal');




const divToggleDarkMode = document.createElement('div');
divToggleDarkMode.classList.add('dark-mode');

const toggleDarkMode = document.createElement('i');
toggleDarkMode.classList.add('fa-solid' , 'fa-circle-half-stroke');

// Crear un array con el nombre de cada sección del sitio web
const sectionNavHorizontal = ['about-me', 'portfolio', 'education', 'contact'];

// Crear un objeto que contiene el nombre de cada sección en el sitio web, 
const namesNavHorizontal = {
    'about-me': 'SOBRE MI',
    'portfolio': 'PORTAFOLIO',
    'education': 'EDUCACIÓN',
    'contact': 'CONTACTO'
};

// Crear un elemento "ul" para contener los enlaces del menú
const ulMenuHorizontal = document.createElement('ul');
ulMenuHorizontal.classList.add('ul-menu-horizontal');

// Recorrer el array de secciones
for (let i = 0; i < sectionNavHorizontal.length; i++) {
    // Crear un elemento "li" para cada sección
    const liH = document.createElement('li');
    // Agregar una clase CSS al elemento "li"
    liH.classList.add('li-menu-horizontal');
    
    // Crear un elemento "a" para el enlace del menú
    const aH = document.createElement('a');
    // Establecer el atributo "href" del enlace, que apunta a la sección correspondiente
    aH.href = '#' + sectionNavHorizontal[i];
    // Agregar una clase CSS al enlace
    aH.classList.add('a-menu-horizontal');
    
    // Crear un nodo de texto que contiene el nombre de la sección
    const textoH = document.createTextNode(namesNavHorizontal[sectionNavHorizontal[i]]);
    // Agregar el nodo de texto como hijo del enlace
    aH.appendChild(textoH);
    // Agregar el enlace como hijo del elemento "li"
    liH.appendChild(aH);
    // Agregar el elemento "li" como hijo del elemento "ul"
    ulMenuHorizontal.appendChild(liH);
}

// Insercion total


    navHorizontal.appendChild(containerLogoBtnIconMenu);
    containerLogoBtnIconMenu.appendChild(btnIconMenu);
    containerLogoBtnIconMenu.appendChild(logoPortfolioH);
    navHorizontal.appendChild(boxBtnsMenuhorizontal);
    boxBtnsMenuhorizontal.appendChild(ulMenuHorizontal);
    boxBtnsMenuhorizontal.appendChild(toggleDarkMode);
  
      
        //Open
        bgWall = document.querySelector('.bg-wall');

        btnIconMenu.addEventListener('click', () => {
          bgWall.classList.toggle('open-all');
          body.style.overflow = 'hidden';
          return;
        });



        //Close
        bgWall.addEventListener('click', (event) => {
            if (event.target === bgWall || event.target.classList.contains('a-menu-vertical')) {
              bgWall.classList.remove('open-all');
              body.style.overflow = 'auto';

            } return;
          });



        //Close for window size 
        function closeBgWallIfViewportWideEnough() {
            const viewportWidth = window.innerWidth;
            const bgWall = document.querySelector('.bg-wall');
            if (viewportWidth >= 800) {
              bgWall.classList.remove('open-all');
              body.style.overflow = 'auto';
            }
            return;
          }
          
          // Llamar a la función cuando se carga la página y cuando se redimensiona la ventana.
          window.addEventListener('load', closeBgWallIfViewportWideEnough);
          window.addEventListener('resize', closeBgWallIfViewportWideEnough);



     