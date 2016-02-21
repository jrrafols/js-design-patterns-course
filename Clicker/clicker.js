(function() {
    var data = [
        {
            name: "Lucky1",
            src: "./img/lucky-1.jpg",
            clicks: 0
        },
        {
            name: "Lucky2",
            src: "./img/lucky-2.jpg",
            clicks: 0
        },
        {
            name: "Lucky3",
            src: "./img/lucky-3.jpg",
            clicks: 0
        },
        {
            name: "Jack",
            src: "./img/jack.jpg",
            clicks: 0
        },
        {
            name: "Lucky5",
            src: "./img/lucky-5.jpg",
            clicks: 0
        }
    ];
        
    var ClickerList = function(models){
        var list = document.querySelector('body ul');
        var data = models;
        return {
            render: function(){
                data.forEach(function(model){
                    var listItem = document.createElement('li');
                    var linkName = document.createElement('a');
                    linkName.href = "#";
                    linkName.dataset.name = model.name;
                    linkName.textContent = model.name;
                    
                    listItem.appendChild(linkName);
                    list.appendChild(listItem); 
                });
            }
        }
    }
    
    var ClickerDisplay = function(data){
         var model = data;
         var displayLoc = document.querySelector('#ClickerContainer');
         
         return {
             render: function(){
                var container = document.createElement('div');
                
                var heading = document.createElement('h3');
                heading.textContent = model.name;
                
                var image = document.createElement('img');
                image.src = model.src;
                image.width = 300;
                image.alt = model.name;
                
                var clickCount = document.createElement('p');
                clickCount.innerHTML = "The image has been clicked <span class=\"clicks\">" + model.clicks + "</span> times."
                
                container.appendChild(heading);
                container.appendChild(image);
                container.appendChild(clickCount);
                
                displayLoc.innerHTML = '';
                displayLoc.appendChild(container);
             }
         } 
    };
    
    var ClickerController = function(data){
        var currentModel = null;
        
        var listInstance = ClickerList(data);
        listInstance.render();
        
        var initializeListEventHandler = function(){
            var listLink = document.querySelectorAll('ul>li>a');
            var linkArray = Array.prototype.slice.call(listLink);
            linkArray.forEach(function(item) {
                item.addEventListener('click', function(e){
                    var name = e.target.dataset.name;
                    
                    var model = data.filter(function(item){
                        return item.name === name;  
                    });
                    
                    if (model.length > 0) {
                        currentModel = model[0];
                        ClickerDisplay(currentModel).render();
                        initializeClickerEventHandler(currentModel);
                    }
                });
            });
        }
        
        var initializeClickerEventHandler = function(model){
            var image = document.querySelector('#ClickerContainer img');
            
            image.addEventListener('click', function(){
                console.log(model);
                model.clicks += 1;
                ClickerDisplay(model).render();
                initializeClickerEventHandler(model);
            });
        };
        
        return {
            initializeListEventHandler: initializeListEventHandler,
            //initializeClickerEventHandler: initializeClickerEventHandler
        };
    };
    
    var app = ClickerController(data);
    app.initializeListEventHandler();
})()