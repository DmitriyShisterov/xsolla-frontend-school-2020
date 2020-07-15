function eventListing(params) {
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
        })
        .catch(function () {
            //error
        });
    /*render*/
    function render(x) {
        let eventsWrap = document.querySelector('#eventsWrap');
        for (let i = 0; i < x.length; i++) {
            let name = x[i].name;
            let fullDate = x[i].date;
            let img = x[i].image;

            let event = document.createElement('div'); // создаем событие
            event.className = 'event';
            event.style.backgroundImage = `url(${img})`;
            console.log()

            let dateBookmark = document.createElement('div');// создаем date&bookmark
            dateBookmark.className = 'dateBookmark';

            let dates = document.createElement('div');// создаем  date
            dates.className = 'date';
            date = fullDate.slice(0, 2);
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
    eventsWrap.onclick = function (event) {
        let bk = event.target.closest('.bookmark'); // (1)
        if (!bk) return; // (2)
        if (!eventsWrap.contains(bk)) return; // (3)
        if (!bk.classList.contains('checked')) {
            bk.classList.toggle('checked', true)
        } else {
            bk.classList.toggle('checked', false);
        }
    };
    let selects = document.querySelectorAll('select');
    selects.forEach(function (item, i, selects) {
        item.addEventListener('change', function (event) {
            if (item.className === 'city') {
                let city = item.value;
                let eventsInCity = []
                eventList.forEach(function (item, i, eventList) {
                    if (item.city === city) {
                        eventsInCity.push(item);
                    }
                });
                console.log(eventsInCity);
            }
            if (item.className === 'month') {
                let month = item.value;
                let monthEvents = []
                eventList.forEach(function (item, i, eventList) {
                    let numberMonth = item.date.slice(3, 5);
                    if (numberMonth === month) {
                        monthEvents.push(item);
                    }
                });
                console.log(monthEvents);
            }
        })
    })

}
eventListing();


