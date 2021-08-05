//var baseurl = "https://localhost:44342/"

$('.btn').on("click", function () {
    var name = $('.name').text();
    var position = $('.position').text();
    console.log(position);

    $.ajax({
        type: "POST",
        url: "?handler=SaveInfo",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("XSRF-TOKEN", $('input:hidden[name="__RequestVerificationToken"]').val())
        },  
        data: JSON.stringify({ position: position }) ,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (res) {
            console.log(res);
            alert(res);

        },
        failure: function (res) {
            alert(res.text)
        },
        error: function (res) {
            console.log(res)
        }
    })
})