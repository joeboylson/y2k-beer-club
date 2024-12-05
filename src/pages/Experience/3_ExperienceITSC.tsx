import Details from "../../components/Details";
import Divider from "../../components/Divider";
import Flow from "../../components/Flow";
import GridItem from "../../components/GridItem";
import Tag from "../../components/Tag";
import WithLabel from "../../components/WithLabel";

export function ExperienceITSC() {
  return (
    <>
      <GridItem sizeL={5} sizeM={3}>
        <Divider />
      </GridItem>
      <GridItem sizeL={2} sizeM={3}>
        <h2>IT Solutions Center</h2>
      </GridItem>
      <GridItem sizeL={3} sizeM={3}>
        <Details
          details={[
            ["Position:", "Software Development Co-op"],
            ["Duration:", "Co-op: Spring 2018 — Spring 2019 (1 year)"],
            [
              "Skills & Technologies:",
              <Flow>
                <Tag>Angular.js (Angular 1)</Tag>
                <Tag>Express</Tag>
                <Tag>REST</Tag>
                <Tag>MicroServices</Tag>
                <Tag>CI/CD</Tag>
                <Tag>JasperReports</Tag>
                <Tag>Docker</Tag>
                <Tag>PostgreSQL</Tag>
                <Tag>Performing Online Training</Tag>
              </Flow>,
            ],
            [
              "Synopsis:",
              <>
                <p>
                  The IT Solutions Center was a student-run organization, headed
                  by the Dean of the School of Information Technology, Dr. Hazem
                  Said. I joined as a sophomore, knowing nothing about
                  full-stack web development and it was here that I learned the
                  basics.
                </p>
              </>,
            ],
            [
              "Related:",
              <div>
                <WithLabel label="View Profile">
                  <a
                    href="https://researchdirectory.uc.edu/p/saidhm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    → Dr. Hazem Said
                  </a>
                </WithLabel>
              </div>,
            ],
          ]}
        />
      </GridItem>
    </>
  );
}
