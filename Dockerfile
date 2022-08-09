FROM node:16
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y
WORKDIR /opt/
COPY ./ ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN npm ci
RUN npx nx run strapi:install
COPY ./devDB/data.db ./apps/strapi/.tmp/data.db
COPY ./devDB/uploads/ ./apps/strapi/public/uploads/
EXPOSE 1337
CMD ["npx", "nx", "run", "strapi:develop"]
