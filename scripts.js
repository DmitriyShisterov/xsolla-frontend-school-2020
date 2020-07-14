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

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://github.com/DmitriyShisterov/xsolla-frontend-school-2020/raw/master/src/events.json", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}
eventListing();


