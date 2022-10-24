import { useState, useEffect } from "react";
import {Route, Routes} from 'react-router-dom';
import * as petService from "../../services/petService";

import PetList from "../PetList";
import "./Dashboard.css";

const Dashboard = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    petService
      .getAll()
      .then((result) => {
        setPets(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="dashboard-page" className="dashboard">
      <h1>Dashboard</h1>
        <nav>
           
        </nav>
      <section>
      <Routes>
            <Route path="/" element={<PetList pets={pets}/>} /> 
            <Route path="types" element={<p> Types...</p>}/>
            </Routes>
        {/* <PetList pets={pets} /> */}
      </section>
    </section>
  );
};

// export const PrivateDashboard = isAuth(Dashboard)

export default Dashboard;
