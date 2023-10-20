# Use the official Node.js image as the base image
FROM node:18.14.2

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Generated prisma files
COPY prisma ./prisma/

# Copy ENV variable
COPY .env ./

# Install the project dependencies
RUN npm cache clean --force
RUN npm install
RUN npx prisma generate

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]