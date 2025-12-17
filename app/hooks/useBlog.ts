import { useState, useEffect } from "react";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function useBlog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Error al cargar los posts');
        }
        
        const data: Post[] = await response.json();
        // Limitar a los primeros 6 posts para no sobrecargar la página
        setPosts(data.slice(0, 6));
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
