npm install &^
npm run build &^
docker pull nginx &^
docker stop vueApp &^
docker rm vueApp &^
docker rmi vuenginxcontainer &^
docker build -t vuenginxcontainer .  &^
docker run -p 3001:80 -d --name vueApp vuenginxcontainer