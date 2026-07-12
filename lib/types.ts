export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl?: string;
  tags?: string;
  readingTime?: number;
}

export interface JobPosting {
  id: string;
  title: string;
  description: string;
  experience: string;
  location: string;
  last_date: string;
  is_active: boolean;
  created_at: string;
}
