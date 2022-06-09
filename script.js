$(function(){
    const navbar_burger = document.querySelector("navbar > .container > #burger");
    const navbar = document.querySelector("navbar > .container > ul");

    const collapsible = document.querySelectorAll("#about-me > .container > .body > .experiences > .row > .column > .collapsible");
    const project_preview_button = document.querySelectorAll("section#projects > .container > .body > .project > .project-preview > .project-preview-button");

    navbar_burger.addEventListener('click', () => {
        navbar.classList.toggle("open");
    });

    for(let i = 0; i < collapsible.length; i++){
        collapsible[i].addEventListener('click', () => {
            const collapsible_body = collapsible[i].nextElementSibling;

            collapsible[i].classList.toggle("active");
            collapsible_body.classList.toggle("open");
        });
    }

    for(let i = 0; i < project_preview_button.length; i++){
        project_preview_button[i].addEventListener('click', () => {
            const project_preview_body = project_preview_button[i].nextElementSibling;

            project_preview_body.classList.toggle("open");
        });
    }
});