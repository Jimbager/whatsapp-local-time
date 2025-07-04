// 后台服务工作线程

// 当扩展程序首次安装或更新时触发
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    console.log("WhatsApp时区显示器已安装");

    // 设置默认配置
    chrome.storage.local.set({
      enabled: true,
      showSeconds: false,
      refreshInterval: 60, // 秒
      customCountries: {},
    });
  } else if (details.reason === "update") {
    console.log("WhatsApp时区显示器已更新");
  }
});

// 监听来自内容脚本的消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getStatus") {
    // 获取插件状态
    chrome.storage.local.get(["enabled"], (result) => {
      sendResponse({ enabled: result.enabled !== false });
    });
    return true; // 表示将异步发送响应
  }

  if (message.action === "toggleEnabled") {
    // 切换插件启用状态
    chrome.storage.local.get(["enabled"], (result) => {
      const newState = !result.enabled;
      chrome.storage.local.set({ enabled: newState });
      sendResponse({ enabled: newState });
    });
    return true;
  }
});

// 监听标签页更新，确保内容脚本在WhatsApp页面上运行
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.includes("web.whatsapp.com")
  ) {
    // 检查插件是否启用
    chrome.storage.local.get(["enabled"], (result) => {
      if (result.enabled !== false) {
        // 向内容脚本发送刷新消息
        chrome.tabs.sendMessage(tabId, { action: "refresh" }).catch(() => {
          // 如果消息发送失败，可能是内容脚本尚未加载
          console.log("内容脚本尚未准备好，这是正常的");
        });
      }
    });
  }
});
