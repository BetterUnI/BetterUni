import React from "react";
import "./style.scss";
import CometChatUserList from "../CometChatUserList";
import CometChatConversationList from "../CometChatConversationList";
import peopleGrey from "./resources/people-grey-icon.svg";
import peopleRed from "./resources/people-red-icon.svg";
import historyGrey from "./resources/history-grey-icon.svg";
import historyRed from "./resources/history-red-icon.svg";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "",
      activeTab: "contacts"
    };
  }

  onTabChange(tab) {
    this.setState({
      activeTab: tab
    });
  }
  static getDerivedStateFromProps(props, state) {
    return props;
  }
  render() {
    return (
      <div className="cp-navbar">
        <div className="cp-navbar">
          {(() => {
            switch (this.state.activeTab) {
              case "contacts":
                return (
                  <CometChatUserList
                    onItemClick={this.props.onItemSelected}
                  ></CometChatUserList>
                );
              case "calls":
                return "calls";
              case "conversations":
                return (
                  <CometChatConversationList
                    onItemClick={this.props.onItemSelected}
                  ></CometChatConversationList>
                );

              default:
                break;
            }
          })()}
        </div>
        <div className="tab">
          <button onClick={() => this.onTabChange("contacts")}>
            <img
              src={this.state.activeTab === "contacts" ? peopleRed : peopleGrey}
              alt="contacts"
            />
          </button>
          <button onClick={() => this.onTabChange("conversations")}>
            <img
              src={
                this.state.activeTab === "conversations"
                  ? historyRed
                  : historyGrey
              }
              alt="conversations"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default NavBar;
export const navBar = NavBar;

NavBar.defaultProps = {
  src: ""
};
