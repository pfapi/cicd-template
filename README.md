# cicd-template

It is a template monorepo repo for ci/cd using lerna and github actions. The purpose is to find the common patterns and non-trivial nuances and to provide a smooth ci/cd experience template.

Three simple node projects:

<img alt="projects graph" src="https://github.com/pfapi/cicd-test/blob/development/images/graph.png" />

## Requirements

Two github actions secrets: 

1) GH_TOKEN: github personal access token - starts with ghp_
2) NPM_TOKEN: npm access token - starts with npm_

## Branches

* main - keeps the latest released and production code, only accept pull requests from the development.
* development - keeps the latest development code, accept pull requests from feature branches and forked repo.
* feature branches - where development works happen
* branch of a forked repo - where development works happen

## Workflows

1) When a pull request from a feature branch to the development is submitted

    a) tests workflow runs automatically. if the tests pass, it will merge the code.

    b) after merging the code, tests workflow publishes major.minor.patch-beta.x versioned npm packages.

2) When a pull request of a forked repo to the development is submitted

    a) the forked pull request will wait for approval or runs automatically, depending on settings.

    b) after that, tests workflow runs but will not merge the code.

    c) to get major.minor.patch-beta.x versioned npm packages, owner needs to manually merge and start the tests workflow.

3) When a pull request from the development branch to the main is submitted (release pull request)

    a) release workflow runs automatically and will merge the code if the tests pass.

    b) release workflow publishes major.minor.patch versioned npm packages.

    c) release workflow also generate github release tagged with the version.

4) to-release workflow

    a) when an issue title starts with to-release created, the to-release workflow is triggered.

    b) To avoid merge conflicts, to-release workflow syncs all lerna changed files between development and main branches.

    c) to-release workflow closes the issue and create a pull request with the same title.

5) Title for to-release issue and the release pull request

    a) if it is not started with to-release or exact as to-release, the default bump option for lerna version is patch.

    b) if it is to-release-patch, to-release-minor, to-release-major, to-release-1.2.3, the last part is the bump option for lerna version

     

