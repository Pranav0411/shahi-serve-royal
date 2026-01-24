import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import pattern from "@/assets/pattern.png";
import { Crown, Heart, Leaf, Award, Users, Clock } from "lucide-react";

const values = [
  {
    icon: Crown,
    title: "Royal Quality",
    description: "Every dish is crafted with the finest ingredients, fit for royalty."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Our chefs pour their passion into every recipe, ensuring authentic flavors."
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "We source only the freshest, highest-quality ingredients for our dishes."
  },
  {
    icon: Award,
    title: "Award-Winning Recipes",
    description: "Our recipes have been perfected over generations and recognized for excellence."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We serve you like royalty."
  },
  {
    icon: Clock,
    title: "Quick & Convenient",
    description: "Enjoy gourmet meals in minutes without compromising on taste."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-royal-cream">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-royal-navy overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: `url(${pattern})`,
              backgroundSize: '300px',
              backgroundRepeat: 'repeat'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-royal-gold font-medium tracking-widest uppercase text-sm">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-royal-cream mt-3 mb-6">
                Our Royal Story
              </h1>
              <p className="text-royal-cream/80 text-lg md:text-xl">
                Bringing the grandeur of royal kitchens to your dining table, 
                one exquisite dish at a time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 lg:py-28 bg-royal-cream-light relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: `url(${pattern})`,
              backgroundSize: '300px',
              backgroundRepeat: 'repeat'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="text-royal-gold-rich font-medium tracking-widest uppercase text-sm">
                  The Beginning
                </span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-navy mt-3">
                  Fit for a King
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 text-lg text-royal-navy/80"
              >
                <p>
                  For centuries, kings and emperors have never stepped into the bustling markets 
                  to seek a meal. The finest ingredients, the richest spices, and the most indulgent 
                  dishes were prepared and served to them within the grand walls of their palaces.
                </p>
                <p>
                  In today's world, every individual deserves that same royal treatment. The modern 
                  consumer is no less than a king — seeking meals that are scrumptious, indulgent, 
                  and flavourful but without the time-consuming effort of cooking.
                </p>
                <p>
                  At Shahi Serve, we believe that exceptional food should be accessible to everyone. 
                  Our mission is to bring the authentic flavors of royal Indian cuisine directly to 
                  your doorstep, prepared with the same care and attention that was once reserved 
                  for royalty.
                </p>
                <p className="font-heading text-2xl text-royal-navy font-medium italic text-center pt-4">
                  "Shahi Serve will serve you the feast you truly deserve."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 lg:py-28 bg-royal-navy relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: `url(${pattern})`,
              backgroundSize: '300px',
              backgroundRepeat: 'repeat'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-royal-gold font-medium tracking-widest uppercase text-sm">
                What We Stand For
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-cream mt-3">
                Our Values
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-royal-navy-light/50 backdrop-blur-sm border border-royal-gold/20 rounded-2xl p-8 text-center hover:border-royal-gold/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-royal-gold to-royal-gold-rich rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-royal-navy" />
                  </div>
                  <h3 className="font-heading text-xl text-royal-cream mb-3">
                    {value.title}
                  </h3>
                  <p className="text-royal-cream/70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-royal-cream-light relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5"
            style={{ 
              backgroundImage: `url(${pattern})`,
              backgroundSize: '300px',
              backgroundRepeat: 'repeat'
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl text-royal-navy mb-6">
                Ready to Experience the Royal Feast?
              </h2>
              <p className="text-royal-navy/70 text-lg mb-8">
                Discover our exquisite collection of ready-to-eat royal delicacies 
                and treat yourself to the feast you truly deserve.
              </p>
              <button className="btn-royal">
                Explore Our Menu
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
