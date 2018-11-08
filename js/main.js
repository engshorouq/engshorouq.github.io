
function grad(type,closeType) {
    var dialog = document.getElementById(type);
    var main = document.getElementById("main");
    var header = document.getElementById("header");
    var close = document.getElementById(closeType);
    main.style.opacity = .3;
    header.style.opacity = .3;
    dialog.showModal();
    close.addEventListener('click', function () {
        dialog.close();
        main.style.opacity = 1;
        header.style.opacity = 1;
    });

}