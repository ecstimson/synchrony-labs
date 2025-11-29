import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check } from 'lucide-react';

// Reusing types but without subServices
interface SubServiceData {
  title: string;
  heroDescription: string;
  whatWeTest: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  whyChoose: {
    title: string;
    description: string;
  }[];
}

// Function to generate data for the sub-service page
// In a real app, this might come from a CMS or specific data files
const generateSubServiceData = (title: string, parentServiceTitle: string): SubServiceData => ({
  title: title,
  heroDescription: `Specialized ${title.toLowerCase()} validation protocols focused on hemodynamic performance, durability assessment, and biocompatibility under rigorous GLP standards.`,
  whatWeTest: [
    `Our ${title.toLowerCase()} protocols are designed to address the specific failure modes and regulatory requirements of this device class. We validate performance across a range of physiological conditions, ensuring that the device functions safely and effectively under both normal and stress scenarios.`,
    'We utilize advanced instrumentation to capture high-fidelity data on flow dynamics, pressure gradients, and tissue interaction. This includes acute performance evaluation using highly instrumented models and chronic safety studies to assess long-term biological response.',
    `Whether targeting a 510(k) or PMA pathway, our testing strategy is aligned with current FDA guidance and ISO standards. We focus on generating the robust dataset needed to demonstrate safety and substantial equivalence or reasonable assurance of safety and effectiveness.`
  ],
  capabilities: [
    {
      title: 'Hemodynamic Assessment',
      description: 'Comprehensive evaluation of pressure-flow relationships, resistance, and cardiac output impact using clinical-grade monitoring systems.'
    },
    {
      title: 'Anatomical Fit & Deployment',
      description: 'Validation of delivery system navigation and device deployment accuracy within relevant anatomical models, including diseased states.'
    },
    {
      title: 'Durability & Reliability',
      description: 'Accelerated and real-time wear testing to identify potential mechanical failure modes and estimate device longevity.'
    },
    {
      title: 'Biocompatibility & Thrombogenicity',
      description: 'Assessment of hemocompatibility, including hemolysis and thrombus formation, using standard ISO 10993-4 test methods.'
    }
  ],
  whyChoose: [
    {
      title: 'Specific Domain Expertise',
      description: `Our team has deep experience specifically with ${title.toLowerCase()}, understanding the nuances of device-tissue interaction and performance metrics critical for success.`
    },
    {
      title: 'Advanced Imaging Suite',
      description: 'Access to dual cath labs with QCA, IVUS, OCT, and echocardiography ensures every aspect of device performance is visualized and quantified.'
    },
    {
      title: 'Regulatory Alignment',
      description: 'We stay current with evolving regulatory expectations for this specific device category, ensuring your study design meets reviewer requirements.'
    }
  ]
});

const SubServiceDetail: React.FC = () => {
  const { serviceId, subServiceId } = useParams<{ serviceId: string; subServiceId: string }>();
  
  // Create titles from slugs
  const parentTitle = serviceId
    ? serviceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' Testing'
    : 'Cardiovascular Service';

  const subServiceTitle = subServiceId
    ? subServiceId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') + ' Testing'
    : 'Service Detail';

  // Generate data
  const data = generateSubServiceData(subServiceTitle, parentTitle);

  return (
    <div className="w-full bg-white dark:bg-slate-950 font-sans">
      
      {/* 1. Hero Section */}
      <section className="bg-[#f0f5fa] dark:bg-slate-900 pt-24 pb-16 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1a365d] dark:text-white mb-6 tracking-tight">
            {data.title}
          </h1>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {data.heroDescription}
          </p>
        </div>
      </section>

      {/* 2. Breadcrumbs */}
      <section className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide overflow-x-auto whitespace-nowrap no-scrollbar">
            <Link to="/" className="hover:text-[#1a365d] dark:hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-slate-300 dark:text-slate-600">&gt;</span>
            <span className="hover:text-[#1a365d] dark:hover:text-white cursor-pointer transition-colors">Preclinical Services</span>
            <span className="mx-2 text-slate-300 dark:text-slate-600">&gt;</span>
            <Link to="/services/cardiovascular" className="hover:text-[#1a365d] dark:hover:text-white transition-colors">Cardiovascular Disease Testing</Link>
            <span className="mx-2 text-slate-300 dark:text-slate-600">&gt;</span>
            <Link to={`/services/cardiovascular/${serviceId}`} className="hover:text-[#1a365d] dark:hover:text-white transition-colors">{parentTitle}</Link>
            <span className="mx-2 text-slate-300 dark:text-slate-600">&gt;</span>
            <span className="text-[#1a365d] dark:text-white">{data.title}</span>
          </div>
        </div>
      </section>

      {/* 3. What We Test Section (Immediately follows breadcrumbs, no cards) */}
      <section className="py-20 bg-[#f8fafc] dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] dark:text-white">What We Test</h2>
          </div>
          <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
            {data.whatWeTest.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Testing Capabilities */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] dark:text-white mb-2">Key Testing Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {data.capabilities.map((cap, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="text-[#38b2ac] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#1a365d] dark:text-slate-200 mb-1">{cap.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
                 <div className="aspect-[4/3] w-full bg-slate-100 dark:bg-slate-900 rounded-lg overflow-hidden sticky top-24 shadow-md">
                    <img 
                        src={`https://placehold.co/800x600/e2e8f0/475569?text=${encodeURIComponent(data.title)}+Capabilities`} 
                        alt="Key Testing Capabilities" 
                        className="w-full h-full object-cover"
                    />
                 </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Synchrony */}
      <section className="py-20 bg-white dark:bg-slate-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] dark:text-white">
                Why Choose Synchrony for {data.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-3xl mx-auto text-sm">
                Four decades of exclusive cardiovascular focus provides specialized infrastructure and proven regulatory expertise for life-sustaining cardiac devices that generic facilities cannot match.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.whyChoose.map((item, index) => (
                <div key={index} className="p-8 border border-slate-200 dark:border-slate-800 rounded-lg shadow-sm bg-white dark:bg-slate-900 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-[#1a365d] dark:text-slate-200 mb-4">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* 6. CTA Section */}
      <section className="py-24 bg-[#f0f5fa] dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] dark:text-white mb-6">
            Ready to Start Your Study?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our team is ready to discuss your device, regulatory pathway, and study requirements to optimize your path to FDA approval.
          </p>
          <button className="bg-[#3182ce] hover:bg-[#2c5282] text-white font-bold py-4 px-10 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide text-sm">
             Schedule Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

export default SubServiceDetail;