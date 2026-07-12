/**
 * Simple Email Form Handler
 */
document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Elemen UI
      let loadingElement = form.querySelector('.loading');
      let errorElement = form.querySelector('.error-message');
      let successElement = form.querySelector('.sent-message');
      
      // Tampilkan loading
      loadingElement.classList.add('d-block');
      errorElement.classList.remove('d-block');
      successElement.classList.remove('d-block');
      
      // Ambil data form
      let formData = new FormData(form);
      let action = form.getAttribute('action');
      
      // Kirim data menggunakan fetch API
      fetch(action, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Network response was not ok: ' + response.statusText);
        }
      })
      .then(data => {
        // Sembunyikan loading
        loadingElement.classList.remove('d-block');
        
        // Periksa respons
        if (data.trim() === 'OK') {
          // Sukses
          successElement.classList.add('d-block');
          form.reset();
        } else {
          // Error dengan pesan
          errorElement.textContent = data;
          errorElement.classList.add('d-block');
        }
      })
      .catch(error => {
        // Sembunyikan loading
        loadingElement.classList.remove('d-block');
        
        // Tampilkan error
        errorElement.textContent = error.message;
        errorElement.classList.add('d-block');
      });
    });
  }
});
