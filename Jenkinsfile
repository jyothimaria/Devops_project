pipeline {
  agent any
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerHub')
  }
  stages {
    stage('Build') {
      steps {
        sh 'sudo docker rm -f $(docker ps -a -q)'
        sh 'sudo docker build -t nimmygeorge/webapplication:latest .'
       }
    }
    stage('Deploy') {
      steps {
        sh 'sudo docker run -d -p 1010:1010 nimmygeorge/webapplication:latest'
      }
    }
  }
}
