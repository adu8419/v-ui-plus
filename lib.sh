set -e

cd dist/v-ui-plus

npm publish --registry=https://registry.npmjs.org/

echo "Successfully published v-ui-plus"

cd -