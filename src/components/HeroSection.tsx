
import { ArrowRight, Shield, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGE1MDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Premium <span className="text-gradient-brass">Brass Components</span> for Every Industry
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Manufacturing precision-engineered brass parts with over 25 years of expertise. 
                From electrical components to industrial hardware, we deliver quality that exceeds expectations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-brass hover:bg-brass-600 text-white px-8 py-3 text-lg"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg"
              >
                Get Quote
              </Button>
            </div>

            {/* Key features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brass-500 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">ISO Certified</p>
                  <p className="text-sm text-slate-400">Quality Assured</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brass-500 rounded-lg flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">25+ Years</p>
                  <p className="text-sm text-slate-400">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brass-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold">Fast Delivery</p>
                  <p className="text-sm text-slate-400">On Time</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" 
                alt="Precision Brass Components" 
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-brass text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">1000+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brass-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-brass-400 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
