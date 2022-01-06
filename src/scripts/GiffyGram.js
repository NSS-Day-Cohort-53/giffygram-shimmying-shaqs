import {listPosts} from "./feed/PostList.js"
import {navBar} from "./nav/navBar.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
    <!-- navBar-->
    ${navBar()}
    
  <p class="listPost">  ${listPosts()}</p>
    `
}
