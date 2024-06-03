var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var dice_switch1 = "images/dice" + randomNumber1 + ".png";

var dice_switch2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", dice_switch1);

document.querySelectorAll("img")[1].setAttribute("src", dice_switch2);

if (randomNumber1 > randomNumber2)
{
    document.getElementsByTagName("h2")[0].innerHTML = "Spieler Gewinnt";
}
else if (randomNumber1 < randomNumber2)
{
    document.getElementsByTagName("h2")[0].innerHTML = "Dealer Gewinnt";
}
else
{
    document.getElementsByTagName("h2")[0].innerHTML = "  Unentschieden";
}
