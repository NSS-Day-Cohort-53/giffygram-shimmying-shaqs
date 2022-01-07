import { getPosts, getUsers } from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram")


    const converRquestToListElement=(request)=>{
return `<section class="post">  
<header>
<h2 class="post__title">${request.title}</h2> 
<img class="post__image" src="${request.imageURL}"></img>
<div class="post__description">${request.description}</div>
<div class="post__tagline">
Posted by: ${displayPostAuthor(request)}
</div>
</section>  `


    }


    export const listPosts = () => {

        const listPost=getPosts()

        let html =`
            ${listPost.map(converRquestToListElement).join("")}
        `
        return html
}


const displayPostAuthor = (post) => {
    const posts = getPosts()
    const users = getUsers()
    const postUser = users.find((user) => user.id === post.userId )
    return postUser.name 
}