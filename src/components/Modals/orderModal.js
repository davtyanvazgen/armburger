import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

export default function Modal(props) {
  const selectedIngredients = (function() {
    let selectedIng = [];
    for (let key in props.ingredients) {
      if (props.ingredients[key] !== 0) {
        selectedIng.push({ [key]: props.ingredients[key] });
      }
    }

    return selectedIng.map((el, i) => {
      return (
        <DialogContentText key={el + i}>
          {Object.keys(el)}: {el[Object.keys(el)]}
        </DialogContentText>
      );
    });
  })();

  console.log("modal-selectedIngredients ", selectedIngredients);

  return (
    <div>
      <Dialog
        fullWidth={true}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Dialog Title</DialogTitle>
        <DialogContent>
          <Typography variant="h5" gutterBottom>
            Price: {props.price}$
          </Typography>
          {selectedIngredients}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={props.handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
