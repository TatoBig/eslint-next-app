import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  attributes: {
    Title: string;
    Content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:1337/api/posts', {
        headers: {
          Authorization:
            'Bearer 2d3855e11423e5344701ef3e1ec01008bce42f96769d6bd3db38734812831f985c9bae0ecffa5500e842704fe44ff3f3c8aa597748a1b58dc16f1dbb506478f8974849ae128d01edb311e2fc286aef926a8fa7a021f4b38c1c062ecea890eab0269ac4dfccf834e76a2372d2d6a2ada472abeff2f6a96b6cf787e25bbcd07113',
        },
      });
      console.log(response);
      setPosts(response.data.data);
    };

    fetchPosts();
  }, []);

  return (
    <section>
      <h1>Posts</h1>
      {posts.map(post => (
        <h3 key={post.id}>{post.attributes.Title}</h3>
      ))}
    </section>
  );
}
