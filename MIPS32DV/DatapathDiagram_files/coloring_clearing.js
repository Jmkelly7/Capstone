/**
 * Created by Josh on 12/11/2014.
 */

/**
 * This function colors the objects that are passed into it with the passed in color choice.
 *
 * @param objectName - the object to be colored.
 * @param colorChoice - the color that the object needs to be changed too.
 */
function colorAndRefreshDiagramObjects(objectName, colorChoice) {

    if (colorChoice == "red") {
        document.getElementById(objectName).setAttribute("style", "fill:red;stroke-width:3;stroke:black");
    } else if (colorChoice == "orange") {
        document.getElementById(objectName).setAttribute("style", "fill:orange;stroke-width:3;stroke:black");
    } else if (colorChoice == "yellow") {
        document.getElementById(objectName).setAttribute("style", "fill:yellow;stroke-width:3;stroke:black");
    } else if (colorChoice == "green") {
        document.getElementById(objectName).setAttribute("style", "fill:green;stroke-width:3;stroke:black");
    } else if (colorChoice == "blue") {
        document.getElementById(objectName).setAttribute("style", "fill:blue;stroke-width:3;stroke:black");
    } else if (colorChoice == "violet") {
        document.getElementById(objectName).setAttribute("style", "fill:violet;stroke-width:3;stroke:black");
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

    if (colorChoice == "red") {
        document.getElementById(objectName).setAttribute("style", "fill:red;stroke-width:3;stroke:red");
    } else if (colorChoice == "orange") {
        document.getElementById(objectName).setAttribute("style", "fill:orange;stroke-width:3;stroke:orange");
    } else if (colorChoice == "yellow") {
        document.getElementById(objectName).setAttribute("style", "fill:yellow;stroke-width:3;stroke:yellow");
    } else if (colorChoice == "green") {
        document.getElementById(objectName).setAttribute("style", "fill:green;stroke-width:3;stroke:green");
    } else if (colorChoice == "blue") {
        document.getElementById(objectName).setAttribute("style", "fill:blue;stroke-width:3;stroke:blue");
    } else if (colorChoice == "violet") {
        document.getElementById(objectName).setAttribute("style", "fill:violet;stroke-width:3;stroke:violet");
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
