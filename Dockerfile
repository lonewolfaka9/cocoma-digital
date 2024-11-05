# Build environment
FROM node:18-alpine3.17 as react-build
WORKDIR /app
# Install dependencies for node-gyp (Python, make, and g++)
RUN apk add --no-cache python3 make g++
# Install distutils via pip
# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools
# Copy package.json and yarn.lock separately to leverage Docker caching
COPY package*.json ./  
COPY yarn.lock ./
RUN yarn

# Copy the rest of the application code
COPY . .

# ARG GENERATE_SOURCE_MAP
# ENV GENERATE_SOURCE_MAP $GENERATE_SOURCE_MAP

# ARG REACT_APP_SSO_CLIENT_ID
# ENV REACT_APP_SSO_CLIENT_ID $REACT_APP_SSO_CLIENT_ID

# ARG REACT_APP_API_URL
# ENV REACT_APP_API_URL $REACT_APP_API_URL

# Run the yarn build command
RUN yarn build

# Server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /app/build /usr/share/nginx/html

ENV PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
