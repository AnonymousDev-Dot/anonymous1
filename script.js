
let openNav = document.getElementById("openNav");
let sideNavbar = document.querySelector(".sideNavbar");
let closeNav = document.getElementById("closeNav");


openNav.onclick = ()=>{
// openNav.style.display="none"
sideNavbar.classList.replace("sideNavbar","open")

}


closeNav.onclick = ()=>{
    //  closeNav.style.display="none"
    sideNavbar.classList.replace("open","sideNavbar")

}


 function RemoveAccount() {
    localStorage.removeItem("UserAccess")
    setTimeout(() => {
        location.pathname="./index.html"
    }, 2000);
}