(function() {

  var intervalHandle, resetPage, secondsRemaining, startCountdown, tick;

  secondsRemaining = void 0;

  intervalHandle = void 0;


  resetPage = function() {
    document.getElementById('inputArea').style.display = 'block';
    document.getElementById('minutes').value = ' ';
    return document.getElementById('time').style.color = 'white';
  };

  tick = function() {
    var message, min, sec, timeDisplay;

    timeDisplay = document.getElementById('time');
	respawnDisplay = document.getElementById('respawn');

    min = Math.floor(secondsRemaining / 60);
    sec = secondsRemaining - (min * 60);
 
    if (sec < 10) {
      sec = '0' + sec;
    }

    message = min.toString() + ':' + sec;
 
    timeDisplay.innerHTML = message;
 
    if (min < 1 && sec <= 10) {
      timeDisplay.style.color = 'red';
    }
	
	
    //stop if down to zero
    if (secondsRemaining === 0) {
      clearInterval(intervalHandle);
      resetPage();
      alert('OUH OUH OUH OUH');
    }

	//Timer War 29min
     if (secondsRemaining === 1750) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1745) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1740) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1739) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '28:40';
    }
	
	//Timer War 28.4min
     if (secondsRemaining === 1730) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1725) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1720) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1719) {
      timeDisplay.style.color = 'white'
	  respawnDisplay.innerHTML = '28:20';;
    }
	
	//Timer War 28.2
     if (secondsRemaining === 1710) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1705) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1700) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1699) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '28:00';
    }
	
	//Timer War 28
     if (secondsRemaining === 1690) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1685) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1680) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1679) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '27:40';
    }
	
	//Timer War 27.4
     if (secondsRemaining === 1670) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1665) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1660) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1659) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '27:20';
    }
	
	//Timer War 27.2
     if (secondsRemaining === 1650) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1645) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1640) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1639) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '27:00';
    }
	
	//Timer War 27
     if (secondsRemaining === 1630) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1625) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1620) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1619) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '26:40';
    }
	
	//Timer War 26.4
     if (secondsRemaining === 1610) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1605) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1600) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1599) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '26:20';
    }
	
	//Timer War 26.2
     if (secondsRemaining === 1590) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1585) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1580) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1579) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '26:00';
    }
	
	
	//Timer War 26
     if (secondsRemaining === 1570) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1565) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1560) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1559) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '25:40';
    }
	
	//Timer War 25.4
     if (secondsRemaining === 1550) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1545) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1540) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1539) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '25:20';
    }
	
	//Timer War 25.2
     if (secondsRemaining === 1530) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1525) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1520) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1519) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '24:50';
    }
	
	//Timer War 24.5
     if (secondsRemaining === 1500) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1495) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1490) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1489) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '24:24';
    }
	
	//Timer War 24.24
     if (secondsRemaining === 1474) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1469) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1464) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1463) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '23:56';
    }
	
	//Timer War 23.56
     if (secondsRemaining === 1446) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1441) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1436) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1435) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '23:28';
    }
	
	//Timer War 23.28
     if (secondsRemaining === 1418) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1413) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1408) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1407) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '23:00';
    }
	
	//Timer War 23
     if (secondsRemaining === 1390) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1385) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1380) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1379) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '22:30';
    }
	
	//Timer War 22.3
     if (secondsRemaining === 1360) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1355) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1350) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1349) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '22:00';
    }
	
	//Timer War 22
     if (secondsRemaining === 1330) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1325) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1320) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1319) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '21:30';
    }
	
	//Timer War 21.3
     if (secondsRemaining === 1300) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1295) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1290) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1289) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '21:08';
    }
	
	//Timer War 21.08
     if (secondsRemaining === 1278) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1273) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1268) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1267) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '20:38';
    }
	
	//Timer War 20.38
     if (secondsRemaining === 1248) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1243) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1238) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1237) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '20:10';
    }
	
	//Timer War 20.10
     if (secondsRemaining === 1220) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1215) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1210) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1209) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '19:50';
    }
	
	//Timer War 19.5
     if (secondsRemaining === 1200) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1195) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1190) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1185) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '19:07';
    }
	
	//Timer War 19.07
     if (secondsRemaining === 1157) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1152) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1147) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1146) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '18:30';
    }
	
	//Timer War 18.3
     if (secondsRemaining === 1120) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1115) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1110) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1109) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '18:00';
    }
	
	//Timer War 18
     if (secondsRemaining === 1090) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1085) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1080) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1079) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '17:20';
    }
	
	//Timer War 17,2
     if (secondsRemaining === 1050) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1045) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1040) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1039) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '16:43';
    }
	
	
	//Timer War 16.43
     if (secondsRemaining === 1013) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 1008) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 1003) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 1002) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '16:07';
    }
	
	//Timer War 16.07
     if (secondsRemaining === 977) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 972) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 967) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 966) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '15:30';
    }
	
	//Timer War 15.3
     if (secondsRemaining === 940) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 935) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 930) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 929) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '14:55';
    }
	
	//Timer War 14.55
     if (secondsRemaining === 905) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 900) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 895) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 894) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '14:20';
    }
	
	//Timer War 14.2
     if (secondsRemaining === 870) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 865) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 860) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 859) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '13:51';
    }
	
	//Timer War 13.51
     if (secondsRemaining === 841) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 836) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 831) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 830) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '13:35';
    }
	
	//Timer War 1335
     if (secondsRemaining === 825) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 820) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 815) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 814) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '12:50';
    }
	
	//Timer War 1250
     if (secondsRemaining === 780) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 775) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 770) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 769) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '12:06';
    }
	
	//Timer War 1206
     if (secondsRemaining === 736) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 731) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 726) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 724) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '11:24';
    }
	
	//Timer War 1124
     if (secondsRemaining === 694) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 689) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 684) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 683) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '10:40';
    }
	
	//Timer War 1040
     if (secondsRemaining === 650) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 645) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 640) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 639) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '09:55';
    }
	
	//Timer War 955
     if (secondsRemaining === 605) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 600) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 595) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 594) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '09:10';
    }
	
	//Timer War 9 10
     if (secondsRemaining === 560) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 555) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 550) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 549) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '08:19';
    }
	
	//Timer War 8 19
     if (secondsRemaining === 509) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 504) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 499) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 498) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '07:27';
    }
	
	
	//Timer War 7 27
     if (secondsRemaining === 457) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 452) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 447) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 446) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '06:34';
    }
	
	//Timer War 6 34
     if (secondsRemaining === 404) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 399) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 394) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 393) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '05:44';
    }
	
	//Timer War 5 44
     if (secondsRemaining === 354) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 349) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 344) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 343) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '04:50';
    }
	
	//Timer War 4 50
     if (secondsRemaining === 300) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 295) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 290) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 289) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '03:50';
    }
	
	//Timer War 4 50
     if (secondsRemaining === 240) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 235) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 230) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 229) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '02:50';
    }
	
	//Timer War 2 50
     if (secondsRemaining === 180) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 175) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 170) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 169) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '01:50';
    }
	
	//Timer War 1 50
     if (secondsRemaining === 120) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 115) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 110) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 109) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = '00:50';
    }
	
		//Timer War 0 50
     if (secondsRemaining === 60) {
      timeDisplay.style.color = 'red';
	  document.getElementById('respawn10').play();
    }
	 if (secondsRemaining === 55) {
      timeDisplay.style.color = 'orange';
    }
	 if (secondsRemaining === 50) {
      timeDisplay.style.color = 'green';
	  
    }
	 if (secondsRemaining === 49) {
      timeDisplay.style.color = 'white';
	  respawnDisplay.innerHTML = 'OUH OUH OUH';
    }
	

    return secondsRemaining--;
  };

  startCountdown = function() {
    var minutes;

    minutes = document.getElementById('minutes').value;

    if (isNaN(minutes)) {
      alert('Uniquement les minutes!');
    }

    secondsRemaining = minutes * 60;
  
    intervalHandle = setInterval(tick, 1000);
 
    return document.getElementById('inputArea').style.display = 'none';
  };

  window.onload = function() {
    var inputMinutesThink, startButton;

    inputMinutesThink = document.createElement('input');
    inputMinutesThink.setAttribute('id', 'minutes');
    inputMinutesThink.setAttribute('type', 'text');
    inputMinutesThink.setAttribute('value', '31');	  

    startButton = document.createElement('input');
    startButton.setAttribute('type', 'button');
    startButton.setAttribute('id', 'start');
    startButton.setAttribute('value', 'START');

    startButton.onclick = function() {
      return startCountdown();
    };

    document.getElementById('inputArea').appendChild(inputMinutesThink);
    return document.getElementById('inputArea').appendChild(startButton);
  };



}).call(this);

