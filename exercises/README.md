Heinz 95729 E-Commerce Tech Exercises
=====================================

To get started with the exercises, clone this repository. Several tests require other libraries to work. Before running these exercises, navigate to this directory in a terminal, and run the following to get the dependencies:

```
$ npm install
```

### Running the Exercises

You can run the exercises from this directory using `npm`:

```Shell
# Run all exercises
$ npm test

# Run 100 level exercises
$ npm run test:100

# Run 200 level exercises
$ npm run test:200

# Run 300 level exercises
$ npm run test:300
```

To run tests one-at-a-time, use the `-m` switch when executing "index.js" (i.e. `node index -m 110`). For example, to execute the _freezing-and-sealing_ exercise, you can execute it from this directory:

```Shell
$ node index -m 310
```

### Debugging the Exercises
You can run the exercises in debug mode, by using `debug` instead of `test`:

```Shell
# Run all exercises
$ npm run debug:all

# Run 100 level exercises
$ npm run debug:100

# Run 200 level exercises
$ npm run debug:200

# Run 300 level exercises
$ npm run debug:300
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
