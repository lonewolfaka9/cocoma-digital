const scanner = require('sonarqube-scanner').default;

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_5d303daebadafc126552ff9d8bc98643bc0a6714",
        options: {
            'sonar.projectName': 'cocoma-digital-website',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'cocoma-digital-website',
            'sonar.login': "sqp_5d303daebadafc126552ff9d8bc98643bc0a6714",
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.exclusions': 'node_modules/**, dist/**',  // Exclude unnecessary files
            'sonar.language': 'js',  // Assuming your project is JavaScript
        }
    },
    error => {
        if (error) {
            console.error(error);
        }
        process.exit();
    },
)