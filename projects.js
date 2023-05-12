const bgWallPortFolio = document.getElementById('bg-wallPortfolio');

const containerPortfolio = document.createElement('div');
containerPortfolio.classList.add('container-portfolio');
bgWallPortFolio.appendChild(containerPortfolio); 

function renderCard(cardData) {
        console.log('Ejecutando renderCard() con estos datos:', cardData);

            containerPortfolio.textContent = '';

            //-------------------------------------------------

            const headerPortfolio = document.createElement('div');
            headerPortfolio.classList.add('header-portfolio');
    
            const boxImgPortfolio = document.createElement('div');
            boxImgPortfolio.classList.add('box-img-portfolio');
    
            const imgPortfolio = document.createElement('img');
            imgPortfolio.classList.add('img-portfolio');
            imgPortfolio.setAttribute('src' , cardData['image']);
            //--------------------------------------------------
            const boxNavHeader = document.createElement('div');
            boxNavHeader.classList.add('box-nav-header');
    
            const tagCategory = document.createElement('div');
            tagCategory.classList.add('tag');
            tagCategory.textContent = cardData['category'];
    
            const tagIconAndLevel = document.createElement('div');
            tagIconAndLevel.classList.add('tag');
            tagIconAndLevel.textContent = cardData['icon'] + '' +  cardData['level'];
    
            //-----------------------------------------------
            const boxBtnsNavHeader = document.createElement('div');
            boxBtnsNavHeader.classList.add('box-btns-nav-header');
    
            const anchorageRepo = document.createElement('a');
            anchorageRepo.setAttribute('href' , cardData['openRepo']);
            anchorageRepo.setAttribute('target' , '_blank');
    
            const boxIconRepo = document.createElement('div');
            boxIconRepo.classList.add('box-icon-repo');
    
            const iconGitHubPortFolio = document.createElement('i');
            iconGitHubPortFolio.classList.add('fa-brands' , 'fa-github' , 'icongithub-portfolio');
    
            //-------------------------------------------------
            const anchorageOpenWeb = document.createElement('a');
            anchorageOpenWeb.classList.add('anchorage-web');
            anchorageOpenWeb.setAttribute('href' , cardData['openWeb']);
            anchorageOpenWeb.setAttribute('target' , '_blank');
    
            const boxIconWeb = document.createElement('div');
            boxIconWeb.classList.add('box-icon-web');
    
            const iconOpenWeb = document.createElement('i');
            iconOpenWeb.classList.add('fa-solid' , 'fa-arrow-up-right-from-square');
    
            //-------------------------------------------------
            const dataProject = document.createElement('div');
            dataProject.classList.add('data-project');
    
            const titleProject = document.createElement('h3');
            titleProject.classList.add('title-project');
            titleProject.textContent = cardData['title'];
    
            //-------------------------------------------------
            const boxDate = document.createElement('div');
            boxDate.classList.add('box-date');
    
            const iconDate = document.createElement('i');
            iconDate.classList.add('fa-regular' , 'fa-calendar');
    
            const dateProject = document.createElement('p');
            dateProject.classList.add('date-project');
            dateProject.textContent = cardData['date'];
    
            //-----------------------------------------------
            const bodyProject = document.createElement('div');
            bodyProject.classList.add('body-project');
    
            const textBodyProject = document.createElement('p');
            textBodyProject.classList.add('text-body-project');
            textBodyProject.textContent = cardData['text'];
            //------------------------------------------------
            const projectStack = document.createElement('div');
            projectStack.classList.add('project-box');
    
            const titleStack = document.createElement('h3');
            titleStack.classList.add('title-area');
            titleStack.textContent = 'Stack';
    
            const containerStack = document.createElement('div');
            containerStack.classList.add('container-tags');        
    
            //-----------------------------------------------
            //Inseerciones ----------------------------------
            //------------------------------------------------
            bgWallPortFolio.appendChild(containerPortfolio); 
            containerPortfolio.appendChild(headerPortfolio);
            headerPortfolio.appendChild(boxImgPortfolio);
            boxImgPortfolio.appendChild(imgPortfolio);
            boxImgPortfolio.appendChild(boxNavHeader);
            boxNavHeader.appendChild(tagCategory);
            boxNavHeader.appendChild(boxBtnsNavHeader);
            boxBtnsNavHeader.appendChild(anchorageRepo);
            anchorageRepo.appendChild(boxIconRepo);
            boxIconRepo.append(iconGitHubPortFolio);
            boxBtnsNavHeader.appendChild(anchorageOpenWeb);
            anchorageOpenWeb.appendChild(boxIconWeb);
            boxIconWeb.appendChild(iconOpenWeb);
            headerPortfolio.appendChild(dataProject);
            dataProject.appendChild(titleProject);
            headerPortfolio.appendChild(boxDate);
            boxDate.appendChild(iconDate);
            boxDate.appendChild(dateProject);
            containerPortfolio.appendChild(bodyProject);
            bodyProject.appendChild(textBodyProject);
            bodyProject.appendChild(projectStack);
            projectStack.appendChild(titleStack);
            bodyProject.appendChild(containerStack);
            bodyProject.appendChild(tagIconAndLevel);
}


document.addEventListener('cardSelected', (event) => {
        const cardData = event.detail;
        renderCard(cardData)
});


bgWallPortFolio.addEventListener('click', (event) => {
    if (event.target === bgWallPortFolio) {
    bgWallPortFolio.style.display = 'none';
    document.body.style.overflow = 'auto';  
    console.log('funciona el cierrre')  }
});




































