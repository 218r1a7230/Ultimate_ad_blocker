const toggle = document.getElementById('toggle');
const statusDiv = document.getElementById('status');
const counter = document.getElementById('counter');
const requests = document.getElementById('requests');

// Update UI based on state
async function updateUI() {
  const { enabled = true } = await chrome.storage.local.get("enabled");
  const { blockedCount = 0 } = await chrome.storage.local.get("blockedCount");
  
  // Update toggle
  toggle.checked = enabled;
  statusDiv.textContent = enabled 
    ? 'Blocking enabled' 
    : 'Blocking disabled';
  
  // Update counters
  counter.textContent = chrome.runtime.getManifest().AD_DOMAINS?.length || 0;
  requests.textContent = blockedCount;
}

// Toggle blocking
toggle.addEventListener('change', async () => {
  const enabled = toggle.checked;
  await chrome.storage.local.set({ enabled });
  
  // Send message to background
  chrome.runtime.sendMessage({ action: "updateBlocking" });
  
  // Update badge
  chrome.action.setBadgeText({
    text: enabled ? "ON" : ""
  });
  chrome.action.setBadgeBackgroundColor({
    color: enabled ? "#4CAF50" : ""
  });
  
  updateUI();
});

// Initialize
chrome.storage.local.get(["enabled", "blockedCount"], updateUI);

// Listen for blocked count updates
chrome.storage.onChanged.addListener((changes) => {
  if (changes.blockedCount) {
    requests.textContent = changes.blockedCount.newValue;
  }
});