	function zoomIn(event) {
    event.target.style.width = "580px";
    event.target.style.height = "400px";
    event.target.style.transition = "all 0.5s";
	}
	function zoomOut(event) {
    event.target.style.width = "320px";
    event.target.style.height = "240px";
    event.target.style.transition = "all 0.5s";
 	 }
	function over(obj) {
		obj.src="media/3printer2.jpg";
	}
	function out(obj) {
		obj.src="media/3printer.png";
	}
