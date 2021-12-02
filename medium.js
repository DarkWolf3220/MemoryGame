var cards_list = ["audi.png", "bmw.png", "bugatti.png", "chevrolet.png", "doge.png", "ferrari.png", "ford.png", "lamborghini.png", "mercedes.png", "porshe.png", "audi.png", "bmw.png", "bugatti.png", "chevrolet.png", "doge.png", "ferrari.png", "ford.png", "lamborghini.png", "mercedes.png", "porshe.png", "audi.png", "bmw.png", "bugatti.png", "chevrolet.png", "doge.png", "ferrari.png", "ford.png", "lamborghini.png", "mercedes.png", "porshe.png"];
var cards = new Array();
 
for(var i = 20;i>0;i--)
{
    var rand_id = Math.floor(Math.random() *i);
    cards.push(cards_list[rand_id]);
    cards_list.splice(rand_id,1);
}

var m0 = document.getElementById("m0");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var m3 = document.getElementById("m3");
var m4 = document.getElementById("m4");

var m5 = document.getElementById("m5");
var m6 = document.getElementById("m6");
var m7 = document.getElementById("m7");
var m8 = document.getElementById("m8");
var m9 = document.getElementById("m9");

var m10 = document.getElementById("m10");
var m11 = document.getElementById("m11");
var m12 = document.getElementById("m12");
var m13 = document.getElementById("m13");
var m14 = document.getElementById("m14");

var m15 = document.getElementById("m15");
var m16 = document.getElementById("m16");
var m17 = document.getElementById("m17");
var m18 = document.getElementById("m18");
var m19 = document.getElementById("m19");

m0.addEventListener("click", function() { revealCard(0); });
m1.addEventListener("click", function() { revealCard(1); });
m2.addEventListener("click", function() { revealCard(2); });
m3.addEventListener("click", function() { revealCard(3); });
m4.addEventListener("click", function() { revealCard(4); });

m5.addEventListener("click", function() { revealCard(5); });
m6.addEventListener("click", function() { revealCard(6); });
m7.addEventListener("click", function() { revealCard(7); });
m8.addEventListener("click", function() { revealCard(8); });
m9.addEventListener("click", function() { revealCard(9); });

m10.addEventListener("click", function() { revealCard(10); });
m11.addEventListener("click", function() { revealCard(11); });
m12.addEventListener("click", function() { revealCard(12); });
m13.addEventListener("click", function() { revealCard(13); });
m14.addEventListener("click", function() { revealCard(14); });

m15.addEventListener("click", function() { revealCard(15); });
m16.addEventListener("click", function() { revealCard(16); });
m17.addEventListener("click", function() { revealCard(17); });
m18.addEventListener("click", function() { revealCard(18); });
m19.addEventListener("click", function() { revealCard(19); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var lock = false;
var pairsLeft = 10;

function revealCard(nr) {

    var opacityValue = $('#m'+nr).css('opacity');

    if ( opacityValue != 0 && lock == false) {

        lock = true;
        var photo = "url(img/" + cards[nr] + ")";

        $('#m' + nr).css('background-image', photo);
        $('#m' + nr).addClass('card-active');
        $('#m' + nr).removeClass('card');

        if(oneVisible == false) {

            oneVisible = true;
            visible_nr = nr;
            lock = false;

        }else{

            if(cards[visible_nr] == cards[nr]){

                setTimeout(function() { hide2cards(nr, visible_nr) }, 750)
        
            }else{

                setTimeout(function() { restore2cards(nr, visible_nr) }, 1000)

            }

            turnCounter++;
            $('.score').html('Turn counter:' +turnCounter);
            oneVisible = false;
        }
    }
}

function hide2cards(nr1, nr2){
    $('#m'+ nr1).css('opacity', '0');
    $('#m'+ nr2).css('opacity', '0');
    pairsLeft--;

    if(pairsLeft == 0){
        $('.board').html('<h1>You win!<br>Done in '+turnCounter+' turns. <span class="reload" onclick="location.reload()">Click to reload.</span></h1>');
    }

    lock = false;
}

function restore2cards(nr1, nr2){
    $('#m' + nr1).css('background-image', 'url(img/karta.jpg)');
    $('#m' + nr1).addClass('card');
    $('#m' + nr1).removeClass('card-active');

    $('#m' + nr2).css('background-image', 'url(img/karta.jpg)');
    $('#m' + nr2).addClass('card');
    $('#m' + nr2).removeClass('card-active');
    lock = false;
}