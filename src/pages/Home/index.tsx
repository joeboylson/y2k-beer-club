import styled from "styled-components";
import GridItem from "../../components/GridItem";
import Grid from "../../components/Grid";
import Details from "../../components/Details";
import Tag from "../../components/Tag";

const TitleSVG = styled.svg`
  padding-top: 48px;
`;

const TitleText = styled.text`
  font-size: 16px;
  font-family: Anton;
  font-weight: 100;
  fill: #ff4003;
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
        <GridItem sizeL={2} sizeM={3}>
          <h3>Why is it "Y2K" Beer Club?</h3>
        </GridItem>
        <GridItem sizeL={3} sizeM={3}>
          <p>
            The Y2K Beer Club (Y2KBC) is for those born before or around the
            year 2000. Its for the later Millenials or the early GenZ - for the
            "Zoomers" or "Zillenials" caught right in the middle of the two
            generations.
          </p>
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={2} sizeM={3}>
          <h3>What is Y2K Beer Club?</h3>
        </GridItem>
        <GridItem sizeL={3} sizeM={3}>
          <p>
            Y2KBC is a fusion of a{" "}
            <a href="#mission-statement">mission statement</a> and a{" "}
            <a href="#plan-of-action">plan of action</a> . It's goal is to bring
            people of the our generation together to socialize and have a good
            time.
          </p>
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={2} sizeM={3}>
          <h3 id="mission-statement">Mission Statement:</h3>
        </GridItem>
        <GridItem sizeL={3} sizeM={3}>
          <p>
            We have "social media", but less friends. We have "dating apps", but
            less relationships.
          </p>
          <p>
            The mission is to try and solve this problem (at least in a small
            way) by organizing a monthly event and getting people together to
            talk, to laugh, and to have a couple drinks.
          </p>
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={2} sizeM={3}>
          <h3>Who's invited?</h3>
        </GridItem>
        <GridItem sizeL={3} sizeM={3}>
          <p>
            We're a group that has strong Social Conservative values -
            traditional family values, clear gender roles, and a strong belief
            in the God.
          </p>
          <p>All events are 21+.</p>
          <p>If this sounds like you, you're invited.</p>
        </GridItem>
        {/**
         *
         *
         *
         */}
        <GridItem sizeL={5} sizeM={3}>
          <h3>Plan of Action (2025)</h3>
          <code>(events held on the 2nd Friday of every month)</code>
          <Details
            details={[
              [
                "January 10",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "February 14",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "March 14",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "April 11",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "May 9",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "June 13",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "July 11",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "August 8",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "September 12",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "October 10",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "November 14",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
              [
                "December 12",
                <div>
                  <p>Big Ash Brewing @ 7PM</p>
                  <code>(5230 Beechmont Ave, Cincinnati, OH 45230)</code>
                </div>,
              ],
            ]}
          />
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
