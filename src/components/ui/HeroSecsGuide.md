### HERO SECS COMPONENT GUIDE


## You can hide only specific elements:

  visibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };

### Example 1: Hide only the main image on mobile
```tsx
<HeroSecs 
  title="My Title"
  description="My Description"
  imageSrc="/image.webp"
  buttonText="Click Me"
  linkHref="/link"
  imageVisibility={{
    hideOnMobile: true
  }}
/>
```

### Example 2: Hide background image on desktop
```tsx
<HeroSecs 
  backgroundImage="/bg.webp"
  backgroundVisibility={{
    hideOnDesktop: true
  }}
  // ... other props
/>
```

### Example 3: Hide content on tablet, but keep everything else visible
```tsx
<HeroSecs 
  contentVisibility={{
    hideOnTablet: true
  }}
  // ... other props
/>
```

### Example 4: Show button only on mobile
```tsx
<HeroSecs 
  buttonVisibility={{
    showOnMobile: true
  }}
  // ... other props
/>
```

### Example 5: Complex scenario - hide different elements on different devices
```tsx
<HeroSecs 
  imageVisibility={{
    hideOnMobile: true  // Hide image on mobile
  }}
  contentVisibility={{
    hideOnDesktop: true  // Hide content on desktop
  }}
  buttonVisibility={{
    showOnTablet: true   // Show button only on tablet
  }}
  backgroundVisibility={{
    hideOnTablet: true   // Hide background on tablet
  }}
  // ... other props
/>
```
## Example 6: Complex scenario - hide multiple elements on the same device
```tsx
   <HeroSecs
        title="Expert All-On 4 Implants from $19,950"
        description="Enjoy a new smile with our All-inclusive packages and a relaxing trip to Costa Rica, all for a fraction of the cost back home."
        imageSrc="/images/Layer 1.webp"
        imageVisibility={{hideOnMobile: true}}
        imageAlt="Dental Clinic"
        linkHref="#form"
        backgroundImage="/images/hero/DentalOffice1.webp"
        backgroundVisibility={{hideOnMobile: true}}
        backgroundColor="bg-gradient-to-tl from-purple-400/70 via-purple-600/60 to-purple-900/50"
        buttonText="Free Estimate"
        cardButton="true"
        className="backdrop-blur-sm"
      />

## Key Benefits:

1. **Granular Control**: You can now control each element individually
2. **Backward Compatibility**: The old props still work and apply to all elements
3. **Flexible**: You can mix and match individual controls with global controls
4. **Clean API**: Each element has its own visibility object for clarity

This approach gives you maximum flexibility while keeping the component reusable and easy to use!