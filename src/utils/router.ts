import { Pages } from "../enums";

export const goToProfilePage = () => (window.location.href = Pages.PROFILE);
export const goToProjectsPage = () => (window.location.href = Pages.PROJECTS);
export const goToExperiencePage = () =>
  (window.location.href = Pages.EXPERIENCE);
export const goToBuyMeACoffee = () => window.open(Pages.COFFEE, "_blank");
