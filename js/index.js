const X = window.matchMedia('(max-width:375px)')
let count = 0,
    countTwo = 0

icon.addEventListener('click', () => {
    if(icon.classList.contains('icon') && count == 0) {
        icon.classList.remove('menu')
        icon.classList.add('close')
        icon.setAttribute('src', '/images/icon-close.svg')
        icon.setAttribute('alt', 'Close')
        list.classList.add('active')
        document.body.classList.add('scroll')
        count++       
    } else {
        icon.classList.remove('close')
        icon.classList.add('menu')
        icon.setAttribute('src', '/images/icon-hamburger.svg')
        icon.setAttribute('alt', 'Menu')
        list.classList.remove('active')
        document.body.classList.remove('scroll')
        count--
    }
})

aLeft.addEventListener('click', () => {
    if(countTwo == 2) {
        if(X.matches) {
            image.setAttribute('src', '/images/mobile-image-hero-2.jpg')
        } else {
            image.setAttribute('src', '/images/desktop-image-hero-2.jpg')
        }
        title.innerText = 'We are available all across the globe'
        text.innerText = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        countTwo = 1
    } else {
        if(X.matches) {
            image.setAttribute('src', '/images/mobile-image-hero-1.jpg')
        } else {
            image.setAttribute('src', '/images/desktop-image-hero-1.jpg')
        }
        title.innerText = 'Discover innovative ways to decorate'
        text.innerText = "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        countTwo = 0
    }
})

aRight.addEventListener('click', () => {
    if(countTwo == 0) {
        if(X.matches) {
            image.setAttribute('src', '/images/mobile-image-hero-2.jpg')
        } else {
            image.setAttribute('src', '/images/desktop-image-hero-2.jpg')
        }
        title.innerText = 'We are available all across the globe'
        text.innerText = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
        countTwo = 1
    } else {
        if(X.matches) {
            image.setAttribute('src', '/images/mobile-image-hero-3.jpg')
        } else {
            image.setAttribute('src', '/images/desktop-image-hero-3.jpg')
        }
        title.innerText = 'Manufactured with the best materials'
        text.innerText = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        countTwo = 2
    }
})

window.addEventListener('resize', () => {
    if(X.matches) {
        image.setAttribute('src', '/images/mobile-image-hero-1.jpg')
    } else {
        image.setAttribute('src', '/images/desktop-image-hero-1.jpg')
    }
})

window.addEventListener('DOMContentLoaded', (e) => {
    e = new CustomEvent('resize');
    window.dispatchEvent(e);
})




