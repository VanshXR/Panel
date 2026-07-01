// --- ALL INDIAN STATES & MAJOR DISTRICTS COMPLETE GRAPH LAYER MAP ---
const INDIAN_STATES_DISTRICTS_MAP = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Visakhapatnam", "West Godavari"],
    "Arunachal Pradesh": ["Changlang", "Dibang Valley", "East Kameng", "Itanagar", "Tawang", "Tirap", "West Kameng"],
    "Assam": ["Baksa", "Barpeta", "Cachar", "Dibrugarh", "Guwahati", "Jorhat", "Nagaon", "Silchar", "Tezpur", "Tinsukia"],
    "Bihar": ["Araria", "Banki", "Bhagalpur", "Bhojpur", "Gaya", "Muzaffarpur", "Nalanda", "Patna", "Purnia", "Vaishali"],
    "Chhattisgarh": ["Bastar", "Bhilai", "Bilaspur", "Durg", "Korba", "Raigarh", "Raipur", "Rajnandgaon"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "Shahdara", "South Delhi", "West Delhi"],
    "Goa": ["North Goa", "South Goa", "Panaji", "Margao", "Vasco da Gama"],
    "Gujarat": ["Ahmedabad", "Anand", "Bhavnagar", "Gandhinagar", "Jamnagar", "Junagadh", "Rajkot", "Surat", "Vadodara"],
    "Haryana": ["Ambala", "Bhiwani", "Faridabad", "Gurugram", "Hisar", "Karnal", "Panipat", "Rohtak", "Sonipat"],
    "Himachal Pradesh": ["Chamba", "Hamirpur", "Kangra", "Kullu", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    "Jharkhand": ["Bokaro", "Dhanbad", "Dumka", "Garhwa", "Hazaribagh", "Jamshedpur", "Palamu", "Ranchi", "West Singhbhum"],
    "Karnataka": ["Belagavi", "Bengaluru Urban", "Bengaluru Rural", "Bidar", "Ballari", "Dakshina Kannada", "Hubballi", "Kalaburagi", "Mysuru", "Udupi"],
    "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kochi", "Kollam", "Kottayam", "Kozhikode", "Thiruvananthapuram", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Chhindwara", "Gwalior", "Indore", "Jabalpur", "Rewa", "Sagar", "Satna", "Ujjain"],
    "Maharashtra": ["Ahmednagar", "Aurangabad", "Amravati", "Kolhapur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nashik", "Navi Mumbai", "Pune", "Thane"],
    "Manipur": ["Bishnupur", "Churachandpur", "Imphal East", "Imphal West", "Senapati", "Thoubal"],
    "Meghalaya": ["East Garo Hills", "East Khasi Hills", "Jowai", "Shillong", "Tura", "West Jaintia Hills"],
    "Mizoram": ["Aizawl", "Champhai", "Kolasib", "Lunglei", "Mamit", "Serchhip"],
    "Nagaland": ["Dimapur", "Kohima", "Mokokchung", "Mon", "Peren", "Phek", "Wokha", "Zunheboto"],
    "Odisha": ["Balasore", "Bhadrak", "Bhubaneswar", "Cuttack", "Ganjam", "Puri", "Rourkela", "Sambalpur"],
    "Punjab": ["Amritsar", "Bathinda", "Firozpur", "Jalandhar", "Ludhiana", "Mohali", "Patiala", "Pathankot"],
    "Rajasthan": ["Ajmer", "Alwar", "Bikaner", "Bharatpur", "Bhilwara", "Jaipur", "Jodhpur", "Kota", "Sikar", "Udaipur"],
    "Sikkim": ["East Sikkim", "Gangtok", "Mangan", "Namchi", "North Sikkim", "West Sikkim"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Cuddalore", "Erode", "Madurai", "Salem", "Thanjavur", "Trichy", "Tirunelveli", "Vellore"],
    "Telangana": ["Hyderabad", "Karimnagar", "Khammam", "Mahabubnagar", "Nalgonda", "Nizamabad", "Secunderabad", "Warangal"],
    "Tripura": ["Agartala", "Dhalai", "Gomati", "North Tripura", "South Tripura", "West Tripura"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Bareilly", "Ghaziabad", "Gorakhpur", "Jhansi", "Kanpur", "Lucknow", "Meerut", "Moradabad", "Noida", "Prayagraj", "Varanasi"],
    "Uttarakhand": ["Almora", "Dehradun", "Haridwar", "Nainital", "Pithoragarh", "Rishikesh", "Roorkee", "Udham Singh Nagar"],
    "West Bengal": ["Asansol", "Darjeeling", "Durgapur", "Hooghly", "Howrah", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Siliguri", "South 24 Parganas"]
};

const INITIAL_MOTIVATIONAL_QUOTES = [
    { text: "Do not wait for leaders. Become one.", hindi: "नेताओं का इंतजार न करें। खुद नेता बनें।" },
    { text: "India changes when its youth chooses action over silence.", hindi: "भारत तब बदलता है जब उसका युवा चुप्पी के बजाय एक्शन चुनता है।" },
    { text: "The future of India is written by those who dare to improve the present.", hindi: "भारत का भविष्य उनके द्वारा लिखा जाता है जो वर्तमान को सुधारने का साहस करते हैं।" },
    { text: "Be the reason your city becomes better tomorrow.", hindi: "अपने शहर के कल बेहतर होने की वजह खुद बनें।" }
];

const DEFAULT_FOUNDER_STATE = {
    name: "Vibhanshu Kumar",
    email: "vibhanshu.kumar@genzsofindia.org",
    statement: "Welcome to Genz's Of India.\nThis platform was created with a simple vision — to unite young Indians and encourage them to actively participate in improving society.\nChange starts with ordinary people taking extraordinary responsibility."
};

// ENFORCED CRITICAL REQUEST: EXACT REQUIRED SECURE MASTER REGISTRY 
const SECURE_MASTER_REGISTRY = [
    { 
        name: "Platform System Admin", 
        email: "itzvanshxr@gmail.com", 
        pass: "9518401490thth", 
        role: "Admin",
        avatar: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%2300F0FF'/><text x='50%' y='55%' font-size='40' font-weight='bold' font-family='sans-serif' fill='black' text-anchor='middle'>A</text></svg>"
    }
];

let DEFAULT_POLL_DATA = {
    title: "Should digital crowd-sourced citizen dashboards track municipal allocations of city road budgets?",
    options: [
        { id: 0, text: "Yes, absolute algorithmic transparency is mandatory.", votes: 12 },
        { id: 1, text: "No, classic traditional auditing schemas are enough.", votes: 4 }
    ],
    votersRegistry: []
};

// State Buffers Loading Extensions
let userContext = JSON.parse(localStorage.getItem('goi_v6_active_user')) || null;
let accounts = JSON.parse(localStorage.getItem('goi_v6_accounts')) || SECURE_MASTER_REGISTRY;
let posts = JSON.parse(localStorage.getItem('goi_v6_posts')) || []; 
let issues = JSON.parse(localStorage.getItem('goi_v6_issues')) || [];
let founderConfig = JSON.parse(localStorage.getItem('goi_v6_founder')) || DEFAULT_FOUNDER_STATE;
let volunteerApps = JSON.parse(localStorage.getItem('goi_v6_volunteers')) || [];
let activePollEngine = JSON.parse(localStorage.getItem('goi_v6_poll_data')) || DEFAULT_POLL_DATA;

let currentAuthMode = 'login';
let currentMapFilter = 'All Territories';
let temporaryEncodedPostImageString = "";
let temporaryEncodedCivicAuditImageString = "";

function generateDefaultUserAvatarSVGString(char) {
    return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100%' height='100%' fill='%2300E676'/><text x='50%' y='55%' font-size='40' font-weight='bold' font-family='sans-serif' fill='black' text-anchor='middle'>${char.toUpperCase()}</text></svg>`;
}

// --- INITIAL CONFIG INITIALIZATION ---
window.addEventListener('DOMContentLoaded', () => {
    // Sync missing master records if array got reset
    if (!accounts.some(a => a.email.toLowerCase() === "itzvanshxr@gmail.com")) {
        accounts.push(SECURE_MASTER_REGISTRY[0]);
    }
    localStorage.setItem('goi_v6_accounts', JSON.stringify(accounts));
    if(!localStorage.getItem('goi_v6_posts')) localStorage.setItem('goi_v6_posts', JSON.stringify(posts));
    if(!localStorage.getItem('goi_v6_issues')) localStorage.setItem('goi_v6_issues', JSON.stringify(issues));
    if(!localStorage.getItem('goi_v6_founder')) localStorage.setItem('goi_v6_founder', JSON.stringify(founderConfig));
    if(!localStorage.getItem('goi_v6_poll_data')) localStorage.setItem('goi_v6_poll_data', JSON.stringify(activePollEngine));

    lucide.createIcons();
    renderMotivationalQuotesBlock();
    executePollLayoutRedeployment();
    renderDynamicFounderBlock();
    buildTerritorialDropdownMenus();
    renderIssuesStack();
    renderCommunityFeed();
    updateIdentityAuthUI();
    recomputeAndRenderPublicTelemetryStats();
});

function switchTab(tabId) {
    const screens = ['home', 'about', 'feed', 'map-section', 'join', 'dashboard', 'admin'];
    screens.forEach(s => {
        const viewEl = document.getElementById(`view-${s}`);
        if(viewEl) viewEl.classList.add('hidden');
    });
    const targetEl = document.getElementById(`view-${tabId}`);
    if(targetEl) targetEl.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// FIXED CRITICAL CRITERIA: Clear inputs entirely, open login popup cleanly. Password must be typed.
function autoFillAdminAuth() {
    setAuthLayoutEngineMode('login');
    openAuthModal();
    alert("🔐 Admin Login Node Protocol Activated:\nPlease enter the specified admin email (itzvanshxr@gmail.com) and password sequence manually inside the authorization module terminal.");
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
}

function setAuthLayoutEngineMode(mode) {
    currentAuthMode = mode;
    document.getElementById('auth-email').value = "";
    document.getElementById('auth-pass').value = "";
    document.getElementById('auth-name').value = "";
    const btnLogin = document.getElementById('auth-toggle-login');
    const btnReg = document.getElementById('auth-toggle-reg');
    const nameWrap = document.getElementById('reg-name-wrapper');

    if(mode === 'login') {
        btnLogin.className = "text-neonCyan border-b-2 border-neonCyan pb-1 cursor-pointer";
        btnReg.className = "text-slate-500 cursor-pointer";
        nameWrap.classList.add('hidden');
    } else {
        btnReg.className = "text-neonCyan border-b-2 border-neonCyan pb-1 cursor-pointer";
        btnLogin.className = "text-slate-500 cursor-pointer";
        nameWrap.classList.remove('hidden');
    }
}

function executeIdentityVerificationFlow(e) {
    e.preventDefault();
    const email = document.getElementById('auth-email').value.trim();
    const pass = document.getElementById('auth-pass').value;
    const name = document.getElementById('auth-name').value.trim();

    if(currentAuthMode === 'reg') {
        const matchCheck = accounts.find(a => a.email.toLowerCase() === email.toLowerCase());
        if(matchCheck) { alert('Identity allocation conflict: Email route already occupied.'); return; }
        
        const avatarStr = generateDefaultUserAvatarSVGString(name ? name[0] : email[0]);
        const newUserPayload = {
            name: name || email.split('@')[0],
            email: email,
            pass: pass,
            role: (email.toLowerCase() === 'itzvanshxr@gmail.com' ? 'Admin' : 'User'),
            avatar: avatarStr
        };
        
        accounts.push(newUserPayload);
        localStorage.setItem('goi_v6_accounts', JSON.stringify(accounts));
        userContext = newUserPayload;
    } else {
        const verifiedNode = accounts.find(a => a.email.toLowerCase() === email.toLowerCase() && a.pass === pass);
        if(!verifiedNode) { alert('Access identification failed. Match not verified in cluster registry maps.'); return; }
        userContext = verifiedNode;
    }

    localStorage.setItem('goi_v6_active_user', JSON.stringify(userContext));
    closeAuthModal();
    updateIdentityAuthUI();
    executePollLayoutRedeployment();
    renderCommunityFeed();
    recomputeAndRenderPublicTelemetryStats();
    alert(`Ecosystem node connected securely as: ${userContext.name}`);
}

function executeLogoutSequence() {
    userContext = null;
    localStorage.removeItem('goi_v6_active_user');
    updateIdentityAuthUI();
    executePollLayoutRedeployment();
    renderCommunityFeed();
    switchTab('home');
}

function updateIdentityAuthUI() {
    const actionZoneSlot = document.getElementById('auth-action-zone');
    if(userContext) {
        document.getElementById('user-dash-name').innerText = userContext.name;
        document.getElementById('user-dash-email').innerText = userContext.email;
        document.getElementById('user-dash-role').innerText = `System Rank Auth: ${userContext.role.toUpperCase()}`;
        document.getElementById('user-dash-avatar-display').src = userContext.avatar || generateDefaultUserAvatarSVGString(userContext.name[0]);

        let customDOMBuffer = `<div class="flex items-center gap-2">
            <button onclick="switchTab('dashboard')" class="bg-slate-900 border border-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-black transition-colors hover:bg-slate-800">Profile</button>`;
        
        if(userContext.role === 'Admin') {
            customDOMBuffer += `<button onclick="switchTab('admin')" class="bg-red-950/50 border border-red-500 text-red-400 px-3 py-1.5 rounded-lg text-xs font-black transition-colors hover:bg-red-900/40">Admin Panel</button>`;
            
            // Populate Poll Editor Configuration Strings
            document.getElementById('adm-poll-title-input').value = activePollEngine.title;
            document.getElementById('adm-poll-opt0-input').value = activePollEngine.options[0].text;
            document.getElementById('adm-poll-opt1-input').value = activePollEngine.options[1].text;
        }
        
        customDOMBuffer += `<button onclick="executeLogoutSequence()" class="text-slate-400 hover:text-white p-1 ml-1 transition-colors"><i data-lucide="log-out" class="w-4 h-4"></i></button></div>`;
        actionZoneSlot.innerHTML = customDOMBuffer;
    } else {
        actionZoneSlot.innerHTML = `<button onclick="openAuthModal()" class="bg-gradient-to-r from-neonCyan to-cyberPurple text-white px-5 py-2.5 rounded-xl font-black text-xs shadow-md transition-all active:scale-95">Establish Login</button>`;
    }
    lucide.createIcons();
    renderAdminControlLists();
}

function recomputeAndRenderPublicTelemetryStats() {
    document.getElementById('stat-total-users').innerText = accounts.length;
    document.getElementById('stat-total-issues').innerText = issues.length;
    document.getElementById('stat-total-volunteers').innerText = volunteerApps.length;
    document.getElementById('stat-total-posts').innerText = posts.length;
}

function renderMotivationalQuotesBlock() {
    const grid = document.getElementById('quotes-dynamic-grid');
    if(!grid) return;
    grid.innerHTML = INITIAL_MOTIVATIONAL_QUOTES.map(q => `
        <div class="p-4 rounded-xl bg-cardBg border border-cyan-500/5 shadow-md flex flex-col justify-between space-y-2">
            <p class="text-xs text-slate-300 font-bold leading-relaxed">"${q.text}"</p>
            <p class="text-[10px] text-neonOrange font-medium italic border-t border-white/5 pt-1.5 tracking-tight">${q.hindi}</p>
        </div>
    `).join('');
}

function executePollLayoutRedeployment() {
    const titleViewSlot = document.getElementById('home-poll-title');
    const optionsViewSlot = document.getElementById('home-poll-options');
    const metaSlot = document.getElementById('poll-meta-status');
    if(!titleViewSlot || !optionsViewSlot) return;

    titleViewSlot.innerText = activePollEngine.title;
    const totalVotes = activePollEngine.options.reduce((sum, o) => sum + o.votes, 0);
    const checkingUserVoteState = userContext && activePollEngine.votersRegistry.includes(userContext.email.toLowerCase());

    if(checkingUserVoteState) {
        optionsViewSlot.innerHTML = activePollEngine.options.map(o => {
            const percentage = totalVotes > 0 ? Math.round((o.votes / totalVotes) * 100) : 0;
            return `
                <div class="space-y-1 text-xs">
                    <div class="flex justify-between font-mono font-bold text-slate-300">
                        <span>${o.text}</span>
                        <span class="text-neonCyan">${percentage}% (${o.votes} votes)</span>
                    </div>
                    <div class="w-full h-3 bg-spaceBg rounded-full overflow-hidden border border-white/5">
                        <div class="h-full bg-gradient-to-r from-neonCyan to-neonPink rounded-full" style="width: ${percentage}%"></div>
                    </div>
                </div>
            `;
        }).join('');
        metaSlot.innerText = "🔒 Ballot locked: Unique account token index cataloged.";
    } else {
        optionsViewSlot.innerHTML = activePollEngine.options.map(o => `
            <button onclick="executeBallotVoteTransaction(${o.id})" class="w-full text-left p-4 bg-spaceBg border border-white/10 hover:border-neonCyan/50 rounded-xl font-bold text-xs text-slate-200 transition-all hover:bg-cardBg flex justify-between items-center group">
                <span>${o.text}</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-slate-600 group-hover:text-neonCyan transition-transform"></i>
            </button>
        `).join('');
        metaSlot.innerText = userContext ? "⚠️ File ballot selection metric node packet." : "🔒 System authentication token required to register ballot choice.";
    }
    lucide.createIcons();
}

function executeBallotVoteTransaction(optionId) {
    if(!userContext) { alert('Authentication token absent. Please log in first.'); openAuthModal(); return; }
    const emailToken = userContext.email.toLowerCase();
    if(activePollEngine.votersRegistry.includes(emailToken)) return;

    activePollEngine.options = activePollEngine.options.map(o => o.id === optionId ? { ...o, votes: o.votes + 1 } : o);
    activePollEngine.votersRegistry.push(emailToken);
    localStorage.setItem('goi_v6_poll_data', JSON.stringify(activePollEngine));
    executePollLayoutRedeployment();
}

// ADMIN POLL MANAGEMENT CONTROLLER INJECTION ROUTINE
function executePollUpdateFromAdmin() {
    if(!userContext || userContext.role !== 'Admin') return;
    const newTitle = document.getElementById('adm-poll-title-input').value.trim();
    const opt0Text = document.getElementById('adm-poll-opt0-input').value.trim();
    const opt1Text = document.getElementById('adm-poll-opt1-input').value.trim();

    if(!newTitle || !opt0Text || !opt1Text) { alert('All fields required to modulate active poll configurations.'); return; }

    activePollEngine.title = newTitle;
    activePollEngine.options[0].text = opt0Text;
    activePollEngine.options[1].text = opt1Text;
    // Wipe voter arrays map registry context gracefully for refreshed re-voting telemetry cycles
    activePollEngine.votersRegistry = [];
    activePollEngine.options[0].votes = 0;
    activePollEngine.options[1].votes = 0;

    localStorage.setItem('goi_v6_poll_data', JSON.stringify(activePollEngine));
    executePollLayoutRedeployment();
    alert('Ballot module config structures re-compiled completely across cluster nodes.');
}

function renderDynamicFounderBlock() {
    const card = document.getElementById('dynamic-founder-card');
    if(!card) return;
    card.innerHTML = `
        <h4 class="text-white font-black text-sm flex items-center gap-2"><i data-lucide="shield-check" class="text-neonCyan w-5 h-5"></i> Founder's Directive Matrix</h4>
        <p class="italic text-xs text-slate-300 leading-relaxed whitespace-pre-line">"${founderConfig.statement}"</p>
        <div class="pt-3 border-t border-white/5 flex justify-between items-center text-[10px]">
            <span class="text-slate-500 font-mono">${founderConfig.email}</span>
            <span class="font-black text-transparent bg-clip-text bg-gradient-to-r from-neonCyan to-neonPink">— ${founderConfig.name}</span>
        </div>
    `;
    lucide.createIcons();
}

function buildTerritorialDropdownMenus() {
    const filterSelect = document.getElementById('map-state-filter-dropdown');
    const formStateSelect = document.getElementById('rep-state');
    if(!filterSelect || !formStateSelect) return;

    const statesList = Object.keys(INDIAN_STATES_DISTRICTS_MAP).sort();
    let filterBuffer = `<option value="All Territories">All Territories (Whole India)</option>`;
    statesList.forEach(state => { filterBuffer += `<option value="${state}">${state}</option>`; });
    filterSelect.innerHTML = filterBuffer;

    let formStateBuffer = "";
    statesList.forEach(state => { formStateBuffer += `<option value="${state}">${state}</option>`; });
    formStateSelect.innerHTML = formStateBuffer;

    updateDistrictDropdownOptions(statesList[0], 'rep-district');
}

function updateDistrictDropdownOptions(selectedState, targetSelectId) {
    const districtSelectElement = document.getElementById(targetSelectId);
    if(!districtSelectElement) return;
    const districts = INDIAN_STATES_DISTRICTS_MAP[selectedState] || [];
    let buffer = "";
    districts.forEach(dist => { buffer += `<option value="${dist}">${dist}</option>`; });
    districtSelectElement.innerHTML = buffer;
}

function triggerMapFilteringExecution(targetStateValue) {
    currentMapFilter = targetStateValue;
    renderIssuesStack();
}

// PROCESSING CIVIC AUDIT IMAGE STREAM
function processCivicAuditImageUpload(event) {
    const file = event.target.files[0];
    if(!file) return;
    const rdr = new FileReader();
    rdr.onloadend = function() {
        temporaryEncodedCivicAuditImageString = rdr.result;
        document.getElementById('rep-img-preview-element').src = temporaryEncodedCivicAuditImageString;
        document.getElementById('rep-img-preview-container').classList.remove('hidden');
    };
    rdr.readAsDataURL(file);
}

function clearCivicAuditImageSelection() {
    temporaryEncodedCivicAuditImageString = "";
    const el = document.getElementById('rep-img-file');
    if(el) el.value = "";
    document.getElementById('rep-img-preview-container').classList.add('hidden');
    document.getElementById('rep-img-preview-element').src = "";
}

// --- DYNAMIC EMBEDDED COMMENT & LIKE MODULE ROUTINES FOR CIVIC AUDIT ALERT CORES ---
function renderIssuesStack() {
    const targetSlot = document.getElementById('reported-issues-list');
    if(!targetSlot) return;

    const filtered = currentMapFilter === 'All Territories' ? issues : issues.filter(i => i.state === currentMapFilter);

    if(filtered.length === 0) {
        targetSlot.innerHTML = `
            <div class="p-10 text-center text-xs text-slate-500 border border-dashed border-cyan-500/20 rounded-2xl bg-cardBg/40">
                <i data-lucide="map-pin" class="w-6 h-6 text-slate-600 mx-auto mb-2 animate-bounce"></i>
                No infrastructure alerts registered inside this selected geographic territory filter matrix index.
            </div>
        `;
        return;
    }

    targetSlot.innerHTML = filtered.map(i => {
        const issueLikes = i.likes || 0;
        const issueLikedByArray = i.likedBy || [];
        const isCurrentlyLikedByToken = userContext && issueLikedByArray.includes(userContext.email.toLowerCase());
        const commentStack = i.comments || [];

        let commentsHTMLSegment = "";
        if (commentStack.length > 0) {
            commentsHTMLSegment = commentStack.map(c => `
                <div class="p-2 bg-spaceBg/60 rounded-xl border border-white/5 space-y-0.5 text-[11px]">
                    <div class="flex justify-between text-slate-500 font-bold">
                        <span class="text-neonCyan tracking-tight">${c.author}</span>
                        <span>${new Date(c.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>
                    <p class="text-slate-300 leading-normal">${c.text}</p>
                </div>
            `).join('');
        } else {
            commentsHTMLSegment = `<p class="text-[10px] text-slate-600 italic pl-1">No dialogue stream nodes initialized here yet.</p>`;
        }

        return `
            <div class="p-5 rounded-2xl bg-cardBg border border-cyan-500/5 space-y-3 text-xs shadow-md">
                <div class="flex justify-between items-center flex-wrap gap-2">
                    <div class="flex items-center gap-2">
                        <span class="px-2.5 py-1 rounded-lg bg-spaceBg text-[9px] font-mono font-bold text-neonOrange border border-white/5 uppercase tracking-wider">${i.category}</span>
                        <span class="text-slate-300 font-bold">📍 Zila: ${i.district}, State: ${i.state}</span>
                    </div>
                    <span class="px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase ${i.status === 'Approved' ? 'bg-neonGreen/10 text-neonGreen border border-neonGreen/30' : 'bg-amber-500/10 text-amber-400 border border-amber-500/30'}">${i.status}</span>
                </div>
                
                <h4 class="font-black text-white text-base tracking-tight leading-tight">${i.title}</h4>
                <p class="text-slate-500 -mt-1 font-semibold text-[11px]">Precise Landmark Location Data: (${i.landmark})</p>
                <p class="text-slate-300 leading-relaxed text-xs">${i.desc}</p>
                
                <!-- CIVIC AUDIT DYNAMIC IMAGE DISPLAY PACKET CONTAINER -->
                ${i.image ? `
                <div class="border border-white/10 rounded-xl overflow-hidden max-h-64 bg-black shadow-inner my-2">
                    <img src="${i.image}" class="w-full h-auto object-cover max-h-64">
                </div>
                ` : ''}

                <!-- ACTIONS LINE TRIGGER MODULE (LIKE, SHARE & INTERFACES) -->
                <div class="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between text-xs gap-3">
                    <div class="flex items-center gap-4">
                        <button onclick="executeIssueLikeToggleAction(${i.id})" class="font-bold flex items-center gap-1 transition-colors ${isCurrentlyLikedByToken ? 'text-neonPink' : 'text-slate-400 hover:text-neonPink'}">
                            <i data-lucide="heart" class="w-4 h-4 ${isCurrentlyLikedByToken ? 'fill-neonPink' : ''}"></i>
                            <span>Like (${issueLikes})</span>
                        </button>
                        <button onclick="executeIssueShareAction(${i.id})" class="font-bold flex items-center gap-1 text-slate-400 hover:text-neonCyan transition-colors">
                            <i data-lucide="share-2" class="w-4 h-4"></i>
                            <span>Share</span>
                        </button>
                    </div>
                    <span class="text-[10px] text-slate-600 font-mono font-bold">Registry Node Reference: ID-${i.id}</span>
                </div>

                <!-- SUB-COMMENTS TELEMETRY DIALOGUE SUB-STACK SECTION -->
                <div class="mt-4 bg-spaceBg/30 p-3.5 rounded-xl border border-white/5 space-y-2.5">
                    <div class="text-[10px] uppercase font-black tracking-widest text-slate-400 flex items-center gap-1">
                        <i data-lucide="message-square" class="w-3.5 h-3.5 text-neonCyan"></i> Dialogue Pipeline Thread (${commentStack.length})
                    </div>
                    <div class="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                        ${commentsHTMLSegment}
                    </div>
                    
                    <!-- INPUT COMMENT PIPELINE ROW -->
                    <div class="flex items-center gap-2 pt-1">
                        <input id="comment-input-field-for-${i.id}" type="text" placeholder="Incorporate standard dialogue text tracking item..." class="w-full bg-spaceBg border border-white/10 rounded-lg p-2 text-[11px] text-white focus:outline-none focus:border-neonCyan">
                        <button onclick="submitIssueComment(${i.id})" class="px-3 py-2 bg-gradient-to-r from-neonCyan to-cyberPurple rounded-lg text-white font-black text-[10px] uppercase tracking-wider">Comment</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function executeIssueLikeToggleAction(id) {
    if(!userContext) { alert('System user signature token necessary to append feedback states.'); openAuthModal(); return; }
    const emailKey = userContext.email.toLowerCase();

    issues = issues.map(i => {
        if(i.id === id) {
            if(!i.likedBy) i.likedBy = [];
            const tokenIndex = i.likedBy.indexOf(emailKey);
            if(tokenIndex === -1) {
                i.likedBy.push(emailKey);
                i.likes = (i.likes || 0) + 1;
            } else {
                i.likedBy.splice(tokenIndex, 1);
                i.likes = Math.max(0, (i.likes || 0) - 1);
            }
        }
        return i;
    });

    localStorage.setItem('goi_v6_issues', JSON.stringify(issues));
    renderIssuesStack();
}

function executeIssueShareAction(id) {
    const simulationShareRouteString = `${window.location.origin}/#issue-node-trace-id-${id}`;
    navigator.clipboard.writeText(simulationShareRouteString).then(() => {
        alert(`🔗 Telemetry share payload link written successfully to memory allocation matrix clipboard:\n${simulationShareRouteString}`);
    }).catch(() => {
        alert(`Audit Reference Link: ID-${id}`);
    });
}

function submitIssueComment(id) {
    if(!userContext) { alert('Authentication routing session context missing. Access denied.'); openAuthModal(); return; }
    const inputEl = document.getElementById(`comment-input-field-for-${id}`);
    if(!inputEl) return;
    const commentValueText = inputEl.value.trim();
    if(!commentValueText) return;

    issues = issues.map(i => {
        if(i.id === id) {
            if(!i.comments) i.comments = [];
            i.comments.push({
                author: userContext.name,
                text: commentValueText,
                timestamp: Date.now()
            });
        }
        return i;
    });

    localStorage.setItem('goi_v6_issues', JSON.stringify(issues));
    inputEl.value = "";
    renderIssuesStack();
    recomputeAndRenderPublicTelemetryStats();
}

function submitCivicReport(e) {
    e.preventDefault();
    if(!userContext) { alert('Authentication required to upload structural data matrices.'); openAuthModal(); return; }
    
    const stateVal = document.getElementById('rep-state').value;
    const distVal = document.getElementById('rep-district').value;

    const newReport = {
        id: Date.now(),
        title: document.getElementById('rep-title').value.trim(),
        state: stateVal,
        district: distVal,
        landmark: document.getElementById('rep-landmark').value.trim(),
        category: document.getElementById('rep-cat').value,
        desc: document.getElementById('rep-desc').value.trim(),
        image: temporaryEncodedCivicAuditImageString || "",
        likes: 0,
        likedBy: [],
        comments: [],
        status: "Pending"
    };

    issues.unshift(newReport);
    localStorage.setItem('goi_v6_issues', JSON.stringify(issues));
    clearCivicAuditImageSelection();
    renderIssuesStack();
    e.target.reset();
    
    buildTerritorialDropdownMenus();
    recomputeAndRenderPublicTelemetryStats();
    alert('Vulnerability diagnostic audit token buffered successfully for administrative clearance processing pipelines.');
    updateIdentityAuthUI();
}

// --- TIMELINE FEED IMPLEMENTATION LOGIC LAYERS ---
function processPostImageUpload(event) {
    const file = event.target.files[0];
    if(!file) return;
    const postReader = new FileReader();
    postReader.onloadend = function() {
        temporaryEncodedPostImageString = postReader.result;
        document.getElementById('post-img-preview-element').src = temporaryEncodedPostImageString;
        document.getElementById('post-img-preview-container').classList.remove('hidden');
        document.getElementById('clear-uploaded-img-btn').classList.remove('hidden');
    };
    postReader.readAsDataURL(file);
}

function clearPostImageSelection() {
    temporaryEncodedPostImageString = "";
    document.getElementById('feed-post-img-file').value = "";
    document.getElementById('post-img-preview-container').classList.add('hidden');
    document.getElementById('post-img-preview-element').src = "";
    document.getElementById('clear-uploaded-img-btn').classList.add('hidden');
}

function renderCommunityFeed() {
    const feedContainer = document.getElementById('feed-posts-stack');
    if(!feedContainer) return;

    if(posts.length === 0) {
        feedContainer.innerHTML = `
            <div class="p-10 border border-dashed border-cyan-500/10 rounded-2xl text-center text-xs text-slate-500 space-y-2 bg-cardBg/30">
                <i data-lucide="radio" class="w-8 h-8 text-slate-600 mx-auto animate-pulse"></i>
                <p>Timeline stream trace values are completely zero.</p>
            </div>
        `;
        return;
    }

    feedContainer.innerHTML = posts.map(p => {
        const likedState = userContext && p.likedBy && p.likedBy.includes(userContext.email.toLowerCase());
        const authorObj = accounts.find(a => a.email.toLowerCase() === p.email.toLowerCase());
        const renderAvatarUrl = authorObj ? (authorObj.avatar || generateDefaultUserAvatarSVGString(p.author[0])) : generateDefaultUserAvatarSVGString(p.author[0]);

        return `
            <div class="p-5 rounded-2xl bg-cardBg border border-white/5 space-y-4 shadow-xl">
                <div class="flex items-center gap-3">
                    <img src="${renderAvatarUrl}" class="w-10 h-10 rounded-xl object-cover bg-spaceBg border border-white/10">
                    <div>
                        <h4 class="font-black text-xs text-white tracking-tight">${authorObj ? authorObj.name : p.author}</h4>
                        <p class="text-[9px] text-slate-500 font-mono">${p.email}</p>
                    </div>
                </div>
                <p class="text-xs text-slate-300 leading-relaxed">${p.content}</p>
                
                ${p.image ? `
                <div class="border border-white/10 rounded-xl overflow-hidden max-h-64 bg-black shadow-inner">
                    <img src="${p.image}" class="w-full h-auto object-cover max-h-64">
                </div>
                ` : ''}

                <div class="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                    <button onclick="executePostLikeToggleAction(${p.id})" class="font-bold flex items-center gap-1.5 transition-colors ${likedState ? 'text-neonPink' : 'text-slate-400 hover:text-neonPink'}">
                        <i data-lucide="heart" class="w-4 h-4 ${likedState ? 'fill-neonPink' : ''}"></i> 
                        <span>Like (${p.likes || 0})</span>
                    </button>
                    <span class="text-[10px] font-mono text-slate-600 font-bold">${new Date(p.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </div>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function submitNewPost() {
    if(!userContext) { alert('Authentication token required. Connect account portfolio.'); openAuthModal(); return; }
    const textVal = document.getElementById('feed-post-text').value.trim();
    if(!textVal && !temporaryEncodedPostImageString) return;

    const newPostNode = {
        id: Date.now(),
        author: userContext.name,
        email: userContext.email,
        content: textVal,
        image: temporaryEncodedPostImageString,
        likes: 0,
        likedBy: [],
        timestamp: Date.now()
    };

    posts.unshift(newPostNode);
    localStorage.setItem('goi_v6_posts', JSON.stringify(posts));
    document.getElementById('feed-post-text').value = '';
    clearPostImageSelection();
    renderCommunityFeed();
    recomputeAndRenderPublicTelemetryStats();
}

function executePostLikeToggleAction(id) {
    if(!userContext) { openAuthModal(); return; }
    const lowercaseEmail = userContext.email.toLowerCase();

    posts = posts.map(p => {
        if(p.id === id) {
            if(!p.likedBy) p.likedBy = [];
            const pos = p.likedBy.indexOf(lowercaseEmail);
            if(pos === -1) {
                p.likedBy.push(lowercaseEmail);
                p.likes++;
            } else {
                p.likedBy.splice(pos, 1);
                p.likes--;
            }
        }
        return p;
    });

    localStorage.setItem('goi_v6_posts', JSON.stringify(posts));
    renderCommunityFeed();
}

// --- ADMIN CONTROL MANAGEMENT ACTIONS IMPLEMENTATIONS ---
function renderAdminControlLists() {
    const vSlot = document.getElementById('adm-volunteers-list');
    const iSlot = document.getElementById('adm-issues-list');
    const uTbodySlot = document.getElementById('adm-master-users-tbody');
    if(!vSlot || !iSlot || !uTbodySlot) return;

    // 1. Render Volunteers Queue
    vSlot.innerHTML = volunteerApps.length === 0 ? `<p class="text-[11px] font-bold text-slate-600 font-mono p-2">Queue buffer empty.</p>` : volunteerApps.map((v, idx) => `
        <div class="p-3 bg-spaceBg rounded-xl border border-white/5 text-[11px] flex justify-between items-center gap-2">
            <div class="truncate"><p class="font-black text-white truncate">${v.name}</p><p class="text-slate-500 font-mono truncate">${v.email}</p></div>
            <button onclick="purgeVolunteerIndexNode(${idx})" class="bg-red-950/40 text-red-400 border border-red-900/60 px-2 py-1 rounded-md text-[10px] font-bold shrink-0 hover:bg-red-900/50">Purge</button>
        </div>
    `).join('');

    // 2. Render Audit Queue
    iSlot.innerHTML = issues.length === 0 ? `<p class="text-[11px] font-bold text-slate-600 font-mono p-2">No alerts tracked.</p>` : issues.map(i => `
        <div class="p-3 bg-spaceBg rounded-xl border border-white/5 text-[11px] flex justify-between items-center gap-2">
            <div class="truncate"><p class="font-black text-white truncate">${i.title}</p><p class="text-slate-500">State: ${i.state}, Status: ${i.status}</p></div>
            ${i.status === 'Pending' ? `<button onclick="approveTargetIssueNode(${i.id})" class="bg-emerald-950/50 text-neonGreen border border-emerald-900/60 px-2 py-1 rounded-md text-[10px] font-bold shrink-0 hover:bg-emerald-800/40">Approve</button>` : `<span class="text-slate-600 font-black uppercase text-[9px] tracking-widest shrink-0">Passed</span>`}
        </div>
    `).join('');

    // 3. MASTER REGISTERED USER MATRIX TABLE DIRECTORY INJECTION
    uTbodySlot.innerHTML = accounts.map(a => {
        return `
            <tr class="hover:bg-white/[0.02] transition-colors border-b border-white/5">
                <td class="p-3 flex items-center gap-2.5 font-bold text-white">
                    <img src="${a.avatar || generateDefaultUserAvatarSVGString(a.name[0])}" class="w-7 h-7 rounded-lg object-cover bg-spaceBg border border-white/10">
                    <span>${a.name}</span>
                </td>
                <td class="p-3 font-mono text-slate-400">${a.email}</td>
                <td class="p-3">
                    <span class="px-2 py-0.5 rounded-md text-[9px] font-black uppercase tracking-wider ${a.role === 'Admin' ? 'bg-red-950 text-red-400 border border-red-900' : 'bg-slate-900 text-slate-400 border border-white/10'}">${a.role}</span>
                </td>
                <td class="p-3 text-center">
                    ${a.email.toLowerCase() === 'itzvanshxr@gmail.com' ? 
                        `<span class="text-[10px] font-bold text-slate-600 italic">Root System Node Locked</span>` : 
                        `<button onclick="executeAdministrativePurgeUserNode('${a.email}')" class="px-2 py-1 text-[10px] font-black uppercase bg-red-950/40 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-900/40 transition-colors">Wipe Records</button>`
                    }
                </td>
            </tr>
        `;
    }).join('');
}

function executeAdministrativePurgeUserNode(targetEmailString) {
    if(confirm(`🚨 Critical Override Command Execution Confirmation:\nAre you absolutely positive you want to completely erase account node data payload mapped to: ${targetEmailString}?`)) {
        accounts = accounts.filter(a => a.email.toLowerCase() !== targetEmailString.toLowerCase());
        localStorage.setItem('goi_v6_accounts', JSON.stringify(accounts));
        
        // If the admin wiped their own active session simulation backup safely reset
        if(userContext && userContext.email.toLowerCase() === targetEmailString.toLowerCase()) {
            executeLogoutSequence();
        } else {
            updateIdentityAuthUI();
            recomputeAndRenderPublicTelemetryStats();
        }
        alert('Target record sequence discarded from decentralized memory allocations tables successfully.');
    }
}

function approveTargetIssueNode(id) {
    issues = issues.map(i => i.id === id ? { ...i, status: 'Approved' } : i);
    localStorage.setItem('goi_v6_issues', JSON.stringify(issues));
    renderIssuesStack();
    updateIdentityAuthUI();
}

function purgeVolunteerIndexNode(idx) {
    volunteerApps.splice(idx, 1);
    localStorage.setItem('goi_v6_volunteers', JSON.stringify(volunteerApps));
    updateIdentityAuthUI();
    recomputeAndRenderPublicTelemetryStats();
}

function submitVolunteerNode(e) {
    e.preventDefault();
    const appData = { 
        name: document.getElementById('v-name').value.trim(), 
        email: document.getElementById('v-email').value.trim(), 
        skills: document.getElementById('v-skills').value.trim() 
    };
    volunteerApps.push(appData);
    localStorage.setItem('goi_v6_volunteers', JSON.stringify(volunteerApps));
    e.target.reset();
    alert('Volunteer execution records transmitted to master onboarding system queue storage.');
    updateIdentityAuthUI();
    recomputeAndRenderPublicTelemetryStats();
}