let clickCount = 0;

function showInterstitialAd() {
    alert('Interstitial Ad Demo - This is where a full-screen ad would appear!');
}

function trackClick() {
    clickCount++;
    if (clickCount % 3 === 0) {
        showInterstitialAd();
    }
}

function navigateToSection(sectionId) {
    const sections = document.querySelectorAll('.screen');
    sections.forEach(section => section.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        window.scrollTo(0, 0);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            trackClick();
            navigateToSection(section);
        });
    });

    const backButtons = document.querySelectorAll('.back-btn');
    backButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            navigateToSection('home');
        });
    });

    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const userMsg = document.createElement('div');
            userMsg.className = 'message user-message';
            userMsg.innerHTML = `<strong>You:</strong> ${message}`;
            chatMessages.appendChild(userMsg);

            chatInput.value = '';

            setTimeout(() => {
                const aiResponses = [
                    "That's an interesting question! Let me help you with that.",
                    "I understand what you're asking. Here's what I think...",
                    "Great question! Based on my knowledge, I'd say...",
                    "I can definitely help you with that. Here's my response...",
                    "That's a good point. Let me provide some insights..."
                ];
                const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

                const aiMsg = document.createElement('div');
                aiMsg.className = 'message ai-message';
                aiMsg.innerHTML = `<strong>AI:</strong> ${randomResponse}`;
                chatMessages.appendChild(aiMsg);

                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);

            chatMessages.scrollTop = chatMessages.scrollHeight;
            trackClick();
        }
    }

    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    document.getElementById('generateResume').addEventListener('click', function() {
        const name = document.getElementById('resumeName').value.trim();
        const skills = document.getElementById('resumeSkills').value.trim();
        const education = document.getElementById('resumeEducation').value.trim();

        if (!name || !skills || !education) {
            alert('Please fill in all fields!');
            return;
        }

        const resume = `
═══════════════════════════════════════════
                 PROFESSIONAL RESUME
═══════════════════════════════════════════

NAME: ${name}

SKILLS:
${skills.split(',').map(skill => `• ${skill.trim()}`).join('\n')}

EDUCATION:
${education}

SUMMARY:
Highly motivated professional with expertise in ${skills.split(',')[0].trim()} and related fields.
Committed to excellence and continuous learning.

═══════════════════════════════════════════
        `;

        document.getElementById('resumeOutput').textContent = resume;
        trackClick();
    });

    document.getElementById('generateCaptions').addEventListener('click', function() {
        const topic = document.getElementById('captionTopic').value.trim();

        if (!topic) {
            alert('Please enter a topic!');
            return;
        }

        const captions = `
📸 FUNNY CAPTION:
"When life gives you ${topic}, make sure to take a selfie! 😂 #${topic}Life #LivingMyBestLife"

😎 ATTITUDE CAPTION:
"I don't chase ${topic}, I attract it. ✨ #Boss #${topic}Vibes #Unstoppable"

❤️ LOVE CAPTION:
"In a world full of chaos, ${topic} reminds me of the beauty in simple moments. 💕 #Love #${topic}Love #Grateful"
        `;

        document.getElementById('captionOutput').textContent = captions;
        trackClick();
    });

    document.getElementById('solveHomework').addEventListener('click', function() {
        const question = document.getElementById('homeworkQuestion').value.trim();

        if (!question) {
            alert('Please enter a question!');
            return;
        }

        const answer = `
QUESTION: ${question}

ANSWER:
This is a great question! Let me break it down for you in simple terms:

1. First, understand the core concept: The question is asking about a specific topic that requires careful analysis.

2. Key Points to Remember:
   • Always start with the basics
   • Break complex problems into smaller parts
   • Apply relevant formulas or concepts
   • Check your work

3. Simple Explanation:
   The answer involves understanding the fundamental principles and applying them step by step.
   Make sure to review your textbook or class notes for similar examples.

4. Pro Tip: Practice similar problems to strengthen your understanding!

Need more help? Try rephrasing the question or asking your teacher for additional guidance.
        `;

        document.getElementById('homeworkOutput').textContent = answer;
        trackClick();
    });

    document.getElementById('generateBusinessNames').addEventListener('click', function() {
        const businessType = document.getElementById('businessType').value.trim();

        if (!businessType) {
            alert('Please enter a business type!');
            return;
        }

        const prefixes = ['Tech', 'Pro', 'Elite', 'Prime', 'Smart', 'Swift', 'Next', 'Peak', 'Nova', 'Apex'];
        const suffixes = ['Hub', 'Pro', 'Labs', 'Works', 'Solutions', 'Group', 'Co', 'Studio', 'Zone', 'Spot'];

        const names = [];
        for (let i = 0; i < 5; i++) {
            const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
            const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
            const typeWord = businessType.split(' ')[0];
            const capitalizedType = typeWord.charAt(0).toUpperCase() + typeWord.slice(1);

            if (i % 2 === 0) {
                names.push(`${prefix}${capitalizedType}`);
            } else {
                names.push(`${capitalizedType}${suffix}`);
            }
        }

        const output = `
🚀 BUSINESS NAME IDEAS FOR YOUR ${businessType.toUpperCase()}:

1. ${names[0]}
   → Modern and professional name that stands out

2. ${names[1]}
   → Memorable and easy to brand

3. ${names[2]}
   → Creative and unique identity

4. ${names[3]}
   → Strong market presence

5. ${names[4]}
   → Perfect for growth and expansion

💡 TIP: Check domain availability before finalizing!
        `;

        document.getElementById('businessOutput').textContent = output;
        trackClick();
    });

    document.getElementById('getFarmingTips').addEventListener('click', function() {
        const crop = document.getElementById('cropName').value.trim();

        if (!crop) {
            alert('Please enter a crop name!');
            return;
        }

        const tips = `
🌾 FARMING TIPS FOR ${crop.toUpperCase()}:

1. SOIL PREPARATION:
   • Ensure proper soil pH levels (6.0-7.0 is ideal for most crops)
   • Add organic compost to improve soil fertility
   • Remove weeds and debris before planting

2. PLANTING SEASON:
   • Plant during the optimal season for ${crop}
   • Check local weather patterns
   • Maintain proper spacing between plants

3. WATERING:
   • Water regularly but avoid overwatering
   • Early morning watering is most effective
   • Ensure good drainage to prevent root rot

4. FERTILIZATION:
   • Use balanced NPK fertilizer
   • Apply organic manure every 2-3 weeks
   • Monitor plant growth and adjust nutrients

5. PEST CONTROL:
   • Inspect plants regularly for pests
   • Use natural pest control methods when possible
   • Remove infected plants immediately

6. HARVESTING:
   • Harvest at the right maturity stage
   • Use proper tools to avoid crop damage
   • Store in cool, dry conditions

🌱 BONUS TIP: Keep a farming journal to track what works best for your ${crop} crop!
        `;

        document.getElementById('farmingOutput').textContent = tips;
        trackClick();
    });
});
