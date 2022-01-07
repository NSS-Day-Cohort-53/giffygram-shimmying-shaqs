import { getPosts } from "../data/provider.js";

// const converRquestToListElement = (request) => {
//   const postDate = request.timestamp;
//   const convertedDate = new Date(postDate * 1000);
//   const postYear = convertedDate.toLocaleString("en-US", { year: "numeric" });
//   console.log(convertedDate);

//   return `<li>  ${request.title}
//     <img src="${request.imageURL}"></img>
//     Description: ${request.description}.
//     By ${request.author}.
//     Year: ${postYear}
//     </li>`;
// };

// const filteredPostsLists = (year) => {
//   const allPosts = getPosts();
//   const correctYear = [];

//   for (const post of allPosts) {
//     const convertedDate = new Date(post.timestamp * 1000);
//     const postYear = convertedDate.toLocaleString("en-US", { year: "numeric" });
//     post.timestamp = postYear;
//     correctYear.push(post);
//   }

//   const filteredPosts = correctYear
//     .filter((post) => post.timestamp === year)
//     .map((taco) => {
//       return `<li>  ${taco.title}
//         <img src="${taco.imageURL}"></img>
//         Description: ${taco.description}.
//         By ${taco.author}.
//         Year: ${taco.timestamp}
//         </li>`;
//     });

//   return filteredPosts;
// };

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

const htmlRepresentation = (post) => {
  return `<li>  ${post.title} 
    <img src="${post.imageURL}"></img>
    Description: ${post.description}.
    By ${post.author}.
    Year: ${post.timestamp}
    </li>`;
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
    
    // if (filterObj.selectedUserId) {
    //   const taco = correctYearArray()
    //   let postsUserFilter = taco.filter(
    //     (entry) => entry.
    //   )
    // }
    
    // Filtering condition for liked posts

  } else {
    posts = correctYearArray();
    let html = `${posts.map(htmlRepresentation).join("")}`;
    return html;
  }
};