function pageResponseNav()
{
    // Obtains element called "navbar"
    var element = document.getElementById("navbar");
    if (element.className == "navbar")
    {
        element.className += " responsive";
    }
    else
    {
        element.className = "navbar";
    }
}