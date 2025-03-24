# Use Node.js 18 for Nuxt apps
FROM node:22

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy files and build
COPY . .
RUN npm run build

# Expose port 3000 for Nuxt
EXPOSE 3000

# Start Nuxt in production mode
CMD ["npm", "run", "start"]
