//Per far si che l'immagine mostrata nello slider cambi al click dell'utente bisognerà rimuovere il tag "visible" da un'immagine a aggiungerlo all'immagine successiva. Tutto questo dovrà rispondere al click sui tasti next e prev.

//Intercetto il click sul tasto next
$('.next').click(function() {
    //Recupero l'immagine e il rispettivo selettore con la classe visible
    var img_attuale = $('img.visible');
    var selettore_foto = $('i.visible');
    //Rimuovo la classe visible dall'immagine e dal selettore  corrente
    img_attuale.removeClass('visible');
    selettore_foto.removeClass('visible');
    //Recupero l'immagine e il selettore con il comando jquery next che mi permette di prendere il fratello immediatamente successivo dell'img e del selettore corrente
    var img_successiva = img_attuale.next('img');
    var selettore_successivo = selettore_foto.next('i');
    //Verifico se c'è un'immagine un selettore successivo e vado ad aggingere la classe visible
    if (img_successiva.length != 0) {
    img_successiva.addClass('visible');
    selettore_successivo.addClass('visible');
    } else {
    //Reimposto la classe visible alla prima immagine
    $('img:first-child').addClass('visible');
    //Reimposto la classe visible all'ultimo selettore
    $('i:first-child').addClass('visible');
    }

})

//Intercetto il click sul tasto next
$('.prev').click(function() {
    //Recupero l'immagine e il rispettivo selettore con la classe visible
    var img_attuale = $('img.visible');
    var selettore_foto = $('i.visible');
    //Rimuovo la classe visible dall'immagine e dal selettore corrente
    img_attuale.removeClass('visible');
    selettore_foto.removeClass('visible');
    //Recupero l'immagine precedente con il comando jquery prev che mi permette di prendere il fratello immediatamente precedente dell'img e del selettore corrente
    var img_precedente = img_attuale.prev('img');
    var selettore_successivo = selettore_foto.prev('i');
    //Verifico se c'è un'immagine e un selettore precedente e vado ad aggingere la classe visible
    if (img_precedente.length != 0) {
    img_precedente.addClass('visible');
    selettore_successivo.addClass('visible');
    } else {
    //Reimposto la classe visible all'ultima immagine
    $('img:last-child').addClass('visible');
    //Reimposto la classe visible all'ultimo selettore
    $('i:last-child').addClass('visible');
    }

})


//Bonus: cliccare un pallino e attivare la foto corrispondente, senza seguire l'ordine sequenziale.
//Intercetto il click sul primo selettore
$('.first-selector').click(function() {
    //Rimuovo la classe visible dalle immagini non visibili
    $('.second-img, .third-img, .last-img').removeClass('visible');
    //Imposto la classe visible sull'unica immagine visibile
    $('.first-img').addClass('visible');
    //Rimuovo la classe visible dai selettori non attivi
    $('.second-selector, .third-selector, .last-selector').removeClass('visible');
    //Imposto la classe visible sul slettore attivo
    $('.first-selector').addClass('visible');
})
//Intercetto il click sul secondo selettore
$('.second-selector').click(function() {
    $('.first-img, .third-img, .last-img').removeClass('visible');
    $('.second-img').addClass('visible');
    $('.first-selector, .third-selector, .last-selector').removeClass('visible');
    $('.second-selector').addClass('visible');
})
//Intercetto il click sul terzo selettore
$('.third-selector').click(function() {
    $('.first-img, .second-img, .last-img').removeClass('visible');
    $('.third-img').addClass('visible');
    $('.first-selector, .second-selector, .last-selector').removeClass('visible');
    $('.third-selector').addClass('visible');
})
//Intercetto il click sul quarto selettore
$('.last-selector').click(function() {
    $('.first-img, .second-img, .third-img').removeClass('visible');
    $('.last-img').addClass('visible');
    $('.first-selector, .second-selector, .third-selector').removeClass('visible');
    $('.last-selector').addClass('visible');
})
