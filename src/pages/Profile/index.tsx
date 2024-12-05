import Divider from "../../components/Divider";
import Grid from "../../components/Grid";
import GridItem from "../../components/GridItem";
import LinkList from "../../components/LinkList";
import RoundedWrapper from "../../components/RoundedWrapper";
import WithLabel from "../../components/WithLabel";

export default function Profile() {
  return (
    <Grid>
      <GridItem sizeL={2} sizeM={1}>
        <RoundedWrapper>
          <img src="./images/profile-picture.jpg" alt="Joe Boylson" />
        </RoundedWrapper>
      </GridItem>
      <GridItem sizeL={3} sizeM={2}>
        <h1>Hey, I'm Joe</h1>
        <p>
          I'm a Cincinnati local with a degree in BS Software Development from
          UC.&nbsp;
          <b>
            My expertise is in full-stack development where I combine technical
            and creative solutions with the future in mind.
          </b>
        </p>
        <p>
          In the off-hours, I enjoy photography, small entrepreneurial projects,
          and creating other (often full-stack) programs.
        </p>
        <Divider />
        <p>
          I am currently open to work! Please contact me through my LinkedIn
          below with information about open positions...
        </p>
        <LinkList
          links={[
            {
              href: "https://www.linkedin.com/in/joeboylson",
              label: "Hire me!",
              text: "LinkedIn",
            },
          ]}
        />
        <p>...or, download my CV!</p>
        <WithLabel label="Download my CV">
          <a
            href="./resources/JoeBoylson_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </WithLabel>
      </GridItem>

      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>

      <GridItem sizeL={2} sizeM={1}>
        <h2>All the links</h2>
        <LinkList
          links={[
            {
              href: "mailto:joeboylson+tech@gmail.com",
              label: "Send me a message",
              text: "Email",
            },
            {
              href: "https://www.linkedin.com/in/joeboylson",
              label: "Let's connect",
              text: "LinkedIn",
              target: "_blank",
            },
            {
              href: "https://github.com/joeboylson",
              label: "Check out my projects",
              text: "GitHub",
              target: "_blank",
            },
          ]}
        />
      </GridItem>

      <GridItem sizeL={2} sizeM={1}>
        <h2>Have an idea?</h2>
        <p>
          I can build both websites and mobile applications. I would love to
          hear your ideas and help bring your vision to life.
        </p>
        <LinkList
          links={[
            {
              href: "mailto:joeboylson+tech@gmail.com?subject=Hey%20Joe%2C%20I%20have%20an%20idea%20for%20you",
              label: "Send me your ideas!",
              text: "Let's Chat",
            },
          ]}
        />
      </GridItem>
    </Grid>
  );
}
