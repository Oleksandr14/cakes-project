const e=document.querySelector(".nav__toggle"),o=document.querySelector(".menu-icon"),t=document.querySelector(".header-wrapper");e.addEventListener("click",(()=>{t.classList.toggle("nav-mobile"),o.classList.toggle("menu-icon-active")}));const c=document.querySelector(".scroll-up");window.addEventListener("scroll",(()=>{(window.pageYOffset||document.documentElement.scrollTop)>100?c.classList.add("scroll-up--active"):c.classList.remove("scroll-up--active")})),c.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=feeling.1fd15a6f.js.map