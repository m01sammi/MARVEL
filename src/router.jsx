import { createRoutesFromElements, createBrowserRouter, Route } from "react-router";

import {Characters} from "./pages/Characters/Characters.jsx";
import App from "./App";
import { ComicsDetail } from "./pages/ComicsDetail/ComicsDetail.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="" element={<App />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/comics/:id" element={<ComicsDetail />} /> 
    </>
  )
);

export default router;
