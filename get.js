const axios = require('axios');
const fs = require('fs');


async function fetchVipProxies() {
  const url = "https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=1000&country=all";

  try {
    const res = await axios.get(url);
    const proxies = res.data.data.map(p => `${p.ip}:${p.port}`);

    fs.writeFileSync('v.txt', proxies.join('\n'), 'utf-8');
    console.log(`Đã lưu ${proxies.length} proxy VIP vào vip_proxies.txt`);
  } catch (err) {
    console.error('Lỗi khi lấy proxy VIP:', err.message);
  }
}

fetchVipProxies();
