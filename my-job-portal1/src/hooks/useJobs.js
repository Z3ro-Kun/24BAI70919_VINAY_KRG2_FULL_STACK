import { useState, useEffect} from "react";
import axios from "axios";

function useJobs() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then((response) => {
            const jobData = response.data.map((item) => ({
                id: item.id,
                title: item.title,
                company: item.id % 2 === 0 ? "Tech Company" : "Non-Tech Company",
            }));
            setJobs(jobData);
        }).catch((error) => {
            console.error("Error fetching jobs:", error);
        });
}, []);
        return { data: jobs};
}
export default useJobs;