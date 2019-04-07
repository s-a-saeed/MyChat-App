import React, { Component } from 'react';
//import img from './1.jpg';
import Send from '@material-ui/icons/Send';
import Attachment from '@material-ui/icons/Attachment';

class ChatWin extends Component {
  
  newTextTyped = () => {
    const chatUpdate=this.props.chatUpdate;//receive the chatUpdate method from app.js so that value can be sent back to state
    const textVal = document.getElementById(this.props.user.chatId).value;//put the newly typed message into texVal
    document.getElementById(this.props.user.chatId).value="" //Clear the input box
    const newMsg = ({chatId: this.props.user.chatId, messageSent:textVal}) // put the chatID and newly typed message into newMSG object
    chatUpdate(newMsg);//send the newMsg back to app.js so that the state can be updated
   }

  render() {
    const {user}=this.props;//receives single user data from the array of object by App.js
    const {messages}=this.props;//receives all messages sent from App.js

    return (
      /*------------------------CHAT WINDOW TITLE---------------------------*/
      <div className="eachWin">
      <div className="container1">
            <img src={user.image}/> {/*Displays user image*/}
            <p class="title">{user.chatName}</p> {/*Displays user name*/}
       </div>


       {/*------------------------CHAT MESSAGE DISPLAY BOX---------------------------*/}
       <div className="container2">
       {
        messages.map( (messages)=>//Function will go through all values of message array object to display messages one by one
            (
              (user.chatId===messages.chatId)//This is to check if message to be displayed from the message object was sent by current user? or by the person he/she is chatting with
              ?(<p className ="formatActive">{messages.messageSent}</p>) // If current user sent it apply formatActive
              :(<p className ="formatInActive">{messages.messageSent}</p>) // If the other person sent it apply formatinActive
            )
        )
      }
       </div>

 {/*------------------------CHAT MESSAGE INPUT BOX---------------------------*/}

       <div className="container3">
             <input type="textarea" name="chatText" id={user.chatId}/>{/*Will contain the newly typed message. Notice that id is different for both users */}
             <div className="header-icons">
                <Send className="icons" onClick={this.newTextTyped}/>{/*Will execute the function to add newly typed message to state*/}
                 <Attachment className="icons"/>
             </div>
       </div>
     </div>
            
           );
  }
}

export default ChatWin;
