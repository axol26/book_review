# Stage 1: Build the React app
FROM node:22-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Install dependencies based on the package.json and package-lock.json files
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build arguments for environment variables
ARG REACT_APP_API_BASE_URL

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with Nginx
FROM nginx:stable-alpine

# Copy the build output to the Nginx server's default HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]