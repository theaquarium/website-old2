window.addEventListener('load', () => {
    const newProjectList = [];
    projectList.forEach(el => {
        if (!el.name.startsWith('{exclude}')) {
            newProjectList.push(el);
        }
    });
    if (newProjectList.length == 0) {
        const empty = document.createElement('div');
        empty.classList.add('Projects-empty');
        empty.innerHTML = 'No Projects Yet. Check Back Later.';
        const main = document.querySelector('main');
        main.appendChild(empty);
    } else {
        newProjectList.forEach(el => {
            const projectBox = document.createElement('div');
            const projects = document.querySelector('.Projects');
            projectBox.classList.add('Projects-item');
    
            const buttonBox = document.createElement('div');
            buttonBox.classList.add('Projects-buttons');
            if (el.mediumLink != '') {
                const mediumLink = document.createElement('a');
                mediumLink.classList.add('Projects-button');
                mediumLink.innerHTML = '<i class="fab fa-medium-m"></i>';
                buttonBox.appendChild(mediumLink);
            }
            if (el.githubLink != '') {
                const githubLink = document.createElement('a');
                githubLink.classList.add('Projects-button');
                githubLink.innerHTML = '<i class="fab fa-github"></i>';
                buttonBox.appendChild(githubLink);
            }
            if (el.webLink != '') {
                const webLink = document.createElement('a');
                webLink.classList.add('Projects-button');
                webLink.innerHTML = '<i class="fas fa-link"></i>';
                buttonBox.appendChild(webLink);
            }
            projectBox.appendChild(buttonBox);
    
            const title = document.createElement('div');
            title.classList.add('Projects-title');
            title.innerHTML = el.name;
            projectBox.appendChild(title);
    
            const desc = document.createElement('div');
            desc.classList.add('Projects-desc');
            desc.innerHTML = el.desc;
            projectBox.appendChild(desc);
    
            projects.appendChild(projectBox);
        });
    }
});
