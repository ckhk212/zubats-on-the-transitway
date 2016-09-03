'use strict';

const mergeAndSortArrays = arrays => [].concat(...arrays).sort((a, b) => a - b);

export default mergeAndSortArrays;
