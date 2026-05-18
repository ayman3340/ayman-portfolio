import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";

function Hero() {
  const text =
    "Specializing in React, Tailwind, MUI and building user-friendly interfaces.";

  // استخدام useRef للوصول إلى العناصر بدلاً من document.querySelector
  const textRef = useRef(null);
  const videoRef = useRef(null);

  const isInView = useInView(textRef, { once: true });

  // دوال للتحكم في تشغيل وإيقاف الفيديو

  const handleVideoPlay = async () => {
    try {
      // نتحقق أولاً: هل الفيديو موجود؟ وهل هو متوقف بالفعل؟
      // إذا كان متوقفاً، قم بتشغيله. أما إذا كان يعمل (بسبب autoPlay)، فلا تفعل شيئاً.
      if (videoRef.current && videoRef.current.paused) {
        await videoRef.current.play();
      }
    } catch (err) {
      console.warn("Video playback was interrupted:", err);
    }
  };

  const handleVideoPause = () => {
    // نوقف الفيديو فقط إذا كان يعمل (ليس متوقفاً)
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };

  return (
    <section className="container mx-auto h-screen flex flex-col justify-center px-4">
      <div className="flex flex-col justify-evenly min-h-100 md:flex-row items-center md:px-5">
        <div>
          {/* دمج وسوم h1 المتعددة في وسم واحد لأغراض الـ SEO */}
          <h1 className="mt-3 md:mt-7 xl:mt-7 text-4xl sm:text-5xl md:text-4xl xl:text-5xl flex flex-col">
            <span>Hi. I’m</span>
            <span className="text-green-500 my-1 md:my-5 xl:my-7 font-bold">
              Ayman
            </span>
            <span className="mb-1 md:mb-5 xl:mb-7 font-bold">Frontend Dev</span>
          </h1>

          {/* استخدام وسم p بدلاً من h2 لأنه نص فقرة */}
          <p
            ref={textRef}
            className="text-base text-left sm:text-2xl md:text-xl xl:text-1xl font-bold tracking-tighter md:leading-8 my-1 sm:my-2"
          >
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </p>
        </div>

        <div className="my-5 md:mt-0 h-auto w-full max-w-md md:max-w-4xl m-auto">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop
            onMouseEnter={handleVideoPlay}
            onMouseLeave={handleVideoPause}
            onTouchStart={handleVideoPlay}
            onTouchEnd={handleVideoPause}
            className="h-auto w-full rounded-lg shadow-lg object-cover"
            aria-label="Ayman's introductory video"
          >
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* الأزرار */}
      <div className="flex flex-col sm:justify-between sm:items-center sm:flex-row md:flex-row md:justify-between items-center w-full px-5 gap-4 sm:gap-5 mt-8">
        <div className="flex flex-col gap-3 sm:justify-between sm:flex-row sm:items-center md:flex-row w-full sm:w-auto">
          <a
            href="#Contact"
            className="text-black hover:bg-green-400  bg-green-500 px-6 py-3 rounded-full text-center transition-colors duration-300 font-semibold"
          >
            Get in Touch
          </a>

          {/* تصحيح رابط السيرة الذاتية ليكون ملفاً قابلاً للتحميل */}
          <a
            href="/resume.pdf"
            download="Ayman_Resume.pdf"
            className="hover:border-white border-2 border-gray-600 px-6 py-3 rounded-full text-center transition-colors duration-300 font-semibold"
          >
            Download Resume
          </a>
        </div>

        {/* الروابط الاجتماعية */}
        <div className="flex flex-row justify-center gap-4 md:gap-6 mt-6 sm:mt-0">
          <a
            href="https://www.linkedin.com/in/ayman-kamal-mahmoud-515268163/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="text-4xl sm:text-5xl md:text-6xl hover:text-blue-500 transition-colors duration-300"
          >
            <CiLinkedin />
          </a>

          <a
            href="https://www.codewars.com/users/ayman3340"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my CodeWars profile"
            className="text-4xl sm:text-5xl md:text-6xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaCode />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
