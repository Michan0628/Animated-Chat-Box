# Animated Chat box

This is a animated chat box building by React, javascript and a little bit of css.\
[View Demo](https://animated-chat-box.netlify.app/) - [Source Code](https://github.com/Michan0628/Animated-Chat-Box)
## Skills used in this app

### 1. useState()
useState is a React Hook that lets you add React state to function components. With Hook, you don't hav to convert function component to a class component anymore.
You can read more about how to use it on [React Doc](https://overreacted.io/making-setinterval-declarative-with-react-hooks/).
### 2. useInterval timer
[useInterval](https://github.com/donavon/use-interval) is a custom React Hook that provides a declarative setInterval.
```javascript
//It accepts two parameters:
useInterval(callback, delay)
```
The callback is a function that will be called every delay milliseconds, delay is a number in milliseconds, it can be set to null to pause the interval.
I used it with useState hook. The number of messageToShow will increment by one in every two seconds. So that the messages are shown one by one: If the index of the message is greater than the state messageToShow, the message will not be shown.
```javascript
const [messageToShow, setMessageToShow] = useState(0);

useInterval(() => {
    setMessageToShow((messageToShow) => messageToShow + 1);
  }, 2000);

return (
    <div className='app'>
      <div className='walkthrough'>
        {messages.map((message, index) => {
          const isEven = index % 2 === 0;
          // When are we supposed to show typing indicator
          if (messageToShow + 1 === index) {
            return <TypingIndicator key={index} isEven={isEven} />;
          }

          // Show the messages one by one
          if (index > messageToShow) {
            return <div key={index} />;
          }
          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
```

There are more information about the difference of setInterval and useInterval in [Dan Abramov's blog post](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
### 3. Framer Motion API
[Motion API](https://www.framer.com/api/motion/) is production-ready animation and gesture library.
In this project, the chat box and typing dots are controlled via the motion component's animate prop. The animate prop accept objects, variant label, or refrence to imperative animation controls.
The initial is the starting state of the animation, the animate prop is the end state of the animation.

For this Message component, it starts from scale 0.5, and animate to scale 1.
```javascript
function Message({ message }) {
  return (
    <motion.div
      className='message'
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
    >
      <div className='avatar'>🐶</div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>🐱</div>
    </motion.div>
  );
}
```
### 4. animation-delay
The animation-delay CSS property specifies the amount of time to wait from appying the animation to an element before beginning to perform the animation.
In the project, the three dots are applied to different time of animation delay so that they will bounce at different levels.
```css
.dots > div:first-child {
  animation-delay: 0.1s;
}

.dots > div:nth-child(2) {
  animation-delay: 0.2s;
}

.dots > div:last-child {
  animation-delay: 0.3s;
}
```
