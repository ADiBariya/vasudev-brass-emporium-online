
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProductsSection = () => {
  const productCategories = [
    {
      title: 'Electrical Components',
      description: 'High-quality brass electrical parts including terminals, connectors, and switchgear components.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
      features: ['Terminal Blocks', 'Cable Glands', 'Earthing Components', 'Switch Parts']
    },
    {
      title: 'Plumbing Fittings',
      description: 'Durable brass plumbing solutions for residential and commercial applications.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
      features: ['Pipe Fittings', 'Valves', 'Couplings', 'Adapters']
    },
    {
      title: 'Automotive Parts',
      description: 'Precision-engineered brass components for automotive and transportation industries.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      features: ['Engine Components', 'Fuel System Parts', 'Hydraulic Fittings', 'Custom Parts']
    },
    {
      title: 'Industrial Hardware',
      description: 'Heavy-duty brass hardware for industrial machinery and equipment.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80',
      features: ['Machine Components', 'Fasteners', 'Bushings', 'Custom Machining']
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Product Range</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive range of precision brass components manufactured to the highest standards 
            for various industries and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="space-y-2 mb-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <div className="w-2 h-2 bg-brass-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-brass-500 text-brass-600 hover:bg-brass-500 hover:text-white"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Products */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Featured Products</h3>
            <p className="text-slate-600">
              Some of our most popular and trusted brass components
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Panel Locks',
              'Cable Glands',
              'Terminal Blocks',
              'Brass Fittings',
              'Switch Components',
              'Earthing Parts',
              'Custom Components',
              'Precision Parts'
            ].map((product, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-gradient-brass rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{product.charAt(0)}</span>
                </div>
                <p className="font-medium text-slate-700">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
