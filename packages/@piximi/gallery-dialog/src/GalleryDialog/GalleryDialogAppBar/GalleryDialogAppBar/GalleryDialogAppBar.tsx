import * as React from "react";
import {styles} from "./GalleryDialogAppBar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import classNames from "classnames";
import {
  initializeSearch,
  clearSearch,
  ImageSearch,
  search
} from "../ImageSearch/ImageSearch";
import {ConnectedImportImagesButton} from "../ImportImagesButton";
import {DeleteImageButton} from "../DeleteImageButton";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(styles);

export const GalleryDialogAppBar = (props: any) => {
  const classes = useStyles({});

  const {
    toggle,
    toggled,
    selectedImages,
    setSelectedImages,
    images,
    categories,
    changeImagesVisibility
  } = props;

  const [searchInput, setSearchInput] = React.useState<string>("");
  const [clearSearchResults, setClearSearchResults] = React.useState<boolean>(
    false
  );
  const onSearchInputChange = (event: React.FormEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;
    setSearchInput(target.value);
  };

  const onSearchIconClick = () => {
    initializeSearch(categories, images, changeImagesVisibility);
    const searchResultsToClear: boolean = search(searchInput);
    setClearSearchResults(searchResultsToClear);
  };

  const onClearImageSearchClick = () => {
    clearSearch();
    setSearchInput("");
    setClearSearchResults(false);
  };

  const onKeyPress = (ev: any) => {
    if (ev.key === "Enter") {
      onSearchIconClick();
    }
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <div style={{flexGrow: 1}} />

        <ImageSearch
          onClearImageSearchClick={onClearImageSearchClick}
          onSearchIconClick={onSearchIconClick}
          onSearchInputChange={onSearchInputChange}
          clearSearchResults={clearSearchResults}
          onKeyPress={onKeyPress}
        />

        <div className={classNames(classes.padding)} />

        <ConnectedImportImagesButton />

        <div className={classNames(classes.padding)} />

        <DeleteImageButton
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </Toolbar>
    </AppBar>
  );
};
