// Seleccionar el botón toggle
const toggleMode = document.querySelector('.fa-circle-half-stroke');

// Seleccionar los elementos que se desean modificar con el dark mode
const navH = document.getElementById('nav-horizontal');
const bgWaNav = document.querySelector('.bg-wall'); 
const bgWaReco = document.getElementById('bg-wall-record');
const abtMe = document.getElementById('about-me');
const portf = document.getElementById('portfolio');
const educat = document.getElementById('education');
const contac = document.getElementById('contact');


// Función para activar el dark mode y almacenarlo en el objeto localStorage


const activateDarkMode = () => {
    // Agregar la clase 'dark-mode' a los elementos seleccionados
    navH.classList.add('dark-mode');
    bgWaNav.classList.add('dark-mode');
    bgWaReco.classList.add('dark-mode');
    abtMe.classList.add('dark-mode');
    portf.classList.add('dark-mode');
    educat.classList.add('dark-mode');
    contac.classList.add('dark-mode');
    
    // Almacenar el valor 'true' en el objeto localStorage con la clave 'dark-mode'
    localStorage.setItem('dark-mode', 'true');
  }



// Función para desactivar el dark mode y eliminarlo del objeto localStorage
const deactivateDarkMode = () => {
  // Eliminar la clase 'dark-mode' de los elementos seleccionados
  navH.classList.remove('dark-mode');
  bgWaNav.classList.remove('dark-mode');
  bgWaReco.classList.remove('dark-mode');
  abtMe.classList.remove('dark-mode');
  portf.classList.remove('dark-mode');
  educat.classList.remove('dark-mode');
  contac.classList.remove('dark-mode');

  // Eliminar la clave 'dark-mode' del objeto localStorage
  localStorage.removeItem('dark-mode');
}


// Función para verificar si el dark mode está activo en el objeto localStorage
const checkDarkMode = () => {
    // Obtener el valor almacenado en el objeto localStorage con la clave 'dark-mode'
    const darkModeEnabled = localStorage.getItem('dark-mode');
  
    // Si el valor es 'true', activar el dark mode
    if (darkModeEnabled === 'true') {
      activateDarkMode();
      toggleMode.classList.add('change-toggle-dm');
    }
  }
  
// Verificar si el dark mode está activo al cargar la página
checkDarkMode();



// Agregar un evento de clic al botón toggle
toggleMode.addEventListener('click', () => {
    // Si el botón tiene la clase 'change-toggle-dm', desactivar el dark mode
    if (toggleMode.classList.contains('change-toggle-dm')) {
      deactivateDarkMode();
      toggleMode.classList.remove('change-toggle-dm');
    // De lo contrario, activar el dark mode
    } else {
      activateDarkMode();
      toggleMode.classList.add('change-toggle-dm');
    }
  });





