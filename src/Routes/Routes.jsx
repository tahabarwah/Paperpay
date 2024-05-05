import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const NotFound = React.lazy(() => import("pages/NotFound"));
const Onboarding = React.lazy(() => import("pages/Onboarding"));
const Venue = React.lazy(() => import("pages/Venue"));

const ProjectRoutes = () => {
  return (
    <React.Suspense
      fallback={
        <>
          {" "}
          <div className="fixed h-screen w-full inset-0 flex items-center justify-center z-9999">
            <CircularProgress />
          </div>
        </>
      }
    >
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/venue" element={<Venue />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
