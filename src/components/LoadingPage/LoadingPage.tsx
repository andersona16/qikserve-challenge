import { TailSpin } from "react-loader-spinner";

import { LoadingContainer } from "./styles";

const LoadingPage = () => {
  return (
    <>
      <LoadingContainer>
        <TailSpin width={34} height={34} color="#4f372f" />
      </LoadingContainer>
    </>
  );
};

export default LoadingPage;
