import Details from "../../components/Details";
import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import Tag from "../../components/Tag";

export function ExperienceKineticVision() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={3}>
        <h2>Kinetic Vision</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={3}>
        <Details
          details={[
            ["Position:", "Software Developer"],
            [
              "Duration:",
              <>
                <p>Co-op: Summer 2019 — Spring 2022 (3.5 years) </p>
                <p>Full-time: Spring 2022 — Spring 2024 (2 years) </p>
              </>,
            ],
            [
              "Skills & Technologies:",
              <Flow>
                <Tag>React & Typescript</Tag>
                <Tag>Ruby on Rails</Tag>
                <Tag>Flask</Tag>
                <Tag>FastAPI</Tag>
                <Tag>Express</Tag>
                <Tag>GraphQL</Tag>
                <Tag>REST</Tag>
                <Tag>Azure</Tag>
                <Tag>CI/CD</Tag>
                <Tag>Docker</Tag>
                <Tag>Python Scripting</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>MySQL</Tag>
                <Tag>SDLC Committee</Tag>
                <Tag>Social Chair</Tag>
              </Flow>,
            ],
            [
              "Synopsis:",
              <>
                <p>
                  I joined Kinetic Vision as a co-op, stayed through graduation,
                  and then went full-time for 2 more years afterwards. At KV I
                  was able to touch many different types of projects (about 25
                  total), each with different clients, requirements, and
                  results. Through this divers set of projects, I was able to
                  learn and tune my development skills.
                </p>
              </>,
            ],
          ]}
        />
      </GridItem>
    </>
  );
}
