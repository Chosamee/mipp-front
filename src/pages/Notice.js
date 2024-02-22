const { fetchAllNotices } = require("api/noticeService");
const { useEffect, useState } = require("react");

const Notice = async () => {
  const [notices, setNotices] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllNotices();
        setNotices(data.my_posts);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  });
  return <></>;
};
