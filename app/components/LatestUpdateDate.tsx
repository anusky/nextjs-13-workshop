const fetchLatestUpdateDate = () =>
  fetch("http://localhost:3000/api/latest-updated-date", {
    method: "GET",
    next: { tags: ["date"] },
  }).then((res) => res.json());
const LatestUpdateDate = async () => {
  const data = await fetchLatestUpdateDate();
  return <div>LatestUpdateDate -- {data.date}</div>;
};

export default LatestUpdateDate;
