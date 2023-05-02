import Link from "next/link";

const fetchComments = (id: string) =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((response) => response.json())
    .then((json) => json);

export default async function PostCommentsPage({ params }: PostPageContext) {
  const comments = await fetchComments(params.slug);
  return (
    <div>
      <h1>PostCommentsPage</h1>
      <Link href={`/posts/${params.slug}`}>Back to post</Link>
      <div>
        <pre>{JSON.stringify(comments, null, 4)}</pre>
      </div>
      <nav className="bg-blue-300 p-8 rounded-lg w-fit flex gap-x-4">
        {/* pre-fetch show */}
        <Link href="/members">goto memberspage</Link>
      </nav>
    </div>
  );
}
