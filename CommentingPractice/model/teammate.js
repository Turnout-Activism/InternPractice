/**
 * @file TeamMate class
 * @author Luis Moran (Web Development)
 * @author Edited by Tanya Malik
 */

/**
 * @module
 */
export class Team{
    /**
     * @constructor main Team class
     * @param {string} fName
     * @param {string} lName
     */
     constructor(fName,lName)
     {
       this.fName = fName;
       this.lName = lName;
       let tName;
     }
       //function will return the team name if set.
    getTeamName()
    {
      return this.tName; 
    }

    setTeamName(tName)
    {
      this.tName = tName; 
    }
    getNumMembers()
    {
      return this.numMembers; 
    }
    setNumMembers(numMembers)
    {
      this.numMembers = numMembers;
    }
 }
/**
 * @module
 */
export default class TeamMate extends Team {
    
    /** 
    * @description creates a Teammate object that will have the first name and last name, with a choice to set a team name. 
    *
    * Constructor
    * @param {string} fName - is first Name 
    * @param {string} lName - is last name
    
    */
    constructor(fName, lName, strengths){
        
        super(fName,lName);
        this.strengths = strengths; 
  
    }

   
    getStrengths()
    {
        return this.strengths;
    }
    setStrengths(strengths)
    {
        this.strengths = strengths;
    }
}

/*const teammate = new TeamMate("Hoosiers",30,"Tanya","Malik",['helping the team in any way I can','Python','asking for help where needed']);
console.log("My name is " + teammate.fName + " " + teammate.lName + ". My team is called " + teammate.tname + " and there are " + teammate.numMembers + " members in my team.");
console.log("I am good at " + teammate.strengths[0] + ", coding in " + teammate.strengths[1] + ", and " + teammate.strengths[2] + ".");
*/

