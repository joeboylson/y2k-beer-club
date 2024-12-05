import styled from "styled-components";

type _props = {
  sizeL: 5 | 3 | 2 | 1;
};

export default function SpacerL({ sizeL }: _props) {
  const StyledSpacerL = styled("div")`
    width: 100%;
    grid-column: span ${sizeL};
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    align-content: start;

    @media (max-width: 800px) {
      display: none;
    }

    @media (max-width: 600px) {
      grid-column: span 1;
    }
  `;

  return <StyledSpacerL />;
}
