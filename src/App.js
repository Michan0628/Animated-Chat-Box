import React, { useState } from 'react';
import useInterval from '@use-it/interval';
import './App.css';
import { motion } from 'framer-motion';

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
          const isEven = index % 2 === 0;
          // are we supposed to show typing indicator?
          if (messageToShow + 1 === index) {
            return <TypingIndicator key={index} isEven={isEven} />;
          }

          // Logic: Are we supposed to show this message?
          if (index > messageToShow) {
            return <div key={index} />;
          }
          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

function TypingIndicator({ isEven }) {
  return (
    <motion.div className={`typing ${isEven ? 'is-right' : 'is-left'}`} initial={{rotate:10, scale:0}} animate={{rotate:0, scale:1}}>
      <div className='dots'>
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  );
}

function Message({ message }) {
  return (
    <motion.div
      className='message'
      initial={{ rotate:-5, scale: 0.5 }}
      animate={{ rotate:0, scale: 1 }}
    >
      <div className='avatar'>🐶</div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>🐱</div>
    </motion.div>
  );
}
