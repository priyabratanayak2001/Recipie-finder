function submitclick() {
    var uid = document.getElementById('username').value;  
    if (uid === "") {
        Swal.fire('Warning!', 'Please Enter UserId', 'warning');  
        return false;
    }
    
    var passs = document.getElementById('password').value;  
    if (passs === "") {
        Swal.fire('Warning!', 'Please Enter Password.', 'warning');  
        return false;
    }

    
    const obj = {
        "userid": "john",
        "password": 1234
    };

    
    if (uid === obj.userid && passs === obj.password.toString()) {
        window.location.href = "recipe_search.html"; 
    } else {
        Swal.fire('Error!', 'Invalid username or password.', 'error');  
    }
}

// function submitclick() {
//     var uid = document.getElementById('username').value;
//     var pass = document.getElementById('password').value;

//     if (uid === "") {
//         Swal.fire('Warning!', 'Please Enter UserId', 'warning');
//         return false;
//     }
//     if (pass === "") {
//         Swal.fire('Warning!', 'Please Enter Password', 'warning');
//         return false;
//     }

//     fetch('login.txt')  
//         .then(response => response.json())  
//         .then(data => {
//             console.log("Fetched data:", data);

//             const user = data.find(item => item.userid === uid && item.password == pass);
//             console.log(user);

//             if (user) {  
//                 window.location.href = "recipe_search.html";  
//             } else {
//                 Swal.fire('Error!', 'Invalid username or password.', 'error');
//             }
//         })
//         .catch(error => {
//             console.error("Error fetching login data:", error);
//             Swal.fire('Error!', 'There was an error with the login request. Please try again later.', 'error');
//         });
// }
