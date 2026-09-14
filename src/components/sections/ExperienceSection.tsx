import { motion } from 'framer-motion';
import { Briefcase, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { SiAccenture } from 'react-icons/si';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  locationType: string;
  employmentType: string;
  period: string;
  isCurrent: boolean;
  highlights: string[];
  skills: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'accenture-ase',
    role: 'Associate Software Engineer',
    company: 'Accenture',
    location: 'Chennai, Tamil Nadu, India',
    locationType: 'Hybrid',
    employmentType: 'Full-time',
    period: 'Present',
    isCurrent: true,
    highlights: [
      'Engineered enterprise CRM solutions specializing in the Salesforce (SFDC) ecosystem, driving custom application development, Apex/LWC business logic, and automated testing.',
      'Designed and customized scalable cloud architectures to elevate system reliability, streamline business workflows, and enhance maintenance efficiency.',
      'Enforced rigorous quality assurance and security protocols across deployment pipelines to ensure high platform uptime and performance.'
    ],
    skills: ['Salesforce (SFDC)', 'CRM Solutions', 'Cloud Technologies', 'App Development', 'Customization & Testing']
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="space-y-10 scroll-mt-24">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--border-subtle)' }}>
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em]" style={{ color: 'var(--accent-cyan)' }}>
            <Briefcase size={12} />
            <span>02 / CAREER PATH</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl mt-1" style={{ color: 'var(--text-primary)' }}>
            Experience
          </h2>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 text-xs font-mono rounded-full" style={{ background: 'rgba(var(--accent-color) / 0.1)', border: '1px solid var(--border-soft)', color: 'var(--accent-green)' }}>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Active Full-Time Engineer</span>
        </div>
      </div>

      <div className="relative pl-4 sm:pl-6 space-y-8 border-l-2" style={{ borderColor: 'var(--border-subtle)' }}>
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot Indicator */}
            <div 
              className="absolute -left-[25px] sm:-left-[33px] top-1.5 h-4 w-4 rounded-full border-2 flex items-center justify-center bg-black transition-all group-hover:scale-125"
              style={{ borderColor: 'var(--accent)', boxShadow: '0 0 10px rgba(var(--accent-color) / 0.4)' }}
            >
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            </div>

            {/* Experience Card Container */}
            <div 
              className="p-6 sm:p-8 rounded-3xl border transition-all duration-300 backdrop-blur-md hover:-translate-y-1"
              style={{ 
                background: 'var(--card-bg)', 
                borderColor: 'var(--border-soft)',
                boxShadow: '0 12px 30px rgba(0,0,0,0.2)'
              }}
            >
              {/* Header Info */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold font-display" style={{ color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                        <Sparkles size={10} />
                        Current Role
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-semibold flex items-center gap-2" style={{ color: 'var(--accent-cyan)' }}>
                    <span>{exp.company}</span>
                    <span className="text-xs font-mono opacity-60 text-current">• {exp.employmentType} ({exp.locationType})</span>
                  </div>
                </div>

                {/* Theme-Adaptive Transparent Accenture Logo on Top-Right */}
                <div className="flex items-center gap-2 font-bold text-xl sm:text-2xl tracking-tight px-3.5 py-1.5 rounded-2xl border transition-colors flex-shrink-0" style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'var(--border-subtle)', color: 'var(--text-primary)' }}>
                  <SiAccenture size={26} className="text-[#A100FF] flex-shrink-0" />
                  <span className="font-bold tracking-tighter" style={{ color: 'var(--text-primary)' }}>accenture</span>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-1.5 text-xs font-mono mt-3" style={{ color: 'var(--text-muted)' }}>
                <MapPin size={13} style={{ color: 'var(--accent-cyan)' }} />
                <span>{exp.location}</span>
              </div>

              {/* Bullet Highlights */}
              <div className="mt-5 space-y-2.5">
                {exp.highlights.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-emerald-400 opacity-80" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t" style={{ borderColor: 'var(--border-subtle)' }}>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-lg transition-colors"
                    style={{ 
                      background: 'rgba(var(--accent-color) / 0.08)', 
                      border: '1px solid rgba(var(--accent-color) / 0.2)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;

