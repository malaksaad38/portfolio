'use client';
import React, {useEffect, useState} from 'react';
import {motion, Variants} from 'framer-motion';
import {useIsMobile} from "@/hooks/use-mobile";
import CyberpunkSpotlight from "@/components/CyberpunkSpotlight";
import {
    Atom,
    Award,
    BookOpen,
    ChevronLeft,
    Clock,
    Cloud,
    Code,
    Cpu,
    Database,
    FolderKanban,
    Gauge,
    Github,
    Globe,
    GraduationCap,
    Layers,
    Lightbulb,
    Linkedin,
    Mail,
    MapPin,
    MonitorSmartphone,
    Palette,
    PanelsTopLeft,
    Phone,
    Rocket,
    SearchCheck,
    Server,
    Smartphone,
    Smile,
    Sparkles,
    TerminalSquare,
    TrendingUp,
    User,
    Users,
    Workflow
} from "lucide-react";
import {GlitchText} from "@/components/GlitchText";
import ContactForm from "@/components/ContactForm";
import ProjectCard from "@/components/ProjectCard";
import WhatsAppButton from "@/components/WhatsappButton";
import CyberButton from "@/components/CyberButton";
import {CyberModeToggle} from "@/components/ui/CyberModeToggle";

const CyberpunkMenu = () => {
    const [activePage, setActivePage] = useState('home');
    const isMobile = useIsMobile();
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});


    // Track mouse position for dynamic effects
    useEffect(() => {
        const handleMouseMove = (e: any) => {
            setMousePosition({x: e.clientX, y: e.clientY});
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const pages = [
        {
            id: 'home', title: 'Home', color: 'to-blue-500/20', text: 'text-blue-500',
            glowColor: '#3b82f6', particleColor: 'rgba(59, 130, 246, 0.6)',
            bracketColor: 'border-blue-500',
            shadowColor: "shadow-blue-500/50",
        },
        {
            id: 'about', title: 'About Us', color: 'to-green-500/20', text: 'text-green-500',
            glowColor: '#10b981', particleColor: 'rgba(16, 185, 129, 0.6)',
            bracketColor: 'border-green-500',
            shadowColor: "shadow-green-500/50",

        },
        {
            id: 'services', title: 'Services', color: 'to-purple-500/20', text: 'text-purple-500',
            glowColor: '#8b5cf6', particleColor: 'rgba(139, 92, 246, 0.6)',
            bracketColor: 'border-purple-500',
            shadowColor: "shadow-purple-500/50",

        },
        {
            id: 'portfolio', title: 'Portfolio', color: 'to-amber-500/20', text: 'text-amber-500',
            glowColor: '#f59e0b', particleColor: 'rgba(245, 158, 11, 0.6)',
            bracketColor: 'border-amber-500',
            shadowColor: "shadow-amber-500/50",
        },
        {
            id: 'contact', title: 'Contact', color: 'to-red-500/20', text: 'text-red-500',
            glowColor: '#ef4444', particleColor: 'rgba(239, 68, 68, 0.6)',
            bracketColor: 'border-red-500',
            shadowColor: 'shadow-red-500/50',
        },
    ];

    const handlePageChange = (pageId: any) => {
        setActivePage(pageId === activePage ? isMobile ? null : null : pageId);
    };

    const getPageContent = (page: any) => {
        const currentPage = pages.find(p => p.id === page.id);

        const textVariant: Variants = {
            hidden: {opacity: 0, y: 15},
            visible: (delay: number = 0) => ({
                opacity: 1,
                y: 0,
                transition: {duration: 0.8, delay},
            }),
        };

        const containerVariant = {
            hidden: {opacity: 0},
            visible: {
                opacity: 1,
                transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                },
            },
        };

        const itemVariant = {
            hidden: {opacity: 0, y: 20},
            visible: {
                opacity: 1,
                y: 0,
                transition: {duration: 0.6},
            },
        };

        switch (page.id) {
            case 'home':
                return (
                    <CyberpunkSpotlight cornerBracketColor={page.bracketColor}>
                        <div className="md:p-8 p-6">
                            {/* === ANIMATED SCANNER LINES === */}
                            {[0, 1].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute top-0 left-0 w-full h-[1px] ${
                                        i === 0
                                            ? "bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                                            : "bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"
                                    }`}
                                    animate={{x: ["-100%", "100%"]}}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "linear",
                                        repeatType: "loop",
                                    }}
                                />
                            ))}

                            {/* === NEON BORDERS === */}
                            <div
                                className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/50 via-blue-400/20 to-transparent"></div>
                            <div
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/20 to-blue-500/50"></div>

                            {/* === PAGE NUMBER BG === */}
                            <motion.h1
                                className={`fixed right-4 bottom-2 ${page.text} opacity-30 font-cyber-outline leading-none text-[5rem] md:text-[7rem] font-bold`}
                                animate={{
                                    textShadow: [
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                        `0 0 20px ${currentPage?.glowColor}, 0 0 50px ${currentPage?.glowColor}`,
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                    ],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{duration: 3, repeat: Infinity}}
                            >
                                <GlitchText text="01" textColor={page.text}/>
                            </motion.h1>

                            {/* === CONTENT === */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                className="relative max-w-7xl px-4 md:px-8"
                            >


                                <motion.div
                                    initial={{opacity: 0, x: -40}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{duration: 0.8, ease: "easeOut"}}
                                    className="absolute md:right-0 right-6 top-0 px-4 md:px-8"
                                >
                                    <img
                                        src="/my-image.png"
                                        alt="Profile"
                                        className="w-full h-[50vh] md:w-[68vh] md:h-[80vh] -mt-8 md:-mt-0 opacity-80 object-cover object-center"
                                    />
                                    {[0, 1].map((i) => (
                                        <motion.div
                                            key={i}
                                            className={`absolute right-4 md:right-8 top-0 h-full w-[1px] sm:hidden overflow-hidden ${
                                                i === 0
                                                    ? "bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
                                                    : "bg-gradient-to-b from-transparent via-blue-300/30 to-transparent"
                                            }`}
                                            animate={{y: ["20%", "-80%"]}}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "linear",
                                                repeatType: "loop",
                                            }}
                                        />
                                    ))}
                                    <div
                                        className={"absolute top-64 -right-12 md:top-5/6 md:-right-16 font-cyber text-[8px] md:text-xs rotate-90"}>
                                        <GlitchText text="Malak Saad - Developer" textColor={page.text}/>

                                    </div>


                                </motion.div>
                                {/* content section */}
                                <div className={"relative pt-80 sm:pt-0 backdrop-opacity-50"}>
                                    <div
                                        className="sm:hidden block absolute top-72 left-4 bg-background w-full text-blue-500 blur-lg h-48 m-0 p-0 -z-20 overflow-visible">
                                    </div>
                                    <motion.h1
                                        variants={textVariant}
                                        custom={0.2}
                                        className={`text-4xl md:text-5xl text-shadow-md text-shadow-black font-black mb-4 font-cyber-outline flex items-center gap-3 ${page.text} bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent`}
                                    >
                                        <GlitchText text="Malak Saad" textColor={page.text}/>
                                    </motion.h1>

                                    {/* Subtitle */}
                                    <motion.h2
                                        variants={textVariant}
                                        custom={0.25}
                                        className="text-xl md:text-2xl font-bold text-foreground/80 mb-2 flex items-center gap-2"
                                    >
                                        <TerminalSquare className="hidden md:block w-6 h-6 text-blue-600 dark:text-blue-400"/>
                                        Full-Stack Developer & UI Specialist
                                    </motion.h2>


                                    {/* Cyber Label */}
                                    <motion.div
                                        variants={textVariant}
                                        custom={0.3}
                                        className="flex items-center gap-2 mb-6"
                                    >
                                        <Sparkles className="w-3 h-3 text-blue-500 animate-pulse"/>
                                        <h4 className="text-xs tracking-widest opacity-70 text-blue-700 dark:text-blue-300 uppercase">
                                            Building the future of web
                                        </h4>
                                    </motion.div>

                                    {/* Description */}
                                    <motion.p
                                        variants={textVariant}
                                        custom={0.4}
                                        className="text-base md:text-lg leading-relaxed max-w-3xl opacity-85 text-foreground mb-2 font-light"
                                    >
                                        I transform ideas into powerful digital solutions. Specializing in{" "}
                                        <span
                                            className="font-bold text-blue-600 dark:text-blue-400">Next.js, React, TypeScript</span> and{" "}
                                        <span className="font-bold text-blue-600 dark:text-blue-400">Node.js</span>, I craft scalable
                                        applications with exceptional user experiences.
                                    </motion.p>

                                    {/* Sub Description */}
                                    <motion.p
                                        variants={textVariant}
                                        custom={0.45}
                                        className="text-sm md:text-base opacity-70 text-foreground/80 max-w-3xl mb-8"
                                    >
                                        With 4+ years of hands-on experience, I've helped 12+ companies achieve their
                                        digital goals through cutting-edge technology and creative problem-solving.
                                    </motion.p>

                                    {/* Stats Section */}
                                    <motion.div
                                        variants={textVariant}
                                        custom={0.55}
                                        className="grid grid-cols-3 md:grid-cols-5  gap-4 md:gap-8 py-6 mb-8"
                                    >
                                        <div className="text-center group">
                                            <div
                                                className={`text-2xl md:text-3xl font-black ${page.text} group-hover:scale-110 transition-transform`}>
                                                12+
                                            </div>
                                            <div
                                                className="text-xs text-muted-foreground uppercase tracking-wider mt-2 font-semibold">
                                                Projects Delivered
                                            </div>
                                        </div>

                                        <div className="text-center group">
                                            <div
                                                className={`text-2xl md:text-3xl font-black ${page.text} group-hover:scale-110 transition-transform`}>
                                                08+
                                            </div>
                                            <div
                                                className="text-xs text-muted-foreground uppercase tracking-wider mt-2 font-semibold">
                                                Happy Clients
                                            </div>
                                        </div>

                                        <div className="text-center group">
                                            <div
                                                className={`text-2xl md:text-3xl font-black ${page.text} group-hover:scale-110 transition-transform`}>
                                                04+
                                            </div>
                                            <div
                                                className="text-xs text-muted-foreground uppercase tracking-wider mt-2 font-semibold">
                                                Years Experience
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Tech Stack */}
                                    <motion.div variants={textVariant} custom={0.7} className="mb-8">
                                        <h3 className="text-xs text-muted-foreground/80 uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                                            <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400"/>
                                            Tech Stack & Expertise
                                        </h3>

                                        <div className="flex flex-wrap gap-2 sm:gap-3 opacity-90">
                                            {[
                                                "React",
                                                "Next.js",
                                                "TypeScript",
                                                "JavaScript",
                                                "Node.js",
                                                "MongoDB",
                                                "Tailwind CSS",
                                            ].map((tag, i) => (
                                                <motion.span
                                                    key={i}
                                                    variants={itemVariant}
                                                    className={`px-3 py-2  bg-blue-500/20 dark:bg-blue-500/10 rounded-lg text-xs font-semibold text-blue-700 dark:text-blue-300 hover:bg-blue-500/20 hover:shadow-lg transition-all duration-300 cursor-default flex items-center gap-2`}
                                                >
                                                    <Atom className="w-3 h-3"/>
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* CTA Buttons */}
                                    <motion.div
                                        variants={textVariant}
                                        custom={0.9}
                                        className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-14 mb-10 px-10 md:px-6"
                                    >
                                        <CyberButton label={"View My Work"} primaryColor={page.glowColor}
                                                     accentColor={page.particleColor}
                                                     onClick={() => handlePageChange("portfolio")}/>
                                        <CyberButton label={"Let’s Talk"} primaryColor={page.glowColor}
                                                     accentColor={page.particleColor}
                                                     onClick={() => handlePageChange("contact")}/>
                                    </motion.div>

                                    {/* Quick Stats */}
                                    <motion.div
                                        variants={textVariant}
                                        custom={1.0}
                                        className="grid md:grid-cols-3 gap-4 mb-8"
                                    >
                                        {[
                                            {label: "Response Time", value: "Less than 12 minutes", icon: Clock},
                                            {label: "Project Completion", value: "99% On-time", icon: FolderKanban},
                                            {label: "Client Satisfaction", value: "100%", icon: Smile},
                                        ].map((stat, i) => (
                                            <div
                                                key={i}
                                                className="relative border border-blue-500/30 rounded-lg p-3 overflow-hidden bg-blue-500/10 dark:bg-blue-500/5 flex flex-col gap-2"
                                            >
                                                <stat.icon
                                                    className="w-20 h-20 absolute opacity-15 right-0  text-blue-600 dark:text-blue-400"/>
                                                <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                                                <p className="text-base md:text-lg font-black text-blue-700 dark:text-blue-300">{stat.value}</p>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* Signature */}
                                    <motion.div
                                        variants={textVariant}
                                        custom={1.1}
                                        className="opacity-40 font-cyber tracking-widest text-[10px] md:text-xs text-muted-foreground/80 border-t border-blue-500/20 pt-6"
                                    >
                                        ▸ CRAFTING DIGITAL EXCELLENCE SINCE 2020 ▸
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </CyberpunkSpotlight>);

            case 'about':
                return (
                    <CyberpunkSpotlight cornerBracketColor={page.bracketColor}>
                        <div className="md:p-8 p-6">

                            {/* === SCANNER LINES === */}
                            {[0, 1].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute top-0 left-0 w-full h-[1px] ${
                                        i === 0
                                            ? "bg-gradient-to-r from-transparent via-green-400/50 to-transparent"
                                            : "bg-gradient-to-r from-transparent via-green-300/30 to-transparent"
                                    }`}
                                    animate={{x: ["-100%", "100%"]}}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            ))}

                            <div
                                className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-green-500/50 via-green-400/20 to-transparent"/>
                            <div
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-400/20 to-green-500/50"/>

                            {/* === BACKGROUND NUMBER === */}
                            <motion.h1
                                className={`fixed right-4 bottom-2 ${page.text} opacity-30 font-cyber-outline leading-none text-[5rem] md:text-[7rem] font-bold`}
                                animate={{
                                    textShadow: [
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                        `0 0 20px ${currentPage?.glowColor}, 0 0 50px ${currentPage?.glowColor}`,
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                    ],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{duration: 3, repeat: Infinity}}
                            >
                                <GlitchText text="02" textColor={page.text}/>
                            </motion.h1>

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                className="max-w-7xl px-4 md:px-8"
                            >

                                {/* TITLE */}
                                <motion.h1
                                    variants={textVariant}
                                    custom={0.2}
                                    className={`text-4xl md:text-5xl font-black mb-4 font-cyber-outline z-10 ${page.text} bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent flex items-center gap-3`}
                                >
                                    <GlitchText text="Who I Am" textColor={page.text}/>
                                </motion.h1>

                                <motion.div
                                    variants={containerVariant}
                                    initial="hidden"
                                    animate="visible"
                                    className="space-y-8"
                                >

                                    {/* ABOUT TEXT */}
                                    <motion.div
                                        variants={itemVariant}
                                        className="text-base md:text-lg leading-relaxed text-foreground/80 border-l-4 border-green-500 md:px-6 py-4 px-4 bg-green-500/10 dark:bg-green-500/5 rounded-r-lg"
                                    ><p className="mb-4"> I'm <span
                                        className="font-black text-green-600 dark:text-green-400">Malak Saad</span>, a passionate full-stack
                                        developer and creative problem solver with a mission to build digital products
                                        that matter. With over 4 years of professional experience, I've dedicated myself
                                        to mastering modern web technologies and delivering exceptional results. </p>
                                        <p> My journey in tech started with a curiosity about how things work. Today, I
                                            leverage that curiosity to build scalable, performant applications that
                                            solve real-world problems and create lasting impact. </p></motion.div>

                                    {/* EXPERTISE + ACHIEVEMENTS GRID */}
                                    <motion.div variants={itemVariant} className="grid md:grid-cols-2 gap-6">

                                        {/* Expertise */}
                                        <div
                                            className="border-2 border-green-500/50 rounded-xl p-6  px-4 md:px-6 bg-gradient-to-br from-green-500/10 to-green-400/5 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all">
                                            <h3 className="text-green-600 dark:text-green-400 font-black mb-4 text-lg uppercase tracking-wider flex items-center gap-2">
                                                <Layers className="w-6 h-6"/>
                                                Expertise
                                            </h3>
                                            <ul className="text-foreground/80 text-sm space-y-3 font-semibold">
                                                <li className="flex items-center gap-2"><Cpu
                                                    className="text-green-600 dark:text-green-400 w-4"/> Full-Stack Web Development
                                                </li>
                                                <li className="flex items-center gap-2"><PanelsTopLeft
                                                    className="text-green-600 dark:text-green-400 w-4"/> React & Next.js Architecture
                                                </li>
                                                <li className="flex items-center gap-2"><Code
                                                    className="text-green-600 dark:text-green-400 w-4"/> TypeScript & Modern JavaScript
                                                </li>
                                                <li className="flex items-center gap-2"><Database
                                                    className="text-green-600 dark:text-green-400 w-4"/> Backend & Database Design
                                                </li>
                                                <li className="flex items-center gap-2"><Gauge
                                                    className="text-green-600 dark:text-green-400 w-4"/> Performance Optimization
                                                </li>
                                                <li className="flex items-center gap-2"><Rocket
                                                    className="text-green-600 dark:text-green-400 w-4"/> UI/UX Implementation
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Achievements */}
                                        <div
                                            className="border-2 border-green-500/50 rounded-xl p-6  px-4 md:px-6 bg-gradient-to-br from-green-500/10 to-green-400/5 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all">
                                            <h3 className="text-green-600 dark:text-green-400 font-black mb-4 text-lg uppercase tracking-wider flex items-center gap-2">
                                                <Award className="w-6 h-6"/>
                                                Achievements
                                            </h3>
                                            <ul className="text-foreground/80 text-sm space-y-3 font-semibold">
                                                <li className="flex items-center gap-2"><TrendingUp
                                                    className="text-green-600 dark:text-green-400 w-4"/> 12+ Successful Projects
                                                </li>
                                                <li className="flex items-center gap-2"><Users
                                                    className="text-green-600 dark:text-green-400 w-4"/> 05+ Global Clients
                                                </li>
                                                <li className="flex items-center gap-2"><Clock
                                                    className="text-green-600 dark:text-green-400 w-4"/> 99% On-time Delivery
                                                </li>
                                                <li className="flex items-center gap-2"><User
                                                    className="text-green-600 dark:text-green-400 w-4"/> Mentor to 10+ Developers
                                                </li>
                                                <li className="flex items-center gap-2"><Globe
                                                    className="text-green-600 dark:text-green-400 w-4"/> Open-source Contributor
                                                </li>
                                                <li className="flex items-center gap-2"><BookOpen
                                                    className="text-green-600 dark:text-green-400 w-4"/> Tech Community Speaker
                                                </li>
                                            </ul>
                                        </div>
                                    </motion.div>

                                    {/* EDUCATION */}
                                    <motion.div
                                        variants={itemVariant}
                                        className="border-2 border-green-500/50 rounded-xl p-6  px-4 md:px-6 bg-gradient-to-br from-green-500/10 to-green-400/5 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 transition-all"
                                    >
                                        <h3 className="text-green-600 dark:text-green-400 font-black mb-4 text-lg uppercase tracking-wider flex items-center gap-2">
                                            <GraduationCap className="w-6 h-6 hidden md:block"/>
                                            Education & Certifications
                                        </h3>

                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="border-l-4 border-green-400 pl-4 flex items-start gap-2">
                                                <div>
                                                    <p className="font-black text-foreground">BS in Computer Science</p>
                                                    <p className="text-sm text-muted-foreground">UET • 2022</p>
                                                </div>
                                            </div>

                                            <div className="border-l-4 border-green-400 pl-4 flex items-start gap-2">
                                                <div>
                                                    <p className="font-black text-foreground">AWS Solutions Architect</p>
                                                    <p className="text-sm text-muted-foreground">AWS • 2023</p>
                                                </div>
                                            </div>

                                            <div className="border-l-4 border-green-400 pl-4 flex items-start gap-2">
                                                <div>
                                                    <p className="font-black text-foreground">Advanced React Developer</p>
                                                    <p className="text-sm text-muted-foreground">Meta • 2024</p>
                                                </div>
                                            </div>

                                            <div className="border-l-4 border-green-400 pl-4 flex items-start gap-2">
                                                <div>
                                                    <p className="font-black text-foreground">Full-Stack Web Mastery</p>
                                                    <p className="text-sm text-muted-foreground">Comprehensive Program •
                                                        2025</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* STATS */}
                                    <motion.div variants={itemVariant} className="grid md:grid-cols-3 gap-4">
                                        {[
                                            {num: "4+", label: "Years of Experience", icon: Rocket},
                                            {num: "100%", label: "Client Satisfaction", icon: TrendingUp},
                                            {num: "24/7", label: "Dev Support", icon: Clock},
                                        ].map((item, i) => (
                                            <div key={i}
                                                 className="relative overflow-hidden border border-green-500/30 rounded-lg p-4 bg-green-500/10 dark:bg-green-500/5 flex flex-col ">
                                                <item.icon
                                                    className="w-20 h-20 absolute opacity-15 right-0 text-green-600 dark:text-green-400"/>

                                                <div
                                                    className="text-2xl md:text-3xl font-black text-green-600 dark:text-green-400 mb-1">{item.num}</div>
                                                <div
                                                    className="text-xs text-muted-foreground uppercase font-bold tracking-wider">{item.label}</div>
                                            </div>
                                        ))}
                                    </motion.div>

                                    {/* FOOTER QUOTE */}
                                    <motion.p
                                        variants={itemVariant}
                                        className="text-sm md:text-base text-muted-foreground italic text-center border-top border-green-500/20 pt-6 flex items-center justify-center gap-2"
                                    >
                                        <Sparkles className="w-4 h-4 text-green-600 dark:text-green-400"/>
                                        "When I'm not coding, I explore emerging tech, open-source, articles,
                                        mentoring…"
                                    </motion.p>

                                </motion.div>
                            </motion.div>
                        </div>
                    </CyberpunkSpotlight>
                );

            case 'services':
                return (
                    <CyberpunkSpotlight cornerBracketColor={page.bracketColor}>
                        <div className="md:p-8 p-6">

                            {/* === SCANNER LINES === */}
                            {[0, 1].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute top-0 left-0 w-full h-[1px] ${
                                        i === 0
                                            ? "bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
                                            : "bg-gradient-to-r from-transparent via-purple-300/30 to-transparent"
                                    }`}
                                    animate={{x: ["-100%", "100%"]}}
                                    transition={{duration: 3 + i, repeat: Infinity, ease: "linear"}}
                                />
                            ))}

                            {/* DECORATIVE LINES */}
                            <div
                                className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/50 via-purple-400/20 to-transparent"/>
                            <div
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-400/20 to-purple-500/50"/>

                            {/* BACKGROUND NUMBER */}
                            <motion.h1
                                className={`fixed right-4 bottom-2 ${page.text} opacity-30 font-cyber-outline leading-none text-[5rem] md:text-[7rem] font-bold`}
                                animate={{
                                    textShadow: [
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                        `0 0 20px ${currentPage?.glowColor}, 0 0 50px ${currentPage?.glowColor}`,
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                    ],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{duration: 3, repeat: Infinity}}
                            >
                                <GlitchText text="03" textColor={page.text}/>
                            </motion.h1>

                            <motion.div initial="hidden" animate="visible" className="max-w-7xl px-4 md:px-8">

                                {/* MAIN HEADING */}
                                <motion.h1
                                    variants={textVariant}
                                    custom={0.2}
                                    className={`text-4xl md:text-5xl font-black mb-2 font-cyber-outline z-10 ${page.text} bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent`}
                                >
                                    <GlitchText text="What I Offer" textColor={page.text}/>
                                </motion.h1>

                                {/* SUBTEXT */}
                                <motion.p variants={textVariant} custom={0.3}
                                          className="text-muted-foreground mb-8 text-base max-w-2xl">
                                    Comprehensive web development solutions tailored to your unique business needs
                                </motion.p>

                                {/* SERVICES GRID */}
                                <motion.div
                                    variants={containerVariant}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                                >
                                    {[
                                        {
                                            icon: <Palette className="text-purple-700 dark:text-purple-300 w-8 h-8"/>,
                                            title: "UI/UX Design",
                                            desc: "Beautiful, intuitive interfaces designed for maximum user engagement and conversion.",
                                            features: ["Wire framing", "Prototyping", "User Testing", "Design Systems"],
                                        },
                                        {
                                            icon: <MonitorSmartphone className="text-purple-700 dark:text-purple-300 w-8 h-8"/>,
                                            title: "Frontend Development",
                                            desc: "Cutting-edge React and Next.js applications with stunning animations and interactions.",
                                            features: ["React", "Next.js", "TypeScript", "Framer Motion"],
                                        },
                                        {
                                            icon: <Server className="text-purple-700 dark:text-purple-300 w-8 h-8"/>,
                                            title: "Backend Development",
                                            desc: "Robust, scalable server-side solutions with secure APIs and databases.",
                                            features: ["Node.js", "Express", "GraphQL", "REST APIs"],
                                        },
                                        {
                                            icon: <Smartphone className="text-purple-700 dark:text-purple-300 w-8 h-8"/>,
                                            title: "Responsive Design",
                                            desc: "Pixel-perfect designs that work flawlessly across all devices and screen sizes.",
                                            features: ["Mobile First", "Cross-browser", "Performance", "Accessibility"],
                                        },
                                        {
                                            icon: <Rocket className="text-purple-700 dark:text-purple-300 w-8 h-8"/>,
                                            title: "Performance & SEO",
                                            desc: "Optimized applications with lightning-fast load times and excellent search visibility.",
                                            features: ["Core Web Vitals", "SEO", "CDN", "Caching"],
                                        },
                                        {
                                            icon: <Cloud className="text-purple-700 dark:text-purple-300 w-8 h-8"/>,
                                            title: "Cloud Deployment",
                                            desc: "Secure, scalable hosting solutions with continuous integration and deployment.",
                                            features: ["AWS", "Vercel", "Docker", "CI/CD"],
                                        },
                                    ].map((service, i) => (
                                        <motion.div
                                            key={i}
                                            variants={itemVariant}
                                            className="border-2 border-purple-500/50 rounded-xl p-6 px-4 md:px-6 bg-gradient-to-br from-purple-500/10 to-purple-400/5
                               hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/30 transition-all group"
                                        >
                                            <div
                                                className="mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>

                                            <h3 className="text-base font-black text-purple-700 dark:text-purple-300 mb-2 uppercase tracking-wider">
                                                {service.title}
                                            </h3>

                                            <p className="text-xs text-muted-foreground mb-4">{service.desc}</p>

                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-purple-500/20">
                                                {service.features.map((feature, j) => (
                                                    <span
                                                        key={j}
                                                        className="text-[11px] px-2 py-1 bg-purple-500/20 text-purple-200 rounded font-semibold"
                                                    >
                                {feature}
                            </span>
                                                ))}
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* PROCESS SECTION */}
                                <motion.div
                                    variants={itemVariant}
                                    className="border-2 border-purple-500/50 rounded-2xl p-8 bg-gradient-to-br from-purple-500/5 to-purple-400/5"
                                >
                                    <h2 className="text-xl md:text-3xl font-extrabold text-purple-600 dark:text-purple-400 mb-10 uppercase tracking-wider text-center">
                                        My Development Process
                                    </h2>

                                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                                        {[
                                            {
                                                num: "01",
                                                title: "Discovery",
                                                desc: "Understand your vision and requirements",
                                                icon: <Lightbulb className="w-6 h-6 text-purple-700 dark:text-purple-300"/>,
                                            },
                                            {
                                                num: "02",
                                                title: "Planning",
                                                desc: "Strategy and technical architecture and design",
                                                icon: <Layers className="w-6 h-6 text-purple-700 dark:text-purple-300"/>,
                                            },
                                            {
                                                num: "03",
                                                title: "Development",
                                                desc: "Building with excellence and precision",
                                                icon: <Workflow className="w-6 h-6 text-purple-700 dark:text-purple-300"/>,
                                            },
                                            {
                                                num: "04",
                                                title: "Delivery",
                                                desc: "Launch and continuous support and more",
                                                icon: <SearchCheck className="w-6 h-6 text-purple-700 dark:text-purple-300"/>,
                                            },
                                        ].map((step, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{scale: 1.05}}
                                                transition={{duration: 0.3}}
                                                className="relative"
                                            >
                                                <div
                                                    className="border border-purple-500/30 rounded-xl p-6 px-4 md:px-6 text-center bg-purple-500/10 dark:bg-purple-500/5 hover:bg-purple-500/20 dark:bg-purple-500/10 transition-all duration-300 shadow-sm">
                                                    <div className="flex justify-center mb-3">{step.icon}</div>
                                                    <div
                                                        className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">{step.num}</div>
                                                    <p className="font-semibold text-foreground/80 text-sm mb-1">{step.title}</p>
                                                    <p className="text-xs md:text-sm text-muted-foreground/80">{step.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </CyberpunkSpotlight>
                );

            case 'portfolio':
                return (
                    <CyberpunkSpotlight cornerBracketColor={page.bracketColor}>
                        <div className="md:p-8 p-6">

                            {/* === SCANNER LINES === */}
                            {[0, 1].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute top-0 left-0 w-full h-[1px] ${
                                        i === 0
                                            ? "bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"
                                            : "bg-gradient-to-r from-transparent via-amber-300/30 to-transparent"
                                    }`}
                                    animate={{x: ["-100%", "100%"]}}
                                    transition={{duration: 3 + i, repeat: Infinity, ease: "linear"}}
                                />
                            ))}

                            <div
                                className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-amber-500/50 via-amber-400/20 to-transparent"/>
                            <div
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-400/20 to-amber-500/50"/>

                            {/* BACKGROUND NUMBER */}
                            <motion.h1
                                className={`fixed right-4 bottom-2 ${page.text} opacity-30 font-cyber-outline leading-none text-[5rem] md:text-[7rem] font-bold`}
                                animate={{
                                    textShadow: [
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                        `0 0 20px ${currentPage?.glowColor}, 0 0 50px ${currentPage?.glowColor}`,
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                    ],
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{duration: 3, repeat: Infinity}}
                            >
                                <GlitchText text="04" textColor={page.text}/>
                            </motion.h1>

                            <motion.div initial="hidden" animate="visible" className="max-w-7xl px-4 md:px-8">

                                {/* MAIN HEADING */}
                                <motion.h1
                                    variants={textVariant}
                                    custom={0.2}
                                    className={`text-4xl md:text-5xl font-black mb-2 font-cyber-outline z-10 ${page.text} bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent flex items-center gap-2`}
                                >
                                    <GlitchText text="My Projects" textColor={page.text}/>
                                </motion.h1>

                                {/* SUBTEXT */}
                                <motion.p
                                    variants={textVariant}
                                    custom={0.3}
                                    className="text-muted-foreground mb-8 text-base max-w-2xl"
                                >
                                    Showcasing some of my best projects that demonstrate expertise in modern web
                                    development
                                </motion.p>

                                {/* PROJECT GRID */}
                                <motion.div
                                    variants={containerVariant}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid md:grid-cols-2 gap-8 mb-8"
                                >
                                    {["01", "02", "03", "04", "05", "06"].map((id) => (
                                        <ProjectCard key={id} projectId={id}/>
                                    ))}
                                </motion.div>

                            </motion.div>
                        </div>
                    </CyberpunkSpotlight>
                );

            case 'contact':
                return (
                    <CyberpunkSpotlight cornerBracketColor={page.bracketColor}>
                        <div className="md:p-8 p-6">

                            {/* === SCANNER LINES === */}
                            {[0, 1].map((i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute top-0 left-0 w-full h-[1px] ${
                                        i === 0
                                            ? "bg-gradient-to-r from-transparent via-red-400/50 to-transparent"
                                            : "bg-gradient-to-r from-transparent via-red-300/30 to-transparent"
                                    }`}
                                    animate={{x: ["-100%", "100%"]}}
                                    transition={{
                                        duration: 3 + i,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            ))}

                            {/* RIGHT BORDER GLOW */}
                            <div
                                className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-red-500/50 via-red-400/20 to-transparent"/>

                            {/* BOTTOM BORDER GLOW */}
                            <div
                                className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-400/20 to-red-500/50"/>


                            {/* BACKGROUND NUMBER */}
                            <motion.h1
                                className={`fixed right-4 bottom-2 ${page.text} opacity-30 font-cyber-outline leading-none text-[5rem] md:text-[7rem] font-bold`}
                                animate={{
                                    textShadow: [
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`,
                                        `0 0 20px ${currentPage?.glowColor}, 0 0 50px ${currentPage?.glowColor}`,
                                        `0 0 10px ${currentPage?.glowColor}, 0 0 30px ${currentPage?.glowColor}`
                                    ],
                                    scale: [1, 1.03, 1]
                                }}
                                transition={{duration: 3, repeat: Infinity}}
                            >
                                <GlitchText text="05" textColor={page.text}/>
                            </motion.h1>


                            <motion.div initial="hidden" animate="visible" className="max-w-7xl px-4 md:px-8">

                                {/* MAIN HEADING */}
                                <motion.h1
                                    variants={textVariant}
                                    custom={0.2}
                                    className={`text-4xl md:text-5xl font-black mb-2 font-cyber-outline z-10 ${page.text}
                bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent`}
                                >
                                    <GlitchText text="Get In Touch" textColor={page.text}/>
                                </motion.h1>

                                {/* SUBTEXT */}
                                <motion.p
                                    variants={textVariant}
                                    custom={0.3}
                                    className="text-muted-foreground mb-8 text-base max-w-2xl"
                                >
                                    Have an exciting project? I'm always interested in hearing about new opportunities
                                    and collaborations.
                                </motion.p>

                                {/* CONTACT FORM */}

                                <div className={"grid md:grid-cols-2 gap-8"}>
                                    <ContactForm/>
                                    <div className={"space-y-6 flex flex-col justify-between"}>
                                        <motion.div
                                            variants={containerVariant}
                                            initial="hidden"
                                            animate="visible"
                                            className="grid md:grid-cols-1 grid-rows-3 gap-6 mb-8"
                                        >
                                            {[
                                                {
                                                    icon: <Mail className="w-10 h-10 text-red-600 dark:text-red-400"/>,
                                                    label: "Email",
                                                    value: "saad@dragondevs.co"
                                                },
                                                {
                                                    icon: <Phone className="w-10 h-10 text-red-600 dark:text-red-400"/>,
                                                    label: "Phone",
                                                    value: "+923015488577"
                                                },
                                                {
                                                    icon: <MapPin className="w-10 h-10 text-red-600 dark:text-red-400"/>,
                                                    label: "Location",
                                                    value: "Peshawar, Pakistan"
                                                },
                                            ].map((contact, i) => (
                                                <motion.div
                                                    key={i}
                                                    variants={itemVariant}
                                                    className="
                            border-2 border-red-500/40 rounded-xl p-6 px-4 md:px-6 text-center
                            bg-gradient-to-br from-red-500/10 to-red-400/5
                            hover:border-red-400
                            hover:shadow-lg hover:shadow-red-500/30
                            transition-all group
                        "
                                                >
                                                    <div
                                                        className="mb-3 group-hover:scale-110 flex justify-center items-center transition-transform">
                                                        {contact.icon}
                                                    </div>

                                                    <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider mb-2">
                                                        {contact.label}
                                                    </p>

                                                    <p className="text-lg font-black text-red-700 dark:text-red-300">{contact.value}</p>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                        <WhatsAppButton
                                            phone="03015488577"
                                            message="Hi! I visited your website."
                                        />

                                    </div>

                                </div>


                                {/* ADDITIONAL INFO */}
                                <motion.div variants={itemVariant} className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="border border-red-500/30 rounded-lg p-6 px-4 md:px-6 bg-red-500/10 dark:bg-red-500/5">
                                        <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider mb-2">Response
                                            Time</p>
                                        <p className="text-xl font-black text-red-700 dark:text-red-300">Within 12 minutes</p>
                                    </div>
                                    <div className="border border-red-500/30 rounded-lg p-6 px-4 md:px-6 bg-red-500/10 dark:bg-red-500/5">
                                        <p className="text-sm text-muted-foreground uppercase font-bold tracking-wider mb-2">Availability</p>
                                        <p className="text-xl font-black text-red-700 dark:text-red-300">Open for New Projects</p>
                                    </div>
                                </motion.div>

                            </motion.div>
                        </div>
                    </CyberpunkSpotlight>);

            default:
                return null;
        }
    };
    const socialLinks = [
        {icon: <Github/>, url: "https://github.com/malaksaad38"},
        {icon: <Linkedin/>, url: "https://www.linkedin.com/in/malak-saad-354a0139a/"},
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                       className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path
                    d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>, url: "https://wa.me/923015488577?text=Hi! I visited your website."
        },
    ];

    const NavLinks = [
        {label: "Home", action: () => handlePageChange('home')},
        {label: "About Us", action: () => handlePageChange('about')},
        {label: "Services", action: () => handlePageChange('services')},
        {label: "Portfolio", action: () => handlePageChange('portfolio')},
        {label: "Contact", action: () => handlePageChange('contact')},
    ]
    const activePageData = activePage ? pages.find(p => p.id === activePage) : null;
    const activeColor = activePageData ? activePageData.glowColor : undefined;

    return (
        <div className="flex bg-background w-full h-screen relative overflow-hidden">
            {/* Mode Toggle at Top Left */}
            <div className="fixed -top-1 md:top-0 md:left-1 left-2 w-10 md:w-14 flex items-center justify-center z-50 mix-blend-difference hover:mix-blend-normal transition-all duration-300">
                <div className="transform-gpu scale-50 md:scale-[0.55]">
                    <CyberModeToggle activeColor={activeColor} />
                </div>
            </div>

            {/* Navigation tabs */}
            <div className="flex w-full h-full overflow-hidden relative">

                {pages.map((page, index) => {
                    const isActive = activePage === page.id;
                    const totalTabs = pages.length;
                    const tabWidth = 100 / totalTabs;

                    return (
                        <motion.div
                            key={page.id}
                            className="h-full text-foreground bg-background absolute overflow-hidden"
                            animate={{
                                left: isActive ? 0 : (
                                    activePage === null ? `${index * tabWidth}%` : (
                                        index < pages.findIndex(p => p.id === activePage) ? 0 : 'auto'
                                    )
                                ),
                                right: isActive ? 0 : (
                                    activePage === null ? 'auto' : (
                                        index > pages.findIndex(p => p.id === activePage) ? 0 : 'auto'
                                    )
                                ),
                                width: isActive ? '100%' : (
                                    activePage === null ? `${tabWidth}%` : '50px'
                                ),
                                zIndex: isActive ? 10 : 5 + index
                            }}
                            transition={{
                                type: 'tween',
                                duration: 0.6,
                                ease: [0.33, 1, 0.68, 1]
                            }}
                            onClick={() => !isActive && handlePageChange(page.id)}
                        >
                            {/* Tab content - Active Page */}
                            {isActive ? (
                                <motion.div
                                    className={`w-full h-full bg-gradient-to-br from-background from-20% ${page.color} overflow-x-hidden overflow-y-auto relative`}
                                    initial={{opacity: 0.5}}
                                    animate={{opacity: 1}}
                                    transition={{duration: 0.4}}
                                >
                                    {getPageContent(page)}
                                </motion.div>
                            ) : (
                                /* Tab content - Inactive Page */
                                <motion.div
                                    className="h-full bg-background cursor-pointer transition-all duration-500 ease-in font-cyber hover:font-cyber-outline w-full flex items-center justify-center overflow-hidden"
                                >

                                    {/* Glow line effect */}
                                    <motion.div
                                        className="absolute left-0 top-0 w-1 h-full"
                                        style={{
                                            background: `linear-gradient(to bottom, ${page.glowColor}60, transparent)`
                                        }}
                                        animate={{
                                            opacity: [0.2, 0.8, 0.2],
                                            boxShadow: [`0 0 5px ${page.glowColor}`, `0 0 20px ${page.glowColor}`, `0 0 5px ${page.glowColor}`],
                                        }}
                                        transition={{duration: 2.5, repeat: Infinity, delay: index * 0.3}}
                                    />

                                    {/* Tab label */}
                                    <motion.div
                                        className={`text-2xl md:text-3xl font-black ${page.text} transform -rotate-90 whitespace-nowrap tracking-wider`}
                                        whileHover={{
                                            textShadow: `0 0 5px ${page.glowColor}`,
                                            scale: 1.1
                                        }}
                                        transition={{type: "spring", stiffness: 300}}
                                    >
                                        <motion.span
                                            animate={{
                                                textShadow: [`0 0 5px ${page.glowColor}`, `0 0 15px ${page.glowColor}`, `0 0 5px ${page.glowColor}`],
                                            }}
                                            transition={{duration: 2, repeat: Infinity, repeatDelay: index * 0.3}}
                                        >
                                            {page.title.toUpperCase()}
                                        </motion.span>
                                    </motion.div>

                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Bottom Navigation Indicator */}
            {activePage !== null && (

                <motion.div
                    className="fixed right-0 z-10 h-full  flex items-center shadow-lg"
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay: 0.5, type: "spring", stiffness: 100}}
                >
                    {pages.map((page, i) => (
                        page.id === activePage &&
                        <div key={i}>
                            <button
                                onClick={() => handlePageChange(null)}
                                className="fixed right-0 top-0 h-full md:w-20 flex justify-end items-center pr-8 pl-2"
                            >
                                <div className={`absolute right-0 rotate-90 text-sm font-cyber ${page.text}`}>
                                    <GlitchText text={"Menu"} textColor={page.text}/>
                                </div>
                                <motion.div
                                    animate={{x: [0, 5, 0]}}
                                    transition={{duration: 1.5, repeat: Infinity, ease: "linear"}}
                                >
                                    <ChevronLeft color={page.glowColor}/>
                                </motion.div>
                            </button>


                            <div
                                className="fixed left-0 top-0 h-full md:w-14 w-10 flex flex-col items-center justify-center">
                                {/* MAIN NAV BUTTONS */}
                                <motion.div
                                    className="flex flex-col items-center justify-center space-y-18  "
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, ease: "easeOut"}}
                                >
                                    {NavLinks.map((item, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={item.action}
                                            className={`rotate-90 text-sm font-normal font-cyber tracking-wide ${page.title === item.label ? page.text : ""} transition-all duration-300 hover:tracking-wider hover:font-cyber-outline hover:font-bold`}
                                            whileHover={{opacity: 1}}
                                            whileTap={{scale: 0.9}}
                                            initial={{opacity: 0, y: 10}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.4, delay: index * 0.1}}
                                        >
                                            {item.label}
                                        </motion.button>
                                    ))}
                                </motion.div>

                                {/* CURRENT PAGE TEXT (GLITCH) */}
                                <motion.div
                                    className="fixed bottom-14 md:-left-4 -left-[22px] w-[90px] flex justify-end items-center rotate-90 font-cyber-outline font-bold"
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.8, delay: 0.5}}
                                >
                                    <motion.div
                                        animate={{opacity: [1, 0.6, 1]}}
                                        transition={{duration: 2, repeat: Infinity}}
                                    >
                                        <GlitchText text={page.title} textColor={page.text}/>
                                    </motion.div>
                                </motion.div>

                            </div>
                            <motion.div
                                className="fixed top-6 md:right-6 right-4 flex flex-col gap-3 z-50"
                                initial={{opacity: 0, x: -20}}
                                animate={{opacity: 1, x: 0}}
                                transition={{delay: 1.5}}
                            >
                                {socialLinks.map((s, i) => (
                                    <motion.a
                                        key={i}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{scale: 1.3, rotate: 5}}
                                        whileTap={{scale: 0.95}}
                                        className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 ${page.bracketColor} ${page.text} transition-all duration-300 shadow-lg ${page.shadowColor}`}
                                    >
                                        {s.icon}
                                    </motion.a>
                                ))}
                            </motion.div>

                        </div>


                    ))}

                </motion.div>
            )}
        </div>
    );
};

export default CyberpunkMenu;


