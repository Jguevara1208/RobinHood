
function ResolutionButtons({resolution, setResolution}){

    const resolutions = ['D', 'W', 'M', 'Y']
    const toggleResolution = async (e) => {
        let res = e.target.value
        setResolution(res)
    }

    return (
        <>
            {resolutions.map((res) => (
                <button
                    className={res === resolution ? "active-res" : ""}
                    value={res}
                    onClick={toggleResolution}
                >
                    {res}
                </button>
            ))}
        </>
    );
};

export default ResolutionButtons;
