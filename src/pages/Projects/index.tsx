import Divider from "../../components/Divider";
import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";
import ProjectBookletFormatter from "./2_ProjectBookletFormatter";
import MattBoylsonDotCom from "./3_ProjectMattBoylsonDotCom";
import ProjectPlaceLift from "./1_ProjectPlaceLift";
import ProjectX from "./4_ProjectX";
import ProjectT from "./5_ProjectT";
import ProjectJ from "./6_ProjectJ";
import Streamify from "./3_ProjectStreamify";
import RCMNDR from "./1_ProjectRcmndr";

export default function Projects() {
  return (
    <Grid>
      <GridItem sizeL={5} sizeM={2}>
        <h1>Projects</h1>
      </GridItem>

      <GridItem sizeL={3} sizeM={2}>
        <p>
          All projects listed below reflect my expertise in
          <strong> custom, full-stack applications</strong>.
        </p>
      </GridItem>

      <ProjectPlaceLift />
      <RCMNDR />
      <ProjectBookletFormatter />
      <MattBoylsonDotCom />
      <Streamify />

      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>

      <GridItem sizeL={3} sizeM={2}>
        <h2>Other Projects</h2>
        <p>
          Below is a list of projects which I cannot name or provide links to.
          The naming conventions are obscured for privacy, but the technologies
          and methods are listed to provide as much context as possible
        </p>
      </GridItem>

      <ProjectX />
      <ProjectT />
      <ProjectJ />
    </Grid>
  );
}
