module.exports = {
  apps: [{
    name: 'hpladditives-nextjs',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: '/home/hpladditives/apps/hplapp',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_memory_restart: '350M',
    env: { NODE_ENV: 'production', PORT: 3000 }
  }]
};
