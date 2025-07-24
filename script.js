const projects = document.querySelectorAll('.project');

projects.forEach(function(project){
    project.addEventListener("mouseover", () => {
    removeProject();
    project.classList.add('newProject');
    
})

removeProject = () => {
    projects.forEach(project => {
    project.classList.remove('newProject');
    })
}
})