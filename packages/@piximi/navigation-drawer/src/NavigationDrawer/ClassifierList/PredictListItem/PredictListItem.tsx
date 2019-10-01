import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useTranslation } from 'react-i18next';
import { Category, Image, Score } from '@piximi/types';
import { createPredictionSet } from '../../../FitClassifierDialog/FitClassifierDialog/dataset';
import * as tensorflow from '@tensorflow/tfjs';

type PredictListItemProbs = {
  createImageScore: (identifiers: string[], scores: Score[][]) => void;
  categories: Category[];
  images: Image[];
};

const createScores = (predictions: any, categories: Category[]) => {
  var scores: Score[][] = [];
  const lables: Category[] = categories.filter((category: Category) => {
    return category.identifier !== '00000000-0000-0000-0000-000000000000';
  });
  for (let i = 0; i < predictions.length; i++) {
    var imageScore: Score[] = [];
    var prediction: number[] = predictions[i].dataSync();
    for (let j = 0; j < lables.length; j++) {
      var categoryIdentifier = lables[j].identifier;
      var score: Score = {
        categoryIdentifier: categoryIdentifier,
        probability: prediction[j]
      };
      imageScore.push(score);
    }
    scores.push(imageScore);
  }
  return scores;
};

export const PredictListItem = (probs: PredictListItemProbs) => {
  const { createImageScore, categories, images } = probs;

  const { t: translation } = useTranslation();

  const predict = async () => {
    const model = await tensorflow.loadLayersModel('indexeddb://mobilenet');

    const predictionSet = await createPredictionSet(images);

    var predictions: any = [];
    for (let i: number = 0; i < predictionSet.identifiers.length; i++) {
      var prediction = await model.predict(predictionSet.data[i]);
      predictions.push(prediction);
    }

    const scores: Score[][] = createScores(predictions, categories);

    createImageScore(predictionSet.identifiers, scores);
  };

  return (
    <React.Fragment>
      <ListItem button dense onClick={predict}>
        <ListItemIcon>
          <LabelImportantIcon />
        </ListItemIcon>

        <ListItemText primary={translation('Predict')} />
      </ListItem>
    </React.Fragment>
  );
};
