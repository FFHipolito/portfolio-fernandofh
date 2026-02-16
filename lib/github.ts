export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

export async function getRepos(): Promise<Repo[]> {
  try {
    const res = await fetch('https://api.github.com/users/FFHipolito/repos?sort=updated&per_page=6', {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error('Failed to fetch repositories');
    }

    const repos: Repo[] = await res.json();
    return repos;
  } catch (error) {
    console.error("Error fetching repos:", error);
    return [];
  }
}

export async function getProfile() {
    try {
        const res = await fetch('https://api.github.com/users/FFHipolito', {
            next: { revalidate: 3600}
        });
        if (!res.ok) {
            throw new Error('Failed to fetch profile');
        }
        return await res.json();
    } catch (error) {
        console.error("Error fetching profile:", error);
        return null;
    }
}
