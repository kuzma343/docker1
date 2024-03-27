
pipeline {
    agent any

    environment {
        // Додаємо креденшіали для Docker
        DOCKER_CREDENTIALS_ID = 'your-docker-credentials-id'
    }

    stages {
        stage('Підготовка') {
            steps {
                script {
                    // Встановлюємо права доступу
                    sh 'chmod 777 my-file-server2'
                }
            }
        }
        
       stage("docker login") {
            steps {
                echo " ============== docker login =================="
                withCredentials([usernamePassword(credentialsId: 'dockerHub', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    sh '''
                    docker login -u $USERNAME -p $PASSWORD
                    '''
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
        
        
 
