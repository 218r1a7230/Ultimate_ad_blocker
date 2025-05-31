// Enhanced domain validation
function isValidDomain(domain) {
  return /^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/.test(domain);
}

// Improved preprocessing
function preprocessDomains(domains) {
  const cleaned = [];
  const seen = new Set();
  
  for (const domain of domains) {
    try {
      let clean = domain
        .replace(/https?:\/\//g, '')
        .replace(/\/.*$/g, '')
        .replace(/^\*\./g, '')
        .replace(/\?.*$/g, '')
        .toLowerCase()
        .trim();
      
      if (!clean || !isValidDomain(clean)) {
        console.warn(`Invalid domain format: ${domain}`);
        continue;
      }
      
      if (/^(\d+\.)+\d+$/.test(clean) || 
          clean.includes('localhost') || 
          seen.has(clean)) {
        continue;
      }
      
      seen.add(clean);
      cleaned.push(clean);
    } catch (e) {
      console.error(`Error processing domain: ${domain}`, e);
    }
  }
  
  console.log(`Cleaned ${cleaned.length} valid domains`);
  return cleaned;
}

// Ad domains list (preprocessed)
const AD_DOMAINS = preprocessDomains([
// Existing domains
  "doubleclick.net",
  "googlesyndication.com",
  "adsafeprotected.com",
  "adservice.google.com",
  "pagead2.googlesyndication.com",
  
  // Additional ad providers (250+)
  "2mdn.net",
  "ad-colony.com",
  "ad-server.co.uk",
  "ad.adapterplus.com",
  "ad1x.com",
  "ad4m.at",
  "adblade.com",
  "adbro.de",
  "adbutler.com",
  "adcash.com",
  "adclixx.net",
  "adcloud.net",
  "adcomplete.com",
  "adconion.com",
  "addthis.com",
  "addthisedge.com",
  "adengage.com",
  "adentifi.com",
  "adexc.net",
  "adf.ly",
  "adflex.vn",
  "adform.com",
  "adformdsp.net",
  "adgardener.com",
  "adgebra.co.in",
  "adgrx.com",
  "adhigh.net",
  "adhood.com",
  "adikteev.com",
  "adinch.com",
  "adinfuse.com",
  "adition.com",
  "adk2.co",
  "adkernel.com",
  "adledge.com",
  "adludio.com",
  "admagnet.net",
  "admarvel.com",
  "admedia.com",
  "admedo.com",
  "admeld.com",
  "admeta.com",
  "admixer.co.kr",
  "admixer.net",
  "admized.com",
  "adnami.io",
  "adnection.com",
  "adnetasia.com",
  "adnetwork.net",
  "adnium.com",
  "adnxs.com",
  "adocean.pl",
  "adotmob.com",
  "adperium.com",
  "adplexity.com",
  "adpost.org",
  "adprime.com",
  "adpushup.com",
  "adreactor.com",
  "adrta.com",
  "ads-bookie.com",
  "ads-twitter.com",
  "ads.instagram.com",
  "ads.linkedin.com",
  "ads.pubmatic.com",
  "ads.rakuten.com",
  "ads.snapchat.com",
  "ads.tiktok.com",
  "ads.viber.com",
  "ads.yahoo.com",
  "ads.youtube.com",
  "ads360.com",
  "adsafeprotected.com",
  "adsame.com",
  "adsbrook.com",
  "adscale.de",
  "adservme.com",
  "adservingfactory.com",
  "adsfactor.net",
  "adsflavor.com",
  "adsfresh.com",
  "adsniper.ru",
  "adspeed.net",
  "adspirit.de",
  "adspruce.com",
  "adstarget.net",
  "adswizz.com",
  "adsymptotic.com",
  "adtag.live",
  "adtarget.me",
  "adtech.com",
  "adtech.de",
  "adtechjp.com",
  "adtechus.com",
  "adthor.com",
  "adtiger.de",
  "adtilt.com",
  "adtoma.com",
  "adtrace.org",
  "adtrade.net",
  "adtrading.de",
  "adtrgt.com",
  "adup-tech.com",
  "advangelists.com",
  "advanseads.com",
  "adventurefeeds.com",
  "adverline.com",
  "adversal.com",
  "advertise.com",
  "advertising.amazon.com",
  "advertising.com",
  "advertising.yahoo.com",
  "advertnative.com",
  "advertyz.com",
  "advinci.co",
  "adx1.com",
  "adxcore.com",
  "adxpose.com",
  "adxpremium.services",
  "adxserve.com",
  "adzerk.net",
  "aerserv.com",
  "affec.tv",
  "affiliateb.com",
  "affiliaxe.com",
  "affise.com",
  "agkn.com",
  "alipromo.com",
  "amazon-adsystem.com",
  "amobee.com",
  "appads.com",
  "appboy.com",
  "appier.com",
  "applift.com",
  "applovin.com",
  "appnexus.com",
  "appodeal.com",
  "appredeem.com",
  "apsalar.com",
  "apsoutheast-match.deepintent.com",
  "atemda.com",
  "audrte.com",
  "avazutracking.net",
  "axonix.com",
  "bam-x.com",
  "beachfront.com",
  "beeswax.com",
  "betrad.com",
  "bidswitch.net",
  "bidtheatre.com",
  "bidtellect.com",
  "bidvertiser.com",
  "blismedia.com",
  "bluekai.com",
  "braze.com",
  "brightroll.com",
  "bttrack.com",
  "casalemedia.com",
  "celtra.com",
  "centro.io",
  "cint.com",
  "clarityad.com",
  "clarium.io",
  "clevernt.com",
  "cloudcoins.co",
  "cloudmobi.net",
  "cluep.com",
  "conversantmedia.com",
  "cpmstar.com",
  "criteo.com",
  "crwdcntrl.net",
  "ctnsnet.com",
  "dable.io",
  "dentsu.jp",
  "deployads.com",
  "digicertdns.com",
  "digitru.st",
  "directadvert.ru",
  "districtm.io",
  "doubleverify.com",
  "dtscout.com",
  "duapps.com",
  "dyntrk.com",
  "e-planning.net",
  "e-volution.ai",
  "eadexchange.com",
  "eas.ctnsnet.com",
  "ebdr3.com",
  "emetriq.com",
  "engagebdr.com",
  "engine.adzerk.net",
  "epom.com",
  "erne.co",
  "eu-ad.contextweb.com",
  "eum-appdynamics.com",
  "everestjs.net",
  "everesttech.net",
  "exelator.com",
  "exponential.com",
  "eyeota.net",
  "eyereturn.com",
  "faktor.io",
  "fatchilli.media",
  "fbcdn.net",
  "flashtalking.com",
  "foursixty.com",
  "fqtag.com",
  "freewheel.com",
  "fwmrm.net",
  "gammassl.com",
  "gemini.yahoo.com",
  "genieessp.com",
  "getrockerbox.com",
  "giraff.io",
  "globalsign.com",
  "gmossp.com",
  "gothamads.com",
  "gumgum.com",
  "harve.com",
  "heyzap.com",
  "histats.com",
  "hotjar.com",
  "hs-analytics.net",
  "hs-scripts.com",
  "hsadspixel.net",
  "ibillboard.com",
  "ichnaea.netflix.com",
  "im-apps.net",
  "imonomy.com",
  "imrworldwide.com",
  "in-ad.pro",
  "infolinks.com",
  "inmobi.com",
  "inner-active.com",
  "innity.com",
  "inspectlet.com",
  "intellitxt.com",
  "intergi.com",
  "intermarkets.net",
  "intext.com",
  "inviewad.com",
  "ipredictive.com",
  "ironsrc.com",
  "jads.co",
  "jivox.com",
  "jsecoin.com",
  "justpremium.com",
  "kargo.com",
  "keywee.co",
  "kiosked.com",
  "kixer.com",
  "knorex.com",
  "kochava.com",
  "krxd.net",
  "leadbolt.com",
  "leadplace.fr",
  "leanplum.com",
  "lijit.com",
  "liquidm.com",
  "liveadvert.com",
  "liverail.com",
  "livesportsmedia.net",
  "loopme.com",
  "lotame.com",
  "lphbs.com",
  "m6r.eu",
  "mads.amazon-adsystem.com",
  "marchex.io",
  "marketgid.com",
  "mathads.com",
  "media.net",
  "mediaforge.com",
  "mediamath.com",
  "medyanet.com",
  "meetrics.net",
  "memevideoad.com",
  "mgid.com",
  "mintegral.com",
  "mixadvert.com",
  "mixpo.com",
  "mobfox.com",
  "mobilda.com",
  "mobileadtrading.com",
  "mobilefuse.com",
  "mobisage.com",
  "mobstarry.com",
  "mobusi.com",
  "mobvista.com",
  "moatads.com",
  "monetate.net",
  "mookie1.com",
  "mopub.com",
  "mppmnetwork.com",
  "myads.com",
  "mybestmv.com",
  "mydas.mobi",
  "nativo.com",
  "navegg.com",
  "neodatagroup.com",
  "ninthdecimal.com",
  "nrich.ai",
  "ntent.com",
  "o333o.com",
  "omappapi.com",
  "omnitagjs.com",
  "omtrdc.net",
  "onads.com",
  "onead.com.tw",
  "onelink.me",
  "onepush.sg",
  "onscroll.io",
  "openadserving.com",
  "openx.com",
  "opera.com",
  "operator.com",
  "optad360.com",
  "optimatic.com",
  "optimizead.com",
  "optmd.com",
  "outbrain.com",
  "p-n.io",
  "parsely.com",
  "paypalobjects.com",
  "pbstck.com",
  "permutive.com",
  "personaclick.com",
  "phluant.com",
  "pixel.mathtag.com",
  "pixel.parsely.com",
  "playableads.com",
  "playbuzz.com",
  "playwire.com",
  "popads.net",
  "postrelease.com",
  "powerlinks.com",
  "ppjol.com",
  "prequel.tv",
  "pro-market.net",
  "propellerads.com",
  "pubmatic.com",
  "pubmine.com",
  "pubsrv.ac",
  "pulseadnetwork.com",
  "pushdy.com",
  "pushspring.com",
  "quantcount.com",
  "quantserve.com",
  "quoracdn.net",
  "rayjump.com",
  "rdtrac.com",
  "realsrv.com",
  "redintelligence.net",
  "reklamstore.com",
  "relaido.jp",
  "revcontent.com",
  "revrtb.com",
  "revrtb.net",
  "rfihub.com",
  "rhythmone.com",
  "richaudience.com",
  "richrelevance.com",
  "rlcdn.com",
  "roq.ad",
  "rubiconproject.com",
  "s-ad.rmp.rakuten.com",
  "s.atemda.com",
  "s.btstatic.com",
  "s.innovid.com",
  "s.media.net",
  "s.yieldlab.net",
  "sabavision.com",
  "samba.tv",
  "saymedia.com",
  "sbx.pagesjaunes.fr",
  "scanscout.com",
  "screencandy.com",
  "sdk.apptentive.com",
  "sdk.starbolt.io",
  "servenobid.com",
  "servicenow.com",
  "sharethrough.com",
  "simpli.fi",
  "siteimproveanalytics.com",
  "sitescout.com",
  "sizmek.com",
  "skimresources.com",
  "smadex.com",
  "smartadserver.com",
  "smartyads.com",
  "smilewanted.com",
  "snapads.com",
  "snoobi.com",
  "somplo.com",
  "sonobi.com",
  "sophi.io",
  "sportradarserving.com",
  "spotx.tv",
  "spotxchange.com",
  "sprinklr.com",
  "stackadapt.com",
  "startappservice.com",
  "steepto.com",
  "stickyadstv.com",
  "strikead.com",
  "superads.cn",
  "swogo.net",
  "syndication.com",
  "taboola.com",
  "tapad.com",
  "tapjoy.com",
  "taplytics.com",
  "tappx.com",
  "targetspot.com",
  "teads.tv",
  "tealium.com",
  "tealiumiq.com",
  "technoratimedia.com",
  "telemetry.swe.quicinc.com",
  "teliad.com",
  "tend.io",
  "theadex.com",
  "themediagrid.com",
  "tidaltv.com",
  "tns-counter.ru",
  "tradedoubler.com",
  "trafficfactory.biz",
  "trafficjunky.com",
  "trafficstars.com",
  "tribalfusion.com",
  "trinitymedia.ai",
  "truffle.bid",
  "trustx.org",
  "tubemogul.com",
  "tumri.com",
  "twiago.com",
  "tynt.com",
  "ucfunnel.com",
  "udmserve.net",
  "uniconsent.com",
  "unid.go.com",
  "unrulymedia.com",
  "us-u.openx.net",
  "usemaxserver.de",
  "userreport.com",
  "vidoomy.com",
  "viewdeos.com",
  "vindico.com",
  "viralize.tv",
  "visx.com",
  "voicefive.com",
  "vungle.com",
  "webads.eu",
  "webengage.com",
  "widespace.com",
  "wistia.com",
  "xad.com",
  "xaxis.com",
  "xeiro.com",
  "xplusone.com",
  "yadro.ru",
  "yieldlab.net",
  "yieldlove.com",
  "yieldmo.com",
  "yieldone.com",
  "yieldpartners.com",
  "yieldtraffic.com",
  "yldbt.com",
  "yldbt1.com",
  "yldmg.com",
  "yospace.com",
  "zergnet.com",
  "zqtk.net"
]);

// Rule management
let nextRuleId = 1;

// Initialize storage
async function initStorage() {
  const data = await chrome.storage.local.get(['nextRuleId', 'enabled']);
  nextRuleId = data.nextRuleId || 1;
  
  if (typeof data.enabled === 'undefined') {
    await chrome.storage.local.set({ enabled: true });
  }
  
  console.log(`Storage initialized. NextRuleID: ${nextRuleId}`);
}

// Get next unique rule ID (persistent)
async function getNextRuleId() {
  const id = nextRuleId;
  nextRuleId++;
  await chrome.storage.local.set({ nextRuleId });
  return id;
}

// Generate rules with unique IDs
async function generateRules() {
  const rules = [];
  
  for (const domain of AD_DOMAINS) {
    const baseId = await getNextRuleId();
    const imageId = await getNextRuleId();
    
    rules.push({
      id: baseId,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: `||${domain}^`,
        resourceTypes: ["script", "xmlhttprequest", "sub_frame"]
      }
    });
    
    rules.push({
      id: imageId,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: `||${domain}^`,
        resourceTypes: ["image"],
        excludedInitiatorDomains: [
          "wikipedia.org",
          "github.com",
          "stackoverflow.com",
          "reddit.com",
          "medium.com",
          "gov.uk",
          "nytimes.com"
        ]
      }
    });
  }
  
  console.log(`Generated ${rules.length} rules`);
  return rules;
}

// Update rules in chunks
async function updateRules(rules) {
  const chunkSize = 100;
  
  // Get existing rules to remove
  const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
  const removeIds = existingRules.map(rule => rule.id);
  
  if (removeIds.length > 0) {
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: removeIds
    });
    console.log(`Removed ${removeIds.length} old rules`);
  }
  
  // Add new rules in chunks
  for (let i = 0; i < rules.length; i += chunkSize) {
    const chunk = rules.slice(i, i + chunkSize);
    await chrome.declarativeNetRequest.updateDynamicRules({
      addRules: chunk
    });
  }
}

// Core blocking state management
async function updateBlockingState() {
  const { enabled } = await chrome.storage.local.get("enabled");
  
  try {
    if (enabled) {
      console.log("Enabling ad blocking...");
      const rules = await generateRules();
      await updateRules(rules);
      console.log("Rules applied successfully");
      
      // Update UI only if popup is open
      chrome.runtime.sendMessage({ 
        action: "statusUpdate", 
        status: "active",
        domainCount: AD_DOMAINS.length,
        ruleCount: rules.length
      }, () => {
        // Connection error handling
        if (chrome.runtime.lastError) {
          console.log("Popup not open, message not sent");
        }
      });
    } else {
      // Remove all rules when disabling
      const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
      const removeIds = existingRules.map(rule => rule.id);
      
      if (removeIds.length > 0) {
        await chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: removeIds
        });
        console.log(`Removed ${removeIds.length} rules`);
      }
      
      console.log("Ad blocking disabled");
      
      // Update UI only if popup is open
      chrome.runtime.sendMessage({ 
        action: "statusUpdate", 
        status: "disabled" 
      }, () => {
        // Connection error handling
        if (chrome.runtime.lastError) {
          console.log("Popup not open, message not sent");
        }
      });
    }
  } catch (error) {
    console.error("Rule update error:", error);
    
    // Handle ID conflicts
    if (error.message.includes("does not have a unique ID")) {
      const badIdMatch = error.message.match(/id (\d+)/);
      if (badIdMatch) {
        const badId = parseInt(badIdMatch[1]);
        console.warn(`Resolving ID conflict: ${badId}`);
        nextRuleId = badId + 1;
        await chrome.storage.local.set({ nextRuleId });
        return updateBlockingState(); // Retry
      }
    }
    
    // Send error to popup only if open
    chrome.runtime.sendMessage({ 
      action: "statusUpdate", 
      status: "error",
      error: error.message
    }, () => {
      // Connection error handling
      if (chrome.runtime.lastError) {
        console.log("Popup not open, error not sent");
      }
    });
  }
}

// Test functions
async function runTests() {
  console.log("Running ad blocker tests...");
  
  // Test 1: Rule ID uniqueness
  let testPassed = true;
  const idSet = new Set();
  
  const rules = await generateRules();
  for (const rule of rules) {
    if (idSet.has(rule.id)) {
      console.error(`ID conflict detected: ${rule.id}`);
      testPassed = false;
    }
    idSet.add(rule.id);
  }
  
  // Test 2: Domain coverage
  const ruleDomains = new Set();
  rules.forEach(rule => {
    const domainMatch = rule.condition.urlFilter.match(/\|\|([\w.-]+)\^/);
    if (domainMatch) ruleDomains.add(domainMatch[1]);
  });
  
  AD_DOMAINS.forEach(domain => {
    if (!ruleDomains.has(domain)) {
      console.error(`Domain not covered: ${domain}`);
      testPassed = false;
    }
  });
  
  console.log(`Tests ${testPassed ? "passed" : "failed"}`);
  return testPassed;
}

// Initialize extension
chrome.runtime.onInstalled.addListener(async (details) => {
  console.log("Extension installed");
  await initStorage();
  
  if (details.reason === 'install') {
    await chrome.storage.local.set({ nextRuleId: 1 });
    nextRuleId = 1;
  }
  
  await updateBlockingState();
});

chrome.runtime.onStartup.addListener(async () => {
  console.log("Browser started");
  await initStorage();
  await updateBlockingState();
});

// Message handling
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "updateBlocking") {
    updateBlockingState().then(() => {
      sendResponse({ success: true });
    });
    return true; // Keep message channel open for async response
  }
  else if (message.action === "runTests") {
    runTests().then(success => {
      sendResponse({ success });
    });
    return true; // Keep message channel open
  }
  return false;
});

// Initialize on load
(async () => {
  await initStorage();
  console.log("Background script loaded");
})();