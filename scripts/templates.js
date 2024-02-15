function returnHTML(user,i, userName, userAvatar) {
    return `
          <ul>
            <li>
                <div>
                    <button class="mMarginList">
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



function newPostHTML(user,i ,userName, userAvatar){
return`
    <div class="posts">
        <div>
            <div>
                <article>
                    <div>
                        <div>
                            <div class="displayFlex">
                                <img class="avatarImg" id="myImg${user}" src="${userAvatar}" alt="imgNr ${user}">
                                <span>${userName}</span>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>

`


}