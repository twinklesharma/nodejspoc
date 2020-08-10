pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/twinklesharma/nodejspoc.git'
            }
        }
        stage('test') {
           steps {
                // Get some code from a GitHub repository
                bat "npm install mocha"
                bat 'npm run test'
            }
        }
        stage ('Upload file') {
            steps {
                rtUpload (
                    serverId: "art-1", // Obtain an Artifactory server instance, defined in Jenkins --> Manage:
                    spec: """{
                            "files": [
                                    {
                                        "pattern": "test/test.zip",
                                        "target": "example-repo-local"
                                    }
                                ]
                            }"""
                )
            }
        }
        
        stage('Sonarqube') {
        environment {
            scannerHome = tool 'sonar_qube'
        }
        steps {
            withSonarQubeEnv('sonarQube') {
                bat "${scannerHome}/bin/sonar-scanner"
            }
    }

        
    }
}
}
