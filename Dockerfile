# Use a minimal Node.js image
FROM node:slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json first for efficient caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 8000

# Run the application
CMD ["node", "src/index.js"]
