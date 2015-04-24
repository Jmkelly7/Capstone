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
        console.log("INTHE FIST CHECK FOR SETUPREG");
        console.log("value from array" + instArray[regCounter]);
        Inst1 = instArray[regCounter].split(" ");
      //  Inst1.shift();
        console.log("REGISTER VALUE 1", Inst1[0], "REGISTER VALUE 2", Inst1[1], "REGISTER VALUE 3", Inst1[2]);
        regCounter++;
        Inst2 = instArray[regCounter].split(" ");
       // Inst2.shift();
        console.log("REGISTER VALUE 1", Inst2[0], "REGISTER VALUE 2", Inst2[1], "REGISTER VALUE 3", Inst2[2]);
        regCounter++;
        Inst3 = instArray[regCounter].split(" ");
        //Inst3.shift();
        console.log("REGISTER VALUE 1", Inst3[0], "REGISTER VALUE 2", Inst3[1], "REGISTER VALUE 3", Inst3[2]);
        regCounter++;
        Inst4 = instArray[regCounter].split(" ");
       // Inst4.shift();
        console.log("REGISTER VALUE 1", Inst4[0], "REGISTER VALUE 2", Inst4[1], "REGISTER VALUE 3", Inst4[2]);
        regCounter++;
        Inst5 = instArray[regCounter].split(" ");
        //Inst5.shift();
        console.log("REGISTER VALUE 1", Inst5[0], "REGISTER VALUE 2", Inst5[1], "REGISTER VALUE 3", Inst5[2]);
        regCounter++;

    } else {

        if(document.getElementById("slot6").textContent != "") {
            Inst1 = Inst2;
            Inst2 = Inst3;
            Inst3 = Inst4;
            Inst4 = Inst5;
            Inst5 = instructionArray[regCounter].split(" ");
            //Inst5.shift();
            regCounter++;
        }

        console.log("REGISTER VALUE 1", Inst1[0], "REGISTER VALUE 2", Inst1[1], "REGISTER VALUE 3", Inst1[2]);
        console.log("REGISTER VALUE 1", Inst2[0], "REGISTER VALUE 2", Inst2[1], "REGISTER VALUE 3", Inst2[2]);
        console.log("REGISTER VALUE 1", Inst3[0], "REGISTER VALUE 2", Inst3[1], "REGISTER VALUE 3", Inst3[2]);
        console.log("REGISTER VALUE 1", Inst4[0], "REGISTER VALUE 2", Inst4[1], "REGISTER VALUE 3", Inst4[2]);
        console.log("REGISTER VALUE 1", Inst5[0], "REGISTER VALUE 2", Inst5[1], "REGISTER VALUE 3", Inst5[2]);
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

function isNoOp() {

    var isNoOp = false;

    for (var i = 1; i <= 5; i++) {

        //console.log("NoOp in slot" + i + "? ");
        if (document.getElementById("slot" + i).textContent == "noop") {

            isNoOp = true;

        }
        //console.log(isNoOp);

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
        //var color = colors.indexOf(document.getElementById("slot2").getAttribute("fill"));
        //console.log("DID IT WORK?!?!?!?!?!?!?!?!?!?!? " + color);
        console.log("==================" + colorQueue + "===================");

        console.log(isNoOp());

        /*if (isNoOp()) {

            console.log(nextNextColor != "");

            if (nextNextColor != "") {

                nextColor = nextNextColor;

            }

            nextNextColor = colorQueue;

        } else {

            nextColor = colorQueue;

        }*/

        /*if (colorQueue == "slategrey")

            console.log("I'M IN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

            //var color = colors.indexOf(document.getElementById("slot2").getAttribute("fill"));

            if (color == 1) { color = 6 }

            colorQueue = colors[color];

            console.log("==================" + color + "===================");
            console.log("==================" + colorQueue + "===================");

        }*/

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

                    } else if (hazard && isNoOp() /*&& (colorQueue == "slategrey")*/) {

                        if (colorQueue == "slategrey") {

                            console.log("No changes to nextColor (" + nextColor + ") or nextNextColor (" + nextNextColor + ")!");

                        } else {

                            console.log("Setting nextNextColor to " + colorQueue + " (colorQueue)(i == 5)(hazard && isNoOp())!");
                            nextNextColor = colorQueue;

                        }

                    } /*else if (hazard && isNoOp()) {

                        console.log("Setting nextNextColor to " + colorQueue + " (colorQueue)(i == 5)(hazard && isNoOp())!");
                        nextNextColor = colorQueue;

                    }*/ else if (!hazard && isNoOp()) {

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
                setupReg(instructionArray);
            }

        }

        if (hazard) {

            hazard = false;

        }

    }

}

/**
 * This function handles updating the instruction legend when the back button is
 *  clicked.
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

