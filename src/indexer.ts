import typeChecker =  require('javascript-type-checker');

class Indexer {
    indexByField(arrayToIndex: Array<any>, keyToIndexBy: string) : Object {
        let resultData = {
            fieldsIndexedBy : [keyToIndexBy],
        }
        for(let i in arrayToIndex) {
             let valueToIndexBy = arrayToIndex[i][keyToIndexBy];
             if(!typeChecker.isString(valueToIndexBy) && !typeChecker.isNumber(valueToIndexBy)) {
                 throw new Error('Can only index by array or number. Provided: '+typeChecker.getType(valueToIndexBy));
             }
             resultData[valueToIndexBy] = arrayToIndex[i];
        }
        return resultData;
    }
}

module.exports = new Indexer();