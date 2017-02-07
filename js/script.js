var cats = {
    CAT_1: "Poppy",
    CAT_2: "Sophie"
};

var cat1 = document.getElementById("cat1");
var cat2 = document.getElementById("cat2");

cat1.innerHTML = cats.CAT_1;
cat2.innerHTML = cats.CAT_2;

function addOne(element) {
    var counter = document.getElementById(element);
    var i = parseInt(counter.innerHTML);
    if (isNaN(i)) {
        i = 0;
    }
    counter.innerHTML = (i + 1);
};