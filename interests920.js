
const sectionInterests = document.querySelector('.interests');

        const frameSecAB = document.createElement('div');
        frameSecAB.classList.add('frame-secab');
        
        const myInterests2 = document.createElement('div');
        myInterests2.classList.add('my-interests2');
        
        const InterestsTitle2 = document.createElement('h3');
        InterestsTitle2.classList.add('h3');
        InterestsTitle2.innerText = 'INTERESES';
        
        const containerInterests2 = document.createElement('div');
        containerInterests2.classList.add('container-interests2');
        
        const interestsList2 = [ '📒  Leer' , '🍜  Cocinar' , '⚽  Deportes en Equipo' , '💪  Gimnasio' , '♟️  Juegos de Estrategia' , '🗺️  Viajar' , '☕  Cafe' , '🐶  Perros', '🐱  Gatos' , '🌊  playa', '🎉  Start ups',  '🎉  Tecnologia'];
        
        for (let i = 0; i< interestsList2.length; i++ ){
            const divTagInterests = document.createElement('div');
            divTagInterests.classList.add('div-tag-interests');
            divTagInterests.textContent = interestsList2[i];
            containerInterests2.appendChild(divTagInterests);
        }
        
        
        sectionInterests.appendChild(frameSecAB)
        frameSecAB.appendChild(myInterests2);
        myInterests2.appendChild(InterestsTitle2);
        myInterests2.appendChild(containerInterests2);  
        
        
        
        
