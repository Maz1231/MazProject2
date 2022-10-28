import React from "react";

function ActivityCard({sport, experience, image}) {
  return (
    <tr>
      <th className="sport-2">{sport}</th>
      <td className="exp-1">{experience}</td>
      <img src={image} className = "img"/>
    </tr>
  );
}

export default ActivityCard;







// import React from "react";

// function ActivityCard({sport, experience, image}) {
//   return (
//     <tr>
//       <td>{sport}</td>
//       <td>{experience}</td>
//       <td>{image}</td>
//     </tr>
//   );
// }

// export default ActivityCard;