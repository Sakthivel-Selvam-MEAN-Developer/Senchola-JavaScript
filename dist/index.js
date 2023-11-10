(async function () {
    const apiUrl = 'http://jsonplaceholder.typicode.com/comments/?_limit=15';

    var comments = await fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });


    await comments.forEach(cmt => {
        let card = document.createElement('div');
        card.classList.add('card', 'mt-2', 'mb-2');

        card.innerHTML =
                        `<div class="card-body">
                            <h5 class="card-title bg-warning text-dark p-2 rounded text-center">${cmt.name}</h5>
                            <p class="card-text">${cmt.body}</p>
                        </div>
                        <div class="card-body d-flex justify-content-start align-items-end">
                            <a href="mailto:${cmt.email}" class="btn btn-outline-primary"> Mail me </a>
                        </div>`;
        document.getElementById('comments-container').appendChild(card);
    });
})()


