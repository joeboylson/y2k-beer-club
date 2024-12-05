import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import LinkList from "../../components/LinkList";
import Tag from "../../components/Tag";

export default function RCMNDR() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={1}>
        <h2>RCMNDR</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <strong>
          RCMNDR is an application that leverages the Spotify API to generatate
          a playlist of 50 songs based off of a few of the user's favorite
          songs.
        </strong>
        <p>
          RCMNDR uses Spotify for authentication, track search, track
          recommendations, and playlist creation. Upon logging in, the user
          selects up to 3 tracks that the recommendations will be based off of.
          There is a second step where the user can adjust the search parameters
          based off of Spotify's track characteristics. Finally, a list of
          recommendations is generated and the user can save this list to a
          playlist.
        </p>

        <LinkList
          links={[
            {
              href: "https://rcmndr.up.railway.app",
              label: "Try RCMNDR",
              text: "Live site",
              target: "_blank",
            },
            {
              href: "https://github.com/joeboylson/rcmndr",
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
          <Tag>Express.js</Tag>
          <Tag>Spotify API integration</Tag>
        </Flow>
      </GridItem>
    </>
  );
}
