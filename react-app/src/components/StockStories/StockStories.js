import './StockStories.css'


function StockStories({stories}){
    function findTimeDiff(time){
        const unixCurrTime = parseInt(
          (new Date().getTime() / 1000).toFixed(0)
        );
        const diff = unixCurrTime - time
        const diffDate = new Date(diff*1000)
        const hoursDiff = diffDate.getUTCHours()
        const minDiff = diffDate.getUTCMinutes()
        if(hoursDiff < 1){
            return `${minDiff}m`
        }else{
            return `${hoursDiff}h`
        }
    }


    return (
        <div>
            {stories && stories.map(story => (
                <a href={story.link}>
                    <h3>{story.publisher}</h3>
                    <p>{findTimeDiff(story.publishDate)}</p>
                    <p>{story.title}</p>
                    <p>{story.description}</p>
                    <div className="storyImg" style={{"backgroundImage": `url('${story.photoUrl}')`}}></div>
                </a>
            ))}
        </div>
    )
}

export default StockStories