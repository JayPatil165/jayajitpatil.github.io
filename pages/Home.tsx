import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight, Download, ChevronDown, Sparkles, Code2, Brackets } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import PageTransition from '../components/PageTransition';
import Skills from '../components/Skills';
import Education from '../components/Education';
import AnimatedBackground from '../components/AnimatedBackground';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <PageTransition>
      <AnimatedBackground variant="hero" />
      
      {/* HERO SECTION */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] min-h-screen flex flex-col justify-center overflow-hidden pt-20 sm:pt-16 bg-gradient-to-br from-indigo-50/40 via-white to-cyan-50/40 dark:from-indigo-950/30 dark:via-gray-950 dark:to-cyan-950/30">
        {/* Scattered Code Background - Non-overlapping snippets */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.25] dark:opacity-[0.35]">
          {/* LEFT SIDE SNIPPETS */}
          {/* Top Left - Python */}
          <motion.div
            animate={isMobile ? {} : { y: [-8, -25, -5, -20, -8], x: [-12, 20, -18, 16, -12] }}
            transition={{ duration: 13.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 left-2 sm:left-4 font-mono text-xs sm:text-sm text-rose-600 dark:text-rose-400 leading-relaxed w-56 sm:w-72 whitespace-pre hidden sm:block"
          >
            {`def pipeline(data):
  result = transform(data)
  validate(result)`}
          </motion.div>

          {/* Bottom Left - JavaScript Arrow */}
          <motion.div
            animate={isMobile ? {} : { y: [-18, 18, -22, 20, -18], x: [-10, 25, -15, 18, -10] }}
            transition={{ duration: 12.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-24 left-1 sm:left-6 font-mono text-xs sm:text-sm text-violet-600 dark:text-violet-400 leading-relaxed w-56 sm:w-64 whitespace-pre"
          >
            {`const cache = new Map();
return (...args) =>
  cache.has(args) ? get(args)
  : set(args, fn(...args));`}
          </motion.div>

          {/* CENTER SNIPPETS */}
          {/* Center Top - TypeScript */}
          <motion.div
            animate={isMobile ? {} : { y: [-18, 22, -20, 18, -18], x: [-12, -18, 10, -14, -12] }}
            transition={{ duration: 11.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-20 left-1/2 -translate-x-1/2 font-mono text-xs sm:text-sm text-blue-600 dark:text-blue-300 leading-relaxed w-56 sm:w-64 whitespace-pre hidden md:block"
          >
            {`interface Config<T> {
  mode: "dev" | "prod";
  timeout?: T;
}`}
          </motion.div>

          {/* Center - Bash */}
          <motion.div
            animate={isMobile ? {} : { x: [-20, 28, -18, 25, -20], y: [-12, -28, -15, -24, -12] }}
            transition={{ duration: 15.1, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 font-mono text-xs sm:text-sm text-green-600 dark:text-green-400 leading-relaxed w-56 sm:w-64 whitespace-pre"
          >
            {`for file in *.ts; do
  echo "Processing $file"
  compile $file
done`}
          </motion.div>

          {/* Center Bottom - Rust */}
          <motion.div
            animate={isMobile ? {} : { y: [12, -28, 8, -26, 12], x: [-18, -25, 12, -20, -18] }}
            transition={{ duration: 14.7, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 font-mono text-xs sm:text-sm text-orange-600 dark:text-orange-400 leading-relaxed w-56 sm:w-64 whitespace-pre hidden md:block"
          >
            {`fn main() {
  let result = process();
  println!("{:?}", result);
}`}
          </motion.div>

          {/* RIGHT SIDE SNIPPETS */}
          {/* Top Right - GraphQL */}
          <motion.div
            animate={isMobile ? {} : { y: [-18, 18, -18], x: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
            className="absolute top-24 right-2 sm:right-6 font-mono text-xs sm:text-sm text-pink-600 dark:text-pink-400 leading-relaxed w-56 sm:w-64 whitespace-pre hidden sm:block"
          >
            {`query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
  }
}`}
          </motion.div>

          {/* Bottom Right - YAML */}
          <motion.div
            animate={isMobile ? {} : { y: [12, -28, 12], x: [0, -18, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute bottom-20 right-1 sm:right-8 font-mono text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 leading-relaxed w-56 sm:w-72 whitespace-pre hidden md:block"
          >
            {`server:
  host: localhost:8080
  timeout: 30s
  workers: 4`}
          </motion.div>

          {/* Far Right - Go */}
          <motion.div
            animate={isMobile ? {} : { y: [8, -32, 8], x: [0, -25, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-2/3 right-2 sm:right-4 font-mono text-xs sm:text-sm text-cyan-500 dark:text-cyan-300 leading-relaxed w-56 sm:w-64 whitespace-pre hidden lg:block"
          >
            {`func handler(w http.ResponseWriter) {
  w.WriteHeader(200)
  w.Write([]byte("OK"))
}`}
          </motion.div>

          {/* Additional Snippet 1 - CSS - Top Center-Right */}
          <motion.div
            animate={isMobile ? {} : { y: [-20, 15, -20], x: [0, 15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-1/4 right-1/3 font-mono text-xs sm:text-sm text-purple-400 dark:text-purple-300 leading-relaxed w-56 sm:w-64 whitespace-pre hidden md:block opacity-[0.25] dark:opacity-[0.35]"
          >
            {`.container {
  display: grid;
  gap: 2rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
}`}
          </motion.div>

          {/* Additional Snippet 2 - JSON - Middle Left */}
          <motion.div
            animate={isMobile ? {} : { y: [15, -20, 15], x: [0, 20, 0] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
            className="absolute top-1/2 left-4 sm:left-8 font-mono text-xs sm:text-sm text-yellow-500 dark:text-yellow-300 leading-relaxed w-56 sm:w-64 whitespace-pre hidden sm:block opacity-[0.25] dark:opacity-[0.35]"
          >
            {`{
  "name": "portfolio",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build"
  }
}`}
          </motion.div>

          {/* Additional Snippet 3 - HTML - Bottom Center */}
          <motion.div
            animate={isMobile ? {} : { y: [-15, 25, -15], x: [0, -18, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3.1 }}
            className="absolute bottom-1/4 left-1/2 -translate-x-1/2 font-mono text-xs sm:text-sm text-red-400 dark:text-red-300 leading-relaxed w-56 sm:w-64 whitespace-pre hidden md:block opacity-[0.25] dark:opacity-[0.35]"
          >
            {`<section class="hero">
  <h1>Welcome</h1>
  <p>Build amazing things</p>
</section>`}
          </motion.div>

          {/* Additional Snippet 4 - Java - Right Bottom */}
          <motion.div
            animate={isMobile ? {} : { y: [12, -28, 12], x: [0, -22, 0] }}
            transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-1/3 right-1/4 font-mono text-xs sm:text-sm text-orange-400 dark:text-orange-300 leading-relaxed w-56 sm:w-64 whitespace-pre hidden lg:block opacity-[0.25] dark:opacity-[0.35]"
          >
            {`public class Main {
  public static void main(String[] args) {
    System.out.println("Hello!");
  }
}`}
          </motion.div>

          {/* Center Dense 1 - SQL */}
          <motion.div
            animate={isMobile ? {} : { y: [-10, 18, -10], x: [0, 10, 0] }}
            transition={{ duration: 12.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            className="absolute top-2/5 left-1/2 -translate-x-1/2 font-mono text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 leading-relaxed w-56 sm:w-64 whitespace-pre hidden sm:block opacity-[0.25] dark:opacity-[0.35]"
          >
            {`SELECT COUNT(*) FROM users
WHERE created > now()
GROUP BY status`}
          </motion.div>

          {/* Center Dense 2 - C++ */}
          <motion.div
            animate={isMobile ? {} : { y: [14, -16, 14], x: [0, -10, 0] }}
            transition={{ duration: 13.2, repeat: Infinity, ease: "easeInOut", delay: 2.6 }}
            className="absolute top-1/3 right-1/3 font-mono text-xs sm:text-sm text-red-500 dark:text-red-400 leading-relaxed w-56 sm:w-64 whitespace-pre hidden md:block opacity-[0.25] dark:opacity-[0.35]"
          >
            {`#include <vector>
void sort(vector<int>& v) {
  std::sort(v.begin(), v.end());
}`}
          </motion.div>

          {/* Center Dense 3 - React */}
          <motion.div
            animate={isMobile ? {} : { y: [-14, 20, -14], x: [0, 12, 0] }}
            transition={{ duration: 10.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute bottom-2/5 left-1/3 font-mono text-xs sm:text-sm text-yellow-600 dark:text-yellow-400 leading-relaxed w-56 sm:w-64 whitespace-pre hidden md:block opacity-[0.25] dark:opacity-[0.35]"
          >
            {`const App = () => {
  return items.map(item => (
    <Card key={item.id} />
  ));
};`}
          </motion.div>

          {/* Center Dense 4 - Kotlin */}
          <motion.div
            animate={isMobile ? {} : { y: [16, -20, 16], x: [0, -12, 0] }}
            transition={{ duration: 11.9, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
            className="absolute bottom-2/3 right-2/5 font-mono text-xs sm:text-sm text-purple-600 dark:text-purple-400 leading-relaxed w-56 sm:w-64 whitespace-pre hidden lg:block opacity-[0.25] dark:opacity-[0.35]"
          >
            {`fun process(list: List<Int>) {
  list.filter { it > 0 }
    .map { it * 2 }
    .forEach { print(it) }
}`}
          </motion.div>


        </div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating gradient orbs */}
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 left-1/2 w-80 h-80 bg-gradient-to-r from-rose-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
            animate={{
              x: [0, -50, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8 lg:mt-12"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-4 lg:mb-6 relative z-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-indigo/10 to-accent-cyan/10 border border-accent-indigo/30 dark:border-accent-indigo/20 backdrop-blur-sm shadow-sm">
              <motion.div 
                className="w-2 h-2 rounded-full bg-accent-cyan flex-shrink-0"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-accent-indigo dark:text-accent-cyan tracking-wide uppercase">
                Available for Work • Always Learning
              </span>
            </div>
          </motion.div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[280px] lg:min-h-[320px]">
            {/* Left: Name & Socials */}
            <motion.div variants={itemVariants} className="flex flex-col justify-between relative">
              
              <div className="mb-0 flex items-center gap-6 lg:gap-14 relative ml-6 lg:ml-16">
                <div className="text-center">
                  <motion.h1 
                    className="text-9xl sm:text-10xl md:text-12xl lg:text-13xl font-black leading-none tracking-tighter mb-0 text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo to-accent-cyan"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    variants={itemVariants}
                  >
                    JAY
                  </motion.h1>
                  <motion.h1 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none tracking-tighter text-gray-600 dark:text-gray-400"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    variants={itemVariants}
                  >
                    PATIL
                  </motion.h1>
                </div>

                {/* Code Snippets beside name */}
                <div className="hidden lg:flex flex-col gap-3 mt-0 ml-6 lg:ml-10">
                  {/* Snippet 1 - Swift - Teal */}
                  <motion.div
                    animate={isMobile ? {} : { y: [-25, 30, -20, 28, -22, 18, -25], x: [-15, 20, -18, 22, -12, 16, -15] }}
                    transition={{ duration: 17.3, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
                    className="font-mono text-xs text-teal-600 dark:text-teal-400 leading-relaxed w-48 whitespace-pre opacity-50 dark:opacity-60"
                  >
                    {`func build() async {\n  return "done"\n}`}
                  </motion.div>

                  {/* Snippet 2 - Ruby - Pink */}
                  <motion.div
                    animate={isMobile ? {} : { y: [20, -25, 18, -22, 24, -18, 20], x: [12, -18, 14, -16, 20, -12, 12] }}
                    transition={{ duration: 15.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="font-mono text-xs text-pink-600 dark:text-pink-400 leading-relaxed w-48 whitespace-pre opacity-50 dark:opacity-60"
                  >
                    {`def solve(arr)\n  arr.map { |x|\n    x * 2 }\nend`}
                  </motion.div>

                  {/* Snippet 3 - Elixir - Indigo */}
                  <motion.div
                    animate={isMobile ? {} : { y: [-22, 28, -25, 26, -20, 24, -22], x: [-12, 18, -16, 20, -10, 14, -12] }}
                    transition={{ duration: 16.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="font-mono text-xs text-indigo-600 dark:text-indigo-400 leading-relaxed w-48 whitespace-pre opacity-50 dark:opacity-60"
                  >
                    {`defmodule App do\n  def run, do:\n    process()\nend`}
                  </motion.div>

                  {/* Snippet 4 - PHP - Emerald */}
                  <motion.div
                    animate={isMobile ? {} : { y: [24, -20, 22, -26, 18, -22, 24], x: [-18, 16, -20, 18, -14, 20, -18] }}
                    transition={{ duration: 14.9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                    className="font-mono text-xs text-emerald-600 dark:text-emerald-400 leading-relaxed w-48 whitespace-pre opacity-50 dark:opacity-60"
                  >
                    {`<?php\necho trim($data);\n?>`}
                  </motion.div>
                </div>
              </div>
              
              {/* Social Links */}
              <motion.div variants={itemVariants} className="flex gap-4 mt-auto pt-4">
                {SOCIAL_LINKS.map((link) => {
                  const getSocialBrandColor = (platform: string) => {
                    switch(platform.toLowerCase()) {
                      case 'linkedin':
                        return '#0A66C2';
                      case 'github':
                        return '#1F2937';
                      case 'twitter':
                        return '#1DA1F2';
                      case 'discord':
                        return '#5865F2';
                      case 'leetcode':
                        return '#F7A600';
                      case 'email':
                        return '#EA4335';
                      default:
                        return '#7c3aed';
                    }
                  };

                  const brandColor = getSocialBrandColor(link.platform);
                  const [isHovering, setIsHovering] = React.useState(false);

                  return (
                    <motion.a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      animate={isHovering ? { y: [0, -12, 0] } : { y: 0 }}
                      transition={isHovering ? { repeat: Infinity, duration: 0.2, ease: "easeInOut" } : {}}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-lg border-2 border-gray-300 dark:border-white/30 bg-white dark:bg-white/5 transition-all duration-300 text-black dark:text-white"
                      onMouseEnter={(e: any) => {
                        setIsHovering(true);
                        e.currentTarget.style.color = brandColor;
                        e.currentTarget.style.backgroundColor = `${brandColor}50`;
                        e.currentTarget.style.borderColor = brandColor;
                      }}
                      onMouseLeave={(e: any) => {
                        setIsHovering(false);
                        e.currentTarget.style.color = '';
                        e.currentTarget.style.backgroundColor = '';
                        e.currentTarget.style.borderColor = '';
                      }}
                      aria-label={link.platform}
                    >
                      {link.icon}
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right: Tagline, Description, Buttons */}
            <motion.div 
              variants={containerVariants}
              className="flex flex-col justify-center space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-ink dark:text-white">
                  Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400">Intelligence</span>. Visualizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Value</span>.
                </h2>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-light max-w-lg"
              >
                Building scalable software at the nexus of algorithms and infrastructure. I transform complex predictive models into elegant, production-grade systems—ensuring raw data is not just analyzed, but applied.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 pt-8 sm:ml-auto sm:w-fit"
              >
                <Link to="/work" className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.15, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-max px-6 py-3 rounded-xl bg-white/10 dark:bg-white/5 border-2 border-accent-indigo/50 text-gray-900 dark:text-white hover:border-accent-indigo dark:hover:border-accent-indigo hover:bg-accent-indigo/30 dark:hover:bg-accent-indigo/30 transition-all duration-300 font-semibold backdrop-blur-sm shadow-lg flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                  >
                    <span>Explore Work</span>
                    <ArrowRight className="w-4 h-4 flex-shrink-0" />
                  </motion.button>
                </Link>
                <motion.a
                  href="https://drive.google.com/file/d/15agaUjkNbRQZ8HalH44qU0tnNAFkx5eg/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-max px-6 py-3 rounded-xl bg-white/10 dark:bg-white/5 border-2 border-accent-cyan/50 text-gray-900 dark:text-white hover:border-accent-cyan dark:hover:border-accent-cyan hover:bg-accent-cyan/30 dark:hover:bg-accent-cyan/30 transition-all duration-300 font-semibold backdrop-blur-sm shadow-lg flex items-center justify-center gap-2 text-sm whitespace-nowrap"
                >
                  <Download className="w-4 h-4 flex-shrink-0" />
                  <span>Resume</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedBackground variant="skills" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-accent-indigo dark:text-accent-cyan uppercase tracking-widest">Technical Stack</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-ink dark:text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-indigo to-accent-cyan">Toolkit</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl font-light">
            Carefully selected technologies for building high-performance systems.
          </p>
        </motion.div>
        <Skills />
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-gray-100/60 to-gray-100/40 dark:from-gray-900/60 dark:to-gray-900/40 rounded-3xl py-8 md:py-12">
        <AnimatedBackground variant="education" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-end">
            <div className="md:col-span-1">
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold text-accent-indigo dark:text-accent-cyan uppercase tracking-widest">Education</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-ink dark:text-white mb-6">Knowledge & Growth</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full mb-8"></div>
              
              {/* Continuously Learning Block */}
              <motion.div 
                className="group rounded-2xl bg-gradient-to-br from-white to-gray-50/50 dark:from-white/5 dark:to-white/[0.02] border border-gray-200/50 dark:border-white/10 p-6 hover:bg-gradient-to-br hover:from-indigo-50/50 hover:to-cyan-50/50 dark:hover:from-indigo-950/20 dark:hover:to-cyan-950/20 hover:border-indigo-400 dark:hover:border-indigo-300 transition-all duration-300 overflow-hidden relative h-full"
                whileHover={{ scale: 1.02 }}
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Hover background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-cyan-600 transition-all duration-300">Continuously Learning</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      Always exploring new technologies, frameworks, and best practices. Passionate about staying updated with industry trends and expanding expertise across full-stack development, AI/ML, and system design.
                    </p>
                  </div>
                   
                  {/* Two Circles Animation with Accent Colors */}
                  <div className="mt-6 pt-6 border-t border-transparent group-hover:border-indigo-400/30 dark:group-hover:border-indigo-400/30 transition-colors duration-300 flex justify-center gap-8">
                    <motion.div
                      className="w-8 h-8 rounded-full border-2 border-accent-indigo"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                      className="w-8 h-8 rounded-full border-2 border-accent-cyan"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <Education />
            </div>
          </div>
        </motion.div>
        </div>
      </section>

    </PageTransition>
  );
};

export default Home;
