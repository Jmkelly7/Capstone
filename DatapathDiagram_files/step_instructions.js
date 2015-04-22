/**
 * This file contains functions that interpret instruction type and color the
 *  correct diagram parts and legend text.
 *
 * @author  Josh Kelly
 * @author  Trevor Griggs
 * @version 12/11/2014
 */

/**
 * This function handles choosing the path for R-type instructions to follow in
 *  the diagram and colors and clears the appropriate objects in the diagram.
 *
 * @param stage - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 */
function stepThroughRType(stage, color) {

    if (stage == 0) {

        colorObject("ellipse1", color);
        colorObject("poly1", color);
        colorObject("rect3", color);
        colorObject("rect4", color);
        colorLine("line22", color);
        colorLine("line3", color);
        colorLine("line4", color);
        colorLine("line6", color);
        colorLine("line19", color);
        colorLine("line7", color);
        colorLine("line8", color);
        colorLine("line20", color);
        colorLine("line15", color);
        colorLine("line18", color);
        colorLine("line2", color);
        colorLine("line5", color);


    } else if (stage == 1) {

        clearStageOne();
        colorObject("rect5", color);
        colorObject("rect7", color);
        colorObject("rect8", color);
        colorLine("line23", color);
        colorLine("line24", color);
        colorLine("line25", color);
        colorLine("line31", color);
        colorLine("line32", color);
        colorLine("line49", color);
        colorLine("line50", color);
        colorLine("line51", color);
        colorLine("line52", color);
        colorLine("line63", color);
        colorLine("line64", color);

    } else if (stage == 2) {

        clearStageTwo();
        colorObject("rect9", color);
        colorObject("rect10", color);
        colorObject("ellipse4", color);
        colorObject("poly3", color);
        colorLine("line33", color);
        colorLine("line34", color);
        colorLine("line35", color);
        colorLine("line37", color);
        colorLine("line39", color);
        colorLine("line65", color);

    } else if (stage == 3) {

        clearStageThree();
        colorObject("rect11", color);
        colorObject("rect14", color);
        colorLine("line41", color);
        colorLine("line43", color);
        colorLine("line57", color);
        colorLine("line66", color);


    } else if (stage == 4) {

        console.log("4 instructions");
        clearStageFour();
        colorObject("rect15", color);
        colorObject("ellipse5", color);
        colorObject("rect6", color);
        colorLine("line62", color);
        colorLine("line58", color);
        colorLine("line48", color);
        colorLine("line47", color);
        colorLine("line46", color);
        colorLine("line26", color);
        colorLine("line27", color);
        colorLine("line53", color);
        colorLine("line59", color);
        colorLine("line67", color);
        colorLine("line68", color);
        colorLine("line69", color);
        colorLine("line70", color);

    } else if (stage == 5) {

        console.log("CLEARING ALL OF THE OBJECTS WITH 5 INSTRUCTIONS");
        clearStageFive();
    }

}

/**
 * This function handles choosing the path for I-type instructions to follow in
 *  the diagram and colors and clears the appropriate objects in the diagram.
 *
 * @param stage - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 * @param inst  - The current instruction.
 **/
function stepThroughIType(stage, color, inst) {

    if (stage == 0) {

        colorObject("ellipse1", color);
        colorObject("poly1", color);
        colorObject("rect3", color);
        colorObject("rect4", color);
        colorLine("line22", color);
        colorLine("line3", color);
        colorLine("line4", color);
        colorLine("line6", color);
        colorLine("line19", color);
        colorLine("line7", color);
        colorLine("line8", color);
        colorLine("line20", color);
        colorLine("line15", color);
        colorLine("line18", color);
        colorLine("line2", color);
        colorLine("line5", color);

    } else if (stage == 1) {

        clearStageOne();

        if(!(inst == ("sw")) && !(inst == ("sb")) && !(inst == ("sh"))) {

            colorLine("line63", color);
            colorLine("line64", color);

        }

        colorObject("rect5", color);
        colorObject("rect7", color);
        colorObject("rect8", color);
        colorObject("ellipse2", color);
        colorLine("line23", color);
        colorLine("line24", color);
        colorLine("line25", color);
        colorLine("line31", color);
        colorLine("line32", color);
        colorLine("line49", color);
        colorLine("line50", color);
        colorLine("line51", color);
        colorLine("line52", color);
        colorLine("line28", color);
        colorLine("line29", color);

    } else if (stage == 2) {

        clearStageTwo();

        if(inst == ("sw") || inst == ("sb") || inst == ("sh")) {

            colorObject("rect9", color);
            colorObject("rect10", color);
            colorObject("ellipse4", color);
            colorObject("poly3", color);
            colorLine("line33", color);
            colorLine("line34", color);
            colorLine("line37", color);
            colorLine("line39", color);
            colorLine("line30", color);
            colorLine("line61", color);
            colorLine("line56", color);
            colorLine("line54", color);
            colorLine("line36", color);

        } else {

            colorObject("rect9", color);
            colorObject("rect10", color);
            colorObject("ellipse4", color);
            colorObject("poly3", color);
            colorLine("line33", color);
            colorLine("line34", color);
            colorLine("line35", color);
            colorLine("line37", color);
            colorLine("line39", color);
            colorLine("line30", color);
            colorLine("line61", color);
            colorLine("line56", color);
            colorLine("line65", color);

        }

    } else if (stage == 3) {

        clearStageThree();

        if (inst == ("lb")   || inst == ("lbu") || inst == ("lh") ||
            inst == ("lhu")  || inst == ("lui") || inst == ("lw")) {

            colorObject("rect11", color);
            colorObject("rect13", color);
            colorObject("rect14", color);
            colorLine("line41", color);
            colorLine("line42", color);
            colorLine("line44", color);
            colorLine("line66", color);

        } else if (inst == ("sw") || inst == ("sb") || inst == ("sh")) {

            colorObject("rect11", color);
            colorObject("rect12", color);
            colorLine("line41", color);
            colorLine("line42", color);
            colorLine("line60", color);
            
        } else {

            colorObject("rect11", color);
            colorObject("rect14", color);
            colorLine("line41", color);
            colorLine("line43", color);
            colorLine("line57", color);
            colorLine("line66", color);

        }

    } else if (stage == 4) {

        clearStageFour();

        if (inst == ("lb")    || inst == ("lbu")  || inst == ("lh")    ||
            inst == ("lhu")  || inst == ("lui")   || inst == ("lw")) {

            colorObject("rect15", color);
            colorObject("ellipse5", color);
            colorObject("rect6", color);
            colorLine("line45", color);
            colorLine("line48", color);
            colorLine("line47", color);
            colorLine("line26", color);
            colorLine("line27", color);
            colorLine("line53", color);
            colorLine("line59", color);
            colorLine("line67", color);
            colorLine("line68", color);
            colorLine("line69", color);
            colorLine("line70", color);

        } else if (inst == ("sw") || inst == ("sb") || inst == ("sh")) {

            clearStageFive();

        } else {

            colorObject("rect15", color);
            colorObject("ellipse5", color);
            colorObject("rect6", color);
            colorLine("line62", color);
            colorLine("line58", color);
            colorLine("line46", color);
            colorLine("line48", color);
            colorLine("line47", color);
            colorLine("line26", color);
            colorLine("line27", color);
            colorLine("line53", color);
            colorLine("line59", color);
            colorLine("line67", color);
            colorLine("line68", color);
            colorLine("line69", color);
            colorLine("line70", color);

        }

    } else if (stage == 5) {

        clearStageFive();
        
    }

}

/**
 * This function handles choosing the path for J-type instructions to follow in
 *  the diagram and colors and clears the appropriate objects in the diagram.
 *
 * @param counter - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 */
function stepThroughJType(counter, color) {

    // code for J type instructions goes here

}

/**
 * This function handles choosing the path for pseudo-instructions to follow in
 *  the diagram and colors and clears the appropriate objects in the diagram.
 *
 * @param stage - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 */
function stepThroughPseudoInstruction(stage, color) {

    // code for pseudo-instructions goes here

}

/**
 * This function handles other instructions. These could go through the diagram
 *  like a normal instruction, or they could be dealt with completely
 *  differently.
 *
 * @param inst  - The current instruction.
 * @param stage - The stage the current instruction is in.
 * @param color - The color to change the objects to for the given instruction.
 */
function stepThroughOtherInstruction(inst, stage, color) {

    // code for pseudo-instructions goes here

}