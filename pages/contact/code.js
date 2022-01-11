(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const form = document.getElementById('needs-validation')
    const btn = document.getElementById('submit-btn')
  
    // Loop over them and prevent submission
    btn.addEventListener('click', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
  
        form.classList.add('was-validated')
    }, false)
})()

