import React from "react";
import { WithStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { createStyles, Theme } from "@material-ui/core/styles";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery, ExpansionPanel, Grid, Button } from "@material-ui/core";
import theme from "../src/theme";
import LazyImage from "../src/components/LazyImage";
import Expansions from "../src/components/Expansions";
import Link from "next/link";
const styles = (theme: Theme) =>
  createStyles({
    mainContainer: {
      marginTop: "2rem",
      marginBottom: "2rem"
    },
    caption: {
      fontWeight: 600,
      marginBottom: 30,
      fontStyle: "italic"
    },
    emphasis: {}
  });

interface Props extends WithStyles<typeof styles> {}

const MainPage: React.FunctionComponent<Props> = ({ classes, ...props }) => {
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Head>
        <title>Workshops</title>
      </Head>
      <Container maxWidth="md" className={classes.mainContainer}>
        <Typography
          gutterBottom
          align="center"
          variant={matchSm ? "h3" : "h2"}
          component="h1"
        >
          Data Science and IoT Workshop
        </Typography>
      </Container>
      <LazyImage src="/static/art-big-data-blur-373543.jpg" />
      <Container maxWidth="md" className={classes.mainContainer}>
        <Typography variant="h6" className={classes.caption}>
          In a world that is increasingly becoming a digital space, Data science
          continues to evolve as one of the most promising and in-demand career
          paths for skilled professionals. D­ata Science is a buzzword with very
          few people knowing about the technology in its true sense, and in
          current scenario there is a huge need for skilled and certified Data
          Scientists as it is one of the most highly paid jobs under IT sectors.
          So this time under Version Beta ISTE SC MANIT is organizing workshop
          for the better understanding of Data Science and Internet of Things
          (IoT).
        </Typography>
        <Typography
          variant="body1"
          style={{ fontSize: "1.1em", lineHeight: 1.8 }}
        >
          Internet of Things has evolved from the convergence of wireless
          technologies. The internet of things helps people live and work
          smarter as well as gain complete control over their lives. IoT touches
          every industry, including healthcare, finance, retail and
          manufacturing. As such, IoT is one of the most important technologies
          of everyday life and it will continue to pick up steam as more
          businesses realize the potential of connected devices to keep them
          competitive. In Version Beta 2k18, The mentor for the workshop was
          none other than Mr Prateek Narang, the most coveted mentors in the
          field of Competitive Programming. His teaching style is widely
          appreciated and his track record speaks volumes of his capability. He
          has won a number of hackathons including{" "}
          <em className={classes.emphasis}>Google Code for India</em> and{" "}
          <em className={classes.emphasis}>Smart City Hackathon</em>.
        </Typography>
        <Expansions />
        <Grid container item justify="center">
          <Link href="/register">
            <Button variant="outlined">Register here</Button>
          </Link>
        </Grid>
      </Container>
    </>
  );
};

MainPage.displayName = "WorkShops";

export default withStyles(styles)(MainPage);
