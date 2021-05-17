$(document).ready(initializeApp);

function initializeApp() {


    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');
    // const about = document.querySelector('.about');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
        // about.classList.toggle('active');
    });

    // document.getElementById("aboutLink").addEventListener("click", aboutClick);
    // document.getElementById("projectsLink").addEventListener("click", projectClick);
    // document.getElementById("contactLink").addEventListener("click", contactClick);
    // document.getElementById("homeLink").addEventListener("click", homeClick);
    //
    // function aboutClick(){
    //     $('#aboutSection').removeClass('hidden');
    //     $('#homeSection').addClass('hidden');
    //     $('#projectSection').addClass('hidden');
    //     $('#contactSection').addClass('hidden');
    //     showcase.classList.remove('active');
    // }
    // function homeClick(){
    //     $('#aboutSection').addClass('hidden');
    //     $('#homeSection').removeClass('hidden');
    //     $('#projectSection').addClass('hidden');
    //     $('#contactSection').addClass('hidden');
    //     showcase.classList.remove('active');
    // }
    // function projectClick(){
    //     $('#aboutSection').addClass('hidden');
    //     $('#homeSection').addClass('hidden');
    //     $('#projectSection').removeClass('hidden');
    //     $('#contactSection').addClass('hidden');
    //     showcase.classList.remove('active');
    // }
    // function contactClick(){
    //     $('#aboutSection').addClass('hidden');
    //     $('#homeSection').addClass('hidden');
    //     $('#projectSection').addClass('hidden');
    //     $('#contactSection').removeClass('hidden');
    //     showcase.classList.remove('active');
    // }

}