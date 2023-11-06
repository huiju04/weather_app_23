import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
    0deg,
    rgba(191, 137, 255, 1) 0%,
    rgba(173, 173, 255, 1) 30%,
    rgba(155, 238, 255, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 100px 20px;
  color: white;
`;

const Location = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Temp = styled.div`
  font-size: 70px;
  font-weight: 600;
`;

const Desc = styled.div`
  font-size: 18px;
`;

const Separ = styled.div`
  width: 50px;
  height: 5px;
  background-color: white;
`;

const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  &:last-child {
    border-right: none;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
  }
`;

export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["weather"],
    queryFn: getWeather,
  });
  // =>api에 요청할때 사용하는 hook
  // =>비동기 통신 사용시 상태관리하는 hook
  // =>useQuery를 사용할땐 반드시 QueryClientProvider를 설정해줘야 됨

  console.log(data);

  // const { name } = data;

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <Wrap>
          <Location>{data?.name}</Location>
          <Temp>{Math.round(data?.main?.temp)}°</Temp>
          <Desc>{data?.weather[0]?.description}</Desc>

          <Separ></Separ>

          <ConWrap>
            <Con>
              <h3>체감 온도</h3>
              <p>{Math.round(data?.main?.feels_like)}°</p>
            </Con>
            <Con>
              <h3>최저 온도</h3>
              <p>{Math.round(data?.main?.temp_min)}°</p>
            </Con>
            <Con>
              <h3>최고 온도</h3>
              <p>{Math.round(data?.main?.temp_max)}°</p>
            </Con>
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};
