# [`package.json`](https://docs.npmjs.com/files/package.json)

This document serves as a replacement for comments in `package.json`, since it includes a lot of configuration often requiring explanation.

[Return to Table of Contents](./README.md)

1. [name](#name)
1. [version](#version)
1. [private](#private)
1. [scripts](#scripts)
1. [dependencies](#dependencies)
1. [devDependencies](#devDependencies)
1. [engines](#engines)

## [`name`](https://docs.npmjs.com/files/package.json#name)

This field is used by the [Vue CLI UI](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui) and sometimes other tooling to display the name of the project.

## [`version`](https://docs.npmjs.com/files/package.json#version)

This field often isn't useful for applications, but some tooling complains or even breaks if `version` is missing.

## [`private`](https://docs.npmjs.com/files/package.json#private)

This field indicates to tooling that this project contains private source code, preventing it from being accidentally published to public registries such as NPM.

## [`scripts`](https://docs.npmjs.com/files/package.json#scripts)

This field allows you to define commands that can be run from the terminal and sometimes [from editors](https://code.visualstudio.com/docs/editor/tasks).

## [`dependencies`](https://docs.npmjs.com/files/package.json#dependencies)

This field allows you to define dependencies that will be included in your bundled source code.

Since changes to these dependencies directly affect the code you ship, they're all locked to specific versions rather than using version ranges. Somewhere between a weekly and monthly basis, it's recommended to run `npm outdated` to see what new versions have been released, then review the changelogs for each outdated dependency to determine:

- Whether you want to upgrade.

- Whether upgrading would require code changes (e.g. even a patch release fixing a bug may require you to update code that was previously working around or even relying on that bug).

- Whether upgrading might change your application's roadmap (e.g. a new feature may open possibilities that were previously inconceivable, unfeasible, or not worth the time).

Once you've determined how you'd like to proceed, you can update these versions manually and re-run `npm` to install the new versions.

## [`devDependencies`](https://docs.npmjs.com/files/package.json#devdependencies)

This field allows you to define dev dependencies, which are _not_ included in your bundled source code, but instead used in development for code compilation/transformation, development servers, tests, and other development tasks. Running `npm i -D <package>` will add dependencies to this list.

A few notable conventions:

- Instead of using `^`/`~` to specify version ranges, we're using `x` as a wildcard. For example, `1.2.x` will use the latest patch release of version `1.2`. The `x` notation tends to be much more intuitive to developers.

- All dev dependencies using stable versions (e.g. _not_ `alpha`, `beta`, `rc`, `next`, etc) are locked to a minor version (e.g. `1.2.x`). This allows dev dependency bugs to be automatically fixed with `npm upgrade`, while still requiring major/minor version upgrades to be done manually. It's strongly recommended to always check changelogs before upgrading to a new major or minor version. With a new major version, there are likely to be breaking changes requiring updates to your project's non-source code. With a new minor version, there are often new features that are important to be aware of, because they could improve the productivity of your team.

- Any dev dependencies using pre-release versions point to a specific version, rather than a version range, because any new version of pre-release software could contain breaking changes.

- The version of `vue-template-compiler` must always match the version of `vue` specified in `dependencies`.

## [`engines`](https://docs.npmjs.com/files/package.json#engines)

This field allows you to define specific versions for globally installed runtimes and tooling, such as [Node](https://nodejs.org) and [Yarn](https://yarnpkg.com). Ensuring that everyone on your team meets a minimum version threshold can vastly simplify debugging issues that only some developers experience.
