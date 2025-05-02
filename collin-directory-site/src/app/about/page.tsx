// This is the "About Me" page. It's one of three pages in the site. I wanted to keep it simple while showing a bit of personality and effort.

export default function AboutMe() {
    return (
      <>
        {/* Page title using an h2 because it's not the main site title. I wanted it to feel consistent with the Explore page. */}
        <h2 className="text-3xl font-bold text-blue-800 mb-4">About the Developer</h2>
  
        {/* Intro paragraph explaining what this page is and how I approached the project. I tried to keep it friendly but informative. */}
        <p className="mb-6 text-gray-700">
          Hi, I’m Andy Nguyen. I created this mock site to practice front-end development using tools like Next.js and Tailwind CSS. 
          I also wanted to make sure it met basic accessibility standards and followed good structure.
        </p>
  
        {/* List of key takeaways I want interviewers to see. I wrote these based on what I actually did while building this. */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>I used the App Router in Next.js, which was confusing at first, but I figured it out with some trial and error.</li>
          <li>Tailwind CSS helped me control spacing and layout. I still check the docs often but I’m getting faster at it.</li>
          <li>I followed WCAG basics like adding alt text, semantic headings, and readable color contrast.</li>
          <li>I used Cursor AI mostly for debugging or asking for refactors after I tried something on my own first.</li>
        </ul>
  
        {/* Just a horizontal line to split sections. I’m trying to be thoughtful about visual separation. */}
        <hr className="my-10" />
  
        {/* This is more playful. I imagined this as a mock staff bio to show I understand how personal pages fit into an EDU site. */}
        <div className="bg-blue-50 p-6 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Mock Staff Bio</h3>
          <p className="text-gray-700">
            Andy supports the fictional Collin College web team by building layout prototypes, improving accessibility, 
            and experimenting with modern frameworks. When he’s not coding, he’s usually working on documentation 
            or learning something new in Python.
          </p>
        </div>
      </>
    );
  }
  