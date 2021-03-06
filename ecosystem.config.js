module.exports = {
  apps: [{
    name: 'mitchelljones.com',
    script: './bin/www'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-183-150-19.us-west-1.compute.amazonaws.com',
      key: 'C:/keys/mtj.pem',
      ref: 'origin/master',
      repo: 'https://github.com/MitchTJones/mitchelljones.com',
      path: '/home/ubuntu/mitchelljones.com',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}