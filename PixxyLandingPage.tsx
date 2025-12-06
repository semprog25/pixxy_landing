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

  const pixxyLogoUrl = "https://fjygzpjvvoqmjafnpheb.supabase.co/storage/v1/object/sign/pixxybucket/Pixxy%20Logo%20File.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lYzNjNjk2Ny0zM2Y5LTRmMmQtYTI2Yy01NDI4ZjlmNTVmMzUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaXh4eWJ1Y2tldC9QaXh4eSBMb2dvIEZpbGUucG5nIiwiaWF0IjoxNzY1MDYwOTU0LCJleHAiOjMzNDE4NjA5NTR9.tOAxxaEnwnNwFiCDy1kJ_sfp6Yj3w-H__rlLHFboVc8";
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
              <img 
                key={pixxyLogoUrl}
                src={pixxyLogoUrl} 
                alt="Pixxy" 
                className="h-20 w-auto" 
              />
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
      <section className="py-32 bg-[#050A18] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          {/* Thumb removed as requested */}
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to change your perspective?</h2>
          <p className="text-slate-400 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Be the first to know when Pixxy launches. Join our exclusive waitlist today.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 bg-[#1E293B]/80 p-2 rounded-full border border-slate-700/50 shadow-2xl shadow-blue-900/20 backdrop-blur-sm max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 h-14 px-8 rounded-full bg-transparent border-none text-white placeholder:text-slate-400 text-lg focus:outline-none focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="h-14 px-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all shadow-lg shadow-blue-600/20 whitespace-nowrap" disabled={isLoading}>
                {isLoading ? "Joining..." : "Join Now"}
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-3 text-green-400 font-bold text-lg bg-green-500/10 px-8 py-4 rounded-full border border-green-500/20">
              <CheckCircle2 className="w-6 h-6" />
              <span>You are on the waitlist!</span>
            </div>
          )}

          <div className="mt-24">
            <p className="text-xs font-bold tracking-[0.2em] text-slate-500 uppercase mb-8">Coming Soon</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <button className="flex items-center gap-4 bg-[#02040a] border border-white/10 hover:bg-[#0f1525] hover:border-white/20 text-white px-8 py-4 rounded-2xl transition-all group hover:-translate-y-1 shadow-xl">
                 <svg className="w-10 h-10 fill-white" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-22-107.7-61.6-107.7-119.3zM210.3 74.6c18.5-24.5 30.8-56.8 26.5-88.7-27.4 1.7-62.7 20.6-83.6 45.2-18.8 23.1-35.8 58.1-28.3 89.7 29.4 3.2 65.4-21.8 85.4-46.2z"/>
                 </svg>
                 <div className="text-left">
                    <div className="text-[11px] font-bold text-slate-500 uppercase leading-none mb-1.5">Download on the</div>
                    <div className="text-xl font-bold text-white leading-none">App Store</div>
                 </div>
              </button>
              <button className="flex items-center gap-4 bg-[#02040a] border border-white/10 hover:bg-[#0f1525] hover:border-white/20 text-white px-8 py-4 rounded-2xl transition-all group hover:-translate-y-1 shadow-xl">
                 <svg className="w-9 h-9" viewBox="0 0 512 512">
                    <path fill="#34A853" d="M99.6 449.3L7.8 357.5c-3.5-3.5-5.8-8.3-5.8-13.5V44.2c0-5.2 2.3-10 5.8-13.5l91.8-91.8 276.7 260-276.7 250.4z"/>
                    <path fill="#FBBC04" d="M428.6 277.2L136.9 4.5C130.6-1.4 120.9-1.4 114.6 4.5l-15 14 276.7 260 52.3-49.3z"/>
                    <path fill="#EA4335" d="M428.6 234.8l-52.3-49.3-276.7 260 15 14c6.3 5.9 16 5.9 22.3 0l291.7-224.7z"/>
                    <path fill="#4285F4" d="M99.6 62.7v386.6L376.3 256 99.6 62.7z"/>
                 </svg>
                 <div className="text-left">
                    <div className="text-[11px] font-bold text-slate-500 uppercase leading-none mb-1.5">Get it on</div>
                    <div className="text-xl font-bold text-white leading-none">Google Play</div>
                 </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#02040a] text-slate-600 text-xs border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-500">Pixxy</span>
            <span className="text-slate-700">&copy; 2025</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Support</a>
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
