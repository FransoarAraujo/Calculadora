function trocaTema(value){
    var thema$ = document.getElementsByTagName('link');

    thema$[0].href = value;
}



function dis(value){
    document.getElementById("screem").value += value;
}

function solve(){
    let x= document.getElementById("screem").value;
    let y= eval(x);
    document.getElementById("screem").value = y;
}

function clr(){
    document.getElementById("screem").value = ""
}

function del(){
    let screem = document.getElementById("screem").value;
    document.getElementById("screem").value = screem.substring(0, screem.length-1);
}