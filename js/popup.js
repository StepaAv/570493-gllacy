var link = document.querySelector(".contacts__btn");

    var popup = document.querySelector(".modal");
    var close = popup.querySelector(".modal__close");

    var form = popup.querySelector("form");
    var namez = popup.querySelector("[name=name]");
    var email = popup.querySelector("[name=email]");
    var area = popup.querySelector(".modal__textarea");

    var isStorageSupport = true;
    var storage = "";

    try {
        storage = localStorage.getItem("namez");
    } catch (err) {
        isStorageSupport = false;
    }

    link.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.add("modal--show");

        if (storage) {
            namez.value = storage;
            email.focus();
        } else {
            namez.focus();
        }

    });

    close.addEventListener("click", function(evt) {
        evt.preventDefault();
        popup.classList.remove("modal--show");
        popup.classList.remove("modal--error");

    });

    form.addEventListener("submit", function(evt) {
        if (!namez.value || !email.value || !area.value) {
            evt.preventDefault();
            popup.classlassList.remove("modal--error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal--error");
            console.log("Нужно ввести name и email и message");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("namez", namez.value);
            }
        }
    });

    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popup.classList.contains("modal--show")) {
                popup.classList.remove("modal--show");
                popup.classList.remove("modal--error");

            }
        }
    });