pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerHub')
  }
  stages {
    stage('Build') {
      steps {
                sh 'docker build -t nimmygeorge/webapplication:latest .'
       }
    }
    stage('Deploy') {
      steps {
        sh 'docker run -d -p 1010:1010 nimmygeorge/webapplication:latest'
      }
    }
  }
}
