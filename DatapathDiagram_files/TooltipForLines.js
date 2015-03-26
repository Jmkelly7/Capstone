/**
 * Created by Josh on 3/4/2015.
 */

function line1ToolTipsMouseOver() {

    //This is for lines 1, 17, 16, 21, 14, 13
    var temp = document.getElementById('line1').getAttribute("stroke");
    if(temp != "#000000") {
        document.getElementById('line1pop1').style.visibility = "visible";
        document.getElementById('line1pop2').style.visibility = "visible";
    }
}

function line1ToolTipsMouseOut() {

    //This is for lines 1, 17, 16, 21, 14, 13
    document.getElementById('line1pop1').style.visibility= "hidden";
    document.getElementById('line1pop2').style.visibility= "hidden";
}

function line2ToolTipsMouseOver() {

    //This is for lines 2, 18, 15, 20, 8
   // var temp = document.getElementById('line2').getAttribute("stroke");
    //if(temp != "black") {
        document.getElementById('line2pop1').style.visibility = "visible";
        document.getElementById('line2pop2').style.visibility = "visible";
   // }
}

function line2ToolTipsMouseOut() {

    //This is for lines 2, 18, 15, 20, 8
    document.getElementById('line2pop1').style.visibility= "hidden";
    document.getElementById('line2pop2').style.visibility= "hidden";
}

function line3ToolTipsMouseOver() {

    //For line 3
    //var temp = document.getElementById('line3').getAttribute("stroke");
   // if(temp != "black") {
        document.getElementById('line3pop1').style.visibility = "visible";
        document.getElementById('line3pop2').style.visibility = "visible";
   // }
}

function line3ToolTipsMouseOut() {

    //For line 3
    document.getElementById('line3pop1').style.visibility= "hidden";
    document.getElementById('line3pop2').style.visibility= "hidden";
}

function line4ToolTipsMouseOver() {

    //For lines 4, 19, 7
   // var temp = document.getElementById('line3').getAttribute("stroke");
   // if(temp != "black") {
        document.getElementById('line4pop1').style.visibility = "visible";
        document.getElementById('line4pop2').style.visibility = "visible";
   // }
}

function line4ToolTipsMouseOut() {

    //For lines 4, 19, 7
    document.getElementById('line4pop1').style.visibility= "hidden";
    document.getElementById('line4pop2').style.visibility= "hidden";
}

function line5ToolTipsMouseOver() {

    //For line 5
   // var temp = document.getElementById('line3').getAttribute("stroke");
   // if(temp != "black") {
        document.getElementById('line5pop1').style.visibility = "visible";
        document.getElementById('line5pop2').style.visibility = "visible";
   // }
}

function line5ToolTipsMouseOut() {

    //For line 5
    document.getElementById('line5pop1').style.visibility= "hidden";
    document.getElementById('line5pop2').style.visibility= "hidden";
}

function line6ToolTipsMouseOver() {

    //For line 6
   // var temp = document.getElementById('line3').getAttribute("stroke");
   // if(temp != "black") {
        document.getElementById('line6pop1').style.visibility = "visible";
        document.getElementById('line6pop2').style.visibility = "visible";
   // }
}

function line6ToolTipsMouseOut() {

    //For line 6
    document.getElementById('line6pop1').style.visibility= "hidden";
    document.getElementById('line6pop2').style.visibility= "hidden";
}

function line8ToolTipsMouseOver() {

    //For lines 8, 9, 10, 11
   // var temp = document.getElementById('line3').getAttribute("stroke");
   // if(temp != "black") {
        document.getElementById('line8pop1').style.visibility = "visible";
        document.getElementById('line8pop2').style.visibility = "visible";
   //}
}

function line8ToolTipsMouseOut() {

    //For lines 8, 9, ,10, 11
    document.getElementById('line8pop1').style.visibility= "hidden";
    document.getElementById('line8pop2').style.visibility= "hidden";
}

function line22ToolTipsMouseOver() {

    //For line 22
   // var temp = document.getElementById('line3').getAttribute("stroke");
   // if(temp != "black") {
        document.getElementById('line22pop1').style.visibility = "visible";
        document.getElementById('line22pop2').style.visibility = "visible";
   // }
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