# DasIoT React

## Installation for development

1. Install packages

```sh
npm install
```

2. Open Storybook

```sh
npm run storybook
```

## Usage

### Install package

1. [Create your personal access token.](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
   Your token has to have **read:packages** permission

2. Add **.npmrc** file in your project as follow

```
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_TOKEN>
@beeinventor:registry=https://npm.pkg.github.com
```

3. Run

```sh
yarn add @beeinventor/dasiot-react-component-lib
```

### Import Component

1. Add font into **index.html \<head\>** as below

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;500&display=swap"
  rel="stylesheet"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
/>
```

2. Setting Theme & Import Component

```tsx
// index.tsx
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import {
  theme as beeinventerTheme,
  Button,
} from '@beeinventor/dasiot-react-component-lib';

const myTheme = createTheme({
  ...beeinventerTheme,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#E5E5E5',
        },
      },
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={myTheme}>
        <CssBaseline />
        <Button variant="contained">Test</Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
```
