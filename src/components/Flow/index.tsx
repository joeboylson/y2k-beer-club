import styled from "styled-components";
import { WithChildren } from "../../types";

export default function Flow({ children }: WithChildren) {
  const StyledFlow = styled("div")`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
  `;

  return <StyledFlow>{children}</StyledFlow>;
}
