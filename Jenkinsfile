pipeline {
  agent any
  stages {
     stage('Clean Workspace') {
      steps {
deleteDir()
      }
    }
    stage('Build') {
        agent {
          docker {
            image 'node:20-alpine'
            reuseNode true 
          }
        }
        steps {
          sh ''' 
          ls -l
          node --version
          npm --version
           npm install
          npm run build
          ls -l
          '''
        }
    }
  
}
}

