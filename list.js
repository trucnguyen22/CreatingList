let listItems = Array.from(document.querySelectorAll("#my-list li"));

if (localStorage.getItem("listItems")) {
  listItems = JSON.parse(localStorage.getItem("listItems"));
}

// Lưu trữ mảng vào LocalStorage khi reload lại trang
window.addEventListener("beforeunload", () => {
  localStorage.setItem("listItems", JSON.stringify(listItems));
});
