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
  const result = []

  // if no root
  if (!root) {
      // return result array
      return result;
  }

  // initialize a queue with root inside
  let queue = [root];
  // initialize variable to see if we want to reverse the row
  let reverse = false;

  // while nodes are in the queue
  while (queue.length) {

      // initialize the next level of queue
      const nextQueueLevel = [];

      // initialize inner array to hold node's values in a level
      const nodeValues = [];


      for (const node of queue) {
          // we get the first node in the queue   (enqueue)

          // add the node's value to the result
          nodeValues.push(node.val);

          // add left node to the queue (if exist)
          if (node.left) {
              nextQueueLevel.push(node.left);
          }

          // add right node to the queue (if exist)
          if (node.right) {
              nextQueueLevel.push(node.right);
          }
      }

      // if we need to reverse the inner array
      if (reverse) {
          // reverse it
          nodeValues.reverse();
      }

      // add inner array into the result
      result.push(nodeValues);

      // toggle the reverse variable
      reverse = !reverse;

      // assign queue to the next level
      queue = nextQueueLevel;
  }

  // return result
  return result;
};
