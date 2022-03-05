import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "@pages/Home";
import UpcomingLaunches from "@pages/UpcomingLaunches";
import Error500 from "@pages/Error500";
import Error404 from "@pages/Error404";
import useLaunches from "@hooks/useLaunches";

function App() {
  const { launches, favoritesLaunches, addFavorite, removeFavorite, error } = useLaunches();

  if (error) {
    return <Error500 />;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <Home
                removeFavorite={removeFavorite}
                favoriteLaunches={favoritesLaunches}
                currentLaunch={launches[0]}
              />
            }
          />
          <Route
            path="/launches/upcoming"
            element={
              <UpcomingLaunches
                favorites={favoritesLaunches}
                addFavorite={addFavorite}
                launches={launches}
              />
            }
          />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
