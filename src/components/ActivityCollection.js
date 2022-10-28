import React from "react";
import ActivityCard from "./ActivityCard";
// import { Card } from "semantic-ui-react";

function ActivityCollection({activity}) {
  return (
    <table className="table">
      <tbody>
        <tr>
          <th>
            <h3 className="home-stuff">Sport</h3>
          </th>
          <th>
            <h3 className="home-stuff">Experience</h3>
          </th>
          <th>
            <h3 className="home-stuff">Image</h3>
          </th>
        </tr>
        {activity.map((active) => {
          return (<ActivityCard 
          key = {active.id}
          sport = {active.sport}
          experience = {active.experience}
          image = {active.image}  />)
        })}
      </tbody>
    </table>
  );
}


export default ActivityCollection;

//{cards}

// {activity ? <Card.Group itemsPerRow={6}></Card.Group> : <p>Loading...</p>}




