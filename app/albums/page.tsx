type AlbumsPageProps = {
  searchParams: URLSearchParams;
};

const fetchAlbumList = () =>
  fetch("https://jsonplaceholder.typicode.com/albums").then((res) =>
    res.json()
  );

const AlbumsPage = async () => {
  const albumList = await fetchAlbumList();
  return (
    <div>
      <h1>AlbumsPage</h1>
      <pre>{JSON.stringify(albumList, null, 4)}</pre>
    </div>
  );
};
// Opt into Dynamic
// const AlbumsPage = async ({ searchParams }: AlbumsPageProps) => {
//   const albumList = await fetchAlbumList();
//   return (
//     <div>
//       <h1>AlbumsPage</h1>
//       <pre>{JSON.stringify(searchParams, null, 4)}</pre>
//       <pre>{JSON.stringify(albumList, null, 4)}</pre>
//     </div>
//   );
// };

export default AlbumsPage;
