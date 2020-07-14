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
    let zz;
    //let url = 'https://github.com/xsolla/xsolla-frontend-school-2020.git';
    fetch('events.json')
        .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json();
        })
        .then(function (json) {
            console.log(json);
        })
        .catch(function (error) {
            alert('Error: ' + error.message);
        });


}
eventListing();


