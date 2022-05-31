import React from 'react'

function List({data}) {
  return (
    <div>
        {data.map(y=>(
          <div>{y}</div>
        ))}
    </div>
  )
}

export default List