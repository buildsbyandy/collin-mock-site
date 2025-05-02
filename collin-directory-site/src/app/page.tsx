<main className="flex flex-col sm:flex-row items-start justify-center gap-10 px-6 py-10 max-w-6xl mx-auto">

  {/* Left: Campus Image */}
  <div className="flex-shrink-0">
    <Image
      src="/collin_wylie_campus_commons_front.jpg"
      alt="Collin College Wylie Campus Commons Front Entrance"
      width={550}
      height={350}
      className="rounded shadow"
      priority
    />
  </div>

  {/* Right: Main Content */}
  <div className="flex-1 max-w-xl">
    <h1 className="text-4xl font-bold text-blue-800 mb-4">
      Welcome to Collin College – <br /> Wylie Directory
    </h1>

    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
      This mock website was built to demonstrate front-end development
      skills using Next.js and Tailwind CSS. The goal was to make
      something clean, accessible, and easy to navigate based on the
      Wylie Campus segment. It’s inspired by the official Collin
      College site and includes a fun cat fact API just for flair.
    </p>

    <div className="flex flex-wrap gap-4">
      <a
        href="/explore"
        aria-label="Explore Collin College page"
        className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Explore Collin
      </a>
      <a
        href="/about"
        aria-label="About the developer page"
        className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        About Me
      </a>
    </div>
  </div>
</main>
