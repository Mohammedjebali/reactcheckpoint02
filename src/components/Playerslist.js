import React from 'react'
import players from './players'
import Player from './Player'
function Playerslist() {
  return (
    <div style={{display:"flex",justifyContent:"space-around"}}>
        {players.map(el=>
        <Player player={el}/>

        )}
    </div>
  )
}

export default Playerslist