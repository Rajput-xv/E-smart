// document.querySelector(".login button").addEventListener("click",function(){
//     document.querySelector("a").href="login.html";
// })

// document.querySelectorAll(".text-end button")[i].addEventListener("click",function(){
//     location.href="http://127.0.0.1:3000/project/E-smart/login.html";
//     window.location="http://127.0.0.1:3000/project/E-smart/login.html";

// });


const productphone =[{
    image:'Smartphones/1/OnePlus-Nord-CE-2-Lite-5G-Mobile-Phones.png',
    name:'OnePlus Nord CE 2 Lite 5G,128 GB,6 GB RAM,Blue Tide,Mobile Phone',
    price:16499,
    stars:4.5
},{
    image:'Smartphones/2/Tecno-Pop-7-Pro.jpeg',
    name:'Tecno Pop 7 Pro 64 GB, 2 GB, Black, Smartphone',
    price:5999,
    stars:4
},{
    image:'Smartphones/3/Samsung-S23Ultraa.jpeg',
    name:'Samsung Galaxy S23 Ultra 5G 256 GB, 12 GB RAM, Green, Mobile Phone',
    price:124999,
    stars:5
}];

let productHTML='';

productphone.forEach((phone)=>{
    let starsHTML = '';
    if (Array.isArray(phone.stars)) {
        starsHTML = phone.stars.map(() =>
            '<img src="./reshot-icon-complete-star-R8YXZ3FU7E-081ac.svg" height="25px" width="25px">'
        ).join('');
    }
    productHTML += `
        <div class="col Smartphones" id="Smartphone1" onclick = "window.location.href='productSmartphone.html'">
            <div class="card shadow-sm " >
                <img class="product-image" src="${phone.image}" height="250px" width="250px">
                <div class="card-body ">
                    <p class="card-text">${phone.name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>₹ ${phone.price}</h3>
                        <div class="star" >
                           ${starsHTML}  
                        </div>
                    </div>
                    <button class="btn btn-sm ">
                    <img src="./cart-add-buy-svgrepo-com.svg" height="35px" width="35px">
                    </button>
                </div>
            </div>
        </div>
    `;
});

const productlaptop =[{
    image:'Laptops/1/Dell.jpeg',
    name:'Dell Inspiron 15 3520 Laptop (12th Gen Intel Core i5-1235U/8 GB/512 GB SSD/Windows 11 Home/Integrated Graphics), 39.62 cm (15.6 Inch)',
    price:56143,
    stars:4.5
},{
    image:'Laptops/2/Apple.jpeg',
    name:'Apple MGN63HNA MacBook Air (Apple M1 Chip/8GB/256GB SSD/macOS Big Sur/Retina), 33.78 cm (13.3 inch)',
    price:84490,
    stars:4
},{
    image:'Laptops/3/Asus.jpeg',
    name:'Asus MB511WS VivoBook 16X Laptop (AMD Ryzen 5 5600H/16 GB/512 GB SSD/Radeon Vega 7 Graphics/Windows 11), 40.64 cm (16 inch)',
    price:49499,
    stars:5
}];
productlaptop.forEach((laptop)=>{
    let starsHTML = '';
    if (Array.isArray(laptop.stars)) {
        starsHTML = laptop.stars.map(() =>
            '<img src="./reshot-icon-complete-star-R8YXZ3FU7E-081ac.svg" height="25px" width="25px">'
        ).join('');
    }
    productHTML += `
        <div class="col Laptops" id="Laptop" onclick = "window.location.href='productLaptop.html'" >
            <div class="card shadow-sm">
                <img class="product-image" src="${laptop.image}" height="250px" width="250px">
                <div class="card-body">
                    <p class="card-text">${laptop.name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>₹ ${laptop.price}</h3>
                        <div class="star" >
                            ${starsHTML}  
                        </div>
                    </div>
                    <button class="btn btn-sm ">
                        <img src="./cart-add-buy-svgrepo-com.svg" height="35px" width="35px">
                    </button>
                </div>
            </div>
        </div>
    `;
});

const producttv =[{
    image:'Televisions/1/Sony.jpeg',
    name:'Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV with Dolby Audio & Alexa Compatibility KD-55X75K (Black)',
    price:62699,
    stars:4.5
},{
    image:'Televisions/2/LG.jpeg',
    name:'LG Nano80 124.46 cm (49 inch) Ultra HD (4K) LED Smart TV, 49NANO80',
    price:51990,
    stars:4
},{
    image:'Televisions/3/SONY.jpeg',
    name:'Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV with Dolby Audio & Alexa Compatibility KD-43X75K (Black)',
    price:46549,
    stars:5
}];
producttv.forEach((tv)=>{
    let starsHTML = '';
    if (Array.isArray(tv.stars)) {
        starsHTML = tv.stars.map(() =>
            '<img src="./reshot-icon-complete-star-R8YXZ3FU7E-081ac.svg" height="25px" width="25px">'
        ).join('');
    }
    productHTML += `
        <div class="col Televisions" id="Televisions" onclick = "window.location.href='productTelevision.html'">
            <div class="card shadow-sm">
                <img class="product-image" src="${tv.image}" height="250px" width="250px">
                <div class="card-body">
                    <p class="card-text">${tv.name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>₹ ${tv.price}</h3>
                        <div class="star" >
                        ${starsHTML} 
                        </div>
                    </div>
                    <button class="btn btn-sm ">
                    <img src="./cart-add-buy-svgrepo-com.svg" height="35px" width="35px">
                    </button>
                </div>
            </div>
        </div>
    `;
});

const productrf =[{
    image:'Refrigerator/1/LG.jpeg',
    name:'LG 190 litres 3 Star Direct Cool Single Door Refrigerator, Scarlet Euphoria, GL-B201ASED',
    price:17490,
    stars:4.5
},{
    image:'Refrigerator/2/Whirlpool.jpeg',
    name:'Whirlpool 265 L Frost Free Double Door Refrigerator(Arctic Steel, NeoFresh)',
    price:21990,
    stars:4
},{
    image:'Refrigerator/3/Godrej.jpeg',
    name:'Godrej Eon 265 litres Double Door Refrigerator, Steel Rush RT EON VALOR 280C 35 RCI',
    price:25490,
    stars:5
}];
productrf.forEach((rf)=>{
    let starsHTML = '';
    if (Array.isArray(rf.stars)) {
        starsHTML = rf.stars.map(() =>
            '<img src="./reshot-icon-complete-star-R8YXZ3FU7E-081ac.svg" height="25px" width="25px">'
        ).join('');
    }
    productHTML += `
        <div class="col Refrigerators" id="Refrigerator"  onclick = "window.location.href='productRefrigerator.html'">
            <div class="card shadow-sm " >
                <img class="product-image" src="${rf.image}" height="250px" width="250px">
                <div class="card-body ">
                    <p class="card-text">${rf.name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>₹ ${rf.price}</h3>
                        <div class="star" >
                            ${starsHTML}
                        </div>
                    </div>
                    <button class="btn btn-sm ">
                    <img src="./cart-add-buy-svgrepo-com.svg" height="35px" width="35px">
                    </button>
                </div>
            </div>
        </div>
    `;
});

const productcamera =[{
    image:'DSLR-Camera/1/Canon.jpeg',
    name:'Canon EOS 200D II DSLR Camera <br>with 18-55 mm Lens Kit',
    price:62999,
    stars:4.5
},{
    image:'DSLR-Camera/2/Nikon.jpeg',
    name:'Nikon D750 DSLR Camera with 24-120 mm Lens Kit',
    price:134999,
    stars:4
},{
    image:'DSLR-Camera/3/Nikon.jpeg',
    name:'Nikon D850 DSLR Camera with 24-120 mm Lens Kit',
    price:262990,
    stars:5
}];
productcamera.forEach((cam)=>{
    let starsHTML = '';
    if (Array.isArray(cam.stars)) {
        starsHTML = cam.stars.map(() =>
            '<img src="./reshot-icon-complete-star-R8YXZ3FU7E-081ac.svg" height="25px" width="25px">'
        ).join('');
    }
    productHTML += `
        <div class="col DSLR-Cameras" id="DSLR-Camera" onclick = "window.location.href='productDSLR-Camera.html'">
            <div class="card shadow-sm " >
                <img class="product-image" src="${cam.image}" height="250px" width="250px">
                <div class="card-body ">
                    <p class="card-text">${cam.name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>₹ ${cam.price}</h3>
                        <div class="star" >
                            ${starsHTML}
                        </div>
                    </div>
                    <button class="btn btn-sm ">
                        <img src="./cart-add-buy-svgrepo-com.svg" height="35px" width="35px">
                    </button>
                </div>
            </div>
        </div>
    `;
});

const productac =[{
    image:'Air-Conditioners/1/Haier.jpeg',
    name:'Haier 1 Ton 4 star 7 in 1 convertible inverter split AC,(Triple Inverter Plus, Frost Self Clean)',
    price:35490,
    stars:4.5
},{
    image:'Air-Conditioners/2/Lloyd.jpeg',
    name:'Lloyd 2 Ton 3 star 5 in 1 Convertible Inverter split AC(PM 2.5 Filter, 4 way swing,Turbo Cool)',
    price:50990,
    stars:4
},{
    image:'Air-Conditioners/3/Voltas.jpeg',
    name:'Voltas 2 Ton 4-in-1 Convertible Inverter split AC, 243V Vectra Elegant (Dual temperature display, Dual protection filter, self diagnosis)',
    price:51990,
    stars:5
}];
productac.forEach((ac)=>{
    let starsHTML = '';
    if (Array.isArray(ac.stars)) {
        starsHTML = ac.stars.map(() =>
            '<img src="./reshot-icon-complete-star-R8YXZ3FU7E-081ac.svg" height="25px" width="25px">'
        ).join('');
    }
    productHTML += `
        <div class="col Air-Conditioners" id="Air-Conditioner" onclick = "window.location.href='productAir-Conditioner.html'">
            <div class="card shadow-sm " >
                <img class="product-image" src="${ac.image}" height="250px" width="250px">
                <div class="card-body ">
                    <p class="card-text">${ac.name}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <h3>₹ ${ac.price}</h3>
                        <div class="star" >
                            ${starsHTML}
                        </div>
                    </div>
                    <button class="btn btn-sm ">
                    <img src="./cart-add-buy-svgrepo-com.svg" height="35px" width="35px">
                    </button>
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.js-product-grid').innerHTML=productHTML;



var btnTestimonial =document.querySelectorAll(".indicator .btn");
var slide =document.getElementById("slide");


btnTestimonial[0].onclick=function(){
    slide.style.transform =" translateX(0px)";
    for(i=0;i<4;i++){
        btnTestimonial[i].classList.remove("active");
    }
    this.classList.add("active");
}

btnTestimonial[1].onclick=function(){
    slide.style.transform =" translateX(-800px)";
    for(i=0;i<4;i++){
        btnTestimonial[i].classList.remove("active");
    }
    this.classList.add("active");
}

btnTestimonial[2].onclick=function(){
    slide.style.transform =" translateX(-1600px)";
    for(i=0;i<4;i++){
        btnTestimonial[i].classList.remove("active");
    }
    this.classList.add("active");
}

btnTestimonial[3].onclick=function(){
    slide.style.transform =" translateX(-2400px)";
    for(i=0;i<4;i++){
        btnTestimonial[i].classList.remove("active");
    }
    this.classList.add("active");
}




