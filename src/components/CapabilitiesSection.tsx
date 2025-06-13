
import { Cog, Zap, Users, Globe } from 'lucide-react';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: Cog,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art CNC machines and precision tooling for complex geometries',
      features: ['CNC Turning & Milling', 'Multi-axis Machining', 'Precision Threading', 'Surface Treatments']
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quick turnaround times for prototypes and small batch production',
      features: ['Fast Prototyping', 'Design Validation', 'Material Testing', 'Process Optimization']
    },
    {
      icon: Users,
      title: 'Custom Solutions',
      description: 'Tailored brass components designed to meet specific customer requirements',
      features: ['Custom Design', 'Engineering Support', 'Material Selection', 'Cost Optimization']
    },
    {
      icon: Globe,
      title: 'Global Supply',
      description: 'Worldwide shipping and logistics support for international customers',
      features: ['International Shipping', 'Logistics Support', 'Documentation', 'After-sales Service']
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Capabilities</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Advanced manufacturing capabilities combined with experienced engineering 
            to deliver exceptional brass components for any application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-brass rounded-lg flex items-center justify-center flex-shrink-0">
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">{capability.title}</h3>
                  <p className="text-slate-600 mb-4">{capability.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-700">
                        <div className="w-2 h-2 bg-brass-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Process */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-center mb-12">Manufacturing Process</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Design', desc: 'CAD modeling and engineering review' },
              { step: '02', title: 'Material', desc: 'Premium brass alloy selection' },
              { step: '03', title: 'Machining', desc: 'Precision CNC manufacturing' },
              { step: '04', title: 'Quality', desc: 'Comprehensive testing and inspection' },
              { step: '05', title: 'Delivery', desc: 'Packaging and worldwide shipping' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-brass rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-lg font-bold mb-2">{process.title}</h4>
                <p className="text-sm text-slate-300">{process.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-brass-500/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
