function eventListing(params) {
    let bookmark = document.querySelectorAll('.bookmark');
    bookmark.forEach(function (item, i, bookmark) {
        item.addEventListener('click', function () {
            if (!item.classList.contains('checked')) {
                item.classList.toggle('checked')
            } else {
                item.classList.toggle('checked', false);
            }
        })
    });

    let eventList = {};
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let url = 'https://dmitriyshisterov.github.io/xsolla-frontend-school-2020/src/events.json';
    fetch(url, requestOptions)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            eventList = data;
            render(eventList);
            console.log(eventList);
        })
        .catch(function () {
            //error
        });
    let el = document.querySelectorAll('select');
    el.forEach(function (item, i) {
        item.addEventListener('change', function (e) {
            if (item.classList.contains('city')) {
                let cityList = [];
                let city = item.value;
                console.log(item.value);
                eventList.forEach(function (el, j) {
                    if (el.city === city) {
                        console.log(el.city)
                    }
                })
                console.log(cityList);
            }
            if (item.classList.contains('month')) {
                console.log('month');
            }
        })
    })
    /*render*/
    function render(x) {
        let eventsWrap = document.querySelector('#eventsWrap');
        for (let i = 0; i < x.length; i++) {
            let name = x[i].name;
            //let city = x[i].city;
            let date = x[i].date;
            let img = x[i].image;

            let event = document.createElement('div'); // создаем событие
            event.className = 'event';
            event.style.background = `url${img}`;
            console.log(event.style.background = `url(${img})`)

            let dateBookmark = document.createElement('div');// создаем date&bookmark
            dateBookmark.className = 'dateBookmark';

            let dates = document.createElement('div');// создаем  date
            dates.className = 'date';
            dates.innerText = date;

            let bookmark = document.createElement('div');// создаем bookmark
            bookmark.className = 'bookmark';


            let eventTitle = document.createElement('div');// создаем eventTitle
            eventTitle.className = 'eventTitle';
            eventTitle.innerText = name;

            dateBookmark.append(dates, bookmark);// добавляем к date&bookmark(date,bookmark)

            event.append(dateBookmark, eventTitle);// добавляем к event(datebookmark, eventTitle)*/
            eventsWrap.append(event);

        }


    }

}
eventListing();


