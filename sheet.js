//Per far si che l'immagine mostrata nello slider cambi al click dell'utente bisognerà rimuovere il tag "visible" da un'immagine a aggiungerlo all'immagine successiva. Tutto questo dovrà rispondere al click sui tasti next e prev.

//Intercetto il click sul tasto next e Recupero l'immagina con la classe visible
$('.next').click(function() {
    var img_attuale = $('img.visible');
    console.log(img_attuale);
    //Rimuovo la classe visible dall'immagine corrente e l'aggiungo alla successiva
    img_attuale.removeClass('visible');
    //Recupero l'immagine successiva con il comando jquery next che mi permette di prendere il fratello immediatamente successivo dell'img img_attuale
    var img_successiva = img_attuale.next('img');
    console.log(img_successiva);
    //Verifico se c'è un'immagine successiva e vado ad aggingerle la classe
    if (img_successiva.length != 0) {
    img_successiva.addClass('visible');
} else {
    //Reimposto la classe visible alla prima immagine
    $('img:first-child').addClass('visible');
}

})

$('.prev').click(function() {
    var img_attuale = $('img.visible');
    console.log(img_attuale);
    //Rimuovo la classe visible dall'immagine corrente e l'aggiungo alla successiva
    img_attuale.removeClass('visible');
    //Recupero l'immagine successiva con il comando jquery next che mi permette di prendere il fratello immediatamente successivo dell'img img_attuale
    var img_precedente = img_attuale.prev('img');
    console.log(img_precedente);
    //Verifico se c'è un'immagine successiva e vado ad aggingerle la classe
    if (img_precedente.length != 0) {
    img_precedente.addClass('visible');
} else {
    //Reimposto la classe visible alla prima immagine
    $('img:last-child').addClass('visible');
}

})
