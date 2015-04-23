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
function colorObject(objectName, colorChoice) {

    if (objectName == "ellipse5") {
        document.getElementById(objectName).setAttribute("fill", colorChoice);
        document.getElementById(objectName).setAttribute("stroke", "black");
        document.getElementById(objectName).setAttribute("stroke-width", "3");
    } else {
        document.getElementById(objectName).setAttribute("style", "fill:" + colorChoice + ";stroke-width:3;stroke:black");
    }

}

/**
 * This function is used to color the line objects that are passed in with the passed in color.
 *
 * @param objectName  - the line that will be colored.
 * @param colorChoice - the color to change the stroke too.
 */
function colorLine(objectName, colorChoice) {

    var arrowWidth = "2";
    var lineWidth  = "3";

    if (colorChoice == "white") {

        colorChoice = "black";
        arrowWidth  = "1";
        lineWidth   = "1";

    }

    if (document.getElementById(objectName + "a")) {

        document.getElementById(objectName + "a").setAttribute("fill", colorChoice);
        document.getElementById(objectName + "a").setAttribute("stroke", colorChoice);
        document.getElementById(objectName + "a").setAttribute("stroke-width", arrowWidth);

    }

    document.getElementById(objectName).setAttribute("stroke", colorChoice);
    document.getElementById(objectName).setAttribute("stroke-width", lineWidth);

}

/**
 * This function clears the attributes that have changed and sets them back to
 *  the default.
 *
 * @param objectName - the object to be reset to default.
 */
function clearGivenObject(objectName) {

    if (objectName == "ellipse5") {
        document.getElementById(objectName).setAttribute("fill", "white");
        document.getElementById(objectName).setAttribute("stroke", "black");
        document.getElementById(objectName).setAttribute("stroke-width", "1");
    } else {
        document.getElementById(objectName).setAttribute("style", "fill:white;stroke-width:1;stroke:rgb(0,0,0)");
    }

}

/**
 * This function clears the attributes that have changed and sets them back to
 *  the default.
 *
 * @param lineName - the line to be reset to default.
 */
function clearGivenLine(lineName) {

    if (document.getElementById(lineName + "a")) {

        document.getElementById(lineName + "a").setAttribute("fill", "#000000");
        document.getElementById(lineName + "a").setAttribute("stroke", "#000000");
        document.getElementById(lineName + "a").setAttribute("stroke-width", "1");

    }

    document.getElementById(lineName).setAttribute("stroke", "#000000");
    document.getElementById(lineName).setAttribute("stroke-width", "1");

}

/*function clearSlots() {

    for (var i = 1; i <= 5; i++) {

        document.getElementById("slot" + i).setAttribute("fill", "#000000");

    }

}*/

/**
 * This function
 *
 * @param slot
 */
function colorWhite(slot) {

    for (var i = 5; slot <= i; slot++) {

        document.getElementById("slot" + slot).setAttribute("fill", "white");

    }

}

/**
 * This function sets the attributes of the objects in Stage 5 of the diagram
 *  back to the default.
 */
function clearStageFive() {

    clearGivenObject("rect15");
    clearGivenObject("ellipse5");
    clearGivenObject("rect6");
    clearGivenLine("line48");
    clearGivenLine("line47");
    clearGivenLine("line46");
    clearGivenLine("line26");
    clearGivenLine("line27");
    clearGivenLine("line53");
    clearGivenLine("line59");
    clearGivenLine("line58");
    clearGivenLine("line62");
    clearGivenLine("line45");
    clearGivenLine("line67");
    clearGivenLine("line68");
    clearGivenLine("line69");
    clearGivenLine("line70");

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
    clearGivenLine("line45");
    clearGivenLine("line46");
    clearGivenLine("line62");
    clearGivenLine("line66");
}

/**
 * This function sets the attributes of the objects in Stage 3 of the diagram
 *  back to the default.
 */
function clearStageThree() {

    clearGivenObject("rect12");
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
    clearGivenLine("line54");
    clearGivenLine("line36");
    clearGivenLine("line42");
    clearGivenLine("line44");
    clearGivenLine("line60");
    clearGivenLine("line65");

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
    clearGivenLine("line63");
    clearGivenLine("line64");

}

/**
 * This function sets the attributes of the objects in Stage 1 of the diagram
 *  back to the default.
 */
function clearStageOne() {

    clearGivenObject("rect1");
    clearGivenObject("rect2");
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
    clearGivenLine("line9");
    clearGivenLine("line20");
    clearGivenLine("line18");
    clearGivenLine("line15");
    clearGivenLine("line2");
    clearGivenLine("line5");

}

/**
 * This function clears the whole diagram.
 */
function clearAllColor() {

    clearStageFive();
    clearStageFour();
    clearStageThree();
    clearStageTwo();
    clearStageOne();

    for (var i = 1; i <= 5; i++) {

        document.getElementById("slot" + i).setAttribute("fill", "black");
        document.getElementById("slot" + i).setAttribute("font-weight", "normal");


    }

}