export const navBar = () => {
  return `
    <div class="navigation__item navigation__icon">
    <img class="navigation__icon" src="./images/pb.png"></img>
    </div>
    <div class="navigation__item navigation__name">Giffygram</div>
    <div class="navigation__item navigation__search"></div>
    <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="./images/fountain-pen.svg" alt="Direct message">
                <div class="notification__count">
                    0
                </div>
            </div>   
            <div class="navigation__item navigation__logout">
            <button id="logout" class="fakeLink">Logout</button>
        </div>`;
};
