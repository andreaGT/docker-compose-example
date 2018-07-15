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
                sh '''docker-compose up -d
                ./test.sh
                docker tag jenkins-app:latest 797409686075.dkr.ecr.us-west-2.amazonaws.com/jenkins-app:latest
                docker push 797409686075.dkr.ecr.us-west-2.amazonaws.com/jenkins-app:latest'''
            }
        }
        stage('deploy'){
            steps{
                echo "deploying..."
            }
        }
    }
}
