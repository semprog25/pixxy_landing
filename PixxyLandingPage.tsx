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
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={pixxyThumbUrl} alt="Pixxy Logo" className="w-8 h-8 rounded-lg shadow-sm" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pixxy</span>
          </div>
          <Button 
            variant="ghost" 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="font-semibold text-slate-600 hover:text-blue-600"
          >
            Join Waitlist
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
              Coming Soon to iOS & Android
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Photography meets <span className="text-blue-600">Competition</span>.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Level up your photography skills, compete in daily challenges, join crews, and win real rewards. The ultimate gamified camera experience is almost here.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="h-12 bg-white border-slate-200 text-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" size="lg" className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold" disabled={isLoading}>
                    {isLoading ? "Joining..." : "Get Early Access"}
                  </Button>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-6 py-3 rounded-xl border border-green-100">
                  <CheckCircle2 className="w-6 h-6" />
                  <span className="font-semibold text-lg">Thanks! You're on the list.</span>
                </div>
              )}
            </div>

            {/* App Preview */}
            <div className="relative mx-auto w-full max-w-[300px] md:max-w-4xl perspective-1000">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl border-8 border-slate-900 overflow-hidden md:aspect-[16/9] aspect-[9/16] md:w-full md:h-auto md:border-none md:shadow-none md:bg-transparent">
                 {/* This would be a screenshot, for now using a placeholder or just the logo composition */}
                 <div className="md:hidden h-full w-full bg-slate-100 flex items-center justify-center">
                    <img src={pixxyLogoUrl} alt="Pixxy App" className="w-32 opacity-90" />
                 </div>
                 <div className="hidden md:flex items-center justify-center gap-8">
                    <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500">
                      <div className="h-full w-full bg-slate-800 rounded-[2.5rem] overflow-hidden relative">
                        <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                           <div className="text-white text-center p-6">
                              <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                              <h3 className="text-2xl font-bold">Daily Challenge</h3>
                              <p className="mt-2 opacity-90">Theme: Urban Shadows</p>
                           </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-64 h-[500px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 z-10">
                      <div className="h-full w-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                        <div className="h-1/2 bg-slate-100 relative">
                           <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className="w-full h-full object-cover" alt="Camera" />
                           <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                              1/3 Shots
                           </div>
                        </div>
                        <div className="p-6">
                           <h3 className="font-bold text-slate-900 text-lg">Camera</h3>
                           <p className="text-slate-500 text-sm mt-1">Pro controls meets gamification.</p>
                           <div className="mt-4 flex gap-2">
                              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                 <Zap className="w-5 h-5" />
                              </div>
                              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                                 <Smartphone className="w-5 h-5" />
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why join Pixxy?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">We're changing how you take photos. It's not just about the shot; it's about the game.</p>
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
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
            <img src={pixxyThumbUrl} alt="Pixxy" className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Ready to change your perspective?</h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Be the first to know when Pixxy launches. Join our exclusive waitlist today.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full max-w-md gap-3 mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="h-12 px-8 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors">
                Join Now
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-2 text-green-400 font-semibold text-lg">
              <CheckCircle2 className="w-6 h-6" />
              <span>You are on the waitlist!</span>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-500 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; 2025 Pixxy. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
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
