import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import Tag from "../../components/Tag";
import WithLabel from "../../components/WithLabel";

export default function ProjectX() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={1}>
        <h2>Project X</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <strong>
          Project X is a custom-built content management system for a medical
          technology company that provides a fast and secure way for our clients
          to upload and share documents, 3D models, and 3D experiences to other
          users within the company, or external users outside of the company.
        </strong>
        <p>
          This project is very unique due to its content. Most of the content
          used was .zip files, containing whole applications and experiences
          that are used for training and informing medical professionals. The
          challenge of this application centered around security and speed.
        </p>
        <p>
          To give a sense of what type of content Project X manages, go to
          Project J. Project J is an experience I developed that was uploaded
          and shared from Project X.
        </p>
        <WithLabel label="Jump to Project J">
          <a href="/projects#:~:text=Azure%20Blob%20Storage-,Project%20J,-Project%20J%20is">
            → Project J
          </a>
        </WithLabel>
        <Flow>
          <Tag>Graphic Design</Tag>
          {/*  */}
          <Tag>React</Tag>
          <Tag>Typescript</Tag>
          <Tag>GraphQL</Tag>
          <Tag>Flask</Tag>
          <Tag>Functional Programming</Tag>
          <Tag>SSO Authentication</Tag>
          {/*  */}
          <Tag>PostgreSQL</Tag>
          <Tag>Docker Compose</Tag>
          <Tag>API metrics</Tag>
          <Tag>Azure</Tag>
          <Tag>Azure Blob Storage</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
