import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import LinkList from "../../components/LinkList";
import Tag from "../../components/Tag";

export default function ProjectPlaceLift() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={1}>
        <h2>PlaceLift</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <strong>
          PlaceLift is a mobile application and service that assists clients in
          their home improvement projects from start to finish. PlaceLift
          provides these services through a mobile app and excellent customer
          service.
        </strong>

        <p>
          As CTO of PlaceLift I perform all development tasks on our mobile
          application and an internal tool called "PlaceLift Connector". This
          includes turning our mobile app mockups into code, managing our CI/CD
          to build and deploy to the to App Store (iOS) and Google Play Store
          (Android), and handling all new releases.
        </p>

        <p>
          <i>
            NOTE: As of September 1st, 2024, the PlaceLift team is taking a
            hiatus. We’re proud of the progress we’ve made since our launch in
            the spring of 2024, but we need to take this pause to allow us to
            reassess our needs in terms of time and investment.
          </i>
        </p>

        <LinkList
          links={[
            {
              href: "https://placelift.app",
              label: "Check out our website",
              text: "PlaceLift Website",
              target: "_blank",
            },
          ]}
        />

        <Flow>
          <Tag>Design-to-code</Tag>
          {/*  */}
          <Tag>Flutter</Tag>
          <Tag>React</Tag>
          <Tag>Typescript</Tag>
          <Tag>MUI Components</Tag>
          <Tag>Express.js</Tag>
          {/*  */}
          <Tag>CI/CD</Tag>
          <Tag>Codemagic</Tag>
          <Tag>Supabase Realtime Database</Tag>
          <Tag>Hubspot integration</Tag>
          <Tag>Mobile Push Notifications</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
