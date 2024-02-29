function newInfoRender() {
    let content = document.getElementById('infoContent');
    content.innerHTML = '';

    for (let i = 0; i < userInfo.length; i++) {
        let user = userInfo[i];
        let userNickName = user['author']
        let userAvatar = user['avatar']
        content.innerHTML += returnHTML(user, i, userNickName, userAvatar);
        ;
    }
}

function newPostRender() {
    let postContent = document.getElementById('postContent');
    postContent.innerHTML = '';

    for (let i = 0; i < userInfo.length; i++) {
        let user = userInfo[i];
        let userNickName = user['author']
        let userDate= user['createdAt']
        let userAvatar = user['avatar']
        let userLikeicon = user['likeicon']
        let userCommentsIcon = user['commentsicon']
        let userSendicon = user['sendicon']
        let userSaveicon = user['saveicon']
        postContent.innerHTML += newPostHTML(user, i, userNickName, userDate, userAvatar, userLikeicon, userCommentsIcon, userSendicon, userSaveicon,);
        ;


        let usercommentsTextLength = document.getElementById(`comment${i}`);
        for (let x = 0; x < user['comments'].length; x++) {
            const comment = user['comments'][x];
            usercommentsTextLength.innerHTML += `<div class="comentspadding"> ${comment} </div>`
        }
    }
}

function renderProfile(){
    let profileContent = document.getElementById('profileContent');
    profileContent.innerHTML = '';

    for (let i = 0; i < userInfo.length; i++) {
        let user = userInfo[i];
        let userNickName = user['author']
        let userName =user['authorName']
        let userAvatar = user['avatar']
    

        profileContent.innerHTML += profileHTML(user, i,userName, userNickName, userAvatar,);
    }

}


function Start() {
    newInfoRender()
    newPostRender()
    renderProfile()
}

function commendAdd(index) {
    let inputs = document.getElementById(`input${index}`);
    userInfo[index]['comments'].push(inputs.value)
    newPostRender()
}




function formatDate(date) {

    let day = date.getDate();
    let month = date.getMonth() + 1; // Da Monate von 0 beginnen, addieren wir 1
    let year = date.getFullYear();

    // Führende Null hinzufügen, wenn Tag oder Monat < 10
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;


    return day + '.' + month + '.' + year; // Format: DD.MM.YYYY
}