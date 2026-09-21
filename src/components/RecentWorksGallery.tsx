"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Hammer,
  Building2,
  ChefHat,
  Eye,
  Sparkles,
} from "lucide-react";

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
}

export const supportingPillarPhotos: GalleryPhoto[] = [
  {
    "id": "sp-1",
    "src": "/recent-work/supporting%20piller/5AA98740-F151-4D95-A063-6CFFB0F0054C.jpeg",
    "title": "Supporting Pillar Removal 1"
  },
  {
    "id": "sp-2",
    "src": "/recent-work/supporting%20piller/80297626-CD17-4AB8-897D-93743F81D2A2.jpeg",
    "title": "Supporting Pillar Removal 2"
  },
  {
    "id": "sp-3",
    "src": "/recent-work/supporting%20piller/9586EF43-F294-4876-92B8-83014407C645.jpeg",
    "title": "Supporting Pillar Removal 3"
  },
  {
    "id": "sp-4",
    "src": "/recent-work/supporting%20piller/AB96450B-D648-4214-812E-811DACAC819D.jpeg",
    "title": "Supporting Pillar Removal 4"
  },
  {
    "id": "sp-5",
    "src": "/recent-work/supporting%20piller/D2914ACD-CB2D-4026-AB99-E1D98DA690C8.jpeg",
    "title": "Supporting Pillar Removal 5"
  },
  {
    "id": "sp-6",
    "src": "/recent-work/supporting%20piller/camblandscap-1.jpeg",
    "title": "Supporting Pillar Removal 6"
  },
  {
    "id": "sp-7",
    "src": "/recent-work/supporting%20piller/camblandscap-10.jpeg",
    "title": "Supporting Pillar Removal 7"
  },
  {
    "id": "sp-8",
    "src": "/recent-work/supporting%20piller/camblandscap-11.jpeg",
    "title": "Supporting Pillar Removal 8"
  },
  {
    "id": "sp-9",
    "src": "/recent-work/supporting%20piller/camblandscap-12.jpeg",
    "title": "Supporting Pillar Removal 9"
  },
  {
    "id": "sp-10",
    "src": "/recent-work/supporting%20piller/camblandscap-13.jpeg",
    "title": "Supporting Pillar Removal 10"
  },
  {
    "id": "sp-11",
    "src": "/recent-work/supporting%20piller/camblandscap-14.jpeg",
    "title": "Supporting Pillar Removal 11"
  },
  {
    "id": "sp-12",
    "src": "/recent-work/supporting%20piller/camblandscap-15.jpeg",
    "title": "Supporting Pillar Removal 12"
  },
  {
    "id": "sp-13",
    "src": "/recent-work/supporting%20piller/camblandscap-16.jpeg",
    "title": "Supporting Pillar Removal 13"
  },
  {
    "id": "sp-14",
    "src": "/recent-work/supporting%20piller/camblandscap-17.jpeg",
    "title": "Supporting Pillar Removal 14"
  },
  {
    "id": "sp-15",
    "src": "/recent-work/supporting%20piller/camblandscap-18.jpeg",
    "title": "Supporting Pillar Removal 15"
  },
  {
    "id": "sp-16",
    "src": "/recent-work/supporting%20piller/camblandscap-19.jpeg",
    "title": "Supporting Pillar Removal 16"
  },
  {
    "id": "sp-17",
    "src": "/recent-work/supporting%20piller/camblandscap-2.jpeg",
    "title": "Supporting Pillar Removal 17"
  },
  {
    "id": "sp-18",
    "src": "/recent-work/supporting%20piller/camblandscap-3.jpeg",
    "title": "Supporting Pillar Removal 18"
  },
  {
    "id": "sp-19",
    "src": "/recent-work/supporting%20piller/camblandscap-4.jpeg",
    "title": "Supporting Pillar Removal 19"
  },
  {
    "id": "sp-20",
    "src": "/recent-work/supporting%20piller/camblandscap-5.jpeg",
    "title": "Supporting Pillar Removal 20"
  },
  {
    "id": "sp-21",
    "src": "/recent-work/supporting%20piller/camblandscap-6.jpeg",
    "title": "Supporting Pillar Removal 21"
  },
  {
    "id": "sp-22",
    "src": "/recent-work/supporting%20piller/camblandscap-7.jpeg",
    "title": "Supporting Pillar Removal 22"
  },
  {
    "id": "sp-23",
    "src": "/recent-work/supporting%20piller/camblandscap-8.jpeg",
    "title": "Supporting Pillar Removal 23"
  },
  {
    "id": "sp-24",
    "src": "/recent-work/supporting%20piller/camblandscap-9.jpeg",
    "title": "Supporting Pillar Removal 24"
  },
  {
    "id": "sp-25",
    "src": "/recent-work/supporting%20piller/home-extension.jpg",
    "title": "Supporting Pillar Removal 25"
  },
  {
    "id": "sp-26",
    "src": "/recent-work/supporting%20piller/rcent2-1.jpeg",
    "title": "Supporting Pillar Removal 26"
  },
  {
    "id": "sp-27",
    "src": "/recent-work/supporting%20piller/rcent2-2.jpeg",
    "title": "Supporting Pillar Removal 27"
  },
  {
    "id": "sp-28",
    "src": "/recent-work/supporting%20piller/rcent2-3.jpeg",
    "title": "Supporting Pillar Removal 28"
  },
  {
    "id": "sp-29",
    "src": "/recent-work/supporting%20piller/rcent2-4.jpeg",
    "title": "Supporting Pillar Removal 29"
  },
  {
    "id": "sp-30",
    "src": "/recent-work/supporting%20piller/rcent2-5.jpeg",
    "title": "Supporting Pillar Removal 30"
  },
  {
    "id": "sp-31",
    "src": "/recent-work/supporting%20piller/rcent2-6.jpeg",
    "title": "Supporting Pillar Removal 31"
  },
  {
    "id": "sp-32",
    "src": "/recent-work/supporting%20piller/rcent2-7.jpeg",
    "title": "Supporting Pillar Removal 32"
  },
  {
    "id": "sp-33",
    "src": "/recent-work/supporting%20piller/rcent2-8.jpeg",
    "title": "Supporting Pillar Removal 33"
  },
  {
    "id": "sp-34",
    "src": "/recent-work/supporting%20piller/recentworks-1.jpeg",
    "title": "Supporting Pillar Removal 34"
  },
  {
    "id": "sp-35",
    "src": "/recent-work/supporting%20piller/recentworks-2.jpeg",
    "title": "Supporting Pillar Removal 35"
  },
  {
    "id": "sp-36",
    "src": "/recent-work/supporting%20piller/recentworks-3.jpeg",
    "title": "Supporting Pillar Removal 36"
  },
  {
    "id": "sp-37",
    "src": "/recent-work/supporting%20piller/recentworks-4.jpeg",
    "title": "Supporting Pillar Removal 37"
  },
  {
    "id": "sp-38",
    "src": "/recent-work/supporting%20piller/recentworks-5.jpeg",
    "title": "Supporting Pillar Removal 38"
  },
  {
    "id": "sp-39",
    "src": "/recent-work/supporting%20piller/recentworks-6.jpeg",
    "title": "Supporting Pillar Removal 39"
  },
  {
    "id": "sp-40",
    "src": "/recent-work/supporting%20piller/recentworks-7.jpeg",
    "title": "Supporting Pillar Removal 40"
  }
];

export const extensionPhotos: GalleryPhoto[] = [
  {
    "id": "ext-1",
    "src": "/recent-work/extentions/2692286B-ACEB-4640-B63C-DAF481C5BEFD-e1571656943358.jpg",
    "title": "House Extension Project 1"
  },
  {
    "id": "ext-2",
    "src": "/recent-work/extentions/4D4EAB8D-08C7-410F-8B07-5C56DC49D1B2.jpg",
    "title": "House Extension Project 2"
  },
  {
    "id": "ext-3",
    "src": "/recent-work/extentions/5B75216E-F74D-491D-98C5-0649F77D1F49-e1571656439386.jpg",
    "title": "House Extension Project 3"
  },
  {
    "id": "ext-4",
    "src": "/recent-work/extentions/IMG_0148.jpg",
    "title": "House Extension Project 4"
  },
  {
    "id": "ext-5",
    "src": "/recent-work/extentions/IMG_0150.jpg",
    "title": "House Extension Project 5"
  },
  {
    "id": "ext-6",
    "src": "/recent-work/extentions/IMG_0152.jpg",
    "title": "House Extension Project 6"
  },
  {
    "id": "ext-7",
    "src": "/recent-work/extentions/IMG_0237.jpg",
    "title": "House Extension Project 7"
  },
  {
    "id": "ext-8",
    "src": "/recent-work/extentions/IMG_0239.jpg",
    "title": "House Extension Project 8"
  },
  {
    "id": "ext-9",
    "src": "/recent-work/extentions/IMG_0307.jpg",
    "title": "House Extension Project 9"
  },
  {
    "id": "ext-10",
    "src": "/recent-work/extentions/IMG_0350.jpg",
    "title": "House Extension Project 10"
  },
  {
    "id": "ext-11",
    "src": "/recent-work/extentions/IMG_0351.jpg",
    "title": "House Extension Project 11"
  },
  {
    "id": "ext-12",
    "src": "/recent-work/extentions/IMG_0784-e1571656415793.jpg",
    "title": "House Extension Project 12"
  },
  {
    "id": "ext-13",
    "src": "/recent-work/extentions/IMG_0785.jpg",
    "title": "House Extension Project 13"
  },
  {
    "id": "ext-14",
    "src": "/recent-work/extentions/IMG_0786.jpg",
    "title": "House Extension Project 14"
  },
  {
    "id": "ext-15",
    "src": "/recent-work/extentions/IMG_0820.jpg",
    "title": "House Extension Project 15"
  },
  {
    "id": "ext-16",
    "src": "/recent-work/extentions/IMG_0827.jpg",
    "title": "House Extension Project 16"
  },
  {
    "id": "ext-17",
    "src": "/recent-work/extentions/IMG_0833-e1571656377740.jpg",
    "title": "House Extension Project 17"
  },
  {
    "id": "ext-18",
    "src": "/recent-work/extentions/IMG_0845-e1571656172325.jpg",
    "title": "House Extension Project 18"
  },
  {
    "id": "ext-19",
    "src": "/recent-work/extentions/IMG_0871.jpg",
    "title": "House Extension Project 19"
  },
  {
    "id": "ext-20",
    "src": "/recent-work/extentions/IMG_0885.jpg",
    "title": "House Extension Project 20"
  },
  {
    "id": "ext-21",
    "src": "/recent-work/extentions/IMG_0887.jpg",
    "title": "House Extension Project 21"
  },
  {
    "id": "ext-22",
    "src": "/recent-work/extentions/IMG_0890.jpg",
    "title": "House Extension Project 22"
  },
  {
    "id": "ext-23",
    "src": "/recent-work/extentions/IMG_0897.jpg",
    "title": "House Extension Project 23"
  },
  {
    "id": "ext-24",
    "src": "/recent-work/extentions/IMG_0954.jpg",
    "title": "House Extension Project 24"
  },
  {
    "id": "ext-25",
    "src": "/recent-work/extentions/IMG_1112.jpg",
    "title": "House Extension Project 25"
  },
  {
    "id": "ext-26",
    "src": "/recent-work/extentions/IMG_1160.jpg",
    "title": "House Extension Project 26"
  },
  {
    "id": "ext-27",
    "src": "/recent-work/extentions/PHOTO-2019-12-05-20-47-28-2.jpg",
    "title": "House Extension Project 27"
  },
  {
    "id": "ext-28",
    "src": "/recent-work/extentions/PHOTO-2019-12-05-20-47-28.jpg",
    "title": "House Extension Project 28"
  },
  {
    "id": "ext-29",
    "src": "/recent-work/extentions/PHOTO-2019-12-05-20-47-29-2.jpg",
    "title": "House Extension Project 29"
  },
  {
    "id": "ext-30",
    "src": "/recent-work/extentions/PHOTO-2019-12-05-20-47-29-3.jpg",
    "title": "House Extension Project 30"
  },
  {
    "id": "ext-31",
    "src": "/recent-work/extentions/PHOTO-2019-12-05-20-47-29.jpg",
    "title": "House Extension Project 31"
  },
  {
    "id": "ext-32",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM.jpeg",
    "title": "House Extension Project 32"
  },
  {
    "id": "ext-33",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM1.jpeg",
    "title": "House Extension Project 33"
  },
  {
    "id": "ext-34",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM10.jpeg",
    "title": "House Extension Project 34"
  },
  {
    "id": "ext-35",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM11.jpeg",
    "title": "House Extension Project 35"
  },
  {
    "id": "ext-36",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM12.jpeg",
    "title": "House Extension Project 36"
  },
  {
    "id": "ext-37",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM13.jpeg",
    "title": "House Extension Project 37"
  },
  {
    "id": "ext-38",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM14.jpeg",
    "title": "House Extension Project 38"
  },
  {
    "id": "ext-39",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM15.jpeg",
    "title": "House Extension Project 39"
  },
  {
    "id": "ext-40",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM16.jpeg",
    "title": "House Extension Project 40"
  },
  {
    "id": "ext-41",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM17.jpeg",
    "title": "House Extension Project 41"
  },
  {
    "id": "ext-42",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM18.jpeg",
    "title": "House Extension Project 42"
  },
  {
    "id": "ext-43",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM2.jpeg",
    "title": "House Extension Project 43"
  },
  {
    "id": "ext-44",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM3.jpeg",
    "title": "House Extension Project 44"
  },
  {
    "id": "ext-45",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM4.jpeg",
    "title": "House Extension Project 45"
  },
  {
    "id": "ext-46",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM5.jpeg",
    "title": "House Extension Project 46"
  },
  {
    "id": "ext-47",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM6.jpeg",
    "title": "House Extension Project 47"
  },
  {
    "id": "ext-48",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM7.jpeg",
    "title": "House Extension Project 48"
  },
  {
    "id": "ext-49",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM8.jpeg",
    "title": "House Extension Project 49"
  },
  {
    "id": "ext-50",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.35-AM9.jpeg",
    "title": "House Extension Project 50"
  },
  {
    "id": "ext-51",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.36-AM.jpeg",
    "title": "House Extension Project 51"
  },
  {
    "id": "ext-52",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.36-AM1.jpeg",
    "title": "House Extension Project 52"
  },
  {
    "id": "ext-53",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.36-AM2.jpeg",
    "title": "House Extension Project 53"
  },
  {
    "id": "ext-54",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.36-AM3.jpeg",
    "title": "House Extension Project 54"
  },
  {
    "id": "ext-55",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.36-AM4.jpeg",
    "title": "House Extension Project 55"
  },
  {
    "id": "ext-56",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.36-AM5.jpeg",
    "title": "House Extension Project 56"
  },
  {
    "id": "ext-57",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.36-AM6.jpeg",
    "title": "House Extension Project 57"
  },
  {
    "id": "ext-58",
    "src": "/recent-work/extentions/WhatsApp-Image-2022-08-29-at-10.11.36-AM7.jpeg",
    "title": "House Extension Project 58"
  }
];

export const kitchenPhotos: GalleryPhoto[] = [
  {
    "id": "kitchen-1",
    "src": "/recent-work/kitchen/IMG-20200909-WA0001.jpg",
    "title": "Kitchen Renovation 1"
  },
  {
    "id": "kitchen-2",
    "src": "/recent-work/kitchen/IMG-20200909-WA0002.jpg",
    "title": "Kitchen Renovation 2"
  },
  {
    "id": "kitchen-3",
    "src": "/recent-work/kitchen/IMG-20200909-WA0003.jpg",
    "title": "Kitchen Renovation 3"
  },
  {
    "id": "kitchen-4",
    "src": "/recent-work/kitchen/IMG-20200909-WA0004.jpg",
    "title": "Kitchen Renovation 4"
  },
  {
    "id": "kitchen-5",
    "src": "/recent-work/kitchen/IMG-20200909-WA0005.jpg",
    "title": "Kitchen Renovation 5"
  },
  {
    "id": "kitchen-6",
    "src": "/recent-work/kitchen/IMG-20200909-WA0006.jpg",
    "title": "Kitchen Renovation 6"
  },
  {
    "id": "kitchen-7",
    "src": "/recent-work/kitchen/IMG-20200909-WA0007.jpg",
    "title": "Kitchen Renovation 7"
  },
  {
    "id": "kitchen-8",
    "src": "/recent-work/kitchen/IMG-20200909-WA0008.jpg",
    "title": "Kitchen Renovation 8"
  },
  {
    "id": "kitchen-9",
    "src": "/recent-work/kitchen/IMG-20200909-WA0010.jpg",
    "title": "Kitchen Renovation 9"
  },
  {
    "id": "kitchen-10",
    "src": "/recent-work/kitchen/IMG-20200909-WA0011.jpg",
    "title": "Kitchen Renovation 10"
  },
  {
    "id": "kitchen-11",
    "src": "/recent-work/kitchen/IMG-20200909-WA0012.jpg",
    "title": "Kitchen Renovation 11"
  },
  {
    "id": "kitchen-12",
    "src": "/recent-work/kitchen/IMG-20200909-WA0013.jpg",
    "title": "Kitchen Renovation 12"
  },
  {
    "id": "kitchen-13",
    "src": "/recent-work/kitchen/IMG-20200909-WA0014.jpg",
    "title": "Kitchen Renovation 13"
  },
  {
    "id": "kitchen-14",
    "src": "/recent-work/kitchen/IMG-20200909-WA0017.jpg",
    "title": "Kitchen Renovation 14"
  },
  {
    "id": "kitchen-15",
    "src": "/recent-work/kitchen/IMG-20200909-WA0018.jpg",
    "title": "Kitchen Renovation 15"
  },
  {
    "id": "kitchen-16",
    "src": "/recent-work/kitchen/IMG-20200909-WA0019.jpg",
    "title": "Kitchen Renovation 16"
  },
  {
    "id": "kitchen-17",
    "src": "/recent-work/kitchen/IMG-20200909-WA0020.jpg",
    "title": "Kitchen Renovation 17"
  },
  {
    "id": "kitchen-18",
    "src": "/recent-work/kitchen/IMG-20200909-WA0021.jpg",
    "title": "Kitchen Renovation 18"
  },
  {
    "id": "kitchen-19",
    "src": "/recent-work/kitchen/IMG-20200909-WA0022.jpg",
    "title": "Kitchen Renovation 19"
  },
  {
    "id": "kitchen-20",
    "src": "/recent-work/kitchen/IMG-20200909-WA0023.jpg",
    "title": "Kitchen Renovation 20"
  },
  {
    "id": "kitchen-21",
    "src": "/recent-work/kitchen/IMG-20200909-WA0024.jpg",
    "title": "Kitchen Renovation 21"
  },
  {
    "id": "kitchen-22",
    "src": "/recent-work/kitchen/IMG-20200909-WA0025.jpg",
    "title": "Kitchen Renovation 22"
  },
  {
    "id": "kitchen-23",
    "src": "/recent-work/kitchen/IMG_1247.jpg",
    "title": "Kitchen Renovation 23"
  },
  {
    "id": "kitchen-24",
    "src": "/recent-work/kitchen/IMG_1248.jpg",
    "title": "Kitchen Renovation 24"
  },
  {
    "id": "kitchen-25",
    "src": "/recent-work/kitchen/IMG_1249.jpg",
    "title": "Kitchen Renovation 25"
  },
  {
    "id": "kitchen-26",
    "src": "/recent-work/kitchen/IMG_1679.jpg",
    "title": "Kitchen Renovation 26"
  },
  {
    "id": "kitchen-27",
    "src": "/recent-work/kitchen/IMG_1680.jpg",
    "title": "Kitchen Renovation 27"
  },
  {
    "id": "kitchen-28",
    "src": "/recent-work/kitchen/IMG_1681.jpg",
    "title": "Kitchen Renovation 28"
  },
  {
    "id": "kitchen-29",
    "src": "/recent-work/kitchen/IMG_1682.jpg",
    "title": "Kitchen Renovation 29"
  }
];

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
      {/* Modern Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900/5 shadow-sm hover:shadow-2xl border border-slate-200/90 cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.title}
              loading={index < 8 ? "eager" : "lazy"}
              className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Corner Project Index */}
            <div className="absolute top-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className="px-2 py-0.5 rounded-md bg-black/55 backdrop-blur-md text-[11px] font-mono text-white/95 border border-white/15 shadow-sm">
                #{String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Modern Glassmorphic Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4 rounded-2xl pointer-events-none">
              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-between">
                <span className="text-white text-xs font-bold tracking-wide flex items-center gap-1.5 drop-shadow-md">
                  <Eye className="w-3.5 h-3.5 text-amber-400" />
                  <span>View Full Photo</span>
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center border border-white/30 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
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
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-6"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div className="absolute top-4 inset-x-4 sm:inset-x-8 z-50 flex items-center justify-between pointer-events-none">
              <div className="pointer-events-auto bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 text-white text-xs font-semibold">
                Photo {selectedPhotoIndex + 1} of {photos.length}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeLightbox();
                }}
                className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
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
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Photo Container */}
            <div
              className="relative max-w-5xl max-h-[82vh] w-full flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos[selectedPhotoIndex].src}
                alt={photos[selectedPhotoIndex].title}
                className="max-h-[82vh] max-w-full w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const RecentWorksGallery = ProjectGallery;

export type TabCategory = "supporting-pillar" | "extensions" | "kitchen";

export const RecentWorksTabbedGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabCategory>("supporting-pillar");

  const tabs = [
    {
      id: "supporting-pillar" as TabCategory,
      name: "Removing Supporting Piller",
      icon: Hammer,
      count: supportingPillarPhotos.length,
      photos: supportingPillarPhotos,
      accentColor: "text-amber-400",
      tagline: "Structural load-bearing pillar removal, temporary acrow prop installations, and RSJ steel beam insertion across Cambridge properties.",
    },
    {
      id: "extensions" as TabCategory,
      name: "Extensions",
      icon: Building2,
      count: extensionPhotos.length,
      photos: extensionPhotos,
      accentColor: "text-sky-400",
      tagline: "Single & double-storey house extensions, bespoke rear kitchen extensions, exterior brickwork, and structural alterations.",
    },
    {
      id: "kitchen" as TabCategory,
      name: "Kitchen",
      icon: ChefHat,
      count: kitchenPhotos.length,
      photos: kitchenPhotos,
      accentColor: "text-emerald-400",
      tagline: "Open-plan kitchen transformations, structural knock-throughs, custom breakfast bars, and luxury kitchen renovations.",
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];
  const CurrentIcon = currentTab.icon;

  return (
    <div className="w-full space-y-8 sm:space-y-10">
      {/* 1. Ultra Modern Segmented Control Dock */}
      <div className="flex justify-center">
        <div className="p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-slate-200/60 backdrop-blur-xl border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(9,36,87,0.07)] flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 max-w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-full font-bold text-xs sm:text-sm tracking-wide transition-colors duration-200 flex items-center gap-2.5 cursor-pointer select-none active:scale-[0.98] ${
                  isActive ? "text-white" : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                }`}
              >
                {/* Framer Motion Animated Active Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-[#092457] via-[#0b2b68] to-[#123982] rounded-xl sm:rounded-full shadow-lg shadow-[#092457]/30 border border-blue-900/30"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}

                {/* Tab Label & Icon */}
                <span className="relative z-10 flex items-center gap-2.5">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? tab.accentColor : "text-slate-400"
                    }`}
                  />
                  <span style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}>
                    {tab.name}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold transition-all ${
                      isActive
                        ? "bg-white/20 text-white border border-white/20 shadow-inner"
                        : "bg-slate-300/60 text-slate-700"
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Modern Category Header with Live Indicator */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-slate-200/80">
        <div className="space-y-2 text-center md:text-left">
          <h2
            className="text-3xl sm:text-5xl font-black text-[#092457] tracking-tight font-sans"
            style={{ fontFamily: "var(--font-raleway), 'Raleway', sans-serif" }}
          >
            {currentTab.name}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
            {currentTab.tagline}
          </p>
        </div>

        {/* Live Project Count Indicator */}
        <div className="flex items-center justify-center md:justify-end gap-2 text-xs font-semibold text-slate-500 shrink-0 bg-white px-3.5 py-2 rounded-xl border border-slate-200/70 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{currentTab.count} Completed Projects in Cambridge</span>
        </div>
      </div>

      {/* 3. Photo Grid for Active Tab with Smooth Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          <ProjectGallery photos={currentTab.photos} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
