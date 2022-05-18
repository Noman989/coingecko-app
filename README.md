
# Coingecko API App
![Home Page](https://i.ibb.co/V9pm4GS/Capture2.png)
![CoinId Page](https://i.ibb.co/PFPT4vm/Capture3.png)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) typescript template. **The App is very simple and the code is for the major part self-explanatory!**

## App features
1) shows list of hardcoded coins with data fetched from coingecko api.
2) shows more details of any valid coinid; data fetched from coingecko api. see `src/utils/coins_list.full.json` for full list of valid coin id's.
3) ~~compares 2 coins side by side~~. feature scrapped. feel free to continue on your own.

## Tech Stack
1) nodejs
2) typescript
3) tailwindcss
4) React
6) React Router v6
7) chart.js
8) Reduxjs/toolkit

## App Architecture
![OverView](https://i.ibb.co/khgmCKc/Capture.png)
When user visits the app the App component loads in data from the coingecko API to fill in the table and the charts.  There is a link inside every row that points to the coin id page of that coin. The CoinId page also loads in information of the coinid inside the url parameter. The Nav component contains links to HomePage and ~~Compare Page~~ also an input field for loading any coin data by providing a valid coin id. List of valid Coin Id's is stored in utils folder.

## Technical Decisions
##### 1) Typescript over Javascript
Choosing typescript over javascript is really a no brainer. I choose typescript to avoid type errors and to practice typesafety. it improves workflow and decreases development time.
##### 2) Fetch over Axios
while axios is better and more refined; for smaller projects its an unneeded complexity.
##### 3) Tailwindcss over CSS / MUI
Tailwind css is superior to vanilla css because it saves time. while component libraries are a mess to customize.

## Code Structure
```
api                     this folder houses centralized files for calling external API's
components              this folder houses components used in pages
pages                   root level componets ( after App )
store                   Reduxjs/toolkit
utils                   contains list of valid coin id's
```

## API - coingecko.ts
contains functions for calling coingecko api for crypto currencies data.

## Components
1) Nav
2) Chart
3) Table
#### Nav :
Nav is very straightforward; uses `useNavigate` and `useLocation` for logic and redirection.
`components/nav/nav.tsx` contains the component it self and `component/nav/index.tsx` reexports the component. for Components i am using named exports instead of default exports for better naming conventions.
Nav is used inside src/App.tsx
**code is self explanatory.**

#### Chart :
Chart.js line chart shows pricing for last 7 days.

#### Table :
Displays data of hardcoded coin ids, data is fetched from redux store. data in redux store is initialized at `useEffect` of App.tsx.

## Pages
1) Home
2) CoinId
3) ~~Compare~~ scrapped.

#### Home :
Home Page contains the Table component

#### Coin Id :
Coin Id page shows extended detail of a coin from the coingecko API.

#### ~~Compare~~ :
Scrapped the page due to time constraints. If the idea was implemented 2 card from CoinId page will be used side by for comparisons.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`
> :warning: **No tests written**: tests wont run!

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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
