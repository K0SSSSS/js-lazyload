const tech = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'JavaScript' },
  { label: 'Node.js' },
  { label: 'React' },
  { label: 'Vue' },
  { label: 'Next.js' },
  { label: 'Mobx' },
  { label: 'Redux' },
  { label: 'React Router' },
  { label: 'GraphQl' },
  { label: 'PostgreSQL' },
  { label: 'MongoDB' },
];

/*
 * 1. Рендеримо розмітку елементів списку
 * 2. Слухаємо зміни фільтра
 * 3. Фільтруємо дані та рендиримо нові елементи
 * 4. Fuse.js - https://fusejs.io (пухнастий пошук) - бібліотека
 */

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter")
};

refs.input.addEventListener("input", _.debounce(onFilterChange, 500));



refs.input.addEventListener("input", onFilterChange)

const  listItemMarkup = createListElement(tech);
refs.list.innerHTML = listItemMarkup




function createListElement(items){
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

// Filter
function onFilterChange(e){
  const filter = e.target.value.toLowerCase();

  const filteredItems = tech.filter(value => value.label.toLowerCase().includes(filter))
  const newItems = createListElement(filteredItems);
  console.log(newItems);
  refs.list.innerHTML = newItems
}