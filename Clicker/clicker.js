var Clicker = function(selector, name){
    var numClicks = 0;
    
    var divLoc = document.querySelector(selector);
    console.log(divLoc);
    
    var image = divLoc.querySelector('.target-img');
    var count = divLoc.querySelector(".clicks");
    var heading = divLoc.querySelector(".name-header");
    
    heading.textContent = name;
    
    image.addEventListener('click', function(){
        numClicks += 1;
        count.textContent = numClicks.toString();
    }, false);
    
};

(function(){
    var c1 = new Clicker('#ClickDiv1', "Lucky 1");
    var c2 = new Clicker('#ClickDiv2', "Lucky 2");
})()