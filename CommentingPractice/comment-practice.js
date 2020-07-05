/**
 * @file Main
 * 
 */
import Template from './model/template.js';
import * as amonte from './services/capitalizer.js';
import * as adil from './services/splitor.js';



( function() {
    Template.printInstructions();
    var name = "AmonteAndrews";
     console.log(amonte.randomlyCapitalize(name));


     var name = "My name is Adil Merribi";
     console.log(adil.mySubstring(name));

 })()

