////////////////////////////////////////////////////////////////////////////////
//////////////Not working properly but am leaving to fix later//////////////////
////////////////////////////////////////////////////////////////////////////////
const postSubmit = document.getElementById("post-submit") as HTMLFormElement;
const postContainer = document.querySelector("posts-container") as HTMLDivElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const discriptionInput = document.getElementById("discription") as HTMLInputElement;

const posts = JSON.parse(localStorage.getItem("posts"));

if (typeof posts === 'string') {
  const parse = JSON.parse(posts);
}

const addPost = (title: string , discription: string) => {
  posts.push({
    title ,
    discription,
  });

  localStorage.setItem("posts", JSON.stringify(posts));

  return { title, discription };
};

const createPostElement = ( title: string , discription: string ) => {

  const postDiv = document.createElement("div");
  const postTitle = document.createElement("h2");
  const postDiscription = document.createElement("p");


  postTitle.innerText = title;
  postDiscription.innerText = discription;

  postDiv.append(postTitle, postDiscription);
  postContainer.appendChild(postDiv);

};



posts.forEach(createPostElement);

postSubmit.onsubmit = e => {
  e.preventDefault();

  const newPost = addPost(
    titleInput.value,
    discriptionInput.value,
  );

 // createPostElement(newPost);

  titleInput.value = "";
  discriptionInput.value = "";
};

export default posts;