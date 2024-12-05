import styled from "styled-components";
import { WithChildren } from "../../types";

export default function Grid({ children }: WithChildren) {
  const StyledGrid = styled("div")`
    width: calc(100% - (48px * 2));
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 100px;
    max-width: 1096px;
    margin: 0 auto;
    padding: 48px;

    @media (max-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 36px;
    }

    @media (max-width: 600px) {
      width: calc(100% - 24px);
      margin: 0;
      padding: 12px;
      grid-template-columns: 1fr;
    }
  `;

  return <StyledGrid>{children}</StyledGrid>;
}
