"use client";
import {useEffect, useState} from "react";
import projectsData from "@/components/data/projects.json";
import {ExternalLink, Github} from "lucide-react";
import { motion } from "motion/react";

interface ProjectCardProps {
    projectId: string;
}

interface Project {
    num: string;
    title: string;
    desc: string;
    tags: string[];
    impact: string;
    icon: string;
    image?: string;
    github?: string;
    live?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({projectId}) => {
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        const data = projectsData.find((p) => p.num === projectId);
        if (data) setProject(data);
    }, [projectId]);

    if (!project) return null;

    return (
        <motion.div
            whileHover={{scale: 1.01}}
            className="relative group border-2 border-amber-500/50 rounded-xl overflow-hidden
            bg-gradient-to-br from-amber-500/10 to-amber-400/5
            hover:border-amber-400 hover:shadow-md hover:shadow-amber-500/40
            transition-all cursor-pointer flex flex-col"
        >

            {/* IMAGE */}
            {project.image && (
                <div className="relative w-full h-48 md:h-64 overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            )}

            <div className="p-6 px-4 md:px-6 flex flex-col flex-1 justify-between">

                {/* ICON & NUMBER */}
                <div className="absolute right-2 md:right-4 top-40 md:top-52 flex items-center justify-between opacity-60">
                    <div className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider font-cyber-outline">
                        {project.num}
                    </div>
                </div>

                {/* TITLE */}
                {project.live ? (
                    <motion.a
                        href={project.live}
                        target="_blank"
                    >
                        <h3 className="text-lg md:text-xl font-extrabold text-gray-800 dark:text-gray-200 mb-2
                        group-hover:text-amber-700 dark:text-amber-300 transition-colors">
                            {project.title}
                        </h3>
                    </motion.a>
                ) : <h3 className="text-lg md:text-xl font-extrabold text-gray-800 dark:text-gray-200 mb-2
                        group-hover:text-amber-700 dark:text-amber-300 transition-colors">
                    {project.title}
                </h3>}


                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.desc}</p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4 pb-4 border-b border-amber-500/20">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-[11px] md:text-xs px-2 py-1 bg-amber-500/20
                            text-amber-200 rounded font-semibold"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* BUTTONS */}
                <div className="grid grid-cols-2 md:gap-6 gap-4 mt-auto">

                    {/* GitHub Button */}
                    {project.github && (
                        <motion.a
                            whileHover={{scale: 1.07}}
                            href={project.github}
                            target="_blank"
                            className="flex items-center justify-center gap-2 px-3 py-2 border border-amber-400/40
                            rounded-md text-amber-700 dark:text-amber-300 text-xs font-bold
                            hover:border-amber-300 hover:text-amber-200
                            hover:shadow-amber-400/40 hover:shadow-md
                            transition-all cyberpunk-btn"
                        >
                            <Github className="w-4 h-4"/>
                            GitHub
                        </motion.a>
                    )}

                    {/* Live Demo Button */}
                    {project.live && (
                        <motion.a
                            whileHover={{scale: 1.07}}
                            href={project.live}
                            target="_blank"
                            className="flex items-center justify-center gap-2 px-3 py-2 border border-amber-400/40
                            rounded-md text-amber-700 dark:text-amber-300 text-xs font-bold
                            hover:border-amber-300 hover:text-amber-200
                            hover:shadow-amber-400/40 hover:shadow-md
                            transition-all cyberpunk-btn"
                        >
                            <ExternalLink className="w-4 h-4"/>
                            View Live
                        </motion.a>
                    )}

                </div>
            </div>

        </motion.div>
    );
};

export default ProjectCard;
