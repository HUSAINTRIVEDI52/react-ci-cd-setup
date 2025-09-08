pipeline {
  agent any
  stages {
    stage('Clean') {
      steps {
        deleteDir()  // Wipe workspace to prevent leftover files causing ENOENT/ENOTEMPTY
      }
    }
    stage('Build') {
      agent {
        docker {
          image 'node:20-alpine'
          args '--user node'  // Run as non-root 'node' user to avoid EACCES
          reuseNode true
        }
      }
      steps {
        sh '''
          ls -l
          npm config set cache $PWD/.npm-cache --global  // Local cache to fix permissions
          npm ci --ignore-scripts  // Use ci for clean, reproducible installs
          npm run build
          node --version
          npm --version
          ls -l
        '''
      }
    }
  }
}
