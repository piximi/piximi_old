import {Image, Partition, Category} from "@piximi/types";
import {compileExpression} from "filtrex";
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Clear from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";

let changeImagesVisibilityFunction: (
  itentifiers: string[],
  visibility: boolean
) => void;
let invisibleImages: string[] = [];

const categoryDict: {[identifier: string]: string} = {};
const flattendedImages: {
  identifier: string;
  category: string;
  probability: number;
  prediction: string;
  partition: string;
}[] = [];

export const search = (searchInput: string) => {
  try {
    var searchFunction = compileExpression(searchInput);
  } catch (error) {
    alert("invalid search input");
    return true;
  }

  const negativeSearchResults: string[] = [];
  const positiveSearchResults: string[] = [];
  flattendedImages.forEach((image) => {
    if (searchFunction(image) === 0) {
      negativeSearchResults.push(image.identifier);
    } else {
      positiveSearchResults.push(image.identifier);
    }
  });

  changeImagesVisibilityFunction(negativeSearchResults, false);
  changeImagesVisibilityFunction(positiveSearchResults, true);

  invisibleImages = negativeSearchResults;
  return invisibleImages.length !== 0;
};

export const ClearSearch = () => {
  changeImagesVisibilityFunction(invisibleImages, true);
};

export const InitializeSearch = (
  categories: Category[],
  images: Image[],
  changeImagesVisibility: (itentifiers: string[], visibility: boolean) => void
) => {
  changeImagesVisibilityFunction = changeImagesVisibility;

  categories.forEach((category: Category) => {
    categoryDict[category.identifier] = category.description;
  });
  images.forEach((image: Image) => flattenImage(image));
};

const getPrediction = (image: Image) => {
  let maxScore = 0;
  let lableIndex = 0;
  for (let i = 0; i < image.scores.length; i++) {
    if (image.scores[i].probability > maxScore) {
      maxScore = image.scores[i].probability;
      lableIndex = i;
    }
  }
  return {
    prediction: image.scores[lableIndex].categoryIdentifier,
    probability: image.scores[lableIndex].probability
  };
};

const flattenImage = (image: Image) => {
  let probability: number;
  let prediction: string;
  if (image.scores.length === 0) {
    probability = -1;
    prediction = "none";
  } else {
    const imagePrediction = getPrediction(image);
    probability = imagePrediction.probability;
    prediction = imagePrediction.prediction;
  }

  const category = categoryDict[image.categoryIdentifier];
  const partition = Partition[image.partition].toLowerCase();

  flattendedImages.push({
    identifier: image.identifier,
    category: category,
    probability: probability,
    prediction: prediction,
    partition: partition
  });
};

type SearchProps = {
  onClearImageSearchClick: () => void;
  onSearchIconClick: () => void;
  onSearchInputChange: any;
  clearSearchResults: any;
  onKeyPress: any;
};

export const Search = (props: SearchProps) => {
  const {
    clearSearchResults,
    onClearImageSearchClick,
    onSearchIconClick,
    onSearchInputChange,
    onKeyPress
  } = props;

  return (
    <Tooltip
      title="Search Images: e.g. cetegory == positive"
      placement="bottom"
    >
      <Paper style={{height: 45, justifyContent: "center"}}>
        <InputBase
          placeholder="Search Images"
          style={{paddingLeft: "20px"}}
          onKeyPress={onKeyPress}
          onChange={onSearchInputChange}
        />

        {clearSearchResults && (
          <IconButton
            style={{paddingRight: "0px"}}
            onClick={onClearImageSearchClick}
            aria-label="clear search results"
          >
            <Clear />
          </IconButton>
        )}

        <IconButton aria-label="search" onClick={onSearchIconClick}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Tooltip>
  );
};
