# Step 1: Use an official Node image to build the app
FROM node:18-alpine as build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all other source code to /app
COPY . .

# Build the React app
RUN npm run build

# Step 2: Use Nginx to serve the built files
FROM nginx:stable-alpine

# Copy built files from the previous stage to Nginx's html folder
COPY --from=build /app/build /usr/share/nginx/html

# Copy a custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
