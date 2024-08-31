var signUpForm = document.getElementById("SignUpForm");
var postForm = document.getElementById("PostForm");

const profilePhotoImg = document.getElementById("profilePhotoImg");
const profilePhotoInput = document.getElementById("profilePhotoInput");




signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Account created successfully!",
    showConfirmButton: false,
    timer: 1500,
  });
  postForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
  profilePhotoImg.classList.remove("hidden");

});


profilePhotoImg.addEventListener("click", () => {
  profilePhotoInput.click();
});

profilePhotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    profilePhotoImg.src = reader.result;
  };
  reader.readAsDataURL(file);
});

var backgroundImg;
function post() {
  // Retrieve the values inside the function
  var firstName = document.getElementById("FirstName").value;
  var lastName = document.getElementById("LastName").value;
  var postTitle = document.getElementById("postTitle").value;
  var postDescription = document.getElementById("postDescription").value;
  var currentTime = new Date().toLocaleTimeString();

  var post = document.getElementById("post");
  if ((postTitle.trim() && postDescription.trim()) === "") {
    Swal.fire({
      title: "Empty Post",
      text: "Can't publish post without Title or Description",
      icon: "question",
    });
  } else {
    post.innerHTML += `<div class="card p-2 m-3 postcard">
        <div class="card-header d-flex  align-items-center">
       <img class="profile-photo" src="${profilePhotoImg.src}" />
       <div class="name-time d-flex flex-column p-2">
       <div class="userName">
        ${firstName} ${lastName} </div>
        <div class="time">${currentTime}</div>
        </div>
       
      </div>
        
        <div style="background-image: url(${backgroundImg})" class="card-body">
          <blockquote class="blockquote mb-0">
            <p class="userPostTitle">${postTitle}</p>
            <footer class="blockquote-footer userPostDescription">${postDescription}
            </footer>
          </blockquote>

          <div class="mt-3 d-flex justify-content-end">
            <button onclick="editPost(this)" id="editbtn">Edit post</button> 
            <button onclick="deletePost(this)" id="deletebtn" >Delete post</button>
          </div>
        </div>
      </div>`;

    post.classList.remove("hidden");

    // Clear the form fields after posting
    document.getElementById("postTitle").value = "";
    document.getElementById("postDescription").value = "";
  }
}
function selectImg(src) {
  backgroundImg = src;
  var bgImg = document.getElementsByClassName("bg-img");

  for (var i = 0; i < bgImg.length; i++) {
    bgImg[i].className = "bg-img";
  }
  event.target.className += " selectedImg";
}

function editPost(button) {
  // Get the current post card
  var postCard = button.closest(".postcard");
  var postTitleElement = postCard.querySelector(".userPostTitle");
  var postDescriptionElement = postCard.querySelector(".userPostDescription");

  // Populate the form fields with current content
  document.getElementById("postTitle").value = postTitleElement.textContent;
  document.getElementById("postDescription").value = postDescriptionElement.textContent;

  // Remove the post being edited
  postCard.remove();

  // Show the post form for editing
  postForm.classList.remove("hidden");
}

function deletePost(button) {
  var postCard = button.closest(".postcard");
  postCard.remove();
}
