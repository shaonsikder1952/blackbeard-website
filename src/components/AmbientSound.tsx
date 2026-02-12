import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const AmbientSound = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [ripples, setRipples] = useState<number[]>([]);

    useEffect(() => {
        const audio = new Audio("/copy_C920D647-22F3-4DDC-B217-90DB2992DFE3%20(1).mp3");
        audio.loop = true;
        audio.volume = 0.5;

        // Add event listeners to ensure continuous playback
        audio.addEventListener('ended', () => {
            console.log('Audio ended, restarting...');
            audio.currentTime = 0;
            audio.play().catch(e => console.error("Restart failed:", e));
        });

        audio.addEventListener('error', (e) => {
            console.error('Audio error:', e);
        });

        audioRef.current = audio;

        return () => {
            audio.pause();
            audioRef.current = null;
        };
    }, []);

    // Listen for video play events and pause ambient sound
    useEffect(() => {
        const handleVideoPlay = () => {
            if (audioRef.current && isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        };

        window.addEventListener('videoPlaying', handleVideoPlay);

        return () => {
            window.removeEventListener('videoPlaying', handleVideoPlay);
        };
    }, [isPlaying]);

    const toggleSound = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.error("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);

        // Trigger ripple effect
        const newRipple = Date.now();
        setRipples(prev => [...prev, newRipple]);
        setTimeout(() => {
            setRipples(prev => prev.filter(r => r !== newRipple));
        }, 4500);
    };

    return (
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
            <div className="relative group">
                {/* Floating animation container */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative"
                >
                    {/* Realistic water ripples - pure cyan/blue like real water */}
                    <AnimatePresence>
                        {ripples.map(ripple => (
                            <div key={ripple}>
                                {/* First ripple - bright cyan */}
                                <motion.div
                                    initial={{ scale: 0.85, opacity: 1 }}
                                    animate={{ scale: 7, opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        scale: {
                                            duration: 3,
                                            ease: [0.16, 1, 0.3, 1]
                                        },
                                        opacity: {
                                            duration: 3,
                                            ease: [0.16, 1, 0.3, 1]
                                        }
                                    }}
                                    className="absolute inset-0 rounded-full border-[2.5px] border-cyan-400/80 pointer-events-none"
                                    style={{
                                        filter: 'blur(0.5px)',
                                        boxShadow: '0 0 15px rgba(34, 211, 238, 0.5), inset 0 0 10px rgba(34, 211, 238, 0.15)'
                                    }}
                                />
                                {/* Second ripple - medium blue */}
                                <motion.div
                                    initial={{ scale: 0.85, opacity: 0.75 }}
                                    animate={{ scale: 8, opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        scale: {
                                            duration: 3.5,
                                            ease: [0.16, 1, 0.3, 1]
                                        },
                                        opacity: {
                                            duration: 3.5,
                                            ease: [0.16, 1, 0.3, 1]
                                        },
                                        delay: 0.15
                                    }}
                                    className="absolute inset-0 rounded-full border-2 border-blue-400/60 pointer-events-none"
                                    style={{
                                        filter: 'blur(1px)',
                                        boxShadow: '0 0 12px rgba(59, 130, 246, 0.4)'
                                    }}
                                />
                                {/* Third ripple - light blue */}
                                <motion.div
                                    initial={{ scale: 0.85, opacity: 0.5 }}
                                    animate={{ scale: 9, opacity: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        scale: {
                                            duration: 4,
                                            ease: [0.16, 1, 0.3, 1]
                                        },
                                        opacity: {
                                            duration: 4,
                                            ease: [0.16, 1, 0.3, 1]
                                        },
                                        delay: 0.3
                                    }}
                                    className="absolute inset-0 rounded-full border-[1.5px] border-blue-300/40 pointer-events-none"
                                    style={{
                                        filter: 'blur(1.5px)',
                                        boxShadow: '0 0 8px rgba(147, 197, 253, 0.25)'
                                    }}
                                />
                            </div>
                        ))}
                    </AnimatePresence>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={toggleSound}
                        className="rounded-full w-14 h-14 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-0 hover:bg-white/15 active:bg-white/10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)] transition-all duration-300 active:scale-90 relative overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {isPlaying ? (
                                <motion.div
                                    key="playing"
                                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        rotate: 0,
                                    }}
                                    exit={{ scale: 0, opacity: 0, rotate: 180 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative z-10"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <Volume2 className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                    </motion.div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="muted"
                                    initial={{ scale: 0, opacity: 0, rotate: 180 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    exit={{ scale: 0, opacity: 0, rotate: -180 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className="relative z-10"
                                >
                                    <VolumeX className="h-6 w-6 text-white/70 drop-shadow-md" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>


                </motion.div>

                {/* Fun Tooltip with emoji */}
                <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-blue-500/90 to-purple-500/90 backdrop-blur-md text-white text-sm font-bold rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg"
                >
                    {isPlaying ? "🔊 Vibing!" : "🎵 Click me!"}
                    <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-purple-500/90 transform -translate-y-1/2 rotate-45" />
                </motion.div>
            </div>
        </div>
    );
};

export default AmbientSound;
