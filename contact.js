//------------------------------------------------//
//--------     Section Contact       -------------//
//------------------------------------------------//
const contact = document.getElementById('contact');


const frameContact = document.createElement('div');
frameContact.classList.add('frame-contac');

const titleContact = document.createElement('h2');
titleContact.classList.add('title-contact');
titleContact.textContent = 'CONTACTAME';



const frameStructureContact = document.createElement('div');
frameStructureContact.classList.add('frame-structure-contact');

const subFrameStructureContactOne = document.createElement('div');
subFrameStructureContactOne.classList.add('sub-frame-structure-contact-one');

const subFrameStructureContactTwo = document.createElement('div');
subFrameStructureContactTwo.classList.add('sub-frame-structure-contact-two');



const blockContactFirst = document.createElement('div');
blockContactFirst.classList.add('block-contact-first');

const blockContactSecond = document.createElement('div');
blockContactSecond.classList.add('block-contact-second');

const blockContactThird = document.createElement('div');
blockContactThird.classList.add('block-contact-third');

const blockContactFourth = document.createElement('div');
blockContactFourth.classList.add('block-contact-fourth');




//----------------------------------
//-- First Sub-Frame structure ----
//----------------------------------

//-- (1) Block Email ---------------
const subBlockEmail = document.createElement('div');
subBlockEmail.classList.add('sub-block-email');

const gnralDivCEmail = document.createElement('div');
gnralDivCEmail.classList.add('gnral-div-c-email');

const blockIconCEmail = document.createElement('div');
blockIconCEmail.classList.add('block-icon-c-email');

const boxIconCEmail = document.createElement('div');
boxIconCEmail.classList.add('box-icon-c-email');

const iconCEmail = document.createElement('i');
iconCEmail.classList.add('fa-regular' , 'fa-envelope' , 'fa-2xl');

const textContentCEmail = document.createElement('div');
textContentCEmail.classList.add('text-content-c-email');

const h3textContentCEmail = document.createElement('h3');
h3textContentCEmail.textContent = 'Mi Email';

const ptextContentCEmail = document.createElement('p');
ptextContentCEmail.textContent = 'Si tu compañia contratando, contactate conmigo via Email';

const boxIconGoEmail = document.createElement('div');
boxIconGoEmail.classList.add('box-icon-go-email');

const iconGoEmail = document.createElement('i');
iconGoEmail.classList.add('fa-regular' , 'fa-paper-plane' ,'fa-2xl' , 'arrow-go-contact');



const videoContainer = document.createElement('div');
videoContainer.classList.add('video-container');


const videoEmail = document.createElement('video');
videoEmail.setAttribute('autoplay', '');
videoEmail.setAttribute('loop', '');   

const videoSource = document.createElement('source');
videoSource.setAttribute('src', 'https://res.cloudinary.com/dwdzufjyh/video/upload/v1685056880/Personal%20portfolio%20V.01/send_email_three_finished_svnx8o.mp4');
videoSource.setAttribute('type', 'video/mp4');



//-- (2) Block Idea ---------------
const subBlockIdea = document.createElement('div');
subBlockIdea.classList.add('sub-block-idea');

const gnralDivCIdea = document.createElement('div');
gnralDivCIdea.classList.add('gnral-div-c-idea');

const blockIconCIdea = document.createElement('div');
blockIconCIdea.classList.add('block-icon-c-idea');

const boxIconCIdea = document.createElement('div');
boxIconCIdea.classList.add('box-icon-c-idea');

const iconCIdea = document.createElement('i');
iconCIdea.classList.add('fa-regular' , 'fa-lightbulb' , 'fa-2xl');

const textContentCIdea = document.createElement('div');
textContentCIdea.classList.add('text-content-c-idea');

const h3textContentCIdea = document.createElement('h3');
h3textContentCIdea.textContent = '¿ Ideas 🤪 ?';

const ptextContentCIdea = document.createElement('p');
ptextContentCIdea.textContent = 'Dale click al boton de al lado, seguramente podre ayudarte';

const boxIconGoIdea = document.createElement('div');
boxIconGoIdea.classList.add('box-icon-go-idea');

const iconGoIdea = document.createElement('i');
iconGoIdea.classList.add('fa-solid' , 'fa-square-caret-right' , 'fa-2xl' , 'arrow-go-contact');



const imageContactIdea = document.createElement('img');
imageContactIdea.classList.add('image-contact-idea');
imageContactIdea.setAttribute('src' , 'https://querido-dinero.imgix.net/1397/C%C3%B3mo-transformar-una-idea-en-un-proyecto-real_Portada.png?w=1500&h=600&fit=crop&crop=faces&auto=format,compress&lossless=1');
imageContactIdea.setAttribute('alt' , '#');


//-- (3) Block FQA -------------
const subBlockFqa = document.createElement('div');
subBlockFqa.classList.add('sub-block-fqa');

const gnralDivCFqa = document.createElement('div');
gnralDivCFqa.classList.add('gnral-div-c-fqa');

const blockIconCFqa = document.createElement('div');
blockIconCFqa.classList.add('block-icon-c-fqa');

const boxIconCFqa = document.createElement('div');
boxIconCFqa.classList.add('box-icon-c-fqa');

const iconCFqa = document.createElement('i');
iconCFqa.classList.add('fa-regular' , 'fa-circle-question' , 'fa-2xl');

const textContentCFqa = document.createElement('div');
textContentCFqa.classList.add('text-content-c-fqa');

const h3textContentCFqa = document.createElement('h3');
h3textContentCFqa.textContent = '¿ Preguntas ?';

const ptextContentCFqa = document.createElement('p');
ptextContentCFqa.textContent = 'Si tienes al guna duda, puedes darle click y entrar a la seccion FQA.';

const boxIconGoFqa = document.createElement('div');
boxIconGoFqa.classList.add('box-icon-go-fqa');

const iconGoFqa = document.createElement('i');
iconGoFqa.classList.add('fa-solid' , 'fa-square-caret-right' , 'fa-2xl' , 'arrow-go-contact');

const imageContactFqa = document.createElement('img');
imageContactFqa.classList.add('image-contact-fqa');
imageContactFqa.setAttribute('src' , 'https://querido-dinero.imgix.net/1397/C%C3%B3mo-transformar-una-idea-en-un-proyecto-real_Portada.png?w=1500&h=600&fit=crop&crop=faces&auto=format,compress&lossless=1');
imageContactFqa.setAttribute('alt' , '#');



//----------------------------------
//-- Second Sub-Frame structure ----
//----------------------------------

//-- (4) Block Ubication -----------
const subBlockUbication = document.createElement('div');
subBlockUbication.classList.add('sub-block-ubication');

const gnralDivCUbication = document.createElement('div');
gnralDivCUbication.classList.add('gnral-div-c-ubication');

const blockIconCUbication = document.createElement('div');
blockIconCUbication.classList.add('block-icon-c-ubication');

const boxIconCUbication = document.createElement('div');
boxIconCUbication.classList.add('box-icon-c-ubication');

const iconCUbication = document.createElement('i');
iconCUbication.classList.add('fa-solid' , 'fa-location-crosshairs' , 'fa-2xl');

const textContentCUbication = document.createElement('div');
textContentCUbication.classList.add('text-content-c-ubication');

const h3textContentCUbication = document.createElement('h3');
h3textContentCUbication.textContent = 'Mi Ubicación';

const ptextContentCUbication = document.createElement('p');
ptextContentCUbication.textContent = 'Barranquilla, Atlantico, Colombia - Area Metropolitana';

const boxIconGoUbication = document.createElement('div');
boxIconGoUbication.classList.add('box-icon-go-ubication');

const iconGoUbication = document.createElement('i');
iconGoUbication.classList.add('fa-solid' , 'fa-square-caret-right' , 'fa-2xl' , 'arrow-go-contact');

const imageContactUbication = document.createElement('div');
imageContactUbication.classList.add('image-contact-ubication');



//-- (5) Block Share -----------
const subBlockShare = document.createElement('div');
subBlockShare.classList.add('sub-block-share');

const gnralDivCShare = document.createElement('div');
gnralDivCShare.classList.add('gnral-div-c-share');

const blockIconCShare = document.createElement('div');
blockIconCShare.classList.add('block-icon-c-share');

const boxIconCShare = document.createElement('div');
boxIconCShare.classList.add('box-icon-c-share');

const iconCShare = document.createElement('i');
iconCShare.classList.add('fa-regular' , 'fa-share-from-square' , 'fa-2xl');

const textContentCShare = document.createElement('div');
textContentCShare.classList.add('text-content-c-share');

const h3textContentCShare = document.createElement('h3');
h3textContentCShare.textContent = 'Comparte';

const ptextContentCShare = document.createElement('p');
ptextContentCShare.textContent = 'Comparte te ha gustado mi portfolio y quieres que otra persona lo vea';

const boxIconGoShare = document.createElement('div');
boxIconGoShare.classList.add('box-icon-go-share');

const iconGoShare = document.createElement('i');
iconGoShare.classList.add('fa-solid' , 'fa-square-caret-right' , 'fa-2xl' , 'arrow-go-contact');

const imageContactShare = document.createElement('img');
imageContactShare.classList.add('image-contact-share');
imageContactShare.setAttribute('src' , 'https://querido-dinero.imgix.net/1397/C%C3%B3mo-transformar-una-idea-en-un-proyecto-real_Portada.png?w=1500&h=600&fit=crop&crop=faces&auto=format,compress&lossless=1');
imageContactShare.setAttribute('alt' , '#');


//-- (6) Follow Me -----------
const subBlockFollowme = document.createElement('div');
subBlockFollowme.classList.add('sub-block-followme');

const gnralDivCFollowme = document.createElement('div');
gnralDivCFollowme.classList.add('gnral-div-c-followme');

const blockIconCFollowme = document.createElement('div');
blockIconCFollowme.classList.add('block-icon-c-followme');

const boxIconCFollowme = document.createElement('div');
boxIconCFollowme.classList.add('box-icon-c-followme');

const iconCFollowme = document.createElement('i');
iconCFollowme.classList.add('fa-regular' , 'fa-circle-user' , 'fa-2xl');

const textContentCFollowme = document.createElement('div');
textContentCFollowme.classList.add('text-content-c-followme');

const h3textContentCFollowme = document.createElement('h3');
h3textContentCFollowme.textContent = 'Sigueme';

const iconsCFollowme = document.createElement('div');
iconsCFollowme.classList.add('icons-c-followme');

const openFollowTwit = document.createElement('div');
openFollowTwit.classList.add('open-follow-twit');

const iconCTwit = document.createElement('i');
iconCTwit.classList.add('fa-brands' , 'fa-twitter' , 'fa-2xl');

const openFollowLinkd = document.createElement('div');
openFollowLinkd.classList.add('open-follow-linkd');

const iconCLinkd = document.createElement('i');
iconCLinkd.classList.add('fa-brands' , 'fa-linkedin' , 'fa-2xl');

const openFollowInsta = document.createElement('div');
openFollowInsta.classList.add('open-follow-insta');

const iconCInsta = document.createElement('i');
iconCInsta.classList.add('fa-brands' , 'fa-instagram' , 'fa-2xl');

const openFollowGithub = document.createElement('div');
openFollowGithub.classList.add('open-follow-github');

const iconCGithub = document.createElement('i');
iconCGithub.classList.add('fa-brands' , 'fa-github' , 'fa-2xl');


//--------------------------------
//------- Principal append -------
//--------------------------------

contact.appendChild(frameContact);
frameContact.appendChild(titleContact)
frameContact.appendChild(frameStructureContact);
frameStructureContact.appendChild(subFrameStructureContactOne);
frameStructureContact.appendChild(subFrameStructureContactTwo);

//--------------------------------
//------- First Block append ----- 
//--------------------------------

//-- (1) Block Email ---------------
subFrameStructureContactOne.appendChild(blockContactFirst);
blockContactFirst.appendChild(subBlockEmail);
subBlockEmail.appendChild(gnralDivCEmail);
gnralDivCEmail.appendChild(blockIconCEmail);
blockIconCEmail.appendChild(boxIconCEmail);
boxIconCEmail.appendChild(iconCEmail);
gnralDivCEmail.appendChild(textContentCEmail);
textContentCEmail.appendChild(h3textContentCEmail);
textContentCEmail.appendChild(ptextContentCEmail);
gnralDivCEmail.appendChild(boxIconGoEmail);
boxIconGoEmail.appendChild(iconGoEmail);
subBlockEmail.appendChild(videoContainer);
videoContainer.appendChild(videoEmail);
videoEmail.appendChild(videoSource);


//-- (2) Block Idea ---------------
subFrameStructureContactOne.appendChild(blockContactSecond);
blockContactSecond.appendChild(subBlockIdea);
subBlockIdea.appendChild(gnralDivCIdea);
gnralDivCIdea.appendChild(blockIconCIdea);
blockIconCIdea.appendChild(boxIconCIdea);
boxIconCIdea.appendChild(iconCIdea);
gnralDivCIdea.appendChild(textContentCIdea);
textContentCIdea.appendChild(h3textContentCIdea);
textContentCIdea.appendChild(ptextContentCIdea);
gnralDivCIdea.appendChild(boxIconGoIdea);
boxIconGoIdea.appendChild(iconGoIdea);
subBlockIdea.appendChild(imageContactIdea);


//-- (3) Block Fqa ---------------
subFrameStructureContactOne.appendChild(blockContactSecond);
blockContactSecond.appendChild(subBlockFqa);
subBlockFqa.appendChild(gnralDivCFqa);
gnralDivCFqa.appendChild(blockIconCFqa);
blockIconCFqa.appendChild(boxIconCFqa);
boxIconCFqa.appendChild(iconCFqa);
gnralDivCFqa.appendChild(textContentCFqa);
textContentCFqa.appendChild(h3textContentCFqa);
textContentCFqa.appendChild(ptextContentCFqa);
gnralDivCFqa.appendChild(boxIconGoFqa);
boxIconGoFqa.appendChild(iconGoFqa);
subBlockFqa.appendChild(imageContactFqa);


//--------------------------------
//------ Second Block append ----- 
//--------------------------------

//-- (4) Block Ubication ---------------
subFrameStructureContactTwo.appendChild(blockContactThird);
blockContactThird.appendChild(subBlockUbication);
subBlockUbication.appendChild(gnralDivCUbication);
gnralDivCUbication.appendChild(blockIconCUbication);
blockIconCUbication.appendChild(boxIconCUbication);
boxIconCUbication.appendChild(iconCUbication);
gnralDivCUbication.appendChild(textContentCUbication);
textContentCUbication.appendChild(h3textContentCUbication);
textContentCUbication.appendChild(ptextContentCUbication);
gnralDivCUbication.appendChild(boxIconGoUbication);
boxIconGoUbication.appendChild(iconGoUbication);
subBlockUbication.appendChild(imageContactUbication);


//-- (5) Block Share ---------------
subFrameStructureContactTwo.appendChild(blockContactFourth);
blockContactFourth.appendChild(subBlockShare);
subBlockShare.appendChild(gnralDivCShare);
gnralDivCShare.appendChild(blockIconCShare);
blockIconCShare.appendChild(boxIconCShare);
boxIconCShare.appendChild(iconCShare);
gnralDivCShare.appendChild(textContentCShare);
textContentCShare.appendChild(h3textContentCShare);
textContentCShare.appendChild(ptextContentCShare);
gnralDivCShare.appendChild(boxIconGoShare);
boxIconGoShare.appendChild(iconGoShare);
subBlockShare.appendChild(imageContactShare);



//-- (6) Block Followme ---------------
subFrameStructureContactTwo.appendChild(blockContactFourth);
blockContactFourth.appendChild(subBlockFollowme);

subBlockFollowme.appendChild(gnralDivCFollowme);
gnralDivCFollowme.appendChild(blockIconCFollowme);
blockIconCFollowme.appendChild(boxIconCFollowme);
boxIconCFollowme.appendChild(iconCFollowme);
gnralDivCFollowme.appendChild(textContentCFollowme);
textContentCFollowme.appendChild(h3textContentCFollowme);

subBlockFollowme.appendChild(iconsCFollowme);
iconsCFollowme.appendChild(openFollowTwit);
openFollowTwit.appendChild(iconCTwit);

iconsCFollowme.appendChild(openFollowLinkd);
openFollowLinkd.appendChild(iconCLinkd);

iconsCFollowme.appendChild(openFollowInsta);
openFollowInsta.appendChild(iconCInsta);
iconsCFollowme.appendChild(openFollowGithub);
openFollowGithub.appendChild(iconCGithub);
