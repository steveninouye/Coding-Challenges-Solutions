var buildTree = function(inorder, postorder) {
  // map the indices to a hashmap (AKA object)
  const indicies = {};
  for (let i = 0; i < inorder.length; i++) {
      const value = inorder[i];
      indicies[value] = i;
  }

  const dfs = (leftBound, rightBound) => {
      if (leftBound > rightBound) return null;
      // grab the root node from the last index in postorder array
      const value = postorder.pop();
      const rootNode = new TreeNode(value);

      // findthe value in the inorder array
      const index = indicies[value];

      // assign the left of the root node to the recursive call of all the values
              // to the left
      rootNode.right = dfs(index + 1, rightBound);

      // assign the right of the root node to the recursive call of all the values to
              // the right
      rootNode.left = dfs(leftBound, index - 1);

      return rootNode;
  }

  return dfs(0, inorder.length - 1);
};






var buildTree = function(inorder, postorder) {
  // return null if there are no values
  if (inorder.length === 0) return null;

  // grab the root value by using the last value in the post order array
  const value = postorder.pop();

  // create a tree node with value
  const root = new TreeNode(value);

  // add node into stack
  const stack = [root];

  // initialize variable for inorder array to iterate backwards
  let inorderIndex = inorder.length - 1;

  // iterate backwards through the post order array by popping off the array
  while (postorder.length > 0) {

      // create a new node with the last value in the post order array
      const node = new TreeNode(postorder.pop());
      // have parent variable
      let parent;

      // while the top of the stack matches the value we are at in the inorder array
      while (stack.length > 0 && stack[stack.length - 1].val === inorder[inorderIndex]) {

          // hold the top node in the stack as a parent node
          parent = stack.pop();

          // shift index to the left in the in order array
          inorderIndex--;
      }

      // if we have a parent
      if (parent) {
          // assign current node to the left of the parent
          parent.left = node;
      } else {
      // otherwise
          // assign current node to the right node for the top node in the stack
          stack[stack.length - 1].right = node;
      }

      // add current node to the top of the stack
      stack.push(node);
  }
  // return root node
  return root;
};
