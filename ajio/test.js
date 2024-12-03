function compare() {
  let e1 = document.getElementById("uname");
  let e2 = document.getElementById("uname2");
  var ee1 = e1.value;
  var ee2 = e2.value;
  localStorage.setItem("Name1", ee1);
  localStorage.setItem("Name2", ee2);
}
