/**
 * This file contains functions that are used to color the parts of the datapath
 *  diagram and clear the colors from the diagram.
 *
 * @author  Josh Kelly
 * @author  Trevor Griggs
 * @version 12/11/2014
 */

/**
 * This function colors the objects that are passed into it with the passed in color choice.
 *
 * @param objectName - the object to be colored.
 * @param colorChoice - the color that the object needs to be changed too.
 */
function colorAndRefreshDiagramObjects(objectName, colorChoice) {

    if (colorChoice == "firebrick") {
        document.getElementById(objectName).setAttribute("style", "fill:firebrick;stroke-width:3;stroke:black");
    } else if (colorChoice == "peru") {
        document.getElementById(objectName).setAttribute("style", "fill:peru;stroke-width:3;stroke:black");
    } else if (colorChoice == "darkgoldenrod") {
        document.getElementById(objectName).setAttribute("style", "fill:darkgoldenrod;stroke-width:3;stroke:black");
    } else if (colorChoice == "mediumseagreen") {
        document.getElementById(objectName).setAttribute("style", "fill:mediumseagreen;stroke-width:3;stroke:black");
    } else if (colorChoice == "darkcyan") {
        document.getElementById(objectName).setAttribute("style", "fill:darkcyan;stroke-width:3;stroke:black");
    } else if (colorChoice == "darkorchid") {
        document.getElementById(objectName).setAttribute("style", "fill:darkorchid;stroke-width:3;stroke:black");
    } else if (colorChoice == "dimgray") {
        document.getElementById(objectName).setAttribute("style", "fill:dimgray;stroke-width:3;stroke:black");
    }

    return false;
}

/**
 * This function is used to color the line objects that are passed in with the passed in color.
 *
 * @param objectName - the line that is supposed to be colored.
 * @param colorChoice - the color to change the stroke too.
 */
function colorLines(objectName, colorChoice) {

    if (colorChoice == "firebrick") {
        document.getElementById(objectName).setAttribute("style", "fill:firebrick;stroke-width:3;stroke:firebrick");
    } else if (colorChoice == "peru") {
        document.getElementById(objectName).setAttribute("style", "fill:peru;stroke-width:3;stroke:peru");
    } else if (colorChoice == "darkgoldenrod") {
        document.getElementById(objectName).setAttribute("style", "fill:darkgoldenrod;stroke-width:3;stroke:darkgoldenrod");
    } else if (colorChoice == "mediumseagreen") {
        document.getElementById(objectName).setAttribute("style", "fill:mediumseagreen;stroke-width:3;stroke:mediumseagreen");
    } else if (colorChoice == "darkcyan") {
        document.getElementById(objectName).setAttribute("style", "fill:darkcyan;stroke-width:3;stroke:darkcyan");
    } else if (colorChoice == "darkorchid") {
        document.getElementById(objectName).setAttribute("style", "fill:darkorchid;stroke-width:3;stroke:darkorchid");
    } else if (colorChoice == "dimgray") {
        document.getElementById(objectName).setAttribute("style", "fill:dimgray;stroke-width:3;stroke:dimgray");
    }
}

/**
 * This function that clears the attributes that have changed and sets them back to the default.
 *
 * @param objectName - the object to be reset to default.
 */
function clearGivenObject(objectName) {

    document.getElementById(objectName).setAttribute("style", "fill:white;stroke-width:3;stroke:rgb(0,0,0");
}
