import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const instagramPosts = [
  {
    id: 1,
    image: "/src/assets/product-galouti-1.jpg",
    likes: "2.4K",
    comments: 89,
    caption: "When your kebabs hit different 🔥"
  },
  {
    id: 2,
    image: "/src/assets/product-galouti-2.jpg",
    likes: "1.8K",
    comments: 56,
    caption: "Royal cravings satisfied ✨"
  },
  {
    id: 3,
    image: "/src/assets/product-galouti-3.jpg",
    likes: "3.1K",
    comments: 124,
    caption: "Melt-in-your-mouth magic 👑"
  },
  {
    id: 4,
    image: "/src/assets/product-galouti-1.jpg",
    likes: "2.7K",
    comments: 93,
    caption: "Weekend vibes sorted 🍽️"
  },
  {
    id: 5,
    image: "/src/assets/product-galouti-2.jpg",
    likes: "1.5K",
    comments: 42,
    caption: "Kebab appreciation post 💛"
  },
  {
    id: 6,
    image: "/src/assets/product-galouti-3.jpg",
    likes: "2.2K",
    comments: 78,
    caption: "That golden crisp though 😍"
  }
];

export const InstagramSection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-royal-navy">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-royal-navy via-royal-navy-light/50 to-royal-navy" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 mb-6">
            <Instagram className="w-4 h-4 text-pink-400" />
            <span className="text-royal-cream-light text-sm font-medium uppercase tracking-wider">Join the Community</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-royal-cream-light leading-tight mb-4">
            Follow the <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent italic">Flavor</span>
          </h2>
          <p className="text-royal-cream/70 text-lg max-w-2xl mx-auto mb-6">
            Join 50K+ foodies who can't stop sharing their Shahi Serve moments
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-royal-gold hover:text-royal-gold-light transition-colors duration-300"
          >
            <span className="font-semibold">@shahiserve</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-royal-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-4 text-royal-cream-light">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
                    <span className="font-semibold text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle className="w-5 h-5 text-royal-cream-light" />
                    <span className="font-semibold text-sm">{post.comments}</span>
                  </div>
                </div>
                <p className="text-royal-cream/80 text-xs text-center px-3 line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            <span>Follow Us on Instagram</span>
          </a>
          <p className="text-royal-cream/50 text-sm mt-4">
            Tag us in your posts for a chance to be featured! 📸
          </p>
        </motion.div>
      </div>
    </section>
  );
};
