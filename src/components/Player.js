import React from 'react'
import Card from 'react-bootstrap/Card';

function Player({player}) {
  return (
    <div><Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={player.img} style={{height:"300px",}} />
    <Card.Body>
      <Card.Title>{player.name}</Card.Title>
      <Card.Text>
    nationality:    {player.nationality}
      </Card.Text>
      <Card.Text>
    Team:    {player.team}
      </Card.Text>
      <Card.Text>
      Number:  {player.jersynumber}
      </Card.Text>
      <Card.Text>
      Age:  {player.age}
      </Card.Text>
    </Card.Body>
  </Card></div>
  )
}
Player.defaultProps={
    Player:{Name:"unknown player",Nationality:"tunisia",age:0, team:"unknown team",jersynumber:99,Img:"https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"}
}
export default Player