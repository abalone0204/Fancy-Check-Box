$(function(){
    var template = Handlebars.compile($("#peopletemplate").html());
    var data = {
        name: "Denny",
        job: "Developer"
    };

    $('.list').html(template(data));

});