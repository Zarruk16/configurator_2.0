import React, { useState, useEffect, useRef } from 'react'
import './ConfigurationPanel.css'

// SVG Icons Components
const GemsIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <path
      d="M12 2L15 8L20 9L15 10L12 16L9 10L4 9L9 8L12 2Z"
      stroke="url(#iconGradient)"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill={isActive ? "url(#iconGradient)" : "none"}
      fillOpacity={isActive ? "0.2" : "0"}
    />
    <path
      d="M12 8L13 11L16 12L13 13L12 16L11 13L8 12L11 11L12 8Z"
      stroke="url(#iconGradient)"
      strokeWidth="1"
      strokeLinejoin="round"
      fill={isActive ? "url(#iconGradient)" : "none"}
      fillOpacity={isActive ? "0.4" : "0"}
    />
  </svg>
)

const CutsIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <rect
      x="6"
      y="6"
      width="6"
      height="12"
      rx="1"
      stroke="url(#iconGradient2)"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="12"
      y="4"
      width="6"
      height="12"
      rx="1"
      stroke="url(#iconGradient2)"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

const ColorIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <rect
      x="5"
      y="9"
      width="7"
      height="7"
      rx="1"
      stroke="url(#iconGradient3)"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="9"
      y="5"
      width="7"
      height="7"
      rx="1"
      stroke="url(#iconGradient3)"
      strokeWidth="1.5"
      fill="none"
    />
    <rect
      x="13"
      y="11"
      width="5"
      height="5"
      rx="1"
      stroke="url(#iconGradient3)"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
)

const CrownIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <path
      d="M5 16L7 8L12 10L17 8L19 16H5Z"
      stroke="url(#iconGradient4)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M7 8L9.5 6L12 10L14.5 6L17 8"
      stroke="url(#iconGradient4)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="7" cy="20" r="1.5" fill="url(#iconGradient4)" />
    <circle cx="12" cy="20" r="1.5" fill="url(#iconGradient4)" />
    <circle cx="17" cy="20" r="1.5" fill="url(#iconGradient4)" />
  </svg>
)

const CascadeIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <circle
      cx="12"
      cy="12"
      r="4"
      stroke="url(#iconGradient5)"
      strokeWidth="1.5"
      fill="none"
    />
    <circle
      cx="12"
      cy="12"
      r="6.5"
      stroke="url(#iconGradient5)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M6 8 Q12 10 18 8"
      stroke="url(#iconGradient5)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
)

// Form & Fit Icons
const MaterialStructureIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <rect
      x="4"
      y="6"
      width="16"
      height="12"
      rx="1"
      stroke="url(#iconGradient6)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M8 6V18M16 6V18M4 12H20"
      stroke="url(#iconGradient6)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="10" r="1" fill="url(#iconGradient6)" />
    <circle cx="14" cy="14" r="1" fill="url(#iconGradient6)" />
  </svg>
)

const DesignSculptIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient7" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <path
      d="M12 3L20 7L12 11L4 7L12 3Z"
      stroke="url(#iconGradient7)"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M4 7V17L12 21L20 17V7"
      stroke="url(#iconGradient7)"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12 11V21"
      stroke="url(#iconGradient7)"
      strokeWidth="1.5"
    />
    <circle cx="8" cy="12" r="1.5" fill="url(#iconGradient7)" />
    <circle cx="16" cy="12" r="1.5" fill="url(#iconGradient7)" />
  </svg>
)

const FunctionDetailingIcon = ({ isActive }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iconGradient8" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#533e17" />
        <stop offset="50%" stopColor="#fffe88" />
        <stop offset="100%" stopColor="#533e17" />
      </linearGradient>
    </defs>
    <rect
      x="6"
      y="8"
      width="12"
      height="8"
      rx="1"
      stroke="url(#iconGradient8)"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M9 8V6C9 4.895 9.895 4 11 4H13C14.105 4 15 4.895 15 6V8"
      stroke="url(#iconGradient8)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="10" cy="12" r="1" fill="url(#iconGradient8)" />
    <circle cx="14" cy="12" r="1" fill="url(#iconGradient8)" />
    <path
      d="M8 16H16"
      stroke="url(#iconGradient8)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

function ConfigurationPanel() {
  const [activeTab, setActiveTab] = useState('Adornment')
  const [activeFeature, setActiveFeature] = useState('Gems')
  const [activeCategory, setActiveCategory] = useState('Precious')
  const [selectedGridItem, setSelectedGridItem] = useState(null)
  const [categoryStartIndex, setCategoryStartIndex] = useState(0) // Start index for carousel
  const categoriesPerView = 4 // Number of categories to show at once
  const [hasMoreContent, setHasMoreContent] = useState(false)
  const contentGridRef = useRef(null)
  const [sliderValue, setSliderValue] = useState(50) // Slider value for Size/Cuts
  const [selectedGem, setSelectedGem] = useState({ category: 'Precious', itemIndex: null }) // Track selected gem for Color feature
  const [selectedMaterial, setSelectedMaterial] = useState(null) // Track selected material/texture for color selection
  const [showColorPicker, setShowColorPicker] = useState(false) // Show color picker when material is selected

  const tabs = ['Adornment', 'Form & Fit', 'Experience']
  
  // Get features based on active tab
  const getFeatures = () => {
    if (activeTab === 'Form & Fit') {
      return [
        { id: 'Material & Structure', icon: MaterialStructureIcon },
        { id: 'Design & Sculpt', icon: DesignSculptIcon },
        { id: 'Function & Detailing', icon: FunctionDetailingIcon }
      ]
    } else {
      return [
        { id: 'Gems', icon: GemsIcon },
        { id: 'Cuts', icon: CutsIcon },
        { id: 'Color', icon: ColorIcon },
        { id: 'Crown', icon: CrownIcon },
        { id: 'Cascade', icon: CascadeIcon }
      ]
    }
  }
  
  const features = getFeatures()

  // Get color options for specific materials and textures
  const getMaterialColors = (materialName) => {
    const materialColorMap = {
      // Leather & Leather-Equivalent Types
      'Nappa': ['Black', 'White', 'Ivory', 'Brown', 'Cognac', 'Tan', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Calfskin': ['Black', 'White', 'Brown', 'Cognac', 'Tan', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Taupe'],
      'Patent': ['Black', 'White', 'Red', 'Navy', 'Burgundy', 'Pink', 'Silver', 'Gold', 'Metallic'],
      'Suede': ['Black', 'Brown', 'Tan', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Olive', 'Rust', 'Taupe'],
      'Nubuck': ['Black', 'Brown', 'Tan', 'Navy', 'Grey', 'Charcoal', 'Olive', 'Taupe'],
      'Saffiano': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Red'],
      'Aniline': ['Black', 'Brown', 'Cognac', 'Tan', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Metallic': ['Gold', 'Silver', 'Bronze', 'Copper', 'Gunmetal', 'Rose', 'Champagne'],
      'Mirror': ['Black', 'Silver', 'Gold', 'Rose', 'Champagne', 'Gunmetal'],
      'Pearlized': ['White', 'Ivory', 'Cream', 'Pink', 'Lavender', 'Sky', 'Champagne', 'Pearl'],
      'Lacquered': ['Black', 'Red', 'Navy', 'Burgundy', 'Pink', 'Gold', 'Silver', 'Metallic'],
      'Croc': ['Black', 'Brown', 'Tan', 'Cognac', 'Navy', 'Burgundy', 'Grey'],
      'Snakeskin': ['Black', 'Brown', 'Tan', 'Olive', 'Charcoal', 'Grey', 'Taupe'],
      
      // Non-leather structural textiles
      'Satin': ['Black', 'White', 'Ivory', 'Navy', 'Burgundy', 'Pink', 'Rose', 'Lavender', 'Sky', 'Gold', 'Silver'],
      'Brocade': ['Black', 'Navy', 'Burgundy', 'Gold', 'Silver', 'Bronze', 'Rose', 'Champagne'],
      'Technical': ['Black', 'Grey', 'Charcoal', 'Navy', 'White', 'Silver'],
      'Mesh': ['Black', 'White', 'Grey', 'Navy', 'Charcoal', 'Silver'],
      'Microfiber': ['Black', 'Grey', 'Charcoal', 'Navy', 'White', 'Taupe'],
      
      // Vegan & eco-materials
      'Recycled': ['Black', 'Grey', 'Charcoal', 'Brown', 'Taupe', 'Navy'],
      'Bio': ['Black', 'Brown', 'Tan', 'Olive', 'Grey', 'Taupe'],
      'Premium': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Eco': ['Black', 'Brown', 'Tan', 'Olive', 'Grey', 'Taupe', 'Natural'],
      
      // Sheer & Decorative Layers
      'Organza': ['White', 'Ivory', 'Cream', 'Pink', 'Rose', 'Lavender', 'Sky', 'Champagne', 'Blush'],
      'Tulle': ['White', 'Ivory', 'Black', 'Pink', 'Rose', 'Lavender', 'Sky', 'Champagne'],
      'Chiffon': ['White', 'Ivory', 'Pink', 'Rose', 'Lavender', 'Sky', 'Champagne', 'Blush', 'Peach'],
      'Lace': ['White', 'Ivory', 'Black', 'Cream', 'Pink', 'Rose', 'Champagne', 'Blush'],
      'Veils': ['White', 'Ivory', 'Black', 'Cream', 'Champagne', 'Pearl'],
      
      // Underlays & Structural Fabrics
      'Moiré': ['Black', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Silver'],
      'Velvet': ['Black', 'Navy', 'Burgundy', 'Wine', 'Emerald', 'Royal', 'Charcoal', 'Plum'],
      'Woven': ['Black', 'Brown', 'Tan', 'Navy', 'Grey', 'Charcoal', 'Taupe'],
      
      // Decorative Textiles & Threads
      'Jacquard': ['Black', 'Navy', 'Burgundy', 'Gold', 'Silver', 'Rose', 'Champagne'],
      'Lurex': ['Gold', 'Silver', 'Bronze', 'Rose', 'Champagne', 'Metallic'],
      'Embroidery': ['Black', 'White', 'Gold', 'Silver', 'Rose', 'Champagne', 'Navy', 'Burgundy'],
      'Sequined': ['Black', 'Gold', 'Silver', 'Rose', 'Champagne', 'Metallic', 'Navy'],
      'Threaded': ['Black', 'Gold', 'Silver', 'Rose', 'Champagne', 'Navy', 'Burgundy'],
      
      // Finish Treatments
      'Matte': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal', 'Taupe'],
      'Soft': ['Black', 'White', 'Ivory', 'Cream', 'Brown', 'Grey', 'Taupe', 'Beige'],
      'Satin': ['Black', 'White', 'Ivory', 'Navy', 'Burgundy', 'Pink', 'Rose', 'Lavender', 'Sky', 'Gold', 'Silver'],
      'Semi': ['Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal'],
      'Gloss': ['Black', 'White', 'Red', 'Navy', 'Burgundy', 'Pink', 'Silver', 'Gold', 'Metallic'],
      'Mirror': ['Black', 'Silver', 'Gold', 'Rose', 'Champagne', 'Gunmetal'],
      'Foil': ['Gold', 'Silver', 'Bronze', 'Copper', 'Rose', 'Champagne', 'Metallic'],
      'Brushed': ['Silver', 'Gold', 'Bronze', 'Copper', 'Gunmetal', 'Rose', 'Champagne'],
      'Iridescent': ['White', 'Pink', 'Lavender', 'Sky', 'Champagne', 'Pearl', 'Metallic'],
      'Holographic': ['Silver', 'Gold', 'Metallic', 'Rainbow'],
      'Pearlescent': ['White', 'Ivory', 'Cream', 'Pink', 'Lavender', 'Sky', 'Champagne', 'Pearl'],
      'Crystalline': ['White', 'Cream', 'Champagne', 'Pearl', 'Silver', 'Gold'],
      'Frosted': ['White', 'Ivory', 'Cream', 'Champagne', 'Pearl', 'Silver'],
      'Ombré': ['Black', 'Navy', 'Burgundy', 'Pink', 'Rose', 'Lavender', 'Sky', 'Gold', 'Silver']
    }
    
    // Return colors for the specific material, or default palette if not found
    return materialColorMap[materialName] || [
      'Black', 'White', 'Brown', 'Navy', 'Burgundy', 'Grey', 'Charcoal'
    ]
  }

  // Get hex color for color name - realistic luxury material colors
  const getColorHex = (colorName) => {
    const colorMap = {
      // Neutrals - sophisticated and natural
      'Black': '#0A0A0A', 'White': '#FAFAF8', 'Ivory': '#F5F3ED', 'Cream': '#F0EDE1', 
      'Beige': '#E8E3D5', 'Taupe': '#8B7D6B', 'Brown': '#5C4033', 'Cognac': '#8B4513', 'Tan': '#C19A6B',
      'Grey': '#6B6B6B', 'Charcoal': '#2F2F2F', 'Slate': '#5A5A5A', 'Stone': '#8B8680',
      
      // Blues - deep and refined
      'Navy': '#1A1F3A', 'Royal': '#2C3E7A', 'Midnight': '#1A1A2E', 'Sky': '#B8D4E3', 'Powder': '#D0E4E8',
      
      // Reds - rich and elegant
      'Red': '#8B0000', 'Burgundy': '#4A0E0E', 'Wine': '#5C1A1A', 'Crimson': '#8B1A1A', 'Scarlet': '#8B1C1C',
      
      // Pinks - soft and refined
      'Pink': '#D4A5A5', 'Rose': '#C97D7D', 'Blush': '#D4A5A5', 'Fuchsia': '#B85C8B', 'Magenta': '#8B4789',
      
      // Purples - sophisticated
      'Purple': '#5D4E75', 'Lavender': '#B8A9C9', 'Violet': '#6B4C7A', 'Plum': '#6B4C6B', 'Amethyst': '#8B7D9B',
      
      // Greens - natural and earthy
      'Green': '#4A5D23', 'Forest': '#2F4F2F', 'Emerald': '#3D6B3D', 'Olive': '#6B6B3D', 'Sage': '#9CAF88', 'Mint': '#B8D4B8',
      
      // Yellows/Golds - warm and luxurious
      'Yellow': '#D4AF37', 'Gold': '#C9A961', 'Amber': '#D4A85C', 'Mustard': '#C9A85C', 'Champagne': '#E8DCC0',
      
      // Oranges - warm and natural
      'Orange': '#C97D3D', 'Coral': '#D4A5A5', 'Rust': '#8B4513', 'Terracotta': '#A85C3D', 'Peach': '#E8C9A5',
      
      // Metallics - realistic metal tones
      'Metallic': '#8B8B8B', 'Bronze': '#8B6B3D', 'Copper': '#B87333', 'Gunmetal': '#2C2C2C', 'Silver': '#A8A8A8',
      
      // Special colors
      'Pearl': '#F5F0E8', 'Natural': '#D4C5A9', 'Rainbow': '#8B7D6B'
    }
    return colorMap[colorName] || '#6B6B6B'
  }

  // Get color content based on selected gem
  const getColorContent = (gemCategory) => {
    // Map gem categories to their color options
    const colorMap = {
      'Precious': [
        'Colorless (D-F)',
        'Near Colorless (G-J)',
        'Faint Yellow (K-M)',
        'Very Light Yellow (N-R)',
        'Light Yellow (S-Z)',
        'Fancy Yellow',
        'Fancy Pink',
        'Fancy Blue',
        'Fancy Green',
        'Fancy Brown',
        'Fancy Orange',
        'Fancy Red',
        'Fancy Purple',
        'Fancy Vivid',
        'Fancy Deep',
        'Fancy Intense'
      ],
      'Semi-Precious': [
        'Red',
        'Pink',
        'Orange',
        'Yellow',
        'Green',
        'Blue',
        'Purple',
        'Violet',
        'Indigo',
        'Teal',
        'Turquoise',
        'Magenta',
        'Lavender',
        'Peach',
        'Coral',
        'Mint',
        'Lime',
        'Navy',
        'Maroon',
        'Burgundy'
      ],
      'Organic Gems': [
        'White',
        'Cream',
        'Beige',
        'Brown',
        'Black',
        'Red',
        'Orange',
        'Yellow',
        'Golden',
        'Amber',
        'Honey',
        'Caramel',
        'Champagne',
        'Ivory',
        'Pearl White',
        'Pink'
      ],
      'Man-Made': [
        'Colorless',
        'Blue',
        'Pink',
        'Yellow',
        'Green',
        'Red',
        'Purple',
        'Orange',
        'Teal',
        'Lavender',
        'Mint',
        'Rose',
        'Aqua',
        'Cyan',
        'Magenta',
        'Indigo'
      ],
      'Extended Natural': [
        'Natural',
        'Treated',
        'Enhanced',
        'Heat Treated',
        'Irradiated',
        'Coated',
        'Dyed',
        'Stabilized'
      ],
      'Colour Families': [
        'Warm',
        'Cool',
        'Neutral',
        'Pastel',
        'Vibrant',
        'Muted',
        'Earth Tones',
        'Jewel Tones',
        'Metallic',
        'Iridescent'
      ],
      'Textures': [
        'Smooth',
        'Textured',
        'Faceted',
        'Matte',
        'Semi-Gloss',
        'Glossy',
        'Polished',
        'Rough'
      ],
      'Special Effects': [
        'Iridescent',
        'Opalescent',
        'Chatoyant',
        'Asterism',
        'Color Change',
        'Aventurescence',
        'Labradorescence',
        'Play of Color'
      ]
    }
    
    return colorMap[gemCategory] || []
  }

  // Check if current category should show colors after material selection
  const shouldShowColors = () => {
    if (activeFeature === 'Material & Structure') {
      const colorableCategories = ['Base', 'Finish', 'Textiles']
      return colorableCategories.includes(activeCategory) && selectedMaterial !== null
    }
    return false
  }

  // Content items for each category
  const getCategoryContent = (category) => {
    // If Color feature is active, show colors based on selected gem
    if (activeFeature === 'Color') {
      return getColorContent(selectedGem.category)
    }
    
    // If material/texture is selected, show color options for that specific material
    if (shouldShowColors() && selectedMaterial) {
      return getMaterialColors(selectedMaterial)
    }
    
    switch (category) {
      // Gems categories
      case 'Precious':
        return [
          'Diamond',
          'Emerald',
          'Ruby',
          'Sapphire',
          'Alexandrite',
          'Benitoite',
          'Jadeite',
          'Paraiba Tourmaline',
          'Red Spinel'
        ]
      case 'Semi-Precious':
        return [
          'Agate',
          'Amazonite',
          'Amethyst',
          'Ametrine',
          'Apatite',
          'Aquamarine',
          'Aventurine',
          'Bloodstone',
          'Carnelian',
          'Chalcedony',
          'Chrysoprase',
          'Citrine',
          'Fluorite',
          'Garnet',
          'Goshenite',
          'Heliodor',
          'Hematite',
          'Howlite',
          'Iolite',
          'Jasper',
          'Kyanite',
          'Labradorite',
          'Lapis Lazuli',
          'Larimar',
          'Lepidolite',
          'Malachite',
          'Moonstone',
          'Morganite',
          'Obsidian',
          'Onyx',
          'Opal',
          'Peridot',
          'Prehnite',
          'Pyrite',
          'Rainbow Moonstone',
          'Rhodochrosite',
          'Rhodonite',
          'Rose Quartz',
          'Serpentine',
          'Smoky Quartz',
          'Sodalite',
          'Spinel',
          'Sunstone',
          'Tanzanite',
          'Tiger\'s Eye',
          'Topaz',
          'Tourmaline',
          'Turquoise',
          'Unakite',
          'Zircon',
          'Tsavorite',
          'Dumortierite'
        ]
      case 'Organic Gems':
        return [
          'Amber',
          'Ammolite',
          'Bone',
          'Bog Oak',
          'Coral',
          'Copal',
          'Fossilized Wood',
          'Ivory',
          'Jet',
          'Mother-of-Pearl',
          'Nacre',
          'Odontolite',
          'Pearl',
          'Shell',
          'Tortoiseshell',
          'Tagua Nut'
        ]
      case 'Man-Made':
        return [
          'Synthetic Diamond',
          'Synthetic Ruby',
          'Synthetic Sapphire',
          'Synthetic Spinel',
          'Synthetic Quartz',
          'Synthetic Quartz Crystal Clusters',
          'Synthetic Emerald',
          'Synthetic Alexandrite',
          'Synthetic Moissanite',
          'Synthetic Aquamarine',
          'Synthetic Topaz',
          'Synthetic Opal',
          'Synthetic Jadeite',
          'Synthetic Lapis Lazuli',
          'Synthetic Turquoise',
          'Synthetic Malachite',
          'Cubic Zirconia',
          'Opalite',
          'Swarovski Crystal',
          'Bismuth Crystal',
          'Glass Gemstones',
          'Goldstone',
          'Paste',
          'YAG',
          'GGG',
          'Lab-Created Garnet',
          'Neoceram',
          'Glass-filled Gems',
          'Iridescent Glass',
          'Triplets & Doublets',
          'Synthetic Opal Doublet',
          'Lab-Created Emerald Overgrowth',
          'Reconstituted Stones',
          'Foil-Backed or Coated Stones',
          'Girdled Stones',
          'Resin-Impregnated Stones',
          'Acrylic / Polymer Gems'
        ]
      case 'Extended Natural':
        return [
          'Amblygonite',
          'Andalusite',
          'Axinite',
          'Azurite',
          'Austrophyllite',
          'Beryl (RARE types)',
          'Brookite',
          'Cassiterite',
          'Charoite',
          'Chrysocolla',
          'Clinohumite',
          'Diaspore (Zultanite)',
          'Dioptase',
          'Dravite',
          'Dumortierite',
          'Ekanite',
          'Enstatite',
          'Euclase',
          'Fluorite (Collector-grade)',
          'Gaspeite',
          'Grandidierite',
          'Hackmanite',
          'Hemimorphite',
          'Hessonite',
          'Howlite',
          'Idocrase (Vesuvianite)',
          'Iolite (Uncommon grades)',
          'Jeremejevite',
          'Kornerupine',
          'Kämmererite',
          'Kudite',
          'Larimar',
          'Lazulite',
          'Liddicoatite',
          'Magnesite',
          'Musgravite',
          'Muscovite',
          'Painite',
          'Pectolite',
          'Petalite',
          'Pietersite',
          'Poudretteite',
          'Prehnite (Collector grades)',
          'Scapolite',
          'Seraphinite',
          'Serendibite',
          'Shattuckite',
          'Smithsonite',
          'Sphalerite',
          'Sphene (Titanite)',
          'Stichtite',
          'Sugilite',
          'Taaffeite',
          'Thulite',
          'Tremolite',
          'Variscite',
          'Vesuvianite',
          'Zoisite'
        ]
      case 'Colour Families':
        return Array.from({ length: 10 }, (_, i) => `Colour ${i + 1}`)
      case 'Textures':
        return Array.from({ length: 7 }, (_, i) => `Texture ${i + 1}`)
      case 'Special Effects':
        return Array.from({ length: 5 }, (_, i) => `Special ${i + 1}`)
      // Cuts categories
      case 'Cuts':
        return Array.from({ length: 12 }, (_, i) => `Cut ${i + 1}`)
      case 'Size':
        return Array.from({ length: 8 }, (_, i) => `Size ${i + 1}`)
      // Form & Fit - Material & Structure categories
      case 'Base':
        return [
          // Material Families - Leather & Leather-Equivalent Types
          'Nappa', 'Calfskin', 'Patent', 'Suede', 'Nubuck', 'Saffiano', 'Aniline', 'Metallic',
          'Mirror', 'Pearlized', 'Lacquered', 'Croc', 'Snakeskin',
          // Non-leather structural textiles
          'Satin', 'Brocade', 'Technical', 'Mesh', 'Microfiber',
          // Vegan & eco-materials
          'Recycled', 'Bio', 'Premium', 'Eco',
          // Base Architecture - Width Profiles
          'Narrow', 'Regular', 'Wide',
          // Foundational Weight & Density
          'Standard', 'Lightweight', 'Ultralight',
          // Structural Reinforcements - Shank Types
          'Carbon', 'Steel', 'Bamboo', 'Composite',
          // Heel Core Types
          'Solid', 'Hollow', 'Lock'
        ]
      case 'Finish':
        return [
          // Finish Treatments (Sheen + Light Behavior)
          'Matte', 'Soft', 'Satin', 'Semi', 'Gloss', 'Mirror',
          'Foil', 'Brushed', 'Iridescent', 'Holographic', 'Pearlescent', 'Crystalline', 'Frosted', 'Ombré',
          // Texture Detailing
          'Croc', 'Snake', 'Pebble', 'Debossed', 'Laser',
          'Etched', 'Crinkled', 'Marbled', 'Micro', 'Macro'
        ]
      case 'Textiles':
        return [
          // Sheer & Decorative Layers
          'Organza', 'Tulle', 'Chiffon', 'Lace', 'Mesh', 'Veils',
          // Underlays & Structural Fabrics
          'Satin', 'Moiré', 'Velvet', 'Woven', 'Technical',
          // Decorative Textiles & Threads
          'Jacquard', 'Lurex', 'Embroidery', 'Sequined', 'Threaded'
        ]
      case 'Hardware':
        return [
          // Metal Families - Metal Options
          'Gold', 'Rose', 'Platinum', 'Titanium', 'Palladium', 'Rhodium', 'Brass', 'Chrome', 'Nickel',
          // Metal Finishes
          'Polished', 'Brushed', 'Hammered', 'Engraved', 'Textured', 'Enamel', 'Filigree', 'Lace',
          // Hardware Components
          'Studs', 'Rivets', 'Screws', 'Buckles', 'Clasps'
        ]
      case 'Innovation':
        return [
          // Innovation Materials
          'Memory', 'Liquid', 'Nano', 'Reflective', 'Bio', 'Thermoregulators',
          // Durability Enhancements
          'Resistant', 'Protected', 'Stable', 'Durable', 'Reinforced',
          // Sustainability Features
          'Recycled', 'Sustainable', 'Repairable', 'Certified',
          // Water Resistance Levels
          'Standard', 'Resistant', 'Shield', 'Waterproof'
        ]
      // Form & Fit - Design & Sculpt categories
      case 'Structure & Silhouette':
        return [
          'Stiletto', 'Block', 'Platform', 'Wedge', 'Flat', 'Fluted heel', 'Split heel', 'Sculpted heel', 'Hybrid art form',
          'Proportion', 'Stance', 'Spatial flow', 'Weight distribution', 'Heel-to-toe ratio guidelines', 'Toe exposure percentage ranges',
          'Upper coverage index', 'Visual center-of-gravity mapping', 'Heel–toe ratio', 'Exposure ratios', 'Ergonomic equilibrium',
          'Platform toggle - On', 'Platform toggle - Off', 'Platform depth vs visual elongation metrics', 'Upper structure - Open',
          'Upper structure - Closed', 'Asymmetry options', 'Cut-out pattern/geometry library', 'Arch Profile - Classic (standard)',
          'Arch Profile - Elevated (high)', 'Arch Profile - Ultra-elevated', 'Arch Profile - Ergonomic', 'Arch Profile - Kinetic-Flex (adaptive)',
          'Balance Calibration', 'Contour & Silhouette - Streamlined', 'Contour & Silhouette - Architectural', 'Contour & Silhouette - Flowing',
          'Contour & Silhouette - Corseted', 'Dynamic Motion Geometry', 'Curvature lines', 'Movement sculpted into stillness'
        ]
      case 'Sculptural Design':
        return [
          'Pointed (commanding)', 'Almond (elegant)', 'Round (soft)', 'Square (assertive)', 'Peep (playful)',
          'Sculpted Asymmetry (avant-garde)', 'Toe length parameters', 'Toe taper parameters', 'Geometric blocks (angular/cut precision)',
          'Spools', 'Curved (grace flow)', 'Crystal blocks', 'Faceted/Jewel-like (light-reactive planes)', 'Organic (fluid)', 'Split',
          'Twisted/kinetic tension', 'Artistic motif heels (statement)', 'Heel height presets (cm)', 'Clean edges (precision)',
          'Folded/plissé edges (architectural/tactile depth)', 'Waved contours (motion continuity/rhythmic)', 'Draped (textural fluidity)',
          'Contoured ergonomic lines (body-synced refinement)', 'Transition morphologies with radius settings', 'Draping folds',
          'Embossed ribs', 'Layered wraps', 'Kinetic flutes', 'Sculpted ribs', 'Volume depth controls', 'Relief Carving',
          'Subtle recesses', 'Raised motifs', 'Ankle Strap - Single', 'Ankle Strap - Multi-wrap', 'Ankle Strap - Cuff',
          'Instep / Mid Strap', 'Toe Strap', 'T-Strap', 'Slingback', 'Crossover/Criss-Cross', 'Wraparound', 'Lace-Up',
          'Harness/Cage', 'Mary-Jane', 'Decorative Cascade', 'Articulation Zones', 'Strap width - Micro (1–6mm)',
          'Strap width - Narrow (7–12mm)', 'Strap width - Medium (13–20mm)', 'Strap width - Wide (21–40mm+)',
          'Padded straps', 'Reinforced straps', 'Elasticated straps', 'Adjustable (buckles/sliders)', 'Magnetic quick-release',
          'Interchangeable strap modules', 'Piped edge', 'Rolled edge', 'Raw edge', 'Topstitch', 'Invisible stitch', 'Studded',
          'Perforated', 'Laser pattern', 'Load-bearing strap', 'Adjustive strap', 'Decorative strap', 'Hybrid strap',
          'Heel-to-Toe Dialogue'
        ]
      case 'Design Harmony':
        return [
          'Visual Weight - Lightness', 'Visual Weight - Solidity', 'Flow continuity', 'Flow lock toggle', 'Edge transitions',
          'Seam transitions', 'Silhouette transitions', 'Continuous line from toe → arch → heel', 'Seamless transitions from toe to heel',
          'Uninterrupted visual rhythm', 'Material–Geometry blending rule sets', 'Satin + folded edge combo', 'Patent + clean edge combo',
          'Material–Geometry contrast', 'Material–Geometry fusion', 'Gradient continuity', 'Soft leather + metallic precision',
          'Matte suede against mirror gloss', 'Silk overlays over structured bases', 'Symmetry - Perfect balance',
          'Symmetry - Intentional tension', 'Perfect symmetry', 'Intentional asymmetry presets', 'Iconic Silhouette Identifier',
          'Signature Divatude outline', 'Recognizable sculptural gesture', 'Saved silhouettes (brand signatures)',
          'Transition Morphology', 'Sharp angular seams', 'Rolled transitions', 'Melted curves', 'Line Emotion',
          'Linear tension for confidence', 'Soft arcs for romance', 'Interwoven curves for modern sensuality',
          'Harmony Check feedback overlay'
        ]
      // Form & Fit - Function & Detailing categories
      case 'Function':
        return [
          // Cushioning & Support
          'Memory', 'Gel', 'Hybrid', 'Air', 'Padded', 'Firm',
          // Flexibility
          'Rigid', 'Semi', 'Dynamic', 'Flex',
          // Weight Options
          'Standard', 'Lightweight', 'Ultralight',
          // Comfort Features
          'Breathable', 'Wicking', 'Thermoregulated', 'Heated',
          // Closure Systems
          'Elastic', 'Buckle', 'Stretch', 'Modular', 'Adaptive'
        ]
      case 'Ergonomic':
        return [
          // Fit Options
          'Tight', 'Classic', 'Relaxed',
          // Support Features
          'Contour', 'Arch', 'Balance', 'Alignment',
          // Stabilization
          'Lock', 'Weighted', 'Stabilization'
        ]
      case 'Craft':
        return [
          // Stitching Styles
          'Invisible', 'Contrast', 'Sculpted', 'Signature',
          // Edge Treatments
          'Piped', 'Rolled', 'Bound', 'Raw', 'Jewelled', 'Polished',
          // Decorative Elements
          'Metallic', 'Gem', 'Applique', 'Layered', 'Embroidery',
          'Monogram', 'Engraved', 'Crystal', 'Embedded', 'Stamp',
          // Hardware Details
          'Studs', 'Rivets', 'Filigree'
        ]
      case 'Sole':
        return [
          // Sole Materials & Finishes
          'Matte', 'Gloss', 'Textured', 'Rubberized', 'Leather', 'Marbled',
          // Sole Details
          'Engraved', 'Sculpted', 'Patterned', 'Rubber',
          // Functional Features
          'Shock', 'Modular', 'Replaceable'
        ]
      case 'Care':
        return [
          // Durability Features
          'Resistant', 'Protected', 'Reinforced', 'Waterproof',
          // Modularity
          'Modular', 'Replaceable', 'Repairable',
          // Sustainability
          'Sustainable', 'Recyclable', 'Recycled'
        ]
      default:
        return []
    }
  }


  // Dynamic categories based on active feature
  const getCategories = () => {
    switch (activeFeature) {
      case 'Gems':
        return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
      case 'Cuts':
        return ['Cuts', 'Size']
      case 'Color':
        return [] // No categories for Color, show colors directly
      case 'Crown':
        return ['Style', 'Height', 'Width']
      case 'Cascade':
        return ['Pattern', 'Flow', 'Direction']
      // Form & Fit categories
      case 'Material & Structure':
        return ['Base', 'Finish', 'Textiles', 'Hardware', 'Innovation']
      case 'Design & Sculpt':
        return ['Structure & Silhouette', 'Sculptural Design', 'Design Harmony']
      case 'Function & Detailing':
        return ['Function', 'Ergonomic', 'Craft', 'Sole', 'Care']
      default:
        return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
    }
  }

  const allCategories = getCategories()
  // For Gems, Cuts, and Form & Fit features, ensure we show the last 4 buttons when at the end
  const getVisibleCategories = () => {
    const formFitFeatures = ['Material & Structure', 'Design & Sculpt', 'Function & Detailing']
    const needsCarousel = activeFeature === 'Gems' || activeFeature === 'Cuts' || formFitFeatures.includes(activeFeature)
    if (!needsCarousel) return allCategories
    const maxStart = Math.max(0, allCategories.length - categoriesPerView)
    const adjustedStart = Math.min(categoryStartIndex, maxStart)
    return allCategories.slice(adjustedStart, adjustedStart + categoriesPerView)
  }
  const categories = getVisibleCategories()
  const formFitFeatures = ['Material & Structure', 'Design & Sculpt', 'Function & Detailing']
  const needsCarousel = activeFeature === 'Gems' || activeFeature === 'Cuts' || formFitFeatures.includes(activeFeature)
  const hasMoreCategories = needsCarousel && categoryStartIndex < (allCategories.length - categoriesPerView)
  const hasPreviousCategories = needsCarousel && categoryStartIndex > 0

  // Reset category start index when feature changes
  const handleFeatureChange = (featureId) => {
    setActiveFeature(featureId)
    setCategoryStartIndex(0)
    setSelectedGridItem(null)
    // Get categories for the new feature
    const getNewCategories = () => {
      switch (featureId) {
        case 'Gems':
          return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
        case 'Cuts':
          return ['Cuts', 'Size']
        case 'Color':
          return ['Hue', 'Saturation', 'Brightness']
        case 'Crown':
          return ['Style', 'Height', 'Width']
        case 'Cascade':
          return ['Pattern', 'Flow', 'Direction']
        case 'Material & Structure':
          return ['Base', 'Finish', 'Textiles', 'Hardware', 'Innovation']
        case 'Design & Sculpt':
          return ['Structure & Silhouette', 'Sculptural Design', 'Design Harmony']
        case 'Function & Detailing':
          return ['Function', 'Ergonomic', 'Craft', 'Sole', 'Care']
        default:
          return ['Precious', 'Semi-Precious', 'Organic Gems', 'Man-Made', 'Extended Natural', 'Colour Families', 'Textures', 'Special Effects']
      }
    }
    const newCategories = getNewCategories()
    setActiveCategory(newCategories[0] || '')
    // If switching to Color feature and no gem is selected, default to Precious
    if (featureId === 'Color' && !selectedGem.category) {
      setSelectedGem({ category: 'Precious', itemIndex: null })
    }
  }

  // Handle tab changes - reset feature and category
  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setCategoryStartIndex(0)
    setSelectedGridItem(null)
    if (tab === 'Form & Fit') {
      setActiveFeature('Material & Structure')
      setActiveCategory('Base')
    } else {
      setActiveFeature('Gems')
      setActiveCategory('Precious')
    }
  }

  // Reset when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setSelectedGridItem(null)
    setSelectedMaterial(null)
    setShowColorPicker(false)
  }

  // Check if there's more content to scroll
  useEffect(() => {
    const checkScroll = () => {
      if (contentGridRef.current) {
        const wrapper = contentGridRef.current
        const hasScroll = wrapper.scrollHeight > wrapper.clientHeight
        const isAtBottom = wrapper.scrollHeight - wrapper.scrollTop <= wrapper.clientHeight + 10
        setHasMoreContent(hasScroll && !isAtBottom)
      }
    }

    // Check after render
    setTimeout(checkScroll, 0)
    
    // Also check when category changes
    if (contentGridRef.current) {
      contentGridRef.current.addEventListener('scroll', checkScroll)
      return () => {
        if (contentGridRef.current) {
          contentGridRef.current.removeEventListener('scroll', checkScroll)
        }
      }
    }
  }, [activeCategory])

  const handleShowMoreCategories = () => {
    const formFitFeatures = ['Material & Structure', 'Design & Sculpt', 'Function & Detailing']
    if (activeFeature === 'Gems' || activeFeature === 'Cuts' || formFitFeatures.includes(activeFeature)) {
      const maxStart = Math.max(0, allCategories.length - categoriesPerView)
      setCategoryStartIndex(prev => Math.min(prev + 1, maxStart))
    }
  }

  const handleShowPreviousCategories = () => {
    const formFitFeatures = ['Material & Structure', 'Design & Sculpt', 'Function & Detailing']
    if ((activeFeature === 'Gems' || activeFeature === 'Cuts' || formFitFeatures.includes(activeFeature)) && categoryStartIndex > 0) {
      setCategoryStartIndex(prev => Math.max(prev - 1, 0))
    }
  }


  return (
    <div className="configuration-panel">
      {/* Top Navigation Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Feature Selection */}
      <div className="feature-selection">
        {activeTab === 'Form & Fit' ? (
          // Form & Fit: All features in individual cards
          features.map((feature) => {
            const IconComponent = feature.icon
            const isActive = activeFeature === feature.id
            return (
              <div
                key={feature.id}
                className={`feature-card ${isActive ? 'active' : ''}`}
              >
                <button
                  className="feature-button"
                  onClick={() => handleFeatureChange(feature.id)}
                >
                  <div className="feature-icon">
                    <IconComponent isActive={isActive} />
                  </div>
                  <div className="feature-label">
                    {feature.id}
                  </div>
                </button>
              </div>
            )
          })
        ) : (
          // Adornment: First 3 in cards, last 2 in crown-cascade card
          <>
            {features.slice(0, 3).map((feature) => {
              const IconComponent = feature.icon
              const isActive = activeFeature === feature.id
              return (
                <div
                  key={feature.id}
                  className={`feature-card ${isActive ? 'active' : ''}`}
                >
                  <button
                    className="feature-button"
                    onClick={() => handleFeatureChange(feature.id)}
                  >
                    <div className="feature-icon">
                      <IconComponent isActive={isActive} />
                    </div>
                    <div className="feature-label">
                      {feature.id}
                    </div>
                  </button>
                </div>
              )
            })}
            <div className={`crown-cascade-card ${activeFeature === 'Crown' || activeFeature === 'Cascade' ? 'active' : ''}`}>
              <div className="crown-cascade-tabs">
                {features.slice(3).map((feature) => {
                  const IconComponent = feature.icon
                  const isActive = activeFeature === feature.id
                  return (
                    <button
                      key={feature.id}
                      className={`crown-cascade-tab ${isActive ? 'active' : ''}`}
                      onClick={() => handleFeatureChange(feature.id)}
                    >
                      <div className="feature-icon">
                        <IconComponent isActive={isActive} />
                      </div>
                      <div className="feature-label">
                        {feature.id}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Sub-Category Categories */}
      {activeFeature !== 'Color' && (
        <div className="filters-section">
          {hasPreviousCategories && (
            <button 
              className="filter-arrow-button filter-arrow-button-left"
              onClick={handleShowPreviousCategories}
            >
              <i className="fa-solid fa-chevron-left filter-arrow-icon"></i>
            </button>
          )}
          <div className={`filters-container ${hasMoreCategories ? 'has-more' : ''} ${hasPreviousCategories ? 'has-prev' : ''}`}>
            <div className="filters">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`filter-button ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {hasMoreCategories && (
            <button 
              className="filter-arrow-button filter-arrow-button-right"
              onClick={handleShowMoreCategories}
            >
              <i className="fa-solid fa-chevron-right filter-arrow-icon"></i>
            </button>
          )}
        </div>
      )}

      {/* Back button when showing colors for material */}
      {shouldShowColors() && (
        <div className="material-color-header">
          <button
            className="back-to-material-button"
            onClick={() => {
              setSelectedMaterial(null)
              setShowColorPicker(false)
              setSelectedGridItem(null)
            }}
          >
            ← Back to {selectedMaterial}
          </button>
          <span className="material-color-label">
            Select color for {selectedMaterial}
          </span>
        </div>
      )}

      {/* Content Grid or Slider */}
      {activeFeature === 'Cuts' && activeCategory === 'Size' ? (
        <div className="content-grid-section">
          <div className="content-grid-wrapper">
            <div className="slider-section">
              <div className="slider-container">
                <div className="slider-track-wrapper">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="custom-slider"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`content-grid-section ${hasMoreContent ? 'has-more' : ''}`}>
          <div 
            ref={contentGridRef}
            className="content-grid-wrapper"
            onScroll={(e) => {
              const wrapper = e.currentTarget
              const hasScroll = wrapper.scrollHeight > wrapper.clientHeight
              const isAtBottom = wrapper.scrollHeight - wrapper.scrollTop <= wrapper.clientHeight + 10
              setHasMoreContent(hasScroll && !isAtBottom)
            }}
          >
            <div className="content-grid">
              {getCategoryContent(activeFeature === 'Color' ? 'Color' : activeCategory).map((item, index) => (
                <div
                  key={index}
                  className={`grid-item ${selectedGridItem === index ? 'active' : ''}`}
                  onClick={() => {
                    if (activeFeature === 'Gems') {
                      // Track gem selection for Color feature
                      setSelectedGem({ category: activeCategory, itemIndex: index })
                      setSelectedGridItem(index)
                    } else if (activeFeature === 'Material & Structure' && shouldShowColors()) {
                      // Color selection for material
                      setSelectedGridItem(index)
                      // Here you would apply the color to the selected material
                    } else if (activeFeature === 'Material & Structure' && ['Base', 'Finish', 'Textiles'].includes(activeCategory)) {
                      // Material/texture selection - show color picker
                      setSelectedMaterial(item)
                      setSelectedGridItem(index)
                      setShowColorPicker(true)
                    } else {
                      setSelectedGridItem(index)
                    }
                  }}
                  style={
                    shouldShowColors() ? {
                      // Show color swatch for color items
                      background: `linear-gradient(135deg, ${getColorHex(item)} 0%, ${getColorHex(item)} 100%)`,
                      backgroundSize: 'cover'
                    } : {}
                  }
                >
                  {shouldShowColors() ? (
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      borderRadius: '8px',
                      backgroundColor: getColorHex(item),
                      border: selectedGridItem === index ? '2px solid #fffe88' : 'none'
                    }}></div>
                  ) : (
                    item
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Scroll indicator - positioned outside the scrollable area */}
          {hasMoreContent && (
            <div className="content-scroll-indicator">
              <button 
                className="content-scroll-arrow"
                onClick={() => {
                  if (contentGridRef.current) {
                    contentGridRef.current.scrollBy({ top: 200, behavior: 'smooth' })
                  }
                }}
              >
                <i className="fa-solid fa-chevron-down"></i>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ConfigurationPanel
