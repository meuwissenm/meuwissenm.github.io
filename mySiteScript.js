document.getElementById("showScreenshot").onclick = function() {
    document.getElementById("silcAdminImage").style.visibility = "visible";
        document.getElementById("silcAdminImage").style.width = "100%";
                    document.getElementById("showScreenshot").style.visibility = "hidden";
                     document.getElementById("plusSignProg").style.width = "0%";

}
document.getElementById("silcAdminImage").onclick = function() {
    document.getElementById("silcAdminImage").style.visibility = "hidden";
        document.getElementById("silcAdminImage").style.width = "0%";
            document.getElementById("showScreenshot").style.visibility = "visible";
            document.getElementById("plusSignProg").style.width = "3%";

}
document.getElementById("showScreenshotHandoff").onclick = function() {
    document.getElementById("HandoffScreenshot").style.visibility = "visible";
        document.getElementById("HandoffScreenshot").style.width = "100%";
              document.getElementById("showScreenshotHandoff").style.visibility = "hidden";
                  document.getElementById("plusSignProgTwo").style.width = "0%";

}
document.getElementById("HandoffScreenshot").onclick = function() {
    document.getElementById("HandoffScreenshot").style.visibility = "hidden";
        document.getElementById("HandoffScreenshot").style.width = "0%";
              document.getElementById("showScreenshotHandoff").style.visibility = "visible";
                 document.getElementById("plusSignProgTwo").style.width = "3%";

}

