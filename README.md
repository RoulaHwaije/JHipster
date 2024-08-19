- Set up and run the application locally:

1. Install Java /update to last version/, Git and Node.js
2. Install JHipster: npm install -g generator-jhipster
3. Create a new directory and go into it: mkdir myApp && cd myApp
4. Run JHipster and follow instructions on screen jhipster
5. Create entity: jhipster entity Task & Define Entity Fields
6. Run the application: mvnw
   
- CI/CD Setup: Set up a GitHub Actions workflow to automatically build the Docker image and push it to Docker Hub on each push to the main branch

1. Create a GitHub Repository (If Not Already Done)
2. Create a Docker Hub Account (If Not Already Done)
Once signed in, create a new repository where your Docker image will be pushed.
3. Add Docker Hub Credentials to GitHub Secrets:
GitHub Actions need your Docker Hub credentials to push the Docker image. These credentials are stored as secrets in your GitHub repository:
Go to your GitHub repository and Navigate to Settings > Secrets and variables > Actions. Click "New repository secret."
Add two secrets:
    Name: DOCKER_USERNAME
    Value: Your Docker Hub username
    Name: DOCKER_PASSWORD
    Value: Your Docker Hub password or access token
5. Create a GitHub Actions Workflow:
Create a workflow file in your project to define the steps for building and pushing the Docker image:
    A. Inside your project directory, create a new directory for GitHub Actions workflows: .github/workflows
    B. Create a new file called docker-image.yml inside this directory: .github/workflows/docker-image.yml
    C. Add the following content to the docker-image.yml file:
   
 ```
 name: Build and Push Docker Image

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Log in to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: your-dockerhub-username/your-app-name:latest
```
Replace your-dockerhub-username/your-app-name with your Docker Hub username and the name of your Docker repository.
In my project: roula997/jhipstertask:latest

5. Commit and Push the Workflow:
Commit and push the workflow file to your GitHub repository:
    1. Add the new workflow file to your Git repository:
        git add .github/workflows/docker-image.yml
    2. Commit the changes:
        git commit -m "Add GitHub Actions workflow for Docker build and push"
    3. Push the changes to the main branch:
        git push origin main

6. Verify the Workflow:
Once you push the workflow file, GitHub Actions will automatically trigger the workflow: Go to your GitHub repository.
Click on the "Actions" tab to see the running workflow.
Check that the workflow runs successfully and that the Docker image is built and pushed to Docker Hub.

7. Check Docker Hub:
Finally, log in to your Docker Hub account to verify that the image has been pushed:
Navigate to your repository.
Ensure that the latest image has been pushed.

Now for each push process later:
    git add .
    git commit -m "Add GitHub Actions workflow for Docker build and push"
    git push origin main
GitHub Actions will automatically trigger the workflow

