$(function() {
    var template = Handlebars.compile($("#language-template").html());
    var data = {
        languages: [{
            name: "ruby"
        }, {
            name: "javascript"
        }, {
            name: "python"
        }, {
            name: "c++"
        }]
    };

    $('.language-btn-group').html(template(data));

    var lanBtn = $(".btn-language"),
        selBtn = $(".language-select-btn"),
        saveBtn = $(".language-save-btn");
    lanBtn.on("click", function(){
        $this = $(this);
        $this.toggleClass("btn-language");
        $this.toggleClass("btn-language-active");
    });

    selBtn.on("click", function(){
        $(".language-container").fadeIn();
    });
    saveBtn.on("click", function(){
       $(".language-container").fadeOut(); 
    })



});