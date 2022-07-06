//invert binary tree
// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var invertTree = function (root) {
  if (!root) {
    return null;
  }
  var temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};
