function Spinner() {
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '0',
                    paddingBottom: '100%',
                    position: 'relative',
                }}
            >
                <iframe
                    title="spinner"
                    src="https://giphy.com/embed/8cARKvZXq73sOZBdrw"
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute' }}
                    frameBorder="0"
                    className="giphy-embed"
                    allowFullScreen
                ></iframe>
            </div>
            <p>
                <a href="https://giphy.com/stickers/animation-richard-ramos-rawrmos-8cARKvZXq73sOZBdrw">
                    via GIPHY
                </a>
            </p>
        </>
    );
}

export default Spinner;
