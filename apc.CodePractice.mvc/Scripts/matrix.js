// Global variables
var matrixready = false;
var matrixtransposed = false;

function write(message) {
    document.getElementById('message').innerHTML += message + '<br/>';
}

function addelement(name) {
    var elementhtml = '<input type="text" pattern="[0-9]*" name=' + name + '" size=1 maxlength=1 style="width: 20px" />';
    document.getElementById('matrix').innerHTML += elementhtml;
}

function addselectoption(elem,number) {
    var x=document.getElementById(elem);
    var option=document.createElement("option");
    option.text=number;
    try
    {
        // for IE earlier than version 8
        x.add(option,x.options[null]);
    }
    catch (e)
    {
        x.add(option,null);
    }
}

function CreateSelectionOptions() {
    var MAXNUMBER = 15
    for (var i = 1; i < MAXNUMBER+1; i++) {
        addselectoption("inputrows", i);
        addselectoption("inputcols", i);
    }

}

function clearmatrix() {
    document.getElementById('matrix').innerHTML = " ";
    document.getElementById('message').innerHTML = '10...9...8...7...6...5...4...3...2...1... <br /><br />';

}


function addmatrix() {
    var elementname

    if (matrixready) { clearmatrix() }
    //$("#btnGo").hide();
    var nrows = $('#inputrows').val();
    var ncols = $('#inputcols').val();
    for (var i = 0; i < nrows; i++) {
        for (var j = 0; j < ncols; j++) {
            elementname = "matrixinput" + i.toString + j.toString;
            addelement(elementname);
            if (j < ncols-1) {
                document.getElementById('matrix').innerHTML += "...";
            }
        }
        document.getElementById('matrix').innerHTML += "<br/>";
    }


    var input = '{"Films":[{"title":"Life of Pi","rating":"9"}]}';
    //eval("var data = " + input);
    data = JSON.parse(input);
    write(data.Films[0].title + " = " + data.Films[0].rating);
    write("hello");

    alert($("#inputrows").val());

    $("#btnPopulate").show();
    matrixready = true;

    $("#dialog-message").dialog({
        modal: true,
        buttons: {
            Ok: function () {
                $(this).dialog("close");
            }
        }
    });



}

function InitPage() {

    $("#btnPopulate").hide();
    CreateSelectionOptions();
    
}


$(document).ready(function () {
        InitPage();
        $("#btnGo").click(function () { addmatrix(); });
        
    });
