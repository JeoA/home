window.onload = function () {
    var oDiv1 = document.getElementById('home');
    var oA1 = document.getElementById('left');
    var oA2 = document.getElementById('right');
    var oImg = document.getElementById('picgroup');
    var arr1 = ['img/tt.jpg', 'img/bb.png'];
    var oKuang = document.getElementById('red');
    var arr2 = ['SAY', 'IT'];
    var oH2 = document.getElementById('title');
    var arr3 = ['Wonderful presents', 'Colorful'];
    var oP = document.getElementById('pp');
    var arr4 = ['From the original religious festival, development became a global festival.', 'Some have evolved on the basis of religious culture to become a more colorful Christmas religious culture. Some are secularized, commercialized and even politicized.'];
    var oCg = document.getElementById('cg');
    var oCir1 = document.getElementById('circle1');
    var oCir2 = document.getElementById('circle2');
    var oCir3 = document.getElementById('circle3');
    var oId = document.getElementById('id');
    var oPre = document.getElementById('pre');
    var oPad = document.getElementById('pad');
    var oRing = document.getElementById('ring');
    var oAct = document.getElementById('active');
    var oTop = document.getElementById('top');
    var oBigball = document.getElementById('bigball');

    var num = 0;
    oBigball.timer = null;

    function revert() {
        oImg.src = arr1[num];
        oKuang.innerHTML = arr2[num];
        oH2.innerHTML = arr3[num];
        oP.innerHTML = arr4[num];
    }; revert();
    oA1.onclick = function () {
        num--;
        if (num == -1) {
            num = arr1.length - 1;
        } revert();
    };
    oA2.onclick = function () {
        num++;
        if (num == arr1.length) {
            num = 0;
        } revert();
    };
    oBigball.onclick = function () {
        clearInterval(oBigball.timer);
        timer = setInterval(function () {
            var speed = parseInt(getStyle(oBigball, 'left')) + 5;
            oBigball.style.left = speed + 'px';

            if (speed == 550) {
                clearInterval(timer);
            }
        }, 30);
    }
    function getStyle(obj, attr) { return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; }
};
