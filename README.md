# To get the project working on your machine:

1. Clone the repo.
2. Run script: ```find ./src -name "*.ts" -exec sh -c 'mv "$0" "${0%.ts}.tsx"' {} \;``` to rename `./src` files to an extension permitting JSX in TypeScript because Udacity rejects files `.tsx` extensions. Run the reverse to push: ```find ./src -name "*.tsx" -exec sh -c 'mv "$0" "${0%.tsx}.ts"' {} \;```
3. Run `yarn` to install project dependancies.
4. Run `yarn start` to start project server.
5. Open URL `http://localhost:8080/`
