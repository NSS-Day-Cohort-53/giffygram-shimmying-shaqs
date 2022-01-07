import {listPosts} from "./feed/PostList.js"
import { Footer } from "./nav/Footer.js"

export const GiffyGram = (filterObj) => {

    // Show main main UI
    return `<h1>Giffygram</h1>
  <p>  ${listPosts(filterObj)}</p>
    <button id="logout">Logout</button>
  ${Footer()}`
}