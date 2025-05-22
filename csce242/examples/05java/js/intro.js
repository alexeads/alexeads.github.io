/* when button clicked write to a paragraph */

/*
const writeParagraph = () => {
    console.log("Hello Everyone!");
};

document.getElementById("btn-write").onclick = writeParagraph; 
*/

/*
document.getElementById("btn-write").onclick = () => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    document.getElementById("btn-write").innerHTML ="Done";
};
*/

document.getElementById("btn-write").onclick = (event) => {
    document.getElementById("writep").innerHTML = "You clicked the button";

    event.target.innerHTML = "Done";
}

document.getElementById("btn-start").onclick = () => {
    document.getElementById("writes").innerHTML = "Starting";

    document.getElementById("btn-start").innerHTML = "Started"; 
}

document.getElementById("btn-end").onlick = () => {
    document.getElementById("writes").innerHTML = "Ending";
    
    document.getElementById("btn-end").innerHTML = "Ended";
}

document.getElementById("txt-name").onkeyup = (event) => {
    const userName = event.target.value;
    document.getElementById("welcomep").innerHTML = `Welcome ${userName}!`;

}

"Welcome " + userName + "!";