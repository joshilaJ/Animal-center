import React, { Fragment,useRef } from 'react'
import './SubHeader.css'
const SubHeader = () => {
  const searchRef=useRef();
  const img='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'

  
  const submitHandler=(event)=>{
    event.preventDefault();
    const search=searchRef.current.value;
    if(!search){
      console.log('enter search bar')
    }
  }
  return (
    <Fragment>
      
        <div className='wrapper'>
    <div className=' item1'>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='search' ref={searchRef}></input>
        <button>search Domain</button>
        </form>
    </div>
    </div>
        <div style={{ backgroundImage:`url(${img})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", height:900,width:1120
     }}>
     <h1 className='text'>Welcome to the  Animal Center</h1>
    </div>
</Fragment>
  )
}

export default SubHeader