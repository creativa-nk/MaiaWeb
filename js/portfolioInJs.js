let divTitle = document.createElement('div');
let h1 = document.createElement('h1');
let divGrid = document.createElement('div')

divTitle.classList.add('titulo');
h1.dataset.aos = 'fade-up';
h1.innerText='Latest works';

divGrid.classList = 'grid';

divTitle.appendChild(h1);
divGrid.appendChild(buildItems(items));
document.getElementById('portfolio').appendChild(divTitle);
document.getElementById('portfolio').appendChild(divGrid);