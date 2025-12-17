import { useParams, Link } from "react-router";
import { useUser } from "../hooks/useUser";
import { Navbar } from "../Components/main/Navbar";
import { Footer } from "../Components/main/Footer";
import { Container } from "../layouts/Container";
import { Section } from "../layouts/Section";
import { motion } from "framer-motion";
import {
    FaSpinner,
    FaExclamationTriangle,
    FaArrowLeft,
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaMapMarkerAlt,
    FaBuilding,
    FaUser
} from "react-icons/fa";

export default function UserProfile() {
    const { id } = useParams<{ id: string }>();
    const { user, loading, error } = useUser(id || "");

    if (loading) {
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
                            <p className="text-gray-400 mt-4 text-lg">Cargando perfil...</p>
                        </div>
                    </Container>
                </Section>
                <Footer />
            </>
        );
    }

    if (error || !user) {
        return (
            <>
                <Navbar />
                <Section className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen">
                    <Container>
                        <div className="flex flex-col items-center justify-center py-20">
                            <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
                            <p className="text-red-400 text-lg mb-6">
                                {error || "No se pudo cargar el perfil"}
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

                    {/* Header del perfil */}
                    <motion.div
                        className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700 mb-8"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            {/* Avatar */}
                            <div className="w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-5xl shadow-2xl">
                                {user.name.charAt(0)}
                            </div>

                            {/* Información básica */}
                            <div className="flex-1 text-center md:text-left">
                                <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {user.name}
                                </h1>
                                <p className="text-xl text-indigo-600 dark:text-indigo-400 mb-4">
                                    @{user.username}
                                </p>
                                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                    <span className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-semibold">
                                        <FaUser />
                                        Usuario #{user.id}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Información de contacto */}
                    <motion.div
                        className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                            <FaEnvelope className="text-indigo-600 dark:text-indigo-400" />
                            Información de Contacto
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <a
                                    href={`mailto:${user.email}`}
                                    className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <FaEnvelope className="text-indigo-600 dark:text-indigo-400" />
                                    {user.email}
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
                                <a
                                    href={`tel:${user.phone}`}
                                    className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <FaPhone className="text-indigo-600 dark:text-indigo-400" />
                                    {user.phone}
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Sitio web</p>
                                <a
                                    href={`https://${user.website}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                >
                                    <FaGlobe className="text-indigo-600 dark:text-indigo-400" />
                                    {user.website}
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-500 dark:text-gray-400">Dirección</p>
                                <p className="flex items-start gap-2 text-gray-900 dark:text-white">
                                    <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 mt-1" />
                                    <span>
                                        {user.address.street}, {user.address.suite}<br />
                                        {user.address.city}, {user.address.zipcode}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Información de la empresa */}
                    <motion.div
                        className="bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                            <FaBuilding className="text-indigo-600 dark:text-indigo-400" />
                            Información de la Empresa
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Nombre de la empresa</p>
                                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {user.company.name}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Eslogan</p>
                                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                                    "{user.company.catchPhrase}"
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Área de negocio</p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {user.company.bs}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Botón de acción al final */}
                    <motion.div
                        className="mt-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
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
