import { useEffect, useState } from "react";
import useLocalStorage from "@hooks/useLocalStorage";
import fetchLaunches from "@utils/fetchLaunches";

const useLaunches = () => {
  const {
    items: launches,
    saveItem: setLaunches,
    error: upcomingError,
  } = useLocalStorage("upcoming_launches");
  const {
    items: favoritesLaunches,
    saveItem: setFavoriteLaunches,
    error: favoritesError,
  } = useLocalStorage("favorites_launches");
  const [error, setError] = useState(false);

  useEffect(() => {
    // if (launches.length === 0) {
    fetchLaunches()
      .then((r) => {
        const launchesData: RocketLaunchType = r.data.map((launch: LaunchFetchData) => {
          return { mission: launch.name, dateUtc: launch.date_utc, dateLocal: launch.date_local };
        });
        setLaunches(launchesData);
      })
      .catch(() => {
        setError(true);
      });
    // }
  }, []);

  const addFavorite = (launches: RocketLaunchType) => {
    if (
      favoritesLaunches.filter((launch: RocketLaunchType) => launch.mission === launches.mission)
        .length !== 0
    ) {
      return;
    }
    const newFavorites = [...favoritesLaunches, launches];
    setFavoriteLaunches(newFavorites);
  };

  const removeFavorite = (mission: string) => {
    const newFavorites = favoritesLaunches.filter(
      (launch: RocketLaunchType) => mission !== launch.mission
    );
    setFavoriteLaunches(newFavorites);
  };
  if (upcomingError || favoritesError) {
    setError(true);
  }

  return {
    launches,
    favoritesLaunches,
    addFavorite,
    removeFavorite,
    error,
  };
};

export default useLaunches;
