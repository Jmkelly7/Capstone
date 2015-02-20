/**
 * This file contains functions that interpret instruction type and color the
 *  correct diagram parts and legend text.
 *
 * @author  Josh Kelly
 * @author  Trevor Griggs
 * @version 12/11/2014
 */

/**
 * This function is the path for R type instructions to follow in the diagram and colors and clears the
 * appropriate objects in the diagram.
 *
 * @param stage - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 */
function stepThroughRType(stage, color) {

    if (stage == 0) {

        colorAndRefreshDiagramObjects("rect3", color);
        colorAndRefreshDiagramObjects("rect4", color);
        document.getElementById("txt22").textContent = Inst1[0];
        colorLines("line22", color);

    } else if (stage == 1) {

        clearStageOne();
        document.getElementById("txt22").textContent = "";
        colorAndRefreshDiagramObjects("rect5", color);
        colorAndRefreshDiagramObjects("rect7", color);
        colorAndRefreshDiagramObjects("rect8", color);
        colorLines("line23", color);
        document.getElementById("txt24").textContent = Inst1[1];
        colorLines("line24", color);
        document.getElementById("txt25").textContent = Inst1[0];
        colorLines("line25", color);
        document.getElementById("txt31").textContent = Inst1[1];
        colorLines("line31", color);
        document.getElementById("txt32").textContent = Inst1[0];
        colorLines("line32", color);
        colorLines("line49", color);
        colorLines("line50", color);

    } else if (stage == 2) {

        clearStageTwo();
        document.getElementById("txt24").textContent = "";
        document.getElementById("txt25").textContent = "";
        document.getElementById("txt31").textContent = "";
        document.getElementById("txt32").textContent = "";
        colorAndRefreshDiagramObjects("rect9", color);
        colorAndRefreshDiagramObjects("rect10", color);
        colorAndRefreshDiagramObjects("ellipse4", color);
        colorAndRefreshDiagramObjects("poly3", color);
        document.getElementById("txt33").textContent = Inst1[0];
        colorLines("line33", color);
        document.getElementById("txt34").textContent = Inst1[1];
        colorLines("line34", color);
        document.getElementById("txt35").textContent = Inst1[1];
        colorLines("line35", color);
        document.getElementById("txt37").textContent = Inst1[1];
        colorLines("line37", color);
        document.getElementById("txt39").textContent = Inst1[0];
        colorLines("line39", color);

    } else if (stage == 3) {

        clearStageThree();
        document.getElementById("txt33").textContent = "";
        document.getElementById("txt34").textContent = "";
        document.getElementById("txt35").textContent = "";
        document.getElementById("txt37").textContent = "";
        document.getElementById("txt39").textContent = "";
        colorAndRefreshDiagramObjects("rect11", color);
        colorAndRefreshDiagramObjects("rect13", color);
        colorAndRefreshDiagramObjects("rect14", color);
        document.getElementById("txt41").textContent = Inst1[0];
        colorLines("line41", color);
        document.getElementById("txt43").textContent = Inst1[0];
        colorLines("line43", color);
        colorLines("line57", color);

    } else if (stage == 4) {

        console.log("4 instructions");
        clearStageFour();
        document.getElementById("txt41").textContent = "";
        document.getElementById("txt43").textContent = "";
        colorAndRefreshDiagramObjects("rect15", color);
        colorAndRefreshDiagramObjects("ellipse5", color);
        colorAndRefreshDiagramObjects("rect6", color);
        colorLines("line58", color);
        document.getElementById("txt48").textContent = Inst1[0];
        colorLines("line48", color);
        document.getElementById("txt47").textContent = Inst1[0];
        colorLines("line47", color);
        document.getElementById("txt46").textContent = Inst1[0];
        colorLines("line46", color);
        document.getElementById("txt26").textContent = Inst1[1];
        colorLines("line26", color);
        document.getElementById("txt27").textContent = Inst1[0];
        colorLines("line27", color);
        colorLines("line53", color);
        colorLines("line59", color);

    } else if (stage == 5) {

        console.log("CLEARING ALL OF THE OBJECTS WITH 5 INSTRUCTIONS");
        clearStageFive();
        document.getElementById("txt46").textContent = "";
        document.getElementById("txt48").textContent = "";
        document.getElementById("txt27").textContent = "";
        document.getElementById("txt47").textContent = "";
        document.getElementById("txt26").textContent = "";

    }

}

/**
 *This function is the path for I type instructions to follow in the diagram and colors and clears the
 * appropriate objects in the diagram.
 *
 * @param stage - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 **/
function stepThroughIType(stage, color) {

    if (stage == 0) {

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

    } else if (stage == 1) {

        clearStageOne();
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

    } else if (stage == 2) {

        clearStageTwo();
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

    } else if (stage == 3) {

        clearStageThree();
        colorAndRefreshDiagramObjects("rect11", color);
        colorAndRefreshDiagramObjects("rect13", color);
        colorAndRefreshDiagramObjects("rect14", color);
        colorLines("line41", color);
        colorLines("line43", color);
        colorLines("line57", color);

    } else if (stage == 4) {

        clearStageFour();
        /*clearGivenObject("rect11");
        clearGivenObject("rect13");
        clearGivenObject("rect14");
        clearGivenObject("line41");
        clearGivenObject("line46");
        clearGivenObject("line43");
        clearGivenObject("line57");
        clearGivenObject("line58");*/
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

    } else if (stage == 5) {

        clearStageFive();
        /*clearGivenObject("rect15");
        clearGivenObject("ellipse5");
        clearGivenObject("rect6");
        clearGivenObject("line48");
        clearGivenObject("line47");
        clearGivenObject("line26");
        clearGivenObject("line27");
        clearGivenObject("line53");
        clearGivenObject("line59");
        clearGivenObject("line58");
        clearGivenObject("line46");*/

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