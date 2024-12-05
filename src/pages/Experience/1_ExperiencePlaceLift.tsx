import Details from "../../components/Details";
import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import Tag from "../../components/Tag";
import WithLabel from "../../components/WithLabel";

export function ExperiencePlaceLift() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={3}>
        <h2>PlaceLift</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={3}>
        <Details
          details={[
            ["Position:", "Chief Technology Officer (CTO)"],
            ["Duration:", "Fall 2023 — Fall 2024 (1 year)"],
            [
              "Skills & Technologies:",
              <Flow>
                <Tag>Mobile Application Development (Flutter)</Tag>
                <Tag>App Store Listings (iOS & Android)</Tag>
                <Tag>design-to-code</Tag>
              </Flow>,
            ],
            [
              "Synopsis",
              <p>
                PlaceLift is my latest endeavor and allowed me the experience of
                being fully responsible for a technology. It was exciting to
                make important decisions regarding the technology and to steer
                its course.
              </p>,
            ],
            [
              "Related:",
              <div>
                <WithLabel label='Go to \"PlaceLift\" in Projects'>
                  <a href="/projects#placelift:~:text=toExperience%20/%20CV-,PlaceLift,-PlaceLift%20is%20a">
                    → PlaceLift
                  </a>
                </WithLabel>
              </div>,
            ],
          ]}
        />
      </GridItem>
    </>
  );
}
