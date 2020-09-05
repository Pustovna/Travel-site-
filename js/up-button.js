let upButton = document.querySelector('.up-button')
let classPage = document.querySelector('.top-block')
let height = classPage.clientHeight
console.log(height)

window.onscroll = function() {
    if (window.pageYOffset > height) {
     upButton.classList.add('shown')
    }
    else {
     upButton.classList.remove('shown')
    }
}

upButton.onclick = function()
{
    window.scrollTo(0, 0)
}