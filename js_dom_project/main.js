// Funktion för "Change Bg" knappen. 
function change_bg()
{
    // Gör bakgrunds färgen på sidan till en variabel för att korta ner raden.
    let color = document.body.style.backgroundColor;

    // Ifall bakgrunden på sidan är en färg byter den till en annan. || = or operator. 
    if(color == "white" || color == "")
    {
        document.body.style.backgroundColor = "green";
    }
    else if(color == "green")
    {
        document.body.style.backgroundColor = "orange";
    }
    else if(color == "orange")
    {
        document.body.style.backgroundColor = "blue";
    }
    else if(color == "blue")
    {
        document.body.style.backgroundColor = "red";
    }
    else
    {
        document.body.style.backgroundColor = "white";
    }
    
}

// Funktion för "Good vibes" knappen. 
function good_vibes()
{
    // För att korta ner. 
    let vibes = document.getElementById("vibes").style.visibility;

    // Ifall viber är lika med ingenting (för den börjar på det) eller är lika med hidden ändrar den visibility. 
    if(vibes == "" || vibes == "hidden")
    {
        // .getElementById för att att få objektet genom Id. 
        document.getElementById("vibes").style.visibility = "visible";
    }
    else
    {
        document.getElementById("vibes").style.visibility = "hidden";
    }
}

// Funktion för "Time" knappen. 
function time()
{
    // Ger en variabel värdet Date() vilket är inbyggt i Js och kollar på din dators tid. 
    let date = Date();
    
    // Ändrar innehållet i h3 taggen med id "time" till datumet. 
    document.getElementById("time").innerHTML = date;

    // För att korta ner. 
    let time_visibility = document.getElementById("time").style.visibility;

    // För att ändra synlighet. 
    if(time_visibility == "hidden" || time_visibility == "")
    {
        document.getElementById("time").style.visibility = "visible"
    }
    else
    {
        document.getElementById("time").style.visibility = "hidden"
    }
}

// Funktion för "Change picture" knappen.
function change_picture()
{
    // För att korta ner, .src tar källan från bilden. 
    let img = document.getElementById("image").src;

    // Ifall bildkällan slutar på "" byter den bildkällan. .endsWith kollar på slutet av pathen av vart bilden ligger på din dator
    if(img.endsWith("img/1.png"))
    {
        document.getElementById("image").src = "img/2.png";
    }
    else if(img.endsWith("img/2.png")) 
    {
        document.getElementById("image").src = "img/3.png";
    }
    else if(img.endsWith("img/3.png"))
    {
        document.getElementById("image").src = "img/4.png";
    }
    else if(img.endsWith("img/4.png"))
    {
        document.getElementById("image").src = "img/5.png";
    }
    else if(img.endsWith("img/5.png"))
    {
        document.getElementById("image").src = "img/6.png";
    }
    else
    {
        document.getElementById("image").src = "img/1.png";
    }
}

// Funktion för "Hide picture" knappen. 
function hide_picture()
{
    // Ändrar visibility
    document.getElementById("image").style.visibility = "hidden";
}

// Funktion för "Show picture" knappen.
function show_picture()
{
    // Ändrar visibility
    document.getElementById("image").style.visibility = "visible";
}

// Funktion för "Header" knappen.
function header()
{
    // Ändrar på olika attributes på elementen. 

    // Ändrar bakgrundsfärg
    document.getElementById("header").style.backgroundColor = "gray";
    // Ändrar position till center
    document.getElementById("header").style.alignItems = "center";
    // Ändrar visibility
    document.getElementById("vibes").style.visibility = "visible";
    // Ändrar färgen på texten
    document.getElementById("vibes").style.color = "white";
    // Ändrar visibility
    document.getElementById("time").style.visibility = "visible";
    // Ändrar Datumet/tiden till den nuvarande
    document.getElementById("time").innerHTML = Date();
    // Ändrar färg på texten
    document.getElementById("time").style.color = "white";
    // Lägger till en border runt bilden
    document.getElementById("image").style.border = "1vw solid green";
}

// Funktion för "Remove Header" knappen.
function remove_header()
{
    // Ändrar allt till visibility = hidden
    document.getElementById("header").style.visibility = "hidden";
    document.getElementById("vibes").style.visibility = "hidden";
    document.getElementById("time").style.visibility = "hidden";
    document.getElementById("image").style.visibility = "hidden";
}

// Funktion för "Show header" knappen.
function show_header()
{
    // Ändrar allt till visibility = visible
    document.getElementById("header").style.visibility = "visible";
    document.getElementById("vibes").style.visibility = "visible";
    document.getElementById("time").style.visibility = "visible";
    document.getElementById("image").style.visibility = "visible";
    // Lägger till en text längst ner på sidan. 
    document.getElementById("thanks").innerHTML = "Thank you for visiting my website"
}

