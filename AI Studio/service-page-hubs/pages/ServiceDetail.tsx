import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

// Define the data structure for the page content
interface ServiceData {
  title: string;
  heroDescription: string;
  introTitle: string;
  introDescription: string;
  subServices: {
    title: string;
    description: string;
    linkText: string;
    slug: string;
  }[];
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

// Data dictionary populated with the Heart Failure content provided
const serviceDataMap: Record<string, ServiceData> = {
  'heart-failure': {
    title: 'Heart Failure Testing Services',
    heroDescription: 'Comprehensive preclinical validation for mechanical circulatory support devices including LVAD performance characterization, cardiac resynchronization therapy assessment, and hemodynamic testing under GLP compliance.',
    introTitle: 'Complete Heart Failure Testing Services',
    introDescription: 'We provide specialized testing for mechanical circulatory support devices, addressing unique performance, biocompatibility, and durability requirements for each platform.',
    subServices: [
      {
        title: 'Heart Pump Testing',
        description: 'Mechanical circulatory support device validation including pump performance characterization, flow dynamics assessment, and temporary cardiac support system evaluation.',
        linkText: 'Heart Pump Testing',
        slug: 'heart-pump'
      },
      {
        title: 'LVAD Testing',
        description: 'Left ventricular assist device validation with hemocompatibility assessment, pump durability protocols, and anatomical integration studies for bridge-to-transplant and destination therapy applications.',
        linkText: 'LVAD Testing',
        slug: 'lvad'
      }
    ],
    whatWeTest: [
      'Heart failure devices sustain life when cardiac function deteriorates, requiring validation that demonstrates both mechanical performance and therapeutic benefit. LVADs must maintain continuous flow across varying preload and afterload conditions while preventing hemolysis, platelet activation, and thrombotic complications. Cardiac resynchronization therapy devices need precise pacing algorithms that restore ventricular synchrony and improve ejection fraction. Temporary support systems require rapid deployment validation and stable performance during acute decompensation events.',
      'We evaluate pump performance using pressure-volume loop analysis and real-time flow monitoring that captures hemodynamic responses across physiological stress conditions. Our catheterization laboratories feature continuous cardiac output measurement, ventricular pressure monitoring, and echocardiographic imaging that tracks device-heart interactions throughout complete cardiac cycles. Hemocompatibility testing quantifies hemolysis indices, platelet function, and von Willebrand factor degradation using ISO 10993-4 protocols adapted for rotary blood pump assessment.',
      'ISO 10993 biocompatibility standards guide chronic implantation assessment while device-specific protocols address pump durability, electrical performance validation for CRT systems, and anatomical integration for surgical implants. Whether validating next-generation continuous-flow LVADs, percutaneous temporary support devices, or biventricular assist systems, our GLP-compliant testing addresses both PMA pathway requirements and post-market surveillance objectives.'
    ],
    capabilities: [
      {
        title: 'Hemodynamic Performance Assessment',
        description: 'Pressure-volume loop analysis quantifies ventricular function, stroke work, and cardiac output under varying pump speeds. Real-time monitoring captures preload sensitivity, afterload response, and flow pulsatility across physiological conditions.'
      },
      {
        title: 'Pump Performance Characterization',
        description: 'Flow curve validation across pressure ranges evaluates pump efficiency, power consumption, and rotor speed stability. Testing protocols assess continuous-flow dynamics, pulsatile performance, and flow modulation capabilities for physiological adaptation.'
      },
      {
        title: 'Hemocompatibility and Blood Damage Assessment',
        description: 'ISO 10993-4 compliant testing quantifies hemolysis indices, platelet activation markers, and von Willebrand factor degradation. Specialized protocols evaluate shear stress effects, thrombogenic potential, and anticoagulation requirements for chronic blood contact.'
      },
      {
        title: 'Durability and Accelerated Wear Testing',
        description: 'Long-term durability protocols simulate years of continuous operation through accelerated cycling. Performance monitoring detects bearing wear, seal degradation, and rotor dynamics changes while validating backup power systems and alarm functions.'
      },
      {
        title: 'Cardiac Resynchronization Therapy Validation',
        description: 'Biventricular pacing optimization uses echocardiography to assess ventricular synchrony improvement and ejection fraction enhancement. Lead positioning validation, pacing threshold characterization, and sensing algorithm verification address CRT-specific performance requirements.'
      },
      {
        title: 'Anatomical Integration and Biocompatibility',
        description: 'Chronic implantation studies evaluate tissue response at pump-myocardium interfaces, cannula positioning stability, and healing patterns around device components. Histopathological analysis characterizes fibrosis, inflammation, and cellular responses using standardized scoring systems.'
      }
    ],
    whyChoose: [
      {
        title: 'Specialized Pump Testing Infrastructure',
        description: 'Two catheterization laboratories equipped specifically for mechanical circulatory support evaluation feature continuous hemodynamic monitoring, pressure-volume loop analysis systems, and real-time flow measurement capabilities. Our mock circulation loops replicate physiological preload and afterload conditions while specialized test fixtures accommodate both implantable and percutaneous pump configurations across varying anatomical requirements.'
      },
      {
        title: 'Heart Failure Device Expertise',
        description: 'Founded by Duke University interventional cardiologists who pioneered advanced heart failure management techniques, our team understands ventricular mechanics, pump physiology, and hemodynamic optimization specific to mechanical circulatory support. This cardiovascular heritage translates to protocol designs that address FDA Class III device requirements including durability demonstration, hemocompatibility assessment, and the comprehensive safety validation life-sustaining devices demand.'
      },
      {
        title: 'Proven PMA Pathway Success',
        description: 'Our data packages have supported successful FDA approvals for mechanical circulatory support devices across LVAD, BiVAD, and temporary support categories. We understand Class III device requirements including chronic biocompatibility demonstration through ISO 10993 compliance, pump durability validation, and the specific endpoints FDA expects for heart failure device submissions addressing both bridge-to-transplant and destination therapy applications.'
      }
    ]
  }
};

// Fallback data for other services to demonstrate the template
const generateFallbackData = (title: string): ServiceData => ({
  title: title,
  heroDescription: `Comprehensive preclinical validation for ${title.toLowerCase()} devices featuring advanced testing protocols, GLP compliance, and specialized anatomical models.`,
  introTitle: `Complete ${title} Services`,
  introDescription: `We provide specialized testing for ${title.toLowerCase()} devices, addressing unique performance, biocompatibility, and durability requirements for each platform.`,
  subServices: [
    {
      title: 'Device Performance Testing',
      description: 'Validation of device functionality under physiological conditions, ensuring optimal performance and safety standards are met.',
      linkText: 'Performance Testing',
      slug: 'performance'
    },
    {
      title: 'Biocompatibility Assessment',
      description: 'Comprehensive evaluation of tissue response and hemocompatibility markers according to ISO 10993 standards.',
      linkText: 'Biocompatibility Testing',
      slug: 'biocompatibility'
    }
  ],
  whatWeTest: [
    `Our ${title.toLowerCase()} program is designed to rigorously evaluate safety and efficacy. We utilize state-of-the-art imaging and monitoring equipment to capture high-fidelity data throughout the study duration. Protocols are customized to address specific regulatory requirements and device characteristics.`,
    'We employ a multidisciplinary approach combining interventional cardiology expertise with veterinary pathology and biomedical engineering. This ensures that every aspect of the device interaction with the biological environment is thoroughly understood and documented.',
    'From acute feasibility studies to chronic GLP safety submissions, our facility is equipped to handle the entire preclinical lifecycle. We maintain strict quality control standards to produce data packages that stand up to regulatory scrutiny worldwide.'
  ],
  capabilities: [
    {
      title: 'Acute Performance Evaluation',
      description: 'Real-time assessment of device deployment, functionality, and immediate physiological impact using advanced imaging modalities.'
    },
    {
      title: 'Chronic Safety Studies',
      description: 'Long-term evaluation of device stability, tissue integration, and healing response over extended timepoints.'
    },
    {
      title: 'Pathology & Histology',
      description: 'Detailed microscopic analysis of tissue response, including inflammation scoring, endothelialization, and fibrosis assessment.'
    },
    {
      title: 'Imaging & Diagnostics',
      description: 'Utilization of QCA, IVUS, OCT, and echocardiography to provide quantitative endpoints for device performance.'
    }
  ],
  whyChoose: [
    {
      title: 'Specialized Infrastructure',
      description: 'Our facility features dedicated catheterization labs and surgical suites designed specifically for complex cardiovascular interventions.'
    },
    {
      title: 'Expert Team',
      description: 'Board-certified specialists oversee study design and execution, ensuring clinical relevance and scientific rigor.'
    },
    {
      title: 'Regulatory Experience',
      description: 'Decades of experience navigating FDA and international regulatory pathways for Class II and Class III medical devices.'
    }
  ]
});

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Get specific data or generate fallback based on the ID
  let data = serviceId && serviceDataMap[serviceId] 
    ? serviceDataMap[serviceId] 
    : null;

  if (!data && serviceId) {
    // Generate a title from the slug (e.g., 'heart-valve' -> 'Heart Valve Testing')
    const generatedTitle = serviceId
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ') + ' Testing';
    data = generateFallbackData(generatedTitle);
  } else if (!data) {
     data = generateFallbackData('Cardiovascular Service');
  }

  return (
    <div className="w-full bg-white dark:bg-slate-950 font-sans">
      
      {/* 1. Hero Section - Simple and clean as per the reference */}
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
            <span className="text-[#1a365d] dark:text-white">{data.title}</span>
          </div>
        </div>
      </section>

      {/* 3. Intro & Sub-service Cards */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a365d] dark:text-white mb-4">
              {data.introTitle}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {data.introDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.subServices.map((service, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] border border-slate-100 dark:border-slate-800 flex flex-col h-full">
                <h3 className="text-xl font-bold text-[#1a365d] dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <Link 
                  to={`/services/cardiovascular/${serviceId}/${service.slug}`} 
                  className="inline-flex items-center text-sm font-bold text-[#38b2ac] hover:text-[#2c7a7b] transition-colors mt-auto uppercase tracking-wide"
                >
                   <ArrowRight size={16} className="mr-2" /> {service.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Test Section */}
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

      {/* 5. Key Testing Capabilities */}
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

      {/* 6. Why Choose Synchrony - Styled like the reference */}
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

      {/* 7. CTA Section */}
      <section className="py-24 bg-[#f0f5fa] dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] dark:text-white mb-6">
            Ready to Start Your Study?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our team is ready to discuss your heart failure device, regulatory pathway, and study requirements to optimize your path to FDA approval.
          </p>
          <button className="bg-[#3182ce] hover:bg-[#2c5282] text-white font-bold py-4 px-10 rounded shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide text-sm">
             Schedule Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;