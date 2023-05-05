const Button = document.getElementById("InputButton");
const Text = document.getElementById("TextInput");
const List = document.getElementById("List");
let Count = 1;

Button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = Text.value;
  li.dataset.key = Count;
  ++Count;

  List.append(li);

  Text.value = "";
});
