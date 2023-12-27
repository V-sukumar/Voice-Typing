import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";

export const Home = () => {
  const start=()=>SpeechRecognition.startListening({ continuous: true, language:'en-IN' })
//  const stop=()=>SpeechRecognition.stopListening()
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition()
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy,{successDuration:500});


  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div>
      <h2>Voice to Type Converter</h2>
      <p>Please Click on the start button to start the voice typing</p>
      <div style={{border:'1px solid black',height:'50vh',margin:'auto',width:"80%"}} onClick={() =>  setTextToCopy(transcript)}>{transcript}
      </div>
      <div style={{display:"flex", justifyContent:"space-evenly" ,margin:"auto",marginTop:"10px"}}>
      <button onClick={setCopied}>{isCopied ? 'Copied!' : 'Copy to clipboard'}
      </button>
        <button onClick={start}>Start</button>
        <button  onClick={SpeechRecognition.stopListening}>Stop</button>
      </div>
    </div>
  )
}
