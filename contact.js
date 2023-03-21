//------------------------------------------------//
//--------         Section Contact       ---------//
//------------------------------------------------//
const contact = document.getElementById('contact');

const frameCt = document.createElement('div');
frameCt.classList.add('frame');

const titleContact = document.createElement('h2');
titleContact.classList.add('title-contact');
titleContact.innerText = 'CONTACTAME';

const frameStructureContact = document.createElement('div');
frameStructureContact.classList.add('frame-structure-contact');

const containerContact = document.createElement('div');
containerContact.classList.add('container-contact');

const containerForm = document.createElement('div');
containerForm.classList.add('container-form');

const form = document.createElement('form');
form.classList.add('form');

const pNameForm = document.createElement('p');
pNameForm.innerText = 'Nombre';

const inputName = document.createElement('input');
inputName.classList.add('input-name');
inputName.setAttribute('type', 'text');
inputName.setAttribute('placeholder', 'Escribe tu nombre');
inputName.setAttribute('required', '');

const pEmailForm = document.createElement('p');
pEmailForm.innerText = 'Email';

const inputEmail = document.createElement('input');
inputEmail.classList.add('input-email');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('placeholder', 'Escribe tu Email');
inputEmail.setAttribute('required', '');

const pMessageForm = document.createElement('p');
pMessageForm.innerText = 'Mensaje';


const textArea = document.createElement('textarea');
textArea.classList.add('textarea');


const btnSendForm = document.createElement('button');
btnSendForm.classList.add('btn-send-form');
btnSendForm.innerText = 'Enviar';



const extraInfo = document.createElement('div');
extraInfo.classList.add('extra-info');

const directInfo = document.createElement('div');
directInfo.classList.add('direct-info');

const titleinformationD = document.createElement('h3');
titleinformationD.classList.add('title-information-d');
titleinformationD.innerText = 'INFORMACIO DIRECTA'

const containterData = document.createElement('div');

const dataContactW = document.createElement('div');
dataContactW.classList.add('data-contact-w');

const iconWsp = document.createElement('i');
iconWsp.classList.add('fa-brands' , 'fa-square-whatsapp');

const pTextWsp = document.createElement('p');
pTextWsp.innerText = '+58 414 851 2289';

const dataContactE = document.createElement('div');
dataContactE.classList.add('data-contact-e');

const iconEmail = document.createElement('i');

iconEmail.classList.add('fa-solid' , 'fa-square-envelope');
const pTextEmail = document.createElement('p');
pTextEmail.innerText = 'carlosdvergaracardenas91@gmail.com';



// INSERCIONES
contact.appendChild(frameCt);
frameCt.appendChild(titleContact);
frameCt.appendChild(frameStructureContact);
frameStructureContact.appendChild(containerContact);

containerContact.appendChild(containerForm);
containerForm.appendChild(form);
form.appendChild(pNameForm);
form.appendChild(inputName);

form.appendChild(pEmailForm);
form.appendChild(inputEmail);

form.appendChild(pMessageForm);
form.appendChild(textArea);
form.appendChild(btnSendForm);

containerContact.appendChild(extraInfo);

extraInfo.appendChild(directInfo);
directInfo.appendChild(titleinformationD);

directInfo.appendChild(containterData);

containterData.appendChild(dataContactW)
dataContactW.appendChild(iconWsp);
dataContactW.appendChild(pTextWsp);

containterData.appendChild(dataContactE)
dataContactE.appendChild(iconEmail);
dataContactE.appendChild(pTextEmail);


/*----------------------------------------- */
/*----------- Section Footer    ----------- */
/*----------------------------------------- */

const footer = document.querySelector('footer');
footer.classList.add('footer');

const boxOneFooter = document.createElement('div');
boxOneFooter.innerText ='Copyright - Carlos Vergara 2023';

const boxTwoFooter = document.createElement('div');
boxTwoFooter.innerText = ' Hecho con ';

const libTyping = document.createElement('span');
libTyping.classList.add('typed')

//Inserciones Footer
footer.appendChild(boxOneFooter);
footer.appendChild(boxTwoFooter);
boxTwoFooter.appendChild(libTyping)
