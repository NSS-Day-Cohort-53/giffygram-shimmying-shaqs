import { getPosts, getUsers } from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram")


    const converRquestToListElement=(request)=>{
return `<li>  ${request.title} 
<img src="${request.imageURL}"></img>
Description:${request.description}
by ${displayPostAuthor(request)}
</li>  `


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