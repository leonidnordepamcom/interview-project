const { inputExample } = require("./data");
const {groupByName, groupByNameOptimized} = require("./fanc");

/**

 * Group objects by name property

 * @example

 * @Param {Object[]} people - Array of people

 * @Param {string} people[].name - name of person

 * @Param {number} people[].age - age of person

 * @returns {Object[]} - people grouped by name.

 */


console.log(groupByName(inputExample))
console.log(groupByNameOptimized(inputExample))