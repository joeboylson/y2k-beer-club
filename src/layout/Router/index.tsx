import { Pages } from "../../enums";
import Experience from "../../pages/Experience";
import Profile from "../../pages/Profile";
import Projects from "../../pages/Projects";

export default function Router() {
  const path = window.location.pathname;

  switch (path) {
    case Pages.PROFILE:
      return <Profile />;

    case Pages.PROJECTS:
      return <Projects />;

    case Pages.EXPERIENCE:
      return <Experience />;

    default:
      window.location.href = Pages.PROFILE;
      return <span />;
  }
}
