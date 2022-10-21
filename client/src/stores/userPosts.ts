import { ref, reactive} from 'vue'
import session from './session'

const posts = reactive({
    content: null as content | null,
})

const postContent = ref("");
const postDiv = document.createElement("div");
const postHead = document.createElement("h2");
const postDiscription = document.createElement("p");
const postContainer = document.querySelector('.post-container');

export function makePost() {
    var title = (<HTMLInputElement>document.getElementById('title')).value as string
    var content = (<HTMLInputElement>document.getElementById('content')).value as string 
    var username = session.user.username as string
    posts.content = {
        postTitle: title,
        postContent: content,
        postUsername: username,
    },
    
    localStorage.setItem("posts", JSON.stringify(posts.content));

    console.log("making post");
    console.log(posts.content);
    
}


export class content {
    public postTitle?: string;
    public postContent?: string;
    public postUsername?: string;
}


export default posts