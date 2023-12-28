function ParallaxSection() {
  return (
    <div className="relative">
      <div
        className="bg-fixed bg-no-repeat bg-cover bg-center h-[500px] flex items-center justify-center"
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
        {/* Content goes here */}
        <h2 className="text-white text-4xl font-bold">Major Mixing</h2>
      </div>
      {/* Other sections */}
    </div>
  );
}

export default ParallaxSection;
