/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) { return 0 }

    function minHelp(node) {
      if (node.left === null && node.right === null) { return 1 }
      if (node.left === null) { return minHelp(node.right) + 1 }
      if (node.right === null) { return minHelp(node.left) + 1 }

      return Math.min(minHelp(node.left), minHelp(node.right)) + 1

    }

    return minHelp(this.root)
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) { return 0 }

    function maxHelp(node) {
      if (node.left === null && node.right === null) { return 1 }
      if (node.left === null) { return maxHelp(node.right) + 1 }
      if (node.right === null) { return maxHelp(node.left) + 1 }

      return Math.max(maxHelp(node.left), maxHelp(node.right)) + 1

    }

    return maxHelp(this.root)
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let max = 0

    function maxSumHelp(node) {
      if (node === null) { return 0 }
      const lSum = maxSumHelp(node.left)
      const rSum = maxSumHelp(node.right)

      max = Math.max(max, node.val + lSum + rSum)
      return Math.max(0, (node.val + lSum), (node.val + rSum))
    }

    maxSumHelp(this.root)
    return max
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) { return null }

    let searchQueue = [this.root]
    let minFound = null

    while (searchQueue.length) {
      let curr = searchQueue.shift()

      if (curr.val > lowerBound && ((minFound === null) || (curr.val < minFound))) {
        minFound = curr.val
      }

      if (curr.left) { searchQueue.push(curr.left) }
      if (curr.right) { searchQueue.push(curr.right) }
    }

    return minFound

  }



}

module.exports = { BinaryTree, BinaryTreeNode };
