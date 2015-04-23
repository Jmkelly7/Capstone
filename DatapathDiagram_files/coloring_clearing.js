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
function clearObject(objectName) {

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
function clearLine(lineName) {

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
 */
function colorNoOp() {

    if (document.getElementById("slot3").textContent == "noop") {

        clearStageThree();

        colorObject("poly2", "darkgray");
        colorObject("poly3", "darkgray");
        colorObject("rect9", "darkgray");
        colorObject("rect10", "darkgray");
        colorObject("ellipse3", "darkgray");
        colorObject("ellipse4", "darkgray");
        colorLine("line11", "darkgray");
        colorLine("line12", "darkgray");
        colorLine("line13", "darkgray");
        colorLine("line30", "darkgray");
        colorLine("line33", "darkgray");
        colorLine("line34", "darkgray");
        colorLine("line35", "darkgray");
        colorLine("line36", "darkgray");
        colorLine("line37", "darkgray");
        colorLine("line38", "darkgray");
        colorLine("line39", "darkgray");
        colorLine("line42", "darkgray");
        colorLine("line44", "darkgray");
        colorLine("line54", "darkgray");
        colorLine("line56", "darkgray");
        colorLine("line60", "darkgray");
        colorLine("line61", "darkgray");
        colorLine("line65", "darkgray");

    } else if (document.getElementById("slot2").textContent == "noop") {

        clearStageFour();

        colorObject("rect11", "darkgray");
        colorObject("rect12", "darkgray");
        colorObject("rect13", "darkgray");
        colorObject("rect14", "darkgray");
        colorLine("line1", "darkgray");
        colorLine("line14", "darkgray");
        colorLine("line16", "darkgray");
        colorLine("line17", "darkgray");
        colorLine("line21", "darkgray");
        colorLine("line40", "darkgray");
        colorLine("line41", "darkgray");
        colorLine("line42", "darkgray");
        colorLine("line43", "darkgray");
        colorLine("line45", "darkgray");
        colorLine("line46", "darkgray");
        colorLine("line57", "darkgray");
        colorLine("line58", "darkgray");
        colorLine("line60", "darkgray");
        colorLine("line62", "darkgray");
        colorLine("line66", "darkgray");

    } else {

        clearStageFive();

        colorObject("rect6", "darkgray");
        colorObject("rect15", "darkgray");
        colorObject("ellipse5", "darkgray");
        colorLine("line26", "darkgray");
        colorLine("line27", "darkgray");
        colorLine("line45", "darkgray");
        colorLine("line46", "darkgray");
        colorLine("line47", "darkgray");
        colorLine("line48", "darkgray");
        colorLine("line53", "darkgray");
        colorLine("line58", "darkgray");
        colorLine("line59", "darkgray");
        colorLine("line62", "darkgray");
        colorLine("line67", "darkgray");
        colorLine("line68", "darkgray");
        colorLine("line69", "darkgray");
        colorLine("line70", "darkgray");

    }

}

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

    clearObject("rect6");
    clearObject("rect15");
    clearObject("ellipse5");
    clearLine("line26");
    clearLine("line27");
    clearLine("line45");
    clearLine("line46");
    clearLine("line47");
    clearLine("line48");
    clearLine("line53");
    clearLine("line58");
    clearLine("line59");
    clearLine("line62");
    clearLine("line67");
    clearLine("line68");
    clearLine("line69");
    clearLine("line70");

}

/**
 * This function sets the attributes of the objects in Stage 4 of the diagram
 *  back to the default.
 */
function clearStageFour() {

    clearObject("rect11");
    clearObject("rect12");
    clearObject("rect13");
    clearObject("rect14");
    clearLine("line1");
    clearLine("line14");
    clearLine("line16");
    clearLine("line17");
    clearLine("line21");
    clearLine("line40");
    clearLine("line41");
    clearLine("line42");
    clearLine("line43");
    clearLine("line45");
    clearLine("line46");
    clearLine("line57");
    clearLine("line58");
    clearLine("line60");
    clearLine("line62");
    clearLine("line66");
}

/**
 * This function sets the attributes of the objects in Stage 3 of the diagram
 *  back to the default.
 */
function clearStageThree() {

    clearObject("ellipse4");
    clearObject("ellipse3");
    clearObject("rect10");
    clearObject("rect9");
    clearObject("poly3");
    clearObject("poly2");
    clearLine("line11");
    clearLine("line12");
    clearLine("line13");
    clearLine("line30");
    clearLine("line33");
    clearLine("line34");
    clearLine("line35");
    clearLine("line36");
    clearLine("line37");
    clearLine("line38");
    clearLine("line39");
    clearLine("line42");
    clearLine("line44");
    clearLine("line54");
    clearLine("line56");
    clearLine("line60");
    clearLine("line61");
    clearLine("line65");

}

/**
 * This function sets the attributes of the objects in Stage 2 of the diagram
 *  back to the default.
 */
function clearStageTwo() {

    clearObject("rect5");
    clearObject("rect7");
    clearObject("rect8");
    clearObject("ellipse2");
    clearLine("line23");
    clearLine("line24");
    clearLine("line25");
    clearLine("line31");
    clearLine("line32");
    clearLine("line49");
    clearLine("line50");
    clearLine("line51");
    clearLine("line52");
    clearLine("line28");
    clearLine("line29");
    clearLine("line63");
    clearLine("line64");

}

/**
 * This function sets the attributes of the objects in Stage 1 of the diagram
 *  back to the default.
 */
function clearStageOne() {

    clearObject("rect1");
    clearObject("rect2");
    clearObject("rect3");
    clearObject("rect4");
    clearObject("ellipse1");
    clearObject("poly1");
    clearLine("line3");
    clearLine("line4");
    clearLine("line22");
    clearLine("line6");
    clearLine("line19");
    clearLine("line7");
    clearLine("line8");
    clearLine("line9");
    clearLine("line20");
    clearLine("line18");
    clearLine("line15");
    clearLine("line2");
    clearLine("line5");

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