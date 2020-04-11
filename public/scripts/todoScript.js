const formElement = document.querySelector('#todo-form');

formElement.onsubmit = ()=> {
    const formInput = document.querySelector('#todo-form input');
    let todo = formInput.value.trim();
    if(todo){
        const data = {cont: todo};
        $.ajax({
            type: "POST",
            url: "/todo",
            data: data,
            success: function (response) {
                formInput.value ="";
                location.reload();
                console.log('todo content added');
                
            },
            error: (jqXhr, error, errorMsg) => {
                alert('SOMETHING WENT WRONG');
            }
        });
    }
    return false;
}

$('li').on('click', function() {
    console.log($(this).text());
    let item = $(this).text().replace(/ /g, '-'); // Para não ter espaços entre o dado. Nice!
    $.ajax({
        type: "DELETE",
        url: "/todo/"+item,
        success: function (response) {
            location.reload();
            console.log('item deleted with sucess');
            location.reload();
        },
        error: function (jqXhr, error, errorMsg){
            alert(error);
        }
    });
    return false;
});
