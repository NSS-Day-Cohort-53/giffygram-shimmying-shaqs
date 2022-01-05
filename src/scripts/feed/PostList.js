import { getPosts } from "../data/provider.js";
const applicationElement = document.querySelector(".giffygram")


    const converRquestToListElement=(request)=>{
return `<li>  ${request.title} 
<img src="${request.imageURL}"></img>
Description:${request.description}
by ${request.author}
</li>  `


    }


    export const listPosts = () => {

        const listPost=getPosts()

        let html =`
            ${listPost.map(converRquestToListElement).join("")}
        `
        return html
}