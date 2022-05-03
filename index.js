function imageGallery(){
	const highlight = document.querySelector(".room-highlight");
	const previews = document.querySelectorAll(".room-preview img");

    console.log(highlight);
    console.log(previews);
	previews.forEach(preview => {
		preview.addEventListener("click",function(){
			// console.log(this);
			highlight.src = this.src;
			previews.forEach(preview => preview.classList.remove('room-active'));
			preview.classList.add("room-active");
			console.log(preview.classList);
		});
	});
}

imageGallery();