import { useState, useEffect } from 'react';
import axios from 'axios';

interface GithubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  stargazers_count: number;
  language: string;
}

export function useGithubProjects(username: string) {
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        setProjects(response.data);
      } catch (err) {
        setError('Failed to fetch GitHub projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [username]);

  return { projects, loading, error };
}