import fetch from 'node-fetch';
import { HttpsProxyAgent } from 'https-proxy-agent';

const proxyList = [
  { host: 'proxy.proxyverse.io', port: 9200}];

async function RotateProxy(proxyList, targetUrl) {
  for (const proxy of proxyList) {
    try {
      //construct proxy URL  
      const proxyUrl = `http://USERNAME:PASSWORD@${proxy.host}:${proxy.port}`;
      //create proxy agent  
      const proxyAgent = new HttpsProxyAgent(proxyUrl);

      //make request using random proxy from array  
      const response = await fetch(targetUrl, { agent: proxyAgent });
      const html = await response.text();

      console.log(html);
    } catch (error) {
      console.error(error);
    }
  }
}

const targetUrl = 'https://ident.me/ip';
await RotateProxy(proxyList, targetUrl);
