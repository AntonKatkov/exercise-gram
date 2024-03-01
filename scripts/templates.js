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



function newPostHTML(user, i, infotext, userNickName, userDate, userAvatar, userLikeicon, userCommentsIcon, userSendicon, userSaveicon,) {
    const formattedDate = formatDate(new Date(userDate));
    return `
    <div class="posts" id="${i}">
        <div>
            <div>
                <article>
                    <div>
                        <div>
                        <div class="displayFlex profielePadding">
                        <img class="avatarImg" id="${user}" src="${userAvatar}" alt="imgNr ${user}">
                        <span>${userNickName}</span><span>*</span><span>${formattedDate}</span>
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
                    <div id="">${infotext}</div>
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

function profileHTML(user, i, userName, userNickName, userAvatar,) {
    return `
    <div>
        <div>
            <div>
                <div class="dFlex">
                    <div class="sMarginList dFlex">
                    
                    <a class="externlink" href=""><img role="button" class="avatarImg buttonProfilelist" id="myImg${user}" src="${userAvatar}" alt="imgNr ${user}"></a>
                        <div class="dflexC">
                            <span role="button">${userNickName}</span>
                            <span>${userName}</span>
                        </div>
                    </div>
                    <div>
                        Follow
                    </div>
                </div>
            </div>
       </div>
    </div>
    `;

}



function modalFunction(i) {
    return `
    <div class="modal-content">  
    <span class="close" onclick="closeModal(${i})">&times;</span>
    <div class="dflexC gap">
        <input id="authorInput" placeholder="Author">
        <input id="authorNameInput" placeholder="Author Name">
        <textarea id="posttext" placeholder="Your Text"></textarea>
        <button onclick="submitUserInfo()">Submit</button><button id="emoji-button">Click Me</button>
    </div>
</div>
  `
  }
