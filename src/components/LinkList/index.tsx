import styled from "styled-components";
import WithLabel from "../WithLabel";

interface LinkProps {
  href: string;
  text: string;
  label: string;
  target?: "_blank";
}

interface _props {
  links: LinkProps[];
}

const StyledLinkList = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
`;

const Link = styled("a")`
  width: fit-content;
`;

export default function LinkList({ links }: _props) {
  return (
    <StyledLinkList>
      {links.map(({ href, text, label, target }) => {
        return (
          <WithLabel label={label}>
            <Link href={href} target={target}>
              → {text}
            </Link>
          </WithLabel>
        );
      })}
    </StyledLinkList>
  );
}
