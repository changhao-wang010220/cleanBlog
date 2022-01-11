document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    if(el_autohide){
      let last_scroll_top = 0;
      window.addEventListener('scroll', () => {
            const scroll_top = window.pageYOffset;
            if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
    }

    window.addEventListener("scroll", () => {
        const scroll_top = window.pageYOffset;
        if(scroll_top != 0) {
            el_autohide.classList.add("whiten");
        } else {
            el_autohide.classList.remove("whiten");
        }
    })
}); 