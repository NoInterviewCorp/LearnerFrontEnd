FROM node

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
COPY package-lock.json /app
RUN npm install
RUN npm i @angular/cli
EXPOSE 4200
COPY . /app

CMD ["npm","start"]
# CMD ng serve --host 0.0.0.0