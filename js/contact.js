document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch('http://192.168.60.45:8080/api/Common', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
        console.log('Form submitted successfully:', result);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    });
  });
  