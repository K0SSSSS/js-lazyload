/*
 * Сhatty events
 * Прийом throttling і debouncing з Lodash
 * Шумні події. До них можна віднести: скроли по сторінці, зміни розширення дисплея, муас мув, маус аут, введення тексту в інпут ітд. По факту браузеру всеодно скільки подій відпрацьовувати. Він може без проблем відпрацювати і мільойн подій і абсолютно нормально з цим справиться. А от що стосується js то тут ситуація трохи інша. Нам же для кожної події потрібно повішати слухач, а слухач це відповідно якась функція, яка відпрацьовується при настані події. А це вже навантажує систему, тому що js однопоточний, він пропарцьовує все підряд одним потоком, він не має можливості в один момент виконувати різні завдання. Тому проблема не в браузері, а проблема в нас, в тому, як ми організували структуру коду
 */
/*
 * Mousemove и throttle
 */
// const coordsOutputRef = document.querySelector(".js-coords")
// let mouseMoveInvocationCounter = 0;


// window.addEventListener("mousemove", _.throttle(onMouseMove, 300))
// function onMouseMove(e){
//     mouseMoveInvocationCounter += 1;
//     coordsOutputRef.textContent = `К-ть викликів onMouseMove: ${mouseMoveInvocationCounter}, X:${e.clientX}, y:${e.clientY}`;

// }
/*
 * Input и debounce
 */

const inputRef = document.querySelector(".js-input")
const outputRef = document.querySelector(".js-output")

let inputInvocationCounter = 0;
inputRef.addEventListener("input", onInputChange);

function onInputChange(e){
    inputInvocationCounter += 1;
    outputRef.textContent = `К-ть викликів onInputChange: ${inputInvocationCounter}, значення: ${e.target.value}`;
    console.log(e.target.value);
}
