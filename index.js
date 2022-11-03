function auth(){
    var menu = document.getElementById("menu")
    var nav = document.getElementById("nav")
    menu.classList.toggle("onmenu")
    nav.classList.toggle("onnav")
}
function fly(){
    var lu = document.getElementById("lu")
    var an = document.getElementById("an")
    lu.classList.toggle("onlang")
    an.classList.toggle("onan")
}
//const btnfin = document.querySelector("#btnfin");
//btnfin.addEventListener("click" , function(){
   // window.scrollTo(0,0);

  // window.scrollTo({
    //top:0,
    //left:0,
   // behavior:"smooth"

//   });
//});
function jij(){
    let btnfin = document.getElementById("btnfin")
   window.scrollTo({
     top:0,
     left:0,
     behavior:"smooth",
   })
  
}
function down(){
    let flash = document.getElementById("flash")
    window.scrollTo({
        top:700,
        left:0,
        behavior:"smooth",
      })
    if (flash > 100){
        scrollProgress.style.display="grid"
    }
    else{
        scrollProgress.style.display="none"
    }

}