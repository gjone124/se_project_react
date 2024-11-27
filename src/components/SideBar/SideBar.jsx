import avatar from "../../assets/avatar.svg";

import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-bar">
      <img className="side-bar__avatar" src={avatar} alt="default avatar" />
      <p className="side-bar__username">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
