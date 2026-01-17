// Import modules
import { Navigation } from './modules/navigation.js';
import { ComponentLoader } from './modules/component-loader.js';
import { DataManager } from './modules/data-manager.js';
import { ParticleBackground } from './modules/particle-background.js';
import { ModalManager } from './modules/modal-manager.js';
import { FormHandler } from './modules/form-handler.js';
import { AnimationManager } from './modules/animation-manager.js';
import { DestinationModal } from './modules/destination-modal.js';

// Initialize the application
class App {
  constructor() {
    this.navigation = new Navigation();
    this.componentLoader = new ComponentLoader();
    this.dataManager = new DataManager();
    this.particleBackground = new ParticleBackground();
    this.modalManager = new ModalManager();
    this.formHandler = new FormHandler();
    this.animationManager = new AnimationManager();
    this.destinationModal = new DestinationModal(this.dataManager);
    
    this.init();
  }

  async init() {
    try {
      // Load all components
      await this.componentLoader.loadAllComponents();
      
      // Initialize modules
      this.navigation.init();
      this.particleBackground.init();
      this.modalManager.init();
      this.formHandler.init();
      this.animationManager.init();
      this.destinationModal.init();
      
      // Load initial data
      this.dataManager.loadFeaturedPackages();
      this.dataManager.loadDestinations();
      this.dataManager.loadGallery();
      
      console.log('WanderWise Malaysia app initialized successfully!');
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }
}

// Global functions for backward compatibility
window.showDestinationDetails = (destinationId) => {
  if (window.app && window.app.destinationModal) {
    window.app.destinationModal.open(destinationId);
  }
};

window.closeDestinationModal = () => {
  if (window.app && window.app.destinationModal) {
    window.app.destinationModal.close();
  }
};

window.switchDestinationTab = (tabName) => {
  if (window.app && window.app.destinationModal) {
    window.app.destinationModal.switchTab(tabName);
  }
};

window.bookDestinationFromModal = () => {
  if (window.app && window.app.destinationModal) {
    window.app.destinationModal.bookDestination();
  }
};

window.shareDestination = () => {
  if (window.app && window.app.destinationModal) {
    window.app.destinationModal.shareDestination();
  }
};

window.showPackageDetails = (packageId) => {
  const pkg = window.app.dataManager.getPackageById(packageId);
  if (pkg) {
    alert(`${pkg.title}\n\n${pkg.description}\n\nIncludes:\n${pkg.includes.join('\n')}\n\nPrice: RM ${pkg.price}\nDuration: ${pkg.duration}`);
  }
};

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});

// Export for global access
window.navigateTo = (page) => window.app.navigation.navigateTo(page);
window.toggleMobileMenu = () => window.app.navigation.toggleMobileMenu();
window.openBookingModal = () => window.app.modalManager.openBookingModal();
window.closeBookingModal = () => window.app.modalManager.closeBookingModal();
window.openImageModal = (imageUrl) => window.app.modalManager.openImageModal(imageUrl);
window.closeImageModal = () => window.app.modalManager.closeImageModal();
window.showTooltip = () => window.app.modalManager.showTooltip();
window.hideTooltip = () => window.app.modalManager.hideTooltip();
window.filterDestinations = (category) => window.app.dataManager.filterDestinations(category);
window.filterGallery = (category) => window.app.dataManager.filterGallery(category);
