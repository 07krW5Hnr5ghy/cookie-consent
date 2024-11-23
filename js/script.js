
const cookieConsent = document.querySelector(".cookie-consent");
const cookieButton = document.querySelector(".cookie-button");
if(window.localStorage.getItem("cookie-clicked")==="yes"){
    cookieConsent.classList.add("cookie-consent-inactive");
}
cookieButton.addEventListener("click",()=>{
    window.localStorage.setItem("cookie-clicked","yes");
    cookieConsent.classList.add("cookie-consent-inactive");
});