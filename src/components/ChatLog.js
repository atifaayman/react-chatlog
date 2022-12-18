import React from 'react'
import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, handleLikes }) => {
  
  const chatMessagesData = entries.map((entry)=>{
    
    return (
      <ChatEntry  key={entry.id}
      id = {entry.id}
      sender={entry.sender} 
      body={entry.body} 
      timeStamp={entry.timeStamp}
      liked ={ entry.liked }
      handleLikes={handleLikes}
      />
    )
  }
  )

  return (
    <div>
      {chatMessagesData}
    </div>
  )
  };  

  ChatLog.propTypes = { 
    entries:PropTypes.arrayOf(
      PropTypes.shape({
        id:PropTypes.number.isRequired,
        sender:PropTypes.string.isRequired,
        body:PropTypes.string.isRequired,
        timeStamp:PropTypes.string.isRequired,
        liked:PropTypes.bool.isRequired,    
})),
  handleLikes:PropTypes.func.isRequired
  };

export default ChatLog ;