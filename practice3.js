$(function () {
    $("a.open").click(function() {
        $("#floatwindow").fadeIn("fast");
        return false;
    });
    $("#floatwindow a.close").click(function() {
        $("#floatwindow").fadeOut("fast");
        return false;
    });
    $("#floatwindow dl dt").mousedown(function(e) {
        $("#floatwindow")
            .data("clickPointX", e.pageX-$("#floatwindow").offset().left)
            .data("clickPointY", e.pageY-$("#floatwindow").offset().top);
        $(document).mousemove(function(e) {
            $("#floatwindow").css({top:e.pageY-$("#floatwindow").data("clickPointY")+"px", left:e.pageX-$("#floatwindow").data("clickPointX")+"px"
            });
        });
    }).mouseup(function() {
        $(document).unbind("mousemove");
    });
    $(".explanation").hover(
        function(){$("div#information").css("display", "block");},
        function(){$("div#information").css("display", "none");}
    );
});

function toggle1(self) {
    var target = document.querySelector('body');
    if (self.value === 'night') {
        target.style.backgroundColor='black';
        target.style.color='white';
        self.value = 'day';
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = 'powderblue';
            i=i+1;
        }
    } else {
        target.style.backgroundColor='white';
        target.style.color='black';
        self.value = 'night';
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = 'blue';
            i=i+1;
        }
    }
}

function setColor(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = color;
        i=i+1;
    }
}
function toggle2(self) {
    var target = document.querySelector('body').style;
    if (self.value === 'night') {
        target.backgroundColor='black';
        target.color='white';
        self.value = 'day';
        setColor('powderblue');
    } else {
        target.backgroundColor='white';
        target.color='black';
        self.value = 'night';
        setColor('blue');
    }
}


