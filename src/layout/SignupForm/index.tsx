import { Mailbox } from "@phosphor-icons/react";
import { useState } from "react";
import styled from "styled-components";

const StyledSignupForm = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  h3 {
    display: flex;
    align-items: center;
  }
`;

const InputWrapper = styled.div`
  display: grid;

  label {
    font-size: 12px;
    line-height: calc(12px * 1.3);
    padding-left: 16px;
    font-weight: bold;
  }
`;

const SubmitButton = styled.button`
  background-color: #43a047;
  color: white;
  border: 0;
  outline: 0;
  height: 42px;
  border-radius: 42px;
`;

interface _props {
  onSubmit: (email?: string, phone?: string) => void;
}

export default function SignupForm({ onSubmit }: _props) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\d{3}\d{3}\d{4}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = () => {
    const emailIsEmpty = email === "";
    const phoneIsEmpty = phone === "";
    if (emailIsEmpty && phoneIsEmpty)
      return setError("Please submit an email or a phone number");

    if (!emailIsEmpty && !validateEmail(email))
      return setError("Your email is not in the correct format.");

    if (!phoneIsEmpty && !validatePhone(phone))
      return setError(
        'Your Phone number is not in the correct format.\nPlease use the "xxx-xxx-xxxx" format'
      );

    onSubmit(email, phone);
  };

  return (
    <StyledSignupForm>
      <h3>
        <Mailbox size={50} color="#42a5f5" />
        &nbsp; Sign Up:
      </h3>
      <p>Enter your email or phone below.</p>
      <p>
        You’ll only receive messages directly related to Y2KBC events and
        updates — no spam, no promotions!
      </p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <InputWrapper>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label>Phone Number: (ex: 1112223333)</label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </InputWrapper>
      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
    </StyledSignupForm>
  );
}
