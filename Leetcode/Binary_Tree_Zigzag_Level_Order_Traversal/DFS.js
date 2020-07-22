/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  // create a result array
  // [[], []]
  const result = [];


  // DFS helper function
  // node
  // level (integer)
  const dfs = (node, level) => {

      // if no node
          // return
      if (!node) return;

      // if level has not been intialized in the result
      if (!result[level]) {
          // intialize it
          result[level] = [];
      }

      // push node value into the array
      result[level].push(node.val);
      level++;
      // call DFS on left and right
      dfs(node.left, level);
      dfs(node.right, level);
  }


  // call DFS on root with the level it is on
  // we will start level at 0
  dfs(root, 0);


  // reverse odd number levels
  for (let i = 1; i < result.length; i += 2) {
      result[i].reverse();

      // result[i] = result[i].reverse();
  }

  // return result
  return result;
};

