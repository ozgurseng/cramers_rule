//
// Author   : @ozgurseng | https://github.com/ozgurseng
// Date     : 08.03.2023 V.1.0.0
// Copyright: EN: Do not forget to cite the source. | TR:Kaynak göstermeyi unutmayınız.
//

function ozgurCalculate() {
  //Denklem verilerimizi oluşturalım
  //1. Denklem tanımlaması yapılıyor
  x1 = document.getElementById("x1").value * 1;
  y1 = document.getElementById("y1").value * 1;
  z1 = document.getElementById("z1").value * 1;
  s1 = document.getElementById("s1").value * 1;

  //2. Denklem tanımlaması yapılıyor
  x2 = document.getElementById("x2").value * 1;
  y2 = document.getElementById("y2").value * 1;
  z2 = document.getElementById("z2").value * 1;
  s2 = document.getElementById("s2").value * 1;

  //3. Denklem tanımlaması yapılıyor
  x3 = document.getElementById("x3").value * 1;
  y3 = document.getElementById("y3").value * 1;
  z3 = document.getElementById("z3").value * 1;
  s3 = document.getElementById("s3").value * 1;

  if (y1 < 0) {
    y1_veri = y1;
  } else {
    y1_veri = "+" + y1;
  }
  if (z1 < 0) {
    z1_veri = z1;
  } else {
    z1_veri = "+" + z1;
  }

  if (y2 < 0) {
    y2_veri = y2;
  } else {
    y2_veri = "+" + y2;
  }
  if (z2 < 0) {
    z2_veri = z2;
  } else {
    z2_veri = "+" + z2;
  }

  if (y3 < 0) {
    y3_veri = y3;
  } else {
    y3_veri = "+" + y3;
  }
  if (z3 < 0) {
    z3_veri = z3;
  } else {
    z3_veri = "+" + z3;
  }

  denklem1 = document.getElementById("denklem1");
  denklem1.innerHTML = `${x1}x${y1_veri}y${z1_veri}z = ${s1}`;

  denklem2 = document.getElementById("denklem2");
  denklem2.innerHTML = `${x2}x${y2_veri}y${z2_veri}z = ${s2}`;

  denklem3 = document.getElementById("denklem3");
  denklem3.innerHTML = `${x3}x${y3_veri}y${z3_veri}z = ${s3}`;

  document.getElementById("x1_").innerHTML = `${x1}`;
  document.getElementById("y1_").innerHTML = `${y1}`;
  document.getElementById("z1_").innerHTML = `${z1}`;
  document.getElementById("s1_").innerHTML = `${s1}`;
  document.getElementById("x2_").innerHTML = `${x2}`;
  document.getElementById("y2_").innerHTML = `${y2}`;
  document.getElementById("z2_").innerHTML = `${z2}`;
  document.getElementById("s2_").innerHTML = `${s2}`;

  document.getElementById("x3_").innerHTML = `${x3}`;
  document.getElementById("y3_").innerHTML = `${y3}`;
  document.getElementById("z3_").innerHTML = `${z3}`;
  document.getElementById("s3_").innerHTML = `${s3}`;

  document.getElementById(
    "matlabA"
  ).innerHTML = `[${x1},${y1},${z1};${x2},${y2},${z2};${x3},${y3},${z3}]`;

  //X MATRISI BULALIM
  document.getElementById("x_x1_").innerHTML = `${s1}`;
  document.getElementById("x_y1_").innerHTML = `${y1}`;
  document.getElementById("x_z1_").innerHTML = `${z1}`;
  document.getElementById("x_x2_").innerHTML = `${s2}`;
  document.getElementById("x_y2_").innerHTML = `${y2}`;
  document.getElementById("x_z2_").innerHTML = `${z2}`;
  document.getElementById("x_x3_").innerHTML = `${s3}`;
  document.getElementById("x_y3_").innerHTML = `${y3}`;
  document.getElementById("x_z3_").innerHTML = `${z3}`;

  document.getElementById(
    "matlabX"
  ).innerHTML = `[${s1},${y1},${z1};${s2},${y2},${z2};${s3},${y3},${z3}]`;

  //Y MATRISI BULALIM
  document.getElementById("y_x1_").innerHTML = `${x1}`;
  document.getElementById("y_y1_").innerHTML = `${s1}`;
  document.getElementById("y_z1_").innerHTML = `${z1}`;
  document.getElementById("y_x2_").innerHTML = `${x2}`;
  document.getElementById("y_y2_").innerHTML = `${s2}`;
  document.getElementById("y_z2_").innerHTML = `${z2}`;
  document.getElementById("y_x3_").innerHTML = `${x3}`;
  document.getElementById("y_y3_").innerHTML = `${s3}`;
  document.getElementById("y_z3_").innerHTML = `${z3}`;
  document.getElementById(
    "matlabY"
  ).innerHTML = `[${x1},${s1},${z1};${x2},${s2},${z2};${x3},${s3},${z3}]`;

  //Z MATRISI BULALIM
  document.getElementById("z_x1_").innerHTML = `${x1}`;
  document.getElementById("z_y1_").innerHTML = `${y1}`;
  document.getElementById("z_z1_").innerHTML = `${s1}`;
  document.getElementById("z_x2_").innerHTML = `${x2}`;
  document.getElementById("z_y2_").innerHTML = `${y2}`;
  document.getElementById("z_z2_").innerHTML = `${s2}`;
  document.getElementById("z_x3_").innerHTML = `${x3}`;
  document.getElementById("z_y3_").innerHTML = `${y3}`;
  document.getElementById("z_z3_").innerHTML = `${s3}`;
  document.getElementById(
    "matlabZ"
  ).innerHTML = `[${x1},${y1},${s1};${x2},${y2},${s2};${x3},${y3},${s3}]`;

  detA_yaz_1 = `${x1}[(${y2} * ${z3})-(${z2} * ${y3})] - ${x2}[(${y1} * ${z3})-(${z1} * ${y3})] + ${x3}[(${y1} * ${z2})-(${z1} * ${y2})]`;
  detA =
    x1 * [y2 * z3 - z2 * y3] -
    x2 * [y1 * z3 - z1 * y3] +
    x3 * [y1 * z2 - z1 * y2];

  //detX
  detX_yaz_1 = `${s1}[(${y2} * ${z3})-(${z2} * ${y3})] - ${s2}[(${y1} * ${z3})-(${z1} * ${y3})] + ${s3}[(${y1} * ${z2})-(${z1} * ${y2})]`;
  detX =
    s1 * [y2 * z3 - z2 * y3] -
    s2 * [y1 * z3 - z1 * y3] +
    s3 * [y1 * z2 - z1 * y2];

  //detY
  detY_yaz_1 = `${x1}[(${s2} * ${z3})-(${z2} * ${s3})] - ${x2}[(${s1} * ${z3})-(${z1} * ${s3})] + ${x3}[(${s1} * ${z2})-(${z1} * ${s2})]`;
  detY =
    x1 * [s2 * z3 - z2 * s3] -
    x2 * [s1 * z3 - z1 * s3] +
    x3 * [s1 * z2 - z1 * s2];

  //detZ
  detZ_yaz_1 = `${x1}[(${y2} * ${s3})-(${s2} * ${y3})] - ${x2}[(${y1} * ${s3})-(${s1} * ${y3})] + ${x3}[(${y1} * ${s2})-(${s1} * ${y2})]`;
  detZ =
    x1 * [y2 * s3 - s2 * y3] -
    x2 * [y1 * s3 - s1 * y3] +
    x3 * [y1 * s2 - s1 * y2];

  //detA = `${x1}[${y2 * z3 - z2 * y3}]`;

  document.getElementById("detA_yaz_1").innerHTML = `= ${detA_yaz_1}`;
  document.getElementById("detA_yaz").innerHTML = `= ${detA}`;

  document.getElementById("detX_yaz_1").innerHTML = `= ${detX_yaz_1}`;
  document.getElementById("detX_yaz").innerHTML = `= ${detX}`;
  document.getElementById("x_yaz").innerHTML = `= ${detX} / ${detA} <br> = ${
    detX / detA
  }`;

  document.getElementById("detY_yaz_1").innerHTML = `= ${detY_yaz_1}`;
  document.getElementById("detY_yaz").innerHTML = `= ${detY}`;
  document.getElementById("y_yaz").innerHTML = `= ${detY} / ${detA} <br> = ${
    detY / detA
  }`;
  document.getElementById("detZ_yaz_1").innerHTML = `= ${detZ_yaz_1}`;
  document.getElementById("detZ_yaz").innerHTML = `= ${detZ}`;
  document.getElementById("z_yaz").innerHTML = `= ${detZ} / ${detA} <br> = ${
    detZ / detA
  }`;
//@ozgurseng
}
//https://github.com/ozgurseng