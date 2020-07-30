#### Prerequisites

-   yarn
-   nodejs
-   mongodb local server or remote server url

#### Available Commands

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

#### Getting started

-   Clone this repo
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

*   Further reading
    -   Add your own git
        ```
        rm -rf .git
        git init
        ```
    -   Customize `./src/docs/swagger.yml` file

#### On Commit

This is what happens under the hood:

-   git add .
-   git commit -u
    -   runs tests
    -   does linting
    -   updates version
-   git push

# Resources

-   Yarn:
    -   [Documentation](https://classic.yarnpkg.com/en/docs/)
-   GitHub:
    -   [Documentation](https://docs.github.com/en/github)
-   Swagger :
    -   [Specifications](https://swagger.io/specification/)
    -   [Editor](https://editor.swagger.io/)
