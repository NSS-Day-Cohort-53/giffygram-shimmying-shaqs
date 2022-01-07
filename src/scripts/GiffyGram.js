import { addPost } from "./feed/addPost.js";
import { listPosts } from "./feed/PostList.js";
import { sendNewMessage } from "./message/MessageForm.js";
import { navBar } from "./nav/navBar.js";

export const GiffyGram = () => {
  return `
    <nav class="navigation">
    ${navBar()}
    </nav>
   ${sendNewMessage()}

  
  <div class="giffygram__feed">
  ${addPost()}
  ${listPosts()}</div>`;
};
