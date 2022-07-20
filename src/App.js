import React, { Suspense } from "react";
import "./App.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Loader from "react-js-loader";
import { Routes, Route } from "react-router-dom";

const loading = (
  <div className="Loader-glass">
    <Loader type="hourglass" bgColor={"#b9983d"} color={"#fff"} size={100} />
  </div>
);

const DefaultLayout = React.lazy(() =>
  import("./Components/DefaultLayout/DefaultLayout")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={loading}>
        <Routes>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
