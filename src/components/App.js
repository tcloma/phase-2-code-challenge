import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planeteers, setPlaneteers] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      let request = await fetch('http://localhost:8003/planeteers')
      let response = await request.json()
      // console.log(response)
      setPlaneteers(response)
    }
    fetchData()
  }, [])

  const addPlaneteer = (newPlaneteer) => {
    fetch('http://localhost:8003/planeteers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newPlaneteer)
    })
    setPlaneteers([...planeteers, newPlaneteer])
  }


  const sortedPlaneteers = [...planeteers].sort((planeteer1, planeteer2) => {
    if (isChecked === true){
      return planeteer2.born - planeteer1.born
    } else {
      return planeteer1.id = planeteer2.id
    }
  })


  const filteredPlaneteers = sortedPlaneteers.filter((planeteer) => {
    return (
      (planeteer.name.toLowerCase() && planeteer.bio.toLowerCase()).includes(searchValue.toLowerCase())
    )
  })

  return (
    <div>
      <Header />
      <SearchBar handleSearch={setSearchValue} setIsChecked={setIsChecked}/>
      <RandomButton addPlaneteer={addPlaneteer} />
      <PlaneteersContainer planeteers={filteredPlaneteers} />
    </div>
  );
}

export default App;
