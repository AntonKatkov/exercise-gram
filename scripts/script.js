function newInfoRender() {
    let content = document.getElementById('infoContent');
    content.innerHTML = '';

    for (let i = 0; i < userInfo.length; i++) {
        let user = userInfo[i];
        let userName =  user['author']
        let userAvatar = user['avatar']
        content.innerHTML += returnHTML(user,i ,userName, userAvatar);
        ;
    }
}

function newPostRender() {
    let postContent = document.getElementById('postContent');
    postContent.innerHTML = '';



    for (let i = 0; i < userInfo.length; i++) {
        let user = userInfo[i];
        let userName =  user['author']
        let userAvatar = user['avatar']
        postContent.innerHTML += newPostHTML(user,i ,userName, userAvatar);
        ;
    }
}

function Start(){
    newInfoRender()
    newPostRender()
}