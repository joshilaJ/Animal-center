import React from 'react'
import './SendInfo.css'
const SendInfo = ({onSend}) => {
  return (
    <div>
        <ul>
            {console.log(onSend)}
            {onSend.map((send,i)=>(<li key={i} >{send.name}</li>)
            )}
        </ul>
    </div>
  )
}

export default SendInfo