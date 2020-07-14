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
    fetch('https://github.com/DmitriyShisterov/xsolla-frontend-school-2020/blob/master/src/events.json', { mode: 'cors' })
        .then(function (response) {
            return response.text();
        })
        .then(function (text) {
            console.log('Request successful', text);
        })
        .catch(function (error) {
            log('Request failed', error)
        });

}
eventListing();


