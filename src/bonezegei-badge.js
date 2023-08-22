/*
    Simple Text Badge with SVG
    Repository: bonezegei-badge 
    Author: Jofel Batutay (Bonezegei)
    Date : August 2023
*/
const badgePaddingX = 10.0;

function getSimpleTextWidth(str) {
  var svg =
    '<svg  id="dummysvg" xmlns="http://www.w3.org/2000/svg" width="200" height="20"><style>.small {font: bold 12px sans-serif;} </style><g><text class="small" id="dummytext" fill="white">Sample</text></g></svg>';
  document.write(svg);
  document.getElementById("dummysvg").style.display = "block";
  var text = document.getElementById("dummytext");
  text.textContent = str;
  var bbox = text.getBBox();
  var width = bbox.width;
  document.getElementById("dummysvg").remove();
  return width;
}

function getDataSimpleText(stringText, color, id) {
  var w = getSimpleTextWidth(stringText) + 20;
  var svg = '<svg  id="svg';
  svg += id;
  svg +='" xmlns="http://www.w3.org/2000/svg" width="' + w + 'px" height="20">';
  svg += "<style> .small { font: bold 12px sans-serif;} </style>";
  svg += "<g>";
  svg += '<rect x="0" width="100%" height="20px" rx="3" fill="blue" id="rect';
  svg += id;
  svg += '"/>';
  svg += '<text x="10px" y="14px" class="small" id="text';
  svg += id;
  svg += '" fill="white">Sample</text>';
  svg += "</g>";
  return svg;
}

function getSVGSimpleText(stringText, color, id) {
  document.write(getDataSimpleText(stringText, color, id));
  var textID = "text" + id;
  var text = document.getElementById(textID);
  text.textContent = stringText;
  var bbox = text.getBBox();
  var width = bbox.width;
  var rectID = "rect" + id;
  var rect = document.getElementById(rectID);
  rect.style.width = 20 + width + "px";
  rect.style.fill = color;
  var svgID = "svg" + id;
  document.getElementById(svgID).style.width = 20 + width + "px";

  document.write("</svg>");
  //document.getElementById(id).style.width = 20 + width + "px";
}

function badgeSimpleText(stringText, color, id) {
  getSVGSimpleText(stringText, color, id);
  var svg = "svg" + id;
  document.getElementById(svg).style.display = "none";
  var src = "data:image/svg+xml;utf8,";
  src += new XMLSerializer().serializeToString(document.getElementById(svg));
  document.getElementById(id).src = src;
  document.getElementById(svg).remove();
}


/*Double Text */
/**********************************************************************************************/
var lenStr1 = 0;
var lenStr2 = 0;

function getDoubleTextWidth(str1, str2) {
  var totalWidth = 0;

  var svg =
    '<svg  id="dummysvg" xmlns="http://www.w3.org/2000/svg" width="2000" height="20"><style>.small {font: bold 12px sans-serif;} </style><g>';
  svg += '<text class="small" id="dummytext1" fill="white">' + str1 + "</text>";
  svg +=
    '<text class="small" id="dummytext2" fill="white">' +
    str2 +
    "</text></g></svg>";
  document.write(svg);

  var text1 = document.getElementById("dummytext1");
  var bbox1 = text1.getBBox();
  var width1 = bbox1.width;
  lenStr1 = width1;

  var text2 = document.getElementById("dummytext2");
  var bbox2 = text2.getBBox();
  var width2 = bbox2.width;
  lenStr2 = width2;

  totalWidth = width1 + width2;
  document.getElementById("dummysvg").remove();

  return totalWidth;
}

function getDataDoubleText(stringText1, stringText2, color1, color2, id) {
  var w = getDoubleTextWidth(stringText1, stringText2) + 2 * badgePaddingX;
  var svg = '<svg  id="svg';
  svg += id;
  svg +=
    '" xmlns="http://www.w3.org/2000/svg" width="' + w + 'px" height="20">';
  svg += "<style> .small { font: bold 12px sans-serif;} </style>";
  svg += "<g>";
  svg += '<rect x="0" width="100%" height="20px" rx="3" fill="blue" id="rect1';
  svg += id;
  svg += '"/>';
  svg += '<rect x="0" width="100%" height="20px" rx="3" fill="blue" id="rect2';
  svg += id;
  svg += '"/>';
  svg += '<rect x="0" width="100%" height="20px"  fill="blue" id="rect3';
  svg += id;
  svg += '"/>';
  svg += '<text x="5px" y="14px" class="small" id="text1';
  svg += id;
  svg += '" fill="white">Sample</text>';
  svg += '<text x="70px" y="14px" class="small" id="text2';
  svg += id;
  svg += '" fill="white">Sample</text>';
  svg += "</g>";
  return svg;
}

function getSVGDoubleText(stringText1, stringText2, color1, color2, id) {
  document.write(
    getDataDoubleText(stringText1, stringText2, color1, color2, id)
  );

  var textID1 = "text1" + id;
  var text1 = document.getElementById(textID1);
  text1.textContent = stringText1;
  var bbox1 = text1.getBBox();
  var width1 = bbox1.width;
  var rectID1 = "rect1" + id;
  var rect1 = document.getElementById(rectID1);
  rect1.style.width = badgePaddingX + width1;
  rect1.style.fill = color1;

  var textID2 = "text2" + id;
  var text2 = document.getElementById(textID2);
  text2.textContent = stringText2;
  text2.setAttribute("x", lenStr1 + badgePaddingX + 3);
  var bbox2 = text2.getBBox();
  var width2 = bbox2.width;
  var rectID2 = "rect2" + id;
  var rect2 = document.getElementById(rectID2);
  rect2.style.width = badgePaddingX + width2 + "px";
  rect2.style.fill = color2;
  rect2.setAttribute("x", lenStr1 + badgePaddingX - 2);

  var rectID3 = "rect3" + id;
  var rect3 = document.getElementById(rectID3);
  rect3.style.width = "4px";
  rect3.setAttribute("x", lenStr1 + badgePaddingX - 3);
  rect3.style.fill = color2;
  document.write("</svg>");
}

function badgeDoubleText(stringText1, stringText2, color1, color2, id) {
  getSVGDoubleText(stringText1, stringText2, color1, color2, id);
  var svg = "svg" + id;
  document.getElementById(svg).style.display = "none";
  var src = "data:image/svg+xml;utf8,";
  src += new XMLSerializer().serializeToString(document.getElementById(svg));
  document.getElementById(id).src = src;
  document.getElementById(svg).remove();
}


