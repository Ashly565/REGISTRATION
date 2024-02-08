$(document).ready(function(){
    $("#user").blur(function(){
        var text=$(this).val()
        if(text.length<5)
        {
            $("#usererror").show()

        }
        else{
            $("#usererror").hide()
        }
})

$("#pass").blur(function(){
        var text=$(this).val()
        if(text.length<8)
        {
            $("#passerror").show()

        }
        else{
            $("#passerror").hide()
        }
})

$("#cpass").blur(function(){
    var text=$(this).val()
    if(text.length<8)
    {
        $("#cpasserror").show()

    }
    else{
        $("#cpasserror").hide()
    }
})

$("#num").blur(function(){
    var text=$(this).val()
    if(text.length<10)
    {
        $("#numerror").show()

    }
    else{
        $("#numerror").hide()
    }
})


$("#email").blur(function(){
    var text=$(this).val()
    if(text.length<1)
    {
        $("#Eerror").show()

    }
    else{
        $("#Eerror").hide()
    }
})

})