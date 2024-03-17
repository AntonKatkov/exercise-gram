function returnHTML(user, i,) {
    return `
          <ul>
            <li>
                <div>
                    <button class="mMarginList buttonlist">
                    <div class="sMarginList" role="button">
                    <img onclick="openFullscreen('${user.avatar}',${i},'${user.posttext}','${user.avatar}','${user.author}')" class="avatarImg" id="myImg${user}" src="${user.avatar}" alt="imgNr ${user}">
                    </div>
                            <div>
                                <span class="User">${user.author}</span>
                            <div>
                    </button>
                </div>
            </li>
        </ul>`;
}
function newPostHTML(user, i, userLikeicon,) {
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
                        <img  class="avatarImg" id="${user}" src="${user.avatar}" alt="imgNr ${user}">
                        <span class="User">${user.author}</span><span>*</span><span class="">${formattedDate}</span>
                    </div>
                            <div onclick="liked(${i})" >
                            <img class="view-Post" id="myImg${user}" src="${user.avatar}" alt="imgNr ${user}">
                            </div>
                    </div>
                        <div class="iconspostbox">
                            <div class="iconsbuttons">
                                <div style="display:Flex; flex-direction: column;">
                                    <img class="iconButtonSize iconsvg" id="Like${i}" onclick="liked(${i})" src="${userLikeicon}" alt="imgNr${user}">
                                    ${user.likes.length > 0 ? `<div class="likeCount" id="like-count-${i}">${user.likes.length}</div>` : ''}
                                </div>

                                <div>
                                    <img onclick="openFullscreen('${user.avatar}',${i},'${user.posttext}','${user.avatar}','${user.author}')" class="iconButtonSize iconsvg" id="${i}" src="${user.commentsicon}" alt="imgNr${user.avatar}">
                                </div>
                                <div>
                                    <img class="iconButtonSize iconsvg" id="myImg" src="${user.sendicon}" alt="imgNr${user}">
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img class="iconButtonSize iconsvg" id="myImg" src="${user.saveicon}" alt="imgNr${user}">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="postText" class="postetText">${user.posttext}</div>
                        <div id="comment${i}"></div>
                            <div class="padding">
                                <div class="flexContainerMessege">
                                <textarea id="input${i}" class="inputfield" placeholder="Add as comment...." rows="1"></textarea>
                                    <div>
                                        <button class="flexContainerMessege " onclick="commendAdd(${i})">Post</button>
                                    <div>
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
function Usercomments(user, i, x, comment) {
    return `
<div id="comment${i}_${x}" class="comentspadding postetText">
     <div class="User">${user.author}</div>
        <span style="padding-left: 10px;">${comment}</span>
        <span class="delete-comment" onclick="deleteComment(${i}, ${x})">&times;</span>
</div>`;
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
                            <span class="User" role="button">${user.author}</span>
                            <span >${user.authorName}</span>
                        </div>
                    </div>
                    <div>
                    <a style="color: hsla(242, 88.4%, 56.3%, 1);" class="followButton"" href="#">Follow</a>
                    </div>
                </div>
            </div>
       </div>
    </div>
    `;

}

function modalFunction(i) {
    selectImage('1');
    return `
    <div class="modal-content">  
    <span class="close" onclick="closeModal(${i})">&times;</span>
    <div class="dflexC gap">
        <input class="inputModal" id="authorInput" placeholder=" Your Nickname">
        <input class="inputModal" id="authorNameInput" placeholder="Your Name">
        <textarea id="posttext" placeholder="Your Text Description"></textarea>
            <span style=" text-align: center; font-weight: bold; font-size: xx-large;"> 
                        background images to choose from 
            </span>
        
        <div class="choice">

            <div class="image-selection">
                <input type="radio" id="indicator1" name="Choose" src="./img/ImgProfiele/ninja-7701126_1280.jpg" onclick="selectImage('1')" checked>
                <label for="indicator1">
                    <img class="iconButtonSizeCreatePost" src="./img/ImgProfiele/ninja-7701126_1280.jpg" onclick="selectImage('1')" alt="Image 1">
                </label>
            </div>

            <div class="image-selection">
                <input type="radio" id="indicator2" name="Choose" src="./img/ImgProfiele/science-fiction-1424446_1280.jpg" onclick="selectImage('2')">
                <label for="indicator2">
                    <img class="iconButtonSizeCreatePost" src="./img/ImgProfiele/science-fiction-1424446_1280.jpg" onclick="selectImage('2')" alt="Image 2">
                </label>
            </div>

            <div class="image-selection">
                <input type="radio" id="indicator3" name="Choose" src="./img/ImgProfiele/mind-544404_1280.png" onclick="selectImage('3')">
                <label for="indicator3">
                    <img class="iconButtonSizeCreatePost" src="./img/ImgProfiele/mind-544404_1280.png" onclick="selectImage('3')" alt="Image 3">
                </label>
            </div>

        </div>
<button onclick="submitUserInfo(${i})">Submit</button>

  `
}

function modalPostIMG(imagePath, index, userPostText ,userAvatar,userAuthor ) {
    return`
    <span class="close" onclick="closeModal(${index})">&times;</span>
    <div class="modalx-content">

                <img class="modalx-img" src="${imagePath}" alt="Bild ${index}" >
            <div class="modalxDiv desktop-show">
                <div class="modalxUserContent">
                
                    <img class="avatarImg " src="${userAvatar}" alt="Bild ${index}" >  <a  class="userLinkPostet" href="#"><span>${userAuthor}</span></a> 
                </div>
                <div style="padding: 24px;">
                
                        ${userPostText}
                </div>
            </div>

    </div>


`; 
}


