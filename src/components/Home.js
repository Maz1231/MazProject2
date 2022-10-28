import React, {useEffect, useState } from "react";
import NewForm from "./NewForm.js";
import Search from "./Search.js";
import ActivityCollection from "./ActivityCollection.js";
import { Container } from "semantic-ui-react";
import { act } from "@testing-library/react";
// import data from "./Project2/data";


export default function Home(){
    const [activity, setActivity] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch("http://localhost:8001/activity")
          .then((r) => r.json())
          .then((data) => setActivity(data));
      }, []);
      
  //  console.log(activity)
    
    
      function handleAddActivity(newActivity) {
        setActivity([...activity, newActivity]);
      }

    
      const activityToDisplay = activity.filter((active) =>
    active.sport.toLowerCase().includes(searchTerm.toLowerCase())
  );

      return (
        <Container>
          <h1 className="Active">List Of My Activities</h1>
          <br />
          <NewForm onAddActivity={handleAddActivity} />
          <br />
          <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
          <br />
          <ActivityCollection activity={activityToDisplay} />
        </Container>
      );
    }
    
// export default Home; 


                    
