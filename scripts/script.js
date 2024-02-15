

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';

    for (let i = 0; i < userInfo.length; i++) {
        let user = userInfo[i];
        let userName =  user['author']
        let userAvatar = user['avatar']

        content.innerHTML += returnHTML(user,i ,userName, userAvatar);
        ;
    }
}