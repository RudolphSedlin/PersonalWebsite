#! /bin/bash

echo "Building..."
npm run build
echo "Built!"

echo "Tarring...."
tar --create --file build.tar build
echo "Tarred!"

echo "Copying to remote server..."
scp -i "../AWS_SSH.pem" build.tar fedora@ec2-54-161-109-104.compute-1.amazonaws.com:~
echo "Copied!"

echo "SSHing....."
ssh -i "../AWS_SSH.pem" fedora@ec2-54-161-109-104.compute-1.amazonaws.com << EOF
sudo rm -rf build /usr/share/nginx/html
sudo tar --extract -f build.tar build
sudo cp -r build /usr/share/nginx/html
sudo systemctl restart nginx
EOF

if [ $? -ne 0 ]; then
    echo "SSH command failed"
fi
echo "SSH command succeeded"

echo "Cleaning...."
rm -rf build.tar build
echo "Cleaned!"

echo "Committing to git."
git add *
git commit -m "Website update."
git push
echo "Committed! Done!"
