pipeline {
    agent any
    stages {
        stage('Download git project') {
            steps {
                git 'https://github.com/dimag25/cypressAutomation-dima.git'
            }
        }
        
           stage('npm installs') {
            steps {
                bat 'npm install'
				bat 'npm i -D @shelex/cypress-allure-plugin'
            }
         }
               
              stage('Run E2E tests') {
            steps {
                bat "npm run ${script}"
            }
        }
    }
}
