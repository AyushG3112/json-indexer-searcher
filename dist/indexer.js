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
    Indexer.prototype.indexByMultipleFields = function (arrayToIndex, keysToIndexBy) {
        var resultData = {
            fieldsIndexedBy: keysToIndexBy.slice(),
        };
        for (var i in arrayToIndex) {
            var valuesToIndexBy = [""];
            for (var j in keysToIndexBy) {
                var value = arrayToIndex[i][keysToIndexBy[j]];
                if (!typeChecker.isString(value) && !typeChecker.isNumber(value)) {
                    throw new Error('Can only index by array or number. Provided: ' + typeChecker.getType(value));
                }
                valuesToIndexBy = valuesToIndexBy.concat([value]);
            }
            valuesToIndexBy.shift();
            resultData[valuesToIndexBy.join(', ')] = arrayToIndex[i];
        }
        return resultData;
    };
    return Indexer;
}());
module.exports = new Indexer();
var test = new Indexer();
console.log(test.indexByMultipleFields(require('../city.list.json'), ["name", "country"]));
