mkdir ssl
openssl req -x509 -nodes -newkey rsa:4096 -keyout ./ssl/key.pem -out ./ssl/cert.pem -days 365