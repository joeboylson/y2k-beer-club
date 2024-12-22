import styled from "styled-components";
import GridItem from "../../components/GridItem";
import Grid from "../../components/Grid";
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
          <Subtitle>Join us for drinks!</Subtitle>
        </GridItem>

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
            To cultivate authentic human connection in a digitally-driven world
            by creating a welcoming space where individuals can forge genuine
            friendships and build meaningful relationships.
          </p>
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
            The Y2K Beer Club is for those born before the year 2000 — the late
            Millennials, the early Gen Z, the "Zoomers", and the "Zillennials".
            At this point in our lives, many of us are realizing that making
            lasting friendships and relationships isn't easy. If you are a part
            of this Y2K generation, this club is for you.
          </p>
          <p></p>
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
            family values, clear gender roles, and a strong belief in God.
          </p>
          <p>If this sounds like you, you're invited!</p>
          <Tag>All events are 21+</Tag>
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
