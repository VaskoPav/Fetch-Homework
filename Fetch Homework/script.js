// Users
function printUsers(response,storeResult){
    if(response !== undefined&& response.length>0){
        for (const user of response) {
            storeResult.innerHTML+=`<ol> ${user.id}.Name ${user.name} ${user.username} </ol>`
            
        }
    }
}

document.getElementById("fetch").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then(result=>{
        let userResult=document.getElementById("fetchResult")
        printUsers(result,userResult);
    })
    .catch(error=>console.error(error))
})

// omnis
document.getElementById("albumsAll").addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response=>response.json())
    .then(albums=>{
        let allAlbumsResult=document.getElementById("allAlbumsResult");
        for (const album of albums) {
            allAlbumsResult.innerHTML+=`<li>Album ${album.id} ${album.title}</li>`
        }
    })
    .catch(error=>console.error(error));
})
// Create New user

function newPostMy(userId,name,username){
    fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            body:JSON.stringify({
                userId:userId,
                name:name,
                username:username,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
        .then(response=>response.json())
        .then(function(jsonpostmy){
            console.log("Successfully created new post my", jsonpostmy)
        })
        .catch(function(error){console.error(error)})
}
document.getElementById("createPostButton").addEventListener("click", function(){
    let userIdValue=document.getElementById("createPostUserId").value;
    let nameValue=document.getElementById("createName").value;
    let usernameValue=document.getElementById("createUsernema").value;

    newPostMy(userIdValue,nameValue,usernameValue);
})

// Delete button
document.getElementById("deleteRandomPost").addEventListener("click", function(){
    let randomNumberDelete = Math.floor(Math.random() * 201);

    fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumberDelete}`,{
        method: "DELETE"
    })
    .then(response => response.json())
    .then(deletedPostTodo => console.log(`The random Todo  is ${randomNumberDelete}, and will delete `, deletedPostTodo))
    .catch(error => console.error(error));
})