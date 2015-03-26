/**
 * Created by Josh on 3/4/2015.
 */

function line1ToolTipsMouseOver() {

    //This is for lines 1, 17, 16, 21, 14, 13
    if(document.getElementById('line1').getAttribute("stroke") != "#000000") {


        document.getElementById('line1pop1').style.visibility = "visible";
        document.getElementById('line1pop2').style.visibility = "visible";
    } else {
        line1ToolTipsMouseOut();
    }
}

function line1ToolTipsMouseOut() {

    //This is for lines 1, 17, 16, 21, 14, 13
    document.getElementById('line1pop1').style.visibility= "hidden";
    document.getElementById('line1pop2').style.visibility= "hidden";
}

function line2ToolTipsMouseOver() {

    //This is for lines 2, 18, 15, 20, 8
    if(document.getElementById('line2').getAttribute("stroke") != "#000000") {
        if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        } else if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        } else if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        } else if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        } else if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        }
        document.getElementById('line2pop1').style.visibility = "visible";
        document.getElementById('line2pop2').style.visibility = "visible";
    } else {
        line2ToolTipsMouseOut();
    }
}

function line2ToolTipsMouseOut() {

    //This is for lines 2, 18, 15, 20, 8
    document.getElementById('line2pop1').style.visibility= "hidden";
    document.getElementById('line2pop2').style.visibility= "hidden";
}

function line3ToolTipsMouseOver() {

    //For line 3
    if(document.getElementById('line3').getAttribute("stroke") != "#000000") {
        document.getElementById('line3pop1').textContent = "Sends the new program counter value back to the ";
        document.getElementById('line3pop2').textContent = "program counter and sets the new value.";
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible"
    } else {
        line3ToolTipsMouseOut();
    }
}

function line3ToolTipsMouseOut() {

    //For line 3
    document.getElementById('line3pop1').style.visibility= "hidden";
    document.getElementById('line3pop2').style.visibility= "hidden";
}

function line4ToolTipsMouseOver() {

    //For lines 4, 19, 7
    if(document.getElementById('line4').getAttribute("stroke") != "#000000") {
        if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot1').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order to";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        } else if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot2').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order to";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        } else if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot3').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order to";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        } else if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot4').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order to";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        } else if(document.getElementById('line2').getAttribute("stroke") == document.getElementById('slot5').getAttribute("fill")) {
            document.getElementById('line2pop1').textContent = "Adds four to the program counter total in order to";
            document.getElementById('line2pop2').textContent = "to set the count for the next instruction.";
        }
        document.getElementById('line4pop1').style.visibility = "visible";
        document.getElementById('line4pop2').style.visibility = "visible";
    } else {
        line4ToolTipsMouseOut();
    }
}

function line4ToolTipsMouseOut() {

    //For lines 4, 19, 7
    document.getElementById('line4pop1').style.visibility= "hidden";
    document.getElementById('line4pop2').style.visibility= "hidden";
}

function line5ToolTipsMouseOver() {

    //For line 5
    if(document.getElementById('line5').getAttribute("stroke") != "#000000") {
        document.getElementById('line5pop1').style.visibility = "visible";
        document.getElementById('line5pop2').style.visibility = "visible";
    } else {
        line5ToolTipsMouseOut();
    }
}

function line5ToolTipsMouseOut() {

    //For line 5
    document.getElementById('line5pop1').style.visibility= "hidden";
    document.getElementById('line5pop2').style.visibility= "hidden";
}

function line6ToolTipsMouseOver() {

    //For line 6
    if(document.getElementById('line6').getAttribute("stroke") != "#000000") {
        document.getElementById('line6pop1').style.visibility = "visible";
        document.getElementById('line6pop2').style.visibility = "visible";
    } else {
        line6ToolTipsMouseOut();
    }
}

function line6ToolTipsMouseOut() {

    //For line 6
    document.getElementById('line6pop1').style.visibility= "hidden";
    document.getElementById('line6pop2').style.visibility= "hidden";
}

function line22ToolTipsMouseOver() {

    //For line 22
    if(document.getElementById('line22').getAttribute("stroke") != "#000000") {
        document.getElementById('line22pop1').style.visibility = "visible";
        document.getElementById('line22pop2').style.visibility = "visible";
    } else {
        line22ToolTipsMouseOut();
    }
}

function line22ToolTipsMouseOut() {

    //For line 22
    document.getElementById('line22pop1').style.visibility= "hidden";
    document.getElementById('line22pop2').style.visibility= "hidden";
}

//###############################################SECTION FOR DIAGRAM PARTS WHICH DOES NOT INCLUDE LINES#####################################################################

function mutexToolTipsMouseOver() {

    document.getElementById('ell1pop1').style.visibility = "visible";
    document.getElementById('ell1pop2').style.visibility = "visible";
    document.getElementById('ell1pop3').style.visibility = "visible";
    document.getElementById('ell1pop4').style.visibility = "visible";
    document.getElementById('ell1pop5').style.visibility = "visible";
}

function mutexToolTipsMouseOut() {

    document.getElementById('ell1pop1').style.visibility = "hidden";
    document.getElementById('ell1pop2').style.visibility = "hidden";
    document.getElementById('ell1pop3').style.visibility = "hidden";
    document.getElementById('ell1pop4').style.visibility = "hidden";
    document.getElementById('ell1pop5').style.visibility = "hidden";

}

function pcToolTipsMouseOver() {

        document.getElementById('rect1pop1').style.visibility = "visible";
        document.getElementById('rect1pop2').style.visibility = "visible";
}

function pcToolTipsMouseOut() {

    document.getElementById('rect1pop1').style.visibility= "hidden";
    document.getElementById('rect1pop2').style.visibility= "hidden";
}

function addToolTipsMouseOver() {

    document.getElementById('poly1pop1').style.visibility = "visible";
    document.getElementById('poly1pop2').style.visibility = "visible";
}

function addToolTipsMouseOut() {

    document.getElementById('poly1pop1').style.visibility= "hidden";
    document.getElementById('poly1pop2').style.visibility= "hidden";
}

function instMemToolTipsMouseOver() {

    document.getElementById('rect2pop1').style.visibility = "visible";
    document.getElementById('rect2pop2').style.visibility = "visible";
    document.getElementById('rect2pop3').style.visibility = "visible";
    document.getElementById('rect2pop4').style.visibility = "visible";
}

function instMemToolTipsMouseOut() {

    document.getElementById('rect2pop1').style.visibility= "hidden";
    document.getElementById('rect2pop2').style.visibility= "hidden";
    document.getElementById('rect2pop3').style.visibility= "hidden";
    document.getElementById('rect2pop4').style.visibility= "hidden";
}

function ifidToolTipsMouseOver() {

    document.getElementById('rect4pop1').style.visibility = "visible";
    document.getElementById('rect4pop2').style.visibility = "visible";
    document.getElementById('rect4pop3').style.visibility = "visible";
    document.getElementById('rect4pop4').style.visibility = "visible";
    document.getElementById('rect4pop5').style.visibility = "visible";
    document.getElementById('rect4pop6').style.visibility = "visible";
}

function ifidToolTipsMouseOut() {

    document.getElementById('rect4pop1').style.visibility= "hidden";
    document.getElementById('rect4pop2').style.visibility= "hidden";
    document.getElementById('rect4pop3').style.visibility= "hidden";
    document.getElementById('rect4pop4').style.visibility= "hidden";
    document.getElementById('rect4pop5').style.visibility = "hidden";
    document.getElementById('rect4pop6').style.visibility = "hidden";
}

function regToolTipsMouseOver() {

    document.getElementById('rect6pop1').style.visibility = "visible";
    document.getElementById('rect6pop2').style.visibility = "visible";
    document.getElementById('rect6pop3').style.visibility = "visible";
    document.getElementById('rect6pop4').style.visibility = "visible";
    document.getElementById('rect6pop5').style.visibility = "visible";
    document.getElementById('rect6pop6').style.visibility = "visible";
}

function regToolTipsMouseOut() {

    document.getElementById('rect6pop1').style.visibility= "hidden";
    document.getElementById('rect6pop2').style.visibility= "hidden";
    document.getElementById('rect6pop3').style.visibility= "hidden";
    document.getElementById('rect6pop4').style.visibility= "hidden";
    document.getElementById('rect6pop5').style.visibility = "hidden";
    document.getElementById('rect6pop6').style.visibility = "hidden";
}

function aluToolTipsMouseOver() {

    document.getElementById('poly3pop1').style.visibility = "visible";
    document.getElementById('poly3pop2').style.visibility = "visible";
    document.getElementById('poly3pop3').style.visibility = "visible";
    document.getElementById('poly3pop4').style.visibility = "visible";
    document.getElementById('poly3pop5').style.visibility = "visible";
}

function aluToolTipsMouseOut() {

    document.getElementById('poly3pop1').style.visibility= "hidden";
    document.getElementById('poly3pop2').style.visibility= "hidden";
    document.getElementById('poly3pop3').style.visibility= "hidden";
    document.getElementById('poly3pop4').style.visibility= "hidden";
    document.getElementById('poly3pop5').style.visibility = "hidden";
}

function idexToolTipsMouseOver() {

    document.getElementById('rect8pop1').style.visibility = "visible";
    document.getElementById('rect8pop2').style.visibility = "visible";
    document.getElementById('rect8pop3').style.visibility = "visible";
    document.getElementById('rect8pop4').style.visibility = "visible";
    document.getElementById('rect8pop5').style.visibility = "visible";
}

function idexToolTipsMouseOut() {

    document.getElementById('rect8pop1').style.visibility= "hidden";
    document.getElementById('rect8pop2').style.visibility= "hidden";
    document.getElementById('rect8pop3').style.visibility= "hidden";
    document.getElementById('rect8pop4').style.visibility= "hidden";
    document.getElementById('rect8pop5').style.visibility = "hidden";
}

function exmemToolTipsMouseOver() {

    document.getElementById('rect10pop1').style.visibility = "visible";
    document.getElementById('rect10pop2').style.visibility = "visible";
    document.getElementById('rect10pop3').style.visibility = "visible";
    document.getElementById('rect10pop4').style.visibility = "visible";
    document.getElementById('rect10pop5').style.visibility = "visible";
}

function exmemToolTipsMouseOut() {

    document.getElementById('rect10pop1').style.visibility= "hidden";
    document.getElementById('rect10pop2').style.visibility= "hidden";
    document.getElementById('rect10pop3').style.visibility= "hidden";
    document.getElementById('rect10pop4').style.visibility= "hidden";
    document.getElementById('rect10pop5').style.visibility = "hidden";
}

function memwbToolTipsMouseOver() {

    document.getElementById('rect14pop1').style.visibility = "visible";
    document.getElementById('rect14pop2').style.visibility = "visible";
    document.getElementById('rect14pop3').style.visibility = "visible";
    document.getElementById('rect14pop4').style.visibility = "visible";
    document.getElementById('rect14pop5').style.visibility = "visible";
}

function memwbToolTipsMouseOut() {

    document.getElementById('rect14pop1').style.visibility= "hidden";
    document.getElementById('rect14pop2').style.visibility= "hidden";
    document.getElementById('rect14pop3').style.visibility= "hidden";
    document.getElementById('rect14pop4').style.visibility= "hidden";
    document.getElementById('rect14pop5').style.visibility = "hidden";
}

function dataToolTipsMouseOver() {

    document.getElementById('rect12pop1').style.visibility = "visible";
    document.getElementById('rect12pop2').style.visibility = "visible";
    document.getElementById('rect12pop3').style.visibility = "visible";
    document.getElementById('rect12pop4').style.visibility = "visible";
    document.getElementById('rect12pop5').style.visibility = "visible";
    document.getElementById('rect12pop6').style.visibility = "visible";
}

function dataToolTipsMouseOut() {

    document.getElementById('rect12pop1').style.visibility= "hidden";
    document.getElementById('rect12pop2').style.visibility= "hidden";
    document.getElementById('rect12pop3').style.visibility= "hidden";
    document.getElementById('rect12pop4').style.visibility= "hidden";
    document.getElementById('rect12pop5').style.visibility = "hidden";
    document.getElementById('rect12pop6').style.visibility = "hidden";
}

function sgexToolTipsMouseOver() {

    document.getElementById('ell2pop1').style.visibility = "visible";
    document.getElementById('ell2pop2').style.visibility = "visible";
    document.getElementById('ell2pop3').style.visibility = "visible";
    document.getElementById('ell2pop4').style.visibility = "visible";
    document.getElementById('ell2pop5').style.visibility = "visible";
    document.getElementById('ell2pop6').style.visibility = "visible";
}

function sgexToolTipsMouseOut() {

    document.getElementById('ell2pop1').style.visibility= "hidden";
    document.getElementById('ell2pop2').style.visibility= "hidden";
    document.getElementById('ell2pop3').style.visibility= "hidden";
    document.getElementById('ell2pop4').style.visibility= "hidden";
    document.getElementById('ell2pop5').style.visibility = "hidden";
    document.getElementById('ell2pop6').style.visibility = "hidden";
}

function shiftToolTipsMouseOver() {

    document.getElementById('ell3pop1').style.visibility = "visible";
    document.getElementById('ell3pop2').style.visibility = "visible";
    document.getElementById('ell3pop3').style.visibility = "visible";
}

function shiftToolTipsMouseOut() {

    document.getElementById('ell3pop1').style.visibility= "hidden";
    document.getElementById('ell3pop2').style.visibility= "hidden";
    document.getElementById('ell3pop3').style.visibility= "hidden";
}