function returnHTML(user,i, userName, userAvatar) {
    return `
    <div>
        <ul>
            <li>
                <div>
                    <button>
                            <div role="button">
                                <img class="avatarImg" id="myImg${user}" src="${userAvatar}" alt="imgNr ${user}">
                            </div>
                            <div>
                                <span>${userName}</span>
                            <div>
                    </button>
                </div>
            </li>
        </ul>
    </div>`;
}
