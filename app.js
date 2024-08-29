let editingPost = null; // To keep track of the post being edited

document.getElementById("form").addEventListener('submit', function (e) {
    e.preventDefault();

    // Grab the values from input fields
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;

    // Reference to the container where posts will be displayed
    var postContainer = document.getElementById("post");

    // Add new HTML structure for the post form
    postContainer.innerHTML += `
   <div class="col-12 col-md-10 m-auto" id="post-form ">
            <div class="card justify-content-center">
                <div class="mb-3">
                    <h3>You are ready to post</h3>
                    <label for="exampleFormControlInput1" class="form-label">Enter Post Title</label>
                    <input id="title" type="text" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Description:</label>
                    <textarea id="description" class="form-control" rows="3"></textarea>
                    <div class="mt-3">
                        <button type="button" onclick="post()" class="btn">Post</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>`;

    // Hide the form after submission
    document.getElementById("form").classList.add("hidden");
});

function post() {


    // Grab the title and description values from the input fields
    var title = document.getElementById("title");
    var description = document.getElementById("description");

    if (title.value === "") {
        Swal.fire({
            title: "Empty Post",
            text: "Write something",
            icon: "question"
        });
    }

    else if (!editingPost) {
        // Create a new post if not editing
        var postContainer = document.getElementById("myPost");

        postContainer.innerHTML += `
            

                <div class="card p-2 m-3">
                    <div class="card-header">
                        <em>@post</em>
                    </div>
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p class="ep">${title.value}</p>
                            <footer class="blockquote-footer dp">${description.value}</footer>
                        </blockquote>
                    </div>
                    <div>
                        <button onclick="editbtn(this)">Edit post</button> 
                        <button onclick="deletebtn(this)">Delete post</button>
                    </div>
                </div>`;



    }

    else {





        // If editingPost is set, update the existing post
        editingPost.querySelector('.ep').innerText = title.value;
        editingPost.querySelector('.dp').innerText = description.value;



        // Clear editingPost flag after editing
        editingPost = null;
    }


    // Clear the input fields after posting or editing
    title.value = "";
    description.value = "";
}

function deletebtn(button) {
    // Remove the post card where the delete button was clicked
    button.parentNode.parentNode.remove();
}

function editbtn(button) {
    // Reference to the post card where the edit button was clicked
    var postCard = button.closest('.card');

    // Set editingPost to the current post card
    editingPost = postCard;

    // Populate the form fields with the current post data
    var editPost = postCard.querySelector('.ep').innerText;
    var editDescription = postCard.querySelector('.dp').innerText;

    // Display current post content in input fields
    var titleField = document.getElementById("title");
    var descriptionField = document.getElementById("description");

    // Assign current post content to input fields for editing
    titleField.value = editPost;
    descriptionField.value = editDescription;
}
