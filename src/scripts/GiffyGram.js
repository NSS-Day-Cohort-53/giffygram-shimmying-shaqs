import { addPost } from "./feed/addPost.js";
import { listPosts } from "./feed/PostList.js";
import { sendNewMessage } from "./message/MessageForm.js";
import { navBar } from "./nav/navBar.js";
import { Footer } from "./nav/Footer.js";

export const GiffyGram = (filterObj) => {
  return `
    <nav class="navigation">
    ${navBar()}
    </nav>
   ${sendNewMessage()}

  
  <div class="giffygram__feed">
  ${addPost()}
  ${listPosts(filterObj)}</div>
  ${Footer()}`;
};
