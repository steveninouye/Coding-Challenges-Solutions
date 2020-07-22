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
  if (!root) return [];

  const zigzagNodeValues = [];
  let queue = [root];
  let reverse = false;

  while (queue.length) {

      const nextLevelOfQueue = [];
      const nodeValues = []

      for (const node of queue) {
          nodeValues.push(node.val);
          if (node.left) {
              nextLevelOfQueue.push(node.left);
          }
          if (node.right) {
              nextLevelOfQueue.push(node.right);
          }
      }

      if (reverse) {
          nodeValues.reverse();
      }

      zigzagNodeValues.push(nodeValues);
      queue = nextLevelOfQueue;
      reverse = !reverse;
  }
  return zigzagNodeValues
};
