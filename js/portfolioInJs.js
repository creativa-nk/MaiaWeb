let $portfolioInJS =
    `
<div class="item">
    <img src="./img/condeDeGitanes.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-right'>
    <a href="./img/condeDeGitanes.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/moraleja.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-left'>
        <a href="./img/moraleja.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/SALON.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-right'>
        <a href="./img/SALON.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/valdemartin.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-left'>
    <a href="./img/valdemartin.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/AceroCorten.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-right'>
    <a href="./img/AceroCorten.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/salon2.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-left'>
    <a href="./img/salon2.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/condeDeGitanes.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-right'>
    <a href="./img/condeDeGitanes.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/AceroCorten.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-left'>
    <a href="./img/AceroCorten.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/valdemartin.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-right'>
    <a href="./img/valdemartin.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/salon2.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-left'>
    <a href="./img/salon2.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/moraleja.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-right'>
    <a href="./img/moraleja.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
            <b>Details</b>
        </div>
    </a>
</div>
<div class="item">
    <img src="./img/SALON.jpg" alt="NAME" class="IMGresponsive" data-aos='fade-left'>
    <a href="./img/SALON.jpg" class="zoom valign-center">
        <div class="valign-center-elem">
            <strong>Madrid City Project</strong>
            <!-- <em>Property</em> -->
           <b>Details</b>
        </div>
    </a>
</div>
`;
let $portfolioTitle = `
<div class="titulo">
<h1 data-aos='fade-up'>Latest works</h1>
</div>
`;

document.getElementById('portfolio').innerHTML =
    $portfolioTitle +
    '<div class="grid">' +
        $portfolioInJS
    '</div>';