# Engawa 🏡 ⛩ 🌱

**engawa 縁側** - The veranda and/or gate that serves as a link between the outdoor garden and traditional Japanese dwelling. Meant to protect it from the elements or open it completely to the outdoors.

## Technology Stack

Engawa leverages the [Aqua](https://github.com/jedireza/aqua) web framework for quick feature development.
Server side, Aqua is built with the [hapi](https://hapijs.com/) framework.
We're using [MongoDB](http://www.mongodb.org/) as a data store.

The front-end is built with [React](https://github.com/facebook/react). We use
[Redux](https://github.com/reactjs/redux) as our state container. Client side
routing is done with [React Router](https://github.com/reactjs/react-router).
We're using [Gulp](http://gulpjs.com/) for the build system.

We use [`bcrypt`](https://github.com/ncb000gt/node.bcrypt.js) for hashing
secrets. If you have issues during installation related to `bcrypt` then [refer
to this wiki
page](https://github.com/jedireza/aqua/wiki/bcrypt-Installation-Trouble).


## Contribute

We use the Engawa [waffle](https://waffle.io/josheche/engawa) board for issue tracking and feature development.
We use [gitflow](https://github.com/nvie/gitflow) for git using Vincent Driessen's branching model.

Follow the branching instructions below.

### Creating feature/release/hotfix/support branches

* To list/start/finish feature branches, use:

  		git flow feature
  		git flow feature start <name> [<base>]
  		git flow feature finish <name>

  For feature branches, the `<base>` arg must be a commit on `develop`.

* To push/pull a feature branch to the remote repository, use:

  		git flow feature publish <name>
		  git flow feature pull <remote> <name>

* To list/start/finish release branches, use:

  		git flow release
  		git flow release start <release> [<base>]
  		git flow release finish <release>

  For release branches, the `<base>` arg must be a commit on `develop`.

* To list/start/finish hotfix branches, use:

  		git flow hotfix
  		git flow hotfix start <release> [<base>]
  		git flow hotfix finish <release>

  For hotfix branches, the `<base>` arg must be a commit on `master`.

* To list/start support branches, use:

  		git flow support
  		git flow support start <release> <base>

  For support branches, the `<base>` arg must be a commit on `master`.


## Installation

```bash
$ git clone git@github.com:josheche/engawa.git
$ cd engawa
$ npm install
```


## Configuration

Simply edit `config.js`. The configuration uses
[`confidence`](https://github.com/hapijs/confidence) which makes it easy to
manage configuration settings across environments. __Don't store secrets in
this file or commit them to your repository.__

__Instead, access secrets via environment variables.__ We use
[`dotenv`](https://github.com/motdotla/dotenv) to help make setting local
environment variables easy (not to be used in production).

Simply copy `.env-sample` to `.env` and edit as needed. __Don't commit `.env`
to your repository.__


## First time setup

__WARNING__: This will clear all data in the following MongoDB collections if
they exist: `accounts`, `adminGroups`, `admins`, `authAttempts`, `sessions`,
`statuses`, and `users`.

```bash
$ npm run first-time-setup

# > aqua@0.0.0 first-time-setup /home/YOURNAME/projects/aqua
# > node first-time-setup.js

# MongoDB URL: (mongodb://localhost:27017/aqua)
# Root user email: your@emailhere.com
# Root user password: Badpassword1234
# Setup complete.
```


## Running the app

```bash
$ npm start

# > aqua@0.0.0 start /Users/YOURNAME/projects/engawa
# > gulp react && gulp

# [23:41:44] Using gulpfile ~/projects/engawa/gulpfile.js
# ...
```

Now you should be able to point your browser to http://127.0.0.1:8000/ and see
the welcome page.

[`nodemon`](https://github.com/remy/nodemon) watches for changes in server code
and restarts the app automatically. [`gulp`](https://github.com/gulpjs/gulp) and
[`webpack`](https://github.com/webpack/webpack) watch the front-end files and
re-build those automatically too.

We also pass the `--inspect` flag to Node so you have a debugger available.
Watch the output of `$ npm start` and look for the debugging URL and open it in
Chrome. It looks something like this:

`chrome-devtools://devtools/remote/serve_file/@62cd277117e6f8ec53e31b1be58290a6f7ab42ef/inspector.html?experiments=true&v8only=true&ws=localhost:9229/node`


## Running in production

```bash
$ node server.js
```

Unlike `$ npm start` this doesn't watch for file changes. Also be sure to set
these environment variables in your production environment:

 - `NODE_ENV=production` - This is important for many different optimizations,
   both server-side and with the front-end build files.
 - `NPM_CONFIG_PRODUCTION=false` - This tells `$ npm install` to not skip
   installing `devDependencies`, which we need to build the front-end files.


## Running tests

[Lab](https://github.com/hapijs/lab) is part of the hapi ecosystem and what we
use to write all of our tests.

```bash
$ npm test

# > aqua@0.0.0 test /Users/YOURNAME/projects/engawa
# > lab -t 100 -S -T ./test/lab/transform -L --lint-options '{"extensions":[".js",".jsx"]}' ./test/lab/client-before.js ./test/client/ ./test/lab/client-after.js ./test/server/ ./test/lab/server-after.js ./test/misc/

#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ..................................................
#  ...............

# 865 tests complete
# Test duration: 6382 ms
# No global variable leaks detected
# Coverage: 100.00%
# Linting results: No issues
```

## Deploying to Heroku

We're using Heroku for hosting.

Follow this link for [instructions on deploying an Aqua app to Heroku](https://github.com/jedireza/aqua/wiki/Deploying-to-Heroku).


## License

MIT
