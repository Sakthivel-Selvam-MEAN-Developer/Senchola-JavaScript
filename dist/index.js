(async function () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments/?_limit=15';

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

        console.log(comments)

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


const validatePassword = () => {
    console.log('called')
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,14}$/;

    if(document.getElementById('password').value.match(pattern)){
        document.getElementById('password-error').innerHTML = 'Password Valid';
        document.getElementById('password-error').classList.add('text-success');
    } else if (document.getElementById('password').value == ''){
        document.getElementById('password-error').innerHTML = '';
    } else {
        document.getElementById('password-error').innerHTML = 'Enter Valid Password';
        document.getElementById('password-error').classList.remove('text-success');
    }
}

const validatePasswordMatch = () => {
    if(document.getElementById('password').value === document.getElementById('confirm-password').value){
        document.getElementById('confirm-password-error').innerHTML = 'Password Matched';
        document.getElementById('confirm-password-error').classList.add('text-success');
    } else if (document.getElementById('password').value == ''){
        document.getElementById('password-error').innerHTML = '';
    } else {
        document.getElementById('confirm-password-error').innerHTML = 'Password Not Match';
        document.getElementById('confirm-password-error').classList.remove('text-success');
    }
}

const onSubmit = () => {
    var form = document.forms['myForm'];

    
}