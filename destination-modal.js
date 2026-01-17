export class DestinationModal {
  constructor(dataManager) {
    this.dataManager = dataManager;
    this.modal = null;
    this.currentDestination = null;
    this.currentTab = 'overview';
  }

  init() {
    this.modal = document.getElementById('destination-modal');
    
    // Set up keyboard event listeners
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.close();
      }
    });
  }

  open(destinationId) {
    const destination = this.dataManager.getDestinationById(destinationId);
    if (!destination || !this.modal) return;

    this.currentDestination = destination;
    this.loadDestinationContent();
    this.modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  close() {
    if (!this.modal) return;
    
    this.modal.classList.add('hidden');
    document.body.style.overflow = 'unset';
    this.currentDestination = null;
  }

  loadDestinationContent() {
    if (!this.currentDestination) return;

    const destination = this.currentDestination;

    // Update hero section
    const heroImage = document.getElementById('destination-hero-image');
    const title = document.getElementById('destination-modal-title');
    const location = document.getElementById('destination-modal-location').querySelector('span');
    const categoryBadge = document.getElementById('destination-category-badge');
    const durationBadge = document.getElementById('destination-duration-badge');
    const price = document.getElementById('destination-price');

    if (heroImage) heroImage.style.backgroundImage = `url(${destination.image})`;
    if (title) title.textContent = destination.name;
    if (location) location.textContent = destination.country;
    if (categoryBadge) categoryBadge.textContent = destination.category.toUpperCase();
    if (durationBadge) durationBadge.textContent = destination.duration;
    if (price) price.textContent = destination.price;

    // Load tab content
    this.loadOverviewTab();
    this.loadHighlightsTab();
    this.loadItineraryTab();
    this.loadGalleryTab();

    // Reset to overview tab
    this.switchTab('overview');
  }

  loadOverviewTab() {
    const description = document.getElementById('destination-description');
    const durationFact = document.getElementById('destination-duration-fact');
    const difficulty = document.getElementById('destination-difficulty');
    const reviewsContainer = document.getElementById('destination-reviews');

    if (description) description.textContent = this.currentDestination.description;
    if (durationFact) durationFact.textContent = this.currentDestination.duration;
    if (difficulty) {
      const difficultyLevel = this.getDifficultyLevel(this.currentDestination.category);
      difficulty.textContent = difficultyLevel;
    }

    // Load sample reviews
    if (reviewsContainer) {
      reviewsContainer.innerHTML = this.generateReviews();
    }
  }

  loadHighlightsTab() {
    const highlightsGrid = document.getElementById('destination-highlights-grid');
    if (!highlightsGrid) return;

    highlightsGrid.innerHTML = this.currentDestination.highlights.map((highlight, index) => `
      <div class="highlight-card p-6 rounded-xl animate-slide-up" style="animation-delay: ${index * 100}ms;">
        <div class="flex items-start space-x-4">
          <div class="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
            <i class="${this.getHighlightIcon(highlight)} text-white text-lg"></i>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-2">${highlight}</h4>
            <p class="text-gray-600 text-sm">${this.getHighlightDescription(highlight)}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  loadItineraryTab() {
    const itineraryContainer = document.getElementById('destination-itinerary');
    if (!itineraryContainer) return;

    const sampleItinerary = this.generateItinerary();
    itineraryContainer.innerHTML = sampleItinerary.map((day, index) => `
      <div class="itinerary-item animate-slide-up" style="animation-delay: ${index * 150}ms;">
        <div class="itinerary-day">${index + 1}</div>
        <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h4 class="font-bold text-gray-900 mb-2">${day.title}</h4>
          <p class="text-gray-600 mb-3">${day.description}</p>
          <div class="flex flex-wrap gap-2">
            ${day.activities.map(activity => `
              <span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">
                ${activity}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  loadGalleryTab() {
    const galleryGrid = document.getElementById('destination-gallery-grid');
    if (!galleryGrid) return;

    // Generate sample gallery images
    const galleryImages = this.generateGalleryImages();
    galleryGrid.innerHTML = galleryImages.map((image, index) => `
      <div class="gallery-item animate-slide-up" style="animation-delay: ${index * 100}ms;" onclick="openImageModal('${image.url}')">
        <img src="${image.url}" alt="${image.title}" class="w-full h-full object-cover" crossorigin="anonymous">
      </div>
    `).join('');
  }

  switchTab(tabName) {
    this.currentTab = tabName;

    // Update tab buttons
    const tabs = document.querySelectorAll('.destination-tab');
    tabs.forEach(tab => {
      const tabData = tab.getAttribute('data-tab');
      if (tabData === tabName) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    // Update tab content
    const contents = document.querySelectorAll('.destination-tab-content');
    contents.forEach(content => {
      if (content.id === `${tabName}-tab`) {
        content.classList.remove('hidden');
      } else {
        content.classList.add('hidden');
      }
    });
  }

  getDifficultyLevel(category) {
    switch (category) {
      case 'adventure': return 'Moderate';
      case 'cultural': return 'Easy';
      case 'relaxation': return 'Easy';
      case 'luxury': return 'Easy';
      default: return 'Easy';
    }
  }

  getHighlightIcon(highlight) {
    const iconMap = {
      'Cable car rides': 'bi-cable-car',
      'Duty-free shopping': 'bi-bag-check',
      'Beach relaxation': 'bi-sun',
      'Mangrove tours': 'bi-tree',
      'Mountain climbing': 'bi-mountain',
      'Sunrise viewing': 'bi-sunrise',
      'Borneo wildlife': 'bi-binoculars',
      'Cultural villages': 'bi-house-heart',
      'UNESCO heritage sites': 'bi-building',
      'Street art tours': 'bi-palette',
      'Food trails': 'bi-cup-hot',
      'Cultural museums': 'bi-bank',
      'Scuba diving': 'bi-water',
      'Snorkeling': 'bi-mask',
      'Beach resorts': 'bi-house-door',
      'Marine life': 'bi-fish',
      'Tea plantation tours': 'bi-cup',
      'Strawberry picking': 'bi-apple',
      'Cool climate': 'bi-thermometer-snow',
      'Colonial architecture': 'bi-building-gear',
      'Petronas Towers': 'bi-buildings',
      'Shopping districts': 'bi-shop',
      'Food courts': 'bi-shop-window',
      'Cultural sites': 'bi-geo-alt',
      'Temple tours': 'bi-building',
      'Rice terraces': 'bi-grid-3x3',
      'Yoga retreats': 'bi-person-arms-up',
      'Golden temples': 'bi-gem',
      'Floating markets': 'bi-shop',
      'Street food': 'bi-cup-straw',
      'River cruises': 'bi-water'
    };
    return iconMap[highlight] || 'bi-star';
  }

  getHighlightDescription(highlight) {
    const descriptions = {
      'Cable car rides': 'Experience breathtaking aerial views and scenic mountain landscapes.',
      'Duty-free shopping': 'Shop for international brands and local products at tax-free prices.',
      'Beach relaxation': 'Unwind on pristine sandy beaches with crystal-clear waters.',
      'Mangrove tours': 'Explore unique ecosystems and diverse wildlife in mangrove forests.',
      'Mountain climbing': 'Challenge yourself with guided climbs to spectacular summit views.',
      'Sunrise viewing': 'Witness stunning sunrises from elevated vantage points.',
      'Borneo wildlife': 'Encounter exotic animals and rare species in their natural habitat.',
      'Cultural villages': 'Immerse yourself in traditional lifestyles and local customs.',
      'UNESCO heritage sites': 'Discover world-renowned historical and cultural landmarks.',
      'Street art tours': 'Explore vibrant murals and artistic expressions throughout the city.',
      'Food trails': 'Taste authentic local cuisine and traditional delicacies.',
      'Cultural museums': 'Learn about rich history and cultural heritage through exhibits.',
      'Scuba diving': 'Dive into underwater worlds with professional instruction and equipment.',
      'Snorkeling': 'Explore coral reefs and marine life in shallow, clear waters.',
      'Beach resorts': 'Stay in luxury accommodations with beachfront access and amenities.',
      'Marine life': 'Observe diverse sea creatures in their natural marine environment.',
      'Tea plantation tours': 'Visit working tea estates and learn about tea production processes.',
      'Strawberry picking': 'Enjoy fresh fruit picking in scenic highland farms.',
      'Cool climate': 'Escape tropical heat in refreshing mountain air and temperatures.',
      'Colonial architecture': 'Admire historical buildings and architectural heritage.',
      'Petronas Towers': 'Visit iconic twin towers and enjoy panoramic city views.',
      'Shopping districts': 'Browse modern malls and traditional markets for unique finds.',
      'Food courts': 'Sample diverse cuisines in bustling local food centers.',
      'Cultural sites': 'Explore significant landmarks and cultural monuments.',
      'Temple tours': 'Visit sacred temples and learn about spiritual traditions.',
      'Rice terraces': 'Marvel at ancient agricultural landscapes and farming techniques.',
      'Yoga retreats': 'Find inner peace with guided meditation and yoga sessions.',
      'Golden temples': 'Discover ornate temples with stunning golden architecture.',
      'Floating markets': 'Experience unique waterway commerce and local trading culture.',
      'Street food': 'Taste authentic flavors from local street vendors and food stalls.',
      'River cruises': 'Enjoy scenic boat rides along historic waterways and rivers.'
    };
    return descriptions[highlight] || 'Experience this amazing attraction during your visit.';
  }

  generateItinerary() {
    const destination = this.currentDestination;
    const days = parseInt(destination.duration.split(' ')[0]) || 3;
    
    const itineraryTemplates = {
      'Langkawi': [
        { title: 'Arrival & Island Welcome', description: 'Arrive at Langkawi International Airport, check into resort, and enjoy welcome dinner with sunset views.', activities: ['Airport Transfer', 'Hotel Check-in', 'Welcome Dinner', 'Sunset Viewing'] },
        { title: 'Cable Car & Nature Adventure', description: 'Take the famous Langkawi Cable Car to the top of Mount Mat Cincang and explore the rainforest.', activities: ['Cable Car Ride', 'Sky Bridge', 'Rainforest Walk', 'Wildlife Spotting'] },
        { title: 'Island Hopping Tour', description: 'Visit Pulau Dayang Bunting, Eagle Watching, and enjoy pristine beaches around the archipelago.', activities: ['Boat Tour', 'Eagle Watching', 'Swimming', 'Beach Picnic'] },
        { title: 'Cultural & Shopping Day', description: 'Explore local markets, visit cultural sites, and enjoy duty-free shopping before departure.', activities: ['Local Markets', 'Cultural Sites', 'Duty-Free Shopping', 'Departure'] }
      ],
      'Mount Kinabalu': [
        { title: 'Arrival & Base Preparation', description: 'Arrive in Kota Kinabalu, transfer to Kinabalu Park, and prepare for the climb with briefing.', activities: ['Airport Transfer', 'Park Registration', 'Climbing Briefing', 'Equipment Check'] },
        { title: 'Timpohon Gate to Laban Rata', description: 'Begin the challenging climb through diverse ecosystems to the mountain hut at 3,272m.', activities: ['Early Start', 'Rainforest Trek', 'Alpine Vegetation', 'Mountain Hut Rest'] },
        { title: 'Summit Day & Descent', description: 'Pre-dawn summit attempt to Low\'s Peak (4,095m) for sunrise, then descend to base.', activities: ['Summit Climb', 'Sunrise Viewing', 'Photography', 'Descent to Base'] },
        { title: 'Recovery & Cultural Experience', description: 'Rest day with visit to local Dusun villages and hot springs before departure.', activities: ['Village Visit', 'Hot Springs', 'Cultural Exchange', 'Departure'] }
      ],
      'George Town': [
        { title: 'Heritage Trail Discovery', description: 'Explore UNESCO World Heritage sites and colonial architecture in the historic city center.', activities: ['Walking Tour', 'Colonial Buildings', 'Heritage Sites', 'Photography'] },
        { title: 'Street Art & Culture', description: 'Hunt for famous street art murals and visit museums showcasing Penang\'s rich cultural heritage.', activities: ['Street Art Tour', 'Museum Visits', 'Cultural Sites', 'Local Crafts'] },
        { title: 'Food Trail Adventure', description: 'Experience Penang\'s legendary food scene with guided tours of hawker centers and local eateries.', activities: ['Hawker Centers', 'Local Delicacies', 'Cooking Class', 'Food Markets'] }
      ]
    };

    const template = itineraryTemplates[destination.name] || [
      { title: 'Arrival Day', description: 'Arrive at destination and settle in with orientation tour.', activities: ['Arrival', 'Check-in', 'Orientation', 'Welcome Dinner'] },
      { title: 'Main Attractions', description: 'Visit the primary attractions and landmarks of the destination.', activities: ['Sightseeing', 'Photography', 'Local Guide', 'Cultural Sites'] },
      { title: 'Adventure Activities', description: 'Engage in exciting activities and unique experiences.', activities: ['Adventure Tours', 'Local Experiences', 'Nature Walks', 'Cultural Activities'] },
      { title: 'Departure Day', description: 'Final exploration and departure preparations.', activities: ['Last-minute Shopping', 'Souvenir Hunting', 'Departure Transfer', 'Farewell'] }
    ];

    return template.slice(0, days);
  }

  generateGalleryImages() {
    const baseImages = [
      { url: this.currentDestination.image, title: `${this.currentDestination.name} Main View` },
      { url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', title: 'Scenic Landscape' },
      { url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=400&fit=crop', title: 'City Skyline' },
      { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=400&fit=crop', title: 'Cultural Heritage' },
      { url: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=400&h=400&fit=crop', title: 'Natural Beauty' },
      { url: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=400&h=400&fit=crop', title: 'Local Culture' }
    ];

    return baseImages;
  }

  generateReviews() {
    const reviews = [
      {
        name: 'Ahmad Zulkifli',
        location: 'Kuala Lumpur, Malaysia',
        rating: 5,
        comment: 'Absolutely amazing experience! The guide was knowledgeable and the scenery was breathtaking.',
        date: '2 weeks ago'
      },
      {
        name: 'Sarah Lim',
        location: 'Singapore',
        rating: 5,
        comment: 'Perfect trip for families. Well organized and great value for money. Highly recommended!',
        date: '1 month ago'
      },
      {
        name: 'David Chen',
        location: 'Penang, Malaysia',
        rating: 4,
        comment: 'Great destination with lots to see and do. The local food was incredible!',
        date: '2 months ago'
      }
    ];

    return reviews.map(review => `
      <div class="review-card p-4 rounded-lg">
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <span class="text-white font-bold text-sm">${review.name.charAt(0)}</span>
          </div>
          <div class="flex-1">
            <div class="flex items-center space-x-2 mb-1">
              <h5 class="font-semibold text-gray-900 text-sm">${review.name}</h5>
              <span class="text-gray-500 text-xs">•</span>
              <span class="text-gray-500 text-xs">${review.location}</span>
            </div>
            <div class="flex items-center space-x-2 mb-2">
              <div class="flex">
                ${Array(review.rating).fill().map(() => '<i class="bi bi-star-fill text-yellow-400 text-xs"></i>').join('')}
              </div>
              <span class="text-gray-500 text-xs">${review.date}</span>
            </div>
            <p class="text-gray-700 text-sm">${review.comment}</p>
          </div>
        </div>
      </div>
    `).join('');
  }

  bookDestination() {
    if (this.currentDestination && window.app && window.app.modalManager) {
      window.app.modalManager.openBookingModal(
        this.currentDestination.id,
        `${this.currentDestination.name} Adventure`,
        this.currentDestination.price
      );
      this.close();
    }
  }

  shareDestination() {
    if (navigator.share && this.currentDestination) {
      navigator.share({
        title: `${this.currentDestination.name} - WanderWise Malaysia`,
        text: `Check out this amazing destination: ${this.currentDestination.name}`,
        url: window.location.href
      });
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Destination link copied to clipboard!');
      });
    }
  }
}
