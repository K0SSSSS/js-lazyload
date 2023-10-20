/*
 * Ліниве завантаження зображення (концепція)
 * - нативна підтримка
 * -https://caniuse.com/?search=loading - перевірка підтримуваності технологій
 * loading = "lazu"
 * - подія завантаженя зображення
 */
const lazyImages = document.querySelectorAll('img[loading="lazy"]');
console.log(lazyImages);

lazyImages.forEach(image => {image.addEventListener('load', onImageLoaded, {once: true})
})

function onImageLoaded(e){
    console.log('Зображення завантажилось');
    e.target.classList.add("appear")
}