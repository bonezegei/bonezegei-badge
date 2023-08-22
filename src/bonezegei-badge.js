/*
    Simple Text Badge with SVG
    Repository: bonezegei-badge 
    Author: Jofel Batutay (Bonezegei)
    Date : August 2023
*/
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
