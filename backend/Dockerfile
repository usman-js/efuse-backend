FROM node

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5000

ENV MONGODB_URI=mongodb://localhost:27017/efuse
ENV PORT=5000

CMD ["yarn", "restart"]