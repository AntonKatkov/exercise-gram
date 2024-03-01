
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
        let userNickName = user['author']
        let userDate= user['createdAt']
        let userAvatar = user['avatar']
        let userLikeicon = user['likeicon']
        let userCommentsIcon = user['commentsicon']
        let userSendicon = user['sendicon']
        let userSaveicon = user['saveicon']
        let infotext = user['posttext']
        postContent.innerHTML += newPostHTML(user, i, infotext, userNickName, userDate, userAvatar, userLikeicon, userCommentsIcon, userSendicon, userSaveicon,);
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

    for (let i = 0; i < Math.min(userInfos.length, 5); i++) {
        let user = userInfos[i];
        let userNickName = user['author']
        let userName =user['authorName']
        let userAvatar = user['avatar']
    

        profileContent.innerHTML += profileHTML(user, i,userName, userNickName, userAvatar,);
    }

}


function Start() {
    loadUserInfo()
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
    var modal = document.getElementById("modal" + i);
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
        "comments": []
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



function addDiv(parentId) {
    const parent = document.getElementById(parentId);
    const existingDivs = parent.querySelectorAll('div');

    // Prüfe, ob die maximale Anzahl erreicht ist
    if (existingDivs.length < 5) {
        const newDiv = document.createElement('div');
        newDiv.textContent = `Element ${existingDivs.length + 1}`;
        parent.appendChild(newDiv);
    } else {
        console.log('Maximale Anzahl von 5 divs erreicht.');
    }
}