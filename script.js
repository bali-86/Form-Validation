"use strict";
const dataform = document.querySelector(".data-form");
const startDate = document.querySelector("#s-date");
const endDate = document.querySelector("#e-date");
const dobDate = document.querySelector("#dob");
const fName = document.querySelector("#name");
const arr = [];

dataform.addEventListener("submit", function () {
  //   e.preventDefault();
  if (startDate.value > endDate.value) {
    alert("wrong");
  }
  arr.push({ name: `${fName.value}` });
  arr.push({ dob: `${dobDate.value}` });
  arr.push({ startDate: `${startDate.value}` });
  arr.push({ endDate: `${endDate.value}` });
  localStorage.setItem("formsub", JSON.stringify(arr));
});

const input = document.getElementById("file");
const link = document.getElementById("link");
let objectURL;

input.addEventListener("change", function () {
  if (objectURL) {
    URL.revokeObjectURL(objectURL);
  }

  const fil = this.files[0];
  objectURL = URL.createObjectURL(fil);

  link.download = fil.name;
  link.href = objectURL;
});
