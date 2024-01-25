import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import styles from "./App.module.css";
import { HomePage } from "./components/HomePage/HomePage";
import { GamePage } from "./components/GamePage/GamePage";
import { EndPage } from "./components/EndPage/EndPage";


function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/game"
            element={<GamePage />}
          />
          <Route
            path="/end"
            element={<EndPage />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;