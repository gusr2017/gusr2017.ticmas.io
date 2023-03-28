document.getElementById("experiencia1").style.display = "none";
document.getElementById("habilidades1").style.display = "none";

document.getElementById("personal").addEventListener("click", function(){
    document.getElementById("personal1").style.display = "block";
    document.getElementById("experiencia1").style.display = "none";
    document.getElementById("habilidades1").style.display = "none";
})

document.getElementById("experiencia").addEventListener("click", function(){
    document.getElementById("experiencia1").style.display = "block";
    document.getElementById("personal1").style.display = "none";
    document.getElementById("habilidades1").style.display = "none";
})

document.getElementById("habilidades").addEventListener("click", function(){
    document.getElementById("habilidades1").style.display = "block";
    document.getElementById("experiencia1").style.display = "none";
    document.getElementById("personal1").style.display = "none";
})