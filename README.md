# Piximi

Piximi is a free, open source web app for performing image understanding tasks. It’s written by by dozens of engineers and scientists from institutions like the Biological Research Centre Szeged, Broad Institute of MIT and Harvard, Chan Zuckerberg Initiative, ETH Zurich, and FIMM Helsinki. 

Piximi's target users are computational or non-computational scientists interested in image analysis from fields like astronomy, biology, and medicine. 

## Organization

This repository includes both the Piximi web app (`packages/piximi`) and the handful of discrete @piximi sub-packages (`packages/@piximi/*`) written concurrently or alongside the web app. The packages included in the packages directory are versioned together and simultaneously published to the NPM package repository.

* `@piximi/components`: generic React components
* `@piximi/evaluate-classifier-dialog`: Piximi’s `EvaluateClassifierDialog` component
* `@piximi/fit-classifier-dialog`: Piximi’s `FitClassifierDialog` component
* `@piximi/gallery-dialog`: Piximi’s `GalleryDialog` component
* `@piximi/help-dialog`: Piximi’s `HelpDialog` component
* `@piximi/hooks`: generic React hooks
* `@piximi/image-viewer-dialog`: Piximi’s `ImageViewerDialog` component
* `@piximi/models`: Piximi’s TensorFlow.js models
* `@piximi/navigation-drawer`: Piximi’s `NavigationDrawer` component
* `@piximi/open-example-classifier-dialog`: Piximi’s `OpenExampleClassifierDialog` component
* `@piximi/send-feedback-dialog`: Piximi’s `SendFeedbackDialog` component
* `@piximi/settings-dialog`: Piximi’s `SettingsDialog` component
* `@piximi/store`: Piximi’s Redux actions, reducers, selectors, and stores
* `@piximi/theme`: Piximi’s Material UI theme
* `@piximi/translations`: Piximi’s translations
* `@piximi/types`: Piximi’s generic TypeScript definitions 
* `@piximi/upload-image-dialog`: Piximi’s `UploadImageDialog` component
* `piximi`: Piximi web app

## Scripts

### bootstrap

Use the `bootstrap` command to bootstrap the packages found in the ./packages directory:

```shell script
yarn bootstrap
```

### build

Use the `build` command to build the packages found in the ./packages directory:

```shell script
yarn build
```

### clean

Use the `clean` command to clean the build artifacts created by “build.”

```shell script
yarn clean
```

### test

Use the `test` command to run the unit tests found in the packages in the ./packages directory:

```shell script
yarn test
```

## Dependencies

Use the `lerna add` command to add a dependency to one or more packages. 

If a dependency is used by just one package, use the `scope` option to specify the correct package name. For example:

```shell script
lerna add foo --scope=@piximi/bar
```

adds the `foo` package to the decencies of the `@piximi/bar` package.

If a dependency is used by more than one package, use the `scope` option to specify the correct packages and provide the `peer` option to specify that the package is a peer dependency. For example:

```shell script
lerna add foo --peer --scope=@piximi/bar, @piximi/baz 
```

adds the `foo` package to the peer dependencies of both the `@piximi/bar` and `@piximi/baz` package.

If a dependency is used by every package (e.g. TypeScript) you can omit the `scope` option. For example, 

```shell script
lerna add foo ---peer 
```

adds the `foo` package to the peer dependencies of the packages found in `packages/@piximi` and the `packages/piximi` package.