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

    let url = 'https://github.com/DmitriyShisterov/xsolla-frontend-school-2020/raw/master/src/events.json';
    let data = {};
    fetch(url, {
        method: "POST",
        mode: 'no-cors',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    }).then(function (response) {
        response.status     //=> number 100–599
        response.statusText //=> String
        response.headers    //=> Headers
        response.url        //=> String
        console.log(response.json());
        return response.text()
    }, function (error) {
        error.message //=> String
    })
}
eventListing();


