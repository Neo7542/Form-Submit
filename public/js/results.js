
var name = ""

function onSubmit()
{
    name = document.getElementsByName("Name")[0].value
    console.log(name)
}

function onSubmitForm2()
{
    age = document.getElementsByName("Age")[0].value
    console.log(age)
    $.ajax({
        url: '/',
        method: 'POST',
        contentType: 'application/json' ,
        data: JSON.stringify({ name:name,age:age }),
        success : console.log('Successful comm')
    });
}