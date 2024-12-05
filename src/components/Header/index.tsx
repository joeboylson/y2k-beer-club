import styled from "styled-components";
import MinimalButton from "../MinimalButton";
import { headerItems } from "./HeaderItems";
import WithLabel from "../WithLabel";

const StyledHeader = styled("div")`
  display: grid;
  grid-template-columns: repeat(${headerItems.length}, 24px);
  gap: 24px;
  place-items: center;
  width: fit-content;
  margin: 0 auto;
`;

const HeaderNavItem = styled(MinimalButton)`
  height: calc(24px + 8px + 8px);
  padding: 8px;
`;

export default function Header() {
  return (
    <StyledHeader>
      {headerItems.map(({ onClick, component, label }) => (
        <WithLabel label={label}>
          <HeaderNavItem onClick={onClick}>{component}</HeaderNavItem>
        </WithLabel>
      ))}
    </StyledHeader>
  );
}
