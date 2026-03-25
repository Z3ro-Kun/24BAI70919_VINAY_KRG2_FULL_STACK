import useJobs from "../hooks/useJobs"
import JobCards from "./JobCards";
function JobsList() {
    const {data: jobs} = useJobs();
    return(
        <div>
            <h1>Jobs List</h1>
            
            {<JobCards jobs={jobs} />}
        </div>
    )
}

export default JobsList;