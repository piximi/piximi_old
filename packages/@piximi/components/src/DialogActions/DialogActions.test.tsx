import ReactDOM from "react-dom";
import DialogActions from "./DialogActions";
import * as React from "react";

it('renders without crashing', () => {
  const acceptanceTitle = '';

  const cancellationTitle = '';

  const onAcceptance = () => {};

  const onCancellation = () => {};

  const e = (
    <DialogActions
      acceptanceTitle={acceptanceTitle}
      cancellationTitle={cancellationTitle}
      onAcceptance={onAcceptance}
      onCancellation={onCancellation}
    />
  );

  ReactDOM.render(e, document.createElement('div'));
});
