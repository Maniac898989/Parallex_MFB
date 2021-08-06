//var baseurl = "https://localhost:44342/"

$('.btn').on("click", function (e) {
    debugger;
     const fname = e.currentTarget.getAttribute("fileName");

    $.ajax({
        type: "GET",
        url: "?handler=DirectorInfo&name=" + fname,
        beforeSend: function (xhr) {
            xhr.setRequestHeader("XSRF-TOKEN", $('input:hidden[name="__RequestVerificationToken"]').val())
        },
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        success: function (res) {
            if (res != undefined) {
                if (res.isDone != undefined && res.message != undefined) {
                    let json = JSON.parse(res.message);

                    if (json != undefined) {
                        var info = $('#director_info');
                        info.empty();

                        json.details.forEach(d => {
                            info.append('<p class="paralax-body-font-two">' + d + '</p>');
                        });

                        $('#director_name').text(json.name);
                        $('#director_position').text(json.position);

                        $('.bd-example-modal-lg').modal({
                            backdrop: true,
                            keyboard: true
                        });
                    }
                }
            }
        },
        failure: function (res) {
            alert(res.text)
        },
        error: function (res) {
            console.log(res)
        }
    })
})