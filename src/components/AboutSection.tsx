
import { CheckCircle, Users, Factory, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'ISO 9001:2015 Certified Manufacturing',
    'Advanced CNC Machining Capabilities',
    'Strict Quality Control Standards',
    'Expert Technical Support',
    'Custom Design Solutions',
    'Competitive Pricing'
  ];

  const stats = [
    { icon: Users, number: '1000+', label: 'Satisfied Clients' },
    { icon: Factory, number: '25+', label: 'Years Experience' },
    { icon: Globe, number: '50+', label: 'Countries Served' },
    { icon: CheckCircle, number: '99.9%', label: 'Quality Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Vasudev Brass</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Leading manufacturer of precision brass components with a commitment to quality, 
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-800">
              Precision Engineering Since 1998
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Vasudev Brass has been at the forefront of brass component manufacturing, 
              serving industries worldwide with our commitment to excellence. Our state-of-the-art 
              facility combines traditional craftsmanship with modern technology.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We specialize in manufacturing high-quality brass components including electrical parts, 
              plumbing fittings, automotive components, and custom-engineered solutions for diverse industries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brass-500 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
              alt="Manufacturing Facility"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <p className="text-2xl font-bold text-brass-600">ISO 9001:2015</p>
              <p className="text-slate-600">Certified Quality</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-brass rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
