function Video() {
    return (
        <div className="video-section">
            <div className="frame">
                <iframe
                    width="788"
                    height="443"
                    src="https://www.youtube.com/embed/5meKeQn2ZJk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default Video;