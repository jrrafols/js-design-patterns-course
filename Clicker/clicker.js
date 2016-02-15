(function() {
    var Clicker = function(options){
        var numClicks = 0;
        
        var container = document.createElement('div');
        
        var heading = document.createElement('h3');
        heading.textContent = options.name;
        
        var image = document.createElement('img');
        image.src = options.src;
        image.width = 300;
        image.alt = options.name;
        
        var clickCount = document.createElement('p');
        clickCount.innerHTML = "The image has been clicked <span class=\"clicks\">0</span> times."
        
        container.appendChild(heading);
        container.appendChild(image);
        container.appendChild(clickCount);
        
        var count = clickCount.querySelector('.clicks');
        
        image.addEventListener('click', function(){
            numClicks += 1;
            count.textContent = numClicks.toString();
        }, false);
        
        var clickerLink = document.querySelector('a[data-name=' + options.name + ']');
        var clickerContainer = document.querySelector('#ClickerContainer');
        clickerLink.addEventListener('click', function(){
            while (clickerContainer.firstChild) {
                clickerContainer.removeChild(clickerContainer.firstChild);
            }
            clickerContainer.appendChild(container);
        });
    };
    
    function populateList(data){
        var list = document.querySelector('body ul');
        
        data.forEach(function(item){
           var listItem = document.createElement('li');
           var linkName = document.createElement('a');
           linkName.href = "#";
           linkName.dataset.name = item.name;
           linkName.textContent = item.name;
           
           listItem.appendChild(linkName);
           list.appendChild(listItem); 
        });
    }
    
    var data = [
        {
            name: "Lucky1",
            src: "./img/lucky-1.jpg"
        },
        {
            name: "Lucky2",
            src: "./img/lucky-2.jpg"
        },
        {
            name: "Lucky3",
            src: "./img/lucky-3.jpg"
        },
        {
            name: "Jack",
            src: "./img/jack.jpg"
        },
        {
            name: "Lucky5",
            src: "./img/lucky-5.jpg"
        },
    ]
    
    populateList(data);
    data.forEach(function(item){
        new Clicker(item); 
    });
})()