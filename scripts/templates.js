function returnHTML(user, i,) {
    return `
          <ul>
            <li>
                <div>
                    <button class="mMarginList buttonlist">
                    <div class="sMarginList" role="button">
                    <img class="avatarImg" id="myImg${user}" src="${user.avatar}" alt="imgNr ${user}">
                    </div>
                            <div>
                                <span>${user.author}</span>
                            <div>
                    </button>
                </div>
            </li>
        </ul>`;
}



function newPostHTML(user, i,  userLikeicon,) {
    let formattedDate = formatDate(new Date(user.createdAt));
    return `
    <div class="posts" id="post${i}">
        <div>
            <div>
                <article>
                    <div>
                        <div>
                        <span class="close" onclick="deletePost(${i})">&times;</span>
                        <div class="displayFlex profielePadding">
                        <img class="avatarImg" id="${user}" src="${user.avatar}" alt="imgNr ${user}">
                        <span>${user.author}</span><span>*</span><span>${formattedDate}</span>
                    </div>
                            <div>
                            <img class="view-Post" id="myImg${user}" src="${user.avatar}" alt="imgNr ${user}">
                            </div>
                    </div>
                        <div class="iconspostbox">
                            <div class="iconsbuttons">
                                <div>
                                    <img class="iconButtonSize" id="Like${i}" onclick="liked(${i})" src="${userLikeicon}" alt="imgNr${user}">
                                </div>
                                <div>
                                    <img class="iconButtonSize" id="myImg" src="${user.commentsicon}" alt="imgNr${user}">
                                </div>
                                <div>
                                    <img class="iconButtonSize" id="myImg" src="${user.sendicon}" alt="imgNr${user}">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img class="iconButtonSize" id="myImg" src="${user.saveicon}" alt="imgNr${user}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="">${user.posttext}</div>
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

function profileHTML(user, i,) {
    return `
    <div>
        <div>
            <div>
                <div class="dFlex">
                    <div class="sMarginList dFlex">
                    
                    <a class="externlink" href=""><img role="button" class="avatarImg buttonProfilelist" id="myImg${user}" src="${user.avatar}" alt="imgNr ${user}"></a>
                        <div class="dflexC">
                            <span role="button">${user.author}</span>
                            <span>${user.authorName}</span>
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

        background images to choose from
        <div style="display: flex;">
            <div class="image-selection">
                <img class="iconButtonSize" src="./img/imgicons/hearthIcon.svg" onclick="selectImage('1')" alt="Image 1">
                <div class="selection-indicator" id="indicator1"></div>
            </div>
            <div class="image-selection">
                <img class="iconButtonSize" src="./img/imgicons/chatIcon.svg" onclick="selectImage('2')" alt="Image 2">
                <div class="selection-indicator" id="indicator2"></div>
            </div>
            <div class="image-selection">
                <img class="iconButtonSize" src="./img/imgicons/saveIcon.svg" onclick="selectImage('3')" alt="Image 3">
                <div class="selection-indicator" id="indicator3"></div>
            </div>

        </div>
<button onclick="submitUserInfo(${i})">Submit</button><button id="emoji-button">Click Me</button>

  `
  }
