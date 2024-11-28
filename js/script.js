let submitPost = document.querySelector("#submitPost")
let postList = document.querySelector(".postList")

let inputUserPhotoLink = document.querySelector("#inputUserPhotoLink")
let inputUserName = document.querySelector("#inputUserName")
let inputPostPhotoLink = document.querySelector("#inputPostPhotoLink")
let descriptionText = document.querySelector("#descriptionText")
let inputLikedUserName = document.querySelector("#inputLikedUserName")

let asideRightContactItemList = document.querySelector("#asideRightContactItemList")
let asideLeftContactItemList = document.querySelector("#asideLeftContactItemList")
let asideLeftGroupItemList = document.querySelector("#asideLeftGroupItemList")


const postData = [];
const userData = [
                    {
                        name: "John Smith",
                        pictureLink: "https://images.pexels.com/photos/5846093/pexels-photo-5846093.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "Emily Johnson",
                        pictureLink: "https://images.pexels.com/photos/7249248/pexels-photo-7249248.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "Michael Brown",
                        pictureLink: "https://images.pexels.com/photos/29555412/pexels-photo-29555412/free-photo-of-man-standing-in-forest-with-dark-overcoat.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "Sophia Davis",
                        pictureLink: "https://images.pexels.com/photos/3052276/pexels-photo-3052276.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "James Wilson",
                        pictureLink: "https://images.pexels.com/photos/11495661/pexels-photo-11495661.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "Isabella Martinez",
                        pictureLink: "https://images.pexels.com/photos/12202127/pexels-photo-12202127.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "Daniel Garcia",
                        pictureLink: "https://images.pexels.com/photos/29127457/pexels-photo-29127457/free-photo-of-woman-reading-gabriel-garcia-marquez-in-buenos-aires.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "Olivia Anderson",
                        pictureLink: "https://images.pexels.com/photos/5635228/pexels-photo-5635228.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "Matthew Thomas",
                        pictureLink: "https://images.pexels.com/photos/16773737/pexels-photo-16773737/free-photo-of-smiling-man-posing-in-manchester-city-clothes.jpeg?auto=compress&cs=tinysrgb&w=600"
                    },
                    {
                        name: "Emma Taylor",
                        pictureLink: "https://images.pexels.com/photos/17980513/pexels-photo-17980513/free-photo-of-laughing-young-woman-sitting-on-the-step-of-a-vintage-car.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                ]
const asideLeftItemListData = [
                    {
                        name: "Khan Jahan Ali",
                        pictureLink: "./images/userPhoto.png"
                    },
                    {
                        name: "Friends",
                        pictureLink: "./images/friends.png"
                    },
                    {
                        name: "Memories",
                        pictureLink: "./images/Saved.png"
                    },
                    {
                        name: "Groups",
                        pictureLink: "./images/Groups.png"
                    },
                    {
                        name: "Video",
                        pictureLink: "./images/Video.png"
                    },
                    {
                        name: "MarketPlace",
                        pictureLink: "./images/Marketplace.png"
                    },
                    {
                        name: "Feeds",
                        pictureLink: "./images/Feeds.png"
                    },
                ]
const asideLeftGroupItemListData = [
                    {
                        name: "MERN Extreme Batch 1 : Dive Deep into Full-Stack Magic",
                        pictureLink: "./images/MERN_Extrem_Batch-1.jpg"
                    },
                    {
                        name: "One Year Academy",
                        pictureLink: "./images/OneYearAcademy.jpeg"
                    },
                ]



window.addEventListener("load",()=>{
    userData.map((item)=>{
        asideRightContactItemList.innerHTML += `
                <li>
                    <a href="#" class="asideRightContactItem">
                        <div class="asideRightImageWrapper">
                            <img src=${item.pictureLink} alt="userPic">
                        </div>
                        <span class="asideRightContactItemName">${item.name}</span>
                    </a>
                </li>
        `
    })
    asideLeftItemListData.map((item)=>{
        asideLeftContactItemList.innerHTML += `
                <li>
                    <a href="#" class="asideLeftContactItem">
                        <div class="asideLeftImageWrapper">
                            <img src=${item.pictureLink} alt="userPic">
                        </div>
                        <span class="asideRightContactItemName">${item.name}</span>
                    </a>
                </li>
        `
    })
    asideLeftGroupItemListData.map((item)=>{
        asideLeftGroupItemList.innerHTML += `
                <li>
                    <a href="#" class="asideLeftGroupItem">
                        <div class="asideLeftGroupImageWrapper">
                            <img src=${item.pictureLink} alt="userPic">
                        </div>
                        <span class="asideLeftContactItemName">${item.name}</span>
                    </a>
                </li>
        `
    })
})

submitPost.addEventListener("click",()=>{
    const date = new Date();
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    let dateTime = `${day}-${month}-${year}, ${hour}:${minutes}`

    let reactCountNumber = parseInt(Math.random() * 1652);
    let commentCountNumber = parseInt(Math.random() * 2658);
    let shareCountNumber = parseInt(Math.random() * 223);

    if( inputUserPhotoLink.value == "" ){
        inputUserPhotoLink.style.border = '1px solid red'
        window.alert("Need to fill up User Photo Link filed.")
    }else if( inputUserName.value == "" ){
        inputUserPhotoLink.style.border = 'none'
        inputUserName.style.border = '1px solid red'
        window.alert("Need to fill up User Name filed.")
    }else if( inputPostPhotoLink.value == "" ){
        inputUserPhotoLink.style.border = 'none'
        inputUserName.style.border = 'none'
        inputPostPhotoLink.style.border = '1px solid red'
        window.alert("Need to fill up Post Photo Link filed.")
    }else if( inputLikedUserName.value == "" ){
        inputUserPhotoLink.style.border = 'none'
        inputUserName.style.border = 'none'
        inputPostPhotoLink.style.border = 'none'
        inputLikedUserName.style.border = '1px solid red'
        window.alert("Need to fill up Liked User Name filed.")
    }else if( descriptionText.value == "" ){
        inputUserPhotoLink.style.border = 'none'
        inputUserName.style.border = 'none'
        inputPostPhotoLink.style.border = 'none'
        inputLikedUserName.style.border = 'none'
        descriptionText.style.border = '1px solid red'
        window.alert("Need to fill up description filed.")
    }else{
        inputUserPhotoLink.style.border = 'none'
        inputUserName.style.border = 'none'
        inputPostPhotoLink.style.border = 'none'
        inputLikedUserName.style.border = 'none'
        descriptionText.style.border = 'none'
        postData.push(
            {
                userImg: inputUserPhotoLink.value == ""?"./images/userPhoto.png":inputUserPhotoLink.value,
                userName: `${inputUserName.value}`,
                postTime: dateTime,
                description:`${descriptionText.value}`,
                postImage: inputPostPhotoLink.value == ""?"https://images.pexels.com/photos/29207330/pexels-photo-29207330/free-photo-of-colorful-victorian-terraced-houses-street-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load":inputPostPhotoLink.value,
                reactCount: `${reactCountNumber}k`,
                likedUserName: `${inputLikedUserName.value}`,
                commentCount: `${commentCountNumber}k`,
                shareCount : `${shareCountNumber}k`
            }
        )
        postList.innerHTML = "";
        inputUserPhotoLink.value = "";
        inputUserName.value = "";
        inputPostPhotoLink.value = "";
        descriptionText.value = "";
        inputLikedUserName.value = "";
        display();
        console.log(postData);
    }
})



const display = ()=>{
    postList.innerHTML = "";
    postData.map((item,index)=>{
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
                                        <span>${item.likedUserName} & </span>
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
                                    <p id="like"><i class="fa-regular fa-thumbs-up"></i> like</p>
                                    <p id="comments"><i class="fa-regular fa-comment"></i> Comments</p>
                                    <p id="shares"><i class="fa-solid fa-share"></i> Share</p>
                                </div>
                            </div>
                        </div>
                    </li>
        `
        deleteItem()
    })
}

let deleteItem = ()=>{
    let deleteBtn = document.querySelectorAll(".deleteBtn");
    let deleteBtnArray = Array.from(deleteBtn)    
    deleteBtnArray.map((deleteButton,index)=>{
        deleteButton.addEventListener("click",()=>{
            console.log("delete", index);
            postData.splice(index,1)
            display()
            console.log(postData);
        })
    })
}




