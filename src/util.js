import React from 'react';

export function createElementIf(expression, ...createElementArgs) {
    if (expression) {
        return React.createElement(...createElementArgs);
    }
}

export function isDefined(variable) {
    return typeof variable !== 'undefined';
}
