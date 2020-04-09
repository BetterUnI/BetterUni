import React from "react";
import "./style.scss";
import Avatar from "../Avatar";
import videoCallRed from "./resources/video-call-red-icon.svg";
import { CometChat } from "@cometchat-pro/chat";

class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: {},
      toggleUserProfile: false
    };
  }
  toggleUserProfile = () => {
    this.setState(
      {
        toggleUserProfile: !this.state.toggleUserProfile
      },
      this.state.onActionGenerated("toggelProfile", {
        toggleUserProfile: !this.state.toggleUserProfile
      })
    );
  };
  makeAudioCall = () => {
    let receiverID;
    let callType = CometChat.CALL_TYPE.AUDIO;
    let receiverType = CometChat.RECEIVER_TYPE.USER;

    if (this.state.type === "group") {
      receiverID = this.state.item.guid;
      receiverType = CometChat.RECEIVER_TYPE.GROUP;
    } else {
      receiverID = this.state.item.uid;
      receiverType = CometChat.RECEIVER_TYPE.USER;
    }

    let call = new CometChat.Call(receiverID, callType, receiverType);

    CometChat.initiateCall(call).then(
      call => {
        console.log("Call initiated successfully:", call);
        this.state.onActionGenerated("audioCallInitiated", { call: call });
      },
      error => {
        console.log("Call initialization failed with exception:", error);
      }
    );
  };
  makeVideoCall = () => {
    let receiverID;
    let callType = CometChat.CALL_TYPE.VIDEO;
    let receiverType = CometChat.RECEIVER_TYPE.USER;

    if (this.state.type === "group") {
      receiverID = this.state.item.guid;
      receiverType = CometChat.RECEIVER_TYPE.GROUP;
    } else {
      receiverID = this.state.item.uid;
      receiverType = CometChat.RECEIVER_TYPE.USER;
    }

    let call = new CometChat.Call(receiverID, callType, receiverType);

    CometChat.initiateCall(call).then(
      call => {
        console.log("Call initiated successfully:", call);
        this.state.onActionGenerated("videoCallInitiated", { call });
      },
      error => {
        console.log("Call initialization failed with exception:", error);
      }
    );
  };
  static getDerivedStateFromProps(props, state) {
    return props;
  }
  render() {
    return (
      <div className="cp-chatheader">
        {this.state.type === "user" ? (
          <div style={{ display: "flex" }}>
            <div className="cp-chat-avatar">
              <Avatar src={this.state.item ? this.state.item : ""}></Avatar>
            </div>
            <div className=" col cp-user-info">
              <div className="cp-username font-bold">
                {this.state.item ? this.state.item.name : ""}{" "}
              </div>
              <div className="cp-chathead-buttons ">
                <button onClick={this.makeVideoCall}>
                  <img src={videoCallRed} alt="video call" />
                </button>
              </div>
              <div className="row cp-userstatus">
                <span className="cp-text-blue">
                  {" "}
                  {this.state.item ? this.state.item.status : ""}{" "}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <div className="cp-chat-avatar">
              <Avatar src={this.state.item ? this.state.item : ""}></Avatar>
            </div>
            <div className="col cp-user-info">
              <div className="cp-username font-bold">
                {this.state.item ? this.state.item.name : ""}{" "}
              </div>
              <div className="cp-chathead-buttons ">
                <button onClick={this.makeVideoCall}>
                  <img src={videoCallRed} alt="video call" />
                </button>
              </div>

              <div className=" row cp-userstatus">
                <span className="cp-text-blue">
                  {" "}
                  {this.state.item ? this.state.item.type : ""}{" "}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ChatHeader;
export const chatHeader = ChatHeader;

ChatHeader.defaultProps = {};
