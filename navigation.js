export class Navigation {
  constructor() {
    this.currentPage = 'home';
    this.isMobileMenuOpen = false;
  }

  init() {
    this.updateNavigation();
  }

  navigateTo(page) {
    if (this.currentPage === page) return;
    
    // Hide current page
    const currentPageElement = document.getElementById(`${this.currentPage}-page`);
    if (currentPageElement) {
      currentPageElement.classList.add('hidden');
    }
    
    // Show new page
    const newPageElement = document.getElementById(`${page}-page`);
    if (newPageElement) {
      newPageElement.classList.remove('hidden');
    }
    
    this.currentPage = page;
    this.updateNavigation();
    
    // Close mobile menu if open
    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Load page-specific content if needed
    this.loadPageContent(page);
  }

  updateNavigation() {
    // Update desktop navigation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const page = item.getAttribute('data-page');
      if (page === this.currentPage) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
    
    // Update mobile navigation
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
      const page = item.getAttribute('data-page');
      if (page === this.currentPage) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');
    
    if (this.isMobileMenuOpen) {
      mobileMenu.classList.add('hidden');
      mobileMenuIcon.className = 'bi bi-list text-xl';
      this.isMobileMenuOpen = false;
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenuIcon.className = 'bi bi-x text-xl';
      this.isMobileMenuOpen = true;
    }
  }

  async loadPageContent(page) {
    // Load page-specific content dynamically
    if (page === 'about') {
      await this.loadAboutContent();
    } else if (page === 'destinations') {
      await this.loadDestinationsContent();
    } else if (page === 'gallery') {
      await this.loadGalleryContent();
    } else if (page === 'contact') {
      await this.loadContactContent();
    }
  }

  async loadAboutContent() {
    const container = document.getElementById('about-content-container');
    if (container && container.innerHTML.trim() === '') {
      try {
        const response = await fetch('pages/about-content.html');
        const html = await response.text();
        container.innerHTML = html;
        
        // Reinitialize counters for about page
        if (window.app && window.app.animationManager) {
          window.app.animationManager.initCounters();
        }
      } catch (error) {
        console.error('Error loading about content:', error);
      }
    }
  }

  async loadDestinationsContent() {
    const container = document.getElementById('destinations-content-container');
    if (container && container.innerHTML.trim() === '') {
      try {
        const response = await fetch('pages/destinations-content.html');
        const html = await response.text();
        container.innerHTML = html;
        
        // Load destinations data
        if (window.app && window.app.dataManager) {
          window.app.dataManager.loadDestinations();
          window.app.dataManager.loadAllPackages();
        }
      } catch (error) {
        console.error('Error loading destinations content:', error);
      }
    }
  }

  async loadGalleryContent() {
    const container = document.getElementById('gallery-content-container');
    if (container && container.innerHTML.trim() === '') {
      try {
        const response = await fetch('pages/gallery-content.html');
        const html = await response.text();
        container.innerHTML = html;
        
        // Load gallery data
        if (window.app && window.app.dataManager) {
          window.app.dataManager.loadGallery();
          window.app.dataManager.loadFeaturedDestinations();
        }
      } catch (error) {
        console.error('Error loading gallery content:', error);
      }
    }
  }

  async loadContactContent() {
    const container = document.getElementById('contact-content-container');
    if (container && container.innerHTML.trim() === '') {
      try {
        const response = await fetch('pages/contact-content.html');
        const html = await response.text();
        container.innerHTML = html;
        
        // Reinitialize contact form
        if (window.app && window.app.formHandler) {
          window.app.formHandler.initContactForm();
        }
      } catch (error) {
        console.error('Error loading contact content:', error);
      }
    }
  }
}
