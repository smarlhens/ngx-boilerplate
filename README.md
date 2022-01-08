# Angular 13 - Boilerplate

[![GitHub CI](https://github.com/smarlhens/ngx-boilerplate/workflows/ci/badge.svg?branch=ng-13)](https://github.com/smarlhens/ngx-boilerplate/actions/workflows/ci.yml)
[![CircleCI](https://circleci.com/gh/smarlhens/ngx-boilerplate/ng-13?style=svg)](https://circleci.com/gh/smarlhens/ngx-boilerplate)
[![Build Status](https://travis-ci.com/smarlhens/ngx-boilerplate.svg?branch=ng-13)](https://travis-ci.com/smarlhens/ngx-boilerplate)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![GitHub issues](https://img.shields.io/github/issues/smarlhens/ngx-boilerplate)](https://github.com/smarlhens/ngx-boilerplate/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/smarlhens/ngx-boilerplate)](https://github.com/smarlhens/ngx-boilerplate/pulls)
[![GitHub stars](https://img.shields.io/github/stars/smarlhens/ngx-boilerplate)](https://github.com/smarlhens/ngx-boilerplate/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/smarlhens/ngx-boilerplate)](https://github.com/smarlhens/ngx-boilerplate/network)
[![GitHub contributors](https://img.shields.io/github/contributors/smarlhens/ngx-boilerplate)](https://github.com/smarlhens/ngx-boilerplate/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/smarlhens/ngx-boilerplate)](https://github.com/smarlhens/ngx-boilerplate/tree/ng-13)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/smarlhens/ngx-boilerplate)
![GitHub repo size](https://img.shields.io/github/repo-size/smarlhens/ngx-boilerplate)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.0.

## Table of contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [What's in the box ?](#whats-in-the-box-)
  - [CircleCI](#circleci)
  - [Commitizen](#commitizen)
  - [Commitlint](#commitlint)
  - [ESLint](#eslint)
  - [GitHub Actions](#github-actions)
  - [Husky](#husky)
  - [Lint-staged](#lint-staged)
  - [Prettier](#prettier)
  - [Travis CI](#travis-ci)
- [Code scaffolding](#code-scaffolding)
- [Build](#build)
- [Running unit tests](#running-unit-tests)
- [Running end-to-end tests](#running-end-to-end-tests)
- [Further help](#further-help)

---

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them :

- [Git](https://git-scm.com/)
- [Angular CLI](https://cli.angular.io/) _installed globally recommended_

### Installation

1. Clone the git repository

   ```bash
   git clone https://github.com/smarlhens/ngx-boilerplate.git
   ```

1. Go into the project directory

   ```bash
   cd ngx-boilerplate/
   ```

1. Checkout working branch

   ```bash
   git checkout <branch>
   ```

---

## What's in the box ?

### CircleCI

[CircleCI](https://circleci.com/) automates your software builds, tests, and deployments.

**CircleCI pipeline file**: [`.circleci/config.yml`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.circleci/config.yml).

For more configuration options and details, see the [configuration docs](https://circleci.com/docs/).

---

### Commitizen

[commitizen](https://github.com/commitizen/cz-cli) is a command line utility that makes it easier to create commit messages following the [conventional commit format](https://conventionalcommits.org) specification.

Use `git cz` instead of `git commit` to use commitizen.

[![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

**Configuration file**: [`.czrc`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.czrc).

---

### Commitlint

[commitlint](https://github.com/conventional-changelog/commitlint) checks if your commit messages meet the [conventional commit format](https://conventionalcommits.org).

**Configuration file**: [`.commitlintrc`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.commitlintrc).

In general the pattern mostly looks like this:

```sh
type(scope?): subject  #scope is optional
```

Are you a good `commitizen` ?

---

### ESLint

[ESLint](https://eslint.org/) is a fully pluggable tool for identifying and reporting on patterns in JavaScript.

**Ignore file**: [`.eslintignore`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.eslintignore).
**Configuration file**: [`.eslintrc`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.eslintrc).

For more configuration options and details, see the [configuration docs](https://eslint.org/docs/user-guide/configuring).

---

### GitHub Actions

[GitHub Actions](https://github.com/features/actions) makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

**CI workflow file**: [`.github/workflows/ci.yml`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.github/workflows/ci.yml).

---

### Husky

[Husky](https://github.com/typicode/husky) is a package that helps you create Git hooks easily.

**Configuration file**: [`.huskyrc`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.huskyrc).

---

### Lint-staged

[Lint-staged](https://github.com/okonet/lint-staged) is a Node.js script that allows you to run arbitrary scripts against currently staged files.

**Configuration file**: [`.lintstagedrc`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.lintstagedrc).

---

### Prettier

[Prettier](https://prettier.io/) is an opinionated code formatter.

**Configuration file**: [`.prettierrc`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.prettierrc).  
**Ignore file**: [`.prettierignore`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.prettierignore).

For more configuration options and details, see the [configuration docs](https://prettier.io/docs/en/configuration.html).

---

### Travis CI

[Travis CI](https://travis-ci.com/) is a hosted continuous integration service used to build and test software projects hosted at GitHub.

**Travis build file**: [`.travis.yml`](https://github.com/smarlhens/ngx-boilerplate/blob/ng-13/.travis.yml).

For more configuration options and details, see the [configuration docs](https://docs.travis-ci.com/).

---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

---

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

---

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

---

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

---

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
