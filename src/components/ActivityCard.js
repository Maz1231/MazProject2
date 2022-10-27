import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function ActivityCard({ activity }) {

  const { sport, experience, image } = activity;


  return (
    <Card>
     <div>
        <div className="image">
          <img src={image} />
        </div>
        <div className="content">
          <div className="header">{sport}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {experience}
          </span>
        </div>
      </div>
    </Card>
  );
}



export default ActivityCard;