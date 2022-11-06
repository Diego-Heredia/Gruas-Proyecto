let suggestions = [
    "Arrastre",
    "Transportación",
    "Maniobra",
    "Vehiculo",
    "Gruas",
    "Plataforma",
    "Grúas",
    "Transporte",
    "Salvamiento",
    "Maniobras",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];
const suggBox = document.querySelector(".autocom-box");
let webLink;
const sear = $("#search");

// document.getElementById("search").addEventListener("click", myFunction);

//        function myFunction() {
//          window.location.href="services.html";
//        }

const b = $("#bb");
b.click(function (e) { 
    let u = sear.target.value;
    console.log(u);
    e.preventDefault();
    
});
function lo(){
    var inm = document.getElementById("search").value;
    let ui =0;
    for (let i = 0; i < suggestions.length; i++) {
        const element = suggestions[i];
        if (element == inm) {

            window.location.href = "services.html";
            ui++;
            break;
        }
        // else{
        //     window.location.href = "contact.html";
        //     break;
        // }
    }
    if(ui == 0){
        window.location.href = "not-found.html";
    }
}

var en = document.getElementById("search");
en.addEventListener("enter",()=>{
    window.location.href = "services.html";
})

