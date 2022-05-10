			var volbtn = document.getElementById("volbtn");

			var audio = document.getElementById("respawn10");

			var valume_value = document.getElementById("volume_value");

			// Volume Controler ...................................

			function volume(val) {
				var av = audio.volume = val / 100;
				// console.log(av);

				valume_value.innerHTML = val;


				if(av == 0.0) {
					// console.log(av);
					// console.log("Silent");
					// volbtn.classList.toggle("volume-mute");
				}
				else if(av <= 0.5){
					// console.log("Medium");
					// volbtn.classList.toggle("volume-down");
				}
				else{
					// 1.0
					// console.log("High");
					// volbtn.classList.toggle("volume-up");
				}
			}