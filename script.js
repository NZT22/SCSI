// script.js
function showQA(topic) {
    const qaContent = document.getElementById('qaContent');
    let content = '';

    switch (topic) {
        case 'conduct':
            content = `
                <h2>Conduct Rules, Ethics and Professional Practice</h2>
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
        case 'communication':
            content = `
                <h2>Communication and Negotiation</h2>
                <p><strong>Q:</strong> How do you ensure effective communication across a project?</p>
                <p><strong>A:</strong> I use clear language, visuals, and regular updates tailored to the audience.</p>
                <p><strong>Q:</strong> Can you give an example of a successful negotiation you handled?</p>
                <p><strong>A:</strong> I negotiated with a subcontractor to avoid extra costs by reviewing contract terms and reaching a compromise.</p>
                <p><strong>Q:</strong> Why are negotiation skills important in construction projects?</p>
                <p><strong>A:</strong> They help manage variations, settle disputes, and maintain relationships.</p>
                <p><strong>Q:</strong> How do you prepare for a negotiation?</p>
                <p><strong>A:</strong> I set clear objectives, understand both parties' needs, and gather relevant information.</p>
                <p><strong>Q:</strong> How do you communicate technical information to non-technical stakeholders?</p>
                <p><strong>A:</strong> I simplify explanations, use visuals, and avoid jargon.</p>
            `;
            break;
        case 'healthSafety':
            content = `
                <h2>Health and Safety</h2>
                <p><strong>Q:</strong> What are the main health and safety regulations you need to comply with?</p>
                <p><strong>A:</strong> Key regulations include the Safety, Health, and Welfare at Work Act and Construction Regulations.</p>
                <p><strong>Q:</strong> How do you ensure personal safety during site visits?</p>
                <p><strong>A:</strong> I follow site protocols, wear PPE, and attend safety inductions.</p>
                <p><strong>Q:</strong> How do you incorporate health and safety in tender reviews?</p>
                <p><strong>A:</strong> I ensure that risk assessments and safety measures are included in bids.</p>
                <p><strong>Q:</strong> Can you provide an example of addressing a health and safety issue?</p>
                <p><strong>A:</strong> I identified and resolved inadequate fall protection by coordinating with contractors.</p>
                <p><strong>Q:</strong> How do you manage health and safety training for staff?</p>
                <p><strong>A:</strong> I organize site inductions, toolbox talks, and refresher courses.</p>
            `;
            break;
        case 'accounting':
            content = `
                <h2>Accounting Principles and Procedures</h2>
                <p><strong>Q:</strong> What are the fundamental accounting principles you must understand?</p>
                <p><strong>A:</strong> Profit and loss, cash flow, and GAAP.</p>
                <p><strong>Q:</strong> How do you analyze a contractor’s financial stability?</p>
                <p><strong>A:</strong> I review financial statements to assess liquidity and solvency.</p>
                <p><strong>Q:</strong> How do you manage cash flow for a construction project?</p>
                <p><strong>A:</strong> I prepare cash flow forecasts and monitor payments and expenses.</p>
                <p><strong>Q:</strong> Can you explain the difference between profit and cash flow?</p>
                <p><strong>A:</strong> Profit is surplus after expenses; cash flow is the actual movement of money.</p>
                <p><strong>Q:</strong> What kind of information can a balance sheet provide?</p>
                <p><strong>A:</strong> It shows assets, liabilities, and equity, helping assess financial stability.</p>
            `;
            break;
        case 'businessPlanning':
            content = `
                <h2>Business Planning</h2>
                <p><strong>Q:</strong> What are the different types of business plans?</p>
                <p><strong>A:</strong> Strategic, operational, departmental, and project-specific plans.</p>
                <p><strong>Q:</strong> How do strategic and operational plans differ?</p>
                <p><strong>A:</strong> Strategic plans are long-term; operational plans focus on day-to-day activities.</p>
                <p><strong>Q:</strong> Why is it important to align departmental plans with strategic plans?</p>
                <p><strong>A:</strong> It ensures all teams work towards common goals, improving efficiency.</p>
                <p><strong>Q:</strong> How do you use benchmarking in business planning?</p>
                <p><strong>A:</strong> I compare performance metrics against industry standards to set targets.</p>
                <p><strong>Q:</strong> Can you give an example of contributing to a project-specific plan?</p>
                <p><strong>A:</strong> I developed cost forecasts and scheduling plans to ensure efficient resource allocation.</p>
            `;
            break;
        case 'conflict':
            content = `
                <h2>Conflict Avoidance and Dispute Resolution</h2>
                <p><strong>Q:</strong> What are the common causes of disputes in construction?</p>
                <p><strong>A:</strong> Unclear contracts, scope changes, payment delays, and quality issues.</p>
                <p><strong>Q:</strong> How do you manage conflicts before they become disputes?</p>
                <p><strong>A:</strong> I address issues proactively through clear communication and risk management.</p>
                <p><strong>Q:</strong> Can you explain the different dispute resolution methods?</p>
                <p><strong>A:</strong> Negotiation, mediation, adjudication, and arbitration.</p>
                <p><strong>Q:</strong> How do you decide which dispute resolution method to use?</p>
                <p><strong>A:</strong> I consider the nature of the dispute, costs, and relationship dynamics.</p>
                <p><strong>Q:</strong> Can you provide an example of resolving a conflict on a project?</p>
                <p><strong>A:</strong> I facilitated a meeting to negotiate a solution over additional work disputes.</p>
            `;
            break;
        case 'dataManagement':
            content = `
                <h2>Data Management</h2>
                <p><strong>Q:</strong> How do you ensure data is managed effectively?</p>
                <p><strong>A:</strong> I use standardized systems for data storage, security, and access control.</p>
                <p><strong>Q:</strong> What are key considerations for data security in projects?</p>
                <p><strong>A:</strong> Access control, encryption, secure storage, and compliance with regulations.</p>
                <p><strong>Q:</strong> How do you use data to improve project outcomes?</p>
                <p><strong>A:</strong> I analyze data to identify trends, forecast costs, and measure performance.</p>
                <p><strong>Q:</strong> Can you give an example of using data management tools?</p>
                <p><strong>A:</strong> I utilized a centralized database to track costs, schedules, and correspondence.</p>
                <p><strong>Q:</strong> How do you ensure compliance with data protection regulations?</p>
                <p><strong>A:</strong> I follow company policies, secure storage, and conduct regular audits.</p>
            `;
            break;
        case 'sustainability':
            content = `
                <h2>Sustainability</h2>
                <p><strong>Q:</strong> What is the importance of sustainability in construction?</p>
                <p><strong>A:</strong> It minimizes environmental impact and aligns with regulatory and client expectations.</p>
                <p><strong>Q:</strong> How do you incorporate sustainability into cost planning?</p>
                <p><strong>A:</strong> I consider sustainable materials, energy-efficient systems, and lifecycle costs.</p>
                <p><strong>Q:</strong> Can you provide an example of a sustainable solution?</p>
                <p><strong>A:</strong> I recommended using recycled aggregates to reduce costs and environmental impact.</p>
                <p><strong>Q:</strong> How do you assess the financial impact of sustainability measures?</p>
                <p><strong>A:</strong> I use lifecycle cost analysis to compare benefits against initial investment.</p>
                <p><strong>Q:</strong> How do you ensure compliance with sustainability regulations?</p>
                <p><strong>A:</strong> I use checklists during design reviews and consult specialists.</p>
            `;
            break;
        case 'diversity':
            content = `
                <h2>Diversity and Inclusion</h2>
                <p><strong>Q:</strong> Why is diversity important in construction teams?</p>
                <p><strong>A:</strong> Diversity brings innovative solutions and better decision-making.</p>
                <p><strong>Q:</strong> How do you promote inclusion within your team?</p>
                <p><strong>A:</strong> I encourage input from all team members and ensure equal opportunities.</p>
                <p><strong>Q:</strong> Can you give an example of working in a diverse team?</p>
                <p><strong>A:</strong> I managed a team from diverse backgrounds, ensuring everyone's input was valued.</p>
                <p><strong>Q:</strong> How do you address unconscious bias?</p>
                <p><strong>A:</strong> I attend training and make objective decisions based on facts.</p>
                <p><strong>Q:</strong> How do you ensure effective team communication?</p>
                <p><strong>A:</strong> I use clear language, set regular meetings, and utilize project management tools.</p>
            `;
            break;
        case 'inclusiveEnvironment':
            content = `
                <h2>Inclusive Environment</h2>
                <p><strong>Q:</strong> What are the key principles of creating an inclusive environment?</p>
                <p><strong>A:</strong> Ensuring accessibility, safety, and comfort for all users.</p>
                <p><strong>Q:</strong> How do you incorporate inclusivity in projects?</p>
                <p><strong>A:</strong> I ensure designs meet accessibility standards from the start.</p>
                <p><strong>Q:</strong> Can you give an example of improving inclusivity on a project?</p>
                <p><strong>A:</strong> I suggested tactile paving for visually impaired users at crossings.</p>
                <p><strong>Q:</strong> How do you ensure compliance with inclusivity policies?</p>
                <p><strong>A:</strong> I consult with specialists and review planning policies.</p>
                <p><strong>Q:</strong> What is the difference between ethical and legal requirements for inclusivity?</p>
                <p><strong>A:</strong> Legal sets minimum standards; ethical aims to enhance user experience beyond compliance.</p>
            `;
            break;
        default:
            content = `<h2>Welcome to SCSI APC Interview Q&A</h2><p>Select a competency from the left menu to view related Q&A.</p>`;
    }

    qaContent.innerHTML = content;
}
