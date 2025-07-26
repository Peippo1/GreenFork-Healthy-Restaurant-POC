

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-white w-full"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?healthy-food,organic,farm')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
          Eat Green. Live Clean.
        </h1>
        <p className="text-lg md:text-xl mb-6 animate-fade-in-up">
          Farm-fresh meals made with care and conscience.
        </p>
        <a
          href="/menu"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded transition animate-bounce"
        >
          Explore Menu
        </a>
      </div>
    </div>
  );
}