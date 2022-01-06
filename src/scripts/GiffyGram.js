import { addPost} from "./feed/addPost.js"
import {listPosts} from "./feed/PostList.js"

export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
  <div class="giffygram__addpost">${addPost()}</div>     
  <div class="giffygram__feed">${listPosts()}</div>
    
  <button id="logout">Logout</button>`
}
