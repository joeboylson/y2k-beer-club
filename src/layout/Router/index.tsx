import { Pages } from "../../enums";
import Home from "../../pages/Home";

export default function Router() {
  const path = window.location.pathname;

  switch (path) {
    case Pages.HOME:
      return <Home />;

    default:
      window.location.href = Pages.HOME;
      return <span />;
  }
}
