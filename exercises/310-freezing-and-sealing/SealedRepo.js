module.exports.name = 'SealedRepo';
module.exports.factory = function (BaseRepo) {
    'use strict';

    return function SealedRepo (collection) {
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // TODO: wrap the output in Object.seal

        return new BaseRepo(collection)

        // END TODO >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    };
};
