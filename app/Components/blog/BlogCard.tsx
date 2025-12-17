import { motion } from "framer-motion";
import { FaUser, FaCalendar } from "react-icons/fa";
import { Link } from "react-router";

interface BlogCardProps {
  id: number;
  title: string;
  body: string;
  userId: number;
  index: number;
}

export function BlogCard({ id, title, body, userId, index }: BlogCardProps) {
  return (
    <Link to={`/blog-post/${id}`} className="block h-full">
      <motion.article
        className="card cursor-pointer h-full flex flex-col"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        <div className="blog-card-header">
          <span className="blog-post-id">Post #{id}</span>
          <div className="blog-meta">
            <Link 
              to={`/user/${userId}`}
              className="blog-meta-item hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <FaUser className="inline mr-1" />
              Usuario {userId}
            </Link>
            <span className="blog-meta-item">
              <FaCalendar className="inline mr-1" />
              {new Date().toLocaleDateString('es-ES')}
            </span>
          </div>
        </div>
        
        <h3 className="card-title line-clamp-2">{title}</h3>
        
        <p className="card-description line-clamp-3 flex-grow">
          {body}
        </p>
        
        <motion.button 
          className="card-button mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Leer más
        </motion.button>
      </motion.article>
    </Link>
  );
}
