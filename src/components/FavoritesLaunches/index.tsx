import React from "react";
import AddFirstLaunch from "@components/FavoritesLaunches/AddFirstLaunch";

type Props = {
  favorites: RocketLaunchType[];
  render: (favorites: RocketLaunchType) => JSX.Element | JSX.Element[];
};
const FavoritesLaunches: React.FC<Props> = ({ favorites, render }) => {
  const overflow = favorites.length > 2 ? "overflow-y-scroll" : "overflow-y-hidden";
  return (
    <section className="row-span-5 flex flex-col mt-20 space-top-20 h-full">
      <h3 className="page-title">Favorites Launches</h3>
      <div className={"favorites-wrapper " + overflow}>
        {favorites.length === 0 ? (
          <AddFirstLaunch />
        ) : (
          <div className="favorites-container">{favorites.map(render)}</div>
        )}
      </div>
    </section>
  );
};

export default FavoritesLaunches;
