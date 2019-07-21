import React, { useState, useMemo } from "react";
import "./BuildControls.css";
import Button from "@material-ui/core/Button";
import BuildControl from "./BuildControl/BuildControl";
import Modal from "../../Modals/orderModal";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

function BuildControls(props) {
  const [open, setOpen] = useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const OrderModal = useMemo(() => {
    return (
      <Modal
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        price={props.price.toFixed(2)}
        // disabled={!props.purchasable}
        ingredients={props.ingredients}
      />
    );
  }, [open]);

  return (
    <>
      <div className="BuildControls">
        <p>
          Current Price: <strong>{props.price.toFixed(2)}</strong>
        </p>

        {controls.map(ctrl => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        ))}
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          disabled={!props.purchasable}
        >
          ORDER NOW
        </Button>

        {OrderModal}
      </div>
    </>
  );
}

export default BuildControls;
