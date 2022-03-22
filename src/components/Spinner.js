function Spinner() {
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    paddingBottom: '100%',
                    position: 'relative',
                }}
            >
                <img
                    src="https://media1.giphy.com/media/8cARKvZXq73sOZBdrw/giphy.gif?cid=790b76116b41cd634f146f0bb5e57e9c4e758675c22c7844&rid=giphy.gif&ct=s"
                    width="30%"
                    height="auto"
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    alt="Loading..."
                ></img>
            </div>
        </>
    );
}

export default Spinner;
