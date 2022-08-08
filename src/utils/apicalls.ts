export interface PostType {
  created_at: string;
  title: string;
  url: string;
}
export async function getPosts(page: number): Promise<PostType[] | null> {
  try {
    const resp = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`,
    );
    const data = await resp.json();
    return data.hits;
  } catch (e: any) {
    console.error(e.message);
    return null;
  }
}
