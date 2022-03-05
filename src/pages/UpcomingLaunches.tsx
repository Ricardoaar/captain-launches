import React from "react";
import RocketLaunch from "@components/RocketLaunch";
import LaunchCard from "@components/LaunchCard";
import Modal from "../containers/Modal";

type Props = {
  launches: RocketLaunchType[];
  addFavorite: (launch: RocketLaunchType) => void;
  favorites: RocketLaunchType[];
};
const UpcomingLaunches: React.FC<Props> = ({ addFavorite, launches, favorites }) => {
  const [modal, setModal] = React.useState("");
  const closeModal = () => {
    setModal("");
  };
  const favMissions = favorites.map((fav) => fav.mission);
  return (
    <div className="main-container">
      <h1 className="page-title">Upcoming Launches</h1>
      <div className="upcoming-container">
        {launches.map((launch) => (
          <React.Fragment key={launch.mission}>
            <LaunchCard>
              <RocketLaunch launch={launch}>
                {!favMissions.includes(launch.mission) ? (
                  <input
                    type="button"
                    value="Add to favorites"
                    className="btn bg-primary"
                    onClick={() => setModal(launch.mission)}
                  />
                ) : (
                  <div className="link font-bold">Favorite</div>
                )}
              </RocketLaunch>
            </LaunchCard>
            <Modal isOpen={modal === launch.mission} onClose={closeModal}>
              <p>
                Do you want to add <b> {launch.mission}</b> to your favorites?
              </p>

              <input
                value="Yes!"
                className="btn bg-primary"
                type="button"
                onClick={() => {
                  addFavorite(launch);
                  closeModal();
                }}
              />
            </Modal>
          </React.Fragment>
        ))}
      </div>
      {launches.length === 0 && <h3>No upcoming launches</h3>}
      {launches.length < 8 ? <h3 className="text-announce">More launches soon...</h3> : null}
    </div>
  );
};

export default UpcomingLaunches;
