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
