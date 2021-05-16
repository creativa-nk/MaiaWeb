const IMG_PATH = './img';
const IMG_CLASS = 'IMGresponsive';
const LINK_CLASS = ['zoom', 'valign-center']
const DIV_CLASS = ['valign-center-elem']
const items = [
    {
        src: 'condeDeGitanes.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'moraleja.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'SALON.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'valdemartin.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'AceroCorten.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'salon2.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'condeDeGitanes.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'AceroCorten.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'valdemartin.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'salon2.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'moraleja.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
    {
        src: 'SALON.jpg',
        alt: 'NAME',
        message: 'Madrid City Project',
    },
];


function buildItems(items) {
    let fragment = new DocumentFragment();
    for (key in items) {
        let divItem = document.createElement('div');
        let img = builImgFromItem(items[key], key);
        let a = buildLinkFromItem(items[key]);
        let div = buildDivFromItem(items[key]);

        divItem.classList.add('item');
        fragment.appendChild(divItem);
        divItem.appendChild(img)
        divItem.appendChild(a);
        a.appendChild(div)
    }
    return fragment;
}

function buildLinkFromItem(item){
    let a =  document.createElement('a');
    a.href = IMG_PATH + '/' + item.src;
    a.classList.add(...LINK_CLASS);
    return a
}
{/* <img src="./img/condeDeGitanes.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-right'>
<a href="./img/condeDeGitanes.jpg" class="zoom valign-center">
    <div class="valign-center-elem">
        <strong>Madrid City Project</strong>
        <!-- <em>Property</em> -->
        <b>Details</b>
    </div>
</a> */}
function builImgFromItem(item, key) {
    let img = document.createElement('img');
    img.src = IMG_PATH + '/' + item.src;
    img.alt = item.alt;
    img.classList.add('IMGresponsive');
    img.dataset.aos = (key%2 == 0)?'fade-right':'fade-left';
    return img;
}

function buildDivFromItem(item) {
    let div = document.createElement('div');
    let strong = document.createElement('strong');
    let b = document.createElement('b');

    div.classList.add(...DIV_CLASS);
    strong.innerHTML = item.message;
    b.innerHTML = 'Details'
    div.appendChild(strong);
    div.appendChild(b);
    return div
}


buildItems(items);