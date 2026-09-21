"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
} from "lucide-react";

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
}

export const galleryPhotos: GalleryPhoto[] = [
  // 1. Supporting Pillar Removal Sequence
  {
    id: "sp-1",
    src: "/recent-work/supporting%20piller/80297626-CD17-4AB8-897D-93743F81D2A2.jpeg",
    title: "Supporting Pillar Removal 1",
  },
  {
    id: "sp-2",
    src: "/recent-work/supporting%20piller/5AA98740-F151-4D95-A063-6CFFB0F0054C.jpeg",
    title: "Supporting Pillar Removal 2",
  },
  {
    id: "sp-3",
    src: "/recent-work/supporting%20piller/AB96450B-D648-4214-812E-811DACAC819D.jpeg",
    title: "Supporting Pillar Removal 3",
  },
  {
    id: "sp-4",
    src: "/recent-work/supporting%20piller/9586EF43-F294-4876-92B8-83014407C645.jpeg",
    title: "Supporting Pillar Removal 4",
  },
  {
    id: "sp-5",
    src: "/recent-work/supporting%20piller/D2914ACD-CB2D-4026-AB99-E1D98DA690C8.jpeg",
    title: "Supporting Pillar Removal 5",
  },

  // 2. Extensions, Brickwork & Groundworks
  {
    id: "ext-1",
    src: "/recent-work/supporting%20piller/home-extension.jpg",
    title: "House Extension 1",
  },
  {
    id: "ext-2",
    src: "/recent-work/supporting%20piller/rcent2-8.jpeg",
    title: "House Extension 2",
  },
  {
    id: "ext-3",
    src: "/recent-work/supporting%20piller/rcent2-1.jpeg",
    title: "Groundworks 1",
  },
  {
    id: "ext-4",
    src: "/recent-work/supporting%20piller/rcent2-2.jpeg",
    title: "Groundworks 2",
  },
  {
    id: "ext-5",
    src: "/recent-work/supporting%20piller/rcent2-3.jpeg",
    title: "Groundworks 3",
  },
  {
    id: "ext-6",
    src: "/recent-work/supporting%20piller/rcent2-4.jpeg",
    title: "Groundworks 4",
  },
  {
    id: "ext-7",
    src: "/recent-work/supporting%20piller/rcent2-5.jpeg",
    title: "Groundworks 5",
  },
  {
    id: "ext-8",
    src: "/recent-work/supporting%20piller/rcent2-6.jpeg",
    title: "Groundworks 6",
  },
  {
    id: "ext-9",
    src: "/recent-work/supporting%20piller/rcent2-7.jpeg",
    title: "Groundworks 7",
  },
  {
    id: "rw-1",
    src: "/recent-work/supporting%20piller/recentworks-1.jpeg",
    title: "Brickwork & Fireplace",
  },
  {
    id: "rw-2",
    src: "/recent-work/supporting%20piller/recentworks-2.jpeg",
    title: "Recent Work 2",
  },
  {
    id: "rw-3",
    src: "/recent-work/supporting%20piller/recentworks-3.jpeg",
    title: "Recent Work 3",
  },
  {
    id: "rw-4",
    src: "/recent-work/supporting%20piller/recentworks-4.jpeg",
    title: "Recent Work 4",
  },
  {
    id: "rw-5",
    src: "/recent-work/supporting%20piller/recentworks-5.jpeg",
    title: "Recent Work 5",
  },
  {
    id: "rw-6",
    src: "/recent-work/supporting%20piller/recentworks-6.jpeg",
    title: "Recent Work 6",
  },
  {
    id: "rw-7",
    src: "/recent-work/supporting%20piller/recentworks-7.jpeg",
    title: "Recent Work 7",
  },

  // 3. Landscaping & Exterior Projects
  {
    id: "land-1",
    src: "/recent-work/supporting%20piller/camblandscap-1.jpeg",
    title: "Cambridge Landscaping 1",
  },
  {
    id: "land-2",
    src: "/recent-work/supporting%20piller/camblandscap-2.jpeg",
    title: "Cambridge Landscaping 2",
  },
  {
    id: "land-3",
    src: "/recent-work/supporting%20piller/camblandscap-3.jpeg",
    title: "Cambridge Landscaping 3",
  },
  {
    id: "land-4",
    src: "/recent-work/supporting%20piller/camblandscap-4.jpeg",
    title: "Cambridge Landscaping 4",
  },
  {
    id: "land-5",
    src: "/recent-work/supporting%20piller/camblandscap-5.jpeg",
    title: "Cambridge Landscaping 5",
  },
  {
    id: "land-6",
    src: "/recent-work/supporting%20piller/camblandscap-6.jpeg",
    title: "Cambridge Landscaping 6",
  },
  {
    id: "land-7",
    src: "/recent-work/supporting%20piller/camblandscap-7.jpeg",
    title: "Cambridge Landscaping 7",
  },
  {
    id: "land-8",
    src: "/recent-work/supporting%20piller/camblandscap-8.jpeg",
    title: "Cambridge Landscaping 8",
  },
  {
    id: "land-9",
    src: "/recent-work/supporting%20piller/camblandscap-9.jpeg",
    title: "Cambridge Landscaping 9",
  },
  {
    id: "land-10",
    src: "/recent-work/supporting%20piller/camblandscap-10.jpeg",
    title: "Cambridge Landscaping 10",
  },
  {
    id: "land-11",
    src: "/recent-work/supporting%20piller/camblandscap-11.jpeg",
    title: "Cambridge Landscaping 11",
  },
  {
    id: "land-12",
    src: "/recent-work/supporting%20piller/camblandscap-12.jpeg",
    title: "Cambridge Landscaping 12",
  },
  {
    id: "land-13",
    src: "/recent-work/supporting%20piller/camblandscap-13.jpeg",
    title: "Cambridge Landscaping 13",
  },
  {
    id: "land-14",
    src: "/recent-work/supporting%20piller/camblandscap-14.jpeg",
    title: "Cambridge Landscaping 14",
  },
  {
    id: "land-15",
    src: "/recent-work/supporting%20piller/camblandscap-15.jpeg",
    title: "Cambridge Landscaping 15",
  },
  {
    id: "land-16",
    src: "/recent-work/supporting%20piller/camblandscap-16.jpeg",
    title: "Cambridge Landscaping 16",
  },
  {
    id: "land-17",
    src: "/recent-work/supporting%20piller/camblandscap-17.jpeg",
    title: "Cambridge Landscaping 17",
  },
  {
    id: "land-18",
    src: "/recent-work/supporting%20piller/camblandscap-18.jpeg",
    title: "Cambridge Landscaping 18",
  },
  {
    id: "land-19",
    src: "/recent-work/supporting%20piller/camblandscap-19.jpeg",
    title: "Cambridge Landscaping 19",
  },
];

export const RecentWorksGallery: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % galleryPhotos.length);
  }, [selectedPhotoIndex]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (prev) => ((prev ?? 0) - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  }, [selectedPhotoIndex]);

  // Keyboard navigation
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
    <div className="w-full">
      {/* Full Photo Masonry Grid - Displays all 40 photos without cropping and without text overlay */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {galleryPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="break-inside-avoid mb-4 rounded-2xl overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl border border-slate-200/80 cursor-pointer transition-all duration-300 hover:-translate-y-1 group relative"
          >
            {/* Full Natural Image - No Cropping */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.title}
              loading={index < 8 ? "eager" : "lazy"}
              className="w-full h-auto block rounded-2xl group-hover:scale-[1.02] transition-transform duration-300 ease-out"
            />

            {/* Subtle Zoom Icon on Hover Only */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none rounded-2xl flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/85 backdrop-blur-md text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                <Maximize2 className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && galleryPhotos[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-6"
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

            {/* Previous Button */}
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
              className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={galleryPhotos[selectedPhotoIndex].src}
                alt={galleryPhotos[selectedPhotoIndex].title}
                className="max-h-[85vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Photo Counter */}
            <div className="text-white/75 text-xs font-semibold mt-3">
              {selectedPhotoIndex + 1} / {galleryPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
