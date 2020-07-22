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
  const result = [];

  const dfs = (node, level) => {
      if (!node) {
          return;
      }


      if (!result[level]) {
          result[level] = [];
      }

      result[level].push(node.val);
      level++;
      dfs(node.left, level);
      dfs(node.right, level);
  }

  dfs(root, 0);

  for (let i = 1; i < result.length; i += 2) {
      result[i].reverse();
  }

  return result;
};
