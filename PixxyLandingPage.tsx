import { useState } from "react";
import { motion } from "motion/react";
import { Camera, Trophy, Users, Zap, ChevronRight, Star, CheckCircle2, Smartphone } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { toast } from "sonner@2.0.3";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export const PixxyLandingPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-e0d353ca/join-waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to join waitlist");

      setIsSubmitted(true);
      toast.success("You're on the list!", {
        description: "We'll notify you when Pixxy launches.",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const pixxyLogoUrl = "https://fjygzpjvvoqmjafnpheb.supabase.co/storage/v1/object/sign/pixxybucket/Pixxy%20Logo%20File.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYzNjNjk2Ny0zM2Y5LTRmMmQtYTI2Yy01NDI4ZjlmNTVmMzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaXh4eWJ1Y2tldC9QaXh4eSBMb2dvIEZpbGUucG5nIiwiaWF0IjoxNzY0ODQwODY5LCJleHAiOjMzNDE2NDA4Njl9.-kUF4Mt-IZg3SNLNQ2KKOYOy1qu7yJfGyd05VXUoGlE";
  const pixxyThumbUrl = "https://fjygzpjvvoqmjafnpheb.supabase.co/storage/v1/object/sign/pixxybucket/Pixxy%20thumb.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYzNjNjk2Ny0zM2Y5LTRmMmQtYTI2Yy01NDI4ZjlmNTVmMzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaXh4eWJ1Y2tldC9QaXh4eSB0aHVtYi5wbmciLCJpYXQiOjE3NjQ4NDA5MDgsImV4cCI6MzM0MTY0MDkwOH0.lDbEO0FYd8bBenCk0kjYaQvRCdWc3H_IV1yiAjAlQl8";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo Centered Above Text */}
            <div className="flex justify-center mb-10">
              <img src={pixxyLogoUrl} alt="Pixxy" className="h-12 w-auto" />
            </div>

            <div className="inline-block mb-6 px-5 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-blue-600 text-xs font-bold tracking-wider uppercase">
              Coming Soon to iOS & Android
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Photography meets <span className="text-blue-600">Competition</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Level up your photography skills, compete in daily challenges, join crews, and win real rewards. The ultimate gamified camera experience is almost here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md gap-2 bg-white p-2 rounded-xl shadow-xl shadow-blue-900/5 border border-slate-100">
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="h-12 border-none bg-transparent text-lg focus-visible:ring-0 px-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white text-base font-bold rounded-lg" disabled={isLoading}>
                    {isLoading ? "Joining..." : "Get Early Access"}
                  </Button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-6 py-4 rounded-xl border border-green-100 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-bold text-lg">Thanks! You're on the list.</span>
                </div>
              )}
              <p className="text-xs text-slate-400 mt-2 sm:hidden">Join 2,000+ photographers waiting for launch</p>
            </div>
            <p className="text-xs text-slate-400 -mt-16 mb-16 hidden sm:block">Join 2,000+ photographers waiting for launch</p>

            {/* App Preview - Placeholder for now or screenshot */}
            <div className="relative mx-auto w-full max-w-[300px] md:max-w-4xl perspective-1000">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-3xl rounded-full" />
              
              {/* Content */}
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden md:aspect-[16/9] aspect-[9/16] md:w-full md:h-auto md:border-none md:shadow-none md:bg-transparent">
                 <div className="hidden md:flex items-center justify-center gap-8 py-10">
                    {/* Left Phone */}
                    <div className="w-72 h-[580px] bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-700 border-4 border-slate-800">
                      <div className="h-full w-full bg-slate-800 rounded-[2.5rem] overflow-hidden relative">
                        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-blue-600 to-purple-600 flex flex-col items-center justify-center p-6 text-center text-white">
                            <Trophy className="w-20 h-20 mb-6 text-yellow-300 drop-shadow-lg" />
                            <h3 className="text-3xl font-bold mb-2">Daily Challenge</h3>
                            <div className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-medium">Theme: Urban Shadows</div>
                            <div className="mt-8 flex gap-2">
                              <div className="w-10 h-10 rounded-full bg-white/20" />
                              <div className="w-10 h-10 rounded-full bg-white/20" />
                              <div className="w-10 h-10 rounded-full bg-white/20" />
                            </div>
                            <p className="mt-4 text-sm opacity-80">1,240 Participants</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Phone */}
                    <div className="w-72 h-[580px] bg-slate-900 rounded-[3.5rem] p-3 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-700 z-10 border-4 border-slate-800">
                      <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                        <div className="h-3/5 bg-slate-100 relative">
                           <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover" alt="Camera" />
                           {/* Camera UI Overlay */}
                           <div className="absolute inset-0 flex flex-col justify-between p-6">
                              <div className="flex justify-between">
                                <div className="w-8 h-8 bg-black/30 backdrop-blur rounded-full" />
                                <div className="w-8 h-8 bg-black/30 backdrop-blur rounded-full" />
                              </div>
                              <div className="flex justify-center">
                                <div className="w-16 h-16 rounded-full border-4 border-white bg-transparent" />
                              </div>
                           </div>
                        </div>
                        <div className="p-6 bg-white flex-1">
                           <div className="flex items-center gap-3 mb-4">
                             <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Smartphone className="w-6 h-6" />
                             </div>
                             <div>
                               <h3 className="font-bold text-slate-900 text-lg">Pro Mode</h3>
                               <p className="text-slate-500 text-xs">ISO 400 • f/1.8 • 1/500s</p>
                             </div>
                           </div>
                           <div className="space-y-2">
                              <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                                <div className="h-full w-3/4 bg-blue-500 rounded-full" />
                              </div>
                              <div className="flex justify-between text-xs text-slate-400 font-medium">
                                <span>Level 12</span>
                                <span>2,450 XP</span>
                              </div>
                           </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why join Pixxy?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">We're changing how you take photos. It's not just about the shot; it's about the game.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Trophy className="w-8 h-8 text-yellow-500" />}
              title="Compete & Win"
              description="Submit your best shots to daily themed challenges. Vote on others and climb the leaderboards."
            />
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-blue-500" />}
              title="Join Crews"
              description="Team up with friends or other photographers. Collaborate, compete in crew wars, and dominate together."
            />
            <FeatureCard 
              icon={<Star className="w-8 h-8 text-purple-500" />}
              title="Earn Rewards"
              description="Gain XP, unlock tiers from Novice to Elite Master, and earn coins to buy power-ups and filters."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#0B1024] text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
           <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-900/20 transform -rotate-3">
            <img src={pixxyThumbUrl} alt="Pixxy" className="w-14 h-14 drop-shadow-md" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to change your perspective?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Be the first to know when Pixxy launches. Join our exclusive waitlist today.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md gap-3 mx-auto bg-white/5 p-2 rounded-xl border border-white/10">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 h-12 px-4 rounded-lg bg-transparent border-none text-white placeholder:text-slate-500 focus:outline-none focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="h-12 px-8 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors whitespace-nowrap">
                Join Now
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 text-green-400 font-semibold text-lg bg-green-500/10 px-6 py-4 rounded-xl border border-green-500/20">
              <CheckCircle2 className="w-6 h-6" />
              <span>You are on the waitlist!</span>
            </div>
          )}

          <div className="mt-20 border-t border-white/5 pt-10">
            <p className="text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-8">Coming Soon</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="flex items-center gap-3 bg-black border border-white/10 hover:bg-white/5 hover:border-white/30 text-white px-5 py-3 rounded-xl transition-all group">
                 <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-2.96-.9-3.86-.9-.9 0-2.52.87-3.85.92-1.25.05-2.26-1.27-3.09-2.53-1.68-2.53-2.99-7.2-1.18-10.33 1.79-3.09 5.16-3.23 7.34-0.88l0.48.52c1.5-1.35 4.1-1.65 5.6-0.55 2.11 1.55 2.67 4.58 2.73 4.86-.03.05-4.23 1.47-4.16 5.86.06 4.12 3.59 5.88 3.76 5.98-0.33 1.08-1.04 2.57-1.72 3.58z M13 5c-0.67-3.29 3.56-5.23 3.56-5.23s0.35 2.82-1.64 5.17c-1.92 2.27-3.99 1.48-3.99 1.48s-0.34-3.06 2.07-1.42z" />
                 </svg>
                 <div className="text-left">
                    <div className="text-[10px] font-medium opacity-60 leading-none mb-1">Download on the</div>
                    <div className="text-base font-bold leading-none">App Store</div>
                 </div>
              </button>
              <button className="flex items-center gap-3 bg-black border border-white/10 hover:bg-white/5 hover:border-white/30 text-white px-5 py-3 rounded-xl transition-all group">
                 <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3,20.5V3.5C3,2.91,3.34,2.39,3.84,2.15L13.69,12L3.84,21.85C3.34,21.6,3,21.09,3,20.5 M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12 M20.3,12.56L17.66,15.97L15.39,13.7L17.66,11.44L20.3,14.85C20.5,13.9 20.5,12.91 20.3,12.56 M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
                 </svg>
                 <div className="text-left">
                    <div className="text-[10px] font-medium opacity-60 leading-none mb-1">GET IT ON</div>
                    <div className="text-base font-bold leading-none">Google Play</div>
                 </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#050814] text-slate-600 text-center text-sm border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2025 Pixxy. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
      <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-sm mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
