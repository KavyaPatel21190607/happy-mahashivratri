# 🕉️ Digital Bhakti Experience

> An immersive spiritual journey combining ancient Hindu traditions with modern web technology

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)

## 📖 Overview

Digital Bhakti Experience is a modern web application that brings sacred Hindu pilgrimage sites and spiritual practices into the digital realm. Experience virtual darshan of the 12 Jyotirlingas and 51 Shakti Peethas, perform interactive puja rituals, and immerse yourself in devotional practices from the comfort of your home.

## ✨ Key Features

### 🛕 Virtual Pilgrimage
- **12 Jyotirlingas Darshan**: Virtual tour of all sacred Shiva temples with authentic images and mantras
- **51 Shakti Peethas Darshan**: Complete collection of Goddess Shakti's sacred sites with descriptions and shlokas
- Smooth navigation with beautiful transitions and animations
- Complete information about each site including location, body part significance, and spiritual importance

### 🪔 Interactive Puja
- **3D Sacred Diya**: Light a realistic 3D animated diya with flickering flame effects
- **Flower Offerings**: Offer lotus or marigold flowers with realistic falling animations
- **Divine Blessings**: Receive spiritual messages upon completing rituals
- **Immersive 3D Experience**: Rotate and view the puja scene from different angles
- Sacred audio effects enhance the spiritual atmosphere

### 🎨 Modern Design
- Responsive design optimized for all devices (mobile, tablet, desktop)
- Dark theme with spiritual color palette (saffron, gold, crimson)
- Smooth animations powered by Framer Motion and GSAP
- Glassmorphism effects and ambient glows for ethereal appearance
- Custom fonts including Devanagari script support

## 🛠️ Technologies Used

### Core
- **React 18.3.1** - UI framework
- **TypeScript 5.6.2** - Type-safe development
- **Vite 6.0.5** - Fast build tool and dev server
- **React Router 7.1.1** - Client-side routing

### 3D Graphics
- **Three.js 0.172.0** - 3D rendering engine
- **React Three Fiber 8.17.10** - React renderer for Three.js
- **React Three Drei 9.117.3** - Useful helpers for R3F

### Animations
- **Framer Motion 12.0.0** - Production-ready motion library
- **GSAP 3.12.7** - Professional animation toolkit

### Styling
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Lucide React** - Beautiful icon library

### Audio
- Custom devotional audio system with bell sounds and flower chimes

## 📁 Project Structure

```
Digital Bhakti Experience/
├── src/
│   ├── app/
│   │   ├── components/          # React components
│   │   │   ├── InteractivePuja.tsx    # 3D Puja experience
│   │   │   ├── JyotirlingaDarshan.tsx # Jyotirlinga tour
│   │   │   ├── ShaktiPeethaDarshan.tsx # Shakti Peetha tour
│   │   │   ├── LandingPage.tsx        # Home page
│   │   │   ├── figma/                 # Design components
│   │   │   └── ui/                    # Reusable UI components
│   │   ├── data/                # Data files
│   │   │   ├── jyotirlingas.ts        # Jyotirlinga information
│   │   │   └── shaktiPeethas.ts       # Shakti Peetha information
│   │   ├── utils/               # Utility functions
│   │   │   └── audio.ts               # Audio management
│   │   ├── App.tsx              # Main app component
│   │   └── routes.tsx           # Route definitions
│   ├── styles/                  # Global styles
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   ├── main.tsx                 # Entry point
│   └── three-types.d.ts         # Three.js type definitions
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/digital-bhakti-experience.git
cd digital-bhakti-experience
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

4. **Open your browser**
```
Navigate to http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📱 Usage Guide

### Landing Page
- Choose from three main experiences:
  1. **12 Jyotirlingas Darshan** - Visit sacred Shiva temples
  2. **51 Shakti Peethas Darshan** - Explore Goddess Shakti sites
  3. **Interactive Puja** - Perform virtual puja rituals

### Jyotirlinga Darshan
1. View detailed information about each Jyotirlinga
2. Navigate using Previous/Next buttons or progress dots
3. Read mantras and descriptions
4. See authentic temple images
5. Track your progress (1/12 to 12/12)

### Shakti Peetha Darshan
1. Explore all 51 Shakti Peethas
2. View temple images or sacred shlokas
3. Learn about body part significance
4. Navigate through all locations
5. Access from anywhere with responsive design

### Interactive Puja
1. **View Sacred Image**: Mahadev and Parvati displayed at the top
2. **Light the Diya**: Click to illuminate the 3D diya with realistic flame
3. **Select Flower**: Choose between lotus (🪷) or marigold (🌼)
4. **Offer Flower**: Watch it fall gracefully with 3D rotation
5. **Rotate View**: Drag the 3D scene to see from different angles
6. **Receive Blessings**: Get divine messages for each action

## 🎯 Features in Detail

### Data-Driven Architecture
- **Structured Data**: All temple and site information stored in TypeScript interfaces
- **Type Safety**: Complete type definitions for all data structures
- **Easy Updates**: Add or modify locations by updating data files
- **Scalable**: Easy to extend with more features and locations

### Accessibility
- Keyboard navigation support
- Responsive touch interactions
- Screen reader friendly descriptions
- High contrast color schemes
- Large touch targets for mobile

### Performance Optimization
- **Code Splitting**: Pages loaded on-demand
- **Image Optimization**: Lazy loading and proper formats
- **Bundle Optimization**: Tree-shaking and minification
- **Caching**: Aggressive caching strategies
- **Fast Rendering**: Virtual DOM and efficient updates

### Audio Experience
- Bell sounds when lighting diya
- Chime sounds when offering flowers
- Volume-controlled audio playback
- Browser-compatible audio handling

## 🎨 Design Philosophy

The design combines traditional Hindu aesthetics with modern web design:
- **Colors**: Saffron (#ff9933), Gold (#ffd700), Crimson (#dc143c)
- **Typography**: Mix of modern sans-serif and Devanagari fonts
- **Animations**: Smooth, purpose-driven animations
- **Glassmorphism**: Translucent cards with backdrop blur
- **Sacred Geometry**: Circular elements and divine proportions

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Add comments for complex logic
- Update documentation as needed
- Test on multiple devices and browsers
- Ensure accessibility compliance

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

### Spiritual Content
- Temple information sourced from authentic Hindu scriptures
- Mantras and shlokas from Vedic texts
- Geographical data verified from official temple websites

### Technical
- React and Three.js communities for excellent documentation
- Shadcn/ui for beautiful, accessible components
- Framer Motion for animation inspiration
- Tailwind CSS for utility-first styling

### Images
All temple images are used for educational and spiritual purposes:
- Pinterest collections (properly attributed)
- Amazon product images (properly attributed)
- Public domain temple photographs

## 📧 Contact

**Project Maintainer**: Patel Kavya

For questions, suggestions, or spiritual discussions, feel free to reach out!

## 🌟 Star the Project

If this project helped you connect with spirituality or learn about React/Three.js, please give it a star ⭐

---

### 🕉️ Om Namah Shivaya | 🙏 Jai Mata Di

*May this digital experience bring peace, devotion, and spiritual growth to all who use it.*

---

**Built with 💖 and devotion by the React community**