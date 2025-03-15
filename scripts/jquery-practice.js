console.log("Welcome to jquery");

let htmlElement = document.getElementById("results");
htmlElement = $("results");
console.log(htmlElement);

let htmlElement2= document.getElementsByClassName("tomato-bg");
htmlElement2 = $(".tamato-bg");
console.log(htmlElement2);


let htmlElement3 = document.getElementsByTagName("p");
htmlElement3=$("p");
console.log(htmlElement3);


let redParagraph = $("#red").css("background-color","red").css("color","white");

let blueParagraph = $("#blue").css("background-color","blue").css("color","white");


let paragraphWithborder=$(".width-border");
paragraphWithborder.css("border","3px soild black");

paragraphWithborder.on("click",function(){
    console.log("clicked");
    $(this).addClass("bg-gray");
});

function register(){
    let testEntry=$("#testInput").val();
    $("#results").append(`<li>${testEntry}</li>`);
}

$("#btnRegister").on("click", register);

function clickme(){
    console.log("click me");
    $("p:first").hide();
}