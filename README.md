# Personal Website

A modern, responsive personal website built with HTML, CSS, and JavaScript. This website showcases your projects, CV, contact information, and interests in a beautiful, professional design.

## Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Loading**: Optimized for performance with minimal dependencies
- 🎯 **SEO Friendly**: Semantic HTML structure for better search engine optimization
- 🌟 **Interactive**: Smooth scrolling, hover effects, and dynamic content
- 📋 **Complete Sections**: Hero, About, Projects, CV, and Contact sections

## Sections Included

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About Section**: Personal description, interests, and skills
3. **Projects Section**: Showcase of your work with links to GitHub and live demos
4. **CV Section**: Professional experience, education, and certifications
5. **Contact Section**: Contact information and social media links

## Getting Started

### 1. Customize Your Information

Edit the `index.html` file to replace the placeholder content with your information:

#### Personal Information

- Replace "Your Name" with your actual name
- Update the hero subtitle and description
- Add your profile picture (replace the placeholder icon)

#### Contact Information

- Update email address
- Add your phone number
- Update your location
- Add your actual social media links

#### Projects

- Replace the sample projects with your actual projects
- Update project descriptions, technologies used, and links
- Add or remove project cards as needed

#### CV/Resume

- Update your work experience
- Modify education details
- Add your certifications
- Update the download link for your actual CV

#### Skills and Interests

- Customize the skills section with your actual skills
- Update the interest tags to reflect your hobbies and interests

### 2. Add Your Profile Picture

Replace the placeholder profile image in the hero section:

```html
<!-- Replace this -->
<div class="profile-placeholder">
  <i class="fas fa-user"></i>
</div>

<!-- With your actual image -->
<img src="path/to/your/photo.jpg" alt="Your Name" class="profile-image" />
```

### 3. Customize Colors and Styling

Edit the `styles.css` file to match your preferred color scheme:

```css
/* Primary colors */
:root {
  --primary-color: #2563eb;
  --secondary-color: #fbbf24;
  --text-color: #333;
  --background-color: #ffffff;
}
```

### 4. Add Your CV/Resume

1. Create a PDF version of your CV
2. Place it in the project folder
3. Update the download link in the CV section:

```html
<a href="path/to/your/cv.pdf" class="btn btn-primary" download>
  <i class="fas fa-download"></i> Download Full CV
</a>
```

## File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/             # Optional: Create this folder for images
    ├── profile.jpg
    ├── cv.pdf
    └── project-images/
```

## Customization Tips

### Adding More Projects

To add more projects, copy the project card structure:

```html
<div class="project-card">
  <div class="project-image">
    <div class="project-placeholder">
      <i class="fas fa-code"></i>
    </div>
  </div>
  <div class="project-content">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Your project description</p>
    <div class="project-tech">
      <span class="tech-tag">Technology 1</span>
      <span class="tech-tag">Technology 2</span>
    </div>
    <div class="project-links">
      <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
      <a href="#" class="project-link"
        ><i class="fas fa-external-link-alt"></i> Live Demo</a
      >
    </div>
  </div>
</div>
```

### Adding More Skills

Add new skill categories or tags:

```html
<div class="skill-category">
  <h4>New Category</h4>
  <div class="skill-tags">
    <span class="skill-tag">Skill 1</span>
    <span class="skill-tag">Skill 2</span>
  </div>
</div>
```

### Customizing Animations

Modify the animation speed and effects in `script.js`:

```javascript
// Change typing speed
typeWriter(heroTitle, originalText, 80); // Lower number = faster

// Modify scroll animations
const observerOptions = {
  threshold: 0.1, // Trigger point
  rootMargin: "0px 0px -50px 0px", // Offset
};
```

## Deployment

### Option 1: GitHub Pages (Free)

1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify (Free)

1. Create a Netlify account
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. You can add a custom domain later

### Option 3: Vercel (Free)

1. Create a Vercel account
2. Connect your GitHub repository
3. Deploy automatically on every push

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

The website is already optimized for performance:

- Minimal external dependencies
- Optimized CSS and JavaScript
- Responsive images (when you add them)
- Fast loading times

## Contributing

Feel free to fork this project and customize it for your needs. If you make improvements that could benefit others, consider submitting a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your website or have questions, feel free to:

1. Check the code comments for guidance
2. Review the HTML structure for examples
3. Modify the CSS variables for easy color changes

## Future Enhancements

Consider adding these features:

- Blog section
- Contact form with email integration
- Dark mode toggle
- Portfolio gallery
- Testimonials section
- Analytics integration
- Blog functionality
- Multi-language support

---

**Happy coding! 🚀**
