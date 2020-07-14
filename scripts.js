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
    fetch('https://github.com/DmitriyShisterov/xsolla-frontend-school-2020/blob/master/src/events.json', { mode: 'no-cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('Request successful', data);
        })
}
eventListing();


