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
//var parseCounter = 0;

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

/**
 * The array of colors for the diagram.
 *
 * 0 = black (black)
 * 1 = red (firebrick)
 * 2 = orange (peru)
 * 3 = yellow/gold (darkgoldenrod)
 * 4 = green (mediumseagreen)
 * 5 = blue (darkcyan)
 * 6 = purple (darkorchid)
 */
var colors = ["black", "firebrick", "peru", "darkgoldenrod", "mediumseagreen",
    "darkcyan", "darkorchid"];

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

/**
 * An array that
 */
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
 * This function parses through the given file contents and creates an array of
 *  instructions.
 */
function parseFile() {

    // Code for parsing file.
    //  We plan to use the built in string methods of html5 to find the
    //  individual instructions and pull that whole line out.
    var returnInstructions = fileContents.split("\n");
    var legendArray = [""];
    var parseCounter = 0;

    for (var i = 0; i < returnInstructions.length; i++) {

        returnInstructions[i] = returnInstructions[i].trim();

        if (i < 5) {
            console.log("\""+returnInstructions[i]+"\"");
        }

        if (returnInstructions[i].indexOf("$") != -1 &&
            returnInstructions[i].substring(0, 1) != "" &&
            returnInstructions[i].substring(0, 1) != "#" &&
            returnInstructions[i].substring(0, 6) != "syscall") {

            var pieces = returnInstructions[i].split(" ");
            var type = instType(pieces[0]);

            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!" + pieces[0] + "!!!!!!!!!!!!!!!!!!!!!!");
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!" + type + "!!!!!!!!!!!!!!!!!!!!!!");

            if (type == "r" || type == "i") {

                legendArray[parseCounter] = returnInstructions[i];
                parseCounter++;

            }

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

function validate() {
    console.log("CALLING VALIDATE");
    if (document.getElementById('checkLine').checked) {
        document.getElementById('line63').style.visibility = "visible";
        document.getElementById('line64').style.visibility = "visible";
        document.getElementById('line64a').style.visibility = "visible";
        document.getElementById('line65').style.visibility = "visible";
        document.getElementById('line65a').style.visibility = "visible";
        document.getElementById('line66').style.visibility = "visible";
        document.getElementById('line66a').style.visibility = "visible";
        document.getElementById('line67').style.visibility = "visible";
        document.getElementById('line68').style.visibility = "visible";
        document.getElementById('line69').style.visibility = "visible";
        document.getElementById('line70').style.visibility = "visible";
    } else {
        document.getElementById('line63').style.visibility = "hidden";
        document.getElementById('line64').style.visibility = "hidden";
        document.getElementById('line64a').style.visibility = "hidden";
        document.getElementById('line65').style.visibility = "hidden";
        document.getElementById('line65a').style.visibility = "hidden";
        document.getElementById('line66').style.visibility = "hidden";
        document.getElementById('line66a').style.visibility = "hidden";
        document.getElementById('line67').style.visibility = "hidden";
        document.getElementById('line68').style.visibility = "hidden";
        document.getElementById('line69').style.visibility = "hidden";
        document.getElementById('line70').style.visibility = "hidden";
    }
}

/**
 * This function is ran when the step button is clicked and calls the runInst
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

    if (isHazard()) {

        console.log(isHazard());
        // blah

    }

}


/**
 * This function calls the runInst function to determine the instruction type
 *  and the path that needs to be colored in the diagram.
 *
 * @param numSlots - the number of instructions currently displayed in the
 *  diagram.
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

        console.log(document.getElementById("slot" + i).getAttribute("fill"));
        runInst(document.getElementById("slot" + i).getAttribute("inst"),
            cnt,
            document.getElementById("slot" + i).getAttribute("fill"));

    }

}

/**
 * This function
 *
 * @param tempCounter
 */
function stallRunThrough(tempCounter) {

    if (tempCounter == 1) {

        runInst(document.getElementById("slot1").getAttribute("inst"),
            INST_ONE_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        INST_ONE_CNT++;
        tempCounter++;

    } else if (tempCounter == 2) {

        if (!(document.getElementById("slot2").textContent == "")) {

            runInst(document.getElementById("slot1").getAttribute("inst"),
                INST_ONE_CNT,
                document.getElementById("slot1").getAttribute("fill"));

            runInst(document.getElementById("slot1").getAttribute("inst"),
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

            runInst(document.getElementById("slot1").getAttribute("inst"),
                INST_ONE_CNT,
                document.getElementById("slot1").getAttribute("fill"));

            runInst(document.getElementById("slot1").getAttribute("inst"),
                INST_TWO_CNT,
                "white");

            runInst(document.getElementById("slot1").getAttribute("inst"),
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

            runInst(document.getElementById("slot1").getAttribute("inst"),
                INST_ONE_CNT,
                document.getElementById("slot1").getAttribute("fill"));

            runInst(document.getElementById("slot1").getAttribute("inst"),
                INST_TWO_CNT,
                "white");

            runInst(document.getElementById("slot1").getAttribute("inst"),
                INST_THREE_CNT,
                "white");

            runInst(document.getElementById("slot1").getAttribute("inst"),
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

        runInst(document.getElementById("slot1").getAttribute("inst"),
            INST_ONE_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        runInst(document.getElementById("slot2").getAttribute("inst"),
            INST_TWO_CNT,
            document.getElementById("slot2").getAttribute("fill"));

        runInst(document.getElementById("slot3").getAttribute("inst"),
            INST_THREE_CNT,
            document.getElementById("slot3").getAttribute("fill"));

        runInst(document.getElementById("slot4").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot4").getAttribute("fill"));

        runInst(document.getElementById("slot5").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot5").getAttribute("fill"));

        isFirst = false;

    }
}

/**
 * This function calls the correct path for the given instruction, once the
 *  instruction type is determined.
 *
 * @param inst - instruction from the legend.
 * @param stage - the stage the instruction is in.
 * @param color - the color to change the objects and lines too.
 */
function runInst(inst, stage, color) {

    // Determines the instruction type.
    var type = instType(inst);

    // Colors the first 5 instructions, one at a time, as they enter the
    //  diagram.
    console.log("counter is " + counter);
    console.log("is color black? " + color);
    if (color == "black" && counter <= 5) {

        color = colors[counter];
        document.getElementById("slot" + counter).setAttribute("fill", color);
        document.getElementById("slot" + counter).setAttribute("font-weight", "bold");

    }

    console.log("instruction is " + inst);
    console.log("instruction type is " + type);
    console.log("instruction counter is " + instructionCounter);
    console.log("instruction number is " + currentNumInstruction);
    console.log("instruction is in stage " + stage);
    console.log("color is " + color);

    if (type == "r") {
        console.log("calling r type");
        stepThroughRType(stage, color);

    } else if (type == "i") {
        console.log("calling I type");
        stepThroughIType(stage, color, inst);

    } else if (type == "j") {

        stepThroughJType(stage, color);

    } else if (type == "p") {

        stepThroughPseudoInstruction(stage, color);

    } else if (type == "o") {

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

            // need to check if time is a number
            if (time != null && !isNaN(time)) {

                if (time > 0) {

                    intervalColor = window.setInterval(function () {
                        runThrough()
                    }, time * 1000);

                } else {

                    alert("Please input a number greater than 0.");

                }

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

    var instNum = prompt("Please enter the number of the instruction you want" +
                         " to skip to:", "");

    console.log(!isNaN(instNum));
    console.log(0 <= instNum < (instructionArray.length - 11));
    console.log(instructionArray.length - 11);
    // need to check if instNum is a number
    if (!isNaN(instNum) && (0 <= instNum < (instructionArray.length - 11))) {

        INST_ONE_CNT = 0;
        INST_TWO_CNT = 0;
        INST_THREE_CNT = 0;
        INST_FOUR_CNT = 0;
        INST_FIVE_CNT = 0;

        Inst1 = [""];
        Inst2 = [""];
        Inst3 = [""];
        Inst4 = [""];
        Inst5 = [""];

        currentNumInstruction = 0;
        instructionCounter = 0;
        regCounter = 0;
        counter = 1;
        nextColor = "darkorchid";
        isFirst = true;

        console.log("clearing!!!!!!!!!!!!!!!!")
        clearAllColor();

        setupLegend();

        for (var i = 0; i < instNum; i++) {

            runThrough();

        }

    }

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

        runInst(inst, INST_ONE_CNT, nextColor);

        nextColor = backLegend(previousInstruction, inst, nextColor);

        runInst(document.getElementById("slot2").getAttribute("inst"),
            INST_TWO_CNT,
            document.getElementById("slot2").getAttribute("fill"));

        runInst(document.getElementById("slot3").getAttribute("inst"),
            INST_THREE_CNT,
            document.getElementById("slot3").getAttribute("fill"));

        runInst(document.getElementById("slot4").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot4").getAttribute("fill"));

        runInst(document.getElementById("slot5").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot5").getAttribute("fill"));

    } else if (counter == 4) {

        // clear the 5th stage diagram objects
        clearStageFive();
        INST_ONE_CNT = 0;
        isFirst = true;

        runInst(document.getElementById("slot1").getAttribute("inst"),
            INST_TWO_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        runInst(document.getElementById("slot2").getAttribute("inst"),
            INST_THREE_CNT,
            document.getElementById("slot2").getAttribute("fill"));

        runInst(document.getElementById("slot3").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot3").getAttribute("fill"));

        runInst(document.getElementById("slot4").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot4").getAttribute("fill"));

    } else if (counter == 3) {

        // clear the 4th stage diagram objects
        clearStageFour();
        INST_TWO_CNT = 0;

        runInst(document.getElementById("slot1").getAttribute("inst"),
            INST_THREE_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        runInst(document.getElementById("slot2").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot2").getAttribute("fill"));

        runInst(document.getElementById("slot3").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot3").getAttribute("fill"));

    } else if (counter == 2) {

        // clear the 3rd stage diagram objects
        clearStageThree();
        INST_THREE_CNT = 0;

        runInst(document.getElementById("slot1").getAttribute("inst"),
            INST_FOUR_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        runInst(document.getElementById("slot2").getAttribute("inst"),
            INST_FIVE_CNT,
            document.getElementById("slot2").getAttribute("fill"));

    } else if (counter == 1) {

        // clear the 2nd stage diagram objects
        clearStageTwo();
        INST_FOUR_CNT = 0;

        runInst(document.getElementById("slot1").getAttribute("inst"),
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

    }

}

/**
 * This function checks for hazards
 */
function isHazard() {

    console.log("IS HAZARD?!?!?!?!?!?!?!?!?!?!?!?!?!?");

    var isHazard = false;

    console.log("counter > 3: " + (counter > 3));
    console.log("slot4 != \" \": " + !(document.getElementById("slot4").textContent == " "));
    console.log("slot3 == lw: " + (document.getElementById("slot3").getAttribute("inst") == "lw"));

    if (counter > 3 && !(document.getElementById("slot4").textContent == "") &&
        document.getElementById("slot3").getAttribute("inst") == "lw") {

        if ((Inst3[0] == Inst4[1]) || (Inst3[0] == Inst4[2])) {

            isHazard = true;

        }

    }

    console.log("IS HAZARD: " + isHazard);

    return isHazard;

}

/**
 * This function determines the type of the given instruction.
 *
 * @param inst - an instruction from the uploaded file.
 */
function instType(inst) {

    var type = "";

    if (inst == ("add")  || inst == ("addu") || inst == ("and")   ||
        inst == ("div")  || inst == ("divu") ||/*inst == ("jr")   ||*/
        inst == ("mfcZ") || inst == ("mfhi") || inst == ("mflo")  ||
        inst == ("mtcZ") || inst == ("mult") || inst == ("multu") ||
        inst == ("nor")  || inst == ("or")   || inst == ("sll")   ||
        inst == ("sllv") || inst == ("slt")  || inst == ("sltu")  ||
        inst == ("sra")  || inst == ("srav") || inst == ("srl")   ||
        inst == ("srlv") || inst == ("sub")  || inst == ("subu")  ||
        inst == ("xor")) {

        type = "r";

    } else if (inst == ("addi") || inst == ("addiu") || inst == ("andi")/*||
               inst == ("beq")  || inst == ("bne")*/ || inst == ("lb")    ||
               inst == ("lbu")  || inst == ("lh")    || inst == ("lhu")   ||
               inst == ("lui")  || inst == ("lw")    || inst == ("la")    ||
               inst == ("li")   || inst == ("ori")   || inst == ("sb")    ||
               inst == ("sh")   || inst == ("slti")  || inst == ("sltiu") ||
               inst == ("sw")   || inst == ("xori")) {

        type = "i";

    } else if (inst == ("j") || inst == ("jal")) {

        type = "j";

    } else if (inst == ("b")     || inst == ("bal")  || inst == ("beqz") ||
               inst == ("bge")   || inst == ("bgt")  || inst == ("bgtu") ||
               inst == ("bgtz")  || inst == ("ble")  || inst == ("blt")  ||
               inst == ("clear") || inst == ("pdiv") || inst == ("la")   ||
               inst == ("li")    || inst == ("move") || inst == ("mul")  ||
               inst == ("not")   || inst == ("rem")  || inst == ("subi")) {

        type = "p";

    } else if (inst == ("break") || inst == ("noop") || inst == ("syscall")) {

        type = "o";

    }

    return type;

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
    /*if (event.keyCode == 37) {

        stepBack();

    }*/

    // Checks if right key
    if (event.keyCode == 39) {

        runThrough();

    }

});
