import { getUsers, sendNewPost } from "../data/provider.js";

const applicationElement = document.querySelector(".giffygram");

export const addPost = () => {
  return addPostDisplay;
};

applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "addNewPostForm") {
    addPostDisplay = addPostForm();
    document
      .querySelector(".giffygram")
      .dispatchEvent(new CustomEvent("stateChanged"));
  }
});
applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "cancelNewPost") {
    addPostDisplay = addPostButton();
    document
      .querySelector(".giffygram")
      .dispatchEvent(new CustomEvent("stateChanged"));
  }
});
const addPostForm = () => {
  let html = `
<div class="newPost"> 
    </h2>New GIF Post</h2>
    <div class="field">
            <label class="label" for="postTitle" >Title</label>
            <input type="text" name="postTitle" placeholder="Title" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="postURL" >URL</label>
            <input type="text" name="postURL" placeholder="GIF URL" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="postDescription">Tell us about your GIF</label>
            <input type="text" name="postDescription" placeholder="Tell us about your GIF" class="input" />
        </div>
        <button class="button" id="addNewPost">Add Post</button><button class="button" id="cancelNewPost">Cancel</button>
</div> `;
  return html;
};

const addPostButton = () => {
  let html = `<button id="addNewPostForm">Have a GIF to add?</button>`;
  return html;
};

let addPostDisplay = addPostButton();

applicationElement.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "addNewPost") {
    const postUserId = localStorage.getItem("gg_user");
    const postTitle = document.querySelector("input[name='postTitle']").value;
    const postURL = document.querySelector("input[name='postURL']").value;
    const postDescription = document.querySelector(
      "input[name='postDescription']"
    ).value;

    const dataToSendToAPI = {
      userId: parseInt(postUserId),
      title: postTitle,
      imageURL: postURL,
      description: postDescription,
      timestamp: Date.now(),
    };
    sendNewPost(dataToSendToAPI);
  }
});
