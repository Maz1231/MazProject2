import React, {useEffect, useState } from "react";
import NewForm from "/Users/maz/Desktop/Projects/MazProject2/src/components/NewForm.js";
import Search from "/Users/maz/Desktop/Projects/MazProject2/src/components/Search.js";
import ActivityCollection from "/Users/maz/Desktop/Projects/MazProject2/src/components/ActivityCollection.js";
import { Container } from "semantic-ui-react";
// import data from "./Project2/data";


export default function Home(){
    const [activity, setActivity] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:8001/activity")
          .then((r) => r.json())
          .then((data) => setActivity(data));
      }, []);
      
   console.log(activity)
    
    
      function handleAddActivity(newActivity) {
        setActivity([...activity, newActivity]);
      }

    
//       const activityToDisplay = activity.filter((active) =>
//     active.sport.toLowerCase().includes(searchTerm.toLowerCase())
//   );

      return (
        <Container>
          <h1>Activity Searcher</h1>
          <br />
          <NewForm onAddActivity={handleAddActivity} />
          <br />
          <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
          <br />
          <ActivityCollection activity={activity} />
        </Container>
      );
    }
    
// export default Home; 


                    
