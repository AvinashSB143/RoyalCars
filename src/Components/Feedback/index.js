import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import "./feedback.css";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = (theme) => ({
  paper: {
    height: "auto !important",
    marginTop: "15%",
    padding: "2rem",
  },
});

export function SwipeableTemporaryDrawer({ classes }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const formFeedback = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 420 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <p className="feedback-para">
        Tell us about your experience with Spinny and if there is something that
        we can do to make it better.
        <span>*</span>
      </p>
      <textarea className="feedback-description"></textarea>
      <div className="btn-wrapper">
        <button className="submit">Submit</button>
        <button className="cancel">Cancel</button>
      </div>
    </Box>
  );

  return (
    <div className="demo">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            classes={{
              paper: classes.paper,
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {formFeedback(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const Feedback = (props) => {
  return (
    <div>
      <SwipeableTemporaryDrawer {...props} />
      <button>Feedback</button>
    </div>
  );
};

export default withStyles(styles)(Feedback);
