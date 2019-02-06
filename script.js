const template = document.querySelector("#myTemp").content;
const starter = document.getElementById("starter");
const mainCourse = document.getElementById("mainCourse");
const dessert = document.getElementById("dessert");
const drinks = document.getElementById("drinks");


for(let i = 0; i<6; i++){


let clone = template.cloneNode(true);
clone.querySelector("h1").textContent="Russian Ringbread";
clone.querySelector("h2").textContent="29,-kr.";
clone.querySelector("img").src="imgs/small/ringbroed-druer-sm.jpg";
clone.querySelector("h4").textContent="Russisk ringbrød af Karapatisk mel";
clone.querySelector("p").textContent="Russisk ringbrød efter en klassisk opskrift fra Karapatien. Dejen blandes koldhæver 30 dage, inde brødet bages over bål. Meget sprødt, godt med Karapatisk bjerggedsmør.";
clone.querySelector("button").textContent="Details";


starter.appendChild(clone);


};

for(let i = 0; i<7; i++){


let clone = template.cloneNode(true);
clone.querySelector("h1").textContent="Bulgarian farmers soup";
clone.querySelector("h2").textContent="99,-kr.";
clone.querySelector("img").src="imgs/small/bulgarskbondesuppe-sm.jpg";
clone.querySelector("h4").textContent="Cauceskus bulgarske bondesuppe";
clone.querySelector("p").textContent="Da Caucesku var i færd med at skrive sit navn med højhuse, var han nødt til at give håndværkerne solid kost, så de kunne arbejde 18 timer i døgnet, 7 dage om ugen: Bulgarsk bondesuppe. Suppen består af alt det bedste fra Bulgarien.";
clone.querySelector("button").textContent="Details";


mainCourse.appendChild(clone);


};

for(let i = 0; i<6; i++){


let clone = template.cloneNode(true);
clone.querySelector("h1").textContent="Pavlova with melon";
clone.querySelector("h2").textContent="49,-kr.";
clone.querySelector("img").src="imgs/small/pavlova-sm.jpg";
clone.querySelector("h4").textContent="Pavlova - russiske pandekager - i honningmelon fra Nordkorea";
clone.querySelector("p").textContent="SOLD OUT";
clone.querySelector("button").textContent="Details";


dessert.appendChild(clone);


};

for(let i = 0; i<5; i++){


let clone = template.cloneNode(true);
clone.querySelector("h1").textContent="Red wine, glas";
clone.querySelector("h2").textContent="49,-kr.";
clone.querySelector("img").src="imgs/small/roedvin-sm.jpg";
clone.querySelector("h4").textContent="Et glas god Rødvin fra det tidligere USSR";
clone.querySelector("p").textContent="Huset Petrograd's rødvin er produceret før 1990, og lagret i de dybe saltminer (normalt forbeholdt defekte atomvåben) i Yekaterinburg. Det giver vinen en særdeles karakteristisk glød, der viser sig ved svag stearinlys-belysning.";
clone.querySelector("button").textContent="Details";


drinks.appendChild(clone);

};




