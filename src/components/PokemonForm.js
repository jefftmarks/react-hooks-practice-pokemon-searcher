import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleAddPokemon}) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    },
  })

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleOnChangeSprite(event) {
    const name = event.target.name;
    const value = event.target.value;
    const udpatedSprites = {
      ...formData.sprites,
      [name]: value,
    }
    setFormData({
      ...formData,
      sprites: udpatedSprites,
    })
  }

  function handleOnSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(newPokemon => handleAddPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            onChange={handleOnChange}
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
          />
          <Form.Input
            onChange={handleOnChange}
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
          />
          <Form.Input
            onChange={handleOnChangeSprite}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            value={formData.sprites.front}
          />
          <Form.Input
            onChange={handleOnChangeSprite}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
