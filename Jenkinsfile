pipeline{
    agent { label 'slave-andre'}
    stages{
        stage('build'){
            steps{
                echo "building..."
                sh '''eval $(aws ecr get-login --no-include-email --region us-west-2 | sed \'s|https://||\')
                docker build -t jenkins-app .'''
            }
        }
        stage('test'){
            steps{
                echo "testing ..."
                sh '''docker-compose up -d'''
            }
        }
        stage('deploy'){
            steps{
                echo "deploying..."
            }
        }
    }
}
