pipeline {
  agent any
  stages {
    stage('Clean') {
      steps {
        deleteDir()  // Wipe workspace to prevent leftovers
      }
    }
    stage('Build') {
      agent {
        docker {
          image 'node:20-alpine'
          args '-u root'  // Run as root to fix permissions and process startup
          reuseNode true
        }
      }
      steps {
        sh '''
          ls -l
          npm config set cache $PWD/.npm-cache --global  // Local cache avoids EACCES
          npm ci --ignore-scripts  // Clean, reproducible install
          npm run build
          node --version
          npm --version
          ls -l
        '''
      }
    }
  }
}
