var cats = [
    {name: "Poppy", url: "img/cat.jpg"},
    {name: "Sophie", url: "img/cat2.jpg"}
    ];

var catsHTML = document.getElementById("cats");
catsHTML.innerHTML = '';

for (var i = 0; i < cats.length; i++) {
    var cat = cats[i];
    catUrl = 'url(' + cat.url + ')';
    catName = cat.name;

    var elem = document.createElement('div');
    elem.className ='cat';
    elem.style.backgroundImage = catUrl;

    var name = document.createElement('div');
    name.innerHTML = catName;

    catsHTML.appendChild(elem);
    elem.innerHTML = name;
}


function addOne(element) {
    var counter = document.getElementById(element);
    var i = parseInt(counter.innerHTML);
    if (isNaN(i)) {
        i = 0;
    }
    counter.innerHTML = (i + 1);
};