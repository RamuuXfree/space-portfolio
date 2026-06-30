import { motion } from 'framer-motion';

type Variant = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact';

const configs: Record<Variant, Array<{x:string;y:string;color:string;size:number;opacity:number;dur:number}>> = {
  hero: [
    { x:'15%', y:'25%', color:'rgba(6,182,212,0.18)',   size:700, opacity:1, dur:8 },
    { x:'80%', y:'20%', color:'rgba(139,92,246,0.14)',  size:550, opacity:1, dur:11 },
    { x:'50%', y:'70%', color:'rgba(59,130,246,0.1)',   size:650, opacity:1, dur:13 },
    { x:'5%',  y:'80%', color:'rgba(168,85,247,0.08)',  size:400, opacity:1, dur:9  },
  ],
  about: [
    { x:'85%', y:'15%', color:'rgba(6,182,212,0.14)',   size:500, opacity:1, dur:9  },
    { x:'10%', y:'55%', color:'rgba(139,92,246,0.16)',  size:600, opacity:1, dur:11 },
    { x:'50%', y:'40%', color:'rgba(34,211,238,0.08)',  size:400, opacity:1, dur:13 },
  ],
  skills: [
    { x:'25%', y:'45%', color:'rgba(59,130,246,0.13)',  size:700, opacity:1, dur:10 },
    { x:'75%', y:'25%', color:'rgba(6,182,212,0.1)',    size:500, opacity:1, dur:8  },
    { x:'55%', y:'75%', color:'rgba(139,92,246,0.08)', size:450, opacity:1, dur:12 },
  ],
  projects: [
    { x:'15%', y:'35%', color:'rgba(168,85,247,0.13)', size:600, opacity:1, dur:11 },
    { x:'80%', y:'60%', color:'rgba(6,182,212,0.1)',   size:500, opacity:1, dur:9  },
    { x:'50%', y:'15%', color:'rgba(139,92,246,0.08)', size:400, opacity:1, dur:13 },
  ],
  experience: [
    { x:'65%', y:'25%', color:'rgba(59,130,246,0.1)',  size:500, opacity:1, dur:10 },
    { x:'15%', y:'65%', color:'rgba(168,85,247,0.13)', size:600, opacity:1, dur:12 },
  ],
  contact: [
    { x:'50%', y:'50%', color:'rgba(6,182,212,0.13)',  size:700, opacity:1, dur:10 },
    { x:'15%', y:'25%', color:'rgba(139,92,246,0.1)',  size:500, opacity:1, dur:8  },
    { x:'80%', y:'75%', color:'rgba(168,85,247,0.08)', size:400, opacity:1, dur:12 },
  ],
};

export default function NebulaBackground({ variant = 'hero' }: { variant?: Variant }) {
  const blobs = configs[variant] ?? configs.hero;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: b.x, top: b.y,
            width: b.size, height: b.size,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            filter: 'blur(45px)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{ scale: [1, 1.12, 0.94, 1], opacity: [0.7, 1, 0.75, 0.7] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        />
      ))}
    </div>
  );
}
