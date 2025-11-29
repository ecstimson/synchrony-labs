import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Pill, Bot, ArrowRight, MousePointer2 } from 'lucide-react';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-bg-light dark:grid-bg-dark">
        {/* Abstract Background EKG Line */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20 dark:opacity-10">
            <svg viewBox="0 0 1200 200" className="w-full h-auto stroke-sky-700 dark:stroke-sky-400 fill-none" strokeWidth="2">
                <path d="M0,100 L300,100 L320,50 L340,150 L360,100 L400,100 L420,20 L450,180 L480,100 L1200,100" vectorEffect="non-scaling-stroke" />
            </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Specialized Cardiovascular <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-sky-400 dark:from-sky-400 dark:to-sky-200">
              Preclinical Research
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Four decades of GLP expertise advancing structural heart, neurovascular, and peripheral vascular innovation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
             {/* Using a custom style for the primary button to match the screenshot's specific blue-grey look */}
            <Link to="/services/cardiovascular">
                <button className="px-8 py-3.5 rounded-md bg-sky-600/90 hover:bg-sky-600 text-white font-medium shadow-xl shadow-sky-900/10 transition-all transform hover:-translate-y-0.5 backdrop-blur-sm border border-white/10">
                Schedule Consultation
                </button>
            </Link>
            <Link to="/services/cardiovascular">
                <button className="px-8 py-3.5 rounded-md bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 text-slate-900 dark:text-white font-medium border border-slate-200 dark:border-slate-700 backdrop-blur-sm transition-all">
                Explore Capabilities
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Core Study Areas */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle glow effect behind */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-sky-900/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Study Areas</h2>
            <p className="text-slate-400">Decades of expertise across the full spectrum of medical device innovation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link to="/services/cardiovascular" className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-900/20">
              <div className="absolute inset-0 bg-gradient-to-b from-slate-800/0 to-slate-800/0 group-hover:to-sky-900/10 rounded-2xl transition-all duration-300"></div>
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700 group-hover:border-sky-500/30 group-hover:text-sky-400 transition-colors">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Cardiovascular Devices</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                From TAVR valves and structural heart interventions to peripheral stents and novel combination therapies. Our GLP-compliant protocols are designed to accelerate your path.
              </p>
              <div className="flex items-center text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                Cardiovascular Testing <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </Link>

            {/* Card 2 */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-900/20 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700 group-hover:border-sky-500/30 group-hover:text-sky-400 transition-colors">
                <Pill size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Drug-Device Combinations</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Specialized evaluation of drug-coated balloons, drug-eluting stents, and novel combination therapies. Pharmacokinetic analysis and tissue distribution studies.
              </p>
              <div className="flex items-center text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                Drug-Device Testing <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-900/20 cursor-pointer">
              <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 border border-slate-700 group-hover:border-sky-500/30 group-hover:text-sky-400 transition-colors">
                <Bot size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Surgical Robotics</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Advanced testing capabilities for robotic surgical systems, endoscopic devices, and next-generation surgical technologies. Replicating real clinical settings.
              </p>
              <div className="flex items-center text-sm font-semibold text-white group-hover:text-sky-400 transition-colors">
                Surgical Device Testing <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <Link to="/services/cardiovascular" className="inline-block text-sm text-slate-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-0.5">View All Study Types</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;