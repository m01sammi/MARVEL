import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import { Comics } from "./pages/Comics/Comics";
import { Characters } from "./pages/Characters/Characters";
import { ComicsDetail } from "./pages/ComicsDetail/ComicsDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Comics />} /> 
      <Route path="characters" element={<Characters />} />
      <Route path="comics/:id" element={<ComicsDetail />} />
    </Route>
  )
);

export default router;
