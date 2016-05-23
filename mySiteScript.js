document.getElementById("showScreenshot").onclick = function() {
    document.getElementById("silcAdminImage").style.visibility = "visible";
        document.getElementById("silcAdminImage").style.width = "100%";
                    document.getElementById("showScreenshot").style.visibility = "hidden";

}
document.getElementById("silcAdminImage").onclick = function() {
    document.getElementById("silcAdminImage").style.visibility = "hidden";
        document.getElementById("silcAdminImage").style.width = "0%";
            document.getElementById("showScreenshot").style.visibility = "visible";

}


