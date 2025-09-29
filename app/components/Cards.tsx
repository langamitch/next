
export default function Cards() {
  const images = [
    "/gt3.jpg",
    "/gt3r.jpg",
    "/gt3rs.jpg",
    "/gt3rs1.jpg",
    "/gt3rs2.jpg",
    "/file.svg",
    "/globe.svg",
    "/logo.svg"
  ];
  // Example sizes for each image
  const sizes = [
    "h-64 w-48", "h-72 w-56", "h-60 w-60", "h-80 w-40", "h-52 w-72", "h-64 w-64", "h-48 w-80", "h-72 w-44"
  ];
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <section
        className="relative w-full min-h-screen flex items-center justify-center bg-[#FF69B4]"
        style={{ fontFamily: 'Inter, sans-serif', zIndex: 10 }}
      >
        <div className="max-w-6xl mx-auto p-8">
  <h2 className="text-2xl font-bold mb-6">Porsche 911 GT3 RS Highlights</h2>

  <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {/* Card 1 */}
    <div className="bg-transparent p-6 rounded-lg">
      <p className="text-xs text-gray-500 uppercase mb-2">Performance</p>
      <p className="text-[clamp(16px,1.2vw,20px)] text-neutral-900 font-medium leading-[1.3]" aria-label="The GT3 RS features a naturally aspirated 4.0L flat-six engine delivering exhilarating power and precision on both track and road.">
        <div className="line-mask line1-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line1" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            The GT3 RS features a naturally aspirated 4.0L flat-six engine
          </div>
        </div>
        <div className="line-mask line2-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line2" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            delivering exhilarating power and precision on both
          </div>
        </div>
        <div className="line-mask line3-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line3" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            track and road.
          </div>
        </div>
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-100 p-6 rounded-lg">
      <p className="text-xs text-gray-500 uppercase mb-2">Aerodynamics</p>
      <p className="text-[clamp(16px,1.2vw,20px)] text-neutral-900 font-medium leading-[1.3]" aria-label="Advanced aerodynamics, including a large rear wing and air intakes, provide maximum downforce and stability at high speeds.">
        <div className="line-mask line1-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line1" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            Advanced aerodynamics, including a large rear wing
          </div>
        </div>
        <div className="line-mask line2-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line2" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            and air intakes, provide maximum downforce
          </div>
        </div>
        <div className="line-mask line3-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line3" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            and stability at high speeds.
          </div>
        </div>
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-100 p-6 rounded-lg">
      <p className="text-xs text-gray-500 uppercase mb-2">Suspension & Handling</p>
      <p className="text-[clamp(16px,1.2vw,20px)] text-neutral-900 font-medium leading-[1.3]" aria-label="The race-bred suspension and lightweight construction offer unparalleled cornering and handling for driving enthusiasts.">
        <div className="line-mask line1-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line1" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            The race-bred suspension and lightweight construction
          </div>
        </div>
        <div className="line-mask line2-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line2" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            offer unparalleled cornering and handling
          </div>
        </div>
        <div className="line-mask line3-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line3" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            for driving enthusiasts.
          </div>
        </div>
      </p>
    </div>

    {/* Card 4 */}
    <div className="bg-gray-100 p-6 rounded-lg">
      <p className="text-xs text-gray-500 uppercase mb-2">Interior & Design</p>
      <p className="text-[clamp(16px,1.2vw,20px)] text-neutral-900 font-medium leading-[1.3]" aria-label="Minimalist, driver-focused interior with premium materials and sporty accents, combining comfort with pure performance aesthetics.">
        <div className="line-mask line1-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line1" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            Minimalist, driver-focused interior with premium materials
          </div>
        </div>
        <div className="line-mask line2-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line2" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            and sporty accents, combining comfort
          </div>
        </div>
        <div className="line-mask line3-mask" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left', overflow: 'clip' }}>
          <div className="line line3" aria-hidden="true" style={{ position: 'relative', display: 'block', textAlign: 'left' }}>
            with pure performance aesthetics.
          </div>
        </div>
      </p>
    </div>
  </div>
</div>

      </section>
    </>
  );
}
      