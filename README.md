# TS React Redux Bingo game

A React bingo game kit(based on create-react-app) 

## Quick start

1.  Make sure that you have Node.js and npm are installed.
2.  Clone this repo using `git clone https://github.com/medaymenTN/Bingo-React.git`
3.  Move to the appropriate directory: `Bingo-React`
4.  Start your project using: `npm run start`

## File Structure

```
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
└── src
| |__components
| |__containers
| |__store
| | |__bingoStore
| | | |
| | | |__types.d.ts
| | | |__bingo.action.creators.ts
| | | |__bingo.action.ts
| | | |__bingo.reducer.ts
| | |
| | |__rootReducer.ts
| | |__store.ts
| | |__types.d.ts
| |
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
└── serviceWorker.js
└── setupTests.js
```

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

