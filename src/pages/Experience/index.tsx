import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";
import { ExperienceITSC } from "./3_ExperienceITSC";
import { ExperienceKineticVision } from "./2_ExperienceKineticVision";
import { ExperiencePlaceLift } from "./1_ExperiencePlaceLift";
import WithLabel from "../../components/WithLabel";

export default function Experience() {
  return (
    <Grid>
      <GridItem sizeL={5} sizeM={2}>
        <h1>Experience</h1>
      </GridItem>
      <GridItem sizeL={5} sizeM={2}>
        <p>Below is my CV. It is fully up to date as of 08.02.2023</p>
        <WithLabel label="Download my CV">
          <a
            href="./resources/JoeBoylson_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download my CV
          </a>
        </WithLabel>
      </GridItem>

      <ExperiencePlaceLift />
      <ExperienceKineticVision />
      <ExperienceITSC />
    </Grid>
  );
}
