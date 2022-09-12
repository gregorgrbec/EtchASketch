// Creating grid
field = document.createElement("div");
field.classList.add("field");
let f;

for (let i = 0; i < 16 * 16; i++) {
  f = field.cloneNode(true);
  document.querySelector(".grid").appendChild(f);
}

// Adding hovering event listener
fields = document.querySelectorAll(".field");
fields.forEach((fld) => {
  fld.addEventListener("mouseover", () => {
    fld.style.backgroundColor = "black";
  });
});

// When slider changes value
sld = document.querySelector("input");
sld_val = document.querySelector(".slider-value");
dim = ["16x16", "24x24", "32x32", "40x40"];

sld.oninput = function () {
  grd = document.querySelector(".grid");
  sld_val.textContent = dim[this.value - 1]; // Changing displayed value

  // Creating new grid
  if (this.value == 1) x = 16;
  else if (this.value == 2) x = 24;
  else if (this.value == 3) x = 32;
  else if (this.value == 4) x = 40;

  field = document.createElement("div");
  field.classList.add("field");

  while (grd.firstChild) {
    grd.removeChild(grd.lastChild);
  }

  //   grd = document.querySelector(".grid");
  grd.style = `grid-template-columns: repeat(${x}, 1fr)`;

  for (let i = 0; i < x * x; i++) {
    f = field.cloneNode(true);
    grd.appendChild(f);
  }

  // Finding which mode is currently active
  btns = document.querySelectorAll("button");
  btns.forEach((btn) => {
    if (btn.style.backgroundColor == "lightgray") {
      btn.click();
    }
  });
};

// Random color function
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Rainbow button
rbtn = document.querySelector(".rainbow-btn");
rbtn.addEventListener("click", () => {
  toggle(rbtn);
  fields = document.querySelectorAll(".field");
  fields.forEach((fld) => {
    fld.addEventListener("mouseover", () => {
      fld.style.backgroundColor = getRandomColor();
    });
  });
});

// Normal button
nbtn = document.querySelector(".nrm-btn");
nbtn.addEventListener("click", () => {
  toggle(nbtn);
  fields = document.querySelectorAll(".field");
  fields.forEach((fld) => {
    fld.addEventListener("mouseover", () => {
      fld.style.backgroundColor = "black";
    });
  });
});

// Eraser button
ebtn = document.querySelector(".eraser-btn");
ebtn.addEventListener("click", () => {
  toggle(ebtn);
  fields = document.querySelectorAll(".field");
  fields.forEach((fld) => {
    fld.addEventListener("mouseover", () => {
      fld.style.backgroundColor = "white";
    });
  });
});

// Clear button
cbtn = document.querySelector(".clear-btn");
cbtn.addEventListener("click", () => {
  toggle(cbtn);
  fields = document.querySelectorAll(".field");
  fields.forEach((fld) => {
    fld.style.backgroundColor = "white";
  });
});

// Toggle buttons
toggle = function (btn) {
  if (btn === document.querySelector(".eraser-btn")) {
    document.querySelector(".eraser-btn").style.backgroundColor = "lightgray";
    document.querySelector(".nrm-btn").style.backgroundColor = "white";
    document.querySelector(".rainbow-btn").style.backgroundColor = "white";
  } else if (btn === document.querySelector(".nrm-btn")) {
    document.querySelector(".eraser-btn").style.backgroundColor = "white";
    document.querySelector(".nrm-btn").style.backgroundColor = "lightgray";
    document.querySelector(".rainbow-btn").style.backgroundColor = "white";
  } else if (btn === document.querySelector(".rainbow-btn")) {
    document.querySelector(".eraser-btn").style.backgroundColor = "white";
    document.querySelector(".nrm-btn").style.backgroundColor = "white";
    document.querySelector(".rainbow-btn").style.backgroundColor = "lightgray";
  }
};
