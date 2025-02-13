function selectOption(option) {
    if (option === 'yes') {
        flashColors(function() {
            document.getElementById('question').style.display = 'none'; 
            displayDhanbi(); 
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        if (yesButton) { // Check if the yesButton element exists
            var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
            var newSize = parseFloat(currentFontSize) * 2; 
            yesButton.style.fontSize = newSize + 'px';
        }
    } else {
        alert('Invalid option!');
    }
}

function flashColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; 
        if (callback) {
            callback(); // Ensure the callback is invoked after color flashing
        }
    }, 2000); 
}

function showSlayyyy() {
    var slayText = document.createElement('div');
    slayText.innerText = "SLAYYYY";
    slayText.style.fontSize = "30px";  
    slayText.style.fontWeight = "bold";  
    slayText.style.color = "pink";  
    slayText.style.textAlign = "center";  
    slayText.style.marginTop = "20px";  
    document.body.appendChild(slayText);  
}

function displayHamster() {
    var imageContainer = document.getElementById('image-container');
    var hamsterImage = new Image();
    hamsterImage.src = 'hamster.gif'; // Ensure hamster.gif exists in the correct path
    hamsterImage.alt = 'hamster';
    hamsterImage.onload = function() {
        imageContainer.appendChild(hamsterImage);
    };
}

function displayDhanbi() {
    document.getElementById('image-container').innerHTML = ''; // Clear previous content
    var imageContainer = document.getElementById('image-container');
    var dhanbiImage = new Image();
    dhanbiImage.src = 'dhanbi.gif'; // Ensure dhanbi.gif exists in the correct path
    dhanbiImage.alt = 'dhanbi';
    dhanbiImage.onload = function() {
        imageContainer.appendChild(dhanbiImage);
        document.getElementById('options').style.display = 'none'; // Hide options
    };
}

displayHamster(); // Initially display hamster
