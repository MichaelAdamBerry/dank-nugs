import styled from "@emotion/styled";

export const PostDate = styled.p`
  font-style: italic;
  margin-bottom: 0.7rem;
  font-size: 0.8rem;
  color: var(--blueish);
  text-align: ${props => (props.right ? "right" : "left")};
  &:before {
    content: ${props => (!props.modifiedDate ? "'Posted '" : "' Updated '")};
  }
`;
