function evling(params) {
    let evl = {};
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let result;
    let url = 'https://dmitriyshisterov.github.io/xsolla-frontend-school-2020/src/events.json';
    fetch(url, requestOptions)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            evl = data;
            render(evl);
        })
        .catch(function () {
            //error
        });
    /*render*/
    function render(x) {
        let eventsWrap = document.querySelector('#eventsWrap');
        if (eventsWrap.childElementCount != 0) {
            eventsWrap.innerHTML = '';
        }
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
    let filter = {
        city: undefined,
        month: undefined
    }
    let newEvl = [];
    let sortEvl = [];
    let selects = document.querySelectorAll('select');
    selects.forEach(function (select, i, selects) {
        select.addEventListener('change', function (event) {
            let value = select.value;
            let month;

            if (event.target.className === 'city') {
                filter.city = select.value;
            } else if (event.target.className === 'month') {
                filter.month = select.value;
            }

            if (filter.city && filter.month) {
                newEvl.forEach(function (nevt, i, newEvl) {
                    if (event.target.className === 'month') {
                        month = nevt.date.slice(3, 5)
                        if (month === value) {// здесь нужно проверять где был клик и фильтровать по нему
                            sortEvl.push(nevt)
                            console.log(nevt)
                        }
                    }
                    if (event.target.className === 'city') {
                        if (nevt.city === value) {
                            sortEvl.push(nevt)
                            console.log(nevt)
                        }
                    }
                })
            }
            evl.forEach(function (evt, i, evl) {
                if (event.target.className === 'month') {// привели дату к нормальному формату
                    month = evt.date.slice(3, 5)
                }
                if (evt.city === value || month === value) {
                    newEvl.push
                }
            })
            console.log(newEvl)
            // console.log(filter);
        })
    })
};
evling();


