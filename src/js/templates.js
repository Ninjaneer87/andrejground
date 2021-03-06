const feature = item => `
    <li class="project-feature">- ${item}</li>
`;
const technology = item => `
    <li class="project-technology">${item}</li>
`;
export const projectPopupView= project => `        
    <div class="project-holder">
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <div class="project-desc">
                <div class="planning ${project.planning ? '' : 'hide'}">In planning phase</div> <br>
                ${project.desc}
                <ul class="project-features">
                    ${project.features.map(project => feature(project)).join('')}
                </ul>
                <ul class="project-technologies">
                    ${project.technologies.map(project => technology(project)).join('')}
                </ul>
                <div class="project-buttons">
                    <a href="${project.sourceCode ? project.sourceCode : ''}" target="_blank" class="src-code project-button ${project.sourceCode ? '' : 'disabled'}" title="View source code">
                        <i class="fas fa-code fa-lg"></i>
                    </a>
                    <a href="${project.liveDemo ? project.liveDemo : ''}" target="_blank" class="live-demo project-button ${project.liveDemo ? '' : 'disabled'}" title="Visit site">
                        <i class="fas fa-link fa-lg"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
`;
const renderItem = item => `
    <div class="${item.containerClass}">
    <div class="project-image ${item.linkClass}">
        <img class="${item.planning ? 'construction-image': ''} unclickable" src="${item.image}" alt="${item.title}">
    </div>
    <h3 class="image-caption unclickable">${item.title}</h3>
    </div>
`;
export const portfolioView = projects => `
    <h2>My portfolio</h2>
    ${projects.map(item => renderItem(item)).join('')}
`;