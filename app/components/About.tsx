import Image from 'next/image';

export default function About() {
  return (
    <section className="mb-10 sm:mb-16 flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 items-center">
      <div className="flex-1 w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-left bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 font-heading">About</h2>
        <div className="space-y-6 text-gray-400 text-left leading-relaxed font-sans">
          <p className="text-sm sm:text-base">
            I&apos;m a <span className="text-white font-medium font-display">Software Engineer</span> who enjoys building smart and useful things with code — especially on the frontend, where all the behind-the-scenes work happens.
          </p>
          <p className="text-sm sm:text-base">
            I started programming back in <span className="text-white bg-white/5 px-2 rounded border border-white/10 font-mono">2016</span> while studying at{' '}
            <a href="https://www.asu.edu.eg" className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors duration-200">Ain Shams University</a>.
            After graduating in <span className="text-white bg-white/5 px-2 rounded border border-white/10 font-mono">2019</span>, I explored digital marketing for a short time, but my love for coding pulled me back.
            I started freelancing as a <span className="text-white font-medium font-display">frontend developer</span>, then found my real passion in frontend development.
          </p>
          <p className="text-sm sm:text-base">
            To level up my skills, I joined the <span className="text-white font-medium font-display">ITI .NET & Angular track</span> while continuing to freelance and build projects.
            Along the way, I discovered how much I enjoy teaching and sharing what I know. I became an <span className="text-white font-medium font-display">External Instructor at ITI</span>,
            where I&apos;ve trained over <span className="text-white bg-white/5 px-2 rounded border border-white/10 font-mono">200</span> students in frontend development and software best practices.
          </p>
          <p className="text-sm sm:text-base">
            Later, I joined the <span className="text-white font-medium font-display">Digital Egypt Pioneers Initiative (DEPI)</span>, a program by the{' '}
            <span className="text-white font-medium font-display">Ministry of Communications</span>, as a <span className="text-white font-medium font-display">Software Instructor</span>.
            There, I&apos;ve taught <span className="text-white font-medium font-display">MERN Stack</span> and <span className="text-white font-medium font-display">.NET</span> to over{' '}
            <span className="text-white bg-white/5 px-2 rounded border border-white/10 font-mono">250</span> students so far.
          </p>
          <p className="text-sm sm:text-base">
            I love making complex things easy to understand, and I&apos;m always excited to help others grow as developers.
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
