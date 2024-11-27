let submitPost = document.querySelector("#submitPost")
let postList = document.querySelector(".postList")
let deleteBtn = document.querySelectorAll(".deleteBtn")

let inputUserPhotoLink = document.querySelector("#inputUserPhotoLink")
let inputUserName = document.querySelector("#inputUserName")
let descriptionText = document.querySelector("#descriptionText")
let inputPostPhotoLink = document.querySelector("#inputPostPhotoLink")

const postData = [
    {
        userImg: "./images/userPhoto.png",
        userName: "Jon. Abrahon Linkon",
        postTime: "16h",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis aliquam voluptas quidem sit, sequi doloremque nulla quisquam, beatae illo cum ullam a modi. Doloribus consequatur, ducimus tempore laboriosam odio fugiat culpa impedit aspernatur earum eveniet obcaecati odit exercitationem facilis saepe magnam iure ut.",
        postImage: "./images/postImage-1.jpg",
        likedUserName: "ABM Shawon & Others",
        reactCount: "15k",
        commentCount: "1k",
        shareCount : "1.5k"
    }
]





submitPost.addEventListener("click",()=>{
    postData.push(
        {
            userImg: "./images/userPhoto.png",
            userName: "Siam Talukder",
            postTime: "5h",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            postImage: "https://images.pexels.com/photos/29207330/pexels-photo-29207330/free-photo-of-colorful-victorian-terraced-houses-street-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            likedUserName: "Ramen Biswas",
            reactCount: "7k",
            commentCount: "8k",
            shareCount : "9k"
        }
    )
    postList.innerHTML = "";
    display();
    console.log(postData);
    
})



const display = ()=>{
    postData.map((item)=>{
        postList.innerHTML += `
            <li class="post">
                        <button class="deleteBtn">Delete</button>
                        <div class="postHeading">
                            <div class="postHeadingImageWrapper">
                                <img src="${item.userImg}" alt="userPic">
                            </div>
                            <div>
                                <h2 class="postUserName">${item.userName}</h2>
                                <p class="postTime">${item.postTime}</p>
                            </div>
                        </div>
                        <div class="postBody">
                            <p class="postUserText">${item.description}</p>
                            <div class="postBodyImageWrapper">
                                <img src="${item.postImage}" alt="post image">
                            </div>
                            <div class="postBodyBottom">
                                <div class="likeCommentCounting">
                                    <p class="react">
                                        <i class="fa-solid fa-heart"></i>
                                        <i class="fa-solid fa-thumbs-up"></i>
                                        <span>${item.likedUserName}</span>
                                        <span id="reactCount">${item.reactCount}</span>
                                    </p>
                                    <div class="commentShareWrapper">
                                        <p id="comment">
                                            <span id="commentsCount">${item.commentCount}</span>
                                            comments
                                        </p>
                                        <p id="share">
                                            <span id="sharesCount">${item.shareCount}</span>
                                            Shares
                                        </p>
                                    </div>
                                </div>
                                <div class="likeCommentShareIcon">
                                    <p id="like">like</p>
                                    <p id="comments">Comments</p>
                                    <p id="shares">Share</p>
                                </div>
                            </div>
                        </div>
                    </li>
        `
    })
}

postList.addEventListener("click",(event)=>{
    console.log(event.view);
    
})







