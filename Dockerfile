FROM node:18.16-alpine

WORKDIR /app

# Install dependencies.
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Copy config.
COPY next.config.js .
COPY postcss.config.js .
COPY tailwind.config.js .
COPY tsconfig.json .

# Copy the application code.
COPY public public
COPY src src

# Run the application.
CMD [ "yarn", "dev" ]
