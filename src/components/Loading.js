import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadinAni = keyframes`
100%{
    transform: rotate(360deg);
}
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid black;
  border-color: salmon transparent transparent transparent;
  animation: ${LoadinAni} 1s infinite;
`;

export const Loading = () => {
  return (
    <Container>
      <Spinner></Spinner>
    </Container>
  );
};
