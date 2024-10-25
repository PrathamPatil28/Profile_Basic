
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");


const shareProfile = ()=>{
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
}

const closeModal = ()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
}

// document.getElementById('openLinkButton').addEventListener("click" , ()=>{
//     var linkToOpen = 'https://www.instagram.com/pratham_1_patil/';

//     window.open(linkToOpen,'_blank')
// })

const openLinkButton = document.querySelector(".btn2");

// const openLink = () => {
//     const linkUrl = 'https://www.instagram.com/pratham_1_patil/';
//     window.open(linkUrl, "_blank");
// }

// Add an event listener to trigger the openLink function
openLinkButton.addEventListener("click", ()=>{

    const link = 'https://www.instagram.com/pratham_1_patil/';
    window.open(link , '_blank')
});
