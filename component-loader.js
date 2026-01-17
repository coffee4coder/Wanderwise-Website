export class ComponentLoader {
  constructor() {
    this.components = {
      'navbar-container': 'components/navbar.html',
      'hero-container': 'components/hero.html',
      'featured-packages-container': 'components/featured-packages.html',
      'why-choose-us-container': 'components/why-choose-us.html',
      'testimonials-container': 'components/testimonials.html',
      'footer-container': 'components/footer.html',
      'fab-container': 'components/floating-action-button.html',
      'booking-modal-container': 'components/booking-modal.html',
      'image-modal-container': 'components/image-modal.html',
      'destination-modal-container': 'components/destination-modal.html'
    };
  }

  async loadComponent(containerId, componentPath) {
    try {
      const response = await fetch(componentPath);
      if (!response.ok) {
        throw new Error(`Failed to load component: ${componentPath}`);
      }
      
      const html = await response.text();
      const container = document.getElementById(containerId);
      
      if (container) {
        container.innerHTML = html;
      } else {
        console.warn(`Container not found: ${containerId}`);
      }
    } catch (error) {
      console.error(`Error loading component ${componentPath}:`, error);
    }
  }

  async loadAllComponents() {
    const loadPromises = Object.entries(this.components).map(
      ([containerId, componentPath]) => this.loadComponent(containerId, componentPath)
    );
    
    await Promise.all(loadPromises);
  }

  async loadPageContent(page) {
    const pageComponents = {
      'about': {
        'about-content-container': 'pages/about-content.html'
      },
      'destinations': {
        'destinations-content-container': 'pages/destinations-content.html'
      },
      'gallery': {
        'gallery-content-container': 'pages/gallery-content.html'
      },
      'contact': {
        'contact-content-container': 'pages/contact-content.html'
      }
    };

    if (pageComponents[page]) {
      const loadPromises = Object.entries(pageComponents[page]).map(
        ([containerId, componentPath]) => this.loadComponent(containerId, componentPath)
      );
      
      await Promise.all(loadPromises);
    }
  }
}
