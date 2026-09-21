import os
import json

piller_dir = r"D:\project\buildercambridge\public\recent-work\supporting piller"
ext_dir = r"D:\project\buildercambridge\public\recent-work\extentions"

piller_files = sorted(os.listdir(piller_dir))
ext_files = sorted(os.listdir(ext_dir))

piller_list = []
for i, f in enumerate(piller_files):
    if os.path.isfile(os.path.join(piller_dir, f)):
        piller_list.append({
            "id": f"sp-{i+1}",
            "src": f"/recent-work/supporting%20piller/{f}",
            "title": f"Supporting Pillar Removal {i+1}"
        })

ext_list = []
for i, f in enumerate(ext_files):
    if os.path.isfile(os.path.join(ext_dir, f)):
        ext_list.append({
            "id": f"ext-{i+1}",
            "src": f"/recent-work/extentions/{f}",
            "title": f"House Extension Project {i+1}"
        })

code = '''"use client";

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

export const supportingPillarPhotos: GalleryPhoto[] = __PILLER_JSON__;

export const extensionPhotos: GalleryPhoto[] = __EXT_JSON__;

// For backwards compatibility
export const galleryPhotos: GalleryPhoto[] = supportingPillarPhotos;

interface ProjectGalleryProps {
  photos?: GalleryPhoto[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ photos = galleryPhotos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => ((prev ?? 0) + 1) % photos.length);
  }, [selectedPhotoIndex, photos.length]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (prev) => ((prev ?? 0) - 1 + photos.length) % photos.length
    );
  }, [selectedPhotoIndex, photos.length]);

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
      {/* Full Photo Masonry Grid - Displays all photos without cropping and without text overlay */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
        {photos.map((photo, index) => (
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
        {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
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
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].title}
                className="max-h-[85vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Photo Counter */}
            <div className="text-white/75 text-xs font-semibold mt-3">
              {selectedPhotoIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const RecentWorksGallery = ProjectGallery;
'''

code = code.replace("__PILLER_JSON__", json.dumps(piller_list, indent=2))
code = code.replace("__EXT_JSON__", json.dumps(ext_list, indent=2))

out_path = r"D:\project\buildercambridge\src\components\RecentWorksGallery.tsx"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(code)

print(f"Successfully generated {out_path} with {len(piller_list)} pillar photos and {len(ext_list)} extension photos!")
