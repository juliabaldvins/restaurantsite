const template = document.querySelector("#myTemp").content;
const main = document.querySelector("main");
const imgLink = "https://kea-alt-del.dk/t5/site/imgs/small/";
const productlistLink = "https://kea-alt-del.dk/t5/api/productlist";
const catLink = "https://kea-alt-del.dk/t5/api/categories";

const nav = document.querySelector("nav");
const allLink = document.querySelector("#all");

allLink.addEventListener("click", () => showCategory("all"));

const productLink = "https://kea-alt-del.dk/t5/api/product?id=";

const modal = document.querySelector(".modal-bg");

modal.addEventListener("click", () => modal.classList.add("hide"));



fetch(catLink).then(e => e.json()).then(createCatSections)


function createCatSections(categories) {
    console.log(categories);
    categories.forEach(cat => {
        const newSection = document.createElement("section");
        const newHeader = document.createElement("h1");

        const newA = document.createElement("a");
        newA.textContent = cat;
        newA.href = "#";
        newA.addEventListener("click", () => showCategory(cat));
        nav.appendChild(newA);

        newSection.id = cat;
        newHeader.textContent = cat;
        main.appendChild(newHeader);
        main.appendChild(newSection);

    })

    fetch(productlistLink).then(e => e.json()).then(data => data.forEach(showData));

}

function showCategory(category) {
    console.log(category)
    document.querySelectorAll("main section").forEach(section => {
        if (section.id == category || category == "all") {
            section.style.display = "grid";
            section.previousElementSibling.style.display = "block";
        } else {
            section.style.display = "none";
            section.previousElementSibling.style.display = "none";
        }
    })
}

function showData(product) {
    const section = document.querySelector("#" + product.category)
    let clone = template.cloneNode(true);

    clone.querySelector("h1").textContent = product.name;
    clone.querySelector('.price span').textContent = product.price +  " kr. ";
    clone.querySelector('.product-small-img').src = imgLink + product.image + "-sm.jpg";
    clone.querySelector("h4").textContent = product.shortdescription;
    clone.querySelector("button").addEventListener("click", () => {
        fetch(productLink + product.id).then(e => e.json()).then(data => showModal(data));
    });

    if(product.vegetarian == false){

        clone.querySelector(".vegetarian").remove()
    }


    if(product.soldout){
        const article = clone.querySelector("article");
        article.classList.add("soldout");
        const message = document.createElement("p");
        message.textContent="Sold Out";
        message.classList.add("overlay");
        article.appendChild(message);
    }

    section.appendChild(clone)

}



function showModal(data) {
    modal.classList.remove("hide");
    modal.querySelector(".modal-name").textContent = data.name;
    modal.querySelector(".modal-image").src = imgLink + data.image + "-sm.jpg";
    modal.querySelector(".modal-description").textContent = data.longdescription;
    modal.querySelector(".alcohol").textContent = " Alcohol: " + data.alcohol + " % ";
    let price = modal.querySelector(".modal-price");

    if (data.discount){
        modal.querySelector("div article h4").textContent = data.price - Math.round((data.price * data.discount / 100)) + " kr. " + " - " + data.discount + "%" + " off.";
    }

    else {
        modal.querySelector("div article h4").textContent = data.price + " kr. ";
    };

    if (data.alcohol == "0"){
        modal.querySelector(".alcohol").remove()
    }

    else {
        modal.querySelector(".alcohol").textContent = " Alcohol: " + data.alcohol + " % ";
    };

}


function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
