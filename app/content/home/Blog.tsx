import { Section } from "../../layouts/Section";
import { SectionHeader } from "../../layouts/SectionHeader";
import { BlogCard } from "../../Components/blog/BlogCard";
import { useBlog } from "../../hooks/useBlog";
import { motion } from "framer-motion";
import { FaSpinner, FaExclamationTriangle } from "react-icons/fa";

export function Blog() {
  const { posts, loading, error } = useBlog();

  if (loading) {
    return (
      <Section className="bg-gradient-to-b from-gray-900 to-gray-950" id="blog">
        <SectionHeader 
          title="Nuevas Noticias" 
          description="Mantente informado con las últimas noticias y actualizaciones" 
        />
        <div className="flex flex-col items-center justify-center py-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FaSpinner className="text-6xl text-indigo-500" />
          </motion.div>
          <p className="text-gray-400 mt-4 text-lg">Cargando noticias...</p>
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section className="bg-gradient-to-b from-gray-900 to-gray-950" id="blog">
        <SectionHeader 
          title="Nuevas Noticias" 
          description="Mantente informado con las últimas noticias y actualizaciones" 
        />
        <div className="flex flex-col items-center justify-center py-20">
          <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
          <p className="text-red-400 text-lg">Error al cargar las noticias: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Intentar de nuevo
          </button>
        </div>
      </Section>
    );
  }

  return (
    <Section className="bg-gradient-to-b from-gray-900 to-gray-950" id="blog">
      <SectionHeader 
        title="Nuevas Noticias" 
        description="Descubre lo último y mantente al día con nuestras actualizaciones" 
      />
      
      {posts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No hay noticias disponibles en este momento.</p>
        </div>
      ) : (
        <div className="cards-grid">
          {posts.map((post, index) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={post.userId}
              index={index}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
