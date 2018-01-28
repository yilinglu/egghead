class TreeNode {
    constructor(value){
        this.children = [];
        this.value = value;
    }
    addChild(...nodes){
        nodes.forEach(n => this.children.push(n))
    }    
}

/**
 * 
 * Breath first traversal of a Tree
 * 
 * Time: O(n)
 * Space: O(n). The max usage of space is equal to the number of nodes on a level that has the most number of nodes
 * 
 * 
 * @param {Node} root 
 */
let breadthFirstTraversal = root => {
    if(!root || !(root instanceof TreeNode)){
        return;
    }
    /**
     * @param {Node} arr Array of nodes to be visited
     */
    let visit = arr => {
        // children array will be populated with nodes that reside in the next level.
        // These nodes are to be visited next time this function(visit) is executed.
        children = []
        arr.forEach( node => {
            console.log('visited node: %s: ', node.value);
            node.children.forEach(child => children.push(child))
        })
        return children;
    }    

    nodes = [root];
    while(nodes.length > 0){
        nodes = visit(nodes);
    }
}


let root = new TreeNode("Root");
root.addChild(new TreeNode("A"), new TreeNode("B"), new TreeNode("C"), new TreeNode("D"));


let root2 = new TreeNode("Root2");
let c1 = new TreeNode("A1")
let b1 = new TreeNode("B1")
let d1 = new TreeNode("D1")

let c11 = new TreeNode("A1-1")
let c12 = new TreeNode("A1-2")
let b11 = new TreeNode("B1-1")
let b12 = new TreeNode("B1-2")
let b13 = new TreeNode("B1-3")

root2.addChild(c1);
root2.addChild(b1)
root2.addChild(d1)
c1.addChild(c11)
c1.addChild(c12)

b1.addChild(b11)
b1.addChild(b12)
b1.addChild(b13)

breathFirstTraversal(root);
breathFirstTraversal(root2);
breathFirstTraversal([]);

