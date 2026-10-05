/* 
  Coursera / University of Michigan Assignment
  Functions: upDate() and undo()
*/

function upDate(previewPic) {
    // 1. Console logs for checking event and variables
    console.log("Event triggered: Mouseover / Focus");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    // 2. Change the text of the element with id='image'
    document.getElementById('image').innerHTML = previewPic.alt;

    // 3. Change the background image of the element with id='image'
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // 1. Reset background image back to empty
    document.getElementById('image').style.backgroundImage = "url('')";

    // 2. Reset text back to original text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}