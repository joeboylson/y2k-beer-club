import styled from "styled-components";

type _props = {
  sizeM: 3 | 2 | 1;
};

export default function SpacerM({ sizeM }: _props) {
  const StyledSpacerM = styled("div")`
    display: none;

    @media (max-width: 800px) {
      display: block;
      grid-column: span ${sizeM};
    }

    @media (max-width: 600px) {
      display: none;
    }
  `;

  return <StyledSpacerM />;
}
