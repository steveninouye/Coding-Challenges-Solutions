// Time: O(n)
// Space: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  // have a set that would hold all the numbers we have seen
  const seen = new Set();

  // iterate over all numbers
  for (const num of nums) {
      // if we have seen the number before (the number is in the set)
      if (seen.has(num)) {
          // delete the number from the set
          seen.delete(num);
      } else {
          // if we haven't seen the number before
              // add the number to the set
          seen.add(num);
      }
  }

  // return set as an array
  // const result = [];
  // for (const num of seen) {
  //   result.push(num);
  // }
  // return result;
  return [...seen];
};


// Time: O(n)
// Space: (1)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  // create a bit mask that will hold all the XOR values in nums
  let bitMask = 0;

  // iterate through nums
  for (const num of nums) {
      // XOR to bit mask
      bitMask = bitMask ^ num;
  }
          // ====> mask of only our 2 numbers that have one value

  // find the first differentiating bit
  const firstDifferentiatingBit = bitMask & (-bitMask);

  // create another bit mask (first value)
  let firstResultValue = 0;

  // iterate through nums again
  for (const num of nums) {
      // XOR the bit mask only if are value has a set bit the same as our differentiating bit
      if (num & firstDifferentiatingBit) {
          firstResultValue = firstResultValue ^ num;
      }
  }
          // ====> 1 of our values that only have 1 value in nums

  // other value === XOR mask and first value
  const secondResultValue = firstResultValue ^ bitMask;

  // return 2 values
  return [firstResultValue, secondResultValue];
};
