# Tag Cloud Visualization App

This application is a React-based web app that displays a tag cloud visualization using the Circle Packing technique. It fetches tag cloud data from an API and renders it using the `CirclePackingCanvas` component.

## App.js

The `App.js` file is the main component of the application. It handles fetching the tag cloud data from the API, manages the component state, and renders the `CirclePackingCanvas` component. THRESHOLD_LIMIT for tag cloud can be set in app.js 

### Installation & Start the project.

1. Clone the repository or download the source code.
2. Open a terminal and navigate to the project directory.
3. Install the required dependencies by running `npm install`.
4. Start the application by running `npm start`.
5. Open the web app in your browser at `http://localhost:3000`.

Note: Backend service must be running before you start this project.

## CirclePackingCanvas.js

The `CirclePackingCanvas.js` file contains the `CirclePackingCanvas` component, which is responsible for rendering the tag cloud visualization using the `ResponsiveCirclePackingCanvas` component from the `@nivo/circle-packing` library.
