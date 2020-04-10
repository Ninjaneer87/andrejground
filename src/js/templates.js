const feature = (item) => `
    <li class="project-feature">- ${item}</li>
`;
const technology = (item) => `
    <li class="project-technology">${item}</li>
`;
export const projectView= (project) => `        
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