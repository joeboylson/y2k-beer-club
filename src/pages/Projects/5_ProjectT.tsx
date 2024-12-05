import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import Tag from "../../components/Tag";

export default function ProjectT() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={1}>
        <h2>Project T</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <strong>
          Project T is an application built for a consumer goods company in
          order to scaffold and perform studies on new consumer goods.
        </strong>
        <p>
          The focus of this application was data management and integrity in
          order to provide useful and accurate data for an external analysis
          team.
        </p>
        <Flow>
          <Tag>React</Tag>
          <Tag>Typescript</Tag>
          <Tag>Custom CSS</Tag>
          {/*  */}
          <Tag>Ruby on Rails</Tag>
          <Tag>MySQL</Tag>
          <Tag>SSO Authentication</Tag>
          {/*  */}
          <Tag>Azure App Service</Tag>
          <Tag>Azure Blob Storage</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
