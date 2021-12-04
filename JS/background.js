const images=["b1.jpg","b2.jpg","b3.jpg","b4.jpg","b5.jpg","b6.jpg","b7.jpg","b8.jpg","b9.jpg","b10.jpg","b11.jpg"];

savedImage=images[Math.floor(Math.random()*images.length)];

const body=document.querySelector("body");
const image=new Image();
image.src=`IMG/${savedImage}`;
image.classList.add("background");
body.appendChild(image);


// const backgroundImage=document.createElement("img");
// backgroundImage.src=`IMG/${savedImage}`;
// document.body.appendChild(backgroundImage);

// const background=document.querySelector("background-image");
// background=savedImage;

 