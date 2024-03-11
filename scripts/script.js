let selectedImageSrc = '';

document.addEventListener('input', function (event) {
    if (event.target.classList.contains('inputfield')) {
        autoAdjustHeight(event.target);
    }
});


function newInfoRender() {
    let content = document.getElementById('infoContent');
    content.innerHTML = '';

    for (let i = 0; i < Math.min(userInfos.length, 6); i++) {
        let user = userInfos[i];
        content.innerHTML += returnHTML(user, i,);
        ;
    }
}

function newPostRender() {
    let postContent = document.getElementById('postContent');
    postContent.innerHTML = '';

    for (let i = 0; i < userInfos.length; i++) {
        let user = userInfos[i];
        let userLikeicon = user.isLiked ? "img/ImgProfiele/herthLike.png" : "./img/imgicons/hearthIcon.svg";
        postContent.innerHTML += newPostHTML(user, i, userLikeicon,);

        let usercommentsTextLength = document.getElementById(`comment${i}`);
        for (let x = 0; x < user['comments'].length; x++) {
            let comment = user['comments'][x];
            usercommentsTextLength.innerHTML += `
                <div id="comment${i}_${x}" class="comentspadding">
                <div class="User">${user.author}</div>
                    ${comment}
                    <span class="delete-comment" onclick="deleteComment(${i}, ${x})">&times;</span>
                </div>`;
        }
    }

}

function renderProfile() {
    let profileContent = document.getElementById('profileContent');
    profileContent.innerHTML = '';

    for (let i = 0; i < Math.min(userInfos.length, 5); i++) {
        let user = userInfos[i];

        profileContent.innerHTML += profileHTML(user, i,);
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

function autoAdjustHeight(textarea) {
    let maxHeight = 100; // Maximalhöhe in Pixel, bevor Scrollbar erscheint
    textarea.style.height = 'auto'; // Setzt die Höhe zurück, um die neue Größe zu berechnen
    if (textarea.scrollHeight > maxHeight) {
        textarea.style.overflowY = 'auto'; // Fügt Scrollbar hinzu
        textarea.style.height = maxHeight + 'px'; // Setzt Höhe auf Maximalhöhe
    } else {
        textarea.style.overflowY = 'hidden'; // Verbirgt Scrollbar
        textarea.style.height = textarea.scrollHeight + 'px'; // Passt Höhe an den Inhalt an
    }
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
    updateLikeCount(index);
    saveUserInfo();
    newPostRender();
}


function updateLikeCount(index) {
    let user = userInfos[index];
    let likeCountElement = document.getElementById(`like-count-${index}`);
    if (likeCountElement) {
        if (user.likes.length > 0) {
            likeCountElement.textContent = user.likes.length;
            likeCountElement.style.display = 'block'; // Like-Zähler anzeigen, wenn Likes vorhanden sind
        } else {
            likeCountElement.style.display = 'none'; // Like-Zähler ausblenden, wenn keine Likes vorhanden sind
        }
    }
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
    let modal = document.getElementById("modal" + i);
    if (modal) {
        modal.style.display = "none";
    }
}

function deletePost(i) {
    let delpost = document.getElementById(`post${i}`);
    if (delpost) {
        delpost.remove();
    }
    if (i > -1) {
        userInfos.splice(i, 1);
    }
    saveUserInfo();
    newPostRender();
    newInfoRender()
}

function selectImage(selected) {
    // Pfad-Basis für Bilder
    let basePath = "./img/ImgProfiele/";
    // Bildpfade
    let images = {
        '1': "ninja-7701126_1280.jpg",
        '2': "science-fiction-1424446_1280.jpg",
        '3': "mind-544404_1280.png",
    };

    // Aktualisieren des ausgewählten Bildpfades
    selectedImageSrc = basePath + images[selected];
}

function emptytest(str) {
    // Prüfen, ob der übergebene String leer ist
    if (typeof str === 'string' && str.trim().length === 0) {
        alert('nickname or name are empty');
        return true; // Der String ist leer
    }
    return false; // Der String ist nicht leer
}



function submitUserInfo() {
    let author = document.getElementById('authorInput')
    let authorName = document.getElementById('authorNameInput')
    let posttext = document.getElementById('posttext')

    if (!emptytest(author.value && authorName.value)) {

        saveextra(author.value, authorName.value, posttext.value)
        let ele = document.getElementsByName("Choose");
        for (let i = 0; i < ele.length; i++)
            ele[i].checked = false;

        closeModal();
        Start();
    }
}

function saveextra(author, authorName, posttext) {

    let userInfo = {
        "author": author,
        "authorName": authorName,
        "createdAt": new Date(),
        "avatar": selectedImageSrc,
        "likeicon": "./img/imgicons/hearthIcon.svg",
        "commentsicon": "./img/imgicons/chatIcon.svg",
        "sendicon": "./img/imgicons/sendIcon.svg",
        "saveicon": "./img/imgicons/saveIcon.svg",
        "posttext": posttext,
        "comments": [],
        "likes": []
    };

    userInfos.push(userInfo);
    saveUserInfo();

    document.getElementById('authorInput').value = '';
    document.getElementById('authorNameInput').value = '';
    document.getElementById('posttext').value = '';
}

function saveUserInfo() {
    localStorage.setItem('userInfos', JSON.stringify(userInfos));
}

function loadUserInfo() {
    // Prüfe, ob bereits Daten im localStorage vorhanden sind
    let storedUserInfos = localStorage.getItem('userInfos');
    if (storedUserInfos) {
        // Wenn ja, parse den String zu einem Array und verwende es
        userInfos = JSON.parse(storedUserInfos);
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "335px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



function deleteComment(postIndex, commentIndex) {
    userInfos[postIndex]['comments'].splice(commentIndex, 1);
    saveUserInfo();
    newPostRender();
}
