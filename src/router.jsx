import { createRoutesFromElements, createBrowserRouter, Route } from "react-router";

import {Commics} from "./pages/Commics/Commics.jsx";
import {Characters} from "./pages/Characters/Characters.jsx";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<App />} />
      <Route path="/commics" element={<Commics />} />
      <Route path="/characters" element={<Characters />} />
    </>
  )
);

export default router;
