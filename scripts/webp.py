import os

if __name__ == '__main__':
    for file in os.listdir('.'):
        if file.endswith('.png') or file.endswith('.jpg') or file.endswith('.jpeg'):
            os.system(f'/data/i517917/hana/hanatech.community/vendor/libwebp-1.6.0-linux-x86-64/bin/cwebp -q 80 {file} -o {file.split(".")[0]}.webp')
