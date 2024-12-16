"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Galeries() {
    const photosRef = useRef([]);
    const videosRef = useRef([]);
    const titleRef = useRef(null);
    const videosTitleRef = useRef(null);
    const containerRef = useRef(null);

    const photos = [
        { src: "photo1.png", label: "Façade" },
        { src: "photo2.png", label: "Salle" },
        { src: "photo3.png", label: "Salle" },
        { src: "photo4.png", label: "Entrée" },
        { src: "photo5.png", label: "Entrée" },
        { src: "photo6.png", label: "Salle" },
        { src: "photo7.png", label: "Salle" },
        { src: "photo8.png", label: "Moi" },
    ];

    const videos = [
        { href: "https://youtu.be/5pxIX0bj2RM", label: "Yoga Session 1" },
        { href: "https://youtu.be/WRRERHjzsUc", label: "Yoga Session 2" },
        { href: "https://youtu.be/CmZDxMbSjh8", label: "Relaxation Guide" },
        { href: "https://www.youtube.com/embed/2ArJV_Mj1Rc", label: "Meditation Techniques" },
        { href: "https://www.youtube.com/embed/BgwzVYyd1Ig", label: "Breathing Exercises" },
    ];

    useEffect(() => {
        // Animation du titre principal
        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 80%",
                }
            }
        );

        // Animation des photos
        photosRef.current.forEach((photo, index) => {
            gsap.fromTo(photo,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 50
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: photo,
                        start: "top 85%",
                    }
                }
            );
        });

        // Animation du titre des vidéos
        gsap.fromTo(videosTitleRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: videosTitleRef.current,
                    start: "top 80%",
                }
            }
        );

        // Animation des vidéos
        videosRef.current.forEach((video, index) => {
            gsap.fromTo(video,
                {
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: video,
                        start: "top 75%",
                    }
                }
            );
        });

        // Rendre le conteneur visible après l'initialisation de GSAP
        containerRef.current.style.visibility = 'visible';

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div ref={containerRef} className='mt-32' style={{ visibility: 'hidden' }}>
            <div className='rounded-lg border shadow-lg py-12 px-6 m-4'>
                <div className='flex justify-center font-bold text-2xl'>
                    <h1 ref={titleRef} className="opacity-0">Photos centre de yoga Evere</h1>
                </div>
                <div className="grid grid-cols-4 gap-4 mt-10">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            ref={el => photosRef.current[index] = el}
                            className="relative transform transition-all duration-300 hover:scale-105 opacity-0"
                        >
                            <img
                                src={photo.src}
                                alt={photo.label}
                                className="w-full h-96 object-fill rounded-lg shadow-lg"
                            />
                            <div className="w-full text-gray-500 text-center pt-4">
                                {photo.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vidéos */}
            <div className="my-20 rounded-lg">
                <h2 ref={videosTitleRef} className="text-center font-bold text-2xl mb-4 opacity-0">Vidéos</h2>
                <div className="rounded-lg shadow-lg grid grid-cols-1 gap-6 p-6">
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            ref={el => videosRef.current[index] = el}
                            className={`flex items-center opacity-0 ${
                                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                            }`}
                        >
                            {/* Vidéo */}
                            <iframe
                                src={video.href.replace("youtu.be", "www.youtube.com/embed")}
                                title={video.label || `Vidéo ${index + 1}`}
                                className="w-1/2 h-64 rounded-lg shadow-lg"
                                allowFullScreen
                            ></iframe>

                            {/* Label */}
                            <p className="w-1/2 text-center text-gray-700 font-medium p-4">
                                {video.label || `Vidéo ${index + 1}`}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
