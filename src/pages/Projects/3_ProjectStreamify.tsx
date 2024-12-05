import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import LinkList from "../../components/LinkList";
import Tag from "../../components/Tag";

export default function Streamify() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={1}>
        <h2>Streamify Demo</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <strong>
          Streamify Demo is a project built in 6 hours to demonstrate my ability
          with Frontend Technologies.
        </strong>
        <p>
          While job searching, I discovered a prompt for a demo project where
          the developer was tasked with creating a music streaming dashboard,
          complete with 3 types of graphs and a table with sorting and
          filtering. As mentioned above, this project was completed on a Sunday
          afternoon in a little over 6 hours.
        </p>

        <LinkList
          links={[
            {
              href: "https://streamify-demo.vercel.app",
              label: "Open Streamify Demo",
              text: "Live site",
              target: "_blank",
            },
            {
              href: "https://github.com/joeboylson/streamify-demo",
              label: "View the code",
              text: "Github Project",
              target: "_blank",
            },
          ]}
        />

        <Flow>
          <Tag>React</Tag>
          <Tag>Typescript</Tag>
          <Tag>Custom CSS</Tag>
          <Tag>Data Visualization</Tag>
          <Tag>Vercel</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
