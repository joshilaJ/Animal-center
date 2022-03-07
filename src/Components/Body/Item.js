import React from 'react'

const Item = ({name,address}) => {
  return (
    <div>
            {console.log(name)}

        <li>{name}</li>
    </div>
  )
}

export default Item