import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';

const WindowFrame = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="flex flex-col w-full h-full bg-[#f3f6f8] dark:bg-slate-900 rounded-xl overflow-hidden border border-border shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 border-b border-border">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="flex-1 text-center">
                <span className="text-[11px] font-medium text-foreground-muted/60 uppercase tracking-widest">{title}</span>
            </div>
        </div>
        <div className="flex-1 relative overflow-hidden bg-white dark:bg-slate-950">
            {children}
        </div>
    </div>
);

const RewriteButton = ({ className }: { className?: string }) => (
    <motion.div
        className={`absolute -top-10 -right-4 z-50 cursor-pointer pointer-events-auto ${className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <div className="relative">
            {/* Soft glow/shadow behind */}
            <div className="absolute inset-[-4px] bg-brand-primary/10 blur-xl rounded-full opacity-60 flex items-center justify-center">
                <div className="w-full h-full bg-brand-primary/20 animate-pulse rounded-full" />
            </div>

            {/* The circular button matching the photo */}
            <div className="relative w-16 h-16 bg-white dark:bg-slate-900 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.18)] flex items-center justify-center border border-slate-200 dark:border-slate-800">
                <div className="text-brand-primary">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.5 2.50001C18.8978 2.10218 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10218 21.5 2.50001C21.8978 2.89783 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10218 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Small indicator label */}
                <motion.div
                    className="absolute -bottom-1 -right-2 bg-brand-primary text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    REWRITE
                </motion.div>
            </div>
        </div>
    </motion.div>
);

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
    <div className={`flex flex-col w-full max-w-[380px] bg-white dark:bg-slate-900 rounded-2xl overflow-hidden ${isAfter
        ? 'border-[1.5px] border-brand-primary/30'
        : 'border border-slate-200 dark:border-slate-800'
        } shadow-sm transition-all duration-300`}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800">
            <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span className="text-base font-bold text-foreground">Post</span>
            <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
            </svg>
        </div>

        {/* Post Content */}
        <div className="p-4">
            {/* Author Row */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                    {avatar ? (
                        <img src={avatar} alt={name} className="w-11 h-11 rounded-full object-cover" />
                    ) : (
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold shadow-sm ${isAfter ? 'bg-brand-primary text-white' : 'bg-slate-300 text-slate-600'}`}>
                            {name[0]}
                        </div>
                    )}
                    <div className="flex flex-col">
                        <span className="text-[15px] font-bold text-foreground leading-tight">{name}</span>
                        <span className="text-[13px] text-foreground-muted">{handle}</span>
                    </div>
                </div>
                {/* X logo */}
                <span className="text-[15px] font-bold text-foreground">𝕏.com</span>
            </div>

            {/* Tweet Text */}
            <p className={`text-[15px] leading-relaxed mb-4 ${isAfter ? 'text-foreground' : 'text-foreground-muted'}`}>
                {text}
            </p>

            {/* Timestamp & Views */}
            <div className="text-[13px] text-foreground-muted mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                {time} · <span className="font-bold text-foreground">{views}</span> Views
            </div>

            {/* Action Icons */}
            <div className="flex items-center justify-between text-foreground-muted">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 1l4 4-4 4" />
                    <path d="M3 11V9a4 4 0 0 1 4-4h14" />
                    <path d="M7 23l-4-4 4-4" />
                    <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
            </div>
        </div>

        {/* Optimized Badge for After */}
        {isAfter && (
            <div className="mx-4 mb-4 flex items-center justify-between pt-3 border-t border-brand-primary/10">
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                    <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Optimized</span>
                </div>
                <div className="text-[12px] font-black text-brand-primary tracking-tighter">98.4% Match</div>
            </div>
        )}
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
        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-background/50">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* LEFT SIDE: VIDEO USE CASE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="flex flex-col gap-3">
                            <span className="text-brand-primary text-xs font-black uppercase tracking-[0.2em]">Real-world usage</span>
                            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-[1.1]">
                                Works where <br />
                                <span className="text-brand-primary italic">you</span> actually work.
                            </h2>
                            <p className="text-foreground-muted text-lg leading-relaxed max-w-lg mt-2">
                                Blackbeard lives in your browser, and is with you for every single LinkedIn post, comment, and DM. No more context switching.
                            </p>
                        </div>

                        <div className="relative group overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] bg-black/5">
                            <video
                                src="/use-case.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto object-contain block"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: COMPUTER FRAME COMPARISON */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-6 relative"
                    >
                        <WindowFrame title="linkedin.com / messaging">
                            <div
                                ref={containerRef}
                                className="relative w-full h-[480px] cursor-ew-resize select-none overflow-hidden bg-[#f3f6f8] dark:bg-slate-950"
                                onMouseMove={handleMouseMove}
                                onTouchMove={handleTouchMove}
                            >
                                {/* RIGHT SIDE (AFTER) */}
                                <div className="absolute inset-0 flex items-start justify-center pt-8 bg-[#f3f6f8] dark:bg-slate-900">
                                    <TwitterPost
                                        isAfter={true}
                                        avatar={profilePhoto}
                                        text="Life tests us constantly. The Stoics teach: control your judgments and actions; externals are indifferent. Epictetus reminds us impressions deceive, examine them rationally. Virtue alone brings tranquility."
                                    />
                                </div>

                                {/* LEFT SIDE (BEFORE) */}
                                <motion.div
                                    className="absolute left-0 top-0 bottom-0 overflow-hidden z-10 bg-white dark:bg-slate-950 border-r-2 border-brand-primary/40 shadow-[10px_0_30px_rgba(0,0,0,0.05)]"
                                    style={{ width: leftWidth }}
                                >
                                    <div className="absolute inset-0 w-[550px] flex items-start justify-center pt-8 bg-white dark:bg-slate-950">
                                        <TwitterPost
                                            avatar={profilePhoto}
                                            text="life hard sometimes, stoics say control what you can, like your thoughts and actions, dont worry about externals, but its hard to do everyday, epictetus said something about impressions, anyway focus on virtue, and be happy i guess."
                                        />
                                    </div>
                                </motion.div>

                                {/* Handle / Slider Line */}
                                <motion.div
                                    className="absolute top-0 bottom-0 w-[2px] bg-brand-primary z-20 flex items-center justify-center pointer-events-none"
                                    style={{ left: leftWidth }}
                                >
                                    <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)] -ml-[1px] border-2 border-white dark:border-slate-900">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 8L22 12L18 16" />
                                            <path d="M6 8L2 12L6 16" />
                                        </svg>
                                    </div>
                                </motion.div>

                                {/* The Rewrite Button matching the photo */}
                                <RewriteButton />
                            </div>
                        </WindowFrame>

                        <div className="flex justify-center gap-8 mt-2">
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-black text-brand-primary">Before</span>
                                <span className="text-[10px] font-bold text-foreground-muted uppercase tracking-[0.2em]">Generic AI</span>
                            </div>
                            <div className="w-px h-8 bg-border" />
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-black text-brand-primary">After</span>
                                <span className="text-[10px] font-bold text-foreground-muted uppercase tracking-[0.2em]">Blackbeard</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
