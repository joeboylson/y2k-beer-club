import styled from "styled-components";
import GridItem from "../../components/GridItem";
import Grid from "../../components/Grid";
import Details from "../../components/Details";
import Tag from "../../components/Tag";
import Events from "../../layout/Events";
import { Helmet } from "react-helmet-async";

const TitleSVG = styled.svg`
  padding-top: 48px;
`;

const TitleText = styled.text`
  font-size: 16px;
  font-family: Anton;
  font-weight: 100;
  fill: #ff4003;
`;

const Subtitle = styled.h1`
  text-align: center;
`;

const ContactBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;

  * {
    text-align: center;
    margin: 0 auto;
  }
`;

export default function Home() {
  const svgWidth = 87;
  const svgTextSpacing = 3;

  return (
    <>
      <Helmet>
        <title>Y2KBC</title>
        <meta
          name="description"
          content="Y2K Beer Club: Connect with fellow Millennials & Gen Z in Cincinnati. Find friends, share laughs, and have a couple drinks."
        />
        <link rel="canonical" href="/home" />
      </Helmet>
      <TitleSVG
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox={`0 0 ${svgWidth} 14.2`}
      >
        <TitleText
          textLength={`${svgWidth - svgTextSpacing * 2}`}
          lengthAdjust="spacing"
          x={svgTextSpacing}
          y={14}
        >
          Y2K BEER CLUB
        </TitleText>
      </TitleSVG>

      <Grid>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={5} sizeM={3}>
          <hr />
        </GridItem>

        {/**
         *
         *
         *
         */}
        <GridItem sizeL={5} sizeM={3}>
          <Subtitle>Join us for a couple drinks!</Subtitle>
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={2} sizeM={3}>
          <h2>Why is it "Y2K" Beer Club?</h2>
        </GridItem>
        <GridItem sizeL={3} sizeM={3}>
          <p>
            The Y2K Beer Club (Y2KBC) is for those born before or around the
            year 2000—the later Millennials and early Gen Z. It’s an event for
            the "Zoomers" or "Zillennials" who find themselves caught between
            two iconic generations.
          </p>
          <p>
            Many of us are realizing that making friends as adults isn't as easy
            as it once was. Y2KBC wants to bring together like-minded
            individuals create a sense community around shared values.
          </p>
        </GridItem>
        {/**
         *
         *
         *
         */}
        {/* <GridItem sizeL={2} sizeM={3}>
          <h3>What is Y2KBC?</h3>
        </GridItem>
        <GridItem sizeL={3} sizeM={3}>
          <p>
            Y2KBC is all about creating meaningful social connections. It’s a
            blend of purpose and action: to bring our generation together, to
            build community, and to enjoy good times with good people.
          </p>
        </GridItem> */}
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={2} sizeM={3}>
          <h2>Mission Statement:</h2>
        </GridItem>
        <GridItem sizeL={3} sizeM={3}>
          <p>
            We live in a world with "social media" but fewer real friendships,
            and "dating apps" but fewer meaningful relationships. Our mission is
            to help change that—at least a little—by hosting monthly events
            where people can come together, connect, share a laugh, and enjoy a
            drink or two.
          </p>
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={2} sizeM={3}>
          <h2>Who's invited?</h2>
        </GridItem>
        <GridItem sizeL={3} sizeM={3}>
          <p>
            We're a community of like-minded individuals who share traditional
            family values, clear gender roles, and a strong belief in God. All
            events are 21+.
          </p>
          <p>If this sounds like you, you're invited!</p>
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={5} sizeM={3}>
          <hr />
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={5} sizeM={3}>
          <Events />
        </GridItem>

        {/**
         *
         *
         *
         */}
        <GridItem sizeL={5} sizeM={3}>
          <hr />
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={5} sizeM={3}>
          <ContactBlock>
            <code>Contact:</code>
            <Tag>joeboylson@gmail.com</Tag>
            <Tag>513-667-2371 (text only)</Tag>
          </ContactBlock>
        </GridItem>
      </Grid>
    </>
  );
}
