import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { isAuthenticated } from "../../services/authService";
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
                <Link to={"types"}> Types</Link>
            </nav>
            <section>
                <Routes>
                    <Route path="/" element={<PetList pets={pets} />} />
                    <Route
                        path="types"
                        element={
                            <p>
                                {" "}
                                Types... <br /> Nested Routing Here
                            </p>
                        }
                    />
                </Routes>
                {/* <PetList pets={pets} /> */}
            </section>
        </section>
    );
};

export const PrivateDashboard = isAuthenticated(Dashboard);

export default Dashboard;
