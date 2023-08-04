export const BACKEND_API_URL_BASE = 'https://api5.codexg.com/wp-json';
export const BACKEND_API_URL = 'https://api5.codexg.com/wp-json/gp/v1';
import {IPost} from "../components/pages/Blog/LatestArticles";
import {ILatestPosts} from "../components/pages/Blog/LatestArticles";

class ApiService {
  // static async getPosts(): Promise<IPost[]> {
  //   // Simulate fetching data from an API
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await response.json();
  //   return data;
  // }
  
  static async getPostsByQuery(query: string): Promise<IPost[]> {
    const response = await fetch(`${BACKEND_API_URL}/search?${query}`);
    const data = await response.json();
    return data;
  }
  
  static async getPosts(limit: number, offset: number): Promise<ILatestPosts> {
    const response = await fetch(`${BACKEND_API_URL}/latest-posts?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data;
  }
}

export default ApiService;
