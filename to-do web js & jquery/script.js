
$("#addBtn").on("click",() => {
    toDo_check();
})

let todoList = [];

function toDo_check()
{

    let taskValue = $("#task").val();
    let invalid = false;

    if(taskValue === "")
    {
        $("#err1").text("⚠️ Task should not be empty !");
        invalid = true;
    }
    else
    {
        let listItem = `<li><input type='checkbox' class='task-check'>
                    
                    <span class="task-text"> ${taskValue} </span>
                    
                    <button class="update">
                        <img src="https://img.icons8.com/fluency-systems-filled/48/pen-squared.png" 
                        alt="pen-squared"/>
                    </button>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" id="delete" viewBox="0 0 30 30">
                    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z"></path>
                     </svg>

                    </li>`;

                    localStorage.setItem("todoList", JSON.stringify(todoList))

        $("#list").prepend("<li>" + listItem + "</li>");
        $("#task").val("");
        $("#err1").text("");
    }

    $(document).on("click",".task-check",function()
    {
         $(this).next(".task-text").toggleClass("completed");
    });

    $(document).on("click", "#delete", function() {
        $(this).parent().remove(); 
    });

    $(document).on("click", ".update", function () 
    {
        
        let taskText = $(this).siblings(".task-text");
        let currentText = taskText.text();

        let inputField = $(`<input type="text" class="edit-input">`).val(currentText);

        taskText.replaceWith(inputField);
        inputField.trigger("focus").select();

        inputField.on("blur keypress", function (event) {
            if (event.type === "blur" || event.key === "Enter") {
                let newText = inputField.val().trim() || currentText;
                inputField.replaceWith(`<span class="task-text">${newText}</span>`);
            }
        })
        
        });

}
