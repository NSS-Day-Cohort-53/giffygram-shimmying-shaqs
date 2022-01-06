import { addPost} from "./feed/addPost.js"
import {listPosts} from "./feed/PostList.js"
import {navBar} from "./nav/navBar.js"

export const GiffyGram = () => {
    return `
    <!-- navBar-->
    ${navBar()}
    
  <div class="giffygram__newPost">${addPost()}</div>     
  <div class="giffygram__feed">${listPosts()}</div>`

}
