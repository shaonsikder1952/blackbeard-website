import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';

const TwitterPost = ({
    text,
    name = "Shaon Sikder",
    handle = "@shaonsikder1971",
    time = "04:12 · 21.07.25",
    views = "69",
    isAfter = false,
    avatar
}: {
    text: string,
    name?: string,
    handle?: string,
    time?: string,
    views?: string,
    isAfter?: boolean,
    avatar?: string
}) => (
    <div className={`flex flex-col w-[320px] h-[320px] sm:w-[340px] sm:h-[340px] bg-white dark:bg-slate-900 rounded-xl overflow-hidden ${isAfter
        ? 'border-[1.5px] border-brand-primary/30'
        : 'border border-slate-200 dark:border-slate-800'
        } shadow-sm transition-all duration-300`}>
        {/* Header */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 dark:border-slate-800">
            <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-bold text-foreground">Post</span>
            <svg className="w-4 h-4 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
            </svg>
        </div>

        {/* Post Content */}
        <div className="p-3 flex-1 flex flex-col">
            {/* Author Row */}
            <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-9 h-9 rounded-full object-cover" />
                    ) : (
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${isAfter ? 'bg-brand-primary text-white' : 'bg-slate-300 text-slate-600'}`}>
                            {name[0]}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-foreground leading-tight">{name}</span>
                        <span className="text-[11px] text-foreground-muted">{handle}</span>
                    </div>
                </div>
                <span className="text-[12px] font-bold text-foreground">𝕏</span>
            </div>

            {/* Tweet Text */}
            <p className={`text-[13px] leading-relaxed mb-3 h-[90px] overflow-hidden ${isAfter ? 'text-foreground' : 'text-foreground-muted'}`}>
                {text}
            </p>

            {/* Timestamp & Views */}
            <div className="text-[11px] text-foreground-muted mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                {time} · <span className="font-bold text-foreground">{views}</span> Views
            </div>

            {/* Action Icons */}
            <div className="flex items-center justify-between text-foreground-muted">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 1l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <path d="M7 23l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
            </div>
        </div>

        {/* Optimized Badge */}
        <div className="mx-3 mb-3 flex items-center justify-between pt-2 border-t border-brand-primary/10 h-[28px]">
            {isAfter ? (
                <>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
                        <span className="text-[9px] font-black text-brand-primary uppercase tracking-widest">Optimized</span>
                    </div>
                    <div className="text-[10px] font-black text-brand-primary">98.4% Match</div>
                </>
            ) : (
                <div className="opacity-0">Placeholder</div>
            )}
        </div>
    </div>
);

const BeforeAfter = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(50);
    const xSpring = useSpring(x, { stiffness: 400, damping: 40 });
    const leftWidth = useTransform(xSpring, (v) => `${v}%`);

    const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const percentage = ((e.clientX - rect.left) / rect.width) * 100;
        x.set(Math.min(100, Math.max(0, percentage)));
    };

    const handleTouchMove = (e: React.TouchEvent | TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const percentage = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        x.set(Math.min(100, Math.max(0, percentage)));
    }

    return (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-10 sm:mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.15em]">Real Results</span>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mt-1">
                        Generic AI vs. <span className="text-brand-primary">Blackbeard</span>
                    </h2>
                    <p className="text-sm text-foreground-muted mt-2 max-w-lg mx-auto">
                        See the difference. Drag the slider to compare.
                    </p>
                </motion.div>

                {/* Centered Before/After Comparison */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-6"
                >
                        <div
                            ref={containerRef}
                            className="relative w-[320px] h-[320px] sm:w-[340px] sm:h-[340px] cursor-ew-resize select-none overflow-visible"
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                        >
                            {/* RIGHT SIDE (AFTER) */}
                            <div className="absolute inset-0">
                                <TwitterPost
                                    isAfter={true}
                                    avatar={profilePhoto}
                                    text="Life tests us constantly. The Stoics teach: control your judgments and actions; externals are indifferent. Epictetus reminds us impressions deceive, examine them rationally. Virtue alone brings tranquility."
                                />
                            </div>

                            {/* LEFT SIDE (BEFORE) */}
                            <motion.div
                                className="absolute left-0 top-0 bottom-0 overflow-hidden z-10 border-r-2 border-brand-primary/40"
                                style={{ width: leftWidth }}
                            >
                                <div className="absolute left-0 top-0 w-[320px] h-[320px] sm:w-[340px] sm:h-[340px]">
                                    <TwitterPost
                                        avatar={profilePhoto}
                                        text={`life — hard sometimes," stoics say, delve into what you can control — like your thoughts and actions, dont worry about externals, but its crucial to do everyday, epictetus said something about impressions, moreover — focus on virtue, and be happy i guess.`}
                                    />
                                </div>
                            </motion.div>

                            {/* Slider Handle */}
                            <motion.div
                                className="absolute top-0 bottom-0 w-[2px] bg-brand-primary z-20 flex items-center justify-center pointer-events-none"
                                style={{ left: leftWidth }}
                            >
                                <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_16px_rgba(79,70,229,0.4)] -ml-[1px] border-2 border-white dark:border-slate-900">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 8L22 12L18 16" />
                                        <path d="M6 8L2 12L6 16" />
                                    </svg>
                                </div>
                            </motion.div>
                        </div>

                        {/* Labels */}
                        <div className="flex justify-center gap-6">
                            <div className="flex flex-col items-center">
                                <span className="text-base font-bold text-brand-primary">Before</span>
                                <span className="text-[9px] font-semibold text-foreground-muted uppercase tracking-wider">Generic AI</span>
                            </div>
                            <div className="w-px h-6 bg-border" />
                            <div className="flex flex-col items-center">
                                <span className="text-base font-bold text-brand-primary">After</span>
                                <span className="text-[9px] font-semibold text-foreground-muted uppercase tracking-wider">Blackbeard</span>
                            </div>
                        </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BeforeAfter;