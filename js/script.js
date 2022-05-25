let currentPage = 1;
let itemsPerPage = 10;

//Select list items and create an array from these:
let list = document.querySelectorAll("li");
let newArr = Array.from(list);

// Create buttons depending on number of array length and max items per page
let totalNumberOfPages = Math.ceil(newArr.length / itemsPerPage);
let buttonDiv = document.getElementsByClassName("pagination")[0];
buttonDiv.innerHTML += "<ul>";
for (let i = 0; i < totalNumberOfPages; i++) {
	buttonDiv.innerHTML +=
		"<li><a href='#' class='pageNumbers'><span data-pagination='pageNumber'>" +
		(i + 1) +
		"</span></a></li>";
}
buttonDiv.innerHTML += "</ul>";

buttonDiv.addEventListener("click", onDocumentClick, false);

//Set a first view of item on the first page when website loads
let ul = document.getElementsByClassName("contact-list")[0];
ul.innerHTML = "";
window.onload = function () {
	let firstPageElements = newArr.slice(currentPage - 1, itemsPerPage);
	for (let i = 0; i < firstPageElements.length; i++) {
		ul.appendChild(firstPageElements[i]);
	}
};

//When a button is clicked, a new page number is selected and it shows the items of that page
function onDocumentClick(event) {
	ul.innerHTML = "";
	currentPage = Number(event.target.innerText);
	let slicedArr = newArr.slice(
		itemsPerPage * (currentPage - 1),
		itemsPerPage * currentPage
	);
	for (let i = 0; i < slicedArr.length; i++) {
		ul.appendChild(slicedArr[i]);
	}
}
