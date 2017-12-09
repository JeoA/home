
        window.onload = function () {
            var oPica = document.getElementById('pica');
            var oPica1 = document.getElementById('pica1');
            var oPica2 = document.getElementById('pica2');
            var oPica3 = document.getElementById('pica3');
            var oBox1 = document.getElementById('box1');
            var oBox2 = document.getElementById('box2');
            var oBox3 = document.getElementById('box3');
            var arr1 = ['img/icon_camera_fill.png', 'img/icon_conference(1).png', 'img/icon_notice_fill.png'];
            var arr2 = ['img/icon_camera_fill (1).png', 'img/icon_conference.png', 'img/icon_notice_fill (1)(1).png'];
            var oPicj = document.getElementById('arrow');
            var oLO = document.getElementById('LO');
            var oVY = document.getElementById('VY');
            var oVO = document.getElementById('VO');
            var oBox4 = document.getElementById('box4');
            var oDivB = document.getElementById('divB');
            var oTo = document.getElementById('to');
            var oFind = document.getElementById('find');
            var oOne = document.getElementById('one');
            var oAchieve = document.getElementById('achieve');
            var oIt = document.getElementById('it');
            var oBtn = document.getElementById('btn');
            var oAle = document.getElementById('alert');
            var oMC = document.getElementById('alert-title');
            var oTextA = document.getElementById('textarea');
            var oBoxx1 = document.getElementById('boxx1');
            var oCheck = document.getElementById('checkbox');
            var oAB = document.getElementById('Additionalbox');
            var oFly = document.getElementById('fly');
            var oBack = document.getElementById('back');
            var oAddition = document.getElementById('addition');
            var oMore = document.getElementById('moreonload');
            var apic = document.getElementsByTagName('puke');
            var oHidden = document.getElementById('hidden');            
            num = 0;

            function p1() {
                oPica1.src = arr1[0];
            }; p1();
            function p2() {
                oPica2.src = arr1[1];
            }; p2();
            function p3() {
                oPica3.src = arr1[2];
            }; p3();

            oPica1.onmouseover = function () {
                oPica1.src = arr2[0];
            };
            oPica1.onmouseout = function () {
                oPica1.src = arr1[0];
            };
            oPica2.onmouseover = function () {
                oPica2.src = arr2[1];
            };
            oPica2.onmouseout = function () {
                oPica2.src = arr1[1];
            };
            oPica3.onmouseover = function () {
                oPica3.src = arr2[2];
            };
            oPica3.onmouseout = function () {
                oPica3.src = arr1[2];
            };


            oLO.onclick = function () {
                oBox2.style.zIndex = "5";
                oBox1.style.zIndex = "1";
                oBox3.style.zIndex = "1";
                oBox4.style.zIndex = "1";
            };
            oVY.onclick = function () {
                oBox3.style.zIndex = "5";
                oBox1.style.zIndex = "1";
                oBox2.style.zIndex = "1";
                oBox4.style.zIndex = "1";

            };

            oVO.onclick = function () {
                oBox4.style.zIndex = "5";
                oBox1.style.zIndex = "1";
                oBox3.style.zIndex = "1";
                oBox2.style.zIndex = "1";
            };
            oBtn.onclick = function () {
                oAle.style.display = "none";
            };
            oCheck.onclick = function () {
                oAB.innerHTML = document.getElementById('textarea').value;
                oAB.style.opacity = 1;
                oTextA.style.opacity = 0;
                oFly.style.display = 'block';
            };
            oBack.onclick = function () {
                oAB.style.opacity = 0;
                oFly.style.display = 'none';
                oTextA.style.opacity = 1;
                oTextA.innerHTML = '';
            };
            oMore.onclick = function () {
                
                oAddition.style.opacity = 0.8;
                
            };
        
            oHidden.onclick = function(){
                oAddition.style.opacity = 0;
            };
        };
            