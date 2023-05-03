import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicRoutes = () => {
    return (
        <div className="flex flex-col gap-2">
            <Navbar />

            <Outlet />
        </div>
    );
};

export default PublicRoutes;
