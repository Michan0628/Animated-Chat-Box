import React, {useState} from 'react';
import useInterval from '@use-it/interval';
import './App.css';

const messages = [
  { text: 'How do I get better at React?' },
  { text: 'Just build something!' },
  { text: 'OK! What should I build?' },
  { text: 'Iono. Just Google it?' },
  { text: 'Oh! This course looks cool!' },
  { text: 'Send me the link?!' },
  { text: '20ReactApps.com!' },
];

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow((messageToShow) => messageToShow + 1);
  }, 2000);

  return (
    <div className='app'>
      <div className='walkthrough'>
        {messages.map((message, index) => {
          // are we supposed to show typing indicator?
          if (messageToShow + 1 === index) {
            return <TypingIndicator key={index}/>
          }

          // Logic: Are we supposed to show this message?
          if(index > messageToShow){
            return <div key={index} />
          }
          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

function TypingIndicator(){
  return (
    <div className="typing is-right is-left">
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}


function Message({ message }) {
  return (
    <div className='message'>
      <div className='avatar'>🐶</div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>🐱</div>
    </div>
  );
}
