module.exports.name = 'FrozenRepo';
module.exports.factory = function (BaseRepo) {
    'use strict';

    return function FrozenRepo (collection) {
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // TODO: wrap the output in Object.freeze

        return new BaseRepo(collection)

        // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    };
};
