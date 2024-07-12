import EightBall from './EightBall'
import eightBallMsgs from './default_msgs'

function App() {

  return (
    <EightBall msgs={eightBallMsgs} msgCount={eightBallMsgs.length}/>
  )
}

export default App
