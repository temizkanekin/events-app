## Live version on Netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/64043da6-cb0b-4898-823c-d20f1e0aee3b/deploy-status)](https://app.netlify.com/sites/nifty-ride-c50c1c/deploys)

https://nifty-ride-c50c1c.netlify.app/

## Description about app

- This Events app consists of two components. These are: 
  - A table component to list data that is placed in the sample_data.ts
  - A right panel component to display detail about the selected data
- First 5 column are displayed in the Table and the rest of the data is displayed in the right panel _DETAILS_ section
- You can see the location information in _LOCATION_ section for each data (map is re-rendering immediately when center changes)
- You can see the media information in _MEDIA_ section for each data. If the media is an image, you can click on image to see image in separate dialog.
- App is 100vh total, you can scroll in _EVENTS_/_EVENT DETAILS_ section.
- App has mobile responsiveness.


## Technologies/Libraries Used

- [Tailwind CSS](https://tailwindcss.com/) : Highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.
- [styled components](https://styled-components.com/): styled-components utilises tagged template literals to style your components.
- [leaflet](https://leafletjs.com/): an open-source JavaScript library for mobile-friendly interactive maps.
- [react-leaflet](https://react-leaflet.js.org/): React components for Leaflet maps


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install the node dependencies before run the app.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify