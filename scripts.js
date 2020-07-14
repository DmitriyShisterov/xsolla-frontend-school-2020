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

    //let url = 'https://github.com/DmitriyShisterov/xsolla-frontend-school-2020/blob/master/src/events.json';
    fetch('https://github.com/DmitriyShisterov/xsolla-frontend-school-2020/blob/master/src/events.json', {
        mode: 'no-cors',
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        //body: JSON.stringify(data)
    })
        .then(function (response) {
            return response.text().then(function (text) {
                return text ? JSON.parse(text) : {}
            })
        }

            .then(function (data) {
                console.log('Request successful', data);
            })
}
eventListing();


