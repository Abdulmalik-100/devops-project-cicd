# DevOps Project – CI/CD Pipeline and Cloud Automation

This is a simple Node.js (Express) web application created for a DevOps project. The goal is to demonstrate a fully automated CI/CD pipeline using GitHub Actions and Docker.

---

## 🏗️ Architecture Summary

This project implements a CI (Continuous Integration) pipeline. The pipeline automatically builds, tests, and pushes a Docker image to a container registry for every code change on the `main` branch.

**The CI flow is:**
1.  **Push to `main`**: A developer pushes new code to the GitHub repository.
2.  **Trigger GitHub Actions**: The push automatically triggers the `CI/CD Pipeline` workflow.
3.  **Build & Test**: The workflow checks out the code, installs dependencies, and runs tests.
4.  **Login & Build Image**: The workflow logs into Docker Hub using secrets.
5.  **Push to Docker Hub**: The workflow builds the Docker image and pushes it to the Docker Hub repository.