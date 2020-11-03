$(document).ready(function(){
  let addBtn=$('.add-btn');
  let field=$('.add-field');
  let tasks=$('.tasks');
  //Add task
  addBtn.on('click', function(){
    let elem = `<li class="task">
                <div class="task-checked col-1">
                  <input type="checkbox">
                </div>
                <div class="task-text col-2">${field.val()}</div>
                <div class="task-remove col-3"></div>
              </li>`;
    tasks.append(elem);
    field.val('');
 });
 $(document).keydown(function(e){
    if (e.which == 13) {
        event.preventDefault();
        $("button").trigger('click');
    }
});
  //remove tasks
  let removeBtn=$('.task-remove');
  tasks.on('click','.task-remove', function(){
    $(this).parent().remove();
  });
  //checked
  let checkboxes=$('.task-checked input');
  tasks.on('change','.task-checked input', function(){
    $(this).parent().next().toggleClass('checked');
  });
  //sortable
  $('#tasks-list').sortable();
});
