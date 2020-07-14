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

    let url = 'https://github.com/DmitriyShisterov/xsolla-frontend-school-2020/blob/master/src/events.json';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data) // Prints result from `response.json()` in getRequest
        })
        .catch(error => console.error(error))


}
eventListing();


