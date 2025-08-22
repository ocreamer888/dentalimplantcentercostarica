'use client';
import React from 'react';
import Image from "next/image";
import Header from '../Layout/Header/Header';

interface HeroSecsProps {
  title?: React.ReactNode;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  linkHref?: string;
  backgroundImage?: string;
  id?: string;
  backgroundColor?: string;
  cardButton?: string;
  backDropBlur?: string;
  className?: string;
  
  // Individual visibility controls for each component
  imageVisibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  contentVisibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  buttonVisibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  backgroundVisibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  
  // Legacy props for backward compatibility (apply to all components)
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
  showOnMobile?: boolean;
  showOnTablet?: boolean;
  showOnDesktop?: boolean;
  
  // Dynamic styling props
  colorScheme?: 'default' | 'purple' | 'blue' | 'green' | 'custom';
  customColors?: {
    primary?: string;
    secondary?: string;
    accent?: string;
    text?: string;
  };
  buttonStyle?: 'filled' | 'outlined' | 'gradient' | 'minimal';
  cardStyle?: 'rounded' | 'sharp' | 'glassmorphism' | 'neumorphism';
  
  // Layout variations
  layout?: 'left-content' | 'right-content' | 'center' | 'split';
  imagePosition?: 'left' | 'right' | 'top' | 'bottom';
  contentAlignment?: 'left' | 'center' | 'right';
  spacing?: 'compact' | 'normal' | 'spacious';
  
  // Enhanced Animation & effects
  animations?: {
    entrance?: 'fade' | 'slide-up' | 'slide-left' | 'slide-right' | 'slide-down' | 'zoom' | 'bounce' | 'flip' | 'shake' | 'none';
    hover?: 'lift' | 'glow' | 'scale' | 'rotate' | 'skew' | 'wiggle' | 'pulse' | 'none';
    image?: 'float' | 'pulse' | 'rotate' | 'bounce' | 'shake' | 'wave' | 'morph' | 'none';
    text?: 'typewriter' | 'fade-in-stagger' | 'slide-up-stagger' | 'bounce-stagger' | 'none';
    button?: 'ripple' | 'shake' | 'pulse' | 'glow' | 'none';
    background?: 'parallax' | 'morphing' | 'particle' | 'none';
    scroll?: 'fade-in-on-scroll' | 'slide-in-on-scroll' | 'scale-on-scroll' | 'none';
  };
  
  // Animation timing and easing
  animationConfig?: {
    duration?: 'fast' | 'normal' | 'slow' | 'custom';
    customDuration?: number; // in milliseconds
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'elastic';
    delay?: number; // in milliseconds
    repeat?: 'none' | 'once' | 'twice' | 'infinite';
    direction?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
  };
  effects?: {
    shadow?: 'none' | 'soft' | 'medium' | 'strong';
    blur?: 'none' | 'light' | 'medium' | 'heavy';
    gradient?: 'none' | 'subtle' | 'vibrant';
  };
}

interface Effects {
  shadow?: 'none' | 'soft' | 'medium' | 'strong';
  blur?: 'none' | 'light' | 'medium' | 'heavy';
  gradient?: 'none' | 'subtle' | 'vibrant';
}

interface Animations {
  image?: 'float' | 'pulse' | 'rotate' | 'bounce' | 'shake' | 'wave' | 'morph' | 'none';
  entrance?: 'fade' | 'slide-up' | 'slide-left' | 'zoom' | 'slide-right' | 'slide-down' | 'bounce' | 'flip' | 'shake' | 'none';
}

interface CustomColors {
  primary?: string;
  text?: string;
}

// Helper function to generate responsive visibility classes
const getResponsiveVisibilityClasses = (props: {
  hideOnMobile?: boolean;
  hideOnTablet?: boolean;
  hideOnDesktop?: boolean;
  showOnMobile?: boolean;
  showOnTablet?: boolean;
  showOnDesktop?: boolean;
}) => {
  const classes = [];
  
  // Hide classes
  if (props.hideOnMobile) classes.push('hidden sm:block');
  if (props.hideOnTablet) classes.push('sm:hidden lg:block');
  if (props.hideOnDesktop) classes.push('lg:hidden');
  
  // Show classes (override hide classes)
  if (props.showOnMobile) classes.push('block sm:hidden');
  if (props.showOnTablet) classes.push('hidden sm:block lg:hidden');
  if (props.showOnDesktop) classes.push('hidden lg:block');
  
  return classes.join(' ');
};

const CardImage: React.FC<{ 
  src: string; 
  alt: string;
  visibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  cardStyle?: string;
  effects?: Effects;
  animations?: Animations;
  imagePosition?: string;
}> = ({ src, alt, visibility, cardStyle, effects, animations, imagePosition }) => {
  const visibilityClasses = visibility ? getResponsiveVisibilityClasses(visibility) : '';
  
  // Apply card style effects
  const getCardStyleClasses = () => {
    switch (cardStyle) {
      case 'glassmorphism':
        return 'backdrop-blur-md bg-white/10 border border-white/20';
      case 'neumorphism':
        return 'shadow-[inset_2px_2px_5px_rgba(255,255,255,0.3),inset_-2px_-2px_5px_rgba(0,0,0,0.1)]';
      case 'sharp':
        return 'rounded-none';
      default:
        return 'rounded-full';
    }
  };

  // Apply shadow effects
  const getShadowClasses = () => {
    switch (effects?.shadow) {
      case 'soft':
        return 'shadow-lg';
      case 'medium':
        return 'shadow-xl';
      case 'strong':
        return 'shadow-2xl';
      default:
        return '';
    }
  };

  // Apply image position classes
  const getImagePositionClasses = () => {
    switch (imagePosition) {
      case 'left':
        return 'md:order-first';
      case 'top':
        return 'md:order-first';
      case 'bottom':
        return 'md:order-last';
      default:
        return '';
    }
  };

  // Apply animation classes
  const getImageAnimationClasses = () => {
    const classes = [];
    
    if (animations?.image) {
      switch (animations.image) {
        case 'float':
          classes.push('animate-bounce');
          break;
        case 'pulse':
          classes.push('animate-pulse');
          break;
        case 'rotate':
          classes.push('hover:animate-spin transition-transform duration-1000');
          break;
      }
    }
    
    return classes.join(' ');
  };
  
  return (
    <div className={`flex flex-col w-full md:pb-4 md:px-8 h-auto items-center justify-end ${visibilityClasses} ${getImagePositionClasses()}`}>
      <div className={`flex flex-col items-end justify-end w-full ${getCardStyleClasses()} ${getShadowClasses()} ${getImageAnimationClasses()}`}>
        <Image
          src={src}
          alt={alt}
          height={200}
          width={200}
          sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 50vw"
          quality={100}
          priority
          fetchPriority='high'
          className="object-cover object-top flex w-full md:w-[80vw] md:h-[90vh] h-full md:bg-gradient-to-t from-yellow-600 via-yellow-400/20 to-yellow-200/0 md:pt-12 md:rounded-full"
        />
      </div>
    </div>
  );
};

const CardContent: React.FC<{ 
  title: React.ReactNode; 
  description: string; 
  buttonText: string; 
  linkHref: string;
  visibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  contentAlignment?: string;
  buttonStyle?: string;
  customColors?: CustomColors;
  animations?: Animations;
  effects?: Effects;
}> = ({ title, description, buttonText, linkHref, visibility, contentAlignment, buttonStyle, customColors, animations, effects }) => {
  const visibilityClasses = visibility ? getResponsiveVisibilityClasses(visibility) : '';
  
  // Apply content alignment
  const getAlignmentClasses = () => {
    switch (contentAlignment) {
      case 'center':
        return 'text-center items-center md:items-center';
      case 'right':
        return 'text-right items-center md:items-end';
      default:
        return 'text-left items-center md:items-start';
    }
  };

  // Apply button styling
  const getButtonClasses = () => {
    switch (buttonStyle) {
      case 'outlined':
        return 'border-2 border-current bg-transparent hover:bg-current hover:text-white transition-colors duration-300';
      case 'gradient':
        return 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white transition-all duration-300';
      case 'minimal':
        return 'bg-transparent text-current underline hover:no-underline transition-all duration-300';
      default:
        return 'bg-purple-100 hover:bg-purple-200 text-purple-900 transition-colors duration-300';
    }
  };

  // Apply custom colors if provided
  const getCustomColorStyles = () => {
    if (customColors?.primary) {
      return { backgroundColor: customColors.primary };
    }
    if (customColors?.text) {
      return { color: customColors.text };
    }
    return {};
  };

  // Apply animation classes
  const getContentAnimationClasses = () => {
    const classes = [];
    
    if (animations?.entrance) {
      switch (animations.entrance) {
        case 'fade':
          classes.push('animate-fade-in');
          break;
        case 'slide-up':
          classes.push('animate-slide-up');
          break;
        case 'slide-left':
          classes.push('animate-slide-left');
          break;
        case 'zoom':
          classes.push('animate-zoom-in');
          break;
      }
    }
    
    return classes.join(' ');
  };
  
  return (
    <div className={`absolute md:relative z-10 rounded-3xl w-full h-auto flex flex-col text-balance justify-start md:pt-40 md:pt-0 md:pb-0 gap-4 md:pl-16 lg:pl-24 ${visibilityClasses} ${getAlignmentClasses()} ${getContentAnimationClasses()}`}>
      <h2 id="card-title" className="text-center md:text-start text-balance font-semibold text-6xl lg:text-7xl max-w-2xl" style={getCustomColorStyles()}>{title}</h2>
      <p className="text-xl text-center md:text-start" style={getCustomColorStyles()}>{description}</p>
      <a href={linkHref} className={`hidden md:block relative cursor-pointer font-bold px-8 py-4 rounded-full ${getButtonClasses()}`}>
        {buttonText}
      </a>
    </div>
  );
};

const CardButton: React.FC<{ 
  buttonText: string; 
  linkHref: string;
  visibility?: {
    hideOnMobile?: boolean;
    hideOnTablet?: boolean;
    hideOnDesktop?: boolean;
    showOnMobile?: boolean;
    showOnTablet?: boolean;
    showOnDesktop?: boolean;
  };
  buttonStyle?: string;
  customColors?: CustomColors;
  effects?: Effects;
}> = ({ buttonText, linkHref, visibility, buttonStyle, customColors, effects }) => {
  const visibilityClasses = visibility ? getResponsiveVisibilityClasses(visibility) : '';
  
  // Apply button styling for mobile
  const getMobileButtonClasses = () => {
    switch (buttonStyle) {
      case 'outlined':
        return 'border-2 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white text-yellow-500';
      case 'gradient':
        return 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white';
      case 'minimal':
        return 'bg-transparent text-yellow-500 underline hover:no-underline';
      default:
        return 'bg-yellow-500 hover:bg-purple-200 text-purple-900';
    }
  };

  // Apply custom colors if provided
  const getCustomButtonStyles = () => {
    if (customColors?.primary) {
      return { backgroundColor: customColors.primary };
    }
    if (customColors?.text) {
      return { color: customColors.text };
    }
    return {};
  };

  // Apply effect classes
  const getButtonEffectClasses = () => {
    const classes = [];
    
    if (effects?.shadow) {
      switch (effects.shadow) {
        case 'soft':
          classes.push('shadow-lg');
          break;
        case 'medium':
          classes.push('shadow-xl');
          break;
        case 'strong':
          classes.push('shadow-2xl');
          break;
      }
    }
    
    return classes.join(' ');
  };
  
  return (
    <div className={`absolute md:relative z-10 w-full h-auto flex flex-col text-balance justify-end items-center md:items-start px-8 pb-8 ${visibilityClasses}`}>
      <a href={linkHref} className={`md:hidden uppercase font-bold px-6 py-4 rounded-full transition-all duration-300 ${getMobileButtonClasses()} ${getButtonEffectClasses()}`} style={getCustomButtonStyles()}>
        {buttonText}
      </a>
    </div>
  );
};

class HeroSecsDynamic extends React.Component<HeroSecsProps> {
  static defaultProps = {
    title: "Default Title",
    description: "Default Description",
    imageSrc: "/default-image.webp",
    imageAlt: "Default Image",
    linkHref: "#",
    backgroundColor: "#f8f8f8",
    CardButton: "true",
  };

  render() {
    const { 
      title, 
      description, 
      imageSrc, 
      imageAlt, 
      linkHref, 
      backgroundImage, 
      backgroundColor, 
      backDropBlur, 
      buttonText, 
      cardButton, 
      className,
      // Individual visibility controls
      imageVisibility,
      contentVisibility,
      buttonVisibility,
      backgroundVisibility,
      // Legacy props for backward compatibility
      hideOnMobile,
      hideOnTablet,
      hideOnDesktop,
      showOnMobile,
      showOnTablet,
      showOnDesktop,
      // Dynamic styling props
      colorScheme = 'default',
      customColors,
      buttonStyle = 'filled',
      cardStyle = 'rounded',
      layout = 'left-content',
      imagePosition = 'right',
      contentAlignment = 'left',
      spacing = 'normal',
      animations = {},
      effects = {}
    } = this.props;

    // Legacy visibility props (apply to all if no individual controls are set)
    const legacyVisibility = {
      hideOnMobile,
      hideOnTablet,
      hideOnDesktop,
      showOnMobile,
      showOnTablet,
      showOnDesktop
    };

    // Use individual visibility props if provided, otherwise fall back to legacy props
    const finalImageVisibility = imageVisibility || legacyVisibility;
    const finalContentVisibility = contentVisibility || legacyVisibility;
    const finalButtonVisibility = buttonVisibility || legacyVisibility;
    const finalBackgroundVisibility = backgroundVisibility || legacyVisibility;

    // Dynamic class generation
    const getDynamicClasses = () => {
      const classes = [];
      
      // Color scheme classes
      switch (colorScheme) {
        case 'purple':
          classes.push('bg-purple-50 text-purple-900');
          break;
        case 'blue':
          classes.push('bg-blue-50 text-blue-900');
          break;
        case 'green':
          classes.push('bg-green-50 text-green-900');
          break;
        case 'custom':
          // Apply custom colors via CSS variables
          if (customColors?.primary) {
            classes.push(`bg-[${customColors.primary}]`);
          }
          break;
        default:
          classes.push('bg-gray-50 text-gray-900');
      }
      
      // Layout classes
      switch (layout) {
        case 'center':
          classes.push('text-center items-center');
          break;
        case 'right-content':
          classes.push('md:flex-row-reverse');
          break;
        case 'split':
          classes.push('md:grid md:grid-cols-2');
          break;
      }
      
      // Spacing classes
      switch (spacing) {
        case 'compact':
          classes.push('gap-2 p-4');
          break;
        case 'spacious':
          classes.push('gap-8 p-12');
          break;
        default:
          classes.push('gap-4 p-8');
      }
      
      return classes.join(' ');
    };

    // Apply image position
    const getImagePositionClasses = () => {
      switch (imagePosition) {
        case 'left':
          return 'md:flex-row-reverse';
        case 'top':
          return 'md:flex-col';
        case 'bottom':
          return 'md:flex-col-reverse';
        default:
          return 'md:flex-row';
      }
    };

    // Apply animation classes
    const getAnimationClasses = () => {
      const classes = [];
      
      if (animations.entrance) {
        switch (animations.entrance) {
          case 'fade':
            classes.push('animate-fade-in');
            break;
          case 'slide-up':
            classes.push('animate-slide-up');
            break;
          case 'slide-left':
            classes.push('animate-slide-left');
            break;
          case 'zoom':
            classes.push('animate-zoom-in');
            break;
        }
      }
      
      if (animations.hover) {
        switch (animations.hover) {
          case 'lift':
            classes.push('hover:transform hover:-translate-y-1 transition-transform duration-300');
            break;
          case 'glow':
            classes.push('hover:shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300');
            break;
          case 'scale':
            classes.push('hover:transform hover:scale-105 transition-transform duration-300');
            break;
        }
      }
      
      return classes.join(' ');
    };

    // Apply effect classes
    const getEffectClasses = () => {
      const classes = [];
      
      if (effects.shadow) {
        switch (effects.shadow) {
          case 'soft':
            classes.push('shadow-lg');
            break;
          case 'medium':
            classes.push('shadow-xl');
            break;
          case 'strong':
            classes.push('shadow-2xl');
            break;
        }
      }
      
      if (effects.blur) {
        switch (effects.blur) {
          case 'light':
            classes.push('backdrop-blur-sm');
            break;
          case 'medium':
            classes.push('backdrop-blur-md');
            break;
          case 'heavy':
            classes.push('backdrop-blur-lg');
            break;
        }
      }
      
      if (effects.gradient) {
        switch (effects.gradient) {
          case 'subtle':
            classes.push('bg-gradient-to-r from-gray-100 to-gray-200');
            break;
          case 'vibrant':
            classes.push('bg-gradient-to-r from-purple-400 via-pink-500 to-red-500');
            break;
        }
      }
      
      return classes.join(' ');
    };

    return (
      <div className={`relative flex flex-col h-screen w-full rounded-b-3xl z-50 ${getAnimationClasses()}`}>
        {backgroundImage && (
          <Image 
            src={backgroundImage}
            alt="Background image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={80}
            loading="lazy"
            className={`relative object-top object-cover rounded-b-3xl backdrop-blur ${getResponsiveVisibilityClasses(finalBackgroundVisibility)}`}
          />
        )}
        <Header />
        <div className={`relative flex flex-col md:flex-row h-screen w-full justify-end items-center text-white rounded-b-3xl flex-1 overflow-hidden ${className} ${backDropBlur} ${backgroundColor} ${getDynamicClasses()} ${getImagePositionClasses()} ${getEffectClasses()}`} role="region" aria-labelledby="card-title">      
          <div className='relative flex flex-col flex-1 w-full h-screen justify-around md:justify-center items-center'>
            {title && description && linkHref && buttonText && (
              <CardContent 
                title={title} 
                description={description} 
                buttonText={buttonText} 
                linkHref={linkHref}
                visibility={finalContentVisibility}
                contentAlignment={contentAlignment}
                buttonStyle={buttonStyle}
                customColors={customColors}
                animations={animations}
                effects={effects}
              />
            )}
          </div>
          <div className='flex flex-col w-full md:flex-1 md:pt-20 justify-end items-center'>
            {imageSrc && imageAlt && (
              <CardImage 
                src={imageSrc} 
                alt={imageAlt}
                visibility={finalImageVisibility}
                cardStyle={cardStyle}
                effects={effects}
                animations={animations}
                imagePosition={imagePosition}
              />
            )}
          </div>
        </div>
        <div className="absolute md:hidden flex flex-col md:flex-row h-screen w-full justify-end items-center">
          {cardButton && linkHref && buttonText && (
            <CardButton 
              buttonText={buttonText} 
              linkHref={linkHref}
              visibility={finalButtonVisibility}
              buttonStyle={buttonStyle}
              customColors={customColors}
              effects={effects}
            />
          )}
        </div>
      </div>
    );
  }
}

export default HeroSecsDynamic;

