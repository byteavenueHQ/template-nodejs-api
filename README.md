# Table of contents

-   Features
-   Installation
    -   Prerequisities
    -   Commands
    -   Resources
-   Usage
-   Contributing
-   Credits
-   License

# Features

-   `Express` app optimized to make better APIs
    -   Changed structure to fit the API only use case
    -   Removed `view` and `public` folder
    -   Added error handling without html/templating engines
    -   Added test route to understand the file structure and code splitting
-   Database connection using `mongoose`, based on environment (production
    ready)
-   Environment variable to help you control the app environment using `dotenv`
-   `Swagger` for API documentation
-   Pre-configured `husky` to run `eslint` and `prettier` on precommit hook,
    helps maintain best practices
-   Automatic versioning for apps on git push, using `yarn`
-   Tests pre-configured using `mocha` and `chai`

# Installation

#### Prerequisites

-   yarn
-   nodejs
-   mongodb local server or remote server url

#### Follow these steps to get your app up and running within minutes

-   Click on `Use this template`, create your repo and clone it into your local
    machine
-   Upgrade all the dependencies and their version
    ```
    yarn upgrade --latest
    ```
-   Install all the dependencies
    ```
    yarn install
    ```
-   Add `.env` file and copy variables from `.env.sample` file, add your own
    values
    ```
    touch .env
    cp .env.sample .env
    ```
-   Replace `your_app_name` in `./bin/www` and `package.json`, essentially you
    might want to customise the `package.json`
-   Run the app
    ```
    yarn start
    ```
-   Go to localhost:<your_port> or [localhost:3000](http://localhost:3000)
-   You can check the api documentation here -
    localhost:<your_port>/swagger/api-docs or
    [localhost:3000/swagger/api-docs](http://localhost:3000/swagger/api-docs)

#### Commands

-   To start the app
    ```
    yarn start
    ```
-   To test the app
    ```
    yarn test
    ```
-   To publish/push to github
    ```
    yarn release:[patch|minor|major]
    ```
    -   use `patch`: when your are fixing an issue with is very small and
        doesn't make major changes in logic and structure of the code.
    -   use `minor`: when you add/update any feature and update the logic of the
        code.
    -   use `major`: when a major change is being released, something that is
        going to make a difference.

#### Resources

-   Yarn:
    -   [Documentation](https://classic.yarnpkg.com/en/docs/)
-   GitHub:
    -   [Documentation](https://docs.github.com/en/github)
-   Swagger :
    -   [Specifications](https://swagger.io/specification/)
    -   [Editor](https://editor.swagger.io/)

# Usage

After you have the project up and running you can play around with almost any
file.

-   Customize `./src/docs/swagger.yml` file - pre development, during
    development or post development
-   Update the `.eslintrc`, `.prettierrc`, `.prettierignore` and
    `.lint-staged.config.js` file based on your usecase and company policies
-   Add/remove variables into `.env` or `.env.sample`
-   Remove `./docs` and `./_config.yml` if you don't want to use ghpages

# Contributing

Please make use of the ISSUE_TEMPLATES for opening issues and making PRs

# Credits

This project was bootstraped by
[@rajchandra3](https://github.com/rajchandra3).  
For contributions please feel free to make a PR.

# License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
