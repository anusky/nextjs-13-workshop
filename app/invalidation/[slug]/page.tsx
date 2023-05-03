import GetDate from "@/app/components/GetDate";

const getDate = () =>
  fetch("http:localhost:3000/api/get-date", {
    method: "GET",
    next: { revalidate: 5 }, // Revalidate every 5 seconds
  }).then((res) => res.json());

async function ShopItemPage({ params }: AllShopItemPageContext) {
  const data = await getDate();

  return (
    <div>
      <h1>Today: {data.date}</h1>
      PostItemPage: <pre>{JSON.stringify(params, null, 4)}</pre>
      <GetDate />
    </div>
  );
}

export default ShopItemPage;
