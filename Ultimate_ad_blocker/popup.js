const toggle = document.getElementById('toggle');
const statusDiv = document.getElementById('status');
const counter = document.getElementById('counter');
const testBtn = document.getElementById('testBtn');

// Update UI based on state
async function updateUI() {
  const data = await chrome.storage.local.get(["enabled", "domainCount"]);
  const enabled = data.enabled !== false; // Default to true
  
  // Update toggle
  toggle.checked = enabled;
  updateStatusText(enabled);
  
  // Update domain count
  counter.textContent = data.domainCount || "0";
}

function updateStatusText(enabled) {
  statusDiv.textContent = enabled 
    ? 'Blocking enabled' 
    : 'Blocking disabled';
}

// Toggle blocking
toggle.addEventListener('change', async () => {
  const enabled = toggle.checked;
  await chrome.storage.local.set({ enabled });
  
  // Send message to background with callback
  chrome.runtime.sendMessage({ action: "updateBlocking" }, (response) => {
    if (chrome.runtime.lastError) {
      console.log("Background not available:", chrome.runtime.lastError.message);
    } else if (response && response.success) {
      console.log("Blocking state updated");
    }
  });
  
  // Update badge
  chrome.action.setBadgeText({
    text: enabled ? "ON" : ""
  });
  chrome.action.setBadgeBackgroundColor({
    color: enabled ? "#4CAF50" : ""
  });
  
  updateStatusText(enabled);
});

// Add test button functionality
testBtn.addEventListener('click', async () => {
  statusDiv.textContent = "Running tests...";
  
  try {
    // Using callback instead of promise for compatibility
    chrome.runtime.sendMessage({ action: "runTests" }, (response) => {
      if (chrome.runtime.lastError) {
        statusDiv.textContent = "Test failed: Background not available";
        console.error(chrome.runtime.lastError);
      } else if (response && response.success) {
        statusDiv.textContent = "All tests passed!";
      } else {
        statusDiv.textContent = "Tests failed. Check console for details";
      }
    });
  } catch (e) {
    statusDiv.textContent = "Test failed to run";
    console.error("Test error:", e);
  }
});

// Handle status updates
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "statusUpdate") {
    const { status, domainCount } = message;
    
    if (status === "active") {
      statusDiv.textContent = `Blocking active (${domainCount} domains)`;
      counter.textContent = domainCount;
      chrome.storage.local.set({ domainCount });
    } 
    else if (status === "disabled") {
      statusDiv.textContent = "Blocking disabled";
    }
    else if (status === "error") {
      statusDiv.textContent = "Error updating rules";
    }
  }
});

// Initialize
updateUI();