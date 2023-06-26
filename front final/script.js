

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    
    var usercontent = document.querySelector('.users-content');
    for (var i = 0; i < 6; i++) {       
        var user = `
                    <div class="for-user">
                        <div class="user">
                            <h2 >${jsonData[i].name}</h2>
                            <div>
                                <p class="text">id:${jsonData[i].id}</p>
                                <p class="text">email: ${jsonData[i].email}</p>
                                <p class="text">phone:${jsonData[i].phone}</p>
                            </div>
                            <div class="user-but">
                                <button class="select" value="${jsonData[i].id}">Select User</button>
                            </div>
                        </div>
                    </div>
                `
        
        usercontent.innerHTML += user 
     
    }
    var selects = document.getElementsByClassName('select')
    var userid = document.querySelector('.user-id')
    for (var i = 0; i < selects.length; i++) {
        selects[i].addEventListener('click', function(e) {
            console.log(this.value)
            userid.value = this.value
        })
    }


}

getUsers();




async function postData() {
    var userid = document.querySelector('.user-id').value;
    var title = document.querySelector('.title').value;
    var body = document.querySelector('.body').value;

    const rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userid, title: title, body: body })
    });

    const content = await rawResponse.json();

    console.log(content);
}




async function getPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const jsonData = await response.json();
    
    var cont = document.querySelector('.container')
    for (var i = 0; i < 6; i++) {
        console.log(jsonData[i].url)
        var img = `
            <img src="${jsonData[i].url}" alt="no img">
        `
        cont.innerHTML += img
    }


}
getPhotos();