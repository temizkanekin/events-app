import styled from "styled-components";

export const Button: any = styled.button`
  background-color: ${(props: any) =>
    props.buttonType === "success" ? "#3ba935" : "#535a72"};
  color: #fff;
  font-weight: bold;
  // width: ${(props: any) => props.large ? "200px" : props.medium ? "100px" : "75px"};
  width: ${(props: any) => props.fullWidth && "100%"};
  min-height: 35px;
  min-width: 75px;
  border-radius: 4px;
  transition-duration: 0.4s;
  border: none;
  font-size: ${(props: any) =>
    props.large ? "16px" : props.medium ? "14px" : "12px"};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:disabled {
    background-color: "#454f63";
    opacity: 0.2;
    pointer-events: none;
  }
`;
