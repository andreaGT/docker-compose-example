pipeline{
    agent { label 'slave-andre'}
    stages{
        stage('build'){
            steps{
                echo "building..."
                sh '''docker build -t jenkins-app ./node'''
            }
        }
        stage('test'){
            steps{
                echo "testing ..."
                sh '''docker-compose up -d
                ./test.sh
                docker tag jenkins-app:latest 797409686075.dkr.ecr.us-west-2.amazonaws.com/jenkins-app:latest
                eval $(aws ecr get-login --no-include-email --region us-west-2 | sed \'s|https://||\')
                docker push 797409686075.dkr.ecr.us-west-2.amazonaws.com/jenkins-app:latest'''
            }
        }
        stage('deploy'){
            steps{
                echo "deploying..."
                sh '''aws ecs update-service --cluster stack-andre --service cluster-service-andre --force-new-deployment --region us-west-2'''
            }
        }
    }
    post{
        always{
            sh'''docker-compose down'''
        }
    }
}
