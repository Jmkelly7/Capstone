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
 * This function clears the attributes that have changed and sets them back to
 *  the default.
 *
 * @param objectName - the object to be reset to default.
 */
function clearGivenObject(objectName) {

    document.getElementById(objectName).setAttribute("style", "fill:white;stroke-width:1;stroke:rgb(0,0,0");

}

/**
 * This function sets the attributes of the objects in Stage 5 of the diagram
 *  back to the default.
 */
function clearStageFive() {

    clearGivenObject("rect15");
    clearGivenObject("ellipse5");
    clearGivenObject("rect6");
    clearGivenObject("line48");
    clearGivenObject("line47");
    clearGivenObject("line26");
    clearGivenObject("line27");
    clearGivenObject("line53");
    clearGivenObject("line59");
    clearGivenObject("line58");
    clearGivenObject("line46");

}

/**
 * This function sets the attributes of the objects in Stage 4 of the diagram
 *  back to the default.
 */
function clearStageFour() {

    clearGivenObject("rect11");
    clearGivenObject("rect13");
    clearGivenObject("rect14");
    clearGivenObject("line41");
    clearGivenObject("line43");
    clearGivenObject("line57");
    clearGivenObject("line58");

}

/**
 * This function sets the attributes of the objects in Stage 3 of the diagram
 *  back to the default.
 */
function clearStageThree() {

    clearGivenObject("rect9");
    clearGivenObject("rect10");
    clearGivenObject("ellipse4");
    clearGivenObject("poly3");
    clearGivenObject("line33");
    clearGivenObject("line34");
    clearGivenObject("line35");
    clearGivenObject("line37");
    clearGivenObject("line39");
    clearGivenObject("line30");
    clearGivenObject("line61");
    clearGivenObject("line56");

}

/**
 * This function sets the attributes of the objects in Stage 2 of the diagram
 *  back to the default.
 */
function clearStageTwo() {

    clearGivenObject("rect5");
    clearGivenObject("rect7");
    clearGivenObject("rect8");
    clearGivenObject("ellipse2");
    clearGivenObject("line23");
    clearGivenObject("line24");
    clearGivenObject("line25");
    clearGivenObject("line31");
    clearGivenObject("line32");
    clearGivenObject("line49");
    clearGivenObject("line50");
    clearGivenObject("line51");
    clearGivenObject("line52");
    clearGivenObject("line28");
    clearGivenObject("line29");
}

/**
 * This function sets the attributes of the objects in Stage 1 of the diagram
 *  back to the default.
 */
function clearStageOne() {

    clearGivenObject("rect3");
    clearGivenObject("rect4");
    clearGivenObject("ellipse1");
    clearGivenObject("poly1");
    clearGivenObject("line3");
    clearGivenObject("line4");
    clearGivenObject("line22");
    clearGivenObject("line6");
    clearGivenObject("line19");
    clearGivenObject("line7");
    clearGivenObject("line8");
    clearGivenObject("line9");

}