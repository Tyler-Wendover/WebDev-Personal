var users = [
    {
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin',
    },
    {
        username: 'tyler',
        email: 'tyler@example.com',
        password: 'password',
    },
    {
        username: 'david',
        email: 'david@example.com',
        password: 'password',
    }
]

export function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < users.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == users[i].username && password == users[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
}

export default users;


////////// Move this to session.ts //////////
////////// after checking is user is valid apply it to session ////////// 