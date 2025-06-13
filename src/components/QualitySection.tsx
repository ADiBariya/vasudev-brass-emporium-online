
import { Shield, Award, CheckCircle, Settings } from 'lucide-react';

const QualitySection = () => {
  const qualityFeatures = [
    {
      icon: Shield,
      title: 'ISO 9001:2015 Certified',
      description: 'Internationally recognized quality management system ensuring consistent product quality.'
    },
    {
      icon: Award,
      title: 'Premium Materials',
      description: 'We use only the finest quality brass alloys sourced from trusted suppliers worldwide.'
    },
    {
      icon: CheckCircle,
      title: 'Rigorous Testing',
      description: 'Every component undergoes comprehensive quality checks before dispatch.'
    },
    {
      icon: Settings,
      title: 'Precision Engineering',
      description: 'Advanced CNC machining and quality control processes ensure perfect specifications.'
    }
  ];

  return (
    <section id="quality" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Uncompromising Quality</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our commitment to quality is evident in every component we manufacture. 
            From raw material selection to final inspection, we maintain the highest standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">
              <div className="w-16 h-16 bg-gradient-brass rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Quality Assurance Process</h3>
            <div className="space-y-4">
              {[
                'Incoming material inspection and certification',
                'In-process quality monitoring at every stage',
                'Dimensional accuracy verification using advanced tools',
                'Surface finish and coating quality checks',
                'Final inspection and testing before packaging',
                'Traceability documentation for all products'
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-brass-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-6 text-center">Quality Metrics</h4>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brass-400 mb-2">99.9%</div>
                <div className="text-slate-300">Quality Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brass-400 mb-2">24hrs</div>
                <div className="text-slate-300">Testing Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brass-400 mb-2">100%</div>
                <div className="text-slate-300">Inspection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brass-400 mb-2">Zero</div>
                <div className="text-slate-300">Defects Goal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
