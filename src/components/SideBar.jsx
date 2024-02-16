import React, { useState } from 'react'
import Data from './Data.json'
import { BarItems } from './BarItems'
export const SideBar = () => {
  const [selectedItem, setSelected] = useState(0)

  const active = {
    backgroundColor: 'red',
  }

  return (
    <div>
      {Data.map(item => {
        return (
          <div
            style={active}
            key={item.id}
            onClick={() => setSelected(item.id)}
          >
            <h1>{item.place}</h1>
            <p>{item.message}</p>
          </div>
        )
      })}
    </div>
  )
}
