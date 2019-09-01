import React from "react";
import {
  Typography,
  Container,
  Grid,
  Button,
  useMediaQuery
} from "@material-ui/core";
import { WithStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core/styles";
import Link from "next/link";
import theme from "../theme";
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
      width: 200,
      [theme.breakpoints.down("sm")]: {
        margin: "auto"
      }
    },
    buttonGroup: { marginTop: "2rem" }
  });

interface Props extends WithStyles<typeof styles> {}

const MainPage: React.FunctionComponent<Props> = ({ classes, ...props }) => {
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container className={classes.container} maxWidth={matchSm ? "sm" : "xl"}>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} md={4}>
          <figure>
            <img
              src="/static/iste_logo_start_tp.png"
              alt="ISTE Logo"
              className={classes.logo}
            />
          </figure>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            align={matchSm ? "center" : "left"}
            variant={matchSm ? "h3" : "h2"}
            component="h1"
            gutterBottom
            className={classes.heading}
            color="primary"
          >
            Workshops here
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            align={matchSm ? "center" : "left"}
          >
            The world is growing, and keeping up with it is all we can do. At
            ISTE MANIT, we will always keep learning. Therefore, we present to
            you workshops on Internet Of Things and Data Science, because
            learning today builds a better tomorrow.
          </Typography>
          <Grid
            container
            spacing={2}
            className={classes.buttonGroup}
            justify={matchSm ? "center" : "flex-start"}
          >
            <Grid item>
              <Link href="/workshop" passHref>
                <Button component="a" variant="outlined" color="primary">
                  Know More
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" passHref>
                <Button component="a" variant="contained" color="primary">
                  Register
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

MainPage.displayName = "MainContent";

export default withStyles(styles)(MainPage);
