/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) { return 0 }

    let sum = this.root.val

    function sumHelp(node) {

      for (let child of node.children) {
        sum += child.val
        if (child.children.length > 0) { sumHelp(child) }
      }

    }

    sumHelp(this.root)
    return sum
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) { return 0 }

    let count = this.root.val % 2 === 0 ? this.root.val : 0

    function countEvenHelp(node) {

      for (let child of node.children) {
        if (child.val % 2 === 0) { count++ }
        if (child.children.length > 0) { countEvenHelp(child) }
      }

    }

    countEvenHelp(this.root)
    return count
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) { return 0 }

    let count = this.root.val > lowerBound ? 1 : 0

    function countNumHelp(node) {

      for (let child of node.children) {
        if (child.val > lowerBound) { count++ }
        if (child.children.length > 0) { countNumHelp(child) }
      }

    }

    countNumHelp(this.root)
    return count
  }
}

module.exports = { Tree, TreeNode };
