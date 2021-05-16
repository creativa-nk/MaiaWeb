let $portfolioInJS =
    ``;
let $portfolioTitle = `
<div class="titulo">
<h1 data-aos='fade-up'>Latest works</h1>
</div>
`;

let $toe = buildItems(items);

document.getElementById('portfolio').innerHTML =
    $portfolioTitle +
    '<div class="grid" id="portfolioGrid">' +
        // $portfolioInJS
        // $toe
    '</div>';


document.getElementById('portfolioGrid').appendChild($toe);