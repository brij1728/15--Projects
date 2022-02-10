import * as React from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useStyles } from "./styles";

export interface IProps {
  author: string;
  job: string;
  img: string;
  text: string;
  prevButton?: () => void;
  nextButton?: () => void;
}
export const Review: React.FC<IProps> = ({
  author,
  job,
  img,
  text,
  prevButton,
  nextButton,
}: IProps) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} sx={{ maxWidth: 345 }}>
      <CardMedia component="img" image={img} />
      <CardContent>
        <Typography paragraph variant="h6">
          {author}
        </Typography>
        <Typography paragraph variant="h6">
          {job}
        </Typography>
        <Typography paragraph variant="h6">
          {text}
        </Typography>
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton aria-label="arrowback" onClick={prevButton}>
          <ArrowBackIosIcon className={classes.icon} />
        </IconButton>
        <IconButton aria-label="arrowForward" onClick={nextButton}>
          <ArrowForwardIosIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
