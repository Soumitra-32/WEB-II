
function About() {
    return (
        <div
            style={{
                padding: "40px",
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
                lineHeight: "1.8",
            }}
        >
            <h1>Welcome to JU CSE!</h1>

            <p>
                We are proud students of the Department of Computer Science and
                Engineering, Jahangirnagar University. This project is the
                result of our teamwork, dedication, and passion for software
                development.
            </p>

            <h2>Project Team</h2>

            <div style={{ textAlign: "left", display: "inline-block" }}>
                <p><strong>Project Manager:</strong> Soumitra Saha</p>
                <p><strong>Frontend Engineer:</strong> Sukonya Dutta Pushpa</p>
                <p><strong>Backend Engineer:</strong> Sadikur Rahman Khan</p>
                <p><strong>SQA Engineer:</strong> Wasik Ahmed</p>
            </div>

            <p style={{ marginTop: "30px" }}>
                Thank you for visiting our website!
            </p>
        </div>
    );
}

export default About;

