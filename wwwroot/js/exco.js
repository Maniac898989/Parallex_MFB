$('.btn').on("click", function (e) {
    const fname = e.currentTarget.getAttribute("fileName");

    $.ajax({
        type: "GET",
        url: "?handler=ExcoInfo&name=" + fname,
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
                        var info = $('#exco_info');
                        info.empty();

                        json.details.forEach(d => {
                            info.append('<p class="paralax-body-font-two">' + d + '</p>');
                        });

                        $('#exco_name').text(json.name);
                        $('#exco_position').text(json.position);
                        $('#imagesource').children('img').attr('src', json.src);

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