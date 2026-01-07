exports.handler = async function(event, context) {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { username, password } = JSON.parse(event.body);

    const database = {
        '70': { 
            name: "TARGET: SHARMA HITESH", 
            type: "prank",
            // This HTML now includes the images from your 'evidence' folder
            content: `
                "<h2 style='color: #fbbf24;'>⚠ WARNING: ROAST IN PROGRESS</h2><p>System is currently compiling the ultimate compilation of awkward moments.<br><b>Status:</b>Hitesh's Sexy videos are Loading Rendering... 99%</p>" 
                <div style='display: grid; grid-template-columns: 1fr 1fr; gap: 15px;'>
                    <img src='/evidence/1.jpg' style='width: 100%; border: 2px solid #fbbf24; border-radius: 5px; opacity: 0.9;'>
                    <img src='/evidence/2.jpg' style='width: 100%; border: 2px solid #fbbf24; border-radius: 5px; opacity: 0.9;'>
                    <img src='/evidence/3.jpg' style='width: 100%; border: 2px solid #fbbf24; border-radius: 5px; opacity: 0.9;'>
                    <img src='/evidence/4.jpg' style='width: 100%; border: 2px solid #fbbf24; border-radius: 5px; opacity: 0.9;'>
                </div>
            ` 
        },
        '90': { name: "Vishal Chick", type: "standard", content: "Vishal's Folder.<br>Status: Encrypted." },
        '99': { name: "Dhiraj Pal", type: "standard", content: "Dhiraj's Folder.<br>Status: Encrypted." },
        '76': { name: "Malav Chauhan", type: "standard", content: "Malav's Folder.<br>Status: Encrypted." },
        '89': { name: "Rudra Thakor", type: "standard", content: "Rudra's Folder.<br>Status: Encrypted." }
    };

    if (username === '1' && database[password]) {
        return {
            statusCode: 200,
            body: JSON.stringify({ success: true, profile: database[password] })
        };
    } else {
        return {
            statusCode: 401,
            body: JSON.stringify({ success: false, message: "ACCESS DENIED" })
        };
    }
};