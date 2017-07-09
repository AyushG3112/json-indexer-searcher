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

    indexByMultipleFields(arrayToIndex: Array<any>, keysToIndexBy: Array<string>) : Object {
        let resultData = {
            fieldsIndexedBy : [...keysToIndexBy],
        }
        for(let i in arrayToIndex) {
            let valuesToIndexBy = [""];
            for(let j in keysToIndexBy) {
                let value = arrayToIndex[i][keysToIndexBy[j]];
                if(!typeChecker.isString(value) && !typeChecker.isNumber(value)) {
                    throw new Error('Can only index by array or number. Provided: '+typeChecker.getType(value));
                }
                valuesToIndexBy = [...valuesToIndexBy, value]
            }

            valuesToIndexBy.shift();
            resultData[valuesToIndexBy.join(', ')] = arrayToIndex[i];
        }
        return resultData;
    }
}

module.exports = new Indexer();