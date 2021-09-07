# DasIoT React

## Installation for development

1. Install packages

```sh
yarn
```

2. Install peer dependencies

```sh
yarn install-peers -f
```

3. Open Storybook

```sh
yarn storybook
```

## Usage

###  Install package

1. Add this. to package.json

```json
{
  "dependencies": {
    // ... other dependencies
    "dasiot-react-component-lib": "git+ssh://git@github.com/BeeInventor/dasiot-react-component-lib"
  }
}
```
2. Run yarn 
```sh
yarn
```

### Import Component

```tsx
import Button from 'dasiot-react-component-lib';

const App = () => {
  return (
    <Button />;
  );
}
```
