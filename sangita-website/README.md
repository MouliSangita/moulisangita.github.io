# Sangita's Personal Website

A modern, professional personal website built with Next.js 15, featuring dark/light mode, smooth animations, and a beautiful responsive design.

## 🌟 Features

- **Modern Design**: Clean, professional, and minimalist interface
- **Dark/Light Mode**: Seamless theme switching with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Beautiful Framer Motion animations throughout
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Fully typed for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## 📋 Pages

1. **Home** - Hero section with introduction and call-to-action buttons
2. **Resume & Projects** - Professional experience, education, skills, and featured projects
3. **Activities** - Hobbies, achievements, interests, and travel experiences
4. **Contact** - Contact information, social links, and contact form

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sangita-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── (pages)/
│   │   ├── resume/
│   │   ├── activities/
│   │   └── contact/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   └── globals.css
└── components/
    └── Navigation.tsx
```

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Layout Title & Meta**: `src/app/layout.tsx`
2. **Home Page Content**: `src/app/page.tsx`
3. **Resume Data**: `src/app/resume/page.tsx`
4. **Activities Data**: `src/app/activities/page.tsx`
5. **Contact Information**: `src/app/contact/page.tsx`

### Styling

- **Colors**: Modify the gradient colors and theme colors in each component
- **Fonts**: Change the font in `src/app/layout.tsx`
- **Animations**: Adjust Framer Motion variants in component files
- **Layout**: Modify responsive breakpoints and spacing as needed

### Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file with your component
3. Update the navigation in `src/components/Navigation.tsx`

## 🌙 Theme Support

The website automatically detects your system theme preference and allows manual switching between light and dark modes. Theme preference is persisted across sessions.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1280px+)
- Tablet (768px - 1279px)
- Mobile (320px - 767px)

## 🎯 Performance

- Next.js App Router for optimal performance
- Image optimization with Next.js Image component
- Lazy loading for smooth scrolling
- Optimized bundle size with tree shaking

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♀️ Contact

- **Email**: sangita@example.com
- **GitHub**: [Your GitHub](https://github.com)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
