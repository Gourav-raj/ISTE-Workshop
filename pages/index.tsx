import React from "react";
import { withTheme } from "@material-ui/core/styles";
import MainPage from "../src/components/MainPage";
interface Props {}

const Index: React.FunctionComponent<Props> = props => {
  return (
    <>
      <MainPage />
    </>
  );
};

export default withTheme(Index);
