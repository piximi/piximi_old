import Button from "@material-ui/core/Button/Button";
import {openAction} from "@piximi/store";
import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {categoriesCountSelector} from "@piximi/store";

import {useStyles} from "./OpenButton.css";

type OpenButtonProps = {
  next: any;
};

const pathname =
  "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

export const OpenButton = (props: OpenButtonProps) => {
  const {next} = props;

  const dispatch = useDispatch();
  const catagoriesCount = useSelector(categoriesCountSelector);

  const onClick = useCallback(() => {
    const payload = {pathname: pathname, classes: catagoriesCount, units: 100};

    dispatch(openAction(payload));

    next();
  }, [dispatch]);

  const classes = useStyles({});

  return (
    <Button
      className={classes.button}
      color="primary"
      onClick={onClick}
      variant="contained"
    >
      Open
    </Button>
  );
};
