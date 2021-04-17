require "uri" 
require 'net/http' 

proxy_host = 'proxy.proxyverse.io' 
proxy_port = 80 
proxy_user = 'username' 
proxy_pass = 'password' 

uri = URI.parse('http://ipinfo.io/ip') 
proxy = Net::HTTP::Proxy(proxy_host, proxy_port, proxy_user, proxy_pass) 

req = Net::HTTP::Get.new(uri.path) 

result = proxy.start(uri.host, uri.port) do |http| 
   http.request(req) 
end 

puts result.body 
