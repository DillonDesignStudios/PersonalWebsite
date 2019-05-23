function bgChanger() {
    if (this.scrollY > this.innerHeight / 1.3) {
        document.body.classList.add('bgActive');
    } else {
        document.body.classList.remove('bgActive');
    }
}

window.addEventListener("scroll", bgChanger);