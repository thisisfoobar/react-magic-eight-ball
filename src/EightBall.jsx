import { useState } from "react";
import { getRandom } from "./random";
import "./EightBall.css"

const EightBall = ({ msgs, msgCount }) => {
  const startMsg = "Ask me a question!"
  const[shake,setShake] = useState(false)
  const[msg,setMsg] = useState(startMsg)
  const[ballColor,setBallColor] = useState("black")
  const[restartMsg,setRestartMsg] = useState(null)
  let answer;
  let shakeAgain = null;
  function handleClick() {
    answer = msgs[getRandom(msgCount)]
    setShake(true);
    setMsg(answer.msg)
    setBallColor(answer.color)
    setRestartMsg("Click to start again!")
  }

  function resetClick() {
    setShake(false);
    setMsg(startMsg);
    setBallColor("black");
    setRestartMsg(null);
  }

  return (
    <div className='EightBall'>
      <h1>EIGHT BALL</h1>
      
      <div className='EightBall-Ball' onClick={() => shake ? resetClick() : handleClick()} style={{backgroundColor: ballColor}}>
          {msg}
      </div>
      <p>{restartMsg}</p>
    </div>
  );
};

export default EightBall;
