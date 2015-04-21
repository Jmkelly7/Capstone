/**
 * This file contains functions that are used by the datapath diagram page.
 *
 * @author  Josh Kelly
 * @author  Trevor Griggs
 * @version 12/11/2014
 */

/**
 * The counter that keeps track of what instruction is going to go on the legend
 *  next.
 */
var instructionCounter = 0;

/**
 * The counter representing the current instruction.
 */
var currentNumInstruction = 0;

/**
 * The counter for the registers that are being put into arrays for the first 5
 *  instructions on the legend.
 */
var regCounter = 0;

/**
 * The number of instructions that are on the diagram at one time.
 */
var counter = 1;

/**
 * The counter used to parse through the given file and help construct the array
 *  of instructions
 */
var parseCounter = 0;

/**
 * The counter for what step the 1st instruction is on in the pipeline.
 */
var INST_ONE_CNT = 0;

/**
 * The counter for what step the 2nd instruction is on in the pipeline.
 */
var INST_TWO_CNT = 0;

/**
 * The counter for what step the 3rd instruction is on in the pipeline.
 */
var INST_THREE_CNT = 0;

/**
 * The counter for what step the 4th instruction is on in the pipeline.
 */
var INST_FOUR_CNT = 0;

/**
 * The counter for what step the 5th instruction is on in the pipeline.
 */
var INST_FIVE_CNT = 0;

/**
 * The counter for what step the 6th instruction is on in the pipeline.
 */
var INST_SIX_CNT = 0;

/**
 * The array for the registers of the 1st instruction.
 */
var Inst1 = [""];

/**
 * The array for the registers of the 2nd instruction.
 */
var Inst2 = [""];

/**
 * The array for the registers of the 3rd instruction.
 */
var Inst3 = [""];

/**
 * The array for the registers of the 4th instruction.
 */
var Inst4 = [""];

/**
 * The array for the registers of the 5th instruction.
 */
var Inst5 = [""];

/**
 * The buffer color to put on the diagram to keep the colors refreshing
 *  correctly.
 */
var nextColor = "darkorchid";

//var colors = ["firebrick", "peru", "darkgoldenrod", "mediumseagreen", "darkcyan", "darkorchid"];

/**
 * The name of the file that is uploaded.
 */
var fileName = "";

/**
 * The contents of the file.
 */
var fileContents = "";

/**
 * The counter for switching the play on and off
 */
var playCounter = 0;

/**
 * The instance of the interval.
 */
var intervalColor;

/**
 * Tells if this is the first time 5 instructions will be on the diagram at one
 *  time.
 */
var isFirst = true;

var tempArray;
/**
 * The popup window that brings the user to upload a file once they visit the
 *  site.
 */
var popup = window.open('./Upload.html', 'Upload File',
                        'height=300,width=400,left=450,top=200');

// Gives the popup window focus.
popup.focus();

/**
 * This function that parsers through the given file contents and gets the array
 *  of instructions.
 */
function parseFile() {

    // Code for parsing file.
    //  We plan to use the built in string methods of html5 to find the
    //  individual instructions and pull that whole line out.
    var returnInstructions = fileContents.split("\n");
    var legendArray = [""];

    for (var i = 0; i < returnInstructions.length; i++) {

        if (returnInstructions.indexOf("$") != -1 ||
            returnInstructions.indexOf(";") == -1 &&
            returnInstructions[i].substring(0, 1) != "#" &&
            returnInstructions[i].substring(0, 6) != "syscall") {

            legendArray[parseCounter] = returnInstructions[i];
            parseCounter++;

        }

    }

    legendArray[parseCounter] = " ";
    legendArray[parseCounter + 1] = " ";
    legendArray[parseCounter + 2] = " ";
    legendArray[parseCounter + 3] = " ";
    legendArray[parseCounter + 4] = " ";
    legendArray[parseCounter + 5] = " ";
    legendArray[parseCounter + 6] = " ";
    legendArray[parseCounter + 7] = " ";
    legendArray[parseCounter + 8] = " ";
    legendArray[parseCounter + 9] = " ";
    legendArray[parseCounter + 10] = " ";
    return legendArray;

}

/**
 * This function is ran when the step button is clicked and calls the instType
 *  to update the diagram for how many of instructions there are on the diagram.
 */
function runThrough() {

    currentNumInstruction++;

    if (counter == 1) {

        callInst(counter);

        INST_ONE_CNT++;
        counter++;

    } else if (counter == 2) {

        if (!(document.getElementById("slot2").textContent == "")) {

            callInst(counter);

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            counter++;

        } else {

            counter--;
            runThrough();
            setupLegend();

        }

    } else if (counter == 3) {

        if (!(document.getElementById("slot3").textContent == "")) {

            callInst(counter);

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            INST_THREE_CNT++;
            counter++;

        } else {

            counter--;
            runThrough();
            setupLegend();

        }

    } else if (counter == 4) {

        if (!(document.getElementById("slot5").textContent == "")) {

            callInst(counter);

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            INST_THREE_CNT++;
            INST_FOUR_CNT++;
            counter++;

        } else {

            counter--;
            setupLegend();
            runThrough();

        }

    } else if (counter == 5) {

        INST_TWO_CNT++;
        INST_THREE_CNT++;
        INST_FOUR_CNT++;
        INST_FIVE_CNT++;

        INST_ONE_CNT = INST_TWO_CNT;
        INST_TWO_CNT = INST_THREE_CNT;
        INST_THREE_CNT = INST_FOUR_CNT;
        INST_FOUR_CNT = INST_FIVE_CNT;
        INST_FIVE_CNT = 0;

        if(!isFirst) {

            setupLegend();

        } else {

            isFirst = false;

        }

        // Handles the last 5 instructions falling off the diagram
        if (document.getElementById("slot1").textContent == "") {

            colorWhite(1);

        } else if (document.getElementById("slot2").textContent == "") {

            colorWhite(2);

        } else if (document.getElementById("slot3").textContent == "") {

            colorWhite(3);

        } else if (document.getElementById("slot4").textContent == "") {

            colorWhite(4);

        } else if (document.getElementById("slot5").textContent == "") {

            colorWhite(5);

        }

        callInst(counter);

        if(document.getElementById("slot1").textContent == " ") {

            stepThroughRType(5,"White");
            window.alert("PROGRAM FINISHED");
            var r = confirm("Would you like to upload another program?");

            if (r == true) {

                window.setTimeout(location.reload(), 2000);

            } else {

                close();

            }

        }

    }

}

/**
 * This function
 *
 * @param numSlots
 */
function callInst(numSlots) {
    var cnt = INST_ONE_CNT;

    for (var i = 1; i <= numSlots; i++) {

        if (i == 2) {

            cnt = INST_TWO_CNT;

        } else if (i == 3) {

            cnt = INST_THREE_CNT;

        } else if (i == 4) {

            cnt = INST_FOUR_CNT;

        } else if (i == 5) {

            cnt = INST_FIVE_CNT;

        }

        instType(document.getElementById("slot" + i).getAttribute("inst"),
            cnt,
            document.getElementById("slot" + i).getAttribute("fill"));

    }

}

function stallRunThrough(tempCounter) {

    if (tempCounter == 1) {

        instType(document.getElementById("slot1").getAttribute("inst"),
            INST_ONE_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        INST_ONE_CNT++;
        tempCounter++;

    } else if (tempCounter == 2) {

        if (!(document.getElementById("slot2").textContent == "")) {

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_ONE_CNT,
                document.getElementById("slot1").getAttribute("fill"));

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_TWO_CNT,
                "white");

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            tempCounter++;

        } else {

            tempCounter--;
            runThrough();
            setupLegend();

        }

    } else if (tempCounter == 3) {

        if (!(document.getElementById("slot3").textContent == "")) {

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_ONE_CNT,
                document.getElementById("slot1").getAttribute("fill"));

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_TWO_CNT,
                "white");

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_THREE_CNT,
                "white");

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            INST_THREE_CNT++;
            tempCounter++;

        } else {

            tempCounter--;
            runThrough();
            setupLegend();

        }

    } else if (tempCounter == 4) {

        if (!(document.getElementById("slot5").textContent == "")) {

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_ONE_CNT,
                document.getElementById("slot1").getAttribute("fill"));

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_TWO_CNT,
                "white");

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_THREE_CNT,
                "white");

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_FOUR_CNT,
                "white");

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            INST_THREE_CNT++;
            INST_FOUR_CNT++;
            tempCounter++;

        } else {

            tempCounter--;
            setupLegend();
            runThrough();

        }

    } else if (tempCounter == 5) {

        INST_ONE_CNT++;
        INST_TWO_CNT++;
        INST_THREE_CNT++;
        INST_FOUR_CNT++;
        INST_FIVE_CNT++;

        INST_ONE_CNT = INST_TWO_CNT;
        INST_TWO_CNT = INST_THREE_CNT;
        INST_THREE_CNT = INST_FOUR_CNT;
        INST_FOUR_CNT = INST_FIVE_CNT;
        INST_FIVE_CNT = 0;

        if (!isFirst) {

            setupLegend();

        }

        if (document.getElementById("slot2").textContent == "") {

            document.getElementById("slot1").setAttribute("fill", "white");
            document.getElementById("slot2").setAttribute("fill", "white");
            document.getElementById("slot3").setAttribute("fill", "white");
            document.getElementById("slot4").setAttribute("fill", "white");
            document.getElementById("slot5").setAttribute("fill", "white");

        } else if (document.getElementById("slot3").textContent == "") {

            document.getElementById("slot2").setAttribute("fill", "white");
            document.getElementById("slot3").setAttribute("fill", "white");
            document.getElementById("slot4").setAttribute("fill", "white");
            document.getElementById("slot5").setAttribute("fill", "white");

        } else if (document.getElementById("slot4").textContent == "") {

            document.getElementById("slot3").setAttribute("fill", "white");
            document.getElementById("slot4").setAttribute("fill", "white");
            document.getElementById("slot5").setAttribute("fill", "white");

        } else if (document.getElementById("slot5").textContent == "") {

            document.getElementById("slot4").setAttribute("fill", "white");
            document.getElementById("slot5").setAttribute("fill", "white");

        } else if (document.getElementById("slot6").textContent == "") {

            document.getElementById("slot5").setAttribute("fill", "white");

        }

        instType(document.getElementById("slot1").getAttribute("inst"),
            INST_ONE_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        instType(document.getElementById("slot2").getAttribute("inst"),
            INST_TWO_CNT,
            document.getElementById("slot2").getAttribute("fill"));

        instType(document.getElementById("slot3").getAttribute("inst"),
            INST_THREE_CNT,
            document.getElementById("slot3").getAttribute("fill"));

        instType(document.getElementById("slot4").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot4").getAttribute("fill"));

        instType(document.getElementById("slot5").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot5").getAttribute("fill"));

        isFirst = false;

    }
}

/**
 * This function checks what type the instruction is and calls the correct path
 *  for that instruction.
 *
 * @param inst - instruction from the legend.
 * @param stage - the stage the instruction is in.
 * @param color - the color to change the objects and lines too.
 */
function instType(inst, stage, color) {

    console.log("instruction is " + inst);
    console.log("instruction counter is " + instructionCounter);
    console.log("instruction number is " + currentNumInstruction);
    console.log("instruction count is " + stage);
    console.log("color is " + color);

    if (inst == ("add")  || inst == ("addu")  ||
        inst == ("and")  || inst == ("div")   ||
        inst == ("divu") || inst == ("jr")    ||
        inst == ("mfcZ") || inst == ("mfhi")  ||
        inst == ("mflo") || inst == ("mtcZ")  ||
        inst == ("mult") || inst == ("multu") ||
        inst == ("nor")  || inst == ("or")    ||
        inst == ("sll")  || inst == ("sllv")  ||
        inst == ("slt")  || inst == ("sltu")  ||
        inst == ("sra")  || inst == ("srav")  ||
        inst == ("srl")  || inst == ("srlv")  ||
        inst == ("sub")  || inst == ("subu")  ||
        inst == ("xor")) {
        console.log("calling r type");
        stepThroughRType(stage, color);

    } else if (inst == ("addi") || inst == ("addiu") ||
               inst == ("andi") || inst == ("beq")   ||
               inst == ("bne")  || inst == ("lb")    ||
               inst == ("lbu")  || inst == ("lh")    ||
               inst == ("lhu")  || inst == ("lui")   ||
               inst == ("lw")   || inst == ("ori")   ||
               inst == ("sb")   || inst == ("sh")    ||
               inst == ("slti") || inst == ("sltiu") ||
               inst == ("sw")   || inst == ("xori")) {
        console.log("calling I type");
        stepThroughIType(stage, color, inst);

    } else if (inst == ("j") || inst == ("jal")) {

        stepThroughJType(stage, color);

    } else if (inst == ("b")    || inst == ("bal")   ||
               inst == ("beqz") || inst == ("bge")   ||
               inst == ("bgt")  || inst == ("bgtu")  ||
               inst == ("bgtz") || inst == ("ble")   ||
               inst == ("blt")  || inst == ("clear") ||
               inst == ("pdiv") || inst == ("la")    ||
               inst == ("li")   || inst == ("move")  ||
               inst == ("mul")  || inst == ("not")   ||
               inst == ("rem")  || inst == ("subi")) {

        stepThroughPseudoInstruction(stage, color);

    } else if (inst == ("break")    || inst == ("noop") ||
               inst == ("syscall")) {

        stepThroughOtherInstruction(inst, stage, color);

    }

}

/**
 * This function receives the contents of the file from the upload feature and
 *  sets up the name of the project along with the legend so that the
 *  instruction list is displayed on the page.
 *
 * @param event - the event of the file contents being sent to the diagram page.
 */
function receiveMessage(event) {

    fileName = ab2str(event.data[0]);
    //console.log(fileName);
    fileContents = ab2str(event.data[1]);
    //console.log(fileContents);
    //console.log("message received\n" + fileContents);
    setName();
    setupLegend();

}

/**
 * This function converts an ArrayBuffer object into a string.
 *
 * @param buf - ArrayBuffer object.
 * @returns (string) string representation of the ArrayBuffer parameter.
 */
function ab2str(buf) {

    return String.fromCharCode.apply(null, new Uint16Array(buf));

}

/**
 * This function gets the name from the file and displays it in the
 *  "Program Name: " area on the page.
 */
function setName() {

    document.getElementById("prog").innerHTML = fileName;

}

/**
 * This function makes the diagram play through the program for the user.
 */
function play() {

    if(!(document.getElementById("slot1").textContent == " ")) {

        if (playCounter == 0) {

            var time = prompt("Please enter a speed for the diagram", "");

            if (time != null) {

                intervalColor = window.setInterval(function () {
                    runThrough()
                }, time * 1000);

            } else {

                play();

            }

            playCounter = 1;

        } else if (playCounter == 1) {

            window.clearInterval(intervalColor);
            playCounter = 0;

        }

    } else {

        window.clearInterval(intervalColor);

    }

}

/**
 * This function allows the user to input a line number that they wish to jump
 *  to, the legend/diagram go to that location in the code, and start from the
 *  specified line. Up to four previous instructions will be displayed and
 *  pre-highlighted in the diagram.
 */
function skipTo() {

    // goes to specified line in code

}

/**
 * This function reverts the diagram back one step in the code.
 */
/*function stepBack() {

    if (currentNumInstruction != 0) {

        currentNumInstruction--;

        if (instructionCounter > 11) {

            instructionCounter--;

        }

    }

    if (currentNumInstruction < 5 && counter != 0) {

        counter--;

    }

    if (counter == 5) {

        var previousInstruction = instructionArray[currentNumInstruction - 5];
        var inst = instructionArray[currentNumInstruction - 5].split(" ")[0];

        instType(inst, INST_ONE_CNT, nextColor);

        nextColor = backLegend(previousInstruction, inst, nextColor);

        instType(document.getElementById("slot2").getAttribute("inst"),
            INST_TWO_CNT,
            document.getElementById("slot2").getAttribute("fill"));

        instType(document.getElementById("slot3").getAttribute("inst"),
            INST_THREE_CNT,
            document.getElementById("slot3").getAttribute("fill"));

        instType(document.getElementById("slot4").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot4").getAttribute("fill"));

        instType(document.getElementById("slot5").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot5").getAttribute("fill"));

    } else if (counter == 4) {

        // clear the 5th stage diagram objects
        clearStageFive();
        INST_ONE_CNT = 0;
        isFirst = true;

        instType(document.getElementById("slot1").getAttribute("inst"),
            INST_TWO_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        instType(document.getElementById("slot2").getAttribute("inst"),
            INST_THREE_CNT,
            document.getElementById("slot2").getAttribute("fill"));

        instType(document.getElementById("slot3").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot3").getAttribute("fill"));

        instType(document.getElementById("slot4").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot4").getAttribute("fill"));

    } else if (counter == 3) {

        // clear the 4th stage diagram objects
        clearStageFour();
        INST_TWO_CNT = 0;

        instType(document.getElementById("slot1").getAttribute("inst"),
            INST_THREE_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        instType(document.getElementById("slot2").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot2").getAttribute("fill"));

        instType(document.getElementById("slot3").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot3").getAttribute("fill"));

    } else if (counter == 2) {

        // clear the 3rd stage diagram objects
        clearStageThree();
        INST_THREE_CNT = 0;

        instType(document.getElementById("slot1").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        instType(document.getElementById("slot2").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot2").getAttribute("fill"));

    } else if (counter == 1) {

        // clear the 2nd stage diagram objects
        clearStageTwo();
        INST_FOUR_CNT = 0;

        instType(document.getElementById("slot1").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot1").getAttribute("fill"));

    } else if (counter == 0) {

        // clear the 1st stage diagram objects
        clearStageOne();
        INST_FIVE_CNT = 0;

    }

    console.log("counter: " + counter);
    console.log("instructionCounter: " + instructionCounter);
    console.log("currentNumInstructions: " + currentNumInstruction);
    console.log("INST_ONE_CNT: " + INST_ONE_CNT);
    console.log("INST_TWO_CNT: " + INST_TWO_CNT);
    console.log("INST_THREE_CNT: " + INST_THREE_CNT);
    console.log("INST_FOUR_CNT: " + INST_FOUR_CNT);
    console.log("INST_FIVE_CNT: " + INST_FIVE_CNT);

}*/

/**
 * This function launches a popup window that allows the user to
 *  upload a file.
 */
function uploadNew() {

    if (window.confirm("Are you sure you want to leave this page?\n\n" +
        "Any progress will be lost.") == true) {

        // brings up the upload file prompt
        var upload = window.open('./Upload.html', 'Upload File',
                             'height=300,width=400,left=450,top=200');

		// ***NOT FINISHED***
		// clear the diagram colors and data
		//upload.onunload = clearDiagram();

    }

}

// Allows the page to receive information about the file that the user uploads.
window.addEventListener("message", receiveMessage, false);

// Allows the user to use keys on the keyboard to control the diagram:
//   SPACE BAR   - Play/Pause
//   LEFT ARROW  - Back
//   RIGHT ARROW - Step
window.addEventListener('keyup', function(event) {

    // Checks if space bar
    if (event.keyCode == 32) {

        play();

    }

    // Checks if left key
    if (event.keyCode == 37) {

        stepBack();

    }

    // Checks if up key
    /*if (event.keyCode == 38) {

     this.moveUp();

     }*/

    // Checks if right key
    if (event.keyCode == 39) {

        runThrough();

    }

    // Checks if down key
    /*if (event.keyCode == 40) {

     this.moveDown();

     }*/

});
