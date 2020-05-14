const works = [
    {
        author: "Micheal Jackson",
        lifetime: "1022-1055",
        tip: "Human",
        photos: ["human1.jpg", "human2.jpg", "human3.jpg"]
    },
    {
        author: "Maria JK",
        lifetime: "1920-2001",
        tip: "Classical",
        photos: ["classical1.jpg", "classical2.jpg"]
    },
    {
        author: "John Herry UY",
        lifetime: "1894-1928",
        tip: "Abstract",
        photos: ["abstract1.jpg", "abstract2.jpg", "abstract3.jpg", "abstract4.jpg", "abstract5.jpg"]
    },
    {
        author: "Coco",
        lifetime: "1777-1799",
        tip: "Beauty",
        photos: ["beauty1.jpg", "beauty2.jpg"]
    }
];

function show(x) {
    let genre = document.createElement("div");
    genre.className = "item";
    let tip = document.createElement("h4");
    tip.innerText = "Genre:" + works[x].tip;
    tip.style.padding = "0 0 20px 0";
    genre.appendChild(tip);

    let introduction = document.createElement("div");//姓名和生卒年
    introduction.className = "inner-box";
    let author = document.createElement("h3");
    author.innerText = works[x].author;
    author.style.display = "inline";
    author.style.padding = "0 20px 0 0";
    introduction.appendChild(author);
    let lifetime = document.createElement("h4");
    lifetime.innerText = "lifetime:" + works[x].lifetime;
    lifetime.style.display = "inline";
    introduction.appendChild(lifetime);

    let photos = document.createElement("div");//画作
    photos.className = "inner-box";

    let title = document.createElement("h3");
    title.innerText = "Popular Photos";
    photos.appendChild(title);

    for (let i = 0; i < works[x].photos.length; i++) {
        let img = document.createElement("img");
        img.src = works[x].photos[i];
        img.className = "photo";
        photos.appendChild(img);
    }

    let btn = document.createElement("button");
    btn.textContent = "visit";
    
    genre.appendChild(introduction);
    genre.appendChild(photos);
    genre.appendChild(btn);

    document.body.appendChild(genre);
}

for (let x in works) {
    show(x);
}