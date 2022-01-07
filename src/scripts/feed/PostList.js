import { getPosts, getUsers } from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram")

const htmlRepresentation=(post)=>{
return `<section class="post">  
<header>
<h2 class="post__title">${post.title}</h2> 
<img class="post__image" src="${post.imageURL}"></img>
<div class="post__description">${post.description}</div>
<div class="post__tagline">
Posted by: ${displayPostAuthor(post)}
Year: ${post.timestamp}
</div>
</section>  `}

const correctYearArray = () => {
  let correctedDates = [];
  const allPosts = getPosts();
  for (const post of allPosts) {
    const convertedDate = new Date(post.timestamp * 1000);
    const postYear = convertedDate.toLocaleString("en-US", { year: "numeric" });
    post.timestamp = postYear;
    correctedDates.push(post);
  }
  return correctedDates;
};
export const listPosts = (filterObj) => {
  let posts;
  if (filterObj) {
    console.log(filterObj)

    if (filterObj.selectedYear) {
      const taco = correctYearArray()
      let postsYearFilter = taco.filter(
        (entry) => entry.timestamp === filterObj.selectedYear
      );
      posts = postsYearFilter;
      let html = `${posts.map((taco) => htmlRepresentation(taco)).join("")}`;
      return html;
      }
  } else {
    posts = correctYearArray();
    let html = `${posts.map(htmlRepresentation).join("")}`;
    return html;
  }
};

const displayPostAuthor = (post) => {
    const users = getUsers()
    const postUser = users.find((user) => user.id === post.userId )
    return postUser.name 
}