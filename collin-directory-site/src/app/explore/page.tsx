import Image from 'next/image';

export default function ExploreCollin() {
  return (
    <>
      <h2 className="text-3xl font-bold text-blue-800 mb-4">Explore Collin College</h2>
      <p className="mb-6 text-gray-700">
        Here are a few areas that might exist in a real college website. These buttons are just examples of how I might structure content using Tailwind and accessible HTML.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="region" aria-label="College Sections">
        {/* Example: Academics card */}
        <div className="bg-gray-50 p-4 rounded shadow" role="article" aria-labelledby="academics-title">
          <Image src="/collin_wylie_campus_commons_front.jpg" alt="Academic environment" width={400} height={200} className="rounded" />
          <h3 id="academics-title" className="text-xl font-semibold mt-2">Academics</h3>
          <p className="text-sm text-gray-600 mb-3">Programs that support transfer and career goals.</p>
          <button disabled className="bg-blue-200 text-white px-4 py-2 rounded cursor-not-allowed opacity-60">View Programs</button>
        </div>

        {/* Example: Campus Life card */}
        <div className="bg-gray-50 p-4 rounded shadow" role="article" aria-labelledby="campus-title">
          <Image src="/wylie_student_center_stairs.jpg" alt="Campus life" width={400} height={200} className="rounded" />
          <h3 id="campus-title" className="text-xl font-semibold mt-2">Campus Life</h3>
          <p className="text-sm text-gray-600 mb-3">Student events, clubs, and campus culture.</p>
          <button disabled className="bg-blue-200 text-white px-4 py-2 rounded cursor-not-allowed opacity-60">View Events</button>
        </div>
      </div>
    </>
  );
}
