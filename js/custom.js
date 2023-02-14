
// function edit(buttonId, styles){
//     buttonId.add Listener("click", function(){
//         const textArea = document.getElementById("textarea");
//         textArea.setAttribute("style" , styles)
//     })
// }
// const boldBtn = document.getElementById("bold");
// const italicBtn = document.getElementById("italic");
// const underlineBtn = document.getElementById("underline");
// edit(boldBtn , "font-weight: bold");
// edit(italicBtn , "font-style: italic");
// edit(underlineBtn , "text-decoration: underline");



let textArea = document.getElementById("textarea");

const boldBtn = document.getElementById("bold");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const textLeftBtn = document.getElementById("left");
const textCenterBtn = document.getElementById("center");
const textRightBtn = document.getElementById("right");
const texJustifyBtn = document.getElementById("justify");
const caseBtn = document.getElementById("case");
const fontsize = document.getElementById("number");
const textCase = document.getElementById("case");
const color = document.getElementById("color");

boldBtn.onclick = function() {
    if(textArea.style.fontWeight == "bold"){
        textArea.style.fontWeight = "normal" ;
        this.classList.remove("active");
    }else{
        textArea.style.fontWeight = "bold" ;
        this.classList.add("active");
    }
}
italicBtn.onclick = function() {
    if(textArea.style.fontStyle == "italic"){
        textArea.style.fontStyle = "normal" ;
        this.classList.remove("active");
    }else{
        textArea.style.fontStyle  = "italic" ;
        this.classList.add("active");
    }
}
underlineBtn.onclick = function() {
    if(textArea.style.textDecoration == "underline"){
        textArea.style.textDecoration = "none" ;
        this.classList.remove("active");

    }else{
        textArea.style.textDecoration = "underline" ;
        this.classList.add("active");
    }
}


textLeftBtn.onclick = function() {
    textArea.style.textAlign = "left" ;
}
textCenterBtn.onclick = function() {
    textArea.style.textAlign = "center" ;
}
textRightBtn.onclick = function() {
    textArea.style.textAlign = "right" ;
}
texJustifyBtn.onclick = function() {
    textArea.style.textAlign = "justify" ;
}


fontsize.onchange = function() {
    let fontsizeValue = this.value;
    textArea.style.fontSize = fontsizeValue + "px" ;
}
textCase.onclick = function() {
    if(textArea.style.textTransform == "uppercase"){
        textArea.style.textTransform = "lowercase" ;
        this.classList.add("active");
    }else if(textArea.style.textTransform == "lowercase"){
        textArea.style.textTransform = "none" ;
        this.classList.remove("active");
    }else{
        textArea.style.textTransform = "uppercase" ;
        this.classList.add("active");
    }
}
color.onchange = function() {
    let colorValue = this.value;
    textArea.style.color = colorValue ;
}