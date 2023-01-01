
const Coursescard1=document.querySelector("#card1");
const Coursescard2=document.querySelector("#card2");
const Coursescard3=document.querySelector("#card3");

let randomIndex1=Math.floor(Math.random() * COURSES.length); 
let randomIndex2=Math.floor(Math.random() * COURSES.length);
let randomIndex3=Math.floor(Math.random() * COURSES.length);

while (randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3) {
    randomNumber1 = Math.floor(Math.random() * COURSES.length); 
    randomNumber2 = Math.floor(Math.random() * COURSES.length); 
    randomNumber3 = Math.floor(Math.random() * COURSES.length); 
  }

let Course1=COURSES[randomIndex1];
let Course2=COURSES[randomIndex2];
let Course3=COURSES[randomIndex3];

Coursescard1.children[0].src=Course1.path;
Coursescard1.children[1].children[0].innerHTML=Course1.title;
Coursescard1.children[1].children[1].innerHTML=Course1.price+'$';

Coursescard2.children[0].src=Course2.path;
Coursescard2.children[1].children[0].innerHTML=Course2.title;
Coursescard2.children[1].children[1].innerHTML=Course2.price+'$';

Coursescard3.children[0].src=Course3.path;
Coursescard3.children[1].children[0].innerHTML=Course3.title;
Coursescard3.children[1].children[1].innerHTML=Course3.price+'$';