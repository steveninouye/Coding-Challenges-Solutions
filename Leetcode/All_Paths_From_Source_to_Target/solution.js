/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {

  // create a paths store
  const paths = [];
      // an array that will hold all our paths for result

  // DFS through directed graph
  const dfs = (nodeNum, path) => {
      // add current node to path
      path.push(nodeNum);

      // if we are at the last node
      if (nodeNum === graph.length - 1) {
          // push in path to the paths store
          paths.push([...path]);
      } else {
          // otherwise
          for (const destination of graph[nodeNum]) {
              // do a DFS over all destination nodes
              dfs(destination, path);
          }
      }

      // return path to previous state
      path.pop();
  }

  // call DFS(0, [])  [] path
  dfs(0, []);


  // return paths
  return paths;
};
