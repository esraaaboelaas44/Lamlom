import { createBrowserRouter } from "react-router";
import WelcomePage from "./pages/WelcomePage";
import MemoriesPage from "./pages/MemoriesPage";
import LetterPage from "./pages/LetterPage";
import TimelinePage from "./pages/TimelinePage";
import ReasonsPage from "./pages/ReasonsPage";
import SurprisePage from "./pages/SurprisePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WelcomePage,
  },
  {
    path: "/memories",
    Component: MemoriesPage,
  },
  {
    path: "/letter",
    Component: LetterPage,
  },
  {
    path: "/timeline",
    Component: TimelinePage,
  },
  {
    path: "/reasons",
    Component: ReasonsPage,
  },
  {
    path: "/surprise",
    Component: SurprisePage,
  },
]);
