/**
 * Created by Josh on 12/11/2014.
 */

/**
 * This function is the path for R type instructions to follow in the diagram and colors and clears the
 * appropriate objects in the diagram.
 *
 * @param count - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 */
function stepThroughRType(count, color) {

    if (count == 0) {

        colorAndRefreshDiagramObjects("rect3", color);
        colorAndRefreshDiagramObjects("rect4", color);
        colorLines("line22", color);

    } else if (count == 1) {

        clearGivenObject("rect3");
        clearGivenObject("rect4");
        clearGivenObject("line22");
        colorAndRefreshDiagramObjects("rect5", color);
        colorAndRefreshDiagramObjects("rect7", color);
        colorAndRefreshDiagramObjects("rect8", color);
        colorLines("line23", color);
        colorLines("line24", color);
        colorLines("line25", color);
        colorLines("line31", color);
        colorLines("line32", color);
        colorLines("line49", color);
        colorLines("line50", color);

    } else if (count == 2) {

        clearGivenObject("rect5");
        clearGivenObject("rect7");
        clearGivenObject("rect8");
        clearGivenObject("line23");
        clearGivenObject("line24");
        clearGivenObject("line25");
        clearGivenObject("line31");
        clearGivenObject("line32");
        clearGivenObject("line49");
        clearGivenObject("line50");
        colorAndRefreshDiagramObjects("rect9", color);
        colorAndRefreshDiagramObjects("rect10", color);
        colorAndRefreshDiagramObjects("ellipse4", color);
        colorAndRefreshDiagramObjects("poly3", color);
        colorLines("line33", color);
        colorLines("line34", color);
        colorLines("line35", color);
        colorLines("line37", color);
        colorLines("line39", color);

    } else if (count == 3) {

        clearGivenObject("rect9");
        clearGivenObject("rect10");
        clearGivenObject("ellipse4");
        clearGivenObject("poly3");
        clearGivenObject("line33");
        clearGivenObject("line34");
        clearGivenObject("line35");
        clearGivenObject("line37");
        clearGivenObject("line39");
        colorAndRefreshDiagramObjects("rect11", color);
        colorAndRefreshDiagramObjects("rect13", color);
        colorAndRefreshDiagramObjects("rect14", color);
        colorLines("line41", color);
        colorLines("line43", color);
        colorLines("line57", color);

    } else if (count == 4) {

        clearGivenObject("rect11");
        clearGivenObject("rect13");
        clearGivenObject("rect14");
        clearGivenObject("line41");
        clearGivenObject("line46");
        clearGivenObject("line43");
        clearGivenObject("line57");
        clearGivenObject("line58");
        colorAndRefreshDiagramObjects("rect15", color);
        colorAndRefreshDiagramObjects("ellipse5", color);
        colorAndRefreshDiagramObjects("rect6", color);
        colorLines("line58", color);
        colorLines("line46", color);
        colorLines("line48", color);
        colorLines("line47", color);
        colorLines("line26", color);
        colorLines("line27", color);
        colorLines("line53", color);
        colorLines("line59", color);

    } else if (count == 5) {

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

}

/**
 *This function is the path for I type instructions to follow in the diagram and colors and clears the
 * appropriate objects in the diagram.
 *
 * @param counter - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 **/
function stepThroughIType(counter, color) {

    if (counter == 0) {

        colorAndRefreshDiagramObjects("ellipse1", color);
        colorAndRefreshDiagramObjects("poly1", color);
        colorAndRefreshDiagramObjects("rect3", color);
        colorAndRefreshDiagramObjects("rect4", color);
        colorLines("line22", color);
        colorLines("line3", color);
        colorLines("line4", color);
        colorLines("line6", color);
        colorLines("line19", color);
        colorLines("line7", color);
        colorLines("line8", color);
        colorLines("line9", color);

    } else if (counter == 1) {

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
        colorAndRefreshDiagramObjects("rect5", color);
        colorAndRefreshDiagramObjects("rect7", color);
        colorAndRefreshDiagramObjects("rect8", color);
        colorAndRefreshDiagramObjects("ellipse2", color);
        colorLines("line23", color);
        colorLines("line24", color);
        colorLines("line25", color);
        colorLines("line31", color);
        colorLines("line32", color);
        colorLines("line49", color);
        colorLines("line50", color);
        colorLines("line51", color);
        colorLines("line52", color);
        colorLines("line28", color);
        colorLines("line29", color);

    } else if (counter == 2) {

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
        colorAndRefreshDiagramObjects("rect9", color);
        colorAndRefreshDiagramObjects("rect10", color);
        colorAndRefreshDiagramObjects("ellipse4", color);
        colorAndRefreshDiagramObjects("poly3", color);
        colorLines("line33", color);
        colorLines("line34", color);
        colorLines("line35", color);
        colorLines("line37", color);
        colorLines("line39", color);
        colorLines("line30", color);
        colorLines("line61", color);
        colorLines("line56", color);

    } else if (counter == 3) {

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
        colorAndRefreshDiagramObjects("rect11", color);
        colorAndRefreshDiagramObjects("rect13", color);
        colorAndRefreshDiagramObjects("rect14", color);
        colorLines("line41", color);
        colorLines("line43", color);
        colorLines("line57", color);

    } else if (counter == 4) {

        clearGivenObject("rect11");
        clearGivenObject("rect13");
        clearGivenObject("rect14");
        clearGivenObject("line41");
        clearGivenObject("line46");
        clearGivenObject("line43");
        clearGivenObject("line57");
        clearGivenObject("line58");
        colorAndRefreshDiagramObjects("rect15", color);
        colorAndRefreshDiagramObjects("ellipse5", color);
        colorAndRefreshDiagramObjects("rect6", color);
        colorLines("line58", color);
        colorLines("line46", color);
        colorLines("line48", color);
        colorLines("line47", color);
        colorLines("line26", color);
        colorLines("line27", color);
        colorLines("line53", color);
        colorLines("line59", color);

    } else if (counter == 5) {

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

}

/**
 * This function is the path for J type instructions to follow in the diagram and colors and clears the
 * appropriate objects in the diagram.
 *
 * @param counter - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 */
function stepThroughJType(counter, color) {

    // code for J type instructions goes here

}