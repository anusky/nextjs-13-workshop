import GetDate from "@/app/ components/GetDate";
import Link from "next/link";

const getDate = () =>
  fetch("http:localhost:3000/api/get-date", {
    method: "GET",
    // https://beta.nextjs.org/docs/data-fetching/caching
    next: { revalidate: 30 }, // Revalidate every 30 seconds
  }).then((res) => res.json());

async function ShopItemPage({ params }: PostPageContext) {
  const data = await getDate();

  return (
    <div>
      <h1>Today: {data.date}</h1>
      PostItemPage: <pre>{JSON.stringify(params, null, 4)}</pre>
      <GetDate />
      <div className="grid gap-y-4">
        <Link href={`/all-posts/${params.slug}/comments`}>See comments</Link>
        <Link href={`/all-posts/${params.slug}/comments-two`}>
          See comments two
        </Link>
      </div>
    </div>
  );
}

export default ShopItemPage;
