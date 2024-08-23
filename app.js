document.getElementById("form").addEventListener('submit',function(e){
    e.preventDefault();
    var email=document.getElementById("exampleInputEmail1").value;
    var password=document.getElementById("exampleInputPassword1").value;

    var post = document.getElementById("post");
    post.innerHTML+=` <div class="p-4 col-10">
                <div class="card p-2">
                    <div class="mb-3">
                    <h3>You are ready to post</h3>
                        <label for="exampleFormControlInput1" class="form-label">Title:</label>
                        <input id="title" type="text" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description:</label>
                        <textarea id="description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <div class="mt-3">
                            <button onclick="post()" class="btn">Post</button>
                        </div>
                    </div>
                </div>
            </div>`;
            document.getElementById("form").classList.add("hidden");
           
})

// var title = document.getElementById("title")
// var description  = document.getElementById("description")


 
        function post(){
            var title = document.getElementById("title")
            var description  = document.getElementById("description")

        if(title.value === ""){
            Swal.fire({
                title: "Empty Post",
                text: "Write something",
                icon: "question"
              });
        }

            else{
                var post = document.getElementById("post");
            post.innerHTML+=`
             <div class="card p-2">
                            <div class="card-header">
                              <em>@post</em>
                            </div>
                            <div class="card-body">
                              <blockquote class="blockquote mb-0">
                                <p>${title.value}</p>
                                <footer class="blockquote-footer">${description.value}</footer>
                              </blockquote>
                            </div>
                          </div>
            `
            title.value =""
            description.value = ""
        }
       
            }
            
    
    
    
    
    