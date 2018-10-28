module.exports.name = 'PreventExtensionsRepo';
module.exports.factory = function (BaseRepo) {
    'use strict';

    return function PreventExtensionsRepo (collection) {
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // TODO: wrap the output in Object.preventExtensions

        return new BaseRepo(collection)

        // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    };
};
