import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import LinkList from "../../components/LinkList";
import Tag from "../../components/Tag";

export default function MattBoylsonDotCom() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={1}>
        <h2>mattboylson.com</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <strong>
          mattboylson.com is a custom website built for Matt Boylson, a local
          Cincinnati graphic designer and artist.
        </strong>
        <p>
          I worked with Matt to build a professional portfolio website that
          would showcase his previous design work and his capabilities as an
          artist. I handled all of the development and deployment of the website
          and produced a live site from his mockups.
        </p>

        <LinkList
          links={[
            {
              href: "https://mattboylson.com/",
              label: "Open Matt's Website",
              text: "Live site",
              target: "_blank",
            },
          ]}
        />

        <Flow>
          <Tag>Design-to-code</Tag>
          {/*  */}
          <Tag>React</Tag>
          <Tag>Custom CSS</Tag>
          <Tag>Express.js</Tag>
          {/*  */}
          <Tag>Sendgrid Integration</Tag>
          <Tag>Heroku</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
