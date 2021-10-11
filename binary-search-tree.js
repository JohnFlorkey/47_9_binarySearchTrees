class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
    } else {
      let currentNode = this.root;
      let previousNode = this.root;
      while (currentNode) {
        previousNode = currentNode;
        currentNode =
          val > currentNode.val ? currentNode.right : currentNode.left;
      }
      if (val > previousNode.val) {
        previousNode.right = new Node(val);
      } else {
        previousNode.left = new Node(val);
      }
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let previousNode = this.root;

    function insertHelper(node) {
      if (!node) return;
      previousNode = node;
      if (val > node.val) {
        return insertHelper(node.right);
      } else {
        return insertHelper(node.left);
      }
    }
    insertHelper(this.root);
    if (val > previousNode.val) {
      previousNode.right = new Node(val);
    } else {
      previousNode.left = new Node(val);
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (!this.root) return undefined;
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      currentNode =
        val > currentNode.val ? currentNode.right : currentNode.left;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!this.root) return undefined;

    if (node.val === val) return node;
    if (val > node.val) {
      if (node.right) return this.findRecursively(val, node.right);
    } else {
      if (node.left) return this.findRecursively(val, node.left);
    }
    return undefined;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let result = [];

    function dfsPreOrderHelper(node) {
      if (!node) return;
      result.push(node.val);
      dfsPreOrderHelper(node.left);
      dfsPreOrderHelper(node.right);
    }
    dfsPreOrderHelper(this.root);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let result = [];

    function dfsInOrderHelper(node) {
      if (!node) return;
      dfsInOrderHelper(node.left);
      result.push(node.val);
      dfsInOrderHelper(node.right);
    }
    dfsInOrderHelper(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let result = [];

    function dfsPostOrderHelper(node) {
      if (!node) return;
      dfsPostOrderHelper(node.left);
      dfsPostOrderHelper(node.right);
      result.push(node.val);
    }
    dfsPostOrderHelper(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let result = [];
    let nodes = [];
    if (this.root) result.push(this.root.val);

    function bfsHelper(nodes) {
      if (nodes.length === 0) return;
      const newNodes = [];
      for (let node of nodes) {
        if (node.left) {
          result.push(node.left.val);
          newNodes.push(node.left);
        }
        if (node.right) {
          result.push(node.right.val);
          newNodes.push(node.right);
        }
      }
      return bfsHelper(newNodes);
    }
    bfsHelper([this.root]);
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
