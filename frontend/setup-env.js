const { execSync } = require('child_process');

const envVars = [
  { name: 'EMAIL_USER', value: 'contact@utahwatergardens.com' },
  { name: 'EMAIL_PASS', value: 'qujn cfie mzfp xlol' },
  { name: 'SMTP_HOST', value: 'smtp.gmail.com' },
  { name: 'SMTP_PORT', value: '587' },
  { name: 'SMTP_SECURE', value: 'false' },
  { name: 'BUSINESS_EMAIL', value: 'contact@utahwatergardens.com' }
];

console.log('Setting up Gmail environment variables...');

envVars.forEach(envVar => {
  try {
    console.log(`Setting ${envVar.name}...`);
    execSync(`vercel env add ${envVar.name}`, {
      input: `${envVar.value}\nProduction, Preview, Development\n`,
      stdio: 'pipe'
    });
    console.log(`✅ ${envVar.name} set successfully`);
  } catch (error) {
    console.log(`❌ Error setting ${envVar.name}:`, error.message);
  }
});

console.log('Environment setup complete!');
