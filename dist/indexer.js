"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeChecker = require("javascript-type-checker");
var Indexer = (function () {
    function Indexer() {
    }
    Indexer.prototype.indexByField = function (arrayToIndex, keyToIndexBy) {
        var resultData = {
            fieldsIndexedBy: [keyToIndexBy],
        };
        for (var i in arrayToIndex) {
            var valueToIndexBy = arrayToIndex[i][keyToIndexBy];
            if (!typeChecker.isString(valueToIndexBy) && !typeChecker.isNumber(valueToIndexBy)) {
                throw new Error('Can only index by array or number. Provided: ' + typeChecker.getType(valueToIndexBy));
            }
            resultData[valueToIndexBy] = arrayToIndex[i];
        }
        return resultData;
    };
    return Indexer;
}());
module.exports = new Indexer();
