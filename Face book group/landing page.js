//// Load feature data from JSON file
fetch('features.json')
.then(response => response.json())
.then(data => {
  const featureGrid = document.querySelector('.feature-grid');

  data.features.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.classList.add('feature-item');

    const featureIcon = document.createElement('div');
    featureIcon.classList.add('feature-icon');
    featureIcon.textContent = feature.icon;

    const featureTitle = document.createElement('h3');
    featureTitle.textContent = feature.title;

    const featureDescription = document.createElement('p');
    featureDescription.textContent = feature.description;

    featureItem.appendChild(featureIcon);
    featureItem.appendChild(featureTitle);
    featureItem.appendChild(featureDescription);
    featureGrid.appendChild(featureItem);
  });
})
.catch(error => console.error('Error loading feature data:', error));

// Load testimonial data from JSON file
fetch('testimonials.json')
.then(response => response.json())
.then(data => {
  const testimonialSlider = document.querySelector('.testimonial-slider');

  data.testimonials.forEach(testimonial => {
    const testimonialSlide = document.createElement('div');
    testimonialSlide.classList.add('testimonial-slide');

    const testimonialText = document.createElement('p');
    testimonialText.textContent = testimonial.text;

    const testimonialAuthor = document.createElement('div');
    testimonialAuthor.classList.add('testimonial-author');
    testimonialAuthor.textContent = `- ${testimonial.author}`;

    testimonialSlide.appendChild(testimonialText);
    testimonialSlide.appendChild(testimonialAuthor);
    testimonialSlider.appendChild(testimonialSlide);
  });
})
.catch(error => console.error('Error loading testimonial data:', error));