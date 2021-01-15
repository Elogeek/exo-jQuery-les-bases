$('#text').text("Hello world !!");

$("a").attr({
    "href": "https://www.youtube.com/?gl=BE&hl=fr",
    "title": "lien musique"
}).text("lien");

$("#container").width("400px").height("400px");
$("#container div:nth-child(3)").text('un petit texte');
alert("Le premier index d'un tableau commence tjs par: "+ $('#container div:first').index());



