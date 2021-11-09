import requests

url = 'https://icanhazip.com'


http_proxy = 'http://USERNAME:PASS@proxy.proxyverse.io:9200'
https_proxy = 'https://USERNAME:PASS@proxy.proxyverse.io:9200'

proxyDict = { 
              "http"  : http_proxy, 
              "https" : https_proxy
            }
  
r = requests.get(url, proxies=proxyDict)

print (https_proxy)
print(r.text)
