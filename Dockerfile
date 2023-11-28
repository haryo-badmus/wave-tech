

FROM node:18

COPY ./package.json /app/package.json
WORKDIR /app/


RUN npm i -g npm@9.1.1 && \
    npm i -f && \
    find /app/node_modules/ ! -user root | xargs chown root:root



# Copy bot

COPY . /app/



# Post install

RUN npm run build







# execute start script

CMD ["yarn", "dev"]

