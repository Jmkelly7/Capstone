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

    document.getElementById(objectName).setAttribute("style", "fill:" + colorChoice + ";stroke-width:3;stroke:black");
    /*document.getElementById(objectName).setAttribute("stroke", colorChoice);
    document.getElementById(objectName).setAttribute("stroke-width", "3");*/

}

/**
 * This function is used to color the line objects that are passed in with the passed in color.
 *
 * @param objectName  - the line that will be colored.
 * @param colorChoice - the color to change the stroke too.
 */
function colorLines(objectName, colorChoice) {

    if (document.getElementById(objectName + "a")) {

        document.getElementById(objectName + "a").setAttribute("style", "fill:" + colorChoice + ";stroke-width:2;stroke:" + colorChoice);
        /*document.getElementById(objectName + "a").setAttribute("stroke", colorChoice);
        document.getElementById(objectName + "a").setAttribute("stroke-width", "2");*/

    }

    document.getElementById(objectName).setAttribute("style", "fill:" + colorChoice + ";stroke-width:3;stroke:" + colorChoice);
    /*document.getElementById(objectName).setAttribute("stroke", colorChoice);
    document.getElementById(objectName).setAttribute("stroke-width", "3");*/
}

/**
 * This function clears the attributes that have changed and sets them back to
 *  the default.
 *
 * @param objectName - the object to be reset to default.
 */
function clearGivenObject(objectName) {

    document.getElementById(objectName).setAttribute("style", "fill:white;stroke-width:1;stroke:rgb(0,0,0)");
    /*document.getElementById(objectName).setAttribute("stroke", "#000000");
    document.getElementById(objectName).setAttribute("stroke-width", "1");*/

}

/**
 * This function clears the attributes that have changed and sets them back to
 *  the default.
 *
 * @param lineName - the line to be reset to default.
 */
function clearGivenLine(lineName) {

    if (document.getElementById(lineName + "a")) {

        document.getElementById(lineName + "a").setAttribute("style", "fill:black;stroke-width:2;stroke:rgb(0,0,0)");
        /*document.getElementById(lineName + "a").setAttribute("stroke", "#FFFFFF");
        document.getElementById(lineName + "a").setAttribute("stroke-width", "1");*/

    }

    document.getElementById(lineName).setAttribute("style", "fill:black;stroke-width:1;stroke:rgb(0,0,0)");
    /*document.getElementById(lineName).setAttribute("stroke", "#000000");
    document.getElementById(lineName).setAttribute("stroke-width", "1");*/

}

/**
 * This function sets the attributes of the objects in Stage 5 of the diagram
 *  back to the default.
 */
function clearStageFive() {

    clearGivenObject("rect15");
    clearGivenObject("ellipse5");
    clearGivenObject("rect6");
    /*clearGivenObject("line48");
    clearGivenObject("line47");
    clearGivenObject("line46");
    clearGivenObject("line26");
    clearGivenObject("line27");
    clearGivenObject("line53");
    clearGivenObject("line59");
    clearGivenObject("line58");
    clearGivenObject("line62");*/
    clearGivenLine("line48");
    clearGivenLine("line47");
    clearGivenLine("line46");
    clearGivenLine("line26");
    clearGivenLine("line27");
    clearGivenLine("line53");
    clearGivenLine("line59");
    clearGivenLine("line58");
    clearGivenLine("line62");

}

/**
 * This function sets the attributes of the objects in Stage 4 of the diagram
 *  back to the default.
 */
function clearStageFour() {

    clearGivenObject("rect11");
    clearGivenObject("rect13");
    clearGivenObject("rect14");
    clearGivenLine("line41");
    clearGivenLine("line43");
    clearGivenLine("line57");
    clearGivenLine("line58");

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
    clearGivenLine("line33");
    clearGivenLine("line34");
    clearGivenLine("line35");
    clearGivenLine("line37");
    clearGivenLine("line39");
    clearGivenLine("line30");
    clearGivenLine("line61");
    clearGivenLine("line56");

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
    clearGivenLine("line23");
    clearGivenLine("line24");
    clearGivenLine("line25");
    clearGivenLine("line31");
    clearGivenLine("line32");
    clearGivenLine("line49");
    clearGivenLine("line50");
    clearGivenLine("line51");
    clearGivenLine("line52");
    clearGivenLine("line28");
    clearGivenLine("line29");
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
    clearGivenLine("line3");
    clearGivenLine("line4");
    clearGivenLine("line22");
    clearGivenLine("line6");
    clearGivenLine("line19");
    clearGivenLine("line7");
    clearGivenLine("line8");
    clearGivenLine("line20");
    clearGivenLine("line18");
    clearGivenLine("line15");
    clearGivenLine("line2");
    clearGivenLine("line5");

}