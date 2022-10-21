import { reactive } from "vue";
import userData from "../assets/users.json"
import router from "../router/index"

const session = reactive( {
    user: null as User | null,
});

export function getInfo() {
	var username = document.getElementById('username').value as string
	var password = document.getElementById('password').value as string

	for(var i = 0; i < userData.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == userData[i].username && password == userData[i].password) {
			var isAdministrator = userData[i].isAdmin as boolean
            console.log(username + " is logged in!!!")
            session.user = {
                username,
                password,
                isAdministrator,
            }
            console.log(session.user)
            router.push({ path: '/'});
			// stop the function if this is found to be true
			return
		}
	}
}

export function isSignedIn() {
    if (session.user === null) {
        router.push({ path: '/login'});
    }
    else {
        return true;
    }
}

export function logout() {
    session.user = null;
    console.log("logged out");
    
}
export function who() {
    console.log(session.user);
    return session.user;
}

export function goHome() {
    router.push({ path: '/'});
}

export function goLogin() {
    router.push({ path: '/login'});
}

export class User {
    public username?: string;
    public password?: string;
    public isAdministrator?: boolean;
}


export default session;
