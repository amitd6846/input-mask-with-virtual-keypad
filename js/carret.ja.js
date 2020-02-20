$(document).ready(function () {

    $('#input_box').on("cut copy paste", function (e) {
        e.preventDefault();
    });

    $('#input_box').click(function () {
        document.activeElement.blur();
        $(this).blur();
    });

    var newPosn = 0;

    $('#input_box').on("click ", function () {
        var newPos = doGetCaretPosition(this);
        newPosn = newPos;
        var this_val = $("#input_box").val();


    });

    $(document).on('click', '#input_box', function (e) {

        var x = event.clientX;
        if (newPosn == 0) {
            $(".carret").css("left", "15px");
        } else {
            $(".carret").css("left", x - 15);
        }
    });

    $('.btnnum').on("click", function () {
        var get_newBg = $('#newBg').val();
        var txt = $(this).text();
        var this_val = $("#input_box").val();

        if (newPosn < 10 && $('#input_box').length <= 10) {
            newTEST = get_newBg.replaceAt(newPosn, txt);

            this_val = this_val + txt;
            $("#input_box").val(newTEST);
            $('#newBg').val(newTEST);
            setCaretToPos(document.getElementById("input_box"), newPosn);
            var left = $(".carret").position().left;
            if (newPosn == 9) {
                $(".carret").css("left", left + 16);
            } else {
                $(".carret").css("left", left + 21);
            }

            newPosn++;
        }

    });

    $(".btndel").on("click", function (e) {
        var get_newBg = $('#newBg').val();
        var txt = $(this).text();
        var this_val = $("#input_box").val();
        console.log(newPosn);

        if ((newPosn <= 10 && newPosn >= 1) && $('#newBg').length <= 10) {
            newTEST = get_newBg.replaceAt(newPosn - 1, '−');
            $('#newBg').val(newTEST);
            this_val = this_val.substring(0, this_val.length - 1);
            $("#input_box").val(newTEST);
            setCaretToPos(document.getElementById("input_box"), newPosn - 1);
            var left = $(".carret").position().left;
            if (newPosn == 1) {
                $(".carret").css("left", "15px");
            } else {
                $(".carret").css("left", left - 21);
            }

            newPosn--;
        }
    });


    String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + replacement.length);
    }

    function setCaretToPos(input, pos) {
        setSelectionRange(input, pos, pos);
    }

    function setSelectionRange(input, selectionStart, selectionEnd) {
        if (input.setSelectionRange) {
            //input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);

        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    }
    // current caret postion

    function doGetCaretPosition(oField) {
        // Initialize
        var iCaretPos = 0;
        // IE Support
        if (document.selection) {
            // Set focus on the element
            //oField.focus();
            // To get cursor position, get empty selection range
            var oSel = document.selection.createRange();
            // Move selection start to 0 position
            oSel.moveStart('character', -oField.value.length);
            // The caret position is selection length
            iCaretPos = oSel.text.length;


        }

        // Firefox support
        else if (oField.selectionStart || oField.selectionStart == '0')
            iCaretPos = oField.selectionDirection == 'backward' ? oField.selectionStart : oField.selectionEnd;
        // Return results
        return iCaretPos;
    }

});