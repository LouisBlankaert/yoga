import React from 'react'

export default function galeries() {

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

  return (
    <div className='mt-32'>
        <div className='rounded-lg border shadow-lg py-12 px-6 m-4'>
            <div className='flex justify-center font-bold text-2xl'>
                <h1>Photos centre de yoga Evere</h1>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-10">
                {photos.map((photo, index) => (
                    <div key={index} className="relative">
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
            <h2 className="text-center font-bold text-2xl mb-4">Vidéos</h2>
            <div className="rounded-lg shadow-lg grid grid-cols-1 gap-6 p-6">
                {videos.map((video, index) => (
                <div
                    key={index}
                    className={`flex items-center ${
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
  )
}
