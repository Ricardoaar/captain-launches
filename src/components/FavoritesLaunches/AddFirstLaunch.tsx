import React from "react";
import { Link } from "react-router-dom";

const AddFirstLaunch = () => {
  return (
    <div className="flex flex-col space-y-10 text-center">
      <p>No favorites yet</p>
      <p>
        To add your first favorite launch <b>visit</b>
      </p>
      <div className="grid grid-cols-1 space-x-4">
        <div className="link text-xl font-bold">
          <Link to="/launches/upcoming">Upcoming Launches</Link>
        </div>
      </div>
    </div>
  );
};

export default AddFirstLaunch;
