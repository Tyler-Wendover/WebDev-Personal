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
	var username = (<HTMLInputElement>document.getElementById('username')).value
	var password = (<HTMLInputElement>document.getElementById('password')).value

	for(var i = 0; i < users.length; i++) {
		if(username == users[i].username && password == users[i].password) {
			console.log(username + " is logged in!!!")
			return
		}
	}
	console.log("incorrect username or password")
}

export default users;
