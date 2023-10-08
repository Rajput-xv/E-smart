// document.querySelector(".login button").addEventListener("click",function(){
//     document.querySelector("a").href="login.html";
// })

// document.querySelectorAll(".text-end button")[i].addEventListener("click",function(){
//     location.href="http://127.0.0.1:3000/project/E-smart/login.html";
//     window.location="http://127.0.0.1:3000/project/E-smart/login.html";

// });


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




