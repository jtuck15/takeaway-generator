
foods = ['Pizza', 'Chipper', 'Indian', 'Chinese', 'Thai', 'Italian', 'Mexican']

function pickFood() {
    var randomFood = Math.floor(Math.random() * (foods.length));
    setTimeout(function() {
        document.getElementById('chosenFood').innerHTML = foods[randomFood];
     }, 500);
}

// JQUERY
$(document).ready(function () {

    // FADING THE HEADING 
    $("#fade").delay(1000).animate({
        opacity: 1
    }, 2000);

});