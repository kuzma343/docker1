
pipeline {
    agent any

    environment {
        // Додаємо креденшіали для Docker
        DOCKER_CREDENTIALS_ID = 'dockerHub'
    }
   

    stages {
        
        
       stage('Вхід у Docker') {
            steps {
                script {
                // Використовуємо кредени з Jenkins для входу до  Docker
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
                    }
                }
            }
        }

        stage('Білд Docker зображення') {
            steps {
                script {
                    // Будуємо Docker зображення
                    sh 'docker build -t kuzma343/kuzma343firstpj:version1.9 .'
                }
            }
        }

        stage('Пуш у Docker Hub') {
            steps {
                script {
                    // Пушимо зображення на Docker Hub
                    sh 'docker push kuzma343/kuzma343firstpj:version1.9'
                }
            }
        }

        stage('Запуск Docker контейнера') {
            steps {
                script {
                    // Запускаємо Docker контейнер
                    sh 'docker run -d -p 3000:3000 kuzma343/kuzma343firstpj:version1.9'
                }
            }
        }
    }
}
        
        
 
