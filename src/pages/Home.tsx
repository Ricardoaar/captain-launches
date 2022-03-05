import React, {useEffect, useState} from "react";
import Counter from "@components/Counter";
import FavoritesLaunches from "@components/FavoritesLaunches";
import InfoPanel from "../containers/InfoPanel";
import SocialPanel from "@components/SocialPanel";
import timeLeftToDate from "@utils/timeToDate";
import RenderTime from "../RenderPros/RenderTime";
import RocketLaunch from "@components/RocketLaunch";
import MissionContainer from "../containers/MissionContainer";
import Modal from "../containers/Modal";

type Props = {
    favoriteLaunches: RocketLaunchType[];
    currentLaunch: RocketLaunchType;
    removeFavorite: (mission: string) => void;
};
const initialTime: TimeObject = {
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
};

const Home: React.FC<Props> = ({favoriteLaunches, currentLaunch, removeFavorite}) => {
    const [time, setTime] = useState<TimeObject>(initialTime);
    const [modal, setModal] = useState<string>("");

    useEffect(() => {
        if (currentLaunch !== null) {
            const interval = setInterval(() => {
                const timeLeft = timeLeftToDate(new Date(currentLaunch.dateUtc), new Date());
                setTime(timeLeft);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [currentLaunch]);

    return (
        <React.Fragment>
            <div className="main-container">
                <div className="home-container">
                    <MissionContainer>
                        <h1 className="page-title">{currentLaunch?.mission}</h1>
                        <Counter render={RenderTime} time={time}/>
                    </MissionContainer>
                    <InfoPanel>
                        <FavoritesLaunches
                            favorites={favoriteLaunches}
                            render={(launch) => (
                                <React.Fragment key={launch.mission}>
                                    <RocketLaunch key={launch.mission} launch={launch}>
                                        {
                                            <input
                                                className="btn bg-secondary "
                                                type="button"
                                                value="Remove"
                                                key={`btn-${launch.mission}-remove`}
                                                onClick={() => setModal(launch.mission)}
                                            />
                                        }
                                    </RocketLaunch>

                                    <Modal isOpen={modal === launch.mission} onClose={() => setModal("")}>
                                        <p>
                                            Do you want to remove <b> {launch.mission}</b> from your favorites?
                                        </p>

                                        <input
                                            value="Yes!"
                                            className="btn bg-primary"
                                            type="button"
                                            onClick={() => {
                                                removeFavorite(launch.mission);
                                                setModal("");
                                            }}
                                        />
                                    </Modal>
                                </React.Fragment>
                            )}
                        />
                        <SocialPanel/>
                    </InfoPanel>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Home;
