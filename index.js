
var isDark = false;

$(".toggle-theme").on("click", function (){
    if(isDark){
    $("body").addClass("background-dark")
    $(".toggle-theme").addClass("toggle-theme-dark")
    $(".toggle-theme").removeClass("toggle-theme-light")

    } else {
        $("body").removeClass("background-dark")
         $(".toggle-theme").removeClass("toggle-theme-dark")
        $(".toggle-theme").addClass("toggle-theme-light")

    }
    isDark = !isDark
})
// TODO: Add event listener for theme change button

// TODO: Add jQuery code for highlighting list items

// TODO: Add code for reset button

// TODO: Add code for adding new list items from form
