/*
* Бібліотека lazysizes - https://cdnjs.com
* Цікава інфа для прочитання, про те як працює браузер з зображеннями. 
https://web.dev/browser-level-image-lazy-loading/
* - feature detection
*
*/
if('loading' in HTMLImageElement.prototype) {
    console.log("Браузер підтримує lazy-loading");
    addSrcToLazyImage();
}    else{
        console.log("Браузер не підтримує lazy-loading");
        addLazySizeScript()
    }



const lazyImages = document.querySelectorAll('img[loading="lazy"]');
console.log(lazyImages);

lazyImages.forEach(image => {image.addEventListener('load', onImageLoaded, {once: true})
})
//Коли Бібліотека не підтримується браузером
function onImageLoaded(e){
    console.log('Зображення завантажилось');
    e.target.classList.add("appear")
}
function addLazySizeScript (){
    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
    script.integrity = "sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
    script.crossOrigin = "anonymous"
    document.body.appendChild(script)

}
//Коли Бібліотека підтримується браузером

function addSrcToLazyImage(){
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => {
        img.src = img.dataset.src;
    })
}