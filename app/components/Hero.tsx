// app/components/Hero.tsx
"use client";

export default function Hero() {
  const images = [
    "/gt3.jpg",
    "/gt3r.jpg",
    "/gt3rs.jpg",
    "/gt3rs1.jpg",
    "/gt3rs2.jpg",
    "/gt3rs.jpg",

  ];

  return (
    <>
      {/* Fonts import */}
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@700,400&display=swap"
        rel="stylesheet"
      />

  <section className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden z-0">
        {/* Background Grid */}
<div className="absolute inset-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-4 lg:gap-6 w-full h-full ">
  {images.map((src, index) => (
    <div
      key={index}
      className="w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${src})` }}
    />
  ))}
</div>




        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered text */}
        <div className="relative flex flex-col items-center justify-center text-center px-4">
          <h1
            className=" font-bold text-white tracking-tighter text-[130px] md:text-[200px]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            GT3RS
          </h1>
          <p
            className="text-white text-md md:text-2xl tracking-tighter font-medium mt-2 max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            A Timeless Machine. Engineered for Pure Speed.
          </p>

         
        </div>
        
      </section>
    </>
  );
}
