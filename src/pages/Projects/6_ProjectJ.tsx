import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import Tag from "../../components/Tag";
import WithLabel from "../../components/WithLabel";

export default function ProjectJ() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={1}>
        <h2>Project J</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <strong>
          Project J is an experience that overlays navigation and information
          onto a 3D experience.
        </strong>
        <p>
          Project J was a blast to work on and one of my favorites. It
          integrated Matterport, a 3D space-capture platform, and a fairly
          sophisticated SDK integration. The goal was to provide a journey
          (hence "J") through a 3D space and to show tailored marketing material
          at each stop in the tour.
        </p>
        <WithLabel label="Check out Matterport">
          <a href="https://matterport.com/" target="_blank" rel="noreferrer">
            → Matterport Website
          </a>
        </WithLabel>
        <Flow>
          <Tag>Graphic Design</Tag>
          {/*  */}
          <Tag>React</Tag>
          <Tag>Typescript</Tag>
          <Tag>Matterport SDK</Tag>
          <Tag>Custom Webkit Config</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
