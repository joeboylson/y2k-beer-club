import styled from "styled-components";
import { WithChildren } from "../../types";

const StyledGridItem = styled("div")`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export default function RoundedWrapper({ children }: WithChildren) {
  return <StyledGridItem>{children}</StyledGridItem>;
}
