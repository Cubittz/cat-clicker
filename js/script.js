$(function(){
    var model = {
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

        init: function() {
            model.init();
            view.init();
        }
    }

    var view = {
        init: function() {
            this.catList = $('#cat-list');
            view.render();
        },
        render: function() {
            var htmlStr = '';
            var cats = octopus.getCats();
            for (var i = 0; i < cats.length; i++) {
                var cat = cats[i];
                htmlStr += '<li>' + cat.name + '</li>';
            };
            this.catList.html(htmlStr);
        }
    };

    octopus.init();
});
