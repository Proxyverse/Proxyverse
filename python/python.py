import urllib.request as request

url = 'https://ipinfo.io'
username = 'username'
password = 'password'

proxy = f'http://{username}:{password}@proxy.proxyverse.io'
  
query = request.build_opener(request.ProxyHandler({'http': proxy, 'https': proxy}))

print(query.open(url).read())
