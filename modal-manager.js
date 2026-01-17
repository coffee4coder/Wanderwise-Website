export class ModalManager {
  constructor() {
    this.bookingModal = null;
    this.imageModal = null;
  }

  init() {
    this.bookingModal = document.getElementById('booking-modal');
    this.imageModal = document.getElementById('image-modal');
    
    // Set up keyboard event listeners
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeBookingModal();
        this.closeImageModal();
      }
    });
  }

  openBookingModal(packageId = '', packageTitle = 'Malaysian Adventure Package', packagePrice = 899) {
    if (!this.bookingModal) return;
    
    this.bookingModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Update package info
    const titleElement = this.bookingModal.querySelector('.font-bold.text-primary-900');
    const priceElement = this.bookingModal.querySelector('.text-primary-700');
    const totalPriceElement = document.getElementById('total-price');
    
    if (titleElement) titleElement.textContent = packageTitle;
    if (priceElement) priceElement.textContent = `Starting from RM ${packagePrice} per person`;
    if (totalPriceElement) totalPriceElement.textContent = packagePrice;
  }

  closeBookingModal() {
    if (!this.bookingModal) return;
    
    this.bookingModal.classList.add('hidden');
    document.body.style.overflow = 'unset';
  }

  openImageModal(imageUrl) {
    if (!this.imageModal) return;
    
    const modalImage = document.getElementById('modal-image');
    
    if (modalImage) {
      modalImage.src = imageUrl;
      this.imageModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  closeImageModal() {
    if (!this.imageModal) return;
    
    this.imageModal.classList.add('hidden');
    document.body.style.overflow = 'unset';
  }

  showTooltip() {
    const tooltip = document.getElementById('fab-tooltip');
    if (tooltip) {
      tooltip.classList.remove('opacity-0', 'translate-y-2', 'pointer-events-none');
      tooltip.classList.add('opacity-100', 'translate-y-0');
    }
  }

  hideTooltip() {
    const tooltip = document.getElementById('fab-tooltip');
    if (tooltip) {
      tooltip.classList.add('opacity-0', 'translate-y-2', 'pointer-events-none');
      tooltip.classList.remove('opacity-100', 'translate-y-0');
    }
  }
}
