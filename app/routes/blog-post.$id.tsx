import { useParams, Link } from "react-router";
import { useBlogPost } from "../hooks/useBlogPost";
import { useUser } from "../hooks/useUser";
import { Navbar } from "../Components/main/Navbar";
import { Footer } from "../Components/main/Footer";
import { Container } from "../layouts/Container";
import { Section } from "../layouts/Section";
import { motion } from "framer-motion";
import { FaSpinner, FaExclamationTriangle, FaArrowLeft, FaCalendar, FaTag } from "react-icons/fa";

export default function BlogPostDetail() {
    const { id } = useParams<{ id: string }>();
    const { post, loading: postLoading, error: postError } = useBlogPost(id || "");
    const { user, loading: userLoading } = useUser(post?.userId.toString() || "");

    if (postLoading) {
        return (
            <>
                <Navbar />
                <Section className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
                    <Container>
                        <div className="flex flex-col items-center justify-center py-20">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                                <FaSpinner className="text-6xl text-indigo-500" />
                            </motion.div>
                            <p className="text-gray-400 mt-4 text-lg">Cargando publicación...</p>
                        </div>
                    </Container>
                </Section>
                <Footer />
            </>
        );
    }

    if (postError || !post) {
        return (
            <>
                <Navbar />
                <Section className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
                    <Container>
                        <div className="flex flex-col items-center justify-center py-20">
                            <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
                            <p className="text-red-400 text-lg mb-6">
                                {postError || "No se pudo cargar la publicación"}
                            </p>
                            <Link
                                to="/"
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                            >
                                <FaArrowLeft className="inline mr-2" />
                                Volver al inicio
                            </Link>
                        </div>
                    </Container>
                </Section>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Section className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Botón volver */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 mb-8 transition-colors"
                    >
                        <FaArrowLeft />
                        Volver a las noticias
                    </Link>

                    {/* Header del post */}
                    <motion.div
                        className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700 mb-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        {/* Metadata */}
                        <div className="flex flex-wrap gap-4 mb-6 text-sm">
                            <span className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 px-4 py-2 rounded-full font-semibold">
                                <FaTag />
                                Post #{post.id}
                            </span>
                            <span className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                <FaCalendar />
                                {new Date().toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                        </div>

                        {/* Título */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white leading-tight capitalize">
                            {post.title}
                        </h1>

                        {/* Información del autor mejorada */}
                        {!userLoading && user && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                            >
                                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                                    Publicado por
                                </p>
                                <Link
                                    to={`/user/${user.id}`}
                                    className="flex items-center gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-900/30 px-6 py-4 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group"
                                >
                                    <div className="relative">
                                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:shadow-xl transition-shadow">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                            {user.name}
                                        </p>
                                        <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                                            @{user.username}
                                        </p>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                            {user.email}
                                        </p>
                                    </div>
                                    <div className="text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            </motion.div>
                        )}
                        {userLoading && (
                            <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                                <FaSpinner className="animate-spin" />
                                <span>Cargando información del autor...</span>
                            </div>
                        )}
                    </motion.div>

                    {/* Contenido del post */}
                    <motion.div
                        className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                            Contenido
                        </h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                {post.body}
                            </p>
                        </div>
                    </motion.div>

                    {/* Botón de acción al final */}
                    <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <FaArrowLeft />
                            Volver a todas las noticias
                        </Link>
                    </motion.div>
                </motion.div>
            </Container>
        </Section>
        <Footer />
        </>
    );
}
