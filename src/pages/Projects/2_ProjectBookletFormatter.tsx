import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import LinkList from "../../components/LinkList";
import Tag from "../../components/Tag";

export default function ProjectBookletFormatter() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={1}>
        <h2>Booklet Formatter</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <strong>
          Booklet Formatter is an online tool to assist in the formatting of
          booklet pages or snippets. The formatting can be exported as JSON in
          order to be loaded into another application.
        </strong>
        <p>
          Right now, there is no database attached to this project; this may be
          included in future version of the app. Storage and tracking of the
          content is performed through the use of the browser's localstorage.
        </p>

        <LinkList
          links={[
            {
              href: "https://booklet-formatter.vercel.app",
              label: "Open the project",
              text: "Live site",
              target: "_blank",
            },
            {
              href: "https://github.com/joeboylson/prayer-formatter",
              label: "View the code",
              text: "Github Project",
              target: "_blank",
            },
          ]}
        />

        <Flow>
          <Tag>React</Tag>
          <Tag>Typescript</Tag>
          <Tag>LocalStorage</Tag>
          <Tag>JSON</Tag>
          {/*  */}
          <Tag>Vercel</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
