import {listPosts} from "./feed/PostList.js"

export const GiffyGram = () => {

    // Show main main UI
    return `<h1>Giffygram</h1>
  <p>  ${listPosts()}</p>
    <button id="logout">Logout</button>`
}
