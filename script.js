// script.js
function showQA(topic) {
    const qaContent = document.getElementById('qaContent');
    let content = '';

    switch (topic) {
        case 'conduct':
            content = `
                <h2>Conduct Rules, Ethics & Professional Practice</h2>
                <p><strong>Q:</strong> What are the key principles of SCSI/RICS ethical standards?</p>
                <p><strong>A:</strong> Act with integrity, provide a high level of service, maintain trust, treat others with respect, and take responsibility.</p>
                <p><strong>Q:</strong> How do you handle conflicts of interest?</p>
                <p><strong>A:</strong> I disclose potential conflicts early and act impartially, avoiding situations that may affect client interests.</p>
                <p><strong>Q:</strong> Can you explain the importance of professional indemnity insurance (PII)?</p>
                <p><strong>A:</strong> PII protects against financial claims due to errors, ensuring client compensation and professional integrity.</p>
                <p><strong>Q:</strong> What is the role of CPD in maintaining competence?</p>
                <p><strong>A:</strong> CPD keeps professionals updated on industry practices, regulations, and new technologies.</p>
                <p><strong>Q:</strong> How do you ensure compliance with SCSI/RICS rules of conduct?</p>
                <p><strong>A:</strong> I follow ethical standards, stay updated on regulations, and ensure professionalism in all interactions.</p>
            `;
            break;
        case 'clientCare':
            content = `
                <h2>Client Care</h2>
                <p><strong>Q:</strong> What are the key elements of effective client care?</p>
                <p><strong>A:</strong> Understanding needs, clear communication, timely service, and managing expectations.</p>
                <p><strong>Q:</strong> How do you handle client complaints?</p>
                <p><strong>A:</strong> I follow a structured process: acknowledge, investigate, and resolve while keeping the client informed.</p>
                <p><strong>Q:</strong> How do you determine the scope of your services?</p>
                <p><strong>A:</strong> I define it clearly in contracts, ensuring it aligns with my competencies and insurance coverage.</p>
                <p><strong>Q:</strong> What steps do you take to confirm a client’s brief?</p>
                <p><strong>A:</strong> I engage in discussions, document requirements, and get written confirmation.</p>
                <p><strong>Q:</strong> How do you establish communication systems with stakeholders?</p>
                <p><strong>A:</strong> I set up regular meetings, progress reports, and digital platforms for consistent updates.</p>
            `;
            break;
        // Add similar case blocks for each competency (as needed)
        default:
            content = `<h2>Welcome to SCSI APC Interview Q&A</h2><p>Select a competency from the left menu to view related Q&A.</p>`;
    }

    qaContent.innerHTML = content;
}
