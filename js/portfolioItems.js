{/* <img src="./img/condeDeGitanes.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-right'>
<a href="./img/condeDeGitanes.jpg" class="zoom valign-center">
    <div class="valign-center-elem">
        <strong>Madrid City Project</strong>
        <!-- <em>Property</em> -->
        <b>Details</b>
    </div>
</a> */}
const IMG_PATH = './img';
const IMG_CLASS = 'IMGresponsive';
const LINK_CLASS = ['zoom', 'valign-center']
const DIV_CLASS = 'valign-center-elem'
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
    }
];

function buildItems(items) {
    let fragment = new DocumentFragment();
    for (key in items) {
        // console.log(items[key]);
        let img = builImgFromItem(items[key]);
        let a = buildLinkFromItem(items[key]);
        fragment.appendChild(a);
        fragment.insertBefore(img,a);
    }
    return fragment;
}

function buildLinkFromItem(item){
    let a =  document.createElement('a');
    a.href=item.src;
    a.classList.add(...LINK_CLASS);
    return a
}

function builImgFromItem(item) {
    let img = document.createElement('img');
    img.src = IMG_PATH + '/' + item.src;
    img.alt = item.alt;
    // console.log(img);
    return img;
}


buildItems(items);