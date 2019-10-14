'use strict';

function Builder () {
    var output = {
        name: null,
        description: null
    };

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: refactor builder to an empty object, and return
    // this Promise from a function called `builder.build` instead

    var builder = new Promise((resolve) => {
        resolve(Object.assign({}, output));
    });

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    builder.name = (name) => {
        output.name = name;
        return builder;
    };

    builder.description = (description) => {
        output.description = description;
        return builder;
    };

    return builder;
}

function AsyncBuilder () {
    var output = {
        name: null,
        description: null
    };

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: refactor builder to an empty object, and return
    // this Promise from a function called `builder.build` instead

    var builder = new Promise((resolve) => {
        setTimeout(() => { resolve(Object.assign({}, output)); }, 0);
    });

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    builder.name = (name) => {
        output.name = name;
        return builder;
    };

    builder.description = (description) => {
        output.description = description;
        return builder;
    };

    return builder;
}

module.exports = (test) => test('230-promise-execution', {
  'Builder, when I build, then should return an object': (t) => {
      const expectedName = 'Synchronous Builder Pattern';
      const expectedDescription = 'An anti-pattern that addresses the symptoms of other anti-patterns (the spawn of other anti-patterns)';

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // TODO: call `build` immediately before `then`

      return new Builder()
          .name(expectedName)
          .description(expectedDescription)
          .then(result => {
              t.equal(result.name, expectedName);
              t.equal(result.description, expectedDescription);
          });

      // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  },
  'AsyncBuilder, when I build, then should return an object': (t) => {
      const expectedName = 'Asynchronous Builder Pattern';
      const expectedDescription = 'An anti-pattern that addresses the symptoms of other anti-patterns (the spawn of other anti-patterns)';

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      // TODO: call `build` immediately before `then`

      return new AsyncBuilder()
          .name(expectedName)
          .description(expectedDescription)
          .then(result => {
              t.equal(result.name, expectedName);
              t.equal(result.description, expectedDescription);
          });

      // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  }
});
