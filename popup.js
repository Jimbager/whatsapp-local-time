// WhatsApp 当地时间显示器 - 弹出窗口脚本

// DOM元素
const enableToggle = document.getElementById("enableToggle");
const statusText = document.getElementById("statusText");
const openOptionsLink = document.getElementById("openOptions");

// 初始化
document.addEventListener("DOMContentLoaded", function () {
  // 获取当前插件状态
  chrome.storage.local.get(["enabled"], function (result) {
    const isEnabled = result.enabled !== false;
    enableToggle.checked = isEnabled;
    updateStatusText(isEnabled);
  });

  // 添加事件监听器
  enableToggle.addEventListener("change", toggleEnabled);
  openOptionsLink.addEventListener("click", openOptionsPage);

  // 检查WhatsApp页面是否打开
  checkWhatsAppTab();
});

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
  if (isEnabled) {
    statusText.textContent = "已启用";
    statusText.className = "status-active";
  } else {
    statusText.textContent = "已禁用";
    statusText.className = "status-inactive";
  }
}

// 打开选项页面
function openOptionsPage(e) {
  e.preventDefault();
  // 如果有选项页面，可以使用以下代码打开
  // chrome.runtime.openOptionsPage();

  // 临时提示
  alert("高级设置功能将在后续版本中提供");
}

// 检查是否有WhatsApp标签页打开
function checkWhatsAppTab() {
  chrome.tabs.query({ url: "https://web.whatsapp.com/*" }, function (tabs) {
    if (tabs.length === 0) {
      // 显示提示，WhatsApp未打开
      const container = document.querySelector(".container");
      const infoSection = document.querySelector(".info-section");

      const warningDiv = document.createElement("div");
      warningDiv.className = "warning-section";
      warningDiv.innerHTML = `
                <div class="warning-icon">⚠️</div>
                <div class="warning-message">
                    <strong>WhatsApp Web未打开</strong>
                    <p>请先打开WhatsApp Web页面以使用此插件</p>
                    <button id="openWhatsApp">打开WhatsApp Web</button>
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
