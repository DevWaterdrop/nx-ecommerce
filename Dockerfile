FROM node:16
# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y
WORKDIR /opt/
COPY ./apps/strapi/ ./
RUN npm ci --force
RUN npm run build
EXPOSE 1337
ENV NODE_ENV production
CMD ["npm", "run", "start"]
