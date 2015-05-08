/**
 * This file contains functions that are used to update and display
 *  component/register information, in the Tooltip Module.
 *
 * @author  Josh Kelly
 * @author  Trevor Griggs
 * @version 03/04/2015.
 */

/**
 * This method is used to clear the tooltip message that was displayed by a method that needs two lines to print its
 * message
 */
function toolTipClearForTwoLines() {

    // For Any lines having two lines of tooltips
    document.getElementById('line6pop1').style.visibility= "hidden";
    document.getElementById('line6pop2').style.visibility= "hidden";
}

/**
 * This method is used to clear the tooltip message that was displayed by a method that needs three lines to prints its
 * message.
 */
function toolTipClearForThreeLines() {

    // For Any lines having three lines of tooltips
    document.getElementById('line3pop1').style.visibility= "hidden";
    document.getElementById('line3pop2').style.visibility= "hidden";
    document.getElementById('line3pop3').style.visibility= "hidden";
}

/**
 * This method is used to clear the tooltip message that was displayed by a method that needs four lines to prints its
 * message.
 */
function toolTipClearForFourLines() {

    // For Any lines having four lines of tooltips
    document.getElementById('line4pop1').style.visibility= "hidden";
    document.getElementById('line4pop2').style.visibility= "hidden";
    document.getElementById('line4pop3').style.visibility= "hidden";
    document.getElementById('line4pop4').style.visibility= "hidden";
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line2ToolTipsMouseOver() {

    // This is for lines 2, 18, 15, 20, 8
    if(document.getElementById('line2').getAttribute("stroke") != "#000000" && document.getElementById('line2').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }
        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
            if(tempArray[3] == undefined) {
                document.getElementById('line3pop1').textContent = "Send the new program counter total in order to set";
                document.getElementById('line3pop2').textContent = "the count for the next instruction. Stage one, ";
                document.getElementById('line3pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2];
            } else {
                document.getElementById('line3pop1').textContent = "Send the new program counter total in order to set";
                document.getElementById('line3pop2').textContent = "the count for the next instruction. Stage one, ";
                document.getElementById('line3pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
            }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line3ToolTipsMouseOver() {

    // For line 3
    if(document.getElementById('line3').getAttribute("stroke") != "#000000" && document.getElementById('line3').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line3').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line3').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line3').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line3').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line3').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if(tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "Sends the new program counter value back to the ";
            document.getElementById('line3pop2').textContent = "program counter and sets the new value.";
            document.getElementById('line3pop3').textContent = "Stage one. Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2];
        } else {
            document.getElementById('line3pop1').textContent = "Sends the new program counter value back to the ";
            document.getElementById('line3pop2').textContent = "program counter and sets the new value.";
            document.getElementById('line3pop3').textContent = "Stage one. Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
        }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line4ToolTipsMouseOver() {

    // For lines 4, 19, 7
    if(document.getElementById('line4').getAttribute("stroke") != "#000000" && document.getElementById('line4').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line4').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line4').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line4').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line4').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line4').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if(tempArray[3] == undefined) {
            document.getElementById('line4pop1').textContent = "Send the program counter to the add alu to get four";
            document.getElementById('line4pop2').textContent = "added to it for the next instruction. Stage one,";
            document.getElementById('line4pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2];
            document.getElementById('line4pop4').textContent = "Also sends the instruction in Instruction Memory.";
        } else {
            document.getElementById('line4pop1').textContent = "Send the program counter to the add alu to get four";
            document.getElementById('line4pop2').textContent = "added to it for the next instruction. Stage one,";
            document.getElementById('line4pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
            document.getElementById('line4pop4').textContent = "Also sends the instruction in Instruction Memory.";
        }
        document.getElementById('line4pop1').style.visibility = "visible";
        document.getElementById('line4pop2').style.visibility = "visible";
        document.getElementById('line4pop3').style.visibility = "visible";
        document.getElementById('line4pop4').style.visibility = "visible";
    } else {
        toolTipClearForFourLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line5ToolTipsMouseOver() {

    // For line 5
    if(document.getElementById('line5').getAttribute("stroke") != "#000000" && document.getElementById('line5').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line5').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line5').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line5').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line5').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line5').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if(tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "Sending the instruction to Instruction memory to be";
            document.getElementById('line3pop2').textContent = "stored. Stage one";
            document.getElementById('line3pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2];
        } else {
            document.getElementById('line3pop1').textContent = "Sending the instruction to Instruction memory to be";
            document.getElementById('line3pop2').textContent = "stored. Stage one";
            document.getElementById('line3pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
        }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line6ToolTipsMouseOver() {

    // For line 6
    if(document.getElementById('line6').getAttribute("stroke") != "#000000" && document.getElementById('line6').getAttribute("stroke") != "slategrey") {
        document.getElementById('line6pop1').textContent = "Sending the value of four to be added to the";
        document.getElementById('line6pop2').textContent = "program counter to move it to the next instruction.";
        document.getElementById('line6pop1').style.visibility = "visible";
        document.getElementById('line6pop2').style.visibility = "visible";
    } else {
        toolTipClearForTwoLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line22ToolTipsMouseOver() {

    // For line 22
    if(document.getElementById('line22').getAttribute("stroke") != "#000000" && document.getElementById('line22').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line22').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line22').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line22').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line22').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line22').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if(tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "Storing the instruction into the buffer so it may be";
            document.getElementById('line3pop2').textContent = "passed into the next stage. Stage one.";
            document.getElementById('line3pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2];
        } else {
            document.getElementById('line3pop1').textContent = "Storing the instruction into the buffer so it may be";
            document.getElementById('line3pop2').textContent = "passed into the next stage. Stage one.";
            document.getElementById('line3pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
        }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line23ToolTipsMouseOver() {

    // For line 23
    if(document.getElementById('line23').getAttribute("stroke") != "#000000" && document.getElementById('line23').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line23').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line23').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line23').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line23').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line23').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if(tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "Sending the registers out of the buffer so they can";
            document.getElementById('line3pop2').textContent = "be distributed into the correct places. Stage one.";
            document.getElementById('line3pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2];
        } else {
            document.getElementById('line3pop1').textContent = "Sending the registers out of the buffer so they can";
            document.getElementById('line3pop2').textContent = "be distributed into the correct places. Stage one.";
            document.getElementById('line3pop3').textContent = "Instruction is " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
        }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line50ToolTipsMouseOver() {

    // For line 50, 49
    if (document.getElementById('line50').getAttribute("stroke") != "#000000" && document.getElementById('line50').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line50').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {

            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line50').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {

            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line50').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {

            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line50').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {

            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line50').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {

            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {

            loadArray = tempArray[2];

            //This whole if statement is used to strip offset amount.
            if(loadArray.indexOf("(") != -1) {

                loadTemp = loadArray.split("");
                tempValue = "";
                allValue = "";
                i = 0;
                while (loadTemp[i] != '(') {
                    tempValue = tempValue + "" + loadTemp[i];
                    i++;
                }
                while (i < loadTemp.length) {
                    allValue = allValue + "" + loadTemp[i];
                    i++;
                }
            } else {

                allValue = tempArray[2];
            }
                document.getElementById('line3pop1').textContent = "Sending registers that are designated to be read";
                document.getElementById('line3pop2').textContent = "to the correct places with RS on top and RT on the ";
                document.getElementById('line3pop3').textContent = "bottom. Stage two." + "RT: " + tempArray[1] + " RS: " + allValue;
            } else {

                //This check is for I type instructions that have 2 registers and an intermediate value
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length - 1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending registers that are designated to be read";
                    document.getElementById('line3pop2').textContent = "to the correct places with RS on top and RT on the ";
                    document.getElementById('line3pop3').textContent = "bottom. Stage two." + " RS: " + tempArray[2] + " RT: " + tempArray[1];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending registers that are designated to be read";
                    document.getElementById('line3pop2').textContent = "to the correct places with RS on top and RT on the ";
                    document.getElementById('line3pop3').textContent = "bottom. Stage two." + " RS: " + tempArray[2] + " RT: " + tempArray[3];
                }
            }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line51ToolTipsMouseOver() {

    // For line 51
    if(document.getElementById('line51').getAttribute("stroke") != "#000000" && document.getElementById('line51').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line51').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line51').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line51').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line51').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line51').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            loadArray = tempArray[2];

            //This whole if statement is used to strip offset amount.
            if(loadArray.indexOf("(") != -1) {
                loadTemp = loadArray.split("");
                tempValue = "";
                allValue = "";
                i = 0;
                while (loadTemp[i] != '(') {
                    tempValue = tempValue + "" + loadTemp[i];
                    i++;
                }
                while (i < loadTemp.length) {
                    allValue = allValue + "" + loadTemp[i];
                    i++;
                }
            } else {
                tempValue = tempArray[2];
            }
                document.getElementById('line3pop1').textContent = "Sending the offset amount to be sign extended or";
                document.getElementById('line3pop2').textContent = "the intermediate value to be sign extended from 16";
                document.getElementById('line3pop3').textContent = "to 32. Stage two." + "Offset: " + tempValue;
            } else {

            //This check is for I type instructions that have 2 registers and an intermediate value
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length-1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending the offset amount to be sign extended or";
                    document.getElementById('line3pop2').textContent = "the intermediate value to be sign extended from 16";
                    document.getElementById('line3pop3').textContent = "to 32. Stage two."  + " Intermediate value: " + tempArray[3];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending the offset amount to be sign extended or";
                    document.getElementById('line3pop2').textContent = "the intermediate value to be sign extended from 16";
                    document.getElementById('line3pop3').textContent = "to 32. Stage two."  + " Intermediate value: " + tempArray[3];
                }
            }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line28ToolTipsMouseOver() {

    // For line 28
    if(document.getElementById('line28').getAttribute("stroke") != "#000000" && document.getElementById('line28').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line28').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line28').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line28').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line28').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line28' +
            '').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            loadArray = tempArray[2];

            //This whole if statement is used to strip offset amount.
            if(loadArray.indexOf("(") != -1) {
                loadTemp = loadArray.split("");
                tempValue = "";
                allValue = "";
                i = 0;
                while (loadTemp[i] != '(') {
                    tempValue = tempValue + "" + loadTemp[i];
                    i++;
                }
                while (i < loadTemp.length) {
                    allValue = allValue + "" + loadTemp[i];
                    i++;
                }
            } else {
                tempValue = tempArray[2];
            }
            document.getElementById('line3pop1').textContent = "Sending the offset amount to be sign extended or";
            document.getElementById('line3pop2').textContent = "the intermediate value to be sign extended from 16";
            document.getElementById('line3pop3').textContent = "to 32. Stage two." + "Offset: " + tempValue;
        } else {
            loadArray = tempArray[0];
            loadTemp = loadArray.split("");
            tempValue = loadTemp[loadTemp.length-1];
            if (tempValue == 'i') {
                document.getElementById('line3pop1').textContent = "Sending the offset amount to be sign extended or";
                document.getElementById('line3pop2').textContent = "the intermediate value to be sign extended from 16";
                document.getElementById('line3pop3').textContent = "to 32. Stage two."  + " Intermediate value: " + tempArray[3];
            } else {
                document.getElementById('line3pop1').textContent = "Sending the offset amount to be sign extended or";
                document.getElementById('line3pop2').textContent = "the intermediate value to be sign extended from 16";
                document.getElementById('line3pop3').textContent = "to 32. Stage two."  + " Intermediate value: " + tempArray[3];
            }
        }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line24ToolTipsMouseOver() {

    // For line 24
    if (document.getElementById('line24').getAttribute("stroke") != "#000000" && document.getElementById('line24').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line24').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line24').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line24').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line24').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line24').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
            if (tempArray[3] == undefined) {
                loadArray = tempArray[2];

                //This whole if statement is used to strip offset amount.
                if(loadArray.indexOf("(") != -1) {
                    loadTemp = loadArray.split("");
                    tempValue = "";
                    allValue = "";
                    i = 0;
                    while (loadTemp[i] != '(') {
                        tempValue = tempValue + "" + loadTemp[i];
                        i++;
                    }
                    while (i < loadTemp.length) {
                        allValue = allValue + "" + loadTemp[i];
                        i++;
                    }
                } else {
                    allValue = tempArray[2];
                }
                document.getElementById('line3pop1').textContent = "Sending register that is designated to be read";
                document.getElementById('line3pop2').textContent = "to the correct place with RS";
                document.getElementById('line3pop3').textContent = "Stage two." + " RS: " + allValue;
            } else {

                //This check is for I type instructions that have 2 registers and an intermediate value
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length - 1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending register that is designated to be read";
                    document.getElementById('line3pop2').textContent = "to the correct place with RS";
                    document.getElementById('line3pop3').textContent = "Stage two." + " RS: " + tempArray[2];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending register that is designated to be read";
                    document.getElementById('line3pop2').textContent = "to the correct place with RS";
                    document.getElementById('line3pop3').textContent = "Stage two." + " RS: " + tempArray[2];
                }
            }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line25ToolTipsMouseOver() {

    // For line 25
    if (document.getElementById('line25').getAttribute("stroke") != "#000000" && document.getElementById('line25').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line25').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line25').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line25').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line25').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line25').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
            if (tempArray[3] == undefined) {

                document.getElementById('line3pop1').textContent = "Sending register that is designated to be read";
                document.getElementById('line3pop2').textContent = "to the correct place with RT";
                document.getElementById('line3pop3').textContent = "Stage two." + " RT: " + tempArray[1];
            } else {

                //This whole if statement is used to strip offset amount.
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length - 1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending register that is designated to be read";
                    document.getElementById('line3pop2').textContent = "to the correct place with RT";
                    document.getElementById('line3pop3').textContent = "Stage two." + " RT: " + tempArray[1];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending register that is designated to be read";
                    document.getElementById('line3pop2').textContent = "to the correct place with RT";
                    document.getElementById('line3pop3').textContent = "Stage two." + " RT: " + tempArray[3];
                }
            }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line32ToolTipsMouseOver() {

    // For line 32
    if (document.getElementById('line32').getAttribute("stroke") != "#000000" && document.getElementById('line32').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line32').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line32').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line32').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line32').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line32').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            loadArray = tempArray[2];

            //This whole if statement is used to strip offset amount.
            if(loadArray.indexOf("(") != -1) {
                loadTemp = loadArray.split("");
                tempValue = "";
                allValue = "";
                i = 0;
                while (loadTemp[i] != '(') {
                    tempValue = tempValue + "" + loadTemp[i];
                    i++;
                }
                while (i < loadTemp.length) {
                    allValue = allValue + "" + loadTemp[i];
                    i++;
                }
            } else {
                allValue = tempArray[2];
            }
                document.getElementById('line3pop1').textContent = "Sending out the data from the register that was";
                document.getElementById('line3pop2').textContent = "read into the correct place with RS";
                document.getElementById('line3pop3').textContent = "Stage two." + " RS: " + allValue;
            } else {

            //This check is for I type instructions that have 2 registers and an intermediate value
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length - 1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending out the data from the register that was";
                    document.getElementById('line3pop2').textContent = "read into the correct place with RS";
                    document.getElementById('line3pop3').textContent = "Stage two." + " RS: " + tempArray[2];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending out the data from the register that was";
                    document.getElementById('line3pop2').textContent = "read into the correct place with RS";
                    document.getElementById('line3pop3').textContent = "Stage two." + " RS: " + tempArray[2];
                }
            }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line33ToolTipsMouseOver() {

    // For line 33
    if (document.getElementById('line33').getAttribute("stroke") != "#000000" && document.getElementById('line33').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line33').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line33').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line33').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line33').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line33').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            loadArray = tempArray[2];

            //This whole if statement is used to strip offset amount.
            if(loadArray.indexOf("(") != -1) {
                loadTemp = loadArray.split("");
                tempValue = "";
                allValue = "";
                i = 0;
                while (loadTemp[i] != '(') {
                    tempValue = tempValue + "" + loadTemp[i];
                    i++;
                }
                while (i < loadTemp.length) {
                    allValue = allValue + "" + loadTemp[i];
                    i++;
                }
            } else {
                allValue = tempArray[2];
            }
                document.getElementById('line3pop1').textContent = "Sending out the data from RS to be placed into the ";
                document.getElementById('line3pop2').textContent = "ALU to perform whatever code has been sent to it.";
                document.getElementById('line3pop3').textContent = "Stage three." + " RS: " + allValue;
            } else {

            //This check is for I type instructions that have 2 registers and an intermediate value
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length - 1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending out the data from RS to be placed into the ";
                    document.getElementById('line3pop2').textContent = "ALU to perform whatever code has been sent to it.";
                    document.getElementById('line3pop3').textContent = "Stage three." + " RS: " + tempArray[2];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending out the data from RS to be placed into the ";
                    document.getElementById('line3pop2').textContent = "ALU to perform whatever code has been sent to it.";
                    document.getElementById('line3pop3').textContent = "Stage three." + " RS: " + tempArray[2];
                }
            }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line31ToolTipsMouseOver() {

    // For line 31
    if (document.getElementById('line31').getAttribute("stroke") != "#000000" && document.getElementById('line31').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line31').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line31').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line31').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line31').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line31').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
            if (tempArray[3] == undefined) {
                document.getElementById('line3pop1').textContent = "Sending out the data from the register that was";
                document.getElementById('line3pop2').textContent = "read into the correct place with RT";
                document.getElementById('line3pop3').textContent = "Stage two." + " RT: " + tempArray[1];
            } else {

                //This whole if statement is used to strip offset amount.
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length - 1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending out the data from the register that was";
                    document.getElementById('line3pop2').textContent = "read into the correct place with RT";
                    document.getElementById('line3pop3').textContent = "Stage two." + " RT: " + tempArray[1];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending out the data from the register that was";
                    document.getElementById('line3pop2').textContent = "read into the correct place with RT";
                    document.getElementById('line3pop3').textContent = "Stage two." + " RT: " + tempArray[3];
                }
            }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line34ToolTipsMouseOver() {

    // For line 34
    if (document.getElementById('line34').getAttribute("stroke") != "#000000" && document.getElementById('line34').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line35').getAttribute("stroke") != '#000000' && document.getElementById('line35').getAttribute("stroke") != "slategrey") {
            var loadArray;
            var loadTemp;
            var tempValue = "";
            var allValue = "";
            var i = 0;
            if (document.getElementById('line34').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
                tempArray = document.getElementById("slot1").textContent.split(" ");
            } else if (document.getElementById('line34').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
                tempArray = document.getElementById("slot2").textContent.split(" ");
            } else if (document.getElementById('line34').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
                tempArray = document.getElementById("slot3").textContent.split(" ");
            } else if (document.getElementById('line34').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
                tempArray = document.getElementById("slot4").textContent.split(" ");
            } else if (document.getElementById('line34').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
                tempArray = document.getElementById("slot5").textContent.split(" ");
            }

            //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
            if (tempArray[3] == undefined) {
                document.getElementById('line3pop1').textContent = "Sending out the data from RT to be placed into the ";
                document.getElementById('line3pop2').textContent = "mutex to see if it is needed in the ALU or the data";
                document.getElementById('line3pop3').textContent = "to be written to data. Stage three." + " RT: " + tempArray[1];
            } else {

                //This whole if statement is used to strip offset amount.
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length - 1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending out the data from RT to be placed into the ";
                    document.getElementById('line3pop2').textContent = "mutex to see if it is needed in the ALU";
                    document.getElementById('line3pop3').textContent = "Stage three." + " RT: " + tempArray[1];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending out the data from RT to be placed into the ";
                    document.getElementById('line3pop2').textContent = "mutex to see if it is needed in the ALU";
                    document.getElementById('line3pop3').textContent = "Stage three." + " RT: " + tempArray[3];
                }
            }

            document.getElementById('line3pop1').style.visibility = "visible";
            document.getElementById('line3pop2').style.visibility = "visible";
            document.getElementById('line3pop3').style.visibility = "visible";
        } else {
            line54ToolTipsMouseOver();
        }
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line35ToolTipsMouseOver() {

    // For line 35
    if (document.getElementById('line35').getAttribute("stroke") != "#000000" && document.getElementById('line35').getAttribute("stroke") != "slategrey") {
            var loadArray;
            var loadTemp;
            var tempValue = "";
            var allValue = "";
            var i = 0;
            if (document.getElementById('line35').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
                tempArray = document.getElementById("slot1").textContent.split(" ");
            } else if (document.getElementById('line35').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
                tempArray = document.getElementById("slot2").textContent.split(" ");
            } else if (document.getElementById('line35').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
                tempArray = document.getElementById("slot3").textContent.split(" ");
            } else if (document.getElementById('line35').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
                tempArray = document.getElementById("slot4").textContent.split(" ");
            } else if (document.getElementById('line35').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
                tempArray = document.getElementById("slot5").textContent.split(" ");
            }

            //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
            if (tempArray[3] == undefined) {
                document.getElementById('line3pop1').textContent = "Sending out the data from RT to be placed into the ";
                document.getElementById('line3pop2').textContent = "mutex to see if it is needed in the ALU or the data";
                document.getElementById('line3pop3').textContent = "to be written to data. Stage three." + " RT: " + tempArray[1];
            } else {

                //This check is for I type instructions that have 2 registers and an intermediate value
                loadArray = tempArray[0];
                loadTemp = loadArray.split("");
                tempValue = loadTemp[loadTemp.length - 1];
                if (tempValue == 'i') {
                    document.getElementById('line3pop1').textContent = "Sending out the data from RT to be placed into the ";
                    document.getElementById('line3pop2').textContent = "mutex to see if it is needed in the ALU";
                    document.getElementById('line3pop3').textContent = "Stage three." + " RT: " + tempArray[1];
                } else {
                    document.getElementById('line3pop1').textContent = "Sending out the data from RT to be placed into the ";
                    document.getElementById('line3pop2').textContent = "mutex to see if it is needed in the ALU";
                    document.getElementById('line3pop3').textContent = "Stage three." + " RT: " + tempArray[3];
                }
            }

            document.getElementById('line3pop1').style.visibility = "visible";
            document.getElementById('line3pop2').style.visibility = "visible";
            document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line37ToolTipsMouseOver() {

    // For line 37
    if (document.getElementById('line37').getAttribute("stroke") != "#000000" && document.getElementById('line37').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line37').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line37').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line37').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line37').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line37').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            loadArray = tempArray[2];

            //This whole if statement is used to strip offset amount.
            if(loadArray.indexOf("(") != -1) {
                loadTemp = loadArray.split("");
                tempValue = "";
                allValue = "";
                i = 0;
                while (loadTemp[i] != '(') {
                    tempValue = tempValue + "" + loadTemp[i];
                    i++;
                }
                while (i < loadTemp.length) {
                    allValue = allValue + "" + loadTemp[i];
                    i++;
                }
            } else {
                tempValue = tempArray[2];
            }
            document.getElementById('line3pop1').textContent = "Sending out the correct information to the ALU";
            document.getElementById('line3pop2').textContent = "which in this case is the 32 bit hex value";
            document.getElementById('line3pop3').textContent = "Stage three." + "IM or Offset: " + tempValue;
        } else {

        //This check is for I type instructions that have 2 registers and an intermediate value
            loadArray = tempArray[0];
            loadTemp = loadArray.split("");
            tempValue = loadTemp[loadTemp.length - 1];
            if (tempValue == 'i') {
                document.getElementById('line3pop1').textContent = "Sending out the correct information to the ALU";
                document.getElementById('line3pop2').textContent = "which in this case is the 32 bit hex value";
                document.getElementById('line3pop3').textContent = "Stage three." + "IM or Offset: " + tempArray[3];
            } else {
                document.getElementById('line3pop1').textContent = "Sending out the correct information to the ALU";
                document.getElementById('line3pop2').textContent = "which is the data from register RT.";
                document.getElementById('line3pop3').textContent = "Stage three." + "RT: " + tempArray[3];
            }
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line30ToolTipsMouseOver() {

    // For line 30, 56, 61
    if (document.getElementById('line30').getAttribute("stroke") != "#000000" && document.getElementById('line30').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line30').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line30').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line30').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line30').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line30').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            loadArray = tempArray[2];

            //This whole if statement is used to strip offset amount.
            if(loadArray.indexOf("(") != -1) {
                loadTemp = loadArray.split("");
                tempValue = "";
                allValue = "";
                i = 0;
                while (loadTemp[i] != '(') {
                    tempValue = tempValue + "" + loadTemp[i];
                    i++;
                }
                while (i < loadTemp.length) {
                    allValue = allValue + "" + loadTemp[i];
                    i++;
                }
            } else {
                tempValue = tempArray[2];
            }
            document.getElementById('line3pop1').textContent = "Sending out the 32 bit hexadecimal representation";
            document.getElementById('line3pop2').textContent = "to the mutex to see if its needed by the ALU.";
            document.getElementById('line3pop3').textContent = "Stage three." + "IM or Offset: " + tempValue;
        } else {

            //This check is for I type instructions that have 2 registers and an intermediate value
            loadArray = tempArray[0];
            loadTemp = loadArray.split("");
            tempValue = loadTemp[loadTemp.length - 1];
            if (tempValue == 'i') {
                document.getElementById('line3pop1').textContent = "Sending out the 32 bit hexadecimal representation";
                document.getElementById('line3pop2').textContent = "to the mutex to see if its needed by the ALU.";
                document.getElementById('line3pop3').textContent = "Stage three." + "IM or Offset: " + tempArray[3];
            } else {
                document.getElementById('line3pop1').textContent = "Sending out the 32 bit hexadecimal representation";
                document.getElementById('line3pop2').textContent = "to the mutex to see if its needed by the ALU.";
                document.getElementById('line3pop3').textContent = "Stage three." + "IM or Offset: " + tempArray[3];
            }
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line39ToolTipsMouseOver() {

    // For line 39
    if (document.getElementById('line39').getAttribute("stroke") != "#000000" && document.getElementById('line39').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line39').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line39').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line39').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line39').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line39').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "Sending out the correct result of the ALU operation";
            document.getElementById('line3pop2').textContent = "which in this case is the address to load or store";
            document.getElementById('line3pop3').textContent = "Stage three." + "Address: " + tempArray[2];
        } else {

            //This check is for I type instructions that have 2 registers and an intermediate value
            loadArray = tempArray[0];
            loadTemp = loadArray.split("");
            tempValue = loadTemp[loadTemp.length - 1];
            if (tempValue == 'i') {
                document.getElementById('line3pop1').textContent = "Sending out the correct result of the ALU operation";
                document.getElementById('line3pop2').textContent = "which in this case is the address to load or store";
                document.getElementById('line3pop3').textContent = "Stage three." + "IM or Offset: " + tempArray[3];
            } else {
                document.getElementById('line3pop1').textContent = "Sending out the correct result of the ALU operation";
                document.getElementById('line3pop2').textContent = "which is an evaluation of an expression for RT, RS";
                document.getElementById('line3pop3').textContent = "Stage three." + "RT: " + tempArray[3] + " RS: " + tempArray[2];
            }
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line54ToolTipsMouseOver() {

    // For line 54, 36
    if (document.getElementById('line54').getAttribute("stroke") != "#000000" && document.getElementById('line54').getAttribute("stroke") != "slategrey") {
        var loadArray;
        var loadTemp;
        var tempValue = "";
        var allValue = "";
        var i = 0;
        if (document.getElementById('line54').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line54').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line54').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line54').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line54').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            loadArray = tempArray[2];

            //This whole if statement is used to strip offset amount.
            if(loadArray.indexOf("(") != -1) {
                loadTemp = loadArray.split("");
                tempValue = "";
                allValue = "";
                i = 0;
                while (loadTemp[i] != '(') {
                    tempValue = tempValue + "" + loadTemp[i];
                    i++;
                }
                while (i < loadTemp.length) {
                    allValue = allValue + "" + loadTemp[i];
                    i++;
                }
            } else {
                allValue = tempArray[2];
            }
            document.getElementById('line3pop1').textContent = "Sending the value of the register to be written into";
            document.getElementById('line3pop2').textContent = "the memory at the other register.";
            document.getElementById('line3pop3').textContent = "Stage three." + "Data Reg: " + tempArray[1] + " Store Reg: " + allValue;
        } else {

            //This check is for I type instructions that have 2 registers and an intermediate value
            loadArray = tempArray[0];
            loadTemp = loadArray.split("");
            tempValue = loadTemp[loadTemp.length - 1];
            if (tempValue == 'i') {
                document.getElementById('line3pop1').textContent = "Sending out the correct result of the ALU operation";
                document.getElementById('line3pop2').textContent = "which in this case is the address to load or store";
                document.getElementById('line3pop3').textContent = "Stage three." + "IM or Offset: " + tempArray[3];
            } else {
                document.getElementById('line3pop1').textContent = "Sending out the correct result of the ALU operation";
                document.getElementById('line3pop2').textContent = "which is an evaluation of an expression for RT, RS";
                document.getElementById('line3pop3').textContent = "Stage three." + "RT: " + tempArray[3] + " RS: " + tempArray[2];
            }
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line41ToolTipsMouseOver() {

    // For line 41
    if (document.getElementById('line41').getAttribute("stroke") != "#000000" && document.getElementById('line41').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line41').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
            instructionCheck = document.getElementById("slot1").getAttribute("inst");
        } else if (document.getElementById('line41').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
            instructionCheck = document.getElementById("slot2").getAttribute("inst");
        } else if (document.getElementById('line41').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
            instructionCheck = document.getElementById("slot3").getAttribute("inst");
        } else if (document.getElementById('line41').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
            instructionCheck = document.getElementById("slot4").getAttribute("inst");
        } else if (document.getElementById('line41').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
            instructionCheck = document.getElementById("slot5").getAttribute("inst");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            if (instructionCheck == ("sw") || instructionCheck == ("sb") || instructionCheck == ("sh")) {
                document.getElementById('line3pop1').textContent = "Sending the 32 bit hex address that the new value";
                document.getElementById('line3pop2').textContent = "is going tobe stored into.";
                document.getElementById('line3pop3').textContent = "Stage four." + "Address of: " + tempArray[2];
            } else {
                document.getElementById('line3pop1').textContent = "Sending the 32 bit hex address that the value is";
                document.getElementById('line3pop2').textContent = "going to be read from to be placed into the register.";
                document.getElementById('line3pop3').textContent = "Stage four." + "Address of: " + tempArray[2];
            }
        } else {
            document.getElementById('line3pop1').textContent = "Sending the ALU result into the buffer to go to WB";
            document.getElementById('line3pop2').textContent = "since no memory needs to be accessed here.";
            document.getElementById('line3pop3').textContent = "Stage four." + "Result of: " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line57ToolTipsMouseOver() {

    // For line 57, 43
    if (document.getElementById('line57').getAttribute("stroke") != "#000000" && document.getElementById('line57').getAttribute("stroke") != "slategrey") {

        if (document.getElementById('line57').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line57').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line57').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line57').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line57').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }
        document.getElementById('line3pop1').textContent = "Sending the ALU result into the buffer to go to WB";
        document.getElementById('line3pop2').textContent = "since no memory needs to be accessed here.";
        document.getElementById('line3pop3').textContent = "Stage four." + "Result of: " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line42ToolTipsMouseOver() {

    // For line 42
    if (document.getElementById('line42').getAttribute("stroke") != "#000000" && document.getElementById('line42').getAttribute("stroke") != "slategrey") {
        var instructionCheck;
        if (document.getElementById('line42').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
            instructionCheck = document.getElementById("slot1").getAttribute("inst");
        } else if (document.getElementById('line42').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
            instructionCheck = document.getElementById("slot2").getAttribute("inst");
        } else if (document.getElementById('line42').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
            instructionCheck = document.getElementById("slot3").getAttribute("inst");
        } else if (document.getElementById('line42').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
            instructionCheck = document.getElementById("slot4").getAttribute("inst");
        } else if (document.getElementById('line42').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
            instructionCheck = document.getElementById("slot5").getAttribute("inst");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            if (instructionCheck == ("sw") || instructionCheck == ("sb") || instructionCheck == ("sh")) {
                document.getElementById('line3pop1').textContent = "Sending the 32 bit hex address that the new value";
                document.getElementById('line3pop2').textContent = "is going tobe stored into.";
                document.getElementById('line3pop3').textContent = "Stage four." + "Address of: " + tempArray[2];
            } else {
                document.getElementById('line3pop1').textContent = "Sending the 32 bit hex address that the value is";
                document.getElementById('line3pop2').textContent = "going to be read from to be placed into the register.";
                document.getElementById('line3pop3').textContent = "Stage four." + "Address of: " + tempArray[2];
            }
        }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line60ToolTipsMouseOver() {

    // For line 60
    if (document.getElementById('line60').getAttribute("stroke") != "#000000" && document.getElementById('line60').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line60').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line60').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line60').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line60').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line60').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }
        document.getElementById('line3pop1').textContent = "Sending the value to be stored into the new";
        document.getElementById('line3pop2').textContent = "register destination supplied by the instruction";
        document.getElementById('line3pop3').textContent = "Stage four." + "Stored value: " + tempArray[1] + "Location: " + tempArray[2];
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line44ToolTipsMouseOver() {

    // For line 44
    if (document.getElementById('line44').getAttribute("stroke") != "#000000" && document.getElementById('line44').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line44').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line44').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line44').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line44').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line44').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }
        document.getElementById('line3pop1').textContent = "Sending the value that was loaded from memory";
        document.getElementById('line3pop2').textContent = "to be stored into the given register";
        document.getElementById('line3pop3').textContent = "Stage four." + "Register: " + tempArray[1] + "Location: " + tempArray[2];
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line45ToolTipsMouseOver() {

    // For line 45
    if (document.getElementById('line45').getAttribute("stroke") != "#000000" && document.getElementById('line45').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line45').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line45').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line45').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line45').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line45').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }
        document.getElementById('line4pop1').textContent = "Sending the value that was loaded from memory";
        document.getElementById('line4pop2').textContent = "to be stored in the register into the mutex to";
        document.getElementById('line4pop2').textContent = "see if it will be written back";
        document.getElementById('line4pop4').textContent = "Stage five." + "Register: " + tempArray[1] + "Location: " + tempArray[2];
        document.getElementById('line4pop1').style.visibility = "visible";
        document.getElementById('line4pop2').style.visibility = "visible";
        document.getElementById('line4pop3').style.visibility = "visible";
        document.getElementById('line4pop4').style.visibility = "visible";
    } else {
        toolTipClearForFourLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line46ToolTipsMouseOver() {

    // For line 46, 58, 62
    if (document.getElementById('line46').getAttribute("stroke") != "#000000" && document.getElementById('line46').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line46').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line46').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line46').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line46').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line46').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }
        document.getElementById('line3pop1').textContent = "Sending the ALU result into the mutex to see if";
        document.getElementById('line3pop2').textContent = "it is going to be written back to the register";
        document.getElementById('line3pop3').textContent = "Stage five." + "Result of: " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line47ToolTipsMouseOver() {

    // For line 47, 59, 48, 53, 27
    if (document.getElementById('line47').getAttribute("stroke") != "#000000" && document.getElementById('line47').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line47').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line47').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line47').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line47').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line47').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {

            document.getElementById('line3pop1').textContent = "Sending the value that was loaded to memory to be";
            document.getElementById('line3pop2').textContent = "written to the write register";
            document.getElementById('line3pop3').textContent = "Stage five." + "Loaded from: " + tempArray[2] + " Writing to: " + tempArray[1];
        } else {
            document.getElementById('line3pop1').textContent = "Sending the data that was evaluated at the ALU ";
            document.getElementById('line3pop2').textContent = "to be written to the write register";
            document.getElementById('line3pop3').textContent = "Stage five." + "Result of: " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2] + " " + tempArray[3];

        }
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line26ToolTipsMouseOver() {

    // For line 26, 70, 69, 68, 67
    if (document.getElementById('line26').getAttribute("stroke") != "#000000" && document.getElementById('line26').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line26').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line26').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line26').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line26').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line26').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "The register that will be receiving the results ";
            document.getElementById('line3pop2').textContent = "of the load from memory";
            document.getElementById('line3pop3').textContent = "Stage five." + " Write Register: " + tempArray[1];
        } else {

            document.getElementById('line3pop1').textContent = "The register that will be receiving the results of ";
            document.getElementById('line3pop2').textContent = "the expression evaluated at the ALU";
            document.getElementById('line3pop3').textContent = "Stage five." + "Write Register: " + tempArray[1];
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line63ToolTipsMouseOver() {

    // For line 63, 64
    if (document.getElementById('line63').getAttribute("stroke") != "#000000" && document.getElementById('line63').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line63').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line63').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line63').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line63').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line63').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "The register that will be receiving the results ";
            document.getElementById('line3pop2').textContent = "of the load from memory";
            document.getElementById('line3pop3').textContent = "Stage five." + " Write Register: " + tempArray[1];
        } else {

            document.getElementById('line3pop1').textContent = "The register that will be receiving the results of ";
            document.getElementById('line3pop2').textContent = "the expression evaluated at the ALU";
            document.getElementById('line3pop3').textContent = "Stage five." + "Write Register: " + tempArray[1];
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line65ToolTipsMouseOver() {

    // For line 65
    if (document.getElementById('line65').getAttribute("stroke") != "#000000" && document.getElementById('line65').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line65').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line65').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line65').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line65').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line65').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "The register that will be receiving the results ";
            document.getElementById('line3pop2').textContent = "of the load from memory";
            document.getElementById('line3pop3').textContent = "Stage five." + " Write Register: " + tempArray[1];
        } else {

            document.getElementById('line3pop1').textContent = "The register that will be receiving the results of ";
            document.getElementById('line3pop2').textContent = "the expression evaluated at the ALU";
            document.getElementById('line3pop3').textContent = "Stage five." + "Write Register: " + tempArray[1];
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}

/**
 * This method is used to update the tooltips that are displayed for the user whenever they hover over the specified
 * lines that are defined either in the method header or in the first line of the method itself. Then it checks to see
 * which slot in the legend has the same color as the lines and then extracts the data that it needs from that slot.
 * Once it has the data it checks if there are 2 or 3 registers and places the appropriate tooltip to then make visible.
 */
function line66ToolTipsMouseOver() {

    // For line 66
    if (document.getElementById('line66').getAttribute("stroke") != "#000000" && document.getElementById('line66').getAttribute("stroke") != "slategrey") {
        if (document.getElementById('line66').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            tempArray = document.getElementById("slot1").textContent.split(" ");
        } else if (document.getElementById('line66').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            tempArray = document.getElementById("slot2").textContent.split(" ");
        } else if (document.getElementById('line66').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            tempArray = document.getElementById("slot3").textContent.split(" ");
        } else if (document.getElementById('line66').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            tempArray = document.getElementById("slot4").textContent.split(" ");
        } else if (document.getElementById('line66').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            tempArray = document.getElementById("slot5").textContent.split(" ");
        }

        //This check is to see if there are 2 or 3 registers in the given instruction tempArray[3] being undefined if there are 2.
        if (tempArray[3] == undefined) {
            document.getElementById('line3pop1').textContent = "The register that will be receiving the results ";
            document.getElementById('line3pop2').textContent = "of the load from memory";
            document.getElementById('line3pop3').textContent = "Stage five." + " Write Register: " + tempArray[1];
        } else {

            document.getElementById('line3pop1').textContent = "The register that will be receiving the results of ";
            document.getElementById('line3pop2').textContent = "the expression evaluated at the ALU";
            document.getElementById('line3pop3').textContent = "Stage five." + "Write Register: " + tempArray[1];
        }

        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
        document.getElementById('line3pop3').style.visibility = "visible";
    } else {
        toolTipClearForThreeLines();
    }
}
//###############################################SECTION FOR DIAGRAM PARTS WHICH DO NOT INCLUDE LINES#####################################################################

/**
 *
 * This method displays the appropriate tooltip for the last mutex in stage 5 when there is a store word in that section
 * since the store word has none of the parts in the 5th stage highlighted at that time.
 */
function mutexTool1TipsMouseOver() {

    var instructionVal;
        // Checks if the lastm utex is white and if there is a SW instruction in slot 1 on the legend.
        if (document.getElementById('ellipse5').getAttribute("fill") == "white") {
            tempArray = document.getElementById("slot1").textContent.split(" ");
            instructionVal = document.getElementById("slot1").getAttribute("inst");
            if (instructionVal == ("sw") || instructionVal == ("sb") || instructionVal == ("sh")) {

                document.getElementById('line3pop1').textContent = "A store instuction has already completed its run in";
                document.getElementById('line3pop2').textContent = "the pipeline and has nothing to show in stage 5";
                document.getElementById('line3pop3').textContent = "Stage five." + " Instruction: " + tempArray[0] + " " + tempArray[1] + " " + tempArray[2];
                document.getElementById('line3pop1').style.visibility = "visible";
                document.getElementById('line3pop2').style.visibility = "visible";
                document.getElementById('line3pop3').style.visibility = "visible";
            }
        } else {

            document.getElementById('ell1pop1').style.visibility = "visible";
            document.getElementById('ell1pop2').style.visibility = "visible";
            document.getElementById('ell1pop3').style.visibility = "visible";
            document.getElementById('ell1pop4').style.visibility = "visible";
            document.getElementById('ell1pop5').style.visibility = "visible";
        }
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function mutexToolTipsMouseOver() {

        document.getElementById('ell1pop1').style.visibility = "visible";
        document.getElementById('ell1pop2').style.visibility = "visible";
        document.getElementById('ell1pop3').style.visibility = "visible";
        document.getElementById('ell1pop4').style.visibility = "visible";
        document.getElementById('ell1pop5').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function mutexToolTipsMouseOut() {

    document.getElementById('ell1pop1').style.visibility = "hidden";
    document.getElementById('ell1pop2').style.visibility = "hidden";
    document.getElementById('ell1pop3').style.visibility = "hidden";
    document.getElementById('ell1pop4').style.visibility = "hidden";
    document.getElementById('ell1pop5').style.visibility = "hidden";

}

/**
 * Sets the appropriate tooltip lines to hidden for the last mutex in stage 5.
 */
function mutexTool1TipsMouseOut() {

    document.getElementById('line3pop1').style.visibility = "hidden";
    document.getElementById('line3pop2').style.visibility = "hidden";
    document.getElementById('line3pop3').style.visibility = "hidden";
    document.getElementById('ell1pop1').style.visibility = "hidden";
    document.getElementById('ell1pop2').style.visibility = "hidden";
    document.getElementById('ell1pop3').style.visibility = "hidden";
    document.getElementById('ell1pop4').style.visibility = "hidden";
    document.getElementById('ell1pop5').style.visibility = "hidden";

}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function pcToolTipsMouseOver() {

        document.getElementById('rect1pop1').style.visibility = "visible";
        document.getElementById('rect1pop2').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function pcToolTipsMouseOut() {

    document.getElementById('rect1pop1').style.visibility= "hidden";
    document.getElementById('rect1pop2').style.visibility= "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function addToolTipsMouseOver() {

    document.getElementById('poly1pop1').style.visibility = "visible";
    document.getElementById('poly1pop2').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function addToolTipsMouseOut() {

    document.getElementById('poly1pop1').style.visibility= "hidden";
    document.getElementById('poly1pop2').style.visibility= "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function instMemToolTipsMouseOver() {

    document.getElementById('rect2pop1').style.visibility = "visible";
    document.getElementById('rect2pop2').style.visibility = "visible";
    document.getElementById('rect2pop3').style.visibility = "visible";
    document.getElementById('rect2pop4').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function instMemToolTipsMouseOut() {

    document.getElementById('rect2pop1').style.visibility= "hidden";
    document.getElementById('rect2pop2').style.visibility= "hidden";
    document.getElementById('rect2pop3').style.visibility= "hidden";
    document.getElementById('rect2pop4').style.visibility= "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function ifidToolTipsMouseOver() {

    document.getElementById('rect4pop1').style.visibility = "visible";
    document.getElementById('rect4pop2').style.visibility = "visible";
    document.getElementById('rect4pop3').style.visibility = "visible";
    document.getElementById('rect4pop4').style.visibility = "visible";
    document.getElementById('rect4pop5').style.visibility = "visible";
    document.getElementById('rect4pop6').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function ifidToolTipsMouseOut() {

    document.getElementById('rect4pop1').style.visibility= "hidden";
    document.getElementById('rect4pop2').style.visibility= "hidden";
    document.getElementById('rect4pop3').style.visibility= "hidden";
    document.getElementById('rect4pop4').style.visibility= "hidden";
    document.getElementById('rect4pop5').style.visibility = "hidden";
    document.getElementById('rect4pop6').style.visibility = "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function regToolTipsMouseOver() {

    document.getElementById('rect6pop1').style.visibility = "visible";
    document.getElementById('rect6pop2').style.visibility = "visible";
    document.getElementById('rect6pop3').style.visibility = "visible";
    document.getElementById('rect6pop4').style.visibility = "visible";
    document.getElementById('rect6pop5').style.visibility = "visible";
    document.getElementById('rect6pop6').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function regToolTipsMouseOut() {

    document.getElementById('rect6pop1').style.visibility= "hidden";
    document.getElementById('rect6pop2').style.visibility= "hidden";
    document.getElementById('rect6pop3').style.visibility= "hidden";
    document.getElementById('rect6pop4').style.visibility= "hidden";
    document.getElementById('rect6pop5').style.visibility = "hidden";
    document.getElementById('rect6pop6').style.visibility = "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function aluToolTipsMouseOver() {

    document.getElementById('poly3pop1').style.visibility = "visible";
    document.getElementById('poly3pop2').style.visibility = "visible";
    document.getElementById('poly3pop3').style.visibility = "visible";
    document.getElementById('poly3pop4').style.visibility = "visible";
    document.getElementById('poly3pop5').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function aluToolTipsMouseOut() {

    document.getElementById('poly3pop1').style.visibility= "hidden";
    document.getElementById('poly3pop2').style.visibility= "hidden";
    document.getElementById('poly3pop3').style.visibility= "hidden";
    document.getElementById('poly3pop4').style.visibility= "hidden";
    document.getElementById('poly3pop5').style.visibility = "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function idexToolTipsMouseOver() {

    document.getElementById('rect8pop1').style.visibility = "visible";
    document.getElementById('rect8pop2').style.visibility = "visible";
    document.getElementById('rect8pop3').style.visibility = "visible";
    document.getElementById('rect8pop4').style.visibility = "visible";
    document.getElementById('rect8pop5').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function idexToolTipsMouseOut() {

    document.getElementById('rect8pop1').style.visibility= "hidden";
    document.getElementById('rect8pop2').style.visibility= "hidden";
    document.getElementById('rect8pop3').style.visibility= "hidden";
    document.getElementById('rect8pop4').style.visibility= "hidden";
    document.getElementById('rect8pop5').style.visibility = "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function exmemToolTipsMouseOver() {

    document.getElementById('rect10pop1').style.visibility = "visible";
    document.getElementById('rect10pop2').style.visibility = "visible";
    document.getElementById('rect10pop3').style.visibility = "visible";
    document.getElementById('rect10pop4').style.visibility = "visible";
    document.getElementById('rect10pop5').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function exmemToolTipsMouseOut() {

    document.getElementById('rect10pop1').style.visibility= "hidden";
    document.getElementById('rect10pop2').style.visibility= "hidden";
    document.getElementById('rect10pop3').style.visibility= "hidden";
    document.getElementById('rect10pop4').style.visibility= "hidden";
    document.getElementById('rect10pop5').style.visibility = "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function memwbToolTipsMouseOver() {

    document.getElementById('rect14pop1').style.visibility = "visible";
    document.getElementById('rect14pop2').style.visibility = "visible";
    document.getElementById('rect14pop3').style.visibility = "visible";
    document.getElementById('rect14pop4').style.visibility = "visible";
    document.getElementById('rect14pop5').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function memwbToolTipsMouseOut() {

    document.getElementById('rect14pop1').style.visibility= "hidden";
    document.getElementById('rect14pop2').style.visibility= "hidden";
    document.getElementById('rect14pop3').style.visibility= "hidden";
    document.getElementById('rect14pop4').style.visibility= "hidden";
    document.getElementById('rect14pop5').style.visibility = "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function dataToolTipsMouseOver() {

    document.getElementById('rect12pop1').style.visibility = "visible";
    document.getElementById('rect12pop2').style.visibility = "visible";
    document.getElementById('rect12pop3').style.visibility = "visible";
    document.getElementById('rect12pop4').style.visibility = "visible";
    document.getElementById('rect12pop5').style.visibility = "visible";
    document.getElementById('rect12pop6').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function dataToolTipsMouseOut() {

    document.getElementById('rect12pop1').style.visibility= "hidden";
    document.getElementById('rect12pop2').style.visibility= "hidden";
    document.getElementById('rect12pop3').style.visibility= "hidden";
    document.getElementById('rect12pop4').style.visibility= "hidden";
    document.getElementById('rect12pop5').style.visibility = "hidden";
    document.getElementById('rect12pop6').style.visibility = "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function sgexToolTipsMouseOver() {

    document.getElementById('ell2pop1').style.visibility = "visible";
    document.getElementById('ell2pop2').style.visibility = "visible";
    document.getElementById('ell2pop3').style.visibility = "visible";
    document.getElementById('ell2pop4').style.visibility = "visible";
    document.getElementById('ell2pop5').style.visibility = "visible";
    document.getElementById('ell2pop6').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function sgexToolTipsMouseOut() {

    document.getElementById('ell2pop1').style.visibility= "hidden";
    document.getElementById('ell2pop2').style.visibility= "hidden";
    document.getElementById('ell2pop3').style.visibility= "hidden";
    document.getElementById('ell2pop4').style.visibility= "hidden";
    document.getElementById('ell2pop5').style.visibility = "hidden";
    document.getElementById('ell2pop6').style.visibility = "hidden";
}

/**
 * Sets the appropriate tooltip lines to visible for the given objects names in the method header.
 */
function shiftToolTipsMouseOver() {

    document.getElementById('ell3pop1').style.visibility = "visible";
    document.getElementById('ell3pop2').style.visibility = "visible";
    document.getElementById('ell3pop3').style.visibility = "visible";
}

/**
 * Sets the appropriate tooltip lines to hidden for the given objects names in the method header.
 */
function shiftToolTipsMouseOut() {

    document.getElementById('ell3pop1').style.visibility= "hidden";
    document.getElementById('ell3pop2').style.visibility= "hidden";
    document.getElementById('ell3pop3').style.visibility= "hidden";
}