
function newInfoRender() {
    let content = document.getElementById('infoContent');
    content.innerHTML = '';

    for (let i = 0; i < Math.min(userInfos.length, 6); i++) {
        let user = userInfos[i];
        let userNickName = user['author']
        let userAvatar = user['avatar']
        content.innerHTML += returnHTML(user, i, userNickName, userAvatar);
        ;
    }
}

function newPostRender() {
    let postContent = document.getElementById('postContent');
    postContent.innerHTML = '';

    for (let i = 0; i < userInfos.length; i++) {
        let user = userInfos[i];
        let userLikeicon = user.isLiked ? "img/ImgProfiele/herthLike.png" : "./img/imgicons/hearthIcon.svg";
        postContent.innerHTML += newPostHTML(user,  i, user.posttext, user.author, user.createdAt, user.avatar, userLikeicon, user.commentsicon, user.sendicon, user.saveicon);
        ;
        
        let usercommentsTextLength = document.getElementById(`comment${i}`);
        for (let x = 0; x < user['comments'].length; x++) {
            let comment = user['comments'][x];
            usercommentsTextLength.innerHTML += `<div class="comentspadding"> ${comment} </div>`
        }

    }
}

function renderProfile(){
    let profileContent = document.getElementById('profileContent');
    profileContent.innerHTML = '';

    for (let i = 0; i < Math.min(userInfos.length, 5); i++) {
        let user = userInfos[i];

        profileContent.innerHTML += profileHTML(user, i,user.authorName, user.author, user.avatar,);
    }

}

function Start() {
    loadUserInfo()
    likerender()
    newInfoRender()
    newPostRender()
    renderProfile()
}

function commendAdd(index) {
    let inputs = document.getElementById(`input${index}`);
    userInfos[index]['comments'].push(inputs.value)
    saveUserInfo()
    newPostRender()
}

function liked(index) {
    // Zugriff auf das Nutzerobjekt
    let user = userInfos[index];

    // Umkehren des aktuellen Like-Zustands
    user.isLiked = !user.isLiked;
    // Aktualisieren des Like-Arrays basierend auf dem neuen Zustand
    if (user.isLiked) {
        // Stellen Sie sicher, dass 'true' nur einmal hinzugefügt wird
        if (!user.likes.includes('true')) {
            user.likes.push('true');
        }
    } else {
        // Entfernen von 'true', falls der Beitrag nicht mehr geliked ist
        let trueIndex = user.likes.indexOf('true');
        if (trueIndex > -1) {
            user.likes.splice(trueIndex, 1);
        }
    }
    // Aktualisieren des Bildpfads für das Like-Icon basierend auf dem Zustand
    let likeButton = document.getElementById(`Like${index}`);
    if (likeButton) {
        likeButton.src = user.isLiked ? "img/ImgProfiele/herthLike.png" : "./img/imgicons/hearthIcon.svg";
    }
    // Speichern der aktualisierten Informationen
    saveUserInfo();
    // Rendern der Beiträge neu
    newPostRender();
}

function likerender() {
    userInfos.forEach(user => {
        user.isLiked = user.likes.includes('true');
    });
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



function CreatePost(i) {
    // Modal dynamisch erstellen oder ein existierendes Modal finden
    let modal = document.getElementById("modal" + i);
    if (!modal) {
        // Modal existiert nicht, also erstelle es dynamisch (optional)
        modal = document.createElement("div");
        modal.id = "modal" + i;
        modal.className = "modal";
        modal.innerHTML = modalFunction(i);
        document.body.appendChild(modal);
    }
    
    // Modal anzeigen
    modal.style.display = "block";
}

function closeModal(i) {
    var modal = document.getElementById("modal" + i);
    if (modal) {
        modal.style.display = "none";
    }
}


function submitUserInfo() {
    let author = document.getElementById('authorInput').value;
    let authorName = document.getElementById('authorNameInput').value;
    let posttext = document.getElementById('posttext').value;

    let createdAt = new Date(); // Erfasst das aktuelle Datum und die Uhrzeit

    let userInfo = {
        "author": author,
        "authorName": authorName,
        "createdAt": createdAt,
        "avatar": "./img/ImgProfiele/img-1.png",
        "likeicon": "./img/imgicons/hearthIcon.svg",
        "commentsicon": "./img/imgicons/chatIcon.svg",
        "sendicon": "./img/imgicons/sendIcon.svg",
        "saveicon": "./img/imgicons/saveIcon.svg",
        "posttext": posttext,
        "comments": [],
        "likes": []
    };
    userInfos.push(userInfo);
    saveUserInfo()

    document.getElementById('authorInput').value = '';
    document.getElementById('authorNameInput').value = '';
    document.getElementById('posttext').value = '';
    closeModal();
    Start();
}


function saveUserInfo() {
    // Speichere das aktuelle userInfos-Array im localStorage
    localStorage.setItem('userInfos', JSON.stringify(userInfos));
}

// Beispiel: Hinzufügen eines neuen Benutzerinfo-Objekts
function addNewUserInfo(newUserInfo) {
    userInfos.push(newUserInfo); // Füge das neue Objekt zum Array hinzu
    saveUserInfo(); // Speichere das aktualisierte Array im localStorage
}

function loadUserInfo() {
    // Prüfe, ob bereits Daten im localStorage vorhanden sind
    let storedUserInfos = localStorage.getItem('userInfos');
    if (storedUserInfos) {
        // Wenn ja, parse den String zu einem Array und verwende es
        userInfos = JSON.parse(storedUserInfos);
    }
}


