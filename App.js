import React, { Component } from 'react';
import './App.css';
//import img from './1.jpg';
import img from './Syed Atif Saeed.jpg';
import img2 from './Elon Musk.jpg';
import ChatWin from './ChatWin';

class App extends Component {


  state={
          user://this array of objects contains information about individual users
              [ 
                {
                  chatId: 1,
                  chatName:"Syed Atif Saeed",
                  image: img
                }
                  ,
                {
                  chatId:2,
                  chatName:"Elon Musk",
                  image: img2
                }
              ],
          messages://this array of objects contains a record of ALL messages shared between the 2 users, chatID links which user has sent th emessage
              [
                {
                  chatId: 2,//chatID 2 means Elon Musk sent this message
                  messageSent:"Hello Atif"
                },
                {
                  chatId: 1,
                  messageSent:"Yes Elon? Whatsup?"
                },


              ]      
        };

  chatUpdate = (newMsg) => { //newMsg is an object which contains the "NEW typed message and chatID"(sent back from compnent)
    const messages=this.state.messages//Step1: Temporarily copy current state of messages into a variable called messages
    messages.push(newMsg)//Step2: Push the newMsg(New message+chatID) at the end of the above message variable
    this.setState({messages})//Step3: Copy the updated message variable into the state
  }
  


  render() {
  const InitWin=this.state.user;//copy users into Initwin 

    return (
            <div className="bigcontainer">
             {InitWin.map((user)=>//Initwin is used to count the number of users and create copies of chat windows using map
               <ChatWin user={user} messages={this.state.messages} chatUpdate={this.chatUpdate}/>
              //The above component chatWin is the chat window, its Input is single users data(because of map applied) and all messages from current state.It also sends back NEW message data as output so that state can be updated.
         )} 
                
            </div>  
    );
  }
}

export default App;
