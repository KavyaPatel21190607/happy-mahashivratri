import { createBrowserRouter } from "react-router";
import { LandingPage } from "./components/LandingPage";
import { JyotirlingaDarshan } from "./components/JyotirlingaDarshan";
import { ShaktiPeethaDarshan } from "./components/ShaktiPeethaDarshan";
import { InteractivePuja } from "./components/InteractivePuja";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/jyotirlinga",
    Component: JyotirlingaDarshan,
  },
  {
    path: "/shakti-peetha",
    Component: ShaktiPeethaDarshan,
  },
  {
    path: "/puja",
    Component: InteractivePuja,
  },
]);
