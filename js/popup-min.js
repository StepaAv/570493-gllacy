var link=document.querySelector(".contacts__btn"),popup=document.querySelector(".modal"),close=popup.querySelector(".modal__close"),form=popup.querySelector("form"),namez=popup.querySelector("[name=name]"),email=popup.querySelector("[name=email]"),area=popup.querySelector("textarea"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("namez")}catch(e){isStorageSupport=!1}link.addEventListener("click",function(e){e.preventDefault(),popup.classList.add("modal--show"),storage?(namez.value=storage,email.focus()):namez.focus()}),close.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("modal--show"),popup.classList.remove("modal--error")}),form.addEventListener("submit",function(e){namez.value&&email.value&&area.value?isStorageSupport&&localStorage.setItem("namez",namez.value):(e.preventDefault(),popup.classList.add("modal--error"),console.log("Нужно ввести name и email и message"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("modal--show")&&(popup.classList.remove("modal--show"),popup.classList.remove("modal--error")))});