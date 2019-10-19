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

module.exports = {
  Builder,
  AsyncBuilder,
  builder: (name, description) => {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: call `build` after calling `description`

    return new Builder()
        .name(name)
        .description(description);

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  },
  asyncBuilder: (name, description) => {
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // TODO: call `build` after calling `description`

    return new AsyncBuilder()
        .name(name)
        .description(description);

    // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  }
}
