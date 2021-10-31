# Heinz 95729 E-Commerce Tech Exercises

To get started with the exercises, clone this repository. Several tests require other libraries to work. Before running these exercises, navigate to this directory in a terminal, and run the following to get the dependencies.

> NOTE: regardless of which operating system you use, these instructions
> assume you're using a shell derived from bash, such as https://ohmyz.sh/.

## Macos or Linux

```Shell
# these instructions use HomeBrew: https://brew.sh/
# Alternatively you can follow the nvm install instructions
# https://github.com/nvm-sh/nvm#installing-and-updating
$ brew update

# install NodeJS Version Manager if you don't already have it
$ brew install nvm
$ source $(brew --prefix nvm)/nvm.sh
# install node LTE 16.3.0
$ nvm install 16.3.0
# Use it
$ nvm use 16.3.0
# And set it as your default (optional)
$ nvm alias default 16.3.0

# Install pnpm (pnpm is more reliable, efficient, and secure than npm)
$ npm install -g pnpm
$ pnpm install
```

## Windows

[Install NVM](https://github.com/nvm-sh/nvm#installing-and-updating). Then in a bash derived shell, use NVM to install a version of NodeJS, and then install pnpm.

```Shell
# install node LTE 16.3.0
$ nvm install 16.3.0
# Use it
$ nvm use 16.3.0
# And set it as your default (optional)
$ nvm alias default 16.3.0

# Install pnpm (pnpm is more reliable, efficient, and secure than npm)
$ npm install -g pnpm
$ pnpm install
```

## Installing MongoDB

Before you start working on the mongodb exercises (240), you'll need to install MongoDB. Instructions are in [240-mongodb](240-mongodb/README.md).

## Running the Exercises

You can run the exercises from this directory using `pnpm`:

```Shell
# Run all exercises
$ pnpm test

# OR
$ node index -o deterministic
```

To run tests one-at-a-time, use the `-m` switch when executing "index.js" (i.e. `node index -m 110`). For example, to execute the _freezing-and-sealing_ exercise, you can execute it from this directory:

```Shell
$ node index -m 310
```

The `-m` switch supports regex, so to run all of the tests for a given level:

```Shell
# Run all 100 level tests
$ node index.js -o deterministic -m '1\\d0'

# Run all 200 level tests
$ node index.js -o deterministic -m '2\\d0'
```

### Debugging the Exercises
You can run the exercises in debug mode, by using `debug` instead of `test`:

```Shell
# Run all exercises
$ pnpm run debug

# OR
$ node inspect index -o deterministic

# OR to debug a single test
$ node inspect index -m 310
```

#### Adding breakpoints and evaluating state with REPL
You can add breakpoints to your code, by adding `debugger` to the line of code that you want to break on. You can set breakpoints at run time (in debug mode), using `setBreakpoint`. i.e.:

```Shell
# This example assumes your in the exercises directory
# it will debug any test with "130" in it's description
> node inspect index -m 130

> heinz-95729-materials@1.0.0 debug:all /Users/[...]/exercises
> node inspect index

< Debugger listening on ws://127.0.0.1:9229/2e54893d-7c37-4010-9f96-a87daebe834b
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in file:///Users/andes/src/cmu/heinz-95729-answers/exercises/index.js:1
# When you start in debug mode, it always breaks on the first line
# at which point you can set breakpoints
> 1 const suite = require('supposed').Suite({
  2   name: 'heinz-95729-exercises'
  3 })
# In debug mode, our prompt is "debug>"
# In this example, we set a breakpoint in the 130-argument-mutability exercise on line 47
debug> setBreakpoint('130-argument-mutability/exercise.js', 47)
Warning: script '130-argument-mutability/exercise.js' was not loaded yet.
# Type c for continue
debug> c
# When node.js loads the file, it will break on line 47
break in file:///Users/.../130-argument-mutability/exercise.js:47
 45           const args = new Product(payload);
 46
>47           return {
 48               payload: payload,
 49               args: args
# We are given a debug prompt to explore the code in this state, however
# we need to enter REPL mode if we want to evaluate anything:
debug> repl
Press Ctrl + C to leave debug repl
## REPL will drop us down to a ">" prompt. From here, we can evaluate the code
> console.log(payload, args)
< { name: 'food' } [Arguments] { '0': { name: 'food' } }
```

Alternatively, you can [use an IDE that supports debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).
