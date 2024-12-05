import styled from "styled-components";
import { WithChildren } from "../../types";

export default function List({ children }: WithChildren) {
  const StyledFlow = styled("div")`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 4px;
  `;

  return <StyledFlow>{children}</StyledFlow>;
}
