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
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
/>
```

2. Setting Theme

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '@beeinventor/dasiot-react-component-lib';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
```

1. Import Compoment

```tsx
// App.tsx
import { Button } from '@beeinventor/dasiot-react-component-lib';

const App = () => {
  return (
    <Button />;
  );
}
```
