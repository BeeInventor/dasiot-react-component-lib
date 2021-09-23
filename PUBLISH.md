# Publish Package

## Local Publish

1. Delete below at package.json

```json
"publishConfig": {
    "@beeinventor:registry": "https://npm.pkg.github.com"
  },
```

2. Publish

```sh
npm publish --registry http://localhost:4873
```

## Local Unpublish

```
npm publish @beeinventor/dasiot-react-component-lib@<tag> --registry http://localhost:4873
```
