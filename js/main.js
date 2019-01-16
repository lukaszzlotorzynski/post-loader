$(document).ready(function () {
    let counterTemp = 1;
    let numberOfPosts = $('.single-post').length;

    function loadData(counter) {
        //za pomocą metody getJSON, pobierz dane z pierwszego postu z api: https://jsonplaceholder.typicode.com/photos/

        $.getJSON('https://jsonplaceholder.typicode.com/photos/' + counter, function (data) {
            console.log(data);

            //stwórz znacznik figure z klasą single-post.  Stworz znacznik img, dodaj atrybut src (metoda .attr jQuery) z url do obrazka (http://placehold.it/600/92c952"). Stwórz znacznik figcaption i dodaj do niego id (id: 1 wyciągnięte z api) i tytul wyciagnety z api.Nastepnie img i ficaption wloz do srodka ffigure i umiesc je na stronie (do div #main)
            let figureHolder = document.createElement('figure');
            $(figureHolder).addClass('single-post');

            //znacznik img
            let imgHolder = document.createElement('img');
            $(imgHolder).attr('src', data.url);

            //znacznik figcaption           
            let figHolder = document.createElement('figcaption');
            $(figHolder).text(data.id + ' ' + data.title);

            //dodaje figHolder i imgHolder do figureHolder
            $(figureHolder).append(imgHolder);
            $(figureHolder).append(figHolder);
            $('#main').append(figureHolder);

            counterTemp = counter;

            if (counterTemp < numberOfPosts + 10) {
                loadData(++counter);
            }

        })
    }

    $('#btn').click(function () {
        //        console.log(licznik_temp);
        counterTemp++;
        numberOfPosts = $('.single-post').length;
        loadData(counterTemp);

        //        if (ilosc_postow < 10) {
        //            loadData(++ilosc_postow);
        //        }
    })

    loadData(1); //wywołanie
    //stwórz znacznik figure z klasą single-post.  Stworz znacznik img, dodaj atrybut src (metoda .attr jQuery) z url do obrazka (http://placehold.it/600/92c952"). Stwórz znacznik figcaption i dodaj do niego id (id: 1 wyciągnięte z api) i tytul wyciagnety z api.Nastepnie img i ficaption wloz do srodka ffigure i umiesc je na stronie (do div #main)




    $("img").attr("http://placehold.it/600/92c952", "second.jpg");


})