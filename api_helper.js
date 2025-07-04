// API助手：获取准确的国家和时区信息

// 获取所有国家的详细信息
async function fetchCountriesData() {
  console.log("正在从REST Countries API获取国家数据...");

  try {
    // 使用fetch (Node.js 18+)
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,cca2,idd,timezones,flag"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const countries = await response.json();

    console.log(`获取到 ${countries.length} 个国家的数据`);

    // 处理数据，生成映射
    const countryMappings = {};
    const dialCodeMappings = {};

    countries.forEach((country) => {
      const commonName = country.name.common;
      const nativeName = country.name.nativeName;
      const flag = country.flag;
      const timezones = country.timezones;
      const dialCodes = country.idd;

      // 获取拨号代码
      if (dialCodes && dialCodes.root && dialCodes.suffixes) {
        dialCodes.suffixes.forEach((suffix) => {
          const fullCode = dialCodes.root + suffix;
          const numericCode = fullCode.replace("+", "");

          if (timezones && timezones.length > 0) {
            dialCodeMappings[numericCode] = {
              country: commonName,
              timezone: timezones[0], // 使用第一个时区
              flag: flag,
              allTimezones: timezones,
            };
          }
        });
      }

      // 生成国家名称映射
      countryMappings[commonName] = {
        dialCodes: dialCodes,
        timezones: timezones,
        flag: flag,
      };

      // 如果有本地名称，也加入映射
      if (nativeName) {
        Object.values(nativeName).forEach((nameObj) => {
          if (nameObj.common && nameObj.common !== commonName) {
            countryMappings[nameObj.common] = {
              dialCodes: dialCodes,
              timezones: timezones,
              flag: flag,
            };
          }
        });
      }
    });

    return { countryMappings, dialCodeMappings };
  } catch (error) {
    console.error("获取国家数据失败:", error);
    return null;
  }
}

// 获取特定国家的时区信息
async function getTimezoneInfo(countryCode) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha/${countryCode}?fields=timezones,name`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("获取时区信息失败:", error);
    return null;
  }
}

// 验证电话号码对应的国家
async function validatePhoneNumber(phoneNumber) {
  try {
    // 使用免费的libphonenumber验证API (如果可用)
    const response = await fetch(
      `https://api.apilayer.com/number_verification/validate?number=${phoneNumber}`,
      {
        headers: {
          apikey: "YOUR_FREE_API_KEY", // 需要注册获取免费额度
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log("电话号码验证API不可用，使用本地逻辑");
  }

  return null;
}

// 主函数：更新国家映射
async function updateCountryMappings() {
  const data = await fetchCountriesData();

  if (data) {
    console.log("\n=== 拨号代码映射示例 ===");
    const sampleDialCodes = Object.entries(data.dialCodeMappings).slice(0, 10);
    sampleDialCodes.forEach(([code, info]) => {
      console.log(`+${code}: ${info.flag} ${info.country} (${info.timezone})`);
    });

    console.log("\n=== 国家名称映射示例 ===");
    const sampleCountries = Object.entries(data.countryMappings).slice(0, 10);
    sampleCountries.forEach(([name, info]) => {
      console.log(`${name}: ${info.flag} (${info.timezones?.join(", ")})`);
    });

    // 可以将这些数据保存到JSON文件
    const fs = require("fs");
    fs.writeFileSync("countries_api_data.json", JSON.stringify(data, null, 2));
    console.log("\n数据已保存到 countries_api_data.json");

    return data;
  }

  return null;
}

// 如果直接运行此脚本
if (require.main === module) {
  updateCountryMappings();
}

module.exports = {
  fetchCountriesData,
  getTimezoneInfo,
  validatePhoneNumber,
  updateCountryMappings,
};
