import React from "react";

function About() {
    const teamMembers = [
        { role: "Project Manager", name: "Soumitra Saha", avatar: "SS" },
        { role: "Frontend Engineer", name: "Sukonya Dutta Pushpa", avatar: "SP" },
        { role: "Backend Engineer", name: "Sadikur Rahman Khan", avatar: "SK" },
        { role: "SQA Engineer", name: "Wasik Ahmed", avatar: "WA" },
    ];

    return (
        <div style={styles.container}>
            {/* Header Section */}
            <div style={styles.header}>
                <span style={styles.badge}>JU CSE Department</span>
                <h1 style={styles.title}>
                    Building Software with <span style={styles.gradientText}>Passion & Purpose</span>
                </h1>
                <p style={styles.description}>
                    We are proud students of the Department of Computer Science and Engineering,
                    Jahangirnagar University. This project reflects our teamwork, dedication,
                    and commitment to excellence.
                </p>
            </div>

            {/* Team Section */}
            <div style={styles.teamSection}>
                <h2 style={styles.sectionTitle}>Meet the Team</h2>
                <div style={styles.grid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} style={styles.card}>
                            <div style={styles.avatar}>{member.avatar}</div>
                            <div>
                                <h3 style={styles.memberName}>{member.name}</h3>
                                <p style={styles.memberRole}>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Note */}
            <div style={styles.footerNote}>
                <p style={{ margin: 0 }}>Thank you for visiting our project!</p>
            </div>
        </div>
    );
}

// Inline styles for high modularity & quick integration
const styles = {
    container: {
        maxWidth: "900px",
        margin: "60px auto",
        padding: "0 24px",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
        color: "#1e293b",
    },
    header: {
        textAlign: "center",
        marginBottom: "50px",
    },
    badge: {
        display: "inline-block",
        padding: "6px 16px",
        borderRadius: "9999px",
        backgroundColor: "#e0e7ff",
        color: "#4338ca",
        fontSize: "14px",
        fontWeight: "600",
        marginBottom: "16px",
    },
    title: {
        fontSize: "clamp(2rem, 5vw, 2.75rem)",
        fontWeight: "800",
        lineHeight: "1.2",
        letterSpacing: "-0.02em",
        marginBottom: "16px",
    },
    gradientText: {
        background: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    description: {
        fontSize: "1.125rem",
        color: "#64748b",
        maxWidth: "680px",
        margin: "0 auto",
        lineHeight: "1.7",
    },
    teamSection: {
        marginBottom: "40px",
    },
    sectionTitle: {
        fontSize: "1.5rem",
        fontWeight: "700",
        textAlign: "center",
        marginBottom: "32px",
        color: "#0f172a",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
    },
    card: {
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "20px",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
    },
    avatar: {
        width: "48px",
        height: "48px",
        borderRadius: "12px",
        backgroundColor: "#eef2ff",
        color: "#4f46e5",
        fontWeight: "700",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },
    memberName: {
        fontSize: "1rem",
        fontWeight: "600",
        color: "#0f172a",
        margin: "0 0 4px 0",
    },
    memberRole: {
        fontSize: "0.875rem",
        color: "#64748b",
        margin: 0,
    },
    footerNote: {
        textAlign: "center",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#f8fafc",
        color: "#64748b",
        fontSize: "0.95rem",
        fontWeight: "500",
    },
};

export default About;