let up = document.querySelector('.top');

window.onscroll = function(){

    if( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
        up.style.display = "block";
    }else{
        up.style.display = "none";
    }
}


up.addEventListener('click' , function(){

    window.scrollTo({
        top : 0,
        behavior : 'smooth'
    })
  })

  document.addEventListener('DOMContentLoaded', function () {
    // Get all anchor links with href starting with #
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();  // Prevent the default link behavior

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
