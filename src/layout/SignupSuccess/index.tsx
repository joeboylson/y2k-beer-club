import { CheckCircle } from "@phosphor-icons/react";
import styled from "styled-components";
import Tag from "../../components/Tag";

const StyledSignupSuccess = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  h3 {
    display: flex;
    align-items: center;
  }
`;

export default function SignupSuccess() {
  return (
    <StyledSignupSuccess>
      <h3>
        <CheckCircle size={50} color="#4caf50" />
        &nbsp; Success!
      </h3>
      <p>
        Happy to have you, we'll be in touch soon with details on upcoming
        events.
      </p>
      <p>
        Reach out anytime with questions, feedback, or to be removed from the
        signup list.
      </p>
      <Tag>Contact details at the bottom of the site</Tag>
    </StyledSignupSuccess>
  );
}
