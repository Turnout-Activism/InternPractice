/** 
 * @file JavaScript Class
 * @class Tree
 * @author Tanya Malik (backend Web Development)
*/

/**
 * @description Tree Class with parameters season, height, numLeaves, numBranches, type
 * 
 * Constructor
 * @param {string} season spring, summer, fall, winter
 * @param {string} height height of tree
 * @param {number} numLeaves number of leaves
 * @param {number} numBranches number of branches
 * @param {string} type type of tree
 */

class Tree
 {
   constructor(season,height,numLeaves,numBranches,type)
   {
   this.season=season;
   this.height=height;
   this.numLeaves=numLeaves;
   this.numBranches=numBranches;
   this.type=type;
  }
}

/**
 * @description Tree Class with parameters season, height, numLeaves, numBranches, type
 * 
 * Constructor (isWalking is only new parameter)
 * @param {string} season spring, summer, fall, winter
 * @param {string} height height of tree
 * @param {number} numLeaves number of leaves
 * @param {number} numBranches number of branches
 * @param {string} type type of tree
 * @param {boolean} isWalking is always true
 */

class WalkTree extends Tree
 {
   constructor(season,height,numLeaves,numBranches,type,isWalking)
   {
      super(season,height,numLeaves,numBranches,type);
      this.isWalking = isWalking;
      this.isWalking=new Boolean(true);
   }
 }
const first = new Tree("fall",40,30,10,"oak");
console.log("The first tree is an " + first.type + " and has " + first.numBranches + " branches, " + first.numLeaves + " leaves, and has a height of " + first.height + " in the " + first.season + " season.");
const second = new WalkTree();
console.log("The boolean value of the second tree is always " + second.isWalking + " as it is always walking.");





