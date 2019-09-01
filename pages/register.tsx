import React from "react";
import { WithStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import Head from "next/head";
const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "90vh"
    },
    heading: {
      letterSpacing: "0.3rem"
    },
    logo: {
      display: "block",
      height: 200,
      width: 200
    },
    buttonGroup: { marginTop: "2rem" }
  });

interface Props extends WithStyles<typeof styles> {}

const MainPage: React.FunctionComponent<Props> = ({ classes, ...props }) => {
  const router = useRouter();
  const { workshop } = router.query;
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
    </>
  );
};

MainPage.displayName = "MainContent";

export default withStyles(styles)(MainPage);
