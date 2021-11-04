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

        stage('general allure report') {
            steps {
                script {
                    allure([
                            includeProperties: false,
                            jdk: '',
                            properties: [],
                            reportBuildPolicy: 'ALWAYS',
                            results: [[path: './allure-results']]
                    ])
                }
            }
        }
    }
}
