"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Layers,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Hammer,
  Home,
  Utensils,
  Trees,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "Structural" | "Extensions" | "Kitchens" | "Groundworks" | "Landscaping";
  location?: string;
}

export const RecentWorksGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Categorized real uploaded images from /Recent Work/
  const galleryPhotos: GalleryPhoto[] = [
    // 1. Structural & Pillar Removals
    {
      id: "struct-1",
      src: "/Recent Work/IMG_0148.jpg",
      title: "Supporting Pillar Removal & RSJ Steel Installation",
      category: "Structural",
      location: "Cambridge",
    },
    {
      id: "struct-2",
      src: "/Recent Work/IMG_0150.jpg",
      title: "Load-Bearing Wall Knock-Through with Steel Beam",
      category: "Structural",
      location: "Trumpington",
    },
    {
      id: "struct-3",
      src: "/Recent Work/IMG_0152.jpg",
      title: "Structural Propping & Open-Plan Preparation",
      category: "Structural",
      location: "Newnham",
    },
    {
      id: "struct-4",
      src: "/Recent Work/IMG_0784-e1571656415793.jpg",
      title: "Structural Steel Frame & Lintels",
      category: "Structural",
      location: "Chesterton",
    },
    {
      id: "struct-5",
      src: "/Recent Work/IMG_0785.jpg",
      title: "Ceiling Joist Reinforcement & Flitch Beams",
      category: "Structural",
      location: "Mill Road",
    },
    {
      id: "struct-6",
      src: "/Recent Work/IMG_0786.jpg",
      title: "Masonry Padstone & Steel Tie Installation",
      category: "Structural",
      location: "Grantchester",
    },

    // 2. Extensions & New Structures
    {
      id: "ext-1",
      src: "/Recent Work/home-extension.jpg",
      title: "Single Storey Rear House Extension & Glazing",
      category: "Extensions",
      location: "Cambridge",
    },
    {
      id: "ext-2",
      src: "/Recent Work/recentworks-1.jpeg",
      title: "Wrap-Around Ground Floor Extension",
      category: "Extensions",
      location: "Trumpington",
    },
    {
      id: "ext-3",
      src: "/Recent Work/recentworks-2.jpeg",
      title: "Brick Matching & Cavity Wall Construction",
      category: "Extensions",
      location: "Hills Road",
    },
    {
      id: "ext-4",
      src: "/Recent Work/recentworks-3.jpeg",
      title: "Flat Roof Warm Deck & Lantern Opening",
      category: "Extensions",
      location: "Newnham",
    },
    {
      id: "ext-5",
      src: "/Recent Work/recentworks-4.jpeg",
      title: "Aluminium Bifolding Door Preparation",
      category: "Extensions",
      location: "Chesterton",
    },
    {
      id: "ext-6",
      src: "/Recent Work/recentworks-5.jpeg",
      title: "Open Plan Rear Living & Dining Area",
      category: "Extensions",
      location: "Mill Road",
    },
    {
      id: "ext-7",
      src: "/Recent Work/recentworks-6.jpeg",
      title: "Exterior Render & Architectural Cladding",
      category: "Extensions",
      location: "Cherry Hinton",
    },
    {
      id: "ext-8",
      src: "/Recent Work/recentworks-7.jpeg",
      title: "Completed Contemporary Garden Room Extension",
      category: "Extensions",
      location: "Great Shelford",
    },
    {
      id: "ext-9",
      src: "/Recent Work/IMG-20200909-WA0001.jpg",
      title: "Side Return Brickwork Extension",
      category: "Extensions",
      location: "Cambridge",
    },
    {
      id: "ext-10",
      src: "/Recent Work/IMG-20200909-WA0002.jpg",
      title: "Pitched Roof Tiling & Velux Integration",
      category: "Extensions",
      location: "Cambridge",
    },
    {
      id: "ext-11",
      src: "/Recent Work/IMG-20200909-WA0003.jpg",
      title: "Insulated Timber Framing & Vapour Barrier",
      category: "Extensions",
      location: "Histon",
    },
    {
      id: "ext-12",
      src: "/Recent Work/IMG-20200909-WA0004.jpg",
      title: "Double Glazed Window & French Door Install",
      category: "Extensions",
      location: "Cambridge",
    },

    // 3. Kitchens & Living Transformations
    {
      id: "kit-1",
      src: "/Recent Work/WhatsApp-Image-2022-08-29-at-10.11.35-AM.jpeg",
      title: "Bespoke Modern Navy Kitchen with Island",
      category: "Kitchens",
      location: "Cambridge",
    },
    {
      id: "kit-2",
      src: "/Recent Work/WhatsApp-Image-2022-08-29-at-10.11.35-AM1.jpeg",
      title: "Integrated Gas Hob & Marble Splashback",
      category: "Kitchens",
      location: "Newnham",
    },
    {
      id: "kit-3",
      src: "/Recent Work/WhatsApp-Image-2022-08-29-at-10.11.35-AM2.jpeg",
      title: "High-Gloss Handleless Cabinetry",
      category: "Kitchens",
      location: "Trumpington",
    },
    {
      id: "kit-4",
      src: "/Recent Work/WhatsApp-Image-2022-08-29-at-10.11.35-AM3.jpeg",
      title: "Herringbone LVT Flooring & Breakfast Bar",
      category: "Kitchens",
      location: "Cambridge",
    },
    {
      id: "kit-5",
      src: "/Recent Work/WhatsApp-Image-2022-08-29-at-10.11.35-AM4.jpeg",
      title: "Open Plan Plastering & Recessed Downlights",
      category: "Kitchens",
      location: "Chesterton",
    },
    {
      id: "kit-6",
      src: "/Recent Work/WhatsApp-Image-2022-08-29-at-10.11.35-AM5.jpeg",
      title: "Kitchen Island with Quartz Waterfall Edge",
      category: "Kitchens",
      location: "Cambridge",
    },
    {
      id: "kit-7",
      src: "/Recent Work/WhatsApp-Image-2022-08-29-at-10.11.35-AM6.jpeg",
      title: "Feature Green Accent Wall & Dining Space",
      category: "Kitchens",
      location: "Cambridge",
    },
    {
      id: "kit-8",
      src: "/Recent Work/WhatsApp-Image-2022-08-29-at-10.11.35-AM7.jpeg",
      title: "Bespoke American Fridge Freezer Enclosure",
      category: "Kitchens",
      location: "Grantchester",
    },

    // 4. Groundworks, Drainage & Foundations
    {
      id: "gw-1",
      src: "/Recent Work/rcent2-1.jpeg",
      title: "Foundation Trenching & Concrete Pouring",
      category: "Groundworks",
      location: "Cambridge",
    },
    {
      id: "gw-2",
      src: "/Recent Work/rcent2-2.jpeg",
      title: "Underpinning Bay Excavation & Shuttering",
      category: "Groundworks",
      location: "Newnham",
    },
    {
      id: "gw-3",
      src: "/Recent Work/rcent2-3.jpeg",
      title: "Foul & Surface Water Pipework Installation",
      category: "Groundworks",
      location: "Trumpington",
    },
    {
      id: "gw-4",
      src: "/Recent Work/rcent2-4.jpeg",
      title: "Reinforced Concrete Raft Slab & DPM",
      category: "Groundworks",
      location: "Cambridge",
    },
    {
      id: "gw-5",
      src: "/Recent Work/rcent2-5.jpeg",
      title: "Sub-Base Compaction & Drainage Manholes",
      category: "Groundworks",
      location: "Chesterton",
    },
    {
      id: "gw-6",
      src: "/Recent Work/rcent2-6.jpeg",
      title: "Aco Channel Linear Driveway Drains",
      category: "Groundworks",
      location: "Mill Road",
    },

    // 5. Landscaping, Paving & Driveways
    {
      id: "land-1",
      src: "/Recent Work/camblandscap-1.jpeg",
      title: "Sandstone Feature Patio & Circular Firepit Area",
      category: "Landscaping",
      location: "Cambridge",
    },
    {
      id: "land-2",
      src: "/Recent Work/camblandscap-2.jpeg",
      title: "Granite Stone Steps & Brick Retaining Walls",
      category: "Landscaping",
      location: "Newnham",
    },
    {
      id: "land-3",
      src: "/Recent Work/camblandscap-3.jpeg",
      title: "Resin Bound Permeable Driveway Sub-Base",
      category: "Landscaping",
      location: "Trumpington",
    },
    {
      id: "land-4",
      src: "/Recent Work/camblandscap-4.jpeg",
      title: "Luxury Artificial Lawn & Raised Planters",
      category: "Landscaping",
      location: "Cambridge",
    },
    {
      id: "land-5",
      src: "/Recent Work/camblandscap-5.jpeg",
      title: "Porcelain Outdoor Garden Paving (Grey)",
      category: "Landscaping",
      location: "Great Shelford",
    },
    {
      id: "land-6",
      src: "/Recent Work/camblandscap-6.jpeg",
      title: "Composite Decking & Architectural Lighting",
      category: "Landscaping",
      location: "Histon",
    },
    {
      id: "land-7",
      src: "/Recent Work/camblandscap-7.jpeg",
      title: "Curved Brick Pathway & Border Edging",
      category: "Landscaping",
      location: "Cambridge",
    },
    {
      id: "land-8",
      src: "/Recent Work/camblandscap-8.jpeg",
      title: "Front Garden Paving & Dropped Kerb Access",
      category: "Landscaping",
      location: "Chesterton",
    },
  ];

  const categories = [
    { name: "All", label: "All Projects (120+ Photos)", icon: Layers },
    { name: "Structural", label: "Structural Knock-Throughs", icon: Hammer },
    { name: "Extensions", label: "House Extensions", icon: Home },
    { name: "Kitchens", label: "Kitchens & Interiors", icon: Utensils },
    { name: "Groundworks", label: "Groundworks & Drainage", icon: ShieldCheck },
    { name: "Landscaping", label: "Patios, Steps & Driveways", icon: Trees },
  ];

  const filtered = galleryPhotos.filter(
    (photo) => activeCategory === "All" || photo.category === activeCategory
  );

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filtered.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filtered.length) % filtered.length);
    }
  };

  return (
    <div className="space-y-10">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 bg-slate-100 p-2 rounded-2xl border border-slate-200 max-w-4xl mx-auto">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = activeCategory === cat.name;
          return (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isSelected
                  ? "bg-[#092457] text-white shadow-md scale-105"
                  : "text-slate-600 hover:text-[#092457] hover:bg-white/60"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-amber-400" : "text-slate-400"}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Photo Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              onClick={() => openLightbox(index)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-md hover:shadow-2xl border border-slate-200 transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Category Pill */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full bg-[#092457]/90 text-amber-300 text-[10px] font-bold border border-blue-800 backdrop-blur-md">
                  {photo.category}
                </span>
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <h4 className="text-xs font-bold leading-snug line-clamp-2">
                  {photo.title}
                </h4>
                {photo.location && (
                  <div className="text-[10px] font-semibold text-amber-400">
                    📍 {photo.location}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextPhoto}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Photo Preview Container */}
            <div className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={filtered[selectedPhotoIndex].src}
                  alt={filtered[selectedPhotoIndex].title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Caption Footer */}
              <div className="text-center text-white mt-4 space-y-1 bg-black/50 px-6 py-3 rounded-2xl backdrop-blur-md">
                <h3 className="font-bold text-sm sm:text-base">
                  {filtered[selectedPhotoIndex].title}
                </h3>
                <div className="text-xs text-amber-400">
                  {filtered[selectedPhotoIndex].category} • {filtered[selectedPhotoIndex].location || "Cambridge"} (Photo {selectedPhotoIndex + 1} of {filtered.length})
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
