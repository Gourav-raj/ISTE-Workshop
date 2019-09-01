import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { WithStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import { Container, IconButton } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  });

interface Props extends WithStyles<typeof styles> {}

const NavBar: React.FunctionComponent<Props> = ({ classes, ...props }) => (
  <AppBar position="sticky" color="primary">
    <Container maxWidth="lg">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </Container>
  </AppBar>
);
NavBar.displayName = "NavBar";
export default withStyles(styles)(NavBar);
