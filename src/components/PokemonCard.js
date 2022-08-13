import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [spriteIsFront, setSpriteIsFront] = useState(true);
  const {name, hp, sprites} = pokemon;

  return (
    <Card>
      <div onClick={() => setSpriteIsFront(!spriteIsFront)}>
        <div className="image">
          <img src={spriteIsFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
