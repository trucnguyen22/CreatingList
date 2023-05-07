const Button = document.getElementById("InputButton");
const Text = document.getElementById("TextInput");
const List = document.getElementById("List");

Button.addEventListener("click", () => {
  const li = document.createElement("li");
  const libutton = document.createElement("button");

  libutton.textContent = "Delete";
  li.textContent = Text.value;

  libutton.addEventListener("click", () => {
    li.remove();
  });

  li.append(libutton);
  List.append(li);

  Text.value = "";
  console.log(List);
});

window.addEventListener("beforeunload", function (e) {
  localStorage.setItem("StoredList", List.innerHTML);
});

window.addEventListener("load", () => {
  const NewList = localStorage.getItem("StoredList");
  if (NewList) {
    List.innerHTML = NewList;
    const ListItems = document.querySelectorAll("#List li");
    ListItems.forEach((Item) => {
      const libutton = Item.querySelector("button");
      libutton.addEventListener("click", () => {
        Item.remove();
      });
    });
  }
});
