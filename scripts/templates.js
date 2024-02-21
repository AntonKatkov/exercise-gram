function returnHTML(user, i, userName, userAvatar) {
    return `
          <ul>
            <li>
                <div>
                    <button class="mMarginList buttonlist">
                    <div class="sMarginList" role="button">
                    <img class="avatarImg" id="myImg${user}" src="${userAvatar}" alt="imgNr ${user}">
                    </div>
                            <div>
                                <span>${userName}</span>
                            <div>
                    </button>
                </div>
            </li>
        </ul>`;
}



function newPostHTML(user, i, userName, userAvatar, userLikeicon, userCommentsIcon, userSendicon, userSaveicon,) {
    return `
    <div class="posts" id="${i}">
        <div>
            <div>
                <article>
                    <div>
                        <div>
                        <div class="displayFlex profielePadding">
                        <img class="avatarImg" id="myImg${user}" src="${userAvatar}" alt="imgNr ${user}">
                        <span>${userName}</span><span>*</span><span>days</span>
                    </div>
                            <div>
                            <img class="view-Post" id="myImg${user}" src="${userAvatar}" alt="imgNr ${user}">
                            </div>
                    </div>
                        <div class="iconspostbox">
                            <div class="iconsbuttons">
                                <div>
                                    <img class="iconButtonSize" id="myImg" src="${userLikeicon}" alt="imgNr${user}">
                                </div>
                                <div>
                                    <img class="iconButtonSize" id="myImg" src="${userCommentsIcon}" alt="imgNr${user}">
                                </div>
                                <div>
                                    <img class="iconButtonSize" id="myImg" src="${userSendicon}" alt="imgNr${user}">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img class="iconButtonSize" id="myImg" src="${userSaveicon}" alt="imgNr${user}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>beschreibung</div>
                        <div id="comment${i}"></div>
                            <div class="padding">
                                <div class="flexContainerMessege">
                                    <input id="input${i}" class="inputfield" type="text" placeholder="Add as comment....">
                                    <button onclick="commendAdd(${i})">Post</button>
                                </div>
                            </div>
                        </div>
                    <div class="onepxline"></div>
                </article>
            </div>
        </div>
    </div>
    `;
}

function profileHTML(user, i, userName, userAvatar,) {
    return `
    <div>
        <ul>
        <li>
            <div>
                <button class="mMarginList buttonProfilelist">
                <div class="sMarginList" role="button">
                <img class="avatarImg" id="myImg${user}" src="${userAvatar}" alt="imgNr ${user}">
                </div>
                        <div>
                            <span>${userName}</span>
                        <div>
                </button>
            </div>
        </li>
    </ul>
    </div>
    `;

}

