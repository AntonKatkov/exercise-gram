

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < userInfo.length; i++) {
        let user = userInfo[i];
        let userID =  user['author']

        content.innerHTML += returnHTML(userID);
        ;
    }
}