/**
 * Created by Josh on 12/11/2014.
 */

/**
 * The array that holds the list of instructions from the file that is read in.
 */
var instructionArray = null;

/**
 * The counter that keeps track of what instruction is going to go on the legend next.
 */
var instructionCounter = 0;

/**
 * The counter for the registers that are being put into arrays for the first 5 instructions on the legend.
 */
var regCounter = 0;

/**
 * The number of instructions that are on the diagram at one time. anus
 */
var counter = 1;

/**
 * The counter used to parse through the given file and help construct the array of instructions
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
 * The buffer color to put on the diagram to keep the colors refreshing correctly.
 */
var nextColor = "blue";

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
 * Tells if this is the first time 5 instructions will be on the diagram at one time.
 */
var isFirst = true;
/**
 * The popup window that brings the user to upload a file once they visit the site.
 */
var popup = window.open('./Upload.html', 'Upload File', 'height=300,width=400,left=450,top=200');

// Gives the popup window focus.
popup.focus();

/**
 * This function that parsers through the given file contents and gets the array of instructions.
 */
function parseFile() {

    // Code for parsing file.
    //  We plan to use the built in string methods of html5 to find the
    //  individual instructions and pull that whole line i.
    var returnInstructions = fileContents.split("\n");
    var legendArray = [""];

    for (var i = 0; i < returnInstructions.length; i++) {
        if (returnInstructions.indexOf("$") != -1 || returnInstructions.indexOf(";") == -1
            && returnInstructions[i].substring(0, 1) != "#" &&
            returnInstructions[i].substring(0, 6) != "syscall") {

            legendArray[parseCounter] = returnInstructions[i];
            console.log("Instruction list is " + legendArray[parseCounter]);
            parseCounter++;

        }

    }
    legendArray[parseCounter + 1] = " ";
    legendArray[parseCounter + 2] = " ";
    legendArray[parseCounter + 3] = " ";
    legendArray[parseCounter + 4] = " ";
    legendArray[parseCounter + 5] = " ";


    return legendArray;
}

/**
 * This function is ran when the step button is clicked and calls the instType to update the diagram for
 * how many of instructions there are on the diagram.
 */
function runThrough() {

    if (counter == 1) {

        instType(document.getElementById("slot1").getAttribute("inst"),
            INST_ONE_CNT,
            document.getElementById("slot1").getAttribute("fill"));

        INST_ONE_CNT++;
        counter++;

    } else if (counter == 2) {

        if (!document.getElementById("slot2").textContent == "") {

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_ONE_CNT,
                document.getElementById("slot1").getAttribute("fill"));
            instType(document.getElementById("slot2").getAttribute("inst"),
                INST_TWO_CNT,
                document.getElementById("slot2").getAttribute("fill"));

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            counter++;

        } else {
            console.log("We are going back to 1 instructs");
            counter--;
            runThrough();
            setupLegend();

        }

    } else if (counter == 3) {

        if (!document.getElementById("slot3").textContent == "") {

            instType(document.getElementById("slot1").getAttribute("inst"),
                INST_ONE_CNT,
                document.getElementById("slot1").getAttribute("fill"));
            instType(document.getElementById("slot2").getAttribute("inst"),
                INST_TWO_CNT,
                document.getElementById("slot2").getAttribute("fill"));
            instType(document.getElementById("slot3").getAttribute("inst"),
                INST_THREE_CNT,
                document.getElementById("slot3").getAttribute("fill"));

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            INST_THREE_CNT++;
            counter++;

        } else {
            console.log("We are going back to 2 instructs");
            counter--;
            console.log("# OF COUNT   " + counter);
            runThrough();
            setupLegend();

        }

    } else if (counter == 4) {

        if (!document.getElementById("slot5").textContent == " ") {

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

                INST_ONE_CNT++;
                INST_TWO_CNT++;
                INST_THREE_CNT++;
                INST_FOUR_CNT++;
                counter++;

        } else {
            console.log("We are going back to 3 instructs");
            counter--;
            console.log("# OF COUNT   " + counter);
            //runThrough();
            setupLegend();
            runThrough();

        }

    } else if (counter == 5) {

            //if (!document.getElementById("slot5").textContent == " ") {

            INST_ONE_CNT++;
            INST_TWO_CNT++;
            INST_THREE_CNT++;
            INST_FOUR_CNT++;
            INST_FIVE_CNT++;
            //if (INST_ONE_CNT == 5) {

            INST_ONE_CNT = INST_TWO_CNT;
            INST_TWO_CNT = INST_THREE_CNT;
            INST_THREE_CNT = INST_FOUR_CNT;
            INST_FOUR_CNT = INST_FIVE_CNT;
            INST_FIVE_CNT = 0;
            if(!isFirst) {
                setupLegend();

            }
        if (document.getElementById("slot2").textContent == " ") {
            document.getElementById("slot1").setAttribute("fill", "white");
            document.getElementById("slot2").setAttribute("fill", "white");
            document.getElementById("slot3").setAttribute("fill", "white");
            document.getElementById("slot4").setAttribute("fill", "white");
            document.getElementById("slot5").setAttribute("fill", "white");
            console.log("CHANGING TO WHITE 1");
        }  else if (document.getElementById("slot3").textContent == " ") {
            document.getElementById("slot2").setAttribute("fill", "white");
            document.getElementById("slot3").setAttribute("fill", "white");
            document.getElementById("slot4").setAttribute("fill", "white");
            document.getElementById("slot5").setAttribute("fill", "white");
            console.log("CHANGING TO WHITE 2");
        } else if (document.getElementById("slot4").textContent == " ") {
            document.getElementById("slot3").setAttribute("fill", "white");
            document.getElementById("slot4").setAttribute("fill", "white");
            document.getElementById("slot5").setAttribute("fill", "white");
            console.log("CHANGING TO WHITE 3");
        }  else if (document.getElementById("slot5").textContent == " ") {
            document.getElementById("slot4").setAttribute("fill", "white");
            document.getElementById("slot5").setAttribute("fill", "white");
            console.log("CHANGING TO WHITE 4");
        } else if (document.getElementById("slot6").textContent == " ") {
            console.log("CHANGING TO WHITE 5");
            document.getElementById("slot5").setAttribute("fill", "white");

        }
       /** if (document.getElementById("slot6").textContent == " ") {
            console.log("CHANGING TO WHITE");
            document.getElementById("slot5").setAttribute("fill", "white");

        } else if (document.getElementById("slot4").textContent == " ") {
            document.getElementById("slot4").setAttribute("fill", "white");

        } else if (document.getElementById("slot3").textContent == " ") {
            document.getElementById("slot3").setAttribute("fill", "white");

        } else if (document.getElementById("slot2").textContent == " ") {
            document.getElementById("slot2").setAttribute("fill", "white");
            document.getElementById("slot1").setAttribute("fill", "white");

        } else if (document.getElementById("slot1").textContent == " ") {
            document.getElementById("slot1").setAttribute("fill", "white");

        }*/
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
            //setupLegend();
            isFirst = false;
            console.log("IN THE FIRST IF STATMEENT WITH 5 INTRUCTS");
            /**if (document.getElementById("slot5").textContent == " ") {
                console.log("CHANGING TO WHITE");
                document.getElementById("slot5").setAttribute("fill", "white");

            } else if (document.getElementById("slot4").textContent == " ") {
                document.getElementById("slot4").setAttribute("fill", "white");

            } else if (document.getElementById("slot3").textContent == " ") {
                document.getElementById("slot3").setAttribute("fill", "white");

            } else if (document.getElementById("slot2").textContent == " ") {
                document.getElementById("slot2").setAttribute("fill", "white");

            } else if (document.getElementById("slot1").textContent == " ") {
                document.getElementById("slot1").setAttribute("fill", "white");

            }*/
     /**   } else {
            console.log("We are going back to 4 instructs");
            console.log("inst ciount   " + INST_ONE_CNT);
            counter--;
            console.log("# OF COUNT   " + counter);
            runThrough();
            //setupLegend();
        }
*/          if(document.getElementById("slot1").getAttribute("fill") == "white") {
                console.log("TRYING TO CLEAR THE LAST FUCKING THING OFF HTE LIST");
                stepThroughRType(5,"White");
            }
    }

}

/**
 * This function checks what type the instruction is and calls the correct path for that instruction.
 *
 * @param instruction - instruction from the legend.
 * @param instCnt - the stage the instruction is on.
 * @param color - the color to change the objects and lines too.
 */
function instType(instruction, instCnt, color) {

    if (instruction == ("add") || instruction == ("and") || instruction == ("nor") || instruction == ("or") ||
        instruction == ("sub") || instruction == ("div") || instruction == ("mult")) {

        stepThroughRType(instCnt, color);

    } else if (instruction == ("lw") || instruction == ("sw") ||
        instruction == ("addi") || instruction == ("beq") ||
        instruction == ("bne") || instruction == ("lb")) {

        stepThroughIType(instCnt, color);

    } else if (instruction == ("jump") || instruction == ("jal")) {

        //stepThroughJType(instCnt, color);

    }

}

/**
 * This function receives the contents of the file from the upload feature and sets up the name of the project
 * along with the legend so that the instruction list is displayed on the page.
 *
 * @param event - the event of the file contents being sent to the diagram page.
 */
function receiveMessage(event) {

    fileName = ab2str(event.data[0]);
    console.log(fileName);
    fileContents = ab2str(event.data[1]);
    console.log(fileContents);
    console.log("message received\n" + fileContents);
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

    if (playCounter == 0) {

        intervalColor = window.setInterval(function () {
            runThrough()
        }, 2000);
        playCounter = 1;
        console.log("IT IS IN THE PLAY FEATURE THINGY");
    } else if (playCounter == 1) {
        window.clearInterval(intervalColor);
        playCounter = 0;
    }
}

/**
 * This function reverts the diagram back one step in the code.
 */
function stepBack() {

    // goes back to the previous instruction

}

/**
 * This function launches a popup window that allows the user to
 *  upload a file.
 */
function uploadNew() {

    if (window.confirm("Are you sure you want to leave this page?\n\nAny progress will be lost.") == true) {

        // brings up the upload file prompt
        upload = window.open('./Upload.html', 'Upload File', 'height=300,width=400,left=450,top=200');
		
		// ***NOT FINISHED***
		// clear the diagram colors and data
		//upload.onunload = clearDiagram();
		
    }

}

window.addEventListener("message", receiveMessage, false);