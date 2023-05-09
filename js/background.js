const images = [
    "0.jpg", "1.jpg", "2.jpg"
];

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage); // body에 html을 추가하는 것! append는 맨 뒤에 붙이는 것, prepend는 맨 앞에 붙이는 것