export class FormHandler {
  constructor() {
    this.contactForm = null;
    this.bookingForm = null;
  }

  init() {
    this.initContactForm();
    this.initBookingForm();
  }

  initContactForm() {
    this.contactForm = document.getElementById('contact-form');
    if (!this.contactForm) return;
    
    this.contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleContactSubmission();
    });
  }

  initBookingForm() {
    this.bookingForm = document.getElementById('booking-form');
    if (!this.bookingForm) return;
    
    // Update total price when travelers change
    const travelersSelect = this.bookingForm.querySelector('select[name="travelers"]');
    const totalPriceElement = document.getElementById('total-price');
    
    if (travelersSelect && totalPriceElement) {
      travelersSelect.addEventListener('change', () => {
        const basePrice = 899; // Default price
        const travelers = parseInt(travelersSelect.value) || 1;
        const total = basePrice * travelers;
        totalPriceElement.textContent = total;
      });
    }
    
    this.bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleBookingSubmission();
    });
  }

  async handleContactSubmission() {
    // Simulate form submission
    const successDiv = document.getElementById('contact-success');
    if (successDiv) {
      successDiv.classList.remove('hidden');
      this.contactForm.reset();
      
      window.setTimeout(() => {
        successDiv.classList.add('hidden');
      }, 5000);
    }
  }

  async handleBookingSubmission() {
    // Simulate booking submission
    const formData = new FormData(this.bookingForm);
    const bookingData = {
      customerName: formData.get('customerName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      travelers: formData.get('travelers'),
      departureDate: formData.get('departureDate'),
      specialRequests: formData.get('specialRequests')
    };
    
    // Show success message
    const modal = document.getElementById('booking-modal');
    const bookingContent = document.getElementById('booking-content');
    
    if (modal && bookingContent) {
      bookingContent.innerHTML = this.getBookingSuccessHTML(bookingData);
      
      // Auto close after 10 seconds
      window.setTimeout(() => {
        window.app.modalManager.closeBookingModal();
        window.app.navigation.navigateTo('home');
      }, 10000);
    }
  }

  getBookingSuccessHTML(bookingData) {
    return `
      <div class="text-center py-8">
        <div class="relative mb-6">
          <div class="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce shadow-lg">
            <i class="bi bi-check-lg text-3xl text-white"></i>
          </div>
          <div class="absolute inset-0 w-20 h-20 bg-green-400 rounded-full mx-auto animate-ping opacity-20"></div>
        </div>
        
        <h3 class="text-2xl font-bold text-gray-900 mb-3 animate-fadeIn">Booking Berjaya!</h3>
        <p class="text-gray-600 mb-6 animate-slideUp">
          Thank you for booking with WanderWise Malaysia! We've sent a confirmation email to <strong>${bookingData.email}</strong>.
        </p>
        
        <div class="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 mb-6 animate-scaleIn">
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div class="text-left">
              <p class="text-gray-500">Booking ID</p>
              <p class="font-bold text-primary-600">WW-MY-${Date.now().toString().slice(-6)}</p>
            </div>
            <div class="text-right">
              <p class="text-gray-500">Total Amount</p>
              <p class="font-bold text-green-600 text-lg">RM ${document.getElementById('total-price').textContent}</p>
            </div>
            <div class="text-left">
              <p class="text-gray-500">Package</p>
              <p class="font-semibold">Malaysian Adventure Package</p>
            </div>
            <div class="text-right">
              <p class="text-gray-500">Travelers</p>
              <p class="font-semibold">${bookingData.travelers} person${parseInt(bookingData.travelers) > 1 ? 's' : ''}</p>
            </div>
          </div>
        </div>
        
        <div class="bg-blue-50 rounded-lg p-4 mb-6 animate-slideUp" style="animation-delay: 0.3s;">
          <div class="flex items-center justify-center mb-2">
            <i class="bi bi-clock text-blue-600 mr-2"></i>
            <span class="text-blue-800 font-medium">What's Next?</span>
          </div>
          <p class="text-blue-700 text-sm">
            Our Malaysian team will contact you within 24 hours to finalize your travel arrangements and payment details.
          </p>
        </div>
        
        <div class="flex space-x-3">
          <button onclick="window.open('https://wa.me/60123456789', '_blank')" class="flex-1 animate-slideInLeft border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500 inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-base">
            <i class="bi bi-whatsapp mr-2 text-green-600"></i>
            WhatsApp Us
          </button>
          <button onclick="closeBookingModal(); navigateTo('home');" class="flex-1 animate-slideInRight inline-flex items-center justify-center font-medium rounded-lg bg-primary-600 hover:bg-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 px-4 py-2 text-base">
            <i class="bi bi-house mr-2"></i>
            Back to Home
          </button>
        </div>
      </div>
    `;
  }
}
