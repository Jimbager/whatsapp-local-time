// WhatsApp 当地时间显示器 - 弹出窗口脚本

// DOM元素
const enableToggle = document.getElementById("enableToggle");
const statusText = document.getElementById("statusText");
const openCountriesLink = document.getElementById("openCountries");
const countriesPanel = document.getElementById("countriesPanel");
const countryCountEl = document.getElementById("countryCount");
const countriesListEl = document.getElementById("countriesList");
const countrySearchEl = document.getElementById("countrySearch");

let countriesDataCache = null;
let filtered = [];

// 初始化
document.addEventListener("DOMContentLoaded", function () {
  // Tabs 初始化
  initTabs();

  // 获取当前插件状态
  chrome.storage.local.get(["enabled"], function (result) {
    const isEnabled = result.enabled !== false;
    if (enableToggle) {
      enableToggle.checked = isEnabled;
      updateStatusText(isEnabled);
      enableToggle.addEventListener("change", toggleEnabled);
    }
  });

  // 事件监听器
  if (countrySearchEl) {
    countrySearchEl.addEventListener("input", onSearchInput);
  }

  // 预加载国家数据，更新数量
  preloadCountries();

  // 检查WhatsApp页面是否打开
  checkWhatsAppTab();
});

function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = {
    features: document.getElementById("tab-features"),
    guide: document.getElementById("tab-guide"),
    countries: document.getElementById("tab-countries"),
  };

  function activate(tab) {
    tabs.forEach((b) => b.classList.remove("active"));
    Object.values(panels).forEach((p) => (p.style.display = "none"));
    const btn = Array.from(tabs).find(
      (b) => b.getAttribute("data-tab") === tab
    );
    if (btn) btn.classList.add("active");
    if (panels[tab]) panels[tab].style.display = "block";
    sessionStorage.setItem("wlt_active_tab", tab);
  }

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => activate(btn.getAttribute("data-tab")));
  });

  // 恢复上次的tab
  const last = sessionStorage.getItem("wlt_active_tab") || "features";
  activate(last);
}

async function preloadCountries() {
  try {
    const url = chrome.runtime.getURL("countries.json");
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error("加载 countries.json 失败");
    countriesDataCache = await res.json();
    if (Array.isArray(countriesDataCache)) {
      if (countryCountEl)
        countryCountEl.textContent = String(countriesDataCache.length);
      filtered = countriesDataCache.slice();
      renderCountries(filtered);
    }
  } catch (e) {
    console.warn("无法加载国家列表:", e);
  }
}

// 切换启用状态
function toggleEnabled() {
  const isEnabled = enableToggle.checked;

  // 更新存储
  chrome.storage.local.set({ enabled: isEnabled }, function () {
    updateStatusText(isEnabled);

    // 向所有WhatsApp标签页发送消息
    sendMessageToWhatsAppTabs({
      action: isEnabled ? "enable" : "disable",
    });
  });
}

// 更新状态文本
function updateStatusText(isEnabled) {
  if (!statusText) return;
  if (isEnabled) {
    statusText.textContent = "已启用";
    statusText.className = "status-active";
  } else {
    statusText.textContent = "已禁用";
    statusText.className = "status-inactive";
  }
}

function renderCountries(list) {
  if (!countriesListEl) return;
  const items = list.map((row) => {
    const cnArr = Array.isArray(row.cn) ? row.cn : [row.cn].filter(Boolean);
    const cn = cnArr.join(" / ");
    const code2 = row.code_2 || "";
    const code3 = row.code_3 || "";
    const zone = row.timezone || "";
    const phone = row.phone_code == null ? "" : String(row.phone_code);
    return `<div class="country-item">${cn}<div class="country-meta">两位代码: ${code2} | 三位代码: ${code3} | 时区: ${zone} | 电话区号: ${phone}</div></div>`;
  });
  countriesListEl.innerHTML = items.join("");
}

function onSearchInput() {
  if (!countriesDataCache) return;
  const q = (countrySearchEl.value || "").trim().toLowerCase();
  if (!q) {
    filtered = countriesDataCache.slice();
    renderCountries(filtered);
    return;
  }
  filtered = countriesDataCache.filter((row) => {
    const cnArr = Array.isArray(row.cn) ? row.cn : [row.cn].filter(Boolean);
    const hay = [
      ...cnArr.map((s) => String(s).toLowerCase()),
      String(row.code_2 || "").toLowerCase(),
      String(row.code_3 || "").toLowerCase(),
      String(row.timezone || "").toLowerCase(),
      String(row.phone_code == null ? "" : row.phone_code).toLowerCase(),
    ].join("|");
    return hay.includes(q);
  });
  renderCountries(filtered);
}

// 检查是否有WhatsApp标签页打开
function checkWhatsAppTab() {
  chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, function (tabs) {
    if (tabs.length === 0) {
      // 显示提示，WhatsApp未打开
      const container = document.querySelector(".container");
      const infoSection = document.querySelector(".info-section");
      if (!container || !infoSection) return;

      const warningDiv = document.createElement("div");
      warningDiv.className = "warning-section";
      warningDiv.innerHTML = `
                <div class="warning-icon">⚠️</div>
                <div class="warning-message">
                    <strong>WhatsApp Web未打开</strong>
                    <p>请先打开WhatsApp Web页面以使用此插件</p>
                    <button id=\"openWhatsApp\">打开WhatsApp Web</button>
                </div>
            `;

      container.insertBefore(warningDiv, infoSection);

      // 添加打开WhatsApp的按钮事件
      document
        .getElementById("openWhatsApp")
        .addEventListener("click", function () {
          chrome.tabs.create({ url: "https://web.whatsapp.com/" });
          window.close(); // 关闭弹出窗口
        });

      // 添加样式
      const style = document.createElement("style");
      style.textContent = `
                .warning-section {
                    background: #fff9db;
                    border: 1px solid #ffe066;
                    border-radius: 8px;
                    padding: 12px;
                    margin-bottom: 16px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                
                .warning-icon {
                    font-size: 24px;
                }
                
                .warning-message {
                    flex: 1;
                }
                
                .warning-message strong {
                    display: block;
                    margin-bottom: 4px;
                    color: #e67700;
                }
                
                .warning-message p {
                    font-size: 12px;
                    color: #664d03;
                    margin-bottom: 8px;
                }
                
                #openWhatsApp {
                    background: #25d366;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    padding: 6px 12px;
                    font-size: 12px;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                
                #openWhatsApp:hover {
                    background: #128c7e;
                }
            `;
      document.head.appendChild(style);
    }
  });
}

// 向所有WhatsApp标签页发送消息
function sendMessageToWhatsAppTabs(message) {
  chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, function (tabs) {
    tabs.forEach(function (tab) {
      chrome.tabs.sendMessage(tab.id, message).catch(() => {
        // 忽略错误，可能是内容脚本尚未加载
        console.log("消息发送失败，可能是内容脚本尚未加载");
      });
    });
  });
}
