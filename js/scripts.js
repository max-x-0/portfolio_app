//Hero section

let modal = document.getElementById('hero_modal');

let btnOpen = document.getElementById('btn_contact');

let btnClose = document.getElementsByClassName('form btn_form_close')[0];

btnOpen.onclick = function() {
    modal.style.display = "block";
}

btnClose.onclick = function() {
    modal.style.display = "none";
}

//My work section

let myWorkmodal = document.getElementById('my_work_modal_win');

let myWorkbtnOpen = document.getElementById('btn_open_modal_my_work');

myWorkbtnOpen.onclick = function() {
    my_work_modal_win.style.display = "block";
}

window.onclick = function(event) {
    if (event.target ==  my_work_modal_win) {
        my_work_modal_win.style.display = "none";
    };
}

//Reviews section




