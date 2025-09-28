import Image from 'next/image';

export default function About() {
  return (
    <section className="mb-10 sm:mb-16 flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 items-center">
      <div className="flex-1 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 font-heading">About</h2>
        <div className="space-y-6 text-gray-400 text-left leading-relaxed font-sans">
          <p className="text-sm sm:text-base">
            I&apos;m a <span className="text-gray-300 font-medium font-display">Software Engineer</span> who enjoys building smart and useful things with code — especially on the frontend, where all the behind-the-scenes work happens.
          </p>
          
          <p className="text-sm sm:text-base">
            My journey with <span className="text-gray-300 font-medium">frontend </span> began in{" "}
            <span className="text-gray-300 bg-white/5 px-2 rounded border border-white/10 font-mono">2022</span>{" "}
            while studying at{" "}
            <a
              href="https://www.azhar.edu.eg"
              className="text-gray-300 hover:text-gray-300 underline underline-offset-4 transition-colors duration-200"
            >
              Al-Azhar University
            </a>
            . During{" "}
            <span className="text-gray-300 bg-white/5 px-2 rounded border border-white/10 font-mono">2022–2023</span>,
            I dedicated myself to learning modern frontend skills through{" "}
            <span className="text-gray-300 font-medium">ITI</span> and{" "}
            <span className="text-gray-300 font-medium">IEEE programs</span>, where I built a solid foundation in
            HTML, CSS, JavaScript, and frameworks like React.
          
          </p>
          
          <p className="text-sm sm:text-base">
            In my graduation year{" "}
            <span className="text-gray-300 bg-white/5 px-2 rounded border border-white/10 font-mono">2024</span>,
            I joined <span className="text-gray-300 font-medium">Bltzo</span> as a frontend intern, gaining hands-on
            experience working on real projects and strengthening both my technical and teamwork skills.
            </p>
        
          <p className="text-sm sm:text-base">
            Throughout my university years, I kept learning and exploring the{" "}
            <span className="text-gray-300 font-medium font-display">web development</span> field,
            building projects and sharpening my skills. My{" "}
            <span className="text-gray-300 font-medium">graduation project</span> was recognized as{" "}
            <span className="text-gray-300 font-medium">Best Project</span> in the faculty,
            At the same time, I discovered my love for{" "}
            <span className="text-gray-300 font-medium">teaching</span>, working as a{" "}
            <span className="text-gray-300 font-medium font-display">Programming Instructor </span> 
            for kids, where I taught them the fundamentals of coding using{" "}
            <span className="text-gray-300 font-medium">Scratch</span> in a fun and engaging way.
          </p>
        

          <p className="text-sm sm:text-base">
            After this experience, I began my{" "}
            {" "} <span className="text-gray-300 font-medium font-display">professional journey</span>{" "} as a{" "} <span className="text-white font-medium font-display">Frontend Developer</span>{" "} at{" "} <span className="text-white font-medium font-display">Cloud Secrets</span>
          </p>
        
        </div>
      </div>
      <div className="group w-32 h-32 sm:w-48 sm:h-48 relative mb-4 sm:mb-0 sm:self-start sm:mt-10">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 via-white to-gray-600 opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-300 animate-spin-on-hover"></div>
        <div className="absolute inset-0 rounded-full bg-black"></div>
        <div className="relative w-full h-full transform group-hover:scale-[0.98] transition-transform duration-300">
          <Image
            src="/karema.jpg"
            alt="Profile"
            fill
            className="rounded-full object-cover border-2 border-gray-800"
            priority
          />
        </div>
      </div>
    </section>
  );
}
