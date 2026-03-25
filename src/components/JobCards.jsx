function JobCards({ jobs }) {
    return (
        <div>
            <h2>Job Cards</h2>
            {jobs && jobs.map(job => (
                <div key={job.id}>
                    <h3>{job.title}</h3>
                    <p>{job.company}</p>
                </div>
            ))}
        </div>
    );
}

export default JobCards;