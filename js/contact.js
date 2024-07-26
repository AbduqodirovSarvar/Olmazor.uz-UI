import { OlmaTechData } from './api.js';

function getIconClass(link) {
  if (link.includes('t.me')) {
    return 'icon-paper-plane'; // Telegram
  } else if (link.includes('instagram.com')) {
    return 'icon-instagram'; // Instagram
  } else if (link.includes('olmatech.uz')) {
    return 'icon-globe'; // Website
  } else if (link.startsWith('tel:')) {
    return 'icon-phone2'; // Phone
  } else {
    return 'icon-map-signs'; // Default icon
  }
}

export async function renderContactSection() {
  try {
    if (!OlmaTechData) {
      throw new Error('OlmaTechData is not initialized');
    }

    const contactData = OlmaTechData.contacts;

    if (!contactData || contactData.length === 0) {
      throw new Error('No contact data available in OlmaTechData');
    }

    const section = document.getElementById('contact-section');

    if (!section) {
      throw new Error('Contact section container not found in the DOM');
    }

    section.innerHTML = ''; // Clear any existing content

    const container = document.createElement('div');
    container.className = 'container';

    // Heading Section
    const headingRow = document.createElement('div');
    headingRow.className = 'row justify-content-center mb-5 pb-3';
    headingRow.innerHTML = `
      <div class="col-md-7 heading-section text-center ftco-animate">
        <span class="subheading" data-i18n="contact.title">Contact</span>
        <h2 class="mb-4" data-i18n="contact.subtitle">Contact Us</h2>
        <p data-i18n="contact.description">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
      </div>
    `;

    // Contact Info Section
    const infoRow = document.createElement('div');
    infoRow.className = 'row d-flex contact-info mb-5';

    contactData.forEach(contact => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-3 d-flex ftco-animate';
      col.innerHTML = `
        <div class="align-self-stretch box p-4 text-center">
          <div class="icon d-flex align-items-center justify-content-center">
            <span class="${getIconClass(contact.link)}"></span>
          </div>
          <h3 class="mb-4" data-i18n="contact.${contact.type}">${contact.type}</h3>
          <p><a href="${contact.link}">${contact.link}</a></p>
        </div>
      `;
      infoRow.appendChild(col);
    });

    // Contact Form and Map Section
    const formAndMapRow = document.createElement('div');
    formAndMapRow.className = 'row no-gutters block-9';

    const formCol = document.createElement('div');
    formCol.className = 'col-md-6 order-md-last d-flex';
    formCol.innerHTML = `
      <form id="contactForm" class="bg-light p-5 contact-form">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Your Name" name="name" data-i18n-placeholder="contact.form.name">
        </div>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Your Email" name="email" data-i18n-placeholder="contact.form.email">
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Subject" name="subject" data-i18n-placeholder="contact.form.subject">
        </div>
        <div class="form-group">
          <textarea name="message" cols="30" rows="7" class="form-control" placeholder="Message" data-i18n-placeholder="contact.form.message"></textarea>
        </div>
        <div class="form-group">
          <input type="submit" class="btn btn-primary py-3 px-5" value="Send" data-i18n="contact.form.send">
        </div>
      </form>
    `;

    const mapCol = document.createElement('div');
    mapCol.className = 'col-md-6 d-flex';
    mapCol.innerHTML = '<div id="map" class="bg-white"></div>';

    formAndMapRow.appendChild(formCol);
    formAndMapRow.appendChild(mapCol);

    // Append everything to the section
    container.appendChild(headingRow);
    container.appendChild(infoRow);
    container.appendChild(formAndMapRow);
    section.appendChild(container);

    // Initialize map
    if (window.L) { // Assuming you're using Leaflet for the map
      const map = L.map('map').setView([51.505, -0.09], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
      }).addTo(map);
    } else {
      console.error('Leaflet library is not loaded.');
    }

    return section;
  } catch (error) {
    console.error('Error creating contact section:', error);
    throw error;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contactForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const subject = document.querySelector('input[name="subject"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const messageData = {
      name,
      email,
      subject,
      message
    };

    try {
      const response = await sendMessage(messageData);
      console.log('Message sent successfully:', response);
      alert('Your message has been sent successfully!');
      document.getElementById('contactForm').reset();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again.');
    }
  });
});
