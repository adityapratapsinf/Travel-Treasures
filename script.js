let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let videoBtn = document.querySelectorAll('.vid-btn');
const signUpButton = document.getElementById('signUpbutton')
const logOut = document.getElementById('logout-btn')

if(localStorage.getItem('isLoggedIn')){
    signUpButton.style.display = 'none';
}else{
    window.location.href =  "http://127.0.0.1:5500/index4.html"
}

logOut.addEventListener("click", function (){
    localStorage.removeItem('isLoggedIn')
    window.location.reload()
})
window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});