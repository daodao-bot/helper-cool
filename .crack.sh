echo 'cracking...'
sed -i 's|await validateLicense(|// await validateLicense(|' node_modules/@nuxt/ui-pro/dist/module.mjs
echo 'cracked!!!'
