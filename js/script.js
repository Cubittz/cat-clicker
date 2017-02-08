$(function(){
    var model = {
        currentCat: null,
        init: function() {
            this.cats = [
                {name: "Poppy", clickCount: 0, url: "img/cat.jpg"},
                {name: "Sophie", clickCount: 0, url: "img/cat2.jpg"}
            ];
        },
        getAllCats: function() {
            return this.cats;
        }
    }

    var octopus = {
        getCats: function() {
            return model.getAllCats();
        },
        getCurrentCat: function() {
            return model.currentCat;
        },
        setCurrentCat: function(cat) {
            model.currentCat = cat;
        },
        incrementCounter: function() {
            model.currentCat.clickCount++;
            catView.render();
        },
        init: function() {
            model.init();
            model.currentCat = model.getAllCats()[0];
            listView.init();
            catView.init();
        }
    };

    var catView = {
        init: function() {
            this.catDiv = document.getElementById('cat-image');
            this.catName = document.getElementById('cat-name');
            this.catCount = document.getElementById('cat-count');

            this.catDiv.addEventListener('click', function(e) {
                octopus.incrementCounter();
            });
            this.render();
        },
        render: function() {
            var htmlStr = '';
            var cat = octopus.getCurrentCat();
            var url = 'url("' + cat.url + '")'
            this.catDiv.style.backgroundImage = url;
            this.catName.innerHTML = cat.name;
            this.catCount.innerHTML = cat.clickCount;
        }
    };

    var listView = {
        init: function() {
            this.catList = document.getElementById('cat-list');
            this.render();
        },
        render: function() {
            var cats = octopus.getCats();
            for (var i = 0; i < cats.length; i++) {
                var cat = cats[i];
                var elem = document.createElement('li');
                elem.textContent = cat.name;

                elem.addEventListener('click', (function(cat) {
                    return function() {
                        octopus.setCurrentCat(cat);
                        catView.render();
                    };
                })(cat));
                this.catList.appendChild(elem);
            };

        }
    };

    octopus.init();
});
