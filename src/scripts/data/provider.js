const apiURL = "http://localhost:8088";
const applicationElement = document.querySelector(".giffygram");

const applicationState = {
  users: [],
  posts: [],
  likes: [],
  messages: [],
  currentUser: {},
  feed: {
    chosenUser: null,
    displayFavorites: false,
    displayMessages: false,
  },
};

export const fetchUsers = () => {
  return fetch(`${apiURL}/users`)
    .then((response) => response.json())
    .then((assignedUser) => {
      applicationState.users = assignedUser;
    });
};

export const fetchPosts = () => {
  return fetch(`${apiURL}/posts`)
    .then((response) => response.json())
    .then((assignedPost) => {
      applicationState.posts = assignedPost;
    });
};
export const fetchLikes = () => {
  return fetch(`${apiURL}/likes`)
    .then((response) => response.json())
    .then((assignedLike) => {
      applicationState.likes = assignedLike;
    });
};
export const fetchMessages = () => {
  return fetch(`${apiURL}/messages`)
    .then((response) => response.json())
    .then((assignedMessage) => {
      applicationState.messages = assignedMessage;
    });
};

export const getUsers = () => {
  return applicationState.users.map((user) => ({ ...user }));
};
export const getPosts = () => {
  return applicationState.posts.map((post) => ({ ...post }));
};
export const getLikes = () => {
  return applicationState.likes.map((like) => ({ ...like }));
};
export const getMessages = () => {
  return applicationState.messages.map((message) => ({ ...message }));
};

export const sendUser = (newUser) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  };

  return fetch(`${apiURL}/users`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      document.dispatchEvent(new CustomEvent("stateChanged"));
    });
};
export const sendNewPost = (newPost) => {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  };

  return fetch(`${apiURL}/posts`, fetchOptions)
    .then((response) => response.json())
    .then(() => {
      document.dispatchEvent(new CustomEvent("stateChanged"));
    });
};