import React from "react";
import ActivityCard from "/Users/maz/Desktop/Projects/MazProject2/src/components/ActivityCollection.js";
import { Card } from "semantic-ui-react";

function ActivityCollection({ activity }) {
  const cards = activity.map((active) => {
      return(
    <ActivityCard key={active.id} activity={active} />
  )});

  return <Card.Group itemsPerRow={6}></Card.Group>;
}

export default ActivityCollection;


//{cards}

// {activity ? <Card.Group itemsPerRow={6}></Card.Group> : <p>Loading...</p>}