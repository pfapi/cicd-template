# cicd-template

A template monorepo repo for ci/cd using lerna and github actions. The purpose of this project is to find the common patterns and non-trivial nuances for monorepo project with lerna running on github and to provide a smooth ci/cd experience template.

Three simple node projects:

<img alt="projects graph" src="https://github.com/pfapi/cicd-test/blob/development/images/graph.png" />

## Requirements

Two github actions secrets: 

1) GH_TOKEN: github personal access token
2) NPM_TOKEN: npm access token

## Branches

* main - keeps the latest released and production code, only accept pull requests from the development.
* development - keeps the latest development code, only accept pull requests from feature branches.
* feature branches - where actual development works happen

## Workflows

1) when a pull request from a feature branch to the development is submitted

    a) tests workflow runs automatically and will merge the code if the tests pass and the requestor is a collaborator.

    b) github collaborator APIs query result shows that owner is also a collaborator.

    c) after merging the code, tests workflow publishes major.minor.patch-beta.x versioned npm packages.

2) when a pull request from the development branch to the main is submitted

    a) release workflow runs automatically and will merge the code if the tests pass

    b) release workflow publishes major.minor.patch versioned npm packages.

    c) release workflow also generate github release tagged with the version

3) creating to-release issue

    a) when an issue title starts with to-release created, the to-release workflow is triggered.

    b) To avoid merge conflicts, to-release workflow syncs all lerna changed files between development and main branches.

    c) to-release workflow closes the issue and create a pull request with the same title.

4) title for to-release issue and pull request from the development to the main

    a) if it is not started with to-release or exact as to-release, the default bump option for lerna version is patch.

    b) if it is to-release-patch, to-release-minor, to-release-major, to-release-1.2.3, the last part is the bump option for lerna version

     

