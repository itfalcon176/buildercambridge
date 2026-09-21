"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Hammer,
  Home,
  Trees,
  Layers,
} from "lucide-react";

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: "Pillar Removal" | "Extensions & Masonry" | "Landscaping";
  location?: string;
  step?: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  // 1. Removing Supporting Pillar Sequence
  {
    id: "pillar-1",
    src: "/recent-work/removing-supporting-piller/80297626-CD17-4AB8-897D-93743F81D2A2.jpeg",
    title: "Existing Load-Bearing Brick Supporting Pillar Before Removal",
    category: "Pillar Removal",
    location: "Cambridge",
    step: "Step 1: Original Supporting Pillar",
  },
  {
    id: "pillar-2",
    src: "/recent-work/removing-supporting-piller/5AA98740-F151-4D95-A063-6CFFB0F0054C.jpeg",
    title: "Heavy-Duty Acrow Propping, Pillar Demolition & RSJ Steel Hoisting",
    category: "Pillar Removal",
    location: "Cambridge",
    step: "Step 2: Propping & Steel Installation",
  },
  {
    id: "pillar-3",
    src: "/recent-work/removing-supporting-piller/AB96450B-D648-4214-812E-811DACAC819D.jpeg",
    title: "Supporting Pillar Removed & Structural Open-Plan Aperture Created",
    category: "Pillar Removal",
    location: "Cambridge",
    step: "Step 3: RSJ Installation Complete",
  },
  {
    id: "pillar-4",
    src: "/recent-work/removing-supporting-piller/9586EF43-F294-4876-92B8-83014407C645.jpeg",
    title: "Ceiling Joist Boxing, Wall Plastering & Floor Underlay Preparation",
    category: "Pillar Removal",
    location: "Cambridge",
    step: "Step 4: Plaster & Joinery Finishes",
  },
  {
    id: "pillar-5",
    src: "/recent-work/removing-supporting-piller/D2914ACD-CB2D-4026-AB99-E1D98DA690C8.jpeg",
    title: "Completed Seamless Open-Plan Living Room & Garden Access",
    category: "Pillar Removal",
    location: "Cambridge",
    step: "Step 5: Finished Open-Plan Living Space",
  },

  // 2. Extensions & Masonry Works
  {
    id: "masonry-1",
    src: "/recent-work/removing-supporting-piller/recentworks-1.jpeg",
    title: "Traditional Exposed Brick Fireplace & Chimney Breast Restoration",
    category: "Extensions & Masonry",
    location: "Cambridge",
  },
  {
    id: "ext-1",
    src: "/recent-work/removing-supporting-piller/home-extension.jpg",
    title: "Sunlit Ground Floor Rear Extension Interior with Bespoke Glazing",
    category: "Extensions & Masonry",
    location: "Trumpington",
  },
  {
    id: "ext-2",
    src: "/recent-work/removing-supporting-piller/rcent2-8.jpeg",
    title: "Single Storey Red Brick Extension with Grey Sandstone Patio",
    category: "Extensions & Masonry",
    location: "Newnham",
  },
  {
    id: "ext-3",
    src: "/recent-work/removing-supporting-piller/rcent2-1.jpeg",
    title: "Foundation Trenching & Concrete Pump Pouring for House Extension",
    category: "Extensions & Masonry",
    location: "Cambridge",
  },
  {
    id: "ext-4",
    src: "/recent-work/removing-supporting-piller/recentworks-3.jpeg",
    title: "Deep Footing Excavation & Site Groundworks",
    category: "Extensions & Masonry",
    location: "Chesterton",
  },
  {
    id: "ext-5",
    src: "/recent-work/removing-supporting-piller/recentworks-4.jpeg",
    title: "Drainage Trenching & Structural Sub-Base Preparation",
    category: "Extensions & Masonry",
    location: "Mill Road",
  },
  {
    id: "ext-6",
    src: "/recent-work/removing-supporting-piller/recentworks-6.jpeg",
    title: "Foundation Reinforcement & Heavy-Duty Concrete Footings",
    category: "Extensions & Masonry",
    location: "Grantchester",
  },
  {
    id: "ext-7",
    src: "/recent-work/removing-supporting-piller/recentworks-7.jpeg",
    title: "Concrete Oversite & Structural Base Reinstatement",
    category: "Extensions & Masonry",
    location: "Hills Road",
  },
  {
    id: "ext-8",
    src: "/recent-work/removing-supporting-piller/recentworks-5.jpeg",
    title: "Rear Property Clearance & Ground Preparation for Extension",
    category: "Extensions & Masonry",
    location: "Cambridge",
  },

  // 3. Landscaping & Grounds
  {
    id: "land-1",
    src: "/recent-work/removing-supporting-piller/camblandscap-1.jpeg",
    title: "Front Garden Boundary Hedgerow & Conifer Styling",
    category: "Landscaping",
    location: "Cambridge",
  },
  {
    id: "land-2",
    src: "/recent-work/removing-supporting-piller/camblandscap-2.jpeg",
    title: "Mature Garden Hedge Trimming & Clean Border Line",
    category: "Landscaping",
    location: "Great Shelford",
  },
  {
    id: "land-3",
    src: "/recent-work/removing-supporting-piller/camblandscap-3.jpeg",
    title: "Residential Shrubbery Shaping & Garden Maintenance",
    category: "Landscaping",
    location: "Histon",
  },
  {
    id: "land-4",
    src: "/recent-work/removing-supporting-piller/camblandscap-4.jpeg",
    title: "Formal Hedge Pruning & Perimeter Greenery",
    category: "Landscaping",
    location: "Girton",
  },
  {
    id: "land-5",
    src: "/recent-work/removing-supporting-piller/camblandscap-5.jpeg",
    title: "Lawn Edge Clearance & Garden Border Preparation",
    category: "Landscaping",
    location: "Cambridge",
  },
  {
    id: "land-6",
    src: "/recent-work/removing-supporting-piller/camblandscap-6.jpeg",
    title: "Precision Topiary & Hedge Maintenance",
    category: "Landscaping",
    location: "Trumpington",
  },
  {
    id: "land-7",
    src: "/recent-work/removing-supporting-piller/camblandscap-13.jpeg",
    title: "Garden Pathway Clearance & Boundary Care",
    category: "Landscaping",
    location: "Cambridge",
  },
  {
    id: "land-8",
    src: "/recent-work/removing-supporting-piller/camblandscap-14.jpeg",
    title: "Driveway Border Hedge Pruning & Shaping",
    category: "Landscaping",
    location: "Newnham",
  },
  {
    id: "land-9",
    src: "/recent-work/removing-supporting-piller/camblandscap-15.jpeg",
    title: "Garden Hedgerow Rejuvenation & Clean Up",
    category: "Landscaping",
    location: "Cambridge",
  },
  {
    id: "land-10",
    src: "/recent-work/removing-supporting-piller/camblandscap-16.jpeg",
    title: "Front Shrub Trimming & Exterior Property Presentation",
    category: "Landscaping",
    location: "Chesterton",
  },
  {
    id: "land-11",
    src: "/recent-work/removing-supporting-piller/camblandscap-17.jpeg",
    title: "Perimeter Garden Hedge Clean Cut & Shaping",
    category: "Landscaping",
    location: "Milton",
  },
  {
    id: "land-12",
    src: "/recent-work/removing-supporting-piller/camblandscap-18.jpeg",
    title: "Residential Landscaping & Greenery Management",
    category: "Landscaping",
    location: "Cambridge",
  },
  {
    id: "land-13",
    src: "/recent-work/removing-supporting-piller/camblandscap-19.jpeg",
    title: "Finished Hedge Styling & Frontage Neatening",
    category: "Landscaping",
    location: "Cambridge",
  },
  {
    id: "land-14",
    src: "/recent-work/removing-supporting-piller/recentworks-2.jpeg",
    title: "Roadside Boundary Hedge Precision Trimming",
    category: "Landscaping",
    location: "Cambridge",
  },
];

export const RecentWorksGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { label: "All Works", value: "All", icon: Layers, count: galleryPhotos.length },
    {
      label: "Removing Supporting Pillar",
      value: "Pillar Removal",
      icon: Hammer,
      count: galleryPhotos.filter((p) => p.category === "Pillar Removal").length,
    },
    {
      label: "Extensions & Masonry",
      value: "Extensions & Masonry",
      icon: Home,
      count: galleryPhotos.filter((p) => p.category === "Extensions & Masonry").length,
    },
    {
      label: "Landscaping",
      value: "Landscaping",
      icon: Trees,
      count: galleryPhotos.filter((p) => p.category === "Landscaping").length,
    },
  ];

  const filtered =
    activeCategory === "All"
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % filtered.length);
  }, [selectedPhotoIndex, filtered.length]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev ?? 0) - 1 + filtered.length) % filtered.length);
  }, [selectedPhotoIndex, filtered.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, nextPhoto, prevPhoto, closeLightbox]);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all duration-300 ${
                isActive
                  ? "bg-[#092457] text-white shadow-lg shadow-blue-950/20 scale-102"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? "text-amber-400" : "text-slate-500"}`} />
              <span>{cat.label}</span>
              <span
                className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                  isActive ? "bg-amber-400 text-slate-950" : "bg-slate-100 text-slate-600"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Photo Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <AnimatePresence>
          {filtered.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, delay: Math.min(index * 0.02, 0.3) }}
              onClick={() => openLightbox(index)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                priority={index < 4}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Pill: Category or Step */}
              <div className="absolute top-3 left-3 flex flex-col gap-1">
                {photo.step ? (
                  <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                    {photo.step}
                  </span>
                ) : (
                  <span className="px-2.5 py-1 rounded-lg bg-[#092457]/90 text-amber-300 text-[10px] font-bold border border-blue-800/60 backdrop-blur-md">
                    {photo.category}
                  </span>
                )}
              </div>

              {/* Zoom Action Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                <h4 className="text-xs font-bold leading-snug line-clamp-2 drop-shadow-sm">
                  {photo.title}
                </h4>
                {photo.location && (
                  <div className="text-[10px] font-semibold text-amber-300">
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
        {selectedPhotoIndex !== null && filtered[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Photo Container */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={filtered[selectedPhotoIndex].src}
                  alt={filtered[selectedPhotoIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Caption Footer */}
              <div className="text-center text-white mt-3 space-y-1 bg-black/60 px-6 py-2.5 rounded-2xl backdrop-blur-md max-w-2xl border border-white/10">
                <h3 className="font-bold text-xs sm:text-sm">
                  {filtered[selectedPhotoIndex].title}
                </h3>
                <div className="text-[11px] text-amber-400 font-semibold">
                  {filtered[selectedPhotoIndex].step || filtered[selectedPhotoIndex].category} • {filtered[selectedPhotoIndex].location || "Cambridge"} (Photo {selectedPhotoIndex + 1} of {filtered.length})
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
