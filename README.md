# cicd-test

A test monorepo repo for ci/cd using lerna and github actions. The purpose of this project is to find common patterns and non-trivia nuaunces and to provide a smooth ci/cd experience template for monorepo project with lerna running on github.

Three simple node projects:

<img alt="projects graph" src="https://github.com/pfapi/cicd-test/blob/development/images/graph.png" />


## Branches

* main - keeps the latest release and production code, only accept pull requests from development.
* development - keeps the latest development code, only accept pull requests from feature branches.
* feature branches - where actual development works happen

## Workflows

1) when a pull request from a feature branch to development is submitted

    a) tests workflow runs automatically and will merge the code if the tests pass

    b) tests workflow publishes beta versioned npm packages.

2) when a pull request from the development branch to main us submitted

    a) release workflow runs automatically and will merge the code if the tests pass

    b) release workflow publishes major.minor.patch versioned npm packages.

    c) release workflow also generate github release tagged with the version

3) creating to-release issue

    a) when an issue title starts with to-release created, the to-release workflow is triggered.

    b) To avoid merge conflicts, to-release workflow syncs all lerna changed files between development and main branches.
    
    c) to-release workflow closes the issue and create a pull request with the same title.

4) title for to-release and pull request from development

    it can be to-release, to-release-patch, to-release-minor, to-release-major, to-release-1.2.3
    the last part is the bump option for lerna version

     

