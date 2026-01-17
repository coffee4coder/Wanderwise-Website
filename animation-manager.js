export class AnimationManager {
  constructor() {
    this.counters = [];
    this.observedElements = new Set();
  }

  init() {
    this.initCounters();
    this.initScrollAnimations();
  }

  initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.observedElements.has(counter)) {
            this.animateCounter(counter, target, suffix);
            this.observedElements.add(counter);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  }

  animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;
    
    const timer = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        window.clearInterval(timer);
      }
      element.textContent = Math.floor(current) + suffix;
    }, stepTime);
  }

  initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
      element.style.animationPlayState = 'paused';
      observer.observe(element);
    });
  }

  addScrollAnimation(element, animationClass, delay = 0) {
    element.classList.add(animationClass);
    if (delay > 0) {
      element.style.animationDelay = `${delay}ms`;
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    element.style.animationPlayState = 'paused';
    observer.observe(element);
  }
}
