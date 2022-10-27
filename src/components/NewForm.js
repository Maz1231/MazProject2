import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function NewForm({ onAddActivity }) {
    const [formData, setFormData] = useState({
      sport: "",
      experience: "",
      image: "",
    });
    
    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
  
    function handleSubmit() {
        // Semantic UI React's Form component handles the preventDefault automatically!
    
        const newActivity = {
          sport: formData.sport,
          experience: formData.experience,
          image: formData.image,
        };

    fetch("http://localhost:8001/activity", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    })
      .then((r) => r.json())
      .then(onAddActivity);
  }

  return (
    <div>
      <h3>Add an activity!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="sport"
            placeholder="sport"
            name="sport"
            value={formData.sport}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="experience"
            placeholder="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Image"
            placeholder="Image"
            name="Image"
            value={formData.image}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default NewForm;
