export class DataManager {
  constructor() {
    this.destinations = [
      {
        id: '1',
        name: 'Langkawi',
        country: 'Malaysia',
        description: 'Discover the pristine beaches and duty-free shopping paradise of Langkawi with its stunning cable car rides and mangrove tours.',
        price: 899,
        duration: '4 days',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        highlights: ['Cable car rides', 'Duty-free shopping', 'Beach relaxation', 'Mangrove tours'],
        category: 'relaxation'
      },
      {
        id: '2',
        name: 'Mount Kinabalu',
        country: 'Sabah, Malaysia',
        description: 'Conquer Southeast Asia\'s highest peak with guided climbing expeditions and experience Borneo\'s unique biodiversity.',
        price: 1299,
        duration: '5 days',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        highlights: ['Mountain climbing', 'Sunrise viewing', 'Borneo wildlife', 'Cultural villages'],
        category: 'adventure'
      },
      {
        id: '3',
        name: 'George Town',
        country: 'Penang, Malaysia',
        description: 'Explore UNESCO World Heritage sites, street art, and indulge in Malaysia\'s best street food culture.',
        price: 699,
        duration: '3 days',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
        highlights: ['UNESCO heritage sites', 'Street art tours', 'Food trails', 'Cultural museums'],
        category: 'cultural'
      },
      {
        id: '4',
        name: 'Perhentian Islands',
        country: 'Terengganu, Malaysia',
        description: 'Experience crystal-clear waters perfect for diving and snorkeling in this tropical paradise.',
        price: 799,
        duration: '4 days',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        highlights: ['Scuba diving', 'Snorkeling', 'Beach resorts', 'Marine life'],
        category: 'relaxation'
      },
      {
        id: '5',
        name: 'Cameron Highlands',
        country: 'Pahang, Malaysia',
        description: 'Escape to cool mountain air with tea plantations, strawberry farms, and colonial charm.',
        price: 599,
        duration: '3 days',
        image: 'https://images.unsplash.com/photo-1664797090844-21b3928c6043?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        highlights: ['Tea plantation tours', 'Strawberry picking', 'Cool climate', 'Colonial architecture'],
        category: 'relaxation'
      },
      {
        id: '6',
        name: 'Kuala Lumpur',
        country: 'Malaysia',
        description: 'Discover Malaysia\'s vibrant capital with iconic Petronas Towers, diverse cuisine, and modern attractions.',
        price: 499,
        duration: '3 days',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop',
        highlights: ['Petronas Towers', 'Shopping districts', 'Food courts', 'Cultural sites'],
        category: 'cultural'
      },
      {
        id: '7',
        name: 'Bali',
        country: 'Indonesia',
        description: 'Experience the Island of Gods with beautiful temples, rice terraces, and pristine beaches.',
        price: 1199,
        duration: '6 days',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
        highlights: ['Temple tours', 'Rice terraces', 'Beach relaxation', 'Yoga retreats'],
        category: 'cultural'
      },
      {
        id: '8',
        name: 'Bangkok',
        country: 'Thailand',
        description: 'Explore Thailand\'s bustling capital with golden temples, floating markets, and vibrant street life.',
        price: 899,
        duration: '4 days',
        image: 'https://plus.unsplash.com/premium_photo-1682098240884-9dfc7bf048f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        highlights: ['Golden temples', 'Floating markets', 'Street food', 'River cruises'],
        category: 'cultural'
      }
    ];

    this.packages = [
      {
        id: '1',
        title: 'Langkawi Island Getaway',
        destination: 'Langkawi, Malaysia',
        price: 899,
        originalPrice: 1099,
        duration: '4 days / 3 nights',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        description: 'Perfect island escape with luxury resort stay and exciting island activities.',
        includes: ['4-star resort accommodation', 'Daily breakfast', 'Cable car tickets', 'Island hopping tour', 'Airport transfers'],
        featured: true
      },
      {
        id: '2',
        title: 'Mount Kinabalu Adventure',
        destination: 'Sabah, Malaysia',
        price: 1299,
        duration: '5 days / 4 nights',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        description: 'Ultimate climbing experience with professional guides and mountain lodge accommodation.',
        includes: ['Mountain guide', 'Climbing permits', 'Mountain lodge stay', 'All meals', 'Transportation'],
        featured: true
      },
      {
        id: '3',
        title: 'Penang Heritage Trail',
        destination: 'George Town, Penang',
        price: 699,
        originalPrice: 899,
        duration: '3 days / 2 nights',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
        description: 'Cultural immersion with heritage walks, street art tours, and authentic local cuisine.',
        includes: ['Heritage hotel stay', 'Guided walking tours', 'Food trail experience', 'Cultural guide', 'Local transport'],
        featured: false
      },
      {
        id: '4',
        title: 'Southeast Asia Discovery',
        destination: 'Malaysia, Thailand, Indonesia',
        price: 2499,
        duration: '12 days / 11 nights',
        image: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
        description: 'Multi-country adventure exploring the best of Southeast Asia\'s culture and nature.',
        includes: ['Multi-city flights', 'Hotel accommodations', 'Guided tours', 'Cultural experiences', 'All transfers'],
        featured: true
      }
    ];

    this.galleryImages = [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        title: 'Langkawi Sunset',
        location: 'Langkawi, Malaysia',
        category: 'destinations'
      },
      {
        id: '2',
        url: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop',
        title: 'Petronas Towers',
        location: 'Kuala Lumpur, Malaysia',
        category: 'destinations'
      },
      {
        id: '3',
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop',
        title: 'George Town Street Art',
        location: 'Penang, Malaysia',
        category: 'culture'
      },
      {
        id: '4',
        url: 'https://images.unsplash.com/photo-1664797090844-21b3928c6043?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Cameron Highlands Tea',
        location: 'Pahang, Malaysia',
        category: 'culture'
      },
      {
        id: '5',
        url: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=600&fit=crop',
        title: 'Bali Rice Terraces',
        location: 'Bali, Indonesia',
        category: 'adventures'
      },
      {
        id: '6',
        url: 'https://plus.unsplash.com/premium_photo-1682098240884-9dfc7bf048f0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Bangkok Temple',
        location: 'Bangkok, Thailand',
        category: 'culture'
      },
      {
        id: '7',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        title: 'Perhentian Islands',
        location: 'Terengganu, Malaysia',
        category: 'luxury'
      },
      {
        id: '8',
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        title: 'Mount Kinabalu',
        location: 'Sabah, Malaysia',
        category: 'adventures'
      }
    ];

    this.selectedDestinationCategory = 'all';
    this.selectedGalleryCategory = 'all';
  }

  loadFeaturedPackages() {
    const featuredPackages = this.packages.filter(pkg => pkg.featured);
    const container = document.getElementById('featured-packages');
    
    if (!container) return;
    
    container.innerHTML = featuredPackages.map((pkg, index) => `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden group hover-lift animate-slideUp" style="animation-delay: ${index * 200}ms;">
        <div class="relative overflow-hidden">
          <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" crossorigin="anonymous">
          <div class="absolute top-4 right-4">
            <span class="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              ${pkg.duration}
            </span>
          </div>
          ${pkg.originalPrice ? `
            <div class="absolute top-4 left-4">
              <span class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                Save RM ${pkg.originalPrice - pkg.price}
              </span>
            </div>
          ` : ''}
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 right-4">
              <button onclick="openBookingModal('${pkg.id}', '${pkg.title}', ${pkg.price})" class="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 inline-flex items-center justify-center font-medium rounded-lg bg-primary-600 hover:bg-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 px-4 py-2 text-base">
                <i class="bi bi-calendar-check mr-2"></i>
                Book Now
              </button>
            </div>
          </div>
        </div>
        
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
            ${pkg.title}
          </h3>
          <p class="text-gray-600 mb-2 flex items-center">
            <i class="bi bi-geo-alt text-primary-600 mr-1"></i>
            ${pkg.destination}
          </p>
          <p class="text-gray-700 mb-4 line-clamp-2">${pkg.description}</p>
          
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-2">
              ${pkg.originalPrice ? `
                <span class="text-gray-400 line-through text-sm">
                  RM ${pkg.originalPrice}
                </span>
              ` : ''}
              <span class="text-2xl font-bold text-primary-600">
                RM ${pkg.price}
              </span>
              <span class="text-gray-500 text-sm">per person</span>
            </div>
          </div>
          
          <div class="space-y-2 mb-4">
            ${pkg.includes.slice(0, 3).map((item, index) => `
              <div class="flex items-center text-sm text-gray-600 transform translate-x-0 hover:translate-x-1 transition-transform duration-200">
                <i class="bi bi-check-circle text-green-500 mr-2"></i>
                ${item}
              </div>
            `).join('')}
          </div>
          
          <button onclick="openBookingModal('${pkg.id}', '${pkg.title}', ${pkg.price})" class="w-full transform hover:scale-105 transition-transform duration-200 inline-flex items-center justify-center font-medium rounded-lg bg-primary-600 hover:bg-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 px-4 py-2 text-base">
            <i class="bi bi-calendar-check mr-2"></i>
            Book Now
          </button>
        </div>
      </div>
    `).join('');
  }

  loadDestinations() {
    const container = document.getElementById('destinations-grid');
    if (!container) return;
    
    const filteredDestinations = this.selectedDestinationCategory === 'all' 
      ? this.destinations 
      : this.destinations.filter(dest => dest.category === this.selectedDestinationCategory);
    
    container.innerHTML = filteredDestinations.map((destination, index) => `
      <div class="bg-white rounded-xl shadow-lg overflow-hidden group interactive-card animate-slideUp" style="animation-delay: ${index * 100}ms;">
        <div class="relative overflow-hidden">
          <img src="${destination.image}" alt="${destination.name}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" crossorigin="anonymous">
          <div class="absolute top-4 right-4">
            <span class="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              ${destination.duration}
            </span>
          </div>
          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full text-xs font-medium text-white animate-wiggle ${this.getCategoryColor(destination.category)}">
              ${destination.category}
            </span>
          </div>
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div class="absolute bottom-4 left-4 right-4">
              <button onclick="openBookingModal('${destination.id}', '${destination.name} Adventure', ${destination.price})" class="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 inline-flex items-center justify-center font-medium rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 px-4 py-2 text-base">
                <i class="bi bi-calendar-check mr-2"></i>
                Book Now - RM ${destination.price}
              </button>
            </div>
          </div>
        </div>
        
        <div class="p-6">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
              ${destination.name}
            </h3>
            <span class="text-2xl font-bold text-primary-600 animate-heartbeat">
              RM ${destination.price}
            </span>
          </div>
          
          <p class="text-gray-600 mb-2 flex items-center">
            <i class="bi bi-geo-alt text-primary-600 mr-1"></i>
            ${destination.country}
          </p>
          
          <p class="text-gray-700 mb-4 line-clamp-2">${destination.description}</p>
          
          <div class="space-y-2 mb-4">
            <h4 class="font-semibold text-gray-900 text-sm">Highlights:</h4>
            <div class="flex flex-wrap gap-2">
              ${destination.highlights.slice(0, 3).map((highlight, index) => `
                <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs transform hover:scale-105 transition-transform duration-200 stagger-${index + 1}">
                  ${highlight}
                </span>
              `).join('')}
            </div>
          </div>
          
          <div class="flex space-x-2">
            <button onclick="showDestinationDetails('${destination.id}')" class="flex-1 transform hover:scale-105 transition-transform duration-200 inline-flex items-center justify-center font-medium rounded-lg bg-primary-600 hover:bg-primary-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 px-4 py-2 text-base">
              <i class="bi bi-info-circle mr-2"></i>
              Details
            </button>
            <button onclick="openBookingModal('${destination.id}', '${destination.name} Adventure', ${destination.price})" class="transform hover:scale-105 transition-transform duration-200 hover-glow border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500 inline-flex items-center justify-center font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2 text-base">
              <i class="bi bi-calendar-check"></i>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  loadGallery() {
    const container = document.getElementById('gallery-grid');
    const noImagesDiv = document.getElementById('no-images');
    
    if (!container) return;
    
    const filteredImages = this.selectedGalleryCategory === 'all' 
      ? this.galleryImages 
      : this.galleryImages.filter(img => img.category === this.selectedGalleryCategory);
    
    if (filteredImages.length === 0) {
      container.innerHTML = '';
      if (noImagesDiv) noImagesDiv.classList.remove('hidden');
      return;
    }
    
    if (noImagesDiv) noImagesDiv.classList.add('hidden');
    
    container.innerHTML = filteredImages.map(image => `
      <div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" onclick="openImageModal('${image.url}')">
        <img src="${image.url}" alt="${image.title}" class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" crossorigin="anonymous">
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="absolute bottom-4 left-4 right-4 text-white">
            <h3 class="font-semibold text-lg mb-1">${image.title}</h3>
            <p class="text-sm text-gray-200 flex items-center">
              <i class="bi bi-geo-alt mr-1"></i>
              ${image.location}
            </p>
          </div>
        </div>
        <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div class="bg-white/20 backdrop-blur-sm rounded-full p-2">
            <i class="bi bi-zoom-in text-white text-lg"></i>
          </div>
        </div>
      </div>
    `).join('');
  }

  filterDestinations(category) {
    this.selectedDestinationCategory = category;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.category-filter');
    filterButtons.forEach(button => {
      const buttonCategory = button.getAttribute('data-category');
      if (buttonCategory === category) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    
    this.loadDestinations();
  }

  filterGallery(category) {
    this.selectedGalleryCategory = category;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.gallery-filter');
    filterButtons.forEach(button => {
      const buttonCategory = button.getAttribute('data-category');
      if (buttonCategory === category) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
    
    this.loadGallery();
  }

  getCategoryColor(category) {
    switch (category) {
      case 'adventure': return 'bg-orange-500';
      case 'cultural': return 'bg-purple-500';
      case 'relaxation': return 'bg-blue-500';
      case 'luxury': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  }

  getDestinationById(id) {
    return this.destinations.find(d => d.id === id);
  }

  getPackageById(id) {
    return this.packages.find(p => p.id === id);
  }
}
