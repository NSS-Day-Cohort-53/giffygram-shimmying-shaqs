import { getPosts, getUsers, getLikes } from "../data/provider.js"



export const Footer = () => {
    let html = `<div class="footer"
    <p class="footer_item">Posts since</p><select name="year" id="year" class="footer_item">
        <option value="default">Year</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
    </select>
    <br>
    <p class="footer_item">Posts by user</p><select name="user" id="user" class="footer_item">
        <option value="default">User</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    <br>
    <p class="footer_item">Show only favorites</p><input type="checkbox" name="favorite" id="favorite" class="footer_item">
</div>
    `
    return html
}

document.addEventListener("change", (event) => {
    if (event.target.name === "year") {
      const selectedYear = event.target.value;
  
      document.dispatchEvent(new CustomEvent("filter", { detail: {
          selectedYear
      }}));
    }
  });

  
document.addEventListener("change", (event) => {
    if (event.target.name === "user") {
      const selectedUserId = event.target.value;
  
      document.dispatchEvent(new CustomEvent("filter", { detail: {
          selectedUserId
      }}));
    }
  });