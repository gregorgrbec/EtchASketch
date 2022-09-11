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
    fld.style.backgroundColor = "gray";
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
  console.log(grd);

  for (let i = 0; i < x * x; i++) {
    f = field.cloneNode(true);
    grd.appendChild(f);
  }

  fields = document.querySelectorAll(".field");
  fields.forEach((fld) => {
    fld.addEventListener("mouseover", () => {
      fld.style.backgroundColor = "gray";
    });
  });

  //   document.querySelector(".grid").style.gridTemplateColumns = repeat(16, 1fr);
};
