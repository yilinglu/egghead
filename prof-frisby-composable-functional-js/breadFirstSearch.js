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
 * Breath first search of a Tree
 * 
 * Time: O(n)
 * Space: O(n). The max usage of space is equal to the number of nodes on a level that has the most number of nodes
 * 
 * @param {Node} root 
 */
let breadthFirstSearch = (root, searchValue) => {
    console.log('searching for %s', searchValue);
    if(!root || !(root instanceof TreeNode)){
        return;
    }
    /**
     * @param {Node} arr Array of nodes to be visited
     */
    let visit = arr => {
        // children array will be populated with nodes that reside in the next level.
        // These nodes are to be visited next time this function(visit) is executed.
        children = [];
        foundValue = false;

        for(const node of arr){
            console.log('visiting node %s: ', node.value);
            if(node.value == searchValue){
                foundValue = true;
                break;
            }
            node.children.forEach(child => children.push(child))
        }
        return {children: children, foundValue: foundValue};
    }    

    nodes = {children: [root], foundValue: false};
    while(!nodes.foundValue){
        nodes = visit(nodes.children);
    }

    if(nodes.foundValue){
        console.log('Found search value: ', searchValue);
        return searchValue;
    }else{
        return null;
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

breathFirstSearch(root, "A");
breathFirstSearch(root2, "B1-3");
breathFirstSearch([], "A");

