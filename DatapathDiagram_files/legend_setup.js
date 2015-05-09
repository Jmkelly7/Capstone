/**
 * This file contains functions that are used for creating and displaying the
 *  instruction legend for the web application.
 *
 * @author  Josh Kelly
 * @author  Trevor Griggs
 * @version 12/11/2014
 */

/**
 * The array that holds the list of instructions from the file that is read in.
 */
var instructionArray = [];

/**
 * This function that sets up the register arrays for the first five instructions within the legend.
 *
 * @param instArray - the array to set up for the given instruction.
 */
function setupReg(instArray) {

    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!INST1 IS " + Inst1[0]);
    if (Inst1[0] == [""]) {

        console.log("IN THE FIST CHECK FOR SETUPREG");
        console.log("value from array" + instArray[regCounter]);
        Inst1 = trimInst(instArray[regCounter].split(" "));
        console.log("REGISTER VALUE 1:", Inst1[0], "| REGISTER VALUE 2:", Inst1[1], "| REGISTER VALUE 3:", Inst1[2], "| REGISTER VALUE 4:", Inst1[3]);
        regCounter++;

        Inst2 = trimInst(instArray[regCounter].split(" "));
        console.log("REGISTER VALUE 1:", Inst2[0], "| REGISTER VALUE 2:", Inst2[1], "| REGISTER VALUE 3:", Inst2[2], "| REGISTER VALUE 4:", Inst2[3]);
        regCounter++;

        Inst3 = trimInst(instArray[regCounter].split(" "));
        console.log("REGISTER VALUE 1:", Inst3[0], "| REGISTER VALUE 2:", Inst3[1], "| REGISTER VALUE 3:", Inst3[2], "| REGISTER VALUE 4:", Inst3[3]);
        regCounter++;

        Inst4 = trimInst(instArray[regCounter].split(" "));
        console.log("REGISTER VALUE 1:", Inst4[0], "| REGISTER VALUE 2:", Inst4[1], "| REGISTER VALUE 3:", Inst4[2], "| REGISTER VALUE 4:", Inst4[3]);
        regCounter++;

        Inst5 = trimInst(instArray[regCounter].split(" "));
        console.log("REGISTER VALUE 1:", Inst5[0], "| REGISTER VALUE 2:", Inst5[1], "| REGISTER VALUE 3:", Inst5[2], "| REGISTER VALUE 4:", Inst5[3]);
        regCounter++;

    } else {

        if(document.getElementById("slot6").textContent != "") {

            Inst1 = Inst2;
            Inst2 = Inst3;
            Inst3 = Inst4;
            Inst4 = Inst5;
            Inst5 = trimInst(instructionArray[regCounter].split(" "));
            regCounter++;

        }

        console.log("1st REGISTER VALUE 1:", Inst1[0], "| REGISTER VALUE 2:", Inst1[1], "| REGISTER VALUE 3:", Inst1[2], "| REGISTER VALUE 4:", Inst1[3]);
        console.log("2nd REGISTER VALUE 1:", Inst2[0], "| REGISTER VALUE 2:", Inst2[1], "| REGISTER VALUE 3:", Inst2[2], "| REGISTER VALUE 4:", Inst2[3]);
        console.log("3rd REGISTER VALUE 1:", Inst3[0], "| REGISTER VALUE 2:", Inst3[1], "| REGISTER VALUE 3:", Inst3[2], "| REGISTER VALUE 4:", Inst3[3]);
        console.log("4th REGISTER VALUE 1:", Inst4[0], "| REGISTER VALUE 2:", Inst4[1], "| REGISTER VALUE 3:", Inst4[2], "| REGISTER VALUE 4:", Inst4[3]);
        console.log("5th REGISTER VALUE 1:", Inst5[0], "| REGISTER VALUE 2:", Inst5[1], "| REGISTER VALUE 3:", Inst5[2], "| REGISTER VALUE 4:", Inst5[3]);
        console.log("Iregcounter" + regCounter);

    }
}

/**
 * This function initializes the legend for the first eleven instructions from
 *  the instruction legend and sets the attribute inst for each of the slots
 *  within the legend.
 *
 * @param instArray - the array of instructions to use to generate the legend.
 */
function getInstructionForList(instArray) {

    var inst = "";
    var word = "";

    // For loop to setup legend and send it to legend. We are going to get all the instructions
    //  from the file we read in after we get the file sending system working.
    //  as for right now we are statically placing the instruction within the legend
    //  just so we have a few placeholders on what it is going to look like.
    for (var i = 1; i < 12; i++) {

        inst = instArray[instructionCounter].split(" ");
        word = "slot";
        word = word + i;
        document.getElementById(word).textContent = instArray[instructionCounter];
        document.getElementById(word).setAttribute("inst", inst[0]);
        instructionCounter++;

    }

    setupReg(instructionArray);

}

/**
 * This function determines if there is a hazard that should cause a stall.
 *
 * @returns {boolean}
 */
function isNoOp() {

    var isNoOp = false;

    for (var i = 1; i <= 5; i++) {

        if (document.getElementById("slot" + i).textContent == "noop") {

            isNoOp = true;

        }

    }

    return isNoOp;

}

/**
 * This function sets up the legend and if it is the first time it calls
 *  getInstructionForList and then it updates the list by moving everything up
 *  and taking the first off and adding a new one once the others are moved up
 *  the list on the legend.
 */
function setupLegend() {

    console.log("setupLegend() CALLED!!!!!!!");

    // Going to call getInstructionForList and build it while keeping it
    //  refreshing when it needs to be.

    if (instructionCounter == 0) {

        instructionArray = parseFile();
        getInstructionForList(instructionArray);

    } else {

        // The color that will replace nextColor when the instruction in stage 5
        //  falls off the diagram.
        var colorQueue = document.getElementById("slot1").getAttribute("fill");

        console.log("==================" + colorQueue + "===================");

        // Fills the instruction legend. Various checks determine what happens.
        for (var i = 1; i < 12; i++) {

            var word = "slot";

            if (i < 11) {

                var num = i + 1;
                var word2 = word + num;
                word = word + i;

                if (!hazard || i < 3) {

                    document.getElementById(word).textContent =
                        document.getElementById(word2).textContent;
                    document.getElementById(word).setAttribute("inst",
                        document.getElementById(word2).getAttribute("inst"));

                } else if (i == 3) {

                    document.getElementById(word).textContent = "noop";
                    document.getElementById(word).setAttribute("inst", "noop");

                }

                if (i < 5) {

                    if (!hazard || i < 3) {

                        console.log("++++++++++++++++++++++++++++++++MOVE INSTRUCTION " + i + " UP!+++++++++++++++++++++++++++++++++");

                        document.getElementById(word).setAttribute("fill",
                            document.getElementById(word2).getAttribute("fill"));

                    } else if (i == 3) {

                        document.getElementById(word).setAttribute("fill", "slategrey");

                    }

                } else if (i == 5) {

                    console.log("darkgrey && hazard == " + ((document.getElementById("slot1").getAttribute("fill") == "slategrey") && hazard));
                    console.log("darkgrey && !hazard == " + ((document.getElementById("slot1").getAttribute("fill") == "slategrey") && !hazard));
                    console.log("hazard && isNoOp() == " + (hazard && isNoOp()));
                    console.log("!hazard && isNoOp() == " + (!hazard && isNoOp()));
                    console.log("hazard && !isNoOp() == " + (hazard && !isNoOp()));
                    console.log("!hazard && !isNoOp() == " + (!hazard && !isNoOp()));
                    console.log("hazard == " + hazard);
                    console.log("!hazard == " + !hazard);
                    console.log("isNoOp() == " + isNoOp());
                    console.log("!isNoOp() == " + !isNoOp());

                    if (document.getElementById("slot1").getAttribute("fill") == "slategrey" && hazard) {

                        console.log("No changes to nextColor (" + nextColor + ") or nextNextColor (" + nextNextColor + ")!");


                    } else if (document.getElementById("slot1").getAttribute("fill") == "slategrey" && !hazard) {

                        console.log("Setting " + word + "'s fill value to " + nextColor + " (i == 5)(darkgrey && !hazard)!");
                        document.getElementById(word).setAttribute("fill",
                            nextColor);

                        console.log("Setting nextColor to " + nextNextColor + " (nextNextColor)!");
                        console.log("Setting nextNextColor to " + colorQueue + " (colorQueue)!");

                        nextColor = nextNextColor;
                        nextNextColor = colorQueue;

                    } else if (hazard && isNoOp()) {

                        if (colorQueue == "slategrey") {

                            console.log("No changes to nextColor (" + nextColor + ") or nextNextColor (" + nextNextColor + ")!");

                        } else {

                            console.log("Setting nextNextColor to " + colorQueue + " (colorQueue)(i == 5)(hazard && isNoOp())!");
                            nextNextColor = colorQueue;

                        }

                    } else if (!hazard && isNoOp()) {

                        if (nextNextColor != "") {

                            console.log("Setting " + word + "'s fill value to " + nextColor + " (i == 5)(!hazard && isNoOp())!");
                            document.getElementById(word).setAttribute("fill",
                                nextColor);

                            console.log("Setting nextColor to " + nextNextColor + " (nextNextColor)!");
                            nextColor = nextNextColor;

                        }

                        console.log("Setting nextNextColor to " + colorQueue + " (colorQueue)!");
                        nextNextColor = colorQueue;

                    } else if (hazard && !isNoOp()) {

                        if (nextNextColor != "") {

                            console.log("Setting " + word + "'s fill value to " + nextColor + " (i == 5)(hazard && isNoOp())!");
                            document.getElementById(word).setAttribute("fill",
                                nextColor);

                            console.log("Setting nextColor to " + nextNextColor + " (nextNextColor)!");
                            nextColor = nextNextColor;

                        }

                        console.log("Setting nextNextColor to " + colorQueue + " (colorQueue)!");
                        nextNextColor = colorQueue;

                    } else if (!hazard && !isNoOp()) {

                        console.log("isNoOp() was false!!!");
                        console.log("Setting " + word + "'s fill value to " + nextColor + " (i == 5)(!hazard && !isNoOp())!");
                        document.getElementById(word).setAttribute("fill",
                            nextColor);

                        if (colorQueue == "slategrey") {

                            console.log("Setting nextColor to " + nextNextColor + " (nextNextColor)!");
                            console.log("Clearing nextNextColor!");
                            nextColor = nextNextColor;
                            nextNextColor = "";

                        } else {

                            console.log("Setting nextColor to " + colorQueue + " (colorQueue)!");
                            nextColor = colorQueue;

                        }

                    }

                }

            } else {

                word = word + i;
                document.getElementById(word).textContent =
                    instructionArray[instructionCounter];

                if (document.getElementById(word).textContent != "") {

                    var inst = instructionArray[instructionCounter].split(" ");
                    console.log("INST THAT WE ARE SETTING IN THE LEGEND TO PUT IN THE THING IO PROBS BOB");
                    document.getElementById(word).setAttribute("inst", inst[0]);
                }

                instructionCounter++;

                if (!hazard) {

                    setupReg(instructionArray);

                }
            }

        }

        if (hazard) {

            hazard = false;

        }

    }

}


/**
 * This function trims off unneeded punctuations from the given instruction.
 *
 * @param inst      - array containing the pieces of an instruction.
 * @returns {Array} - array with punctuation removed.
 */
function trimInst(inst) {

    var trimmed = [];

    // Checks to see if the instruction has 3 or 4 parts.
    if ((inst[3] != undefined)) {

        trimmed[0] = inst[0];
        trimmed[1] = inst[1].substring(0, inst[1].length - 1);
        trimmed[2] = inst[2].substring(0, inst[2].length - 1);
        trimmed[3] = inst[3];

    } else if ((inst[0] == "la") || (inst[0] == "li") ||
               (inst[0] == "lw") || (inst[0] == "lh") ||
               (inst[0] == "lb") || (inst[0] == "sw") ||
               (inst[0] == "sh") || (inst[0] == "sb")) {

        trimmed[0] = inst[0];
        trimmed[1] = inst[1].substring(0, inst[1].length - 1);
        trimmed[2] = inst[2].slice(0, 1);
        trimmed[3] = inst[2].slice((inst[2].indexOf("(") + 1), (inst[2].indexOf(")")));

    }

    return trimmed;

}

/**
 * This function handles updating the instruction legend when the back button is
 *  clicked.
 *
 *  NOT USED.
 */
/*function backLegend(previousInstruction, inst, colorInQueue) {

    var newColorInQueue = document.getElementById("slot5").getAttribute("fill");

    for (var i = 11; i > 0; i--) {

        var word = "slot";
        var num = i - 1;
        var word2 = word + num;
        word = word + i;

        if (i > 1) {

            document.getElementById(word).textContent =
                document.getElementById(word2).textContent;
            document.getElementById(word).setAttribute("inst", document.getElementById(word2).getAttribute("inst"));

            if (i < 6) {

                document.getElementById(word).setAttribute("fill",
                    document.getElementById(word2).getAttribute("fill"));
            }

        } else {

            document.getElementById(word).textContent = previousInstruction;
            document.getElementById(word).setAttribute("inst", inst);
            document.getElementById(word).setAttribute("fill", colorInQueue);

        }

    }

    return newColorInQueue;

}*/

