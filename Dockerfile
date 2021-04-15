# Extend codotype/codotype-plugin-prod
FROM codotype/codotype-plugin-prod

# Add /usr/src/plugin directory
RUN mkdir -p /usr/src/plugin

# Add /plugin into directory
COPY ./ /usr/src/plugin

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/plugin

# Install dependecies
RUN yarn install

# Build the plugin
RUN yarn build

# Switch back to app workdir
WORKDIR /usr/src/app

# Start the Next.js app
CMD [ "yarn", "start" ]
