const elements = document.getElementsByClassName('add');
const submit = document.getElementById("submit");
const social = document.getElementById("social");
const body = document.querySelector("body");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
const banners = document.getElementsByClassName("banner");
let targetSocial;


// let profiles = {}
// localStorage.setItem('profiles', JSON.stringify(profiles));
let saved = JSON.parse(localStorage.getItem('profiles'));

Object.keys(saved).forEach(value => {
    let target = document.getElementById(`${value}`);
    target.innerHTML = saved[value];
  });


const showModal = (e) => {
    modal.classList.add("flex");
    body.classList.add("fixed");
    targetSocial = e.target.id
}
const closeModal = () => {
    modal.classList.remove("flex");
    modal.classList.add("none");
    body.classList.remove("fixed");
    social.value = "";

}
const copyToClipboard = (e) => {
    let target = e.target.title
    const clipboard = document.getElementById(`${target}`);  
    const link = clipboard.innerText;
    async function copyPageUrl() {
        try {
          await navigator.clipboard.writeText(link);
          alert('Page URL copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
    }
    copyPageUrl()
}

[...elements].forEach(element => {
    element.addEventListener('click',showModal)
});
[...banners].forEach(banner => {
    banner.addEventListener('click',copyToClipboard)
});

close.addEventListener('click', () => {
    closeModal()

})
submit.addEventListener("click", (e) => {
    const clipboard = document.getElementById(`${targetSocial}`);  
    const socialURL = social.value;
    clipboard.innerText = socialURL;
    let profiles = JSON.parse(localStorage.getItem('profiles'));
    profiles[`${targetSocial}`] = socialURL
    localStorage.setItem('profiles', JSON.stringify(profiles));
    closeModal();
})