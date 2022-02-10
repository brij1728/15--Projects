import * as React from "react";

import { Review } from "../../components/Review";
import { data } from "../../components/data";
import { useStyles } from "./styles";

export const Home = () => {
  const classes = useStyles();

  const [reviewData, setReviewData] = React.useState(data[0]);
  let currentIndex = 0;
  const prevButton = () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = data.length - 1;
    }
    setReviewData(data[currentIndex]);
  };

  const nextButton = () => {
    currentIndex++;
    if (currentIndex > data.length - 1) {
      currentIndex = 0;
    }
    setReviewData(data[currentIndex]);
  };
  return (
    <div className={classes.div}>
      <Review
        author={reviewData.name}
        job={reviewData.job}
        img={reviewData.img}
        text={reviewData.text}
        prevButton={prevButton}
        nextButton={nextButton}
      />
    </div>
  );
};
