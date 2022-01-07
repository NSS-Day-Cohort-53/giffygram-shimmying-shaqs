import { sendUser } from "../data/provider.js"


const applicationElement = document.querySelector(".giffygram")

export const registrationForm = () => {
    let html = `
   </h2>Register New User</h2>
    <div class="field">
            <label class="label" for="userName" >Name</label>
            <input type="text" name="userName" placeholder="Name" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="userEmail" >Email</label>
            <input type="text" name="userEmail" placeholder="Email" class="input" />
        </div> 
        <div class="field">
            <label class="label" for="userPassword">Password</label>
            <input type="password" name="userPassword" placeholder="Password" class="input" />
        </div>
        <button class="button" id="registerNewUser">Register</button> `
        return html
}

applicationElement.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "registerNewUser") {
        const newUserName = document.querySelector("input[name='userName']").value
        const newUserEmail = document.querySelector("input[name='userEmail']").value 
        const newUserPassword = document.querySelector("input[name='userPassword']").value

        const dataToSendToAPI = {
            name:newUserName,
            email: newUserEmail,
            password: newUserPassword

        }
        sendUser(dataToSendToAPI)
    }
})